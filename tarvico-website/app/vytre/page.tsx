import CorporateImage from '@/components/CorporateImage'
import { PageHero, Button, Eyebrow, MaturityTag } from '@/components/ui'

const FONT = { display: 'var(--font-display)', serif: 'var(--font-editorial)', mono: 'var(--font-body)', body: 'var(--font-body)' }

const capabilities = [
  { t: 'Agent orchestration', d: 'Deploy and coordinate AI workers across tasks, teams, and systems from a single control plane.' },
  { t: 'Workflow intelligence', d: 'Model real business processes so AI work maps to how the organization actually operates.' },
  { t: 'Enterprise integration', d: 'Connect to the tools, data, and systems already running inside the business.' },
  { t: 'Observability', d: 'See what AI workers are doing, why, and with what result — with full auditability.' },
  { t: 'Governance controls', d: 'Set the permissions, guardrails, and oversight that enterprise adoption requires.' },
]

const roadmap = [
  { phase: 'Now', title: 'Public beta', desc: 'Vytre AWOS is in public beta — the agent orchestration engine and enterprise integration framework are live and being hardened with early users.' },
  { phase: 'Next', title: 'Enterprise pilots', desc: 'Observability and governance mature toward controlled deployments with early enterprise partners.' },
  { phase: 'Then', title: 'General availability', desc: 'GA and enterprise onboarding as the control plane for AI-driven work at scale.' },
]

export default function VytrePage() {
  return (
    <>
      <PageHero
        label="Public beta"
        title={<>Vytre <span className="editorial-emphasis">AWOS</span></>}
        subtitle="An AI Workforce Operating System for coordinating executives, managers and worker agents with human approvals."
      />

      <div className="keystone-shell product-visual"><CorporateImage name="vytre" caption="Vytre product demo · Human approval and AI workforce coordination" /></div>

      {/* 01 · PROBLEM — graphite */}
      <section style={{ background: 'var(--bg)' }}>
        <div className="mob-p" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem max(1.5rem, 4vw) 0' }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4.5rem', alignItems: 'center' }}>
            <Button href="/contact" variant="primary">Request Early Access →</Button>
            <Button href="https://www.vytre.com" variant="secondary">Visit vytre.com ↗</Button>
            <span style={{ marginLeft: '0.25rem' }}><MaturityTag tier="public-beta" /></span>
          </div>
          <div className="mob-p" style={{ padding: '2.5rem 0 6rem' }}>
            <Eyebrow label="The Problem" />
            <div style={{ maxWidth: 760, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <p style={{ fontSize: '1.08rem', color: 'var(--text-2)', lineHeight: 1.8 }}>
                AI can now perform real work across nearly every business function. But most organizations have no reliable way to deploy that capability at scale — no shared place to run, coordinate, observe, and govern AI workers the way they manage human teams and software systems.
              </p>
              <p style={{ fontSize: '1.08rem', color: 'var(--text-2)', lineHeight: 1.8 }}>
                The result is fragmented experiments: isolated tools, no oversight, and no operating layer that treats AI work as core infrastructure rather than a collection of point solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 02 · SOLUTION — mineral editorial band */}
      <section className="keystone-paper">
        <div className="mob-p" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem max(1.5rem, 4vw)' }}>
          <h2 style={{ fontFamily: FONT.display, fontWeight: 670, fontSize: 'clamp(1.8rem, 3.4vw, 2.8rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: 'var(--paper-ink)', maxWidth: 820, marginBottom: '1.5rem', textWrap: 'balance' }}>
            The operating system for AI work.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--paper-muted)', lineHeight: 1.75, maxWidth: 740, marginBottom: '3.5rem' }}>
            Vytre AWOS gives enterprises one control plane to deploy AI workers, connect them to existing systems, coordinate them across workflows, and keep the whole operation observable and governed — the infrastructure layer for the intelligent organization.
          </p>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 0, borderTop: '1px solid var(--paper-line)' }}>
            {capabilities.map((c, i) => (
              <div key={c.t} style={{ padding: '1.8rem 1.6rem 1.8rem 0', borderBottom: '1px solid var(--paper-line)' }}>
                <div style={{ fontFamily: FONT.mono, fontSize: '0.6rem', letterSpacing: '0.12em', color: 'var(--paper-ink)', marginBottom: '0.9rem' }}>{String(i + 1).padStart(2, '0')}</div>
                <div style={{ fontFamily: FONT.display, fontSize: '1rem', color: 'var(--paper-ink)', marginBottom: '0.45rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{c.t}</div>
                <p style={{ fontSize: '0.86rem', color: 'var(--paper-muted)', lineHeight: 1.6 }}>{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03 · VISION — graphite, Fraunces quote */}
      <section style={{ background: 'var(--bg)', borderTop: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={{ maxWidth: 1000, margin: '0 auto', padding: '7rem max(1.5rem, 4vw)' }}>
          <Eyebrow label="The Vision" />
          <blockquote style={{ fontFamily: FONT.serif, fontSize: 'clamp(1.5rem, 2.8vw, 2.3rem)', fontWeight: 500, lineHeight: 1.32, color: 'var(--text)', maxWidth: 860, borderLeft: '2px solid var(--text)', paddingLeft: '2.25rem', letterSpacing: '-0.015em' }}>
            <span style={{ color: 'var(--text)', fontStyle: 'italic' }}>&ldquo;</span>Every organization will run on a blend of human and AI work. Vytre exists to make that blend deployable, coordinated, and accountable — so companies operate more intelligently while people keep more leverage over their time and creativity.<span style={{ color: 'var(--text)', fontStyle: 'italic' }}>&rdquo;</span>
          </blockquote>
        </div>
      </section>

      {/* 04 · ROADMAP — graphite raised */}
      <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem max(1.5rem, 4vw)' }}>
          <Eyebrow label="Current Stage & Roadmap" />
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, margin: '0 0 2.5rem', border: '1px solid var(--accent-line)', color: 'var(--text)', fontFamily: FONT.mono, fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', padding: '6px 14px', fontWeight: 500, background: 'var(--accent-soft)', borderRadius: 999 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--text)' }} />
            Flagship · Public Beta
          </div>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {roadmap.map((r, i) => (
              <div key={r.phase} style={{ border: '1px solid var(--border-w)', borderTop: `2px solid ${i === 0 ? 'var(--text)' : 'var(--border-w)'}`, borderRadius: 'var(--radius-lg)', background: 'var(--bg-card)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontFamily: FONT.mono, fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: i === 0 ? 'var(--text)' : 'var(--text-3)', fontWeight: 500, marginBottom: '1rem' }}>{r.phase}</div>
                <div style={{ fontFamily: FONT.display, fontSize: '1.05rem', color: 'var(--text)', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>{r.title}</div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-2)', lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
