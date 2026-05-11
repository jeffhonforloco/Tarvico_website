'use client'

import { PageHero, SectionLabel, Button, Divider, MetricCard } from '@/components/ui'

const thesis = [
  { icon: '◈', title: 'Portfolio Model Reduces Risk', desc: 'Six distinct ventures across AI infrastructure, productivity, developer tools, and creative tech. Diversified exposure to high-growth AI market segments with shared operational leverage.' },
  { icon: '◎', title: 'AI Leverage Multiplies Returns', desc: 'AI-native architecture means each new capability compounds across the entire portfolio. Shared intelligence infrastructure, shared data advantages, shared operational efficiency.' },
  { icon: '⬡', title: 'Long-Term Capital Allocation', desc: 'We allocate capital toward sustainable compounding — not growth-at-all-costs. Disciplined unit economics, lean operations, and patient reinvestment strategy designed for institutional-grade returns.' },
  { icon: '◻', title: 'Incubation Creates Proprietary Advantage', desc: 'Internal incubation model means lower acquisition cost per venture, tighter product-market alignment, and preserved equity structure compared to external acquisition models.' },
  { icon: '△', title: 'Founder-Led with Institutional Discipline', desc: 'Founder-CEO alignment on long-term value creation. Strategic governance designed to balance visionary direction with operational accountability and financial discipline.' },
  { icon: '○', title: 'Scalable Operating Model', desc: 'AI-native operations mean the holding company can support a growing portfolio without linear cost scaling. Infrastructure investments compound in value across every venture simultaneously.' },
]

