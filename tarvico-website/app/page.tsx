'use client'

import Link from 'next/link'
import { Button, SectionLabel, Divider, FadeUp, AnimatedBar, AnimatedNumber } from '@/components/ui'

const S = {
  section: {
    padding: '8rem 3rem',
    maxWidth: 1200,
    margin: '0 auto',
  } as React.CSSProperties,
  h2: {
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.3rem, 4.2vw, 3.8rem)',
    fontWeight: 700,
    lineHeight: 1.04,
    color: 'var(--text)',
    letterSpacing: '-0.035em',
    marginBottom: '1.5rem',
  } as React.CSSProperties,
  sub: {
    fontSize: '1.05rem',
    color: 'var(--text-2)',
    lineHeight: 1.7,
    fontWeight: 400,
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
    name: 'Maeyen',
    url: 'https://www.maeyen.com',
    status: 'Building',
    statusColor: 'var(--gold-dim)',
    statusBg: 'transparent',
    statusBorder: 'rgba(205,169,75,0.18)',
    category: 'Commerce Trust Network · Africa',
    desc: 'A commerce trust network for Africa, starting from Nigeria. More than a marketplace — Maeyen solves the biggest problem in African online commerce: trust between buyers and sellers.',
    market: 'Africa · Commerce',
    year: '2025',
    hasDot: false,
    dotColor: '',
  },
  {
    name: 'Racym',
    url: 'https://www.racym.com',
    status: 'Building',
    statusColor: 'var(--gold-dim)',
    statusBg: 'transparent',
    statusBorder: 'rgba(205,169,75,0.18)',
    category: 'Talent Network · Creative',
    desc: 'Talent that delivers — verified. Racym matches brands and agencies to pre-vetted creative talent based on what they have actually delivered, not their follower count.',
    market: 'Brands · Agencies · Creators',
    year: '2025',
    hasDot: false,
    dotColor: '',
  },
  {
    name: 'SireIQ',
    url: 'https://www.sireiq.com',
    status: 'Incubation',
    statusColor: 'var(--gold-dim)',
    statusBg: 'transparent',
    statusBorder: 'rgba(205,169,75,0.18)',
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
    statusBorder: 'rgba(205,169,75,0.18)',
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
          top: '12%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 1000,
          height: 1000,
          background: 'radial-gradient(circle, rgba(205,169,75,0.07) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute',
          top: '40%',
          right: '8%',
          width: 360,
          height: 360,
          background: 'radial-gradient(circle, rgba(91,155,213,0.05) 0%, transparent 60%)',
          pointerEvents: 'none',
        }} />

        <div className="mob-px" style={{ position: 'relative', zIndex: 2, maxWidth: 1200, margin: '0 auto', padding: '0 3rem', width: '100%' }}>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="animate-fade-up delay-100" style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                fontSize: '0.72rem',
                letterSpacing: '0.02em',
                color: 'var(--text-2)',
                marginBottom: '2.25rem',
                fontWeight: 500,
                padding: '7px 14px 7px 10px',
                border: '1px solid var(--border-m)',
                borderRadius: 999,
                background: 'var(--bg-card)',
              }}>
                <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} className="animate-pulse-gold" />
                Tarvico Inc. — Private Technology Holding Company
              </div>

              <h1 className="animate-fade-up delay-250" style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3.2rem, 6.4vw, 6.4rem)',
                fontWeight: 700,
                color: 'var(--text)',
                maxWidth: 900,
                lineHeight: 1.02,
                letterSpacing: '-0.04em',
                marginBottom: '1.75rem',
              }}>
                Building the<br />
                intelligence <span className="text-gradient-gold">infrastructure</span><br />
                for tomorrow.
              </h1>

              <p className="animate-fade-up delay-400" style={{
                fontSize: '1.18rem',
                color: 'var(--text-2)',
                maxWidth: 540,
                lineHeight: 1.65,
                marginBottom: '2.75rem',
                fontWeight: 400,
              }}>
                Tarvico Inc. builds, acquires, and operates a portfolio of AI-native software and technology ventures — engineered for long-term value, global scale, and institutional permanence.
              </p>

              <div className="animate-fade-up delay-550" style={{ display: 'flex', gap: '0.85rem', flexWrap: 'wrap' }}>
                <Button href="/portfolio" variant="primary">Explore Portfolio →</Button>
                <Button href="/investors" variant="secondary">Investor Relations</Button>
              </div>
            </div>

            <div className="animate-fade-up delay-700 mob-hide" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              minWidth: 200,
            }}>
              {[
                { n: 7,    sym: false, l: 'Ventures in Portfolio' },
                { n: 2026, sym: false, l: 'Founded' },
                { n: '∞',  sym: true,  l: 'Long-Term Horizon' },
              ].map(s => (
                <div key={String(s.n)} style={{
                  padding: '1.5rem 1.75rem',
                  border: '1px solid var(--border-w)',
                  borderRadius: 'var(--radius)',
                  background: 'var(--bg-card)',
                  boxShadow: 'var(--shadow-sm)',
                }}>
                  <div style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.9rem, 3vw, 2.6rem)',
                    fontWeight: 700,
                    color: 'var(--text)',
                    lineHeight: 1,
                    letterSpacing: '-0.04em',
                  }}>
                    <AnimatedNumber value={s.n} />
                  </div>
                  <div style={{
                    fontSize: '0.62rem',
                    letterSpacing: '0.16em',
                    textTransform: 'uppercase',
                    color: 'var(--text-3)',
                    marginTop: 8,
                    fontWeight: 600,
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
          <span style={{ fontSize: '0.55rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 600 }}>Scroll</span>
        </div>

        <div className="mob-hide" style={{ position: 'absolute', bottom: '2rem', right: '3rem', display: 'flex', alignItems: 'center', gap: 8, zIndex: 2 }}>
          <span style={{
            display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--emerald)',
          }} className="animate-pulse-dot" />
          <span style={{ fontSize: '0.6rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 600 }}>
            Systems Operational
          </span>
        </div>
      </section>

      <Divider />

      {/* ── COMPANY OVERVIEW ─────────────────────────────────────────────────── */}
      <div className="mob-p" style={S.section}>
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '5fr 4fr', gap: '6rem', alignItems: 'start' }}>
          <FadeUp>
            <SectionLabel>What We Are</SectionLabel>
            <h2 style={{ ...S.h2, maxWidth: 600 }}>
              Not a startup. An institution for <span className="text-gradient-gold">the next economy.</span>
            </h2>
            <p style={{ ...S.sub, marginBottom: '1.5rem' }}>
              Tarvico Inc. is a <strong style={{ color: 'var(--text)', fontWeight: 600 }}>private technology holding company</strong> that designs, builds, and operates a diversified portfolio of software and technology ventures. We are not a single-product startup — we are institutional infrastructure for the next era of human and technological progress.
            </p>
            <p style={{ ...S.sub, marginBottom: '1.5rem' }}>
              Our model combines the <strong style={{ color: 'var(--text)', fontWeight: 600 }}>capital discipline of a holding company</strong> with the velocity of a product studio. We incubate ideas internally, build with lean elite teams, and scale through operational leverage rather than headcount.
            </p>
            <p style={{ ...S.sub, marginBottom: '2.5rem' }}>
              Every company in our portfolio is designed for <strong style={{ color: 'var(--text)', fontWeight: 600 }}>long-term compounding</strong> — products that grow more defensible, more intelligent, and more valuable with every passing year.
            </p>
            <Button href="/about" variant="secondary">Our Philosophy →</Button>
          </FadeUp>

          <FadeUp delay={150} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {[
              { t: 'Incubation First', d: 'Ideas are developed internally before any external launch. We validate with rigor and build with conviction.' },
              { t: 'Intelligence-First Architecture', d: 'Every product is designed around intelligence from day one — not retrofitted. Technology is the operating layer, not a feature.' },
              { t: 'Long-Term Capital Strategy', d: 'We build for decades, not quarters. Patient ownership, focused reinvestment, and compounding moats define our capital approach.' },
              { t: 'Operational Leverage', d: 'Small, elite teams with asymmetric output. Technology multiplies human capability across the entire portfolio simultaneously.' },
            ].map(p => (
              <div key={p.t} style={{
                padding: '1.5rem 1.75rem',
                background: 'var(--bg-card)',
                border: '1px solid var(--border-w)',
                borderLeftWidth: 2,
                borderLeftColor: 'var(--gold-border)',
                borderRadius: 'var(--radius)',
                transition: 'border-color 0.3s, background 0.3s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
              }}
                onMouseEnter={e => { e.currentTarget.style.borderLeftColor = 'var(--gold)'; e.currentTarget.style.background = 'var(--bg-raised)'; e.currentTarget.style.transform = 'translateX(4px)' }}
                onMouseLeave={e => { e.currentTarget.style.borderLeftColor = 'var(--gold-border)'; e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.transform = 'translateX(0)' }}
              >
                <div style={{ fontSize: '0.98rem', color: 'var(--text)', marginBottom: '0.4rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{p.t}</div>
                <div style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 400 }}>{p.d}</div>
              </div>
            ))}
          </FadeUp>
        </div>
      </div>

      <Divider />

      {/* ── FLAGSHIP: VYTRE AWOS ─────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)', borderBottom: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={{ maxWidth: 1200, margin: '0 auto', padding: '8rem 3rem' }}>
          <FadeUp style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '3.5rem', gap: '2rem', flexWrap: 'wrap' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.5rem' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  border: '1px solid var(--gold-border)', color: 'var(--gold)',
                  fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                  padding: '5px 13px', fontWeight: 600, background: 'var(--gold-glow)', borderRadius: 999,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} className="animate-pulse-gold" />
                  Flagship · Launching 2026
                </span>
              </div>
              <h2 style={{ ...S.h2, maxWidth: 540, marginBottom: '1rem' }}>
                AI Workforce Operating System
              </h2>
              <p style={{ ...S.sub, maxWidth: 480 }}>
                The enterprise control plane for autonomous AI workforce deployment, coordination, and operational intelligence at scale.
              </p>
            </div>
            <Button href="/contact" variant="primary">Request Early Access →</Button>
          </FadeUp>

          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', alignItems: 'start' }}>
            <div>
              <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '1.5rem' }}>
                {[
                  { icon: '◈', t: 'Agent Orchestration', d: 'Deploy and coordinate AI agents across complex multi-step workflows with intelligent routing.' },
                  { icon: '⬡', t: 'Workflow Automation', d: 'Model, automate, and optimize operational processes with adaptive AI-driven execution.' },
                  { icon: '◎', t: 'Enterprise Intelligence', d: 'Deep integration with enterprise systems. Contextual awareness across your entire data layer.' },
                  { icon: '◻', t: 'Digital Labor Scale', d: 'Operate at digital-workforce scale with unlimited AI worker capacity and human oversight.' },
                ].map(f => (
                  <div key={f.t} style={{
                    padding: '1.6rem', background: 'var(--bg)', border: '1px solid var(--border-w)',
                    borderRadius: 'var(--radius)', transition: 'background 0.2s, transform 0.2s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
                    onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg)'; e.currentTarget.style.transform = 'translateY(0)' }}
                  >
                    <div style={{ fontSize: '1.1rem', color: 'var(--gold)', marginBottom: '0.75rem', opacity: 0.85 }}>{f.icon}</div>
                    <div style={{ fontSize: '0.9rem', color: 'var(--text)', marginBottom: '0.4rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.01em' }}>{f.t}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.55, fontWeight: 400 }}>{f.d}</div>
                  </div>
                ))}
              </div>
              <Button href="/portfolio" variant="ghost">View Full Platform →</Button>
            </div>

            <div style={{
              background: 'var(--bg)',
              border: '1px solid var(--border-w)',
              borderRadius: 'var(--radius-lg)',
              padding: '2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              boxShadow: 'var(--shadow)',
            }}>
              <div style={{ height: 3, borderRadius: 3, background: 'linear-gradient(to right, var(--gold), var(--blue), transparent)' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', fontWeight: 600 }}>AWOS · Orchestration View</span>
                <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--emerald)', display: 'inline-block' }} className="animate-pulse-dot" />
                  <span style={{ fontSize: '0.58rem', color: 'var(--emerald)', letterSpacing: '0.08em', fontWeight: 600 }}>Live</span>
                </span>
              </div>

              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-2)', marginBottom: '0.85rem', fontWeight: 400 }}>Active Agent Workloads</div>
                {[
                  { label: 'Sales Ops', pct: 82, color: 'var(--gold)' },
                  { label: 'Finance', pct: 67, color: 'var(--blue)' },
                  { label: 'HR Ops', pct: 45, color: 'var(--gold-dim)' },
                  { label: 'Customer', pct: 91, color: 'var(--emerald)' },
                ].map(row => (
                  <div key={row.label} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.6rem' }}>
                    <div style={{ fontSize: '0.62rem', color: 'var(--text-3)', width: 68, letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600 }}>{row.label}</div>
                    <AnimatedBar pct={row.pct} color={row.color} />
                    <div style={{ fontSize: '0.62rem', color: 'var(--text-2)', minWidth: 28, textAlign: 'right', fontWeight: 500 }}>{row.pct}%</div>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ fontSize: '0.74rem', color: 'var(--text-2)', marginBottom: '0.65rem', fontWeight: 400 }}>Deployed Agents</div>
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
                      fontSize: '0.62rem',
                      border: `1px solid ${a.active ? 'var(--gold-border)' : 'var(--border-w)'}`,
                      color: a.active ? 'var(--gold)' : 'var(--text-3)',
                      padding: '3px 10px', letterSpacing: '0.04em', fontWeight: 500, borderRadius: 999,
                    }}>
                      {a.label}
                    </span>
                  ))}
                </div>
              </div>

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-w)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.62rem', color: 'var(--text-3)', fontWeight: 400 }}>41 agents · 127 tasks/hr · 99.7% uptime</span>
                <span style={{ fontSize: '0.62rem', color: 'var(--emerald)', fontWeight: 600 }}>◆ Operational</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Divider />

      {/* ── PORTFOLIO PREVIEW ─────────────────────────────────────────────────── */}
      <div className="mob-p" style={S.section}>
        <FadeUp>
          <SectionLabel>Portfolio</SectionLabel>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1.5rem' }}>
            <h2 style={{ ...S.h2, marginBottom: 0 }}>Seven ventures. One ecosystem.</h2>
            <Button href="/portfolio" variant="ghost">View All →</Button>
          </div>
        </FadeUp>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem' }}>
          {portfolio.map((p, i) => (
            <FadeUp key={p.name} delay={i * 70}>
            <div
              className="card-lift"
              style={{
                background: 'var(--bg-card)', padding: '2.25rem', display: 'flex', flexDirection: 'column', height: '100%',
                border: '1px solid var(--border-w)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold-border)'; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-w)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.03em' }}>{p.name}</div>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  border: `1px solid ${p.statusBorder}`, color: p.statusColor,
                  background: p.statusBg, padding: '4px 10px', whiteSpace: 'nowrap', fontWeight: 600, borderRadius: 999,
                }}>
                  {p.hasDot && <span style={{ width: 4, height: 4, borderRadius: '50%', background: p.dotColor, display: 'inline-block' }} />}
                  {p.status}
                </span>
              </div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.85rem', fontWeight: 600 }}>{p.category}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.65, marginBottom: '1.75rem', fontWeight: 400, flex: 1 }}>{p.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-w)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.66rem', color: 'var(--text-3)', letterSpacing: '0.04em', fontWeight: 500 }}>{p.market}</span>
                <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.66rem', color: 'var(--gold)', letterSpacing: '0.04em',
                  fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >Visit →</a>
              </div>
            </div>
            </FadeUp>
          ))}
          <Link href="/portfolio" style={{
            background: 'var(--bg-raised)', display: 'flex', alignItems: 'center',
            justifyContent: 'center', flexDirection: 'column', textAlign: 'center',
            padding: '3rem 2rem', textDecoration: 'none', transition: 'background 0.2s', minHeight: 240,
            border: '1px dashed var(--border-m)', borderRadius: 'var(--radius-lg)',
          }}
            onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg-raised)' }}
          >
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', color: 'var(--text-3)', marginBottom: '0.75rem', fontWeight: 300, lineHeight: 1 }}>+</div>
            <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '1.25rem', fontWeight: 600 }}>More in development</div>
            <div style={{ fontSize: '0.66rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>View Full Portfolio →</div>
          </Link>
        </div>
      </div>

      <Divider />

      {/* ── PHILOSOPHY ───────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)', borderBottom: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={S.section}>
          <FadeUp>
            <SectionLabel>Operating Philosophy</SectionLabel>
            <h2 style={{ ...S.h2, maxWidth: 560 }}>Principles that compound over decades.</h2>
          </FadeUp>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem', marginTop: '3.5rem' }}>
            {philosophy.map((p, i) => (
              <FadeUp key={p.n} delay={i * 70}>
              <div
                className="card-lift"
                style={{
                  padding: '2.5rem', background: 'var(--bg-card)', height: '100%',
                  border: '1px solid var(--border-w)', borderTop: '2px solid var(--border-w)',
                  borderRadius: 'var(--radius-lg)',
                  transition: 'border-color 0.25s, background 0.25s, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderTopColor = 'var(--gold)'; e.currentTarget.style.background = 'var(--bg-raised)' }}
                onMouseLeave={e => { e.currentTarget.style.borderTopColor = 'var(--border-w)'; e.currentTarget.style.background = 'var(--bg-card)' }}
              >
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2.4rem', fontWeight: 800, color: 'var(--gold)', opacity: 0.35, lineHeight: 1, marginBottom: '1.5rem', letterSpacing: '-0.04em' }}>{p.n}</div>
                <div style={{ fontSize: '1.02rem', color: 'var(--text)', marginBottom: '0.85rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>{p.title}</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 400 }}>{p.desc}</p>
              </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <Divider />

      {/* ── FOUNDER LETTER PREVIEW ───────────────────────────────────────────── */}
      <div style={{ borderBottom: '1px solid var(--border-w)' }}>
        <FadeUp style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', padding: '9rem 3rem' }}>
          <SectionLabel center>Founder Letter</SectionLabel>
          <blockquote style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.7rem, 3.2vw, 2.7rem)',
            fontWeight: 600,
            color: 'var(--text)',
            lineHeight: 1.3,
            marginBottom: '3rem',
            letterSpacing: '-0.025em',
          }}>
            &ldquo;The next generation of great companies will not just build software. They will build systems that improve how people operate, create, communicate, and solve problems in everyday life.&rdquo;
          </blockquote>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1.25rem', marginBottom: '3rem' }}>
            <span style={{ display: 'block', flex: 1, maxWidth: 48, height: 1, background: 'var(--border-m)' }} />
            <span style={{ fontSize: '0.74rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-2)', fontWeight: 600 }}>Jeff Yèmalín Bienvenu Honforloco — Founder & CEO</span>
            <span style={{ display: 'block', flex: 1, maxWidth: 48, height: 1, background: 'var(--border-m)' }} />
          </div>
          <Button href="/vision" variant="secondary">Read Founder Letter →</Button>
        </FadeUp>
      </div>

      {/* ── FINAL CTA ────────────────────────────────────────────────────────── */}
      <div style={{ background: 'var(--bg-raised)', borderTop: '1px solid var(--border-w)', textAlign: 'center', padding: '8rem 3rem', position: 'relative', overflow: 'hidden' }}>
        <div className="hero-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 60% 60% at 50% 50%, transparent 30%, var(--bg-raised) 80%)' }} />
        <FadeUp style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: '0.62rem', letterSpacing: '0.24em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '2.5rem', fontWeight: 600 }}>Tarvico Inc. · 2026</div>
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.2rem, 4.2vw, 3.8rem)',
            fontWeight: 700,
            color: 'var(--text)',
            maxWidth: 760,
            margin: '0 auto 1.25rem',
            lineHeight: 1.08,
            letterSpacing: '-0.035em',
          }}>
            Building enduring technology companies for the next global economy.
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', maxWidth: 460, margin: '0 auto 3rem', lineHeight: 1.65, fontWeight: 400 }}>
            We are at the beginning of a long journey. The work ahead will take decades. We are building with that conviction.
          </p>
          <div style={{ display: 'flex', gap: '0.85rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Button href="/contact" variant="primary">Get in Touch →</Button>
            <Button href="/investors" variant="secondary">Investor Relations</Button>
          </div>
        </FadeUp>
      </div>
    </>
  )
}
