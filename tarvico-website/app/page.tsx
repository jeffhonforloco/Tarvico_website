'use client'

import Link from 'next/link'
import { Button, SectionLabel, Divider } from '@/components/ui'

// ── Inline style helpers ──────────────────────────────────────────────────────

const S = {
  section: {
    padding: '7rem 3rem',
    maxWidth: 1200,
    margin: '0 auto',
  } as React.CSSProperties,
  h2: {
    fontFamily: '"Cormorant Garamond", serif',
    fontSize: 'clamp(2.4rem, 4vw, 3.8rem)',
    fontWeight: 400,
    lineHeight: 1.1,
    color: 'var(--text)',
    marginBottom: '1.5rem',
  } as React.CSSProperties,
  sub: {
    fontSize: '1.05rem',
    color: 'var(--text-2)',
    lineHeight: 1.8,
    fontWeight: 400,
  } as React.CSSProperties,
}

// ── PORTFOLIO DATA ─────────────────────────────────────────────────────────────

const portfolio = [
  {
    name: 'Vytre AWOS',
    status: 'Flagship',
    statusColor: 'var(--gold)',
    category: 'AI Workforce Infrastructure',
    desc: 'The AI operating layer for enterprise. Deploy, orchestrate, and scale AI workers across every business function with intelligence at the core.',
    market: 'Enterprise · SaaS',
  },
  {
    name: 'SireIQ',
    status: 'Incubation',
    statusColor: 'var(--gold-light)',
    category: 'AI Assistant · Productivity',
    desc: 'An intelligent AI assistant for chat, content creation, and workflow automation. Designed to elevate individual and team productivity at scale.',
    market: 'SMB · Consumer',
  },
  {
    name: 'SEOAgentPro',
    status: 'Incubation',
    statusColor: 'var(--gold-light)',
    category: 'AI Search · Digital Marketing',
    desc: 'Autonomous AI-driven SEO intelligence. Content strategy, optimization, and execution powered by real-time data and machine learning.',
    market: 'Agencies · Growth',
  },
  {
    name: 'Fycra',
    status: 'Stealth',
    statusColor: 'var(--text-3)',
    category: 'Developer Tools · Code Platform',
    desc: 'A next-generation AI-native code platform for modern development teams. Intelligent assistance, automated review, and accelerated delivery.',
    market: 'Developers · Teams',
  },
  {
    name: 'Fycera',
    status: 'Stealth',
    statusColor: 'var(--text-3)',
    category: 'AI Creative · Content Creation',
    desc: 'Intelligent content creation infrastructure. AI-native tools for creators, brands, and media operations at scale.',
    market: 'Creators · Media',
  },
]

const philosophy = [
  { n: '01', title: 'Long-Term Over Short-Term', desc: 'We measure success in decades, not quarters. Every strategic decision is evaluated on its long-term impact on portfolio value and compounding moats.' },
  { n: '02', title: 'Infrastructure Before Features', desc: 'We build foundations first. Deep infrastructure creates lasting defensibility. Features are temporary; architecture is permanent.' },
  { n: '03', title: 'AI as Operating Layer', desc: 'Artificial intelligence is not a product feature at Tarvico. It is the fundamental operating system of every company, team, and workflow we build.' },
  { n: '04', title: 'Elite, Lean Teams', desc: 'Small groups of exceptional people with AI leverage outperform large organizations. We maximize output per person and protect operational agility.' },
  { n: '05', title: 'Sustainable Capital Discipline', desc: 'Growth should be earned, not bought. We allocate capital toward compounding returns and sustainable unit economics from the earliest stage.' },
  { n: '06', title: 'Focused Execution', desc: 'Strategy without execution is fiction. We operate with relentless focus — every initiative is evaluated by its ability to compound portfolio value.' },
]

