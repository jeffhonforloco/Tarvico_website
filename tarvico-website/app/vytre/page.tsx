import { PageHero, SectionLabel, Divider, Button } from '@/components/ui'

const capabilities = [
  { t: 'Agent orchestration', d: 'Deploy and coordinate AI workers across tasks, teams, and systems from a single control plane.' },
  { t: 'Workflow intelligence', d: 'Model real business processes so AI work maps to how the organization actually operates.' },
  { t: 'Enterprise integration', d: 'Connect to the tools, data, and systems already running inside the business.' },
  { t: 'Observability', d: 'See what AI workers are doing, why, and with what result — with full auditability.' },
  { t: 'Governance controls', d: 'Set the permissions, guardrails, and oversight that enterprise adoption requires.' },
]

const roadmap = [
  { phase: 'Now', title: 'Core platform', desc: 'Architecture, the agent orchestration engine, and the enterprise integration framework are in active development.' },
  { phase: 'Next', title: 'Enterprise pilots', desc: 'Observability and governance mature toward controlled deployments with early enterprise partners.' },
  { phase: 'Then', title: 'Public launch', desc: 'General availability and enterprise onboarding as the control plane for AI-driven work at scale.' },
]

export default function VytrePage() {
  return (
    <>
      <PageHero
        label="Product · Flagship"
        title={<>Vytre <span className="text-foundry">AWOS</span></>}
        subtitle="An AI Workforce Operating System — the control plane enterprises use to deploy, manage, coordinate, and scale AI workers across operations, workflows, and systems."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 3rem' }}>

        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '5rem' }}>
          <Button href="/contact" variant="primary">Request Early Access →</Button>
          <Button href="https://www.vytre.com" variant="secondary">Visit vytre.com ↗</Button>
        </div>

        {/* Problem */}
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '3rem', marginBottom: '5rem' }}>
          <SectionLabel>The Problem</SectionLabel>
          <div style={{ maxWidth: 720 }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '1.25rem' }}>
              AI can now perform real work across nearly every business function. But most organizations have no reliable way to deploy that capability at scale — no shared place to run, coordinate, observe, and govern AI workers the way they manage human teams and software systems.
            </p>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8 }}>
              The result is fragmented experiments: isolated tools, no oversight, and no operating layer that treats AI work as core infrastructure rather than a collection of point solutions.
            </p>
          </div>
        </div>

        <Divider />

        {/* Solution */}
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '3rem', margin: '5rem 0' }}>
          <SectionLabel>The Solution</SectionLabel>
          <div style={{ maxWidth: 720 }}>
            <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.8, marginBottom: '2.5rem' }}>
              Vytre AWOS is the operating system for AI work. It gives enterprises one control plane to deploy AI workers, connect them to existing systems, coordinate them across workflows, and keep the whole operation observable and governed — the infrastructure layer for the intelligent organization.
            </p>
            <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {capabilities.map(c => (
                <div key={c.t} style={{
                  border: '1px solid var(--border-w)',
                  borderLeftWidth: 2,
                  borderLeftColor: 'var(--bronze-line)',
                  borderRadius: 'var(--radius)',
                  padding: '1.5rem 1.7rem',
                  background: 'var(--bg-card)',
                }}>
                  <div style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.4rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{c.t}</div>
                  <p style={{ fontSize: '0.86rem', color: 'var(--text-2)', lineHeight: 1.65 }}>{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <Divider />

        {/* Vision */}
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: '3rem', margin: '5rem 0' }}>
          <SectionLabel>The Vision</SectionLabel>
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.4rem, 2.6vw, 2.1rem)',
            fontWeight: 600,
            lineHeight: 1.4,
            color: 'var(--text)',
            maxWidth: 780,
            borderLeft: '3px solid var(--bronze)',
            paddingLeft: '2.25rem',
            letterSpacing: '-0.02em',
          }}>
            &ldquo;Every organization will run on a blend of human and AI work. Vytre exists to make that blend deployable, coordinated, and accountable — so companies operate more intelligently while people keep more leverage over their time and creativity.&rdquo;
          </blockquote>
        </div>

        <Divider />

        {/* Stage + Roadmap */}
        <div style={{ margin: '5rem 0 0' }}>
          <SectionLabel>Current Stage &amp; Roadmap</SectionLabel>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, margin: '2rem 0 2.5rem', border: '1px solid var(--bronze-line)', color: 'var(--bronze)', fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '6px 14px', fontWeight: 600, background: 'var(--bronze-soft)', borderRadius: 999 }}>
            <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--bronze)' }} />
            Flagship · Active development · Targeting 2026
          </div>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }}>
            {roadmap.map(r => (
              <div key={r.phase} style={{ border: '1px solid var(--border-w)', borderRadius: 'var(--radius-lg)', background: 'var(--bg-card)', padding: '2rem', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bronze)', fontWeight: 600, marginBottom: '1rem' }}>{r.phase}</div>
                <div style={{ fontSize: '1.05rem', color: 'var(--text)', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', marginBottom: '0.6rem' }}>{r.title}</div>
                <p style={{ fontSize: '0.86rem', color: 'var(--text-2)', lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
