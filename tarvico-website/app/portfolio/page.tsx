'use client'

import { PageHero, Button, SectionLabel, Divider } from '@/components/ui'

const emergingVentures = [
  {
    name: 'Maeyen',
    url: 'https://www.maeyen.com',
    domain: 'maeyen.com',
    category: 'Commerce Trust Network · Africa',
    desc: 'A commerce trust network for Africa, starting from Nigeria. Maeyen is not just another marketplace — it is built to solve the biggest problem in African online commerce: trust. By verifying participants and protecting transactions, Maeyen will let buyers and sellers transact with confidence.',
    market: 'Africa · Commerce · Consumer',
    accent: 'var(--gold)',
    border: 'var(--gold-border)',
    bg: 'var(--gold-glow)',
    year: '2025',
  },
  {
    name: 'Racym',
    url: 'https://www.racym.com',
    domain: 'racym.com',
    category: 'Talent Network · Creative',
    desc: 'Talent that delivers — verified. Racym matches brands and agencies to pre-vetted creative talent based on what they have actually delivered, not their follower count. A results-first network that turns proven work into the signal for hiring decisions.',
    market: 'Brands · Agencies · Creators',
    accent: 'var(--gold)',
    border: 'var(--gold-border)',
    bg: 'var(--gold-glow)',
    year: '2025',
  },
]

const companies = [
  {
    name: 'SireIQ',
    url: 'https://www.sireiq.com',
    status: 'Incubation',
    statusColor: 'var(--gold-dim)',
    statusBorder: 'rgba(205,169,75,0.18)',
    category: 'Intelligence Assistant · Chat & Workflow',
    desc: 'An intelligent assistant engineered for chat, content creation, and workflow automation. SireIQ elevates how individuals and teams interact with information, generate output, and manage daily operations with adaptive intelligence.',
    roadmap: 'Browser extension → Web app → Enterprise API',
    market: 'SMB · Consumer · Teams',
    phase: 'Incubation Phase II',
    year: '2025',
  },
  {
    name: 'SEOAgentPro',
    url: 'https://www.seoagentpro.com',
    status: 'Incubation',
    statusColor: 'var(--gold-dim)',
    statusBorder: 'rgba(205,169,75,0.18)',
    category: 'Search Intelligence · Digital Growth',
    desc: 'Autonomous SEO intelligence platform. Real-time analysis, content strategy generation, competitive monitoring, and autonomous optimization — managed without manual intervention.',
    roadmap: 'Core analytics → Agent automation → Agency platform',
    market: 'Agencies · E-Commerce · B2B',
    phase: 'Incubation Phase I',
    year: '2025',
  },
  {
    name: 'Fycra',
    url: 'https://www.fycra.com',
    status: 'Stealth',
    statusColor: 'var(--text-3)',
    statusBorder: 'var(--border-w)',
    category: 'Developer Platform · Code Infrastructure',
    desc: 'A next-generation code platform designed for modern development teams. Intelligent code assistance, automated review, workflow acceleration, and team collaboration — rebuilt from the ground up for the modern era.',
    roadmap: 'Internal development · Stealth mode',
    market: 'Developers · Engineering Teams',
    phase: 'Stealth',
    year: '2025',
  },
  {
    name: 'Fycera',
    url: 'https://www.fycera.com',
    status: 'Stealth',
    statusColor: 'var(--text-3)',
    statusBorder: 'var(--border-w)',
    category: 'Creative Infrastructure · Content',
    desc: 'Content creation infrastructure for creators, brands, and media operations. Intelligent generation, brand consistency, workflow automation, and creative scaling tools designed for professional content operations at speed.',
    roadmap: 'Concept validation · Design phase',
    market: 'Creators · Brands · Media',
    phase: 'Stealth',
    year: '2025',
  },
]

