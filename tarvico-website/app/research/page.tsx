import { PageHero, SectionLabel, Button } from '@/components/ui'

const areas = [
  { t: 'AI Research', d: 'Applied work on intelligence in production — how AI systems behave, coordinate, and create leverage inside real organizations.' },
  { t: 'Commerce Research', d: 'Trust, verification, and the mechanics of commerce in emerging markets — the questions behind infrastructure like Maeyen.' },
  { t: 'White Papers', d: 'Longer-form technical documents on the systems, standards, and ideas Tarvico is building around.' },
  { t: 'Technical Documents', d: 'Reference material and analysis intended to be durable and citable over time.' },
]

export default function ResearchPage() {
  return (
    <>
      <PageHero
        label="Research"
        title={<>Research &amp; <span className="text-gradient-gold">white papers.</span></>}
        subtitle="Tarvico’s research library — where the company publishes white papers, AI and commerce research, and technical documents intended to be durable and citable over time."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 3rem' }}>

        <SectionLabel>Research Areas</SectionLabel>

        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '2.5rem', marginBottom: '5rem' }}>
          {areas.map(a => (
            <div key={a.t} style={{
              border: '1px solid var(--border-w)',
              borderLeftWidth: 2,
              borderLeftColor: 'var(--gold-border)',
              borderRadius: 'var(--radius)',
              padding: '1.75rem 1.9rem',
              background: 'var(--bg-card)',
            }}>
              <div style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '0.5rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{a.t}</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.7 }}>{a.d}</p>
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
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '1rem' }}>Coming Soon</div>
          <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.4rem, 3vw, 2rem)', fontWeight: 600, color: 'var(--text)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>First publications in progress.</div>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 540, margin: '0 auto 2rem' }}>
            The research library is being established. To be notified when the first white papers and technical documents are published, get in touch.
          </p>
          <Button href="/contact" variant="primary">Contact Tarvico →</Button>
        </div>

      </div>
    </>
  )
}