export default function InvestorsPage() {
  return (
    <>
      <PageHero
        label="Investor Relations"
        title={<>Built for long-term<br /><em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>value creation.</em></>}
        subtitle="Tarvico is designed from first principles to compound value over decades — a portfolio approach to AI-native company building with institutional discipline and founder conviction."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 3rem' }}>

        <blockquote style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          lineHeight: 1.35,
          borderLeft: '2px solid var(--gold)',
          paddingLeft: '2.5rem',
          margin: '2rem 0 6rem',
          color: 'var(--text)',
          letterSpacing: '-0.01em',
        }}>
          "We are not building for an exit. We are building an enduring technology institution — the kind of company that shapes industries and creates lasting value over decades."
          <div style={{ fontFamily: '"DM Sans", sans-serif', fontStyle: 'normal', fontSize: '0.78rem', color: 'var(--text-2)', marginTop: '1.25rem', fontWeight: 300, letterSpacing: '0.05em' }}>
            — Jeff Honforloco, Founder & CEO · 2026
          </div>
        </blockquote>

        <SectionLabel>The Opportunity</SectionLabel>
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border-w)', marginTop: '1.5rem', marginBottom: '6rem' }}>
          <MetricCard value="$4.4T" label="Global AI Market by 2030" sub="Projected total addressable market across all AI sectors" />
          <MetricCard value="$621B" label="AI Workflow Automation TAM" sub="Enterprise automation and intelligent operations market" />
          <MetricCard value="42%" label="Annual AI Adoption Growth" sub="Year-over-year enterprise AI adoption rate globally" />
        </div>

        <Divider />

        <div style={{ padding: '6rem 0' }}>
          <SectionLabel>Strategic Thesis</SectionLabel>
          <h2 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            fontWeight: 400,
            color: 'var(--text)',
            maxWidth: 560,
            lineHeight: 1.1,
            letterSpacing: '-0.01em',
            marginBottom: '3rem',
          }}>
            Why Tarvico is built<br />for this moment.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', background: 'var(--border-w)' }}>
            {thesis.map(t => (
              <div key={t.title} style={{
                background: 'var(--bg)', padding: '2.5rem',
                transition: 'background 0.25s, border-top-color 0.25s',
                borderTop: '2px solid transparent',
              }}
                onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.borderTopColor = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg)'; e.currentTarget.style.borderTopColor = 'transparent' }}
              >
                <div style={{ fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '1.5rem', opacity: 0.7 }}>{t.icon}</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.75rem', fontWeight: 400 }}>{t.title}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 300 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        <div style={{ padding: '6rem 0' }}>
          <SectionLabel>Capital Allocation Framework</SectionLabel>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 400, color: 'var(--text)', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>How We Deploy Capital</h3>
              {[
                { pct: '60%', label: 'Product Development', desc: 'Engineering, AI infrastructure, and product team investment across active ventures.' },
                { pct: '20%', label: 'Market Development', desc: 'GTM execution, distribution, enterprise sales, and growth infrastructure.' },
                { pct: '15%', label: 'Operational Reserve', desc: 'Runway extension, operational resilience, and strategic optionality.' },
                { pct: '5%', label: 'Research & Incubation', desc: 'Early-stage concept validation and next portfolio venture development.' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '1.5rem', padding: '1.25rem 0', borderBottom: '1px solid var(--border-w)' }}>
                  <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', fontWeight: 300, color: 'var(--gold)', minWidth: 52, lineHeight: 1 }}>{item.pct}</div>
                  <div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 400, marginBottom: '0.25rem' }}>{item.label}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-2)', fontWeight: 300, lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div style={{ border: '1px solid var(--border-w)', padding: '2.5rem', background: 'var(--bg-card)', borderTop: '2px solid var(--gold)' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.85rem', fontWeight: 500 }}>Investor Deck</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.5rem', fontWeight: 400 }}>Tarvico Inc. — Strategic Overview</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-3)', marginBottom: '1.5rem', fontWeight: 300 }}>2026 Edition · Confidential</div>
                <Button href="mailto:investors@tarvico.com" variant="secondary">Request Access →</Button>
              </div>
              <div style={{ border: '1px solid var(--border-w)', padding: '2.5rem', background: 'var(--bg-card)' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.85rem', fontWeight: 500 }}>Founder Letter</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.5rem', fontWeight: 400 }}>Building for the Next Era</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-3)', marginBottom: '1.5rem', fontWeight: 300 }}>Jeff Honforloco · 2026</div>
                <Button href="/vision" variant="secondary">Read Letter →</Button>
              </div>
              <div style={{ border: '1px solid var(--gold-border)', padding: '2rem', background: 'var(--gold-glow)' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.75rem', fontWeight: 500 }}>Investor Inquiries</div>
                <a href="mailto:investors@tarvico.com" style={{
                  fontFamily: '"Cormorant Garamond", serif', fontSize: '1.3rem', fontWeight: 300,
                  color: 'var(--gold)', textDecoration: 'none', display: 'block',
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
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 400, color: 'var(--text)', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>Our Commitment</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.85, fontWeight: 300, marginBottom: '1.25rem' }}>
                We are committed to building trust with our investors through transparency, consistency, and long-term alignment. Our governance philosophy is inspired by the most enduring technology companies — strong founder vision combined with institutional accountability.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.85, fontWeight: 300 }}>
                We believe investors should understand not just our financial metrics, but our strategic thesis, our principles, and the long-term vision driving every decision. Annual founder letters, portfolio updates, and strategic communications are part of our ongoing commitment.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-w)' }}>
              {[
                { label: 'Founder Alignment', desc: 'Founder-CEO maintains controlling stake and long-term vision alignment.' },
                { label: 'Annual Transparency', desc: 'Annual founder letters, portfolio reviews, and strategic updates for all investors.' },
                { label: 'Capital Discipline', desc: 'Sustainable burn rates, milestone-based deployment, no growth-at-all-costs.' },
                { label: 'Long-Term Ownership', desc: 'Built to hold, not to sell. Our portfolio companies are designed to compound over decades.' },
              ].map(item => (
                <div key={item.label} style={{
                  padding: '1.5rem', background: 'var(--bg-card)',
                  borderLeft: '2px solid var(--border-w)', transition: 'border-color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--gold)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'var(--border-w)' }}
                >
                  <div style={{ fontSize: '0.85rem', color: 'var(--text)', fontWeight: 400, marginBottom: '0.3rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-2)', fontWeight: 300 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
