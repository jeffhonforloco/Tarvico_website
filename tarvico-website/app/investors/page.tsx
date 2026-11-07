'use client'

import { PageHero, SectionLabel, Button, Divider, FONT } from '@/components/ui'

// Verifiable execution signals only — no invented customers, revenue, metrics, or uptime.
// Kept consistent with the homepage evidence block.
const evidence = [
  { t: 'SireIQ — publicly available', d: 'A live, usable AI assistant for chat, content creation, and workflow automation.', href: 'https://sireiq.com', cta: 'sireiq.com ↗' },
  { t: 'Vytre AWOS — public beta', d: 'The AI Workforce Operating System is in public beta.', href: 'https://www.vytre.com', cta: 'vytre.com ↗' },
  { t: 'Vytre Core — open model', d: 'A workforce-operations model published openly on Hugging Face.', href: 'https://huggingface.co/tarvico/vytre_core', cta: 'View on Hugging Face ↗' },
  { t: 'Member, NVIDIA Developer Program', d: 'Participation in NVIDIA’s developer program. Not an investment, endorsement, or partnership.', href: undefined, cta: undefined },
]

const thesis = [
  { icon: '◈', title: 'A Focused Product Portfolio', desc: 'A selective set of AI-native products across workforce infrastructure, commerce trust, productivity, and search intelligence — diversified exposure with shared engineering and operational leverage.' },
  { icon: '◎', title: 'AI Leverage Compounds', desc: 'An AI-native architecture means each new capability compounds across every product — shared intelligence infrastructure, shared data advantages, and shared operational efficiency.' },
  { icon: '⬡', title: 'Long-Term Capital Discipline', desc: 'We build toward sustainable compounding rather than growth at all costs — disciplined unit economics, lean operations, and patient reinvestment.' },
  { icon: '◻', title: 'Build Internally', desc: 'Developing products in-house keeps cost per product low, product-market alignment tight, and ownership clear — without the premium of external acquisition.' },
  { icon: '△', title: 'Founder-Led, Institutionally Disciplined', desc: 'Founder-CEO alignment on long-term value creation, with governance designed to balance vision with operational accountability and financial discipline.' },
  { icon: '○', title: 'Scalable Operating Model', desc: 'AI-native operations let a small team build and support a growing set of products without linear cost scaling.' },
]

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        label="Investor Relations"
        title={<>Built for long-term <span className="editorial-emphasis">value creation.</span></>}
        subtitle="Tarvico is designed from first principles to compound value over decades — a portfolio approach to AI-native company building with institutional discipline and founder conviction."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 3rem' }}>

        <blockquote style={{
          fontFamily: FONT.serif,
          fontSize: 'clamp(1.5rem, 3vw, 2.5rem)',
          fontWeight: 500,
          lineHeight: 1.3,
          borderLeft: '2px solid var(--text)',
          paddingLeft: '2.5rem',
          margin: '2rem 0 6rem',
          color: 'var(--text)',
          letterSpacing: '-0.015em',
        }}>
          <span style={{ color: 'var(--text)', fontStyle: 'italic' }}>&ldquo;</span>We are not building for an exit. We are building an enduring technology institution — the kind of company that shapes industries and creates lasting value over decades.<span style={{ color: 'var(--text)', fontStyle: 'italic' }}>&rdquo;</span>
          <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.8rem', color: 'var(--text-2)', marginTop: '1.25rem', fontWeight: 500, letterSpacing: '0.02em' }}>
            — Jeff Honforloco, Founder & CEO · 2026
          </div>
        </blockquote>

        <SectionLabel>Execution to Date</SectionLabel>
        <p style={{ fontSize: '0.94rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 400, marginTop: '1rem', marginBottom: '2rem', maxWidth: 720 }}>
          We believe the clearest signal of a company&apos;s potential is what it has actually shipped. The following are verifiable — live products, a public beta, and an openly published model — not projections or forecasts.
        </p>
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.25rem', marginTop: '0.5rem', marginBottom: '6rem' }}>
          {evidence.map(e => (
            <div key={e.t} style={{
              background: 'var(--bg-card)', padding: '2rem',
              border: '1px solid var(--border-w)', borderTop: '2px solid var(--text)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
              display: 'flex', flexDirection: 'column',
            }}>
              <div style={{ fontSize: '0.95rem', color: 'var(--text)', fontWeight: 600, marginBottom: '0.5rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>{e.t}</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 400, flex: 1 }}>{e.d}</p>
              {e.href && (
                <a href={e.href} target="_blank" rel="noopener noreferrer" style={{ marginTop: '1rem', fontSize: '0.72rem', letterSpacing: '0.04em', color: 'var(--text)', fontWeight: 600, textDecoration: 'none' }}>{e.cta}</a>
              )}
            </div>
          ))}
        </div>

        <Divider />

        <div style={{ padding: '6rem 0' }}>
          <SectionLabel>Strategic Thesis</SectionLabel>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            fontWeight: 700,
            color: 'var(--text)',
            maxWidth: 560,
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
            marginBottom: '3rem',
          }}>
            Why Tarvico is built for this moment.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem' }}>
            {thesis.map(t => (
              <div key={t.title} style={{
                background: 'var(--bg-card)', padding: '2.5rem',
                border: '1px solid var(--border-w)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
                transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent-line)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-w)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >
                <div style={{ fontSize: '1.3rem', color: 'var(--text)', marginBottom: '1.5rem', opacity: 0.8 }}>{t.icon}</div>
                <div style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '0.75rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>{t.title}</div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 400 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div style={{ padding: '6rem 0' }}>
          <SectionLabel>Capital Philosophy</SectionLabel>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1rem', letterSpacing: '-0.03em' }}>How We Think About Capital</h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 400, marginBottom: '1.5rem' }}>
                The priorities that guide how we invest in the business, in order of emphasis. These reflect our operating philosophy, not a specific allocation of any committed or raised capital.
              </p>
              {[
                { label: 'Product Development', desc: 'Our largest commitment — engineering, AI infrastructure, and the product teams building our core products.' },
                { label: 'Market Development', desc: 'Go-to-market execution, distribution, and the infrastructure that brings products to customers.' },
                { label: 'Operational Resilience', desc: 'Disciplined runway, lean operations, and the optionality to move deliberately rather than reactively.' },
                { label: 'Research & New Products', desc: 'Measured investment in validating the next generation of products before they scale.' },
              ].map((item, i) => (
                <div key={item.label} style={{ display: 'flex', gap: '1.5rem', padding: '1.25rem 0', borderBottom: '1px solid var(--border-w)' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--text)', minWidth: 52, lineHeight: 1.2, opacity: 0.85 }}>{String(i + 1).padStart(2, '0')}</div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text)', fontWeight: 600, marginBottom: '0.25rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{item.label}</div>
                    <div style={{ fontSize: '0.78rem', color: 'var(--text-2)', fontWeight: 400, lineHeight: 1.55 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ border: '1px solid var(--border-w)', padding: '2.5rem', background: 'var(--bg-card)', borderTop: '2px solid var(--text)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.85rem', fontWeight: 600 }}>Investor Deck</div>
                <div style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '0.5rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>Tarvico Inc. — Strategic Overview</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginBottom: '1.5rem', fontWeight: 400 }}>2026 Edition · Confidential</div>
                <Button href="mailto:investors@tarvico.com" variant="secondary">Request Access →</Button>
              </div>
              <div style={{ border: '1px solid var(--border-w)', padding: '2.5rem', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.85rem', fontWeight: 600 }}>Founder Letter</div>
                <div style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '0.5rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>Building for the Next Era</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-3)', marginBottom: '1.5rem', fontWeight: 400 }}>Jeff Honforloco · 2026</div>
                <Button href="/vision" variant="secondary">Read Letter →</Button>
              </div>
              <div style={{ border: '1px solid var(--accent-line)', padding: '2rem', background: 'var(--accent-soft)', borderRadius: 'var(--radius-lg)' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.75rem', fontWeight: 600 }}>Investor Inquiries</div>
                <a href="mailto:investors@tarvico.com" style={{
                  fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 600, letterSpacing: '-0.02em',
                  color: 'var(--text)', textDecoration: 'none', display: 'block',
                }}>investors@tarvico.com</a>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        <div style={{ padding: '6rem 0' }}>
          <SectionLabel>Governance & Transparency</SectionLabel>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--text)', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>Our Commitment</h3>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 400, marginBottom: '1.25rem' }}>
                We are committed to building trust with our investors through transparency, consistency, and long-term alignment. Our governance philosophy is inspired by the most enduring technology companies — strong founder vision combined with institutional accountability.
              </p>
              <p style={{ fontSize: '0.94rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 400 }}>
                We believe investors should understand not just our financial metrics, but our strategic thesis, our principles, and the long-term vision driving every decision. Annual founder letters, portfolio updates, and strategic communications are part of our ongoing commitment.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Founder Alignment', desc: 'Founder-CEO retains majority ownership and long-term vision alignment.' },
                { label: 'Annual Transparency', desc: 'Annual founder letters, portfolio reviews, and strategic updates for all investors.' },
                { label: 'Capital Discipline', desc: 'Sustainable burn rates, milestone-based investment, no growth-at-all-costs.' },
                { label: 'Long-Term Ownership', desc: 'Built to hold, not to sell. Our products are designed to compound over decades.' },
              ].map(item => (
                <div key={item.label} style={{
                  padding: '1.4rem 1.6rem', background: 'var(--bg-card)',
                  border: '1px solid var(--border-w)', borderLeftWidth: 2, borderLeftColor: 'var(--accent-line)',
                  borderRadius: 'var(--radius)', transition: 'border-color 0.2s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--text)'; e.currentTarget.style.transform = 'translateX(4px)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'var(--accent-line)'; e.currentTarget.style.transform = 'translateX(0)' }}
                >
                  <div style={{ fontSize: '0.92rem', color: 'var(--text)', fontWeight: 600, marginBottom: '0.3rem', fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{item.label}</div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-2)', fontWeight: 400 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
