'use client'

import { companyFaq } from '@/lib/company-faq'
import Link from 'next/link'
import { CSSProperties } from 'react'
import { PageHero, MaturityTag, Eyebrow, Button, FONT } from '@/components/ui'
import { publicBusinesses } from '@/lib/businesses'

const timeline = [
  { year: '2025', title: 'Early Product Work', desc: 'Initial product development begins. SireIQ is built and becomes publicly available as an AI assistant, and SEOAgentPro enters active development.', accent: false },
  { year: '2026', title: 'Tarvico Inc. Founded', desc: 'Tarvico Inc. is established as a privately held U.S. technology company, incorporated in Delaware. Its initial products are defined, and development of the flagship product begins in earnest.', accent: true },
  { year: '2026', title: 'Vytre AWOS Enters Public Beta', desc: 'The flagship AI Workforce Operating System reaches public beta. Architecture design, core agent orchestration engine, and enterprise integration framework are underway.', accent: true },
  { year: '2026+', title: 'Launch · Growth Phase', desc: 'Vytre AWOS targets broader enterprise availability. Products across the portfolio advance from early development toward market entry and scale.', accent: false },
]

const mission = [
  'Tarvico was founded on a simple thesis: the next wave of transformative companies will be built by small, focused teams who combine creativity with technological leverage to accomplish what once required enormous organizations.',
  'We build products and platforms where intelligence is the fundamental operating layer — not a feature bolted on, but the architecture underneath. Every workflow, every product decision, every company we launch is designed around this principle.',
  'Our ambition is to become a diversified, enduring technology company that develops products, platforms, and tools that people and businesses genuinely rely on — built for the long term, designed with care, operated with discipline.',
]

const principles = [
  { t: 'Visionary but disciplined', d: 'We think decades ahead but execute with quarterly precision. Vision without discipline is speculation.' },
  { t: 'Human-centered technology', d: 'Technology should genuinely improve how people work and live — not merely impress them. Every product is evaluated on real human value.' },
  { t: 'Creativity meets systems thinking', d: 'Our founder comes from a creative background. We believe the best technology products combine aesthetic intelligence with systems rigor.' },
  { t: 'Accessible innovation', d: 'The future belongs to builders of all backgrounds. We are proof that ambition and persistence can open doors that once felt impossible.' },
]

