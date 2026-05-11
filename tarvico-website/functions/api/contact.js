/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Required environment variables (set in Cloudflare Pages → Settings → Variables):
 *   RESEND_API_KEY  — API key from resend.com (free tier is sufficient)
 *   TO_EMAIL        — destination address, e.g. hello@tarvico.com (optional, falls back to default)
 *
 * The "from" address must be a domain you have verified in your Resend account.
 * Update FROM_EMAIL below to match your verified sending domain.
 */

const FROM_EMAIL = 'Tarvico Contact <noreply@tarvico.com>'

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function buildEmailHtml({ name, email, type, message }) {
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br />')
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="font-family: Arial, sans-serif; color: #222; max-width: 600px; margin: 0 auto; padding: 2rem;">
  <div style="border-left: 3px solid #C9A447; padding-left: 1rem; margin-bottom: 2rem;">
    <p style="margin: 0; font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: #888;">
      Tarvico Contact Form
    </p>
    <h1 style="margin: 0.25rem 0 0; font-size: 1.3rem; font-weight: 400;">
      New ${escapeHtml(type || 'General')} Inquiry
    </h1>
  </div>

  <table style="width: 100%; border-collapse: collapse; margin-bottom: 1.5rem;">
    <tr>
      <td style="padding: 0.5rem 0; color: #888; font-size: 0.85rem; width: 100px;">Name</td>
      <td style="padding: 0.5rem 0; font-size: 0.9rem;">${escapeHtml(name)}</td>
    </tr>
    <tr>
      <td style="padding: 0.5rem 0; color: #888; font-size: 0.85rem;">Email</td>
      <td style="padding: 0.5rem 0; font-size: 0.9rem;">
        <a href="mailto:${escapeHtml(email)}" style="color: #C9A447;">${escapeHtml(email)}</a>
      </td>
    </tr>
    <tr>
      <td style="padding: 0.5rem 0; color: #888; font-size: 0.85rem;">Type</td>
      <td style="padding: 0.5rem 0; font-size: 0.9rem;">${escapeHtml(type || 'Not specified')}</td>
    </tr>
  </table>

  <div style="background: #f7f7f5; padding: 1.25rem; border-radius: 2px; font-size: 0.9rem; line-height: 1.7;">
    ${safeMessage}
  </div>

  <p style="margin-top: 2rem; font-size: 0.75rem; color: #aaa;">
    Sent via tarvico.com — reply directly to this email to respond to ${escapeHtml(name)}.
  </p>
</body>
</html>`
}

export async function onRequestPost(context) {
  const { request, env } = context

  const origin = request.headers.get('origin') || ''
  const corsHeaders = {
    'Access-Control-Allow-Origin': origin,
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  }

  let body
  try {
    body = await request.json()
  } catch {
    return Response.json(
      { error: 'Invalid JSON body.' },
      { status: 400, headers: corsHeaders }
    )
  }

  const { name, email, type, message } = body || {}

  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return Response.json(
      { error: 'Name, email, and message are required.' },
      { status: 400, headers: corsHeaders }
    )
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    return Response.json(
      { error: 'Invalid email address.' },
      { status: 400, headers: corsHeaders }
    )
  }

  const apiKey = env?.RESEND_API_KEY
  if (!apiKey) {
    console.error('RESEND_API_KEY environment variable is not set.')
    return Response.json(
      { error: 'Email service is not configured. Please contact us directly.' },
      { status: 503, headers: corsHeaders }
    )
  }

  const toEmail = env?.TO_EMAIL || 'hello@tarvico.com'

  const resendPayload = {
    from: FROM_EMAIL,
    to: [toEmail],
    reply_to: email.trim(),
    subject: `[${type || 'General'}] Inquiry from ${name.trim()} — Tarvico`,
    html: buildEmailHtml({ name: name.trim(), email: email.trim(), type, message: message.trim() }),
  }

  let resendRes
  try {
    resendRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify(resendPayload),
    })
  } catch (err) {
    console.error('Resend fetch error:', err)
    return Response.json(
      { error: 'Failed to reach email service. Please try again.' },
      { status: 502, headers: corsHeaders }
    )
  }

  if (!resendRes.ok) {
    const detail = await resendRes.text().catch(() => '')
    console.error('Resend error response:', resendRes.status, detail)
    return Response.json(
      { error: 'Failed to send email. Please try again or contact us directly.' },
      { status: 502, headers: corsHeaders }
    )
  }

  return Response.json({ success: true }, { status: 200, headers: corsHeaders })
}

export async function onRequestOptions(context) {
  const origin = context.request.headers.get('origin') || ''
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': origin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  })
}
