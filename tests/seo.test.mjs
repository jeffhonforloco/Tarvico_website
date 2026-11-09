import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import test from 'node:test'

const origin = 'https://www.tarvico.com'
const apex = 'https://tarvico.com'
const pagesAlias = 'https://tarvico-website.pages.dev'
const routes = [
  '/', '/about', '/careers', '/contact', '/engineering', '/founder', '/investors',
  '/legal', '/maeyen', '/newsroom', '/portfolio', '/privacy', '/products',
  '/research', '/terms', '/vision', '/vytre',
]
const exportDir = new URL('../tarvico-website/out/', import.meta.url)
const baseline = process.env.SEO_BASELINE_URL
const previewUrls = [process.env.SEO_BRANCH_PREVIEW_URL, process.env.SEO_COMMIT_PREVIEW_URL]

const canonicalUrl = path => origin + (path === '/' ? '' : path)
const readExport = filename => readFile(new URL(filename, exportDir), 'utf8')
const request = (url, options) => fetch(url, {
  redirect: 'manual',
  signal: AbortSignal.timeout(15000),
  ...options,
})

function metadata(html) {
  const tags = html.match(/<meta\s+[^>]+>/gi) ?? []
  const entries = tags.map(tag => [
    tag.match(/\b(?:name|property)="([^"]+)"/)?.[1],
    tag.match(/\bcontent="([^"]*)"/)?.[1],
  ])
  return {
    title: html.match(/<title>([^<]+)<\/title>/)?.[1],
    canonicals: [...html.matchAll(/<link rel="canonical" href="([^"]+)"/g)].map(match => match[1]),
    tags: Object.fromEntries(entries.filter(([name]) =>
      name === 'description' || name === 'robots' || /^(og|twitter):/.test(name ?? ''))),
  }
}

function checkRobots(robots) {
  const directives = robots.split(/\r?\n/).filter(line => !line.trimStart().startsWith('#'))
  assert.ok(directives.includes('User-Agent: *'))
  assert.ok(directives.includes('Allow: /'))
  assert.ok(directives.includes('Disallow: /api$'))
  assert.ok(directives.includes('Disallow: /api/'))
  assert.ok(!directives.some(line => /^disallow:\s*\/_next/i.test(line)))
  assert.ok(directives.includes(`Sitemap: ${origin}/sitemap.xml`))
}

test('export allows rendering assets and excludes the API from crawling', async () => {
  checkRobots(await readExport('robots.txt'))
  const html = await readExport('index.html')
  for (const pattern of [/\/_next\/static\/[^" ]+\.js/, /\/_next\/static\/[^" ]+\.css/, /\/_next\/static\/[^" ]+\.woff2/, /\/images\/[^" ,]+\.webp/]) {
    const asset = html.match(pattern)?.[0]
    assert.ok(asset, String(pattern))
    assert.ok((await readFile(new URL(asset.slice(1), exportDir))).length, asset)
  }
})

test('export sitemap contains exactly the 17 preferred URLs', async () => {
  const xml = await readExport('sitemap.xml')
  const urls = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map(match => match[1])
  assert.deepEqual(urls.sort(), routes.map(canonicalUrl).sort())
})

test('all exported pages preserve preferred canonicals and search and sharing metadata', async () => {
  const titles = new Set()
  const descriptions = new Set()
  for (const path of routes) {
    const html = await readExport(path === '/' ? 'index.html' : `${path.slice(1)}.html`)
    const actual = metadata(html)
    assert.deepEqual(actual.canonicals, [canonicalUrl(path)], path)
    assert.ok(actual.title, path)
    assert.equal(actual.tags.robots, 'index, follow', path)
    for (const name of ['description', 'og:title', 'og:description', 'og:url', 'og:image',
      'twitter:card', 'twitter:title', 'twitter:description', 'twitter:image']) {
      assert.ok(actual.tags[name], `${path} ${name}`)
    }
    titles.add(actual.title)
    descriptions.add(actual.tags.description)
    if (baseline) {
      const response = await request(new URL(path, baseline))
      assert.equal(response.status, 200, path)
      assert.deepEqual(actual, metadata(await response.text()), path)
    }
  }
  assert.equal(titles.size, routes.length)
  assert.equal(descriptions.size, routes.length)
})

async function checkRedirect(from, path) {
  const response = await request(from + path)
  assert.equal(response.status, 301, from + path)
  assert.equal(response.headers.get('location'), origin + path)
  const destination = await request(origin + path)
  assert.equal(destination.status, 200, origin + path)
  assert.equal(destination.headers.get('location'), null)
}

test('approved apex rule preserves the path and query, ends at www and excludes the API', {
  skip: process.env.SEO_VERIFY_APEX_REDIRECT !== '1',
}, async () => {
  await checkRedirect(apex, '/')
  await checkRedirect(apex, '/investors?source=seo%2Fcheck&tag=one&tag=two')
  for (const path of ['/api', '/api/contact']) {
    const response = await request(apex + path, { method: 'OPTIONS' })
    assert.ok(response.status < 300 || response.status >= 400, path)
    if (path === '/api/contact') assert.equal(response.status, 204)
  }
})

test('approved Pages production alias redirects to www', {
  skip: process.env.SEO_VERIFY_PAGES_REDIRECT !== '1',
}, async () => {
  await checkRedirect(pagesAlias, '/research?source=seo%2Fcheck')
})

test('branch and commit previews remain reachable and carry noindex', {
  skip: !previewUrls.every(Boolean),
}, async () => {
  for (const preview of previewUrls) {
    for (const path of ['/', '/research', '/investors']) {
      const response = await request(new URL(path, preview))
      assert.equal(response.status, 200, response.url)
      assert.equal(response.headers.get('location'), null)
      assert.match(response.headers.get('x-robots-tag') ?? '', /\bnoindex\b/i)
    }
    const robots = await request(new URL('/robots.txt', preview))
    assert.equal(robots.status, 200)
    checkRobots(await robots.text())
  }
})
