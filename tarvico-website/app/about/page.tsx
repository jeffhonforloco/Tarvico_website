'use client'

import { PageHero, SectionLabel, Divider } from '@/components/ui'

const timeline = [
  { year: '2026', title: 'Tarvico Inc. Founded', desc: 'Tarvico Inc. is established as a private technology holding company. The initial portfolio of seven ventures is defined, and development of the flagship product begins in earnest.', accent: true },
  { year: '2026', title: 'Vytre AWOS Development Begins', desc: 'The flagship AI Workforce Operating System enters active development. Architecture design, core agent orchestration engine, and enterprise integration framework initiated.', accent: true },
  { year: '2025', title: 'Portfolio Incubation Phase', desc: 'SireIQ, SEOAgentPro, Fycra, and Fycera enter incubation phase. Product research, market validation, and initial prototyping across all four ventures.', accent: false },
  { year: '2026+', title: 'Flagship Launch · Growth Phase', desc: 'Vytre AWOS targets public launch and enterprise customer acquisition. Portfolio companies advance from incubation toward independent product development and market entry.', accent: false },
]

const subsidiaries = [
  { name: 'Vytre AWOS', desc: 'AI Workforce Operating System', status: 'Flagship', color: 'var(--gold)' },
  { name: 'Maeyen', desc: 'Commerce Trust Network for Africa', status: 'Live', color: 'var(--emerald)' },
  { name: 'Racym', desc: 'Verified Creative Talent Network', status: 'Live', color: 'var(--emerald)' },
  { name: 'SireIQ', desc: 'AI Assistant for Chat, Content & Workflow', status: 'Incubation', color: 'var(--gold-dim)' },
  { name: 'SEOAgentPro', desc: 'AI Search Intelligence Platform', status: 'Incubation', color: 'var(--gold-dim)' },
  { name: 'Fycra', desc: 'AI-Native Code Platform', status: 'Stealth', color: 'var(--text-3)' },
  { name: 'Fycera', desc: 'AI Content Creation Infrastructure', status: 'Stealth', color: 'var(--text-3)' },
  { name: 'Urs79', desc: 'Multimedia, Record Label & Publishing', status: 'Affiliated', color: 'var(--blue)' },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title={<>Built with <span className="text-gradient-gold">conviction.</span></>}
        subtitle="Tarvico is a technology holding company founded on the belief that the most enduring businesses are built with long-term thinking, operational discipline, and a genuine purpose."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 3rem' }}>

        <blockquote style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
          fontWeight: 600,
          lineHeight: 1.3,
          color: 'var(--text)',
          maxWidth: 800,
          marginBottom: '6rem',
          borderLeft: '3px solid var(--gold)',
          paddingLeft: '2.5rem',
          letterSpacing: '-0.025em',
        }}>
          &ldquo;We exist to build companies and systems that give people and organizations more leverage over their work, creativity, and potential — at any scale, in any domain.&rdquo;
        </blockquote>

        <SectionLabel>Mission & Philosophy</SectionLabel>

        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', marginTop: '2.5rem', marginBottom: '6rem' }}>
          <div>
            {[
              'Tarvico was founded on a simple thesis: the next wave of transformative companies will be built by small, focused teams who combine creativity with technological leverage to accomplish what once required enormous organizations.',
              'We build products and platforms where intelligence is the fundamental operating layer — not a feature bolted on, but the architecture underneath. Every workflow, every product decision, every company we launch is designed around this principle.',
              'Our ambition is to become a diversified, enduring technology company that develops products, platforms, and tools that people and businesses genuinely rely on — built for the long term, designed with care, operated with discipline.',
            ].map((p, i) => (
              <p key={i} style={{ fontSize: '1.02rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 400, marginBottom: '1.5rem' }}>{p}</p>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { t: 'Visionary but disciplined', d: 'We think decades ahead but execute with quarterly precision. Vision without discipline is speculation.' },
              { t: 'Human-centered technology', d: 'Technology should genuinely improve how people work and live — not merely impress them. Every product is evaluated on real human value.' },
              { t: 'Creativity meets systems thinking', d: 'Our founder comes from a creative background. We believe the best technology products combine aesthetic intelligence with systems rigor.' },
              { t: 'Accessible innovation', d: 'The future belongs to builders of all backgrounds. We are proof that ambition and persistence can open doors that once felt impossible.' },
            ].map(p => (
              <div key={p.t} style={{
                border: '1px solid var(--border-w)',
                borderLeftWidth: 2,
                borderLeftColor: 'var(--gold-border)',
                borderRadius: 'var(--radius)',
                padding: '1.4rem 1.6rem',
                background: 'var(--bg-card)',
                transition: 'border-color 0.2s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--gold)'; e.currentTarget.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'var(--gold-border)'; e.currentTarget.style.transform = 'translateX(0)' }}
              >
                <div style={{ fontSize: '0.92rem', color: 'var(--text)', marginBottom: '0.35rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{p.t}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 400 }}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div style={{ padding: '6rem 0' }}>
          <SectionLabel>Leadership</SectionLabel>
          <div style={{ maxWidth: 480, marginTop: '2.5rem' }}>
            <div style={{
              padding: '2.5rem',
              border: '1px solid var(--border-w)',
              background: 'var(--bg-card)',
              borderTop: '2px solid var(--gold)',
              borderRadius: 'var(--radius-lg)',
              boxShadow: 'var(--shadow-sm)',
            }}>
              <div style={{
                width: 60,
                height: 60,
                background: 'var(--gold-glow)',
                border: '1px solid var(--gold-border)',
                borderRadius: 'var(--radius)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontWeight: 700,
                color: 'var(--gold)',
                marginBottom: '1.5rem',
                letterSpacing: '-0.02em',
              }}>JH</div>
              <div style={{ fontSize: '1.15rem', color: 'var(--text)', marginBottom: '0.35rem', fontWeight: 700, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>Jeff Yèmalín Bienvenu Honforloco</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', fontWeight: 600 }}>Founder & Chief Executive Officer</div>
              <p style={{ fontSize: '0.86rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 400 }}>
                Founder of Tarvico Inc. Began as a professional photographer, developed a passion for software, AI, and systems thinking. Self-taught builder who believes creative thinking and technological persistence can open any door. Leads vision, strategy, and product direction across the entire portfolio.
              </p>
            </div>
          </div>
        </div>

        <Divider />

        <div style={{ padding: '6rem 0' }}>
          <SectionLabel>Company Timeline</SectionLabel>
          <div style={{ marginTop: '2.5rem', position: 'relative' }}>
            <div style={{ position: 'absolute', left: 88, top: 0, bottom: 0, width: 1, background: 'var(--border-w)' }} />
            {timeline.map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '88px 1fr', gap: '2.5rem', padding: '2.25rem 0', borderBottom: i < timeline.length - 1 ? '1px solid var(--border-w)' : 'none' }}>
                <div style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: item.accent ? 'var(--gold)' : 'var(--text-3)',
                  paddingTop: '0.2rem',
                  textAlign: 'right',
                  paddingRight: '1.5rem',
                }}>{item.year}</div>
                <div style={{ paddingLeft: '1.5rem' }}>
                  <div style={{
                    fontSize: '1rem',
                    color: 'var(--text)',
                    marginBottom: '0.5rem',
                    fontWeight: 600,
                    fontFamily: 'var(--font-display)',
                    letterSpacing: '-0.01em',
                  }}>{item.title}</div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 400 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div style={{ padding: '6rem 0' }}>
          <SectionLabel>Corporate Structure</SectionLabel>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.75, maxWidth: 500, fontWeight: 300, marginBottom: '2rem', marginTop: '0.5rem' }}>
            Tarvico Inc. is the parent holding entity. Each company in the portfolio operates with its own brand identity, product strategy, and eventual independent operating structure.
          </p>
          <div style={{ border: '1px solid var(--border-w)', background: 'var(--bg-card)', overflow: 'hidden', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{
              padding: '1.5rem 2rem',
              borderBottom: '1px solid var(--border-w)',
              background: 'var(--bg-raised)',
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
            }}>
              <span style={{ display: 'block', width: 8, height: 8, borderRadius: '50%', background: 'var(--gold)' }} />
              <span style={{ fontSize: '0.86rem', color: 'var(--text)', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>Tarvico Inc.</span>
              <span style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', marginLeft: 'auto', fontWeight: 600 }}>Parent Holding Company · Delaware</span>
            </div>
            {subsidiaries.map((s, i) => (
              <div key={s.name} style={{
                padding: '1.25rem 2rem 1.25rem 3.5rem',
                borderBottom: i < subsidiaries.length - 1 ? '1px solid var(--border-w)' : 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                transition: 'background 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent' }}
              >
                <span style={{ fontSize: '0.6rem', color: 'var(--text-3)', marginRight: 4, fontFamily: 'monospace' }}>├─</span>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-2)', fontWeight: 300 }}>{s.name}</span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-3)', fontWeight: 300 }}>— {s.desc}</span>
                <span style={{ marginLeft: 'auto', fontSize: '0.55rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: s.color, fontWeight: 500 }}>{s.status}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
