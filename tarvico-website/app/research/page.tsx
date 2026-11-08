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
      <PageHero layout="index"
        title="Research"
        subtitle="Research and publications on AI, software and commerce."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1640, margin: '0 auto', padding: '7rem 3rem' }}>

        <section className="editorial-overview" aria-label="Research Areas">
          <SectionLabel>Research Areas</SectionLabel>
          <div className="editorial-topic-grid editorial-topic-grid--research">
            {areas.map(topic => (
              <article key={topic.t}>
                <h3>{topic.t}</h3>
                <p>{topic.d}</p>
              </article>
            ))}
          </div>
        </section>

        <div style={{
          border: '1px solid var(--border-w)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-card)',
          padding: '3rem',
          textAlign: 'center',
        }}>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text)', fontWeight: 600, marginBottom: '1rem' }}>Coming Soon</div>
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
