import { PageHero, Button, Eyebrow } from '@/components/ui'

const FONT = { display: 'var(--font-display)', serif: 'var(--font-editorial)', mono: 'var(--font-body)', body: 'var(--font-body)' }

const principles = [
  {
    t: 'Long-term conviction',
    d: 'Tarvico is built to compound over decades, not quarters. The companies worth building are the ones still creating value long after the initial excitement has passed.',
  },
  {
    t: 'Human-centered technology',
    d: 'Technology should genuinely improve how people work, create, and live — not merely impress them. Every product is measured by the real leverage it gives people over their time and potential.',
  },
  {
    t: 'Creativity meets systems',
    d: 'A background in visual storytelling shapes how Tarvico builds: the best technology pairs aesthetic intelligence and attention to detail with the rigor of systems thinking.',
  },
  {
    t: 'Accessible ambition',
    d: 'Ambitious ideas should not be limited by background, geography, or a conventional path. What matters is vision, persistence, and the willingness to keep building when the outcome is uncertain.',
  },
]

const facts = [
  { k: 'Role', v: 'Founder & Chief Executive Officer' },
  { k: 'Company', v: 'Tarvico Inc. — a privately held U.S. technology company' },
  { k: 'Founded', v: '2026 · Delaware, United States' },
  { k: 'Focus', v: 'AI-native software, workforce infrastructure, and long-term company building' },
]

export default function FounderPage() {
  return (
    <>
      <PageHero
        title="Jeff Honforloco"
        subtitle="Founder and Chief Executive Officer of Tarvico Inc."
      />

      {/* 01 · THE FOUNDER — graphite */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="mob-p" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem max(1.5rem, 4vw)' }}>
          <Eyebrow label="The Founder" />
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '5rem', alignItems: 'start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {[
                'Jeff Yèmalín Bienvenu Honforloco — known as Jeff Hon — is the founder and chief executive officer of Tarvico Inc. He leads the vision, strategy, and product direction across the company’s portfolio of AI-native products.',
                'His path into technology was not conventional. He began as a professional photographer, drawn to people, storytelling, design, and the way technology shapes human experience. That work trained an eye for detail and a habit of seeing possibility where others might not.',
                'Over time, curiosity expanded from creative work into software, systems, automation, and artificial intelligence. Without a traditional technical background, he taught himself to build using modern AI tools — experimenting constantly, learning through iteration, and turning ideas into working products. That journey became the foundation for Tarvico.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>{p}</p>
              ))}
            </div>
            <div style={{ border: '1px solid var(--border-w)', borderTop: '2px solid var(--text)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-card)', padding: '2.25rem', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ width: 60, height: 60, background: 'var(--accent-soft)', border: '1px solid var(--accent-line)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: FONT.display, fontSize: '1.4rem', fontWeight: 800, color: 'var(--text)', marginBottom: '1.75rem' }}>JH</div>
              <dl style={{ margin: 0 }}>
                {facts.map((f, i) => (
                  <div key={f.k} style={{ paddingBottom: i < facts.length - 1 ? '1.1rem' : 0, marginBottom: i < facts.length - 1 ? '1.1rem' : 0, borderBottom: i < facts.length - 1 ? '1px solid var(--border-w)' : 'none' }}>
                    <dt style={{ fontFamily: FONT.mono, fontSize: '0.56rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text)', fontWeight: 500, marginBottom: '0.4rem' }}>{f.k}</dt>
                    <dd style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.55 }}>{f.v}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · PHILOSOPHY — mineral editorial band */}
      <section className="keystone-paper">
        <div className="mob-p" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem max(1.5rem, 4vw)' }}>
          <Eyebrow label="Philosophy & Long-Term Thinking" />
          <blockquote style={{ fontFamily: FONT.serif, fontSize: 'clamp(1.6rem, 3.4vw, 2.7rem)', fontWeight: 500, lineHeight: 1.28, color: 'var(--paper-ink)', maxWidth: 900, margin: '0 0 4rem', letterSpacing: '-0.015em', textWrap: 'balance' }}>
            <span style={{ color: 'var(--paper-ink)', fontStyle: 'italic' }}>&ldquo;</span>The companies that endure are not defined by a single product. They are defined by their ability to evolve, experiment, and keep building for the future.<span style={{ color: 'var(--paper-ink)', fontStyle: 'italic' }}>&rdquo;</span>
          </blockquote>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0, borderTop: '1px solid var(--paper-line)' }}>
            {principles.map((p, i) => (
              <div key={p.t} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '1.4rem', padding: '1.8rem 2rem 1.8rem 0', borderBottom: '1px solid var(--paper-line)', borderLeft: i % 2 === 1 ? '1px solid var(--paper-line)' : 'none', paddingLeft: i % 2 === 1 ? '2rem' : 0 }}>
                <span style={{ fontFamily: FONT.mono, fontSize: '0.7rem', color: 'var(--paper-ink)', paddingTop: 4 }}>{String(i + 1).padStart(2, '0')}</span>
                <div>
                  <div style={{ fontFamily: FONT.display, fontSize: '1.02rem', color: 'var(--paper-ink)', marginBottom: '0.45rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{p.t}</div>
                  <p style={{ fontSize: '0.88rem', color: 'var(--paper-muted)', lineHeight: 1.65 }}>{p.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · WHY TARVICO — graphite */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={{ maxWidth: 820, margin: '0 auto', padding: '7rem max(1.5rem, 4vw)' }}>
          <Eyebrow label="Why Tarvico Exists" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              'Tarvico was created from a simple belief: the next generation of great companies will not just build software — they will build systems that improve how people operate, create, communicate, and solve problems in everyday life.',
              'Rather than a single product, Tarvico is structured to build and operate enduring, AI-native products over the long term. Its flagship product, Vytre AWOS, is an AI Workforce Operating System for the enterprise; Maeyen is building commerce trust infrastructure. Future products will grow within the same ecosystem.',
              'The work ahead will take years, with challenges, experimentation, and growth along the way. It is being built with the conviction that the technology created today can shape how people and businesses operate for decades to come.',
            ].map((p, i) => (
              <p key={i} style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>{p}</p>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
            <Button href="/vision" variant="primary">Read the Founder Letter →</Button>
            <Button href="/portfolio" variant="secondary">Explore the Portfolio</Button>
            <Button href="/contact" variant="ghost">Contact</Button>
          </div>
        </div>
      </section>
    </>
  )
}
