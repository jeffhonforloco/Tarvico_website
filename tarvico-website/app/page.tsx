'use client'

import Link from 'next/link'
import { Button, SectionLabel, Divider } from '@/components/ui'

const S = {
  section: {
    padding: '8rem 3rem',
    maxWidth: 1200,
    margin: '0 auto',
  } as React.CSSProperties,
  h2: {
    fontFamily: '"Cormorant Garamond", serif',
    fontSize: 'clamp(2.6rem, 4.5vw, 4.2rem)',
    fontWeight: 400,
    lineHeight: 1.05,
    color: 'var(--text)',
    letterSpacing: '-0.01em',
    marginBottom: '1.5rem',
  } as React.CSSProperties,
  sub: {
    fontSize: '1rem',
    color: 'var(--text-2)',
    lineHeight: 1.85,
    fontWeight: 300,
  } as React.CSSProperties,
}

const portfolio = [
  {
    name: 'Vytre AWOS',
    url: 'https://www.vytre.io',
    status: 'Flagship',
    statusColor: 'var(--gold)',
    statusBg: 'var(--gold-glow)',
    statusBorder: 'var(--gold-border)',
    category: 'Workforce Infrastructure · Enterprise',
    desc: 'The intelligent operating layer for enterprise workforce management. Deploy, orchestrate, and scale AI-powered workers across every business function at institutional scale.',
    market: 'Enterprise · SaaS',
    year: '2026',
    hasDot: true,
    dotColor: 'var(--gold)',
  },
  {
    name: 'SireIQ',
    url: 'https://www.sireiq.com',
    status: 'Incubation',
    statusColor: 'var(--gold-dim)',
    statusBg: 'transparent',
    statusBorder: 'rgba(201,164,71,0.15)',
    category: 'Intelligence Assistant · Productivity',
    desc: 'An intelligent assistant for chat, content creation, and workflow automation. Designed to elevate individual and team productivity at scale.',
    market: 'SMB · Consumer',
    year: '2025',
    hasDot: false,
    dotColor: '',
  },
  {
    name: 'SEOAgentPro',
    url: 'https://www.seoagentpro.com',
    status: 'Incubation',
    statusColor: 'var(--gold-dim)',
    statusBg: 'transparent',
    statusBorder: 'rgba(201,164,71,0.15)',
    category: 'Search Intelligence · Digital Growth',
    desc: 'Autonomous SEO intelligence platform. Content strategy, optimization, and execution powered by real-time data and machine-driven analysis.',
    market: 'Agencies · Growth',
    year: '2025',
    hasDot: false,
    dotColor: '',
  },
  {
    name: 'Fycra',
    url: 'https://www.fycra.com',
    status: 'Stealth',
    statusColor: 'var(--text-3)',
    statusBg: 'transparent',
    statusBorder: 'var(--border-w)',
    category: 'Developer Tools · Code Platform',
    desc: 'A next-generation code platform for modern development teams. Intelligent assistance, automated review, and accelerated delivery at scale.',
    market: 'Developers · Teams',
    year: '2025',
    hasDot: false,
    dotColor: '',
  },
  {
    name: 'Fycera',
    url: 'https://www.fycera.com',
    status: 'Stealth',
    statusColor: 'var(--text-3)',
    statusBg: 'transparent',
    statusBorder: 'var(--border-w)',
    category: 'Creative Infrastructure · Content',
    desc: 'Intelligent content creation infrastructure for creators, brands, and media operations. Professional-grade tools built for scale.',
    market: 'Creators · Media',
    year: '2025',
    hasDot: false,
    dotColor: '',
  },
]