const WRAP: CSSProperties = { maxWidth: 1200, margin: '0 auto', padding: '7rem max(1.5rem, 4vw)' }

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Tarvico"
        subtitle="Tarvico Inc. is a privately held technology company incorporated in Delaware. It builds and operates AI and digital products."
      />

      {/* 01 · MISSION — mineral editorial band */}
      <section className="keystone-paper">
        <div className="mob-p" style={WRAP}>
          <Eyebrow label="Mission & Philosophy" />
          <blockquote style={{ fontFamily: FONT.serif, fontWeight: 500, fontSize: 'clamp(1.6rem, 3.4vw, 2.7rem)', lineHeight: 1.26, letterSpacing: '-0.015em', color: 'var(--paper-ink)', maxWidth: 940, marginBottom: '4rem', textWrap: 'balance' }}>
            <span style={{ color: 'var(--paper-ink)', fontStyle: 'italic' }}>“</span>We exist to build companies and systems that give people and organizations more leverage over their work, creativity, and potential — at any scale, in any domain.<span style={{ color: 'var(--paper-ink)', fontStyle: 'italic' }}>”</span>
          </blockquote>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4.5rem', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.4rem' }}>
              {mission.map((p, i) => (
                <p key={i} style={{ fontSize: '1.02rem', color: 'var(--paper-muted)', lineHeight: 1.75, maxWidth: '56ch' }}>{p}</p>
              ))}
            </div>
            <div>
              {principles.map((p, i) => (
                <div key={p.t} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.4rem', padding: '1.5rem 0', borderTop: '1px solid var(--paper-line)' }}>
                  <span style={{ fontFamily: FONT.mono, fontSize: '0.7rem', letterSpacing: '0.1em', color: 'var(--paper-ink)', paddingTop: 4 }}>{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <div style={{ fontFamily: FONT.display, fontSize: '1.02rem', fontWeight: 700, color: 'var(--paper-ink)', letterSpacing: '-0.01em', marginBottom: '0.35rem' }}>{p.t}</div>
                    <div style={{ fontSize: '0.88rem', color: 'var(--paper-muted)', lineHeight: 1.6 }}>{p.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 02 · LEADERSHIP — graphite */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={WRAP}>
          <Eyebrow label="Leadership" />
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <div style={{ border: '1px solid var(--border-w)', background: 'var(--bg-card)', borderTop: '2px solid var(--text)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: 60, height: 60, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT.display, fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1.5rem' }}>JH</div>
              <div style={{ fontFamily: FONT.display, fontSize: '1.15rem', color: 'var(--text)', marginBottom: '0.35rem', fontWeight: 700, letterSpacing: '-0.02em' }}>Jeff Yèmalín Bienvenu Honforloco</div>
              <div style={{ fontFamily: FONT.mono, fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text)', marginBottom: '1rem', fontWeight: 500 }}>Founder &amp; Chief Executive Officer</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
                Founder of Tarvico Inc. Began as a professional photographer, developed a passion for software, AI, and systems thinking. Self-taught builder who believes creative thinking and technological persistence can open any door. Leads vision, strategy, and product direction across the entire portfolio.
              </p>
              <Link href="/founder" style={{ display: 'inline-block', marginTop: '1.5rem', fontFamily: FONT.mono, fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text)', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid var(--accent-line)', paddingBottom: 4 }}>
                Full founder profile →
              </Link>
            </div>
            <blockquote style={{ fontFamily: FONT.serif, fontWeight: 500, fontSize: 'clamp(1.4rem, 2.6vw, 2.1rem)', lineHeight: 1.32, color: 'var(--text)', letterSpacing: '-0.015em' }}>
              <span style={{ color: 'var(--text)', fontStyle: 'italic' }}>“</span>Creative thinking and technological persistence can open any door.<span style={{ color: 'var(--text)', fontStyle: 'italic' }}>”</span>
            </blockquote>
          </div>
        </div>
      </section>

      {/* 03 · TIMELINE — mineral editorial band */}
      <section className="keystone-paper">
        <div className="mob-p" style={WRAP}>
          <Eyebrow label="Company Timeline" />
          <div style={{ borderTop: '1px solid var(--paper-line)' }}>
            {timeline.map((item, i) => (
              <div key={i} className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '150px 1fr', gap: '2.5rem', padding: '2.25rem 0', borderBottom: '1px solid var(--paper-line)', alignItems: 'start' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                  <span style={{ fontFamily: FONT.display, fontSize: '1.4rem', fontWeight: 800, letterSpacing: '-0.02em', color: item.accent ? 'var(--paper-ink)' : 'var(--paper-muted)' }}>{item.year}</span>
                  {item.accent && <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--paper-ink)' }} />}
                </div>
                <div>
                  <div style={{ fontFamily: FONT.display, fontSize: '1.05rem', color: 'var(--paper-ink)', marginBottom: '0.5rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{item.title}</div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--paper-muted)', lineHeight: 1.65, maxWidth: '62ch' }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 04 · BUSINESSES — graphite */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={WRAP}>
          <Eyebrow label="Businesses We Build & Operate" />
          <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.75, maxWidth: 620, marginBottom: '2.5rem' }}>
            Tarvico Inc. is the U.S. parent company, incorporated in Delaware. It builds and operates the products and businesses below — these are products and initiatives Tarvico develops, not separately incorporated public companies. Each carries an honest maturity label.
          </p>
          <div style={{ border: '1px solid var(--border-w)', background: 'var(--bg-card)', overflow: 'hidden', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ padding: '1.4rem 2rem', borderBottom: '1px solid var(--border-w)', background: 'var(--bg-raised)', display: 'flex', alignItems: 'center', gap: '0.75rem', flexWrap: 'wrap' }}>
              <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--text)' }} />
              <span style={{ fontFamily: FONT.display, fontSize: '0.95rem', color: 'var(--text)', fontWeight: 700, letterSpacing: '-0.01em' }}>Tarvico Inc.</span>
              <span style={{ fontFamily: FONT.mono, fontSize: '0.56rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)', marginLeft: 'auto' }}>U.S. Parent Company · Delaware</span>
            </div>
            {publicBusinesses().map((b, i, arr) => (
              <div key={b.name} style={{ padding: '1.3rem 2rem 1.3rem 3rem', borderBottom: i < arr.length - 1 ? '1px solid var(--border-w)' : 'none', display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap', transition: 'background 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-raised)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}>
                <span style={{ fontFamily: FONT.mono, fontSize: '0.7rem', color: 'var(--text)' }}>{String(i + 1).padStart(2, '0')}</span>
                {b.internal
                  ? <Link href={b.internal} style={{ fontFamily: FONT.display, fontSize: '1rem', color: 'var(--text)', fontWeight: 700, textDecoration: 'none', letterSpacing: '-0.01em' }}>{b.name}</Link>
                  : <span style={{ fontFamily: FONT.display, fontSize: '1rem', color: 'var(--text)', fontWeight: 700, letterSpacing: '-0.01em' }}>{b.name}</span>}
                <span style={{ fontSize: '0.82rem', color: 'var(--text-3)' }}>— {b.tagline}</span>
                <span style={{ marginLeft: 'auto' }}><MaturityTag tier={b.maturity} /></span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: '3rem' }}>
            <Button href="/portfolio" variant="secondary">All businesses →</Button>
          </div>
        </div>
      </section>
      <section className="keystone-shell keystone-band company-questions" aria-labelledby="company-questions">
        <h2 className="corporate-section-title" id="company-questions">Common questions</h2>
        {companyFaq.mainEntity.map(question => (
          <details key={question.name}>
            <summary>{question.name}</summary>
            <p>{question.acceptedAnswer.text}</p>
          </details>
        ))}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(companyFaq) }} />
      </section>
    </>
  )
}
