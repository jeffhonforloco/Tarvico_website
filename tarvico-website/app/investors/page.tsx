import { PageHero, SectionLabel, Button, Divider } from '@/components/ui'

const thesis = [
  { icon: '◈', title: 'Portfolio Model Reduces Risk', desc: 'Five distinct ventures across AI infrastructure, productivity, developer tools, and creative tech. Diversified exposure to high-growth AI market segments with shared operational leverage.' },
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
        title={<>Built for long-term<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>value creation.</em></>}
        subtitle="Tarvico is designed from first principles to compound value over decades — a portfolio approach to AI-native company building with institutional discipline and founder conviction."
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 3rem' }}>

        {/* Founder thesis quote */}
        <blockquote style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          lineHeight: 1.35,
          borderLeft: '2px solid var(--gold)',
          paddingLeft: '2.5rem',
          margin: '2rem 0 5rem',
          color: 'var(--text)',
        }}>
          "We are not building for an exit. We are building an enduring technology institution — the kind of company that shapes industries and creates lasting value over decades."
          <div style={{ fontFamily: '"DM Sans", sans-serif', fontStyle: 'normal', fontSize: '0.82rem', color: 'var(--text-2)', marginTop: '1rem', fontWeight: 300 }}>
            — Jeff Honforloco, Founder & CEO
          </div>
        </blockquote>

        {/* Market stats */}
        <SectionLabel>The Opportunity</SectionLabel>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5px', background: 'var(--border-w)', marginTop: '1.5rem', marginBottom: '5rem' }}>
          {[
            { n: '$4.4T', label: 'Global AI Market by 2030' },
            { n: '$621B', label: 'AI Workflow Automation TAM' },
            { n: '42%', label: 'Annual AI Adoption Growth Rate' },
          ].map(s => (
            <div key={s.n} style={{ background: 'var(--bg-raised)', padding: '3rem', textAlign: 'center' }}>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '3.2rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-2)', marginTop: '0.5rem' }}>{s.label}</div>
            </div>
          ))}
        </div>

        <Divider />

        {/* Thesis cards */}
        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Strategic Thesis</SectionLabel>
          <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: 'clamp(2rem, 3.5vw, 3rem)', fontWeight: 300, color: 'var(--text)', maxWidth: 600, marginBottom: '3rem', lineHeight: 1.1 }}>
            Why Tarvico is built for this moment.
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5px', background: 'var(--border-w)' }}>
            {thesis.map(t => (
              <div key={t.title} style={{ background: 'var(--bg)', padding: '2.5rem' }}>
                <div style={{ fontSize: '1.4rem', color: 'var(--gold)', marginBottom: '1.5rem' }}>{t.icon}</div>
                <div style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '0.75rem' }}>{t.title}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Governance */}
        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Governance & Transparency</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'start', marginTop: '2rem' }}>
            <div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 300, color: 'var(--text)', marginBottom: '1.5rem' }}>Our Commitment</h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.25rem' }}>
                We are committed to building trust with our investors through transparency, consistency, and long-term alignment. Our governance philosophy is inspired by the most enduring technology companies — strong founder vision combined with institutional accountability.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.8, fontWeight: 300 }}>
                We believe investors should understand not just our financial metrics, but our strategic thesis, our principles, and the long-term vision driving every decision. Annual founder letters, portfolio updates, and strategic communications are part of our ongoing commitment.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[
                { label: 'Investor Deck', title: 'Tarvico Inc. — Strategic Overview 2025', cta: 'Request Access →', action: 'mailto:investors@tarvico.com' },
                { label: 'Founder Letter', title: 'Building for the Next Era — 2025', cta: 'Read Letter →', action: '/vision' },
              ].map(item => (
                <div key={item.label} style={{ border: '1px solid var(--border-w)', padding: '2rem', background: 'var(--bg-raised)' }}>
                  <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.75rem' }}>{item.label}</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text)', marginBottom: '1rem' }}>{item.title}</div>
                  <Button href={item.action} variant="secondary" style={{ fontSize: '0.65rem' }}>{item.cta}</Button>
                </div>
              ))}
              <div style={{ border: '1px solid var(--border-w)', padding: '2rem', background: 'var(--bg-raised)' }}>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.75rem' }}>Investor Inquiries</div>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.2rem', color: 'var(--gold)' }}>investors@tarvico.com</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
