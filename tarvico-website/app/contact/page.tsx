'use client'

import { useState } from 'react'
import { PageHero, SectionLabel, Button } from '@/components/ui'

const channels = [
  { label: 'Investor Inquiries', email: 'investors@tarvico.com', desc: 'For investment discussions, strategic partnerships, and financial inquiries.' },
  { label: 'Enterprise & Partnerships', email: 'partnerships@tarvico.com', desc: 'For enterprise access to Vytre AWOS and portfolio product partnerships.' },
  { label: 'Press & Media', email: 'press@tarvico.com', desc: 'For media inquiries, press requests, and interview coordination.' },
  { label: 'Careers', email: 'careers@tarvico.com', desc: 'Interested in joining the team? Send your background and what you\'d like to build.' },
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <>
      <PageHero
        label="Contact"
        title={<>Let's build something<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>together.</em></>}
        subtitle="Whether you're an investor, potential partner, future team member, or enterprise customer — we'd like to hear from you."
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 3rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start' }}>

          {/* Left — channels */}
          <div>
            {channels.map((c, i) => (
              <div key={c.label} style={{
                marginBottom: '2.5rem',
                paddingBottom: '2.5rem',
                borderBottom: i < channels.length - 1 ? '1px solid var(--border-w)' : 'none',
              }}>
                <div style={{ fontSize: '0.72rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '0.6rem' }}>{c.label}</div>
                <a href={`mailto:${c.email}`} style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: '1.2rem',
                  fontWeight: 300,
                  color: 'var(--gold)',
                  textDecoration: 'none',
                  display: 'block',
                  marginBottom: '0.4rem',
                }}>
                  {c.email}
                </a>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-2)', fontWeight: 300 }}>{c.desc}</div>
              </div>
            ))}
          </div>

          {/* Right — form */}
          <div>
            <div style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '2rem' }}>
              Send a Message
            </div>

            {sent ? (
              <div style={{ border: '1px solid var(--gold-border)', padding: '2.5rem', background: 'var(--bg-raised)', textAlign: 'center' }}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.8rem', fontWeight: 300, color: 'var(--text)', marginBottom: '1rem' }}>
                  Message Received
                </div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', fontWeight: 300, lineHeight: 1.65 }}>
                  Thank you for reaching out. We will respond within 2 business days.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {[
                  { label: 'Full Name', key: 'name', type: 'text', placeholder: 'Your name' },
                  { label: 'Email Address', key: 'email', type: 'email', placeholder: 'your@email.com' },
                ].map(field => (
                  <div key={field.key} style={{ marginBottom: '1.5rem' }}>
                    <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '0.5rem' }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={form[field.key as keyof typeof form]}
                      onChange={e => setForm(f => ({ ...f, [field.key]: e.target.value }))}
                      style={{
                        width: '100%',
                        background: 'var(--bg-card)',
                        border: '1px solid var(--border-w)',
                        color: 'var(--text)',
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: '0.88rem',
                        padding: '0.85rem 1rem',
                        outline: 'none',
                        fontWeight: 300,
                        transition: 'border-color 0.2s',
                      }}
                      onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--border-w)')}
                    />
                  </div>
                ))}

                <div style={{ marginBottom: '1.5rem' }}>
                  <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '0.5rem' }}>
                    Inquiry Type
                  </label>
                  <select
                    value={form.type}
                    onChange={e => setForm(f => ({ ...f, type: e.target.value }))}
                    style={{
                      width: '100%',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-w)',
                      color: form.type ? 'var(--text)' : 'var(--text-2)',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.88rem',
                      padding: '0.85rem 1rem',
                      outline: 'none',
                      fontWeight: 300,
                      cursor: 'pointer',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border-w)')}
                  >
                    <option value="">Select inquiry type</option>
                    <option value="investor">Investor Relations</option>
                    <option value="partnership">Enterprise Partnership</option>
                    <option value="press">Press & Media</option>
                    <option value="careers">Careers</option>
                    <option value="general">General Inquiry</option>
                  </select>
                </div>

                <div style={{ marginBottom: '2rem' }}>
                  <label style={{ display: 'block', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '0.5rem' }}>
                    Message
                  </label>
                  <textarea
                    placeholder="Tell us about your interest in Tarvico..."
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    rows={5}
                    style={{
                      width: '100%',
                      background: 'var(--bg-card)',
                      border: '1px solid var(--border-w)',
                      color: 'var(--text)',
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: '0.88rem',
                      padding: '0.85rem 1rem',
                      outline: 'none',
                      fontWeight: 300,
                      resize: 'vertical',
                      transition: 'border-color 0.2s',
                    }}
                    onFocus={e => (e.target.style.borderColor = 'var(--gold)')}
                    onBlur={e => (e.target.style.borderColor = 'var(--border-w)')}
                  />
                </div>

                <Button variant="primary" style={{ alignSelf: 'flex-start' }}>
                  Send Message →
                </Button>
              </form>
            )}
          </div>

        </div>
      </div>
    </>
  )
}