const philosophy = [
  { n: '01', title: 'Long-Term Over Short-Term', desc: 'We measure success in decades, not quarters. Every strategic decision is evaluated on its long-term impact on portfolio value and compounding competitive moats.' },
  { n: '02', title: 'Infrastructure Before Features', desc: 'We build foundations first. Deep infrastructure creates lasting defensibility. Features are temporary; architecture is permanent.' },
  { n: '03', title: 'Intelligence as Leverage', desc: 'Technology is not a feature at Tarvico — it is the fundamental operating layer of every company, team, and workflow we build and invest in.' },
  { n: '04', title: 'Elite, Lean Teams', desc: 'Small groups of exceptional people with technological leverage outperform large organizations. We maximize output per person and protect operational agility.' },
  { n: '05', title: 'Sustainable Capital Discipline', desc: 'Growth should be earned, not bought. We allocate capital toward compounding returns and sustainable unit economics from the earliest stage.' },
  { n: '06', title: 'Focused Execution', desc: 'Strategy without execution is fiction. We operate with relentless focus — every initiative is evaluated by its ability to compound long-term portfolio value.' },
]

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
        <div className="hero-grid" style={{ position: 'absolute', inset: 0 }} />
        <div className="hero-grid-fine" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
        <div style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse 90% 80% at 50% 50%, transparent 30%, var(--bg) 80%)',
        }} />
        <div className="animate-pulse-slow" style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 900,
          height: 900,
          background: 'radial-gradient(circle, rgba(201,164,71,0.055) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '8%',
          width: 360,
          height: 360,
          background: 'radial-gradient(circle, rgba(91,155,213,0.04) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 3rem', width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="animate-fade-up delay-100" style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                fontSize: '0.6rem',
                letterSpacing: '0.3em',
                textTransform: 'uppercase',
                color: 'var(--gold)',
                marginBottom: '2.5rem',
                fontWeight: 500,
              }}>
                <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold)' }} />
                Tarvico Inc. · Est. 2026
                <span style={{ display: 'block', width: 32, height: 1, background: 'var(--gold-border)' }} />
              </div>

              <h1 className="animate-fade-up delay-250" style={{
                fontFamily: '"Cormorant Garamond", serif',
                fontSize: 'clamp(3.8rem, 7.5vw, 8rem)',
                fontWeight: 400,
                color: 'var(--text)',
                maxWidth: 860,
                lineHeight: 0.96,
                letterSpacing: '-0.02em',
                marginBottom: '2.5rem',
              }}>
                Building the<br />
                intelligence<br />
                <em style={{ fontStyle: 'italic', color: 'var(--gold)', fontWeight: 300 }}>infrastructure</em><br />
                for tomorrow.
              </h1>

              <p className="animate-fade-up delay-400" style={{
                fontSize: '1.1rem',
                color: 'var(--text-2)',
                maxWidth: 520,
                lineHeight: 1.85,
                marginBottom: '3.5rem',
                fontWeight: 300,
              }}>
                Tarvico Inc. is a private technology holding company that builds, acquires, and operates a portfolio of software and technology ventures — engineered for long-term value, global scale, and institutional permanence.
              </p>

              <div className="animate-fade-up delay-550" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Button href="/portfolio" variant="primary">Explore Portfolio →</Button>
                <Button href="/investors" variant="secondary">Investor Relations</Button>
              </div>
            </div>

            <div className="animate-fade-up delay-700" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '2.25rem',
              borderLeft: '1px solid var(--border-w)',
              paddingLeft: '3rem',
              minWidth: 180,
            }}>
              {[
                { n: '6', l: 'Ventures in Portfolio' },
                { n: '2026', l: 'Founded' },
                { n: '∞', l: 'Long-Term Horizon' },
              ].map(s => (
                <div key={s.n}>
                  <div style={{
                    fontFamily: '"Cormorant Garamond", serif',
                    fontSize: 'clamp(2rem, 3.5vw, 3rem)',
                    fontWeight: 300,
                    color: 'var(--text)',
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                  }}>{s.n}</div>
                  <div style={{
                    fontSize: '0.58rem',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--text-3)',
                    marginTop: 6,
                    fontWeight: 500,
                  }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 10,
          zIndex: 2,
        }}>
          <div style={{ width: 1, height: 48, background: 'linear-gradient(to bottom, var(--gold), transparent)' }} className="animate-scroll-line" />
          <span style={{ fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 500 }}>Scroll</span>
        </div>

        <div style={{ position: 'absolute', bottom: '2rem', right: '3rem', display: 'flex', alignItems: 'center', gap: 8, zIndex: 2 }}>
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--emerald)',
          }} className="animate-pulse-dot" />
          <span style={{ fontSize: '0.58rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 500 }}>
            Systems Operational
          </span>
        </div>
      </section>

      <Divider />

      {/* ── COMPANY OVERVIEW ─────────────────────────────────────────────────── */}
      <div style={S.section}>
        <div style={{ display: 'grid', gridTemplateColumns: '5fr 4fr', gap: '6rem', alignItems: 'start' }}>
          <div>
            <SectionLabel>What We Are</SectionLabel>
            <h2 style={{ ...S.h2, maxWidth: 600 }}>
              Not a startup.<br />An institution<br />
              for <em style={{ fontStyle: 'italic', color: 'var(--gold)' }}>the next economy.</em>
            </h2>
            <p style={{ ...S.sub, marginBottom: '1.5rem' }}>
              Tarvico Inc. is a <strong style={{ color: 'var(--text)', fontWeight: 400 }}>private technology holding company</strong> that designs, builds, and operates a diversified portfolio of software and technology ventures. We are not a single-product startup — we are institutional infrastructure for the next era of human and technological progress.
            </p>
            <p style={{ ...S.sub, marginBottom: '1.5rem' }}>
              Our model combines the <strong style={{ color: 'var(--text)', fontWeight: 400 }}>capital discipline of a holding company</strong> with the velocity of a product studio. We incubate ideas internally, build with lean elite teams, and scale through operational leverage rather than headcount.
            </p>
            <p style={{ ...S.sub, marginBottom: '3rem' }}>
              Every company in our portfolio is designed for <strong style={{ color: 'var(--text)', fontWeight: 400 }}>long-term compounding</strong> — products that grow more defensible, more intelligent, and more valuable with every passing year.
            </p>
            <Button href="/about" variant="secondary">Our Philosophy →</Button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--border-w)' }}>
            {[
              { t: 'Incubation First', d: 'Ideas are developed internally before any external launch. We validate with rigor and build with conviction.' },
              { t: 'Intelligence-First Architecture', d: 'Every product is designed around intelligence from day one — not retrofitted. Technology is the operating layer, not a feature.' },
              { t: 'Long-Term Capital Strategy', d: 'We build for decades, not quarters. Patient ownership, focused reinvestment, and compounding moats define our capital approach.' },
              { t: 'Operational Leverage', d: 'Small, elite teams with asymmetric output. Technology multiplies human capability across the entire portfolio simultaneously.' },
            ].map(p => (
              <div key={p.t} style={{
                borderLeft: '2px solid var(--gold-border)',
                padding: '1.5rem 1.75rem',
                background: 'var(--bg-card)',
                transition: 'border-color 0.2s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--gold)' }}
                onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'var(--gold-border)' }}
              >
                <div style={{ fontSize: '0.88rem', color: 'var(--text)', marginBottom: '0.4rem', fontWeight: 400 }}>{p.t}</div>
                <div style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300 }}>{p.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Divider />

      {/* ── FLAGSHIP: VYTRE AWOS ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)', borderBottom: '1px solid var(--border-w)' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '8rem 3rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '3.5rem', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  border: '1px solid var(--gold-border)', color: 'var(--gold)',
                  fontSize: '0.56rem', letterSpacing: '0.22em', textTransform: 'uppercase',
                  padding: '5px 12px', fontWeight: 500, background: 'var(--gold-glow)',
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} className="animate-pulse-gold" />
                  Flagship · Launching 2026
                </span>
              </div>
              <h2 style={{ ...S.h2, maxWidth: 540, marginBottom: '1rem' }}>
                AI Workforce<br />Operating System
              </h2>
              <p style={{ ...S.sub, maxWidth: 480 }}>
                The enterprise control plane for autonomous AI workforce deployment, coordination, and operational intelligence at scale.
              </p>
            </div>
            <Button href="/contact" variant="primary">Request Early Access →</Button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>
            <div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: 'var(--border-w)', marginBottom: '2rem' }}>
                {[
                  { icon: '◈', t: 'Agent Orchestration', d: 'Deploy and coordinate AI agents across complex multi-step workflows with intelligent routing.' },
                  { icon: '⬡', t: 'Workflow Automation', d: 'Model, automate, and optimize operational processes with adaptive AI-driven execution.' },
                  { icon: '◎', t: 'Enterprise Intelligence', d: 'Deep integration with enterprise systems. Contextual awareness across your entire data layer.' },
                  { icon: '◻', t: 'Digital Labor Scale', d: 'Operate at digital-workforce scale with unlimited AI worker capacity and human oversight.' },
                ].map(f => (
                  <div key={f.t} style={{ padding: '1.75rem', background: 'var(--bg)', transition: 'background 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg)' }}
                  >
                    <div style={{ fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '0.75rem', opacity: 0.8 }}>{f.icon}</div>
                    <div style={{ fontSize: '0.82rem', color: 'var(--text)', marginBottom: '0.4rem', fontWeight: 400 }}>{f.t}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 300 }}>{f.d}</div>
                  </div>
                ))}
              </div>
              <Button href="/portfolio" variant="ghost">View Full Platform →</Button>
            </div>

            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border-w)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
            }}>
              <div style={{ height: 2, background: 'linear-gradient(to right, var(--gold), var(--blue), transparent)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 500 }}>AWOS · Orchestration View</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--emerald)', display: 'inline-block' }} className="animate-pulse-dot" />
                  <span style={{ fontSize: '0.56rem', color: 'var(--emerald)', letterSpacing: '0.1em', fontWeight: 500 }}>Live</span>
                </span>
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-2)', marginBottom: '0.85rem', fontWeight: 300 }}>Active Agent Workloads</div>
                {[
                  { label: 'Sales Ops', pct: 82, color: 'var(--gold)' },
                  { label: 'Finance', pct: 67, color: 'var(--blue)' },
                  { label: 'HR Ops', pct: 45, color: 'var(--gold-dim)' },
                  { label: 'Customer', pct: 91, color: 'var(--emerald)' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.6rem' }}>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-3)', width: 68, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>{row.label}</div>
                    <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.05)', position: 'relative', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${row.pct}%`, background: row.color, opacity: 0.75 }} />
                    </div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-2)', minWidth: 28, textAlign: 'right', fontWeight: 400 }}>{row.pct}%</div>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-2)', marginBottom: '0.65rem', fontWeight: 300 }}>Deployed Agents</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.45rem' }}>
                  {[
                    { label: 'Analyst·12', active: true },
                    { label: 'Writer·7', active: false },
                    { label: 'Research·4', active: true },
                    { label: 'CRM·9', active: false },
                    { label: 'Compliance·3', active: true },
                    { label: 'Finance·6', active: false },
                  ].map(a => (
                    <span key={a.label} style={{
                      fontSize: '0.6rem',
                      border: `1px solid ${a.active ? 'var(--gold-border)' : 'var(--border-w)'}`,
                      color: a.active ? 'var(--gold)' : 'var(--text-3)',
                      padding: '3px 9px', letterSpacing: '0.06em', fontWeight: 500,
                    }}>
                      {a.label}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-w)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-3)', fontWeight: 300 }}>41 agents · 127 tasks/hr · 99.7% uptime</span>
                <span style={{ fontSize: '0.6rem', color: 'var(--emerald)', fontWeight: 500 }}>◆ Operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── PORTFOLIO PREVIEW ─────────────────────────────────────────────────── */}
      <div style={S.section}>
        <SectionLabel>Portfolio</SectionLabel>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
          <h2 style={{ ...S.h2, marginBottom: 0 }}>Six ventures.<br />One ecosystem.</h2>
          <Button href="/portfolio" variant="ghost">View All →</Button>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1px', background: 'var(--border-w)' }}>
          {portfolio.map(p => (
            <div key={p.name}
              style={{ background: 'var(--bg)', padding: '2.5rem', transition: 'background 0.25s', display: 'flex', flexDirection: 'column' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.75rem', fontWeight: 400, color: 'var(--text)', letterSpacing: '-0.01em' }}>{p.name}</div>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontSize: '0.54rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                  border: `1px solid ${p.statusBorder}`, color: p.statusColor,
                  background: p.statusBg, padding: '3px 9px', whiteSpace: 'nowrap', fontWeight: 500,
                }}>
                  {p.hasDot && <span style={{ width: 4, height: 4, borderRadius: '50%', background: p.dotColor, display: 'inline-block' }} />}
                  {p.status}
                </span>
              </div>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.85rem', fontWeight: 500 }}>{p.category}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.75, marginBottom: '1.75rem', fontWeight: 300, flex: 1 }}>{p.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-w)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.1em', fontWeight: 400 }}>{p.market}</span>
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.6rem', color: 'var(--gold)', letterSpacing: '0.08em',
                  fontWeight: 500, textDecoration: 'none', transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >Visit →</a>
              </div>
            </div>
          ))}
          <Link href="/portfolio" style={{
            background: 'var(--bg-raised)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', flexDirection: 'column', textAlign: 'center',
            padding: '3rem 2rem', textDecoration: 'none', transition: 'background 0.2s', minHeight: 240,
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-raised)' }}
          >
            <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.5rem', color: 'var(--text-3)', marginBottom: '0.75rem', fontWeight: 300, lineHeight: 1 }}>+</div>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '1.25rem', fontWeight: 500 }}>More in development</div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>View Full Portfolio →</div>
          </Link>
        </div>
      </div>

      <Divider />

      {/* ── PHILOSOPHY ───────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)', borderBottom: '1px solid var(--border-w)' }}>
        <div style={S.section}>
          <SectionLabel>Operating Philosophy</SectionLabel>
          <h2 style={{ ...S.h2, maxWidth: 560 }}>Principles that compound<br />over decades.</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border-w)', marginTop: '3.5rem' }}>
            {philosophy.map(p => (
              <div key={p.n} style={{
                padding: '2.75rem', background: 'var(--bg-raised)',
                borderTop: '2px solid transparent', transition: 'border-color 0.25s, background 0.25s',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderTopColor = 'var(--gold)'; e.currentTarget.style.background = 'var(--bg-card)' }}
                onMouseLeave={e => { e.currentTarget.style.borderTopColor = 'transparent'; e.currentTarget.style.background = 'var(--bg-raised)' }}
              >
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '3.5rem', fontWeight: 300, color: 'var(--text-3)', lineHeight: 1, marginBottom: '1.75rem' }}>{p.n}</div>
                <div style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.85rem', fontWeight: 400 }}>{p.title}</div>
                <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 300 }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FOUNDER LETTER PREVIEW ───────────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid var(--border-w)' }}>
        <div style={{ maxWidth: 680, margin: '0 auto', textAlign: 'center', padding: '9rem 3rem' }}>
          <SectionLabel center>Founder Letter</SectionLabel>
          <blockquote style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(1.6rem, 3.2vw, 2.6rem)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: 'var(--text)',
            lineHeight: 1.45,
            marginBottom: '3rem',
            letterSpacing: '-0.01em',
          }}>
            "The next generation of great companies will not just build software. They will build systems that improve how people operate, create, communicate, and solve problems in everyday life."
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', marginBottom: '3rem' }}>
            <span style={{ display: 'block', flex: 1, maxWidth: 48, height: 1, background: 'var(--border-w)' }} />
            <span style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-2)', fontWeight: 400 }}>Jeff Yèmalín Bienvenu Honforloco — Founder & CEO</span>
            <span style={{ display: 'block', flex: 1, maxWidth: 48, height: 1, background: 'var(--border-w)' }} />
          </div>
          <Button href="/vision" variant="secondary">Read Founder Letter →</Button>
        </div>
      </div>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <div style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)', textAlign: 'center', padding: '8rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, transparent 30%, var(--bg-raised) 80%)' }} />
        <div style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: '0.58rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '2.5rem', fontWeight: 500 }}>Tarvico Inc. · 2026</div>
          <h2 style={{
            fontFamily: '"Cormorant Garamond", serif',
            fontSize: 'clamp(2.4rem, 4.5vw, 4.2rem)',
            fontWeight: 400,
            color: 'var(--text)',
            maxWidth: 680,
            margin: '0 auto 1rem',
            lineHeight: 1.08,
            letterSpacing: '-0.01em',
          }}>
            Building enduring technology companies<br />for the next global economy.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--text-2)', maxWidth: 440, margin: '0 auto 3.5rem', lineHeight: 1.8, fontWeight: 300 }}>
            We are at the beginning of a long journey. The work ahead will take decades. We are building with that conviction.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="primary">Get in Touch →</Button>
            <Button href="/investors" variant="secondary">Investor Relations</Button>
          </div>
        </div>
      </div>
    </>
  )
}
