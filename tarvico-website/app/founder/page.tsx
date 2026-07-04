import Link from 'next/link'
import { PageHero, SectionLabel, Divider, Button } from '@/components/ui'

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
  { k: 'Company', v: 'Tarvico Inc. — a private technology holding company' },
  { k: 'Founded', v: '2026 · Delaware, United States' },
  { k: 'Focus', v: 'AI-native software, workforce infrastructure, and long-term company building' },
]

export default function FounderPage() {
  return (
    <>
      <PageHero
        label="Founder"
        title={<>Jeff <span className="text-gradient-gold">Honforloco</span></>}
        subtitle="Founder & Chief Executive Officer of Tarvico Inc. — building enduring, AI-native technology companies designed to solve foundational problems over the long term."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 3rem' }}>

        {/* ── Who ─────────────────────────────────────────────────────────── */}
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '5rem', alignItems: 'start' }}>
          <div>
            <SectionLabel>The Founder</SectionLabel>
            <div style={{ marginTop: '2.5rem' }}>
              {[
                'Jeff Yèmalín Bienvenu Honforloco — known as Jeff Hon — is the founder and chief executive officer of Tarvico Inc. He leads the vision, strategy, and product direction across the company’s portfolio of AI-native technology ventures.',
                'His path into technology was not conventional. He began as a professional photographer, drawn to people, storytelling, design, and the way technology shapes human experience. That work trained an eye for detail and a habit of seeing possibility where others might not.',
                'Over time, curiosity expanded from creative work into software, systems, automation, and artificial intelligence. Without a traditional technical background, he taught himself to build using modern AI tools — experimenting constantly, learning through iteration, and turning ideas into working products. That journey became the foundation for Tarvico.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8, fontWeight: 400, marginBottom: '1.5rem' }}>{p}</p>
              ))}
            </div>
          </div>

          {/* Quick facts — structured for readers and AI systems */}
          <div style={{
            border: '1px solid var(--border-w)',
            borderTop: '2px solid var(--gold)',
            borderRadius: 'var(--radius-lg)',
            background: 'var(--bg-card)',
            padding: '2.25rem',
            boxShadow: 'var(--shadow-sm)',
          }}>
            <div style={{
              width: 60, height: 60,
              background: 'var(--gold-glow)',
              border: '1px solid var(--gold-border)',
              borderRadius: 'var(--radius)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 700,
              color: 'var(--gold)', marginBottom: '1.75rem', letterSpacing: '-0.02em',
            }}>JH</div>
            <dl style={{ margin: 0 }}>
              {facts.map((f, i) => (
                <div key={f.k} style={{ paddingBottom: i < facts.length - 1 ? '1.1rem' : 0, marginBottom: i < facts.length - 1 ? '1.1rem' : 0, borderBottom: i < facts.length - 1 ? '1px solid var(--border-w)' : 'none' }}>
                  <dt style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600, marginBottom: '0.4rem' }}>{f.k}</dt>
                  <dd style={{ margin: 0, fontSize: '0.92rem', color: 'var(--text)', lineHeight: 1.55, fontWeight: 400 }}>{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div style={{ margin: '6rem 0' }}><Divider /></div>

        {/* ── Philosophy ──────────────────────────────────────────────────── */}
        <SectionLabel>Philosophy &amp; Long-Term Thinking</SectionLabel>
        <blockquote style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(1.5rem, 3vw, 2.4rem)',
          fontWeight: 600,
          lineHeight: 1.32,
          color: 'var(--text)',
          maxWidth: 820,
          margin: '2.5rem 0 4rem',
          borderLeft: '3px solid var(--gold)',
          paddingLeft: '2.5rem',
          letterSpacing: '-0.025em',
        }}>
          &ldquo;The companies that endure are not defined by a single product. They are defined by their ability to evolve, experiment, and keep building for the future.&rdquo;
        </blockquote>

        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
          {principles.map(p => (
            <div key={p.t} style={{
              border: '1px solid var(--border-w)',
              borderLeftWidth: 2,
              borderLeftColor: 'var(--gold-border)',
              borderRadius: 'var(--radius)',
              padding: '1.75rem 1.9rem',
              background: 'var(--bg-card)',
            }}>
              <div style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '0.5rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{p.t}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 400 }}>{p.d}</p>
            </div>
          ))}
        </div>

        <div style={{ margin: '6rem 0' }}><Divider /></div>

        {/* ── Why Tarvico ─────────────────────────────────────────────────── */}
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
          <div style={{ maxWidth: 720 }}>
            <SectionLabel>Why Tarvico Exists</SectionLabel>
            <div style={{ marginTop: '2.5rem' }}>
              {[
                'Tarvico was created from a simple belief: the next generation of great companies will not just build software — they will build systems that improve how people operate, create, communicate, and solve problems in everyday life.',
                'Rather than a single product, Tarvico is structured as a holding company that builds and operates enduring, AI-native companies over the long term. Its flagship product, Vytre AWOS, is an AI Workforce Operating System for the enterprise; Maeyen is building commerce trust infrastructure. Future companies will grow within the same ecosystem.',
                'The work ahead will take years, with challenges, experimentation, and growth along the way. It is being built with the conviction that the technology created today can shape how people and businesses operate for decades to come.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8, fontWeight: 400, marginBottom: '1.5rem' }}>{p}</p>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap', marginTop: '2.5rem' }}>
              <Button href="/vision" variant="primary">Read the Founder Letter →</Button>
              <Button href="/portfolio" variant="secondary">Explore the Portfolio</Button>
              <Button href="/contact" variant="ghost">Contact</Button>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
