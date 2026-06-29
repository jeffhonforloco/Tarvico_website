'use client'

import { useState } from 'react'
import { PageHero, SectionLabel, Button } from '@/components/ui'

const channels = [
  { label: 'Investor Inquiries', email: 'investors@tarvico.com', desc: 'For investment discussions, strategic partnerships, and financial inquiries.', color: 'var(--gold)', border: 'var(--gold-border)', bg: 'var(--gold-glow)' },
  { label: 'Enterprise & Partnerships', email: 'partnerships@tarvico.com', desc: 'For enterprise access to Vytre AWOS and portfolio product partnerships.', color: 'var(--blue)', border: 'var(--blue-border)', bg: 'var(--blue-glow)' },
  { label: 'Press & Media', email: 'press@tarvico.com', desc: 'For media inquiries, press requests, and interview coordination.', color: 'var(--text-2)', border: 'var(--border-w)', bg: 'transparent' },
  { label: 'Careers', email: 'careers@tarvico.com', desc: "Interested in joining the team? Send your background and what you'd like to build.", color: 'var(--text-2)', border: 'var(--border-w)', bg: 'transparent' },
]

const types = ['Investor Inquiry', 'Enterprise Partnership', 'Press & Media', 'Career Inquiry', 'General']

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) {
        setError(data.error || 'Something went wrong. Please try again.')
      } else {
        setSent(true)
      }
    } catch {
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSubmitting(false)
    }
  }

  const inputStyle = {
    width: '100%',
    background: 'var(--bg-card)',
    border: '1px solid var(--border-w)',
    color: 'var(--text)',
    fontSize: '0.88rem',
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 300,
    padding: '0.9rem 1rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    appearance: 'none' as const,
  }

  return (
    <>
      <PageHero
        label="Contact"
        title={<>Let's build something<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>significant.</em></>}
        subtitle="Whether you're an investor, potential partner, future team member, or enterprise customer — we'd like to hear from you."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 3rem' }}>
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          <div>
            <SectionLabel>Direct Channels</SectionLabel>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-w)' }}>
              {channels.map(c => (
                <div key={c.label} style={{
                  padding: '2rem',
                  background: c.bg,
                  border: `1px solid ${c.border}`,
                  borderColor: c.border,
                  transition: 'background 0.2s',
                }}>
                  <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.5rem', fontWeight: 500 }}>{c.label}</div>
                  <a href={`mailto:${c.email}`} style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: '1.2rem',
                    fontWeight: 300,
                    color: c.color,
                    textDecoration: 'none',
                    display: 'block',
                    marginBottom: '0.4rem',
                    transition: 'opacity 0.2s',
                  }}>
                    {c.email}
                  </a>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-2)', fontWeight: 300 }}>{c.desc}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: '3rem', padding: '2rem', border: '1px solid var(--border-w)', background: 'var(--bg-card)' }}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '1rem', fontWeight: 500 }}>Headquarters</div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 300 }}>
                Tarvico Inc.<br />
                8 The Green, #5275<br />
                Dover, DE 19901<br />
                United States<br />
                <span style={{ color: 'var(--text-3)', fontSize: '0.75rem' }}>Distributed team · Global operations</span>
              </div>
            </div>
          </div>

          <div>
            <SectionLabel>Send a Message</SectionLabel>

            {sent ? (
              <div style={{ padding: '3rem', border: '1px solid var(--emerald-border)', background: 'var(--emerald-glow)', textAlign: 'center' }}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 300, color: 'var(--text)', marginBottom: '1rem' }}>Message Received</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 300 }}>
                  Thank you for reaching out. A member of the Tarvico team will review your message and respond within 2–3 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.5rem', fontWeight: 500 }}>Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                      style={inputStyle}
                      placeholder="Your name"
                      onFocus={e => { e.target.style.borderColor = 'var(--gold-border)' }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border-w)' }}
                    />
                  </div>
                  <div>
                    <label style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.5rem', fontWeight: 500 }}>Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                      style={inputStyle}
                      placeholder="your@email.com"
                      onFocus={e => { e.target.style.borderColor = 'var(--gold-border)' }}
                      onBlur={e => { e.target.style.borderColor = 'var(--border-w)' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.5rem', fontWeight: 500 }}>Inquiry Type</label>
                  <select
                    value={form.type}
                    onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                    style={{ ...inputStyle, cursor: 'pointer' }}
                    onFocus={e => { e.target.style.borderColor = 'var(--gold-border)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border-w)' }}
                  >
                    <option value="" style={{ background: 'var(--bg-card)', color: 'var(--text-3)' }}>Select inquiry type</option>
                    {types.map(t => (
                      <option key={t} value={t} style={{ background: 'var(--bg-card)', color: 'var(--text)' }}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.5rem', fontWeight: 500 }}>Message</label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'none' as const, lineHeight: 1.7 }}
                    placeholder="Tell us about your inquiry..."
                    onFocus={e => { e.target.style.borderColor = 'var(--gold-border)' }}
                    onBlur={e => { e.target.style.borderColor = 'var(--border-w)' }}
                  />
                </div>

                {error && (
                  <div style={{ padding: '0.85rem 1rem', border: '1px solid rgba(220,80,80,0.25)', background: 'rgba(220,80,80,0.06)', fontSize: '0.8rem', color: '#e06060', lineHeight: 1.6 }}>
                    {error}
                  </div>
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                  <span style={{ fontSize: '0.68rem', color: 'var(--text-3)', fontWeight: 300 }}>
                    Typically replied within 2–3 business days.
                  </span>
                  <Button type="submit" variant="primary" disabled={submitting}>
                    {submitting ? 'Sending…' : 'Send Message →'}
                  </Button>
                </div>
              </form>
            )}
          </div>

        </div>
      </div>
    </>
  )
}