// ── PAGE ───────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        background: 'var(--bg)',
      }}>
        {/* Animated grid */}
        <div className="hero-grid" style={{ position: 'absolute', inset: 0 }} />

        {/* Radial vignette — fades grid to bg color at edges */}
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, var(--bg) 100%)',
        }} />

        {/* Gold glow */}
        <div className="animate-pulse-slow" style={{
          position: 'absolute',
          top: '20%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 700,
          height: 700,
          background: 'radial-gradient(circle, rgba(184,144,42,0.08) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />

        {/* Hero content */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 3rem', width: '100%' }}>
          <div className="animate-fade-up delay-100" style={{
            fontSize: '0.65rem',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'var(--gold)',
            marginBottom: '2rem',
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            fontWeight: 500,
          }}>
            <span style={{ display: 'block', width: 32, height: 1.5, background: 'var(--gold)' }} />
            An Operating Company for the AI Era
          </div>

          <h1 className="animate-fade-up delay-250" style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(3.2rem, 6.5vw, 6.5rem)',
            fontWeight: 400,
            color: 'var(--text)',
            maxWidth: 820,
            marginBottom: '2rem',
            lineHeight: 1.0,
          }}>
            Building <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>enduring</em><br />
            AI-native companies.
          </h1>

          <p className="animate-fade-up delay-400" style={{
            fontSize: '1.15rem',
            color: 'var(--text-2)',
            maxWidth: 580,
            lineHeight: 1.8,
            marginBottom: '3.5rem',
            fontWeight: 400,
          }}>
            Tarvico Inc. builds, launches, and scales AI-native software companies focused on automation, intelligence, productivity, and digital infrastructure.
          </p>

          <div className="animate-fade-up delay-550" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Button href="/portfolio" variant="primary">Explore Portfolio →</Button>
            <Button href="/investors" variant="secondary">Investor Relations</Button>
          </div>
        </div>

        {/* Right stats */}
        <div style={{
          position: 'absolute',
          bottom: '3rem',
          right: '3rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          zIndex: 2,
        }}>
          {[
            { n: '5', l: 'Companies in Development' },
            { n: '2025', l: 'Year Founded' },
            { n: 'AI', l: 'Native from Day One' },
          ].map(s => (
            <div key={s.n} style={{ textAlign: 'right' }}>
              <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.2rem', fontWeight: 400, color: 'var(--text)', lineHeight: 1 }}>{s.n}</div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', marginTop: 3, fontWeight: 500 }}>{s.l}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, var(--gold), transparent)', animation: 'scrollLine 2s ease-in-out infinite' }} />
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 500 }}>Scroll</span>
        </div>
      </section>

      <Divider />

      {/* ── COMPANY OVERVIEW ─────────────────────────────────────────────────── */}
      <div style={S.section}>
        <SectionLabel>What We Are</SectionLabel>
        <h2 style={S.h2}>
          Not a startup.<br />
          An operating system<br />
          for <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>new ventures.</em>
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', marginTop: '3rem' }}>
          <div>
            <p style={{ ...S.sub, marginBottom: '1.5rem' }}>
              Tarvico Inc. is an <strong style={{ color: 'var(--text)', fontWeight: 600 }}>AI-native holding company</strong> that designs, builds, and operates a portfolio of software and AI ventures. We are not a single-product startup — we are institutional infrastructure for the next generation of intelligent systems.
            </p>
            <p style={{ ...S.sub, marginBottom: '1.5rem' }}>
              Our model combines the <strong style={{ color: 'var(--text)', fontWeight: 600 }}>capital discipline of a holding company</strong> with the velocity of a product studio. We incubate ideas internally, build with lean elite teams, and scale through operational leverage rather than headcount.
            </p>
            <p style={S.sub}>
              Every company in our portfolio is designed for <strong style={{ color: 'var(--text)', fontWeight: 600 }}>long-term compounding</strong> — products that grow more defensible, more intelligent, and more valuable with every passing year.
            </p>
            <div style={{ marginTop: '2.5rem' }}>
              <Button href="/about" variant="secondary">Our Philosophy →</Button>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {[
              { t: 'Incubation First', d: 'Ideas are developed internally before any external launch. We validate with rigor and build with conviction.' },
              { t: 'AI-Native Architecture', d: 'Every product is designed around intelligence from day one — not retrofitted. AI is the operating layer, not a feature.' },
              { t: 'Long-Term Capital Strategy', d: 'We build for decades, not quarters. Patient ownership, focused reinvestment, and compounding moats.' },
              { t: 'Operational Leverage', d: 'Small, elite teams with asymmetric output. AI multiplies human capability across the entire portfolio.' },
            ].map(p => (
              <div key={p.t} style={{ borderLeft: '2px solid var(--gold-border)', padding: '1rem 1.5rem', background: 'var(--bg-card)', borderRadius: 0 }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--text)', marginBottom: '0.4rem', letterSpacing: '0.02em', fontWeight: 500 }}>{p.t}</div>
                <div style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 400 }}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider />

      {/* ── FLAGSHIP ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)', borderBottom: '1px solid var(--border-w)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 3rem' }}>
          <span style={{
            display: 'inline-block',
            border: '1px solid var(--gold)',
            color: 'var(--gold)',
            fontSize: '0.6rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            padding: '6px 16px',
            marginBottom: '2rem',
            fontWeight: 500,
          }}>
            Flagship Product · Launching 2025
          </span>

          <h2 style={{ ...S.h2, maxWidth: 600 }}>
            AI Workforce<br />Operating System
          </h2>
          <p style={{ ...S.sub, maxWidth: 560, marginBottom: '3rem' }}>
            A next-generation AI operating layer that enables businesses to deploy, manage, coordinate, and scale AI workers across operations, workflows, departments, and enterprise systems.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '5rem', alignItems: 'center' }}>
            {/* Features */}
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                {[
                  { icon: '◈', t: 'Agent Orchestration', d: 'Deploy and coordinate AI agents across complex multi-step workflows with intelligent routing.' },
                  { icon: '⬡', t: 'Workflow Automation', d: 'Model, automate, and optimize operational processes with adaptive AI-driven execution.' },
                  { icon: '◎', t: 'Enterprise Intelligence', d: 'Deep integration with enterprise systems. Contextual awareness across your entire data layer.' },
                  { icon: '◻', t: 'Digital Labor Scale', d: 'Operate at digital-workforce scale. Unlimited AI worker capacity with human oversight controls.' },
                ].map(f => (
                  <div key={f.t} style={{
                    padding: '1.5rem',
                    border: '1px solid var(--border-w)',
                    background: 'var(--bg)',
                    transition: 'border-color 0.2s, box-shadow 0.2s',
                  }}>
                    <div style={{ fontSize: '1.3rem', color: 'var(--gold)', marginBottom: '0.75rem' }}>{f.icon}</div>
                    <div style={{ fontSize: '0.85rem', color: 'var(--text)', marginBottom: '0.4rem', letterSpacing: '0.02em', fontWeight: 500 }}>{f.t}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 400 }}>{f.d}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '2rem' }}>
                <Button href="/portfolio" variant="primary">Learn More →</Button>
              </div>
            </div>

            {/* Live dashboard mockup */}
            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border-w)',
              padding: '1.75rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.25rem',
              boxShadow: '0 4px 24px rgba(0,0,0,0.06)',
            }}>
              <div style={{ height: 3, background: 'linear-gradient(to right, var(--gold), transparent)' }} />
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 500 }}>
                AWOS Dashboard · Live View
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-2)', marginBottom: '0.75rem', fontWeight: 400 }}>Active Agent Workloads</div>
                {[
                  { label: 'Sales Ops', pct: 82 },
                  { label: 'Finance', pct: 67 },
                  { label: 'HR Ops', pct: 45 },
                  { label: 'Customer', pct: 91 },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginTop: '0.5rem' }}>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-3)', width: 70, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 500 }}>{row.label}</div>
                    <div style={{ flex: 1, height: 4, background: 'var(--bg-deep)', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${row.pct}%`, background: 'var(--gold)', opacity: 0.8 }} />
                    </div>
                    <div style={{ fontSize: '0.65rem', color: 'var(--text-2)', minWidth: 30, textAlign: 'right', fontWeight: 500 }}>{row.pct}%</div>
                  </div>
                ))}
              </div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-2)', marginBottom: '0.6rem', fontWeight: 400 }}>Deployed Agents</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {['Analyst·12', 'Writer·7', 'Researcher·4', 'CRM·9', 'Compliance·3', 'Finance·6'].map((a, i) => (
                    <span key={a} style={{
                      fontSize: '0.62rem',
                      border: `1px solid ${i % 2 === 0 ? 'var(--gold)' : 'var(--border-w)'}`,
                      color: i % 2 === 0 ? 'var(--gold)' : 'var(--text-2)',
                      padding: '3px 10px',
                      letterSpacing: '0.06em',
                      fontWeight: 500,
                    }}>
                      {i % 2 === 0 && <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', marginRight: 5, boxShadow: '0 0 6px rgba(184,144,42,.4)', verticalAlign: 'middle' }} />}
                      {a}
                    </span>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--border-w)', paddingTop: '1rem', marginTop: 'auto' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-3)', fontWeight: 400 }}>41 agents · 127 tasks/hr</span>
                <span style={{ fontSize: '0.65rem', color: 'var(--gold)', fontWeight: 500 }}>
                  <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--gold)', marginRight: 5, boxShadow: '0 0 6px rgba(184,144,42,.4)', verticalAlign: 'middle' }} />
                  System operational
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── PORTFOLIO PREVIEW ─────────────────────────────────────────────────── */}
      <div style={S.section}>
        <SectionLabel>Portfolio</SectionLabel>
        <h2 style={S.h2}>Five ventures.<br />One ecosystem.</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5px', background: 'var(--border-w)', marginTop: '3rem' }}>
          {portfolio.map(p => (
            <div key={p.name} style={{ background: 'var(--bg)', padding: '2.5rem', transition: 'background 0.2s' }}
                 onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-raised)')}
                 onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.7rem', fontWeight: 400, color: 'var(--text)' }}>{p.name}</div>
                <span style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', border: `1px solid ${p.statusColor}`, color: p.statusColor, padding: '3px 10px', whiteSpace: 'nowrap', fontWeight: 500 }}>{p.status}</span>
              </div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem', fontWeight: 500 }}>{p.category}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '1.5rem', fontWeight: 400 }}>{p.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-w)', paddingTop: '1.2rem' }}>
                <span style={{ fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.08em', fontWeight: 500 }}>{p.market}</span>
                <span style={{ fontSize: '0.8rem', color: 'var(--text-3)' }}>→</span>
              </div>
            </div>
          ))}
          <Link href="/portfolio" style={{
            background: 'var(--bg-raised)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            textAlign: 'center',
            padding: '3rem 2rem',
            textDecoration: 'none',
            transition: 'background 0.2s',
          }}>
            <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.2rem', color: 'var(--text-3)', marginBottom: '1rem', fontWeight: 300 }}>+</div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '1.5rem', fontWeight: 500 }}>More in development</div>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>View Full Portfolio →</div>
          </Link>
        </div>
      </div>

      <Divider />

      {/* ── PHILOSOPHY ───────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-raised)' }}>
        <div style={S.section}>
          <SectionLabel>Operating Philosophy</SectionLabel>
          <h2 style={{ ...S.h2, maxWidth: 580 }}>Principles that compound<br />over decades.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, marginTop: '3rem' }}>
            {philosophy.map(p => (
              <div key={p.n} style={{ padding: '2.5rem', border: '1px solid var(--border-w)' }}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '3rem', fontWeight: 300, color: 'var(--text-3)', lineHeight: 1, marginBottom: '1.5rem' }}>{p.n}</div>
                <div style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '0.75rem', fontWeight: 500 }}>{p.title}</div>
                <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 400 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FOUNDER LETTER PREVIEW ───────────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid var(--border-w)' }}>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', padding: '7rem 3rem' }}>
          <SectionLabel center>Founder Letter</SectionLabel>
          <blockquote style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.5rem, 3vw, 2.3rem)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'var(--text)',
            lineHeight: 1.55,
            marginBottom: '2.5rem',
          }}>
            "The next generation of great companies will not just build software. They will build systems that improve how people operate, create, communicate, and solve problems in everyday life."
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
            <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold-border)' }} />
            <span style={{ fontSize: '0.75rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-2)', fontWeight: 500 }}>Jeff Yèmalín Bienvenu Honforloco, Founder & CEO</span>
            <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold-border)' }} />
          </div>
          <Button href="/vision" variant="secondary">Read Founder Letter →</Button>
        </div>
      </div>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <div style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)', textAlign: 'center', padding: '6rem 3rem' }}>
        <div style={{ fontSize: '0.62rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '2rem', fontWeight: 500 }}>Tarvico Inc.</div>
        <h2 style={{
          fontFamily: '"Cormorant Garamond", serif',
          fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
          fontWeight: 400,
          color: 'var(--text)',
          maxWidth: 700,
          margin: '0 auto 2.5rem',
          lineHeight: 1.1,
        }}>
          Building the infrastructure layer<br />for the AI era.
        </h2>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button href="/contact" variant="primary">Get in Touch →</Button>
          <Button href="/investors" variant="secondary">Investor Relations</Button>
        </div>
      </div>
    </>
  )
}
