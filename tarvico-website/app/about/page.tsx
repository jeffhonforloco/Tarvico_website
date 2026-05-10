import { PageHero, SectionLabel, Divider } from '@/components/ui'

const timeline = [
  { year: '2025', title: 'Tarvico Inc. Founded', desc: 'Tarvico Inc. is established as an AI-native technology holding company. The initial portfolio of five ventures is defined, and development of the flagship product begins.' },
  { year: '2025', title: 'Vytre AWOS Development Begins', desc: 'The flagship AI Workforce Operating System enters active development. Architecture design, core agent orchestration engine, and enterprise integration framework initiated.' },
  { year: '2025', title: 'Portfolio Incubation Launched', desc: 'SireIQ, SEOAgentPro, Fycra, and Fycera enter incubation phase. Product research, market validation, and initial prototyping across all four ventures.' },
  { year: '2026', title: 'Flagship Launch · Growth Phase', desc: 'Vytre AWOS targets public launch and enterprise customer acquisition. Portfolio companies advance from incubation toward independent product development and market entry.' },
]

const subsidiaries = [
  'Vytre AWOS — AI Workforce Operating System',
  'SireIQ — AI Assistant for Chat, Content & Workflow',
  'SEOAgentPro — AI Search Intelligence Platform',
  'Fycra — AI-Native Code Platform',
  'Fycera — AI Content Creation Infrastructure',
  'Urs79 — Multimedia, Record Label & Publishing',
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        label="About"
        title="Building with conviction."
        subtitle="Tarvico is a technology holding company founded on the belief that the most enduring businesses are built with long-term thinking, operational discipline, and a genuine purpose."
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 3rem' }}>

        {/* Mission */}
        <blockquote style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(1.5rem, 3.5vw, 2.8rem)',
          fontWeight: 300,
          fontStyle: 'italic',
          lineHeight: 1.3,
          color: 'var(--text)',
          maxWidth: 800,
          marginBottom: '5rem',
          borderLeft: '2px solid var(--gold)',
          paddingLeft: '2rem',
        }}>
          "We exist to build AI-native companies that give people and organizations more leverage over their work, creativity, and potential."
        </blockquote>

        <SectionLabel>Mission & Philosophy</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', marginTop: '2.5rem', marginBottom: '5rem' }}>
          <div>
            {[
              'Tarvico was founded on a simple thesis: the next wave of transformative companies will be built by small, focused teams who combine creativity with AI leverage to accomplish what once required enormous organizations.',
              'We build AI-native products — not software with AI features bolted on, but systems where intelligence is the fundamental operating layer. Every workflow, every product decision, every company we launch is designed around this principle.',
              'Our ambition is to become a diversified technology company that develops products, platforms, and tools that people and businesses genuinely rely on — built for the long term, designed with care, operated with discipline.',
            ].map((p, i) => (
              <p key={i} style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8, fontWeight: 300, marginBottom: '1.5rem' }}>{p}</p>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { t: 'Visionary but disciplined', d: 'We think decades ahead but execute with quarterly precision. Vision without discipline is speculation.' },
              { t: 'Human-centered technology', d: 'Technology should genuinely improve how people work and live — not merely impress them. Every product is evaluated on real human value.' },
              { t: 'Creativity meets systems thinking', d: 'Our founder comes from a creative background. We believe the best technology products combine aesthetic intelligence with systems rigor.' },
              { t: 'Accessible innovation', d: 'The future belongs to builders of all backgrounds. We are proof that ambition and persistence can open doors that once felt impossible.' },
            ].map(p => (
              <div key={p.t} style={{ borderLeft: '1px solid var(--gold-border)', padding: '1rem 1.5rem' }}>
                <div style={{ fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.35rem' }}>{p.t}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-2)', lineHeight: 1.6 }}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Leadership */}
        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Leadership</SectionLabel>
          <div style={{ maxWidth: 420, marginTop: '2.5rem' }}>
            <div style={{ padding: '2rem', border: '1px solid var(--border-w)', background: 'var(--bg-raised)' }}>
              <div style={{
                width: 56,
                height: 56,
                background: 'var(--gold-glow)',
                border: '1px solid var(--gold-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: '1.4rem',
                color: 'var(--gold)',
                marginBottom: '1.25rem',
              }}>JH</div>
              <div style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '0.3rem' }}>Jeff Yèmalín Bienvenu Honforloco</div>
              <div style={{ fontSize: '0.72rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-2)', marginBottom: '0.75rem' }}>Founder & Chief Executive Officer</div>
              <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>
                Founder of Tarvico Inc. Began as a professional photographer, developed a passion for software, AI, and systems thinking. Self-taught builder who believes creative thinking and technological persistence can open any door. Leads vision, strategy, and product direction across the entire portfolio.
              </p>
            </div>
          </div>
        </div>

        <Divider />

        {/* Timeline */}
        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Company Timeline</SectionLabel>
          <div style={{ display: 'flex', flexDirection: 'column', marginTop: '2rem' }}>
            {timeline.map((item, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '2rem', padding: '2rem 0', borderBottom: '1px solid var(--border-w)' }}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.6rem', fontWeight: 300, color: 'var(--gold)', paddingTop: '0.2rem' }}>{item.year}</div>
                <div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text)', marginBottom: '0.4rem' }}>{item.title}</div>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Divider />

        {/* Corporate structure */}
        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Corporate Structure</SectionLabel>
          <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 500, fontWeight: 300, marginBottom: '1.5rem', marginTop: '0.5rem' }}>
            Tarvico Inc. is the parent holding entity. Each company in the portfolio operates with its own brand identity, product strategy, and eventual independent operating structure.
          </p>
          <div style={{ fontFamily: '"DM Sans", monospace', fontSize: '0.82rem', background: 'var(--bg-card)', border: '1px solid var(--border-w)', padding: '2rem' }}>
            <div style={{ color: 'var(--text)', fontSize: '0.9rem', letterSpacing: '0.05em', marginBottom: '1rem' }}>Tarvico Inc. — Parent Holding Company</div>
            {subsidiaries.map((s, i) => (
              <div key={s} style={{
                color: i < 5 ? 'var(--text-2)' : 'var(--text-3)',
                padding: '0.4rem 0',
                paddingLeft: '1.5rem',
                borderLeft: `1px solid ${i < 5 ? 'var(--gold-border)' : 'var(--text-3)'}`,
                marginLeft: '0.5rem',
              }}>
                <span style={{ color: i < 5 ? 'var(--text-3)' : 'var(--text-3)', marginRight: '0.5rem' }}>├─</span>
                {s}
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
