import { PageHero, SectionLabel, Button } from '@/components/ui'

const topics = [
  { t: 'Artificial Intelligence', d: 'Applied AI, model behavior, evaluation, and the systems that put intelligence into production.' },
  { t: 'Agent Systems', d: 'Orchestration, coordination, tool use, and the architecture of reliable multi-agent workflows.' },
  { t: 'Infrastructure', d: 'The platforms, pipelines, and primitives that AI-native software is built on.' },
  { t: 'Cloud & Architecture', d: 'System design decisions, trade-offs, and the shape of software built to scale.' },
  { t: 'Security', d: 'Threat modeling, safe defaults, and building trust into systems from the ground up.' },
  { t: 'Scaling & Backend', d: 'Performance, reliability, and the engineering behind systems that grow.' },
]

export default function EngineeringPage() {
  return (
    <>
      <PageHero
        title="Engineering"
        subtitle="Engineering topics behind Tarvico’s AI and software products, including system design, reliability and security."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 3rem' }}>

        <SectionLabel>What We Write About</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginTop: '2.5rem', marginBottom: '5rem' }}>
          {topics.map(t => (
            <div key={t.t} style={{
              border: '1px solid var(--border-w)',
              borderLeftWidth: 2,
              borderLeftColor: 'var(--accent-line)',
              borderRadius: 'var(--radius)',
              padding: '1.75rem 1.9rem',
              background: 'var(--bg-card)',
            }}>
              <div style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '0.5rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{t.t}</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.7 }}>{t.d}</p>
            </div>
          ))}
        </div>

        <div style={{
          border: '1px solid var(--border-w)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-card)',
          padding: '3rem',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text)', fontWeight: 600, marginBottom: '1rem' }}>Coming Soon</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>The first articles are on the way.</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 540, margin: '0 auto 2rem' }}>
            Tarvico’s engineering blog is being built as a durable, technical knowledge base. To be notified when the first pieces are published, or to talk engineering with the team, get in touch.
          </p>
          <Button href="/contact" variant="primary">Contact the Team →</Button>
        </div>

      </div>
    </>
  )
}
