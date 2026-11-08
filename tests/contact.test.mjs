import assert from 'node:assert/strict'
import test from 'node:test'
import { onRequestOptions, onRequestPost } from '../functions/api/contact.js'

const url = 'https://www.tarvico.com/api/contact'
const submission = { name: 'Test <Sender>', email: 'test@example.com', type: 'General', message: 'One <two>\nThree' }

function post(body, env = {}) {
  const request = new Request(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: new URL(url).origin },
    body,
  })
  return onRequestPost({ request, env })
}

test('root Pages route rejects invalid submissions before contacting the provider', async t => {
  const fetch = t.mock.method(globalThis, 'fetch', () => { throw new Error('Unexpected outbound request') })
  for (const body of ['{', '{}', '{"name":3,"email":true,"message":[]}', JSON.stringify({ ...submission, email: 'invalid' }), JSON.stringify({ ...submission, type: [] })]) {
    assert.equal((await post(body)).status, 400)
  }
  assert.equal((await post(JSON.stringify(submission))).status, 503)
  assert.equal(fetch.mock.callCount(), 0)
  const preflight = await onRequestOptions({ request: new Request(url, { method: 'OPTIONS' }) })
  assert.equal(preflight.status, 204)
})

test('valid submissions use the existing provider and require an acceptance receipt', async t => {
  const logs = t.mock.method(console, 'error', () => {})
  const fakeKey = 'local-test-only'
  const env = { RESEND_API_KEY: fakeKey, TO_EMAIL: 'inbox@example.com' }
  const fetch = t.mock.method(globalThis, 'fetch', async (endpoint, request) => {
    assert.equal(endpoint, 'https://api.resend.com/emails')
    assert.equal(request.method, 'POST')
    assert.equal(request.headers.Authorization, `Bearer ${fakeKey}`)
    const payload = JSON.parse(request.body)
    assert.deepEqual(payload.to, ['inbox@example.com'])
    assert.equal(payload.reply_to, submission.email)
    assert.match(payload.html, /One &lt;two&gt;<br \/>Three/)
    return Response.json({ id: 'local-test-receipt' })
  })

  const accepted = await post(JSON.stringify(submission), env)
  assert.equal(accepted.status, 200)
  assert.deepEqual(await accepted.json(), { success: true })
  assert.equal(fetch.mock.callCount(), 1)

  for (const providerResponse of [
    Response.json({ id: '' }),
    new Response('unexpected response', { status: 200 }),
    Response.json({ error: 'Sensitive provider diagnostic' }, { status: 403 }),
  ]) {
    fetch.mock.mockImplementationOnce(async () => providerResponse)
    const failure = await post(JSON.stringify(submission), env)
    assert.equal(failure.status, 502)
    assert.match((await failure.json()).error, /Please try again/)
  }
  fetch.mock.mockImplementationOnce(async () => { throw new Error('Sensitive exception') })
  assert.equal((await post(JSON.stringify(submission), env)).status, 502)
  assert.equal(logs.mock.callCount(), 4)
  assert.doesNotMatch(JSON.stringify(logs.mock.calls.map(call => call.arguments)), /Sensitive|test@example\.com|local-test-only/)
})