const awosCapabilities = [
  { label: 'Agent Orchestration', pct: 92, color: 'var(--gold)' },
  { label: 'Workflow Intelligence', pct: 87, color: 'var(--blue)' },
  { label: 'Enterprise Integration', pct: 78, color: 'var(--gold-dim)' },
  { label: 'Observability', pct: 95, color: 'var(--emerald)' },
  { label: 'Governance Controls', pct: 83, color: 'var(--blue-dim)' },
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title={<>Seven ventures. One strategic <span className="text-gradient-gold">ecosystem.</span></>}
        subtitle="Each company in the Tarvico portfolio is designed from first principles — intelligence-first architecture, sustainable unit economics, and long-term defensibility."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 3rem' }}>

        {/* ── FLAGSHIP ───────────────────────────────────────────────────────── */}
        <SectionLabel>Flagship Venture</SectionLabel>

        <div style={{
          border: '1px solid var(--gold-border)',
          background: 'var(--bg-card)',
          marginBottom: '5rem',
          overflow: 'hidden',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow)',
        }}>
          <div style={{ height: 3, background: 'linear-gradient(to right, var(--gold), var(--blue), transparent)' }} />
          <div style={{ padding: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.25rem' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    border: '1px solid var(--gold-border)', color: 'var(--gold)',
                    fontSize: '0.6rem', letterSpacing: '0.16em', textTransform: 'uppercase',
                    padding: '5px 13px', fontWeight: 600, background: 'var(--gold-glow)', borderRadius: 999,
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
                    Flagship · Launching 2026
                  </span>
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.035em',
                }}>Vytre AWOS</h2>
                <div style={{ fontSize: '0.64rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>AI Workforce Infrastructure · Enterprise SaaS</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Button href="/contact" variant="primary">Request Early Access →</Button>
                <a href="https://www.vytre.io" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.8rem', letterSpacing: '-0.005em',
                  color: 'var(--text-2)', textDecoration: 'none', fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)' }}
                >vytre.io ↗</a>
              </div>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 720, fontWeight: 400, marginBottom: '2.5rem' }}>
              An AI Workforce Operating System that enables enterprises to deploy, manage, coordinate, and scale AI workers across operations, workflows, departments, and systems. Vytre AWOS is the control plane for the intelligent organization — providing the infrastructure layer for AI-driven work at scale.
            </p>

            <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
              <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                {[
                  { label: 'Market', value: 'Enterprise / SMB' },
                  { label: 'Category', value: 'AI Infrastructure' },
                  { label: 'Model', value: 'SaaS · Usage-Based' },
                  { label: 'Status', value: 'Active Development', highlight: true },
                ].map(item => (
                  <div key={item.label} style={{ background: 'var(--bg-raised)', padding: '1.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-w)' }}>
                    <div style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.5rem', fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: '0.86rem', color: item.highlight ? 'var(--gold)' : 'var(--text)', fontWeight: item.highlight ? 600 : 500 }}>{item.value}</div>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '1rem', fontWeight: 600 }}>Platform Capability Index</div>
                {awosCapabilities.map(cap => (
                  <div key={cap.label} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.6rem' }}>
                    <div style={{ fontSize: '0.64rem', color: 'var(--text-2)', width: 140, fontWeight: 400 }}>{cap.label}</div>
                    <div style={{ flex: 1, height: 4, background: 'var(--bg-raised)', overflow: 'hidden', borderRadius: 4 }}>
                      <div style={{ height: '100%', width: `${cap.pct}%`, background: cap.color, opacity: 0.85, borderRadius: 4 }} />
                    </div>
                    <div style={{ fontSize: '0.62rem', color: 'var(--text-3)', minWidth: 30, textAlign: 'right', fontWeight: 500 }}>{cap.pct}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── EMERGING VENTURES ───────────────────────────────────────────────── */}
        <SectionLabel>Emerging Ventures</SectionLabel>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.65, maxWidth: 560, fontWeight: 400, marginBottom: '2rem', marginTop: '0.5rem' }}>
          Network-based ventures in active development — building trust and verified reputation as the core infrastructure for commerce and creative work.
        </p>

        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '5rem' }}>
          {emergingVentures.map(v => (
            <div key={v.name}
              className="card-lift"
              style={{
                background: 'var(--bg-card)', padding: '2.5rem', display: 'flex', flexDirection: 'column',
                border: `1px solid ${v.border}`, borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)',
                position: 'relative', overflow: 'hidden',
              }}
              onMouseEnter={e => { e.currentTarget.style.boxShadow = 'var(--shadow)' }}
              onMouseLeave={e => { e.currentTarget.style.boxShadow = 'var(--shadow-sm)' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: v.accent, opacity: 0.7 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.9rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.035em' }}>{v.name}</div>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  fontSize: '0.58rem', letterSpacing: '0.12em', textTransform: 'uppercase',
                  border: `1px solid ${v.border}`, color: v.accent, background: v.bg,
                  padding: '4px 11px', whiteSpace: 'nowrap', fontWeight: 600, borderRadius: 999,
                }}>
                  <span style={{ width: 5, height: 5, borderRadius: '50%', background: v.accent, display: 'inline-block' }} className="animate-pulse-gold" />
                  Building
                </span>
              </div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: v.accent, marginBottom: '0.85rem', fontWeight: 600 }}>{v.category}</div>
              <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.7, fontWeight: 400, marginBottom: '1.75rem', flex: 1 }}>{v.desc}</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-w)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.66rem', color: 'var(--text-3)', fontWeight: 500 }}>{v.market} · {v.year}</span>
                <a href={v.url} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.68rem', color: v.accent, letterSpacing: '0.02em',
                  fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >{v.domain} ↗</a>
              </div>
            </div>
          ))}
        </div>

        {/* ── INCUBATION LABS ─────────────────────────────────────────────────── */}
        <SectionLabel>Incubation Labs</SectionLabel>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.65, maxWidth: 560, fontWeight: 400, marginBottom: '2rem', marginTop: '0.5rem' }}>
          Four ventures currently in active incubation — each designed from first principles with independent brand identity, intelligence-first architecture, and long-term market positioning.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '5rem' }}>
          {companies.map(c => (
            <div key={c.name}
              className="card-lift"
              style={{
                background: 'var(--bg-card)', padding: '2.5rem',
                border: '1px solid var(--border-w)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold-border)'; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-w)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.035em' }}>{c.name}</div>
                <span style={{
                  fontSize: '0.56rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                  border: `1px solid ${c.statusBorder}`, color: c.statusColor,
                  padding: '4px 11px', whiteSpace: 'nowrap', fontWeight: 600, borderRadius: 999,
                }}>{c.status}</span>
              </div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.85rem', fontWeight: 600 }}>{c.category}</div>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 400, marginBottom: '1.5rem' }}>{c.desc}</p>
              <div style={{ fontSize: '0.74rem', color: 'var(--text-3)', marginBottom: '1.5rem', fontWeight: 400 }}>
                <span style={{ color: 'var(--text-3)' }}>Roadmap · </span>
                <span style={{ color: 'var(--text-2)' }}>{c.roadmap}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-w)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.64rem', color: 'var(--text-3)', fontWeight: 500 }}>{c.market} · {c.year}</span>
                <a href={c.url} target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.66rem', color: 'var(--gold)', letterSpacing: '0.02em',
                  fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
                  onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
                >Visit →</a>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── AFFILIATED ──────────────────────────────────────────────────────── */}
        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Affiliated Ventures</SectionLabel>

          <div style={{ border: '1px solid var(--border-w)', background: 'var(--bg-card)', marginTop: '1rem', overflow: 'hidden', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-sm)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', padding: '2.5rem' }}>
              <div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--text)', marginBottom: '0.5rem', letterSpacing: '-0.035em' }}>Urs79</h3>
                <div style={{ fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.25rem', fontWeight: 600 }}>Multimedia · Record Label · Publishing</div>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 560, fontWeight: 400 }}>
                  A multimedia company operating at the intersection of music, creative publishing, and digital entertainment. Record label, music publishing, and content distribution — designed for the streaming-native creative economy.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', alignItems: 'flex-end' }}>
                <span style={{
                  fontSize: '0.56rem', letterSpacing: '0.14em', textTransform: 'uppercase',
                  border: '1px solid var(--blue-border)', color: 'var(--blue)',
                  background: 'var(--blue-glow)', padding: '4px 11px', whiteSpace: 'nowrap', fontWeight: 600, borderRadius: 999,
                }}>Affiliated Venture</span>
                <a href="https://www.urs79.com" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.66rem', letterSpacing: '0.04em',
                  color: 'var(--text-2)', textDecoration: 'none', fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--blue)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)' }}
                >urs79.com ↗</a>
              </div>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── ECOSYSTEM OVERVIEW ──────────────────────────────────────────────── */}
        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Ecosystem Architecture</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginTop: '2rem' }}>
            {[
              { label: 'Infrastructure', desc: 'AI operating systems, agent orchestration, and enterprise workflow platforms.', companies: 'Vytre AWOS', color: 'var(--gold)' },
              { label: 'Trust & Talent Networks', desc: 'Verified, reputation-driven networks for commerce and creative work — trust as infrastructure.', companies: 'Maeyen · Racym', color: 'var(--gold-dim)' },
              { label: 'Productivity', desc: 'AI assistants, search intelligence, and individual leverage tools for knowledge workers.', companies: 'SireIQ · SEOAgentPro', color: 'var(--gold-dim)' },
              { label: 'Developer + Creative', desc: 'Code platforms, creative infrastructure, and AI-native tools for builders and creators.', companies: 'Fycra · Fycera', color: 'var(--blue)' },
            ].map(tier => (
              <div key={tier.label} style={{ background: 'var(--bg-card)', padding: '2.25rem', border: '1px solid var(--border-w)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)' }}>
                <div style={{ width: 32, height: 3, background: tier.color, marginBottom: '1.25rem', borderRadius: 3 }} />
                <div style={{ fontSize: '1rem', color: 'var(--text)', marginBottom: '0.75rem', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em' }}>{tier.label}</div>
                <p style={{ fontSize: '0.84rem', color: 'var(--text-2)', lineHeight: 1.6, fontWeight: 400, marginBottom: '1.25rem' }}>{tier.desc}</p>
                <div style={{ fontSize: '0.64rem', color: tier.color, letterSpacing: '0.06em', fontWeight: 600 }}>{tier.companies}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
