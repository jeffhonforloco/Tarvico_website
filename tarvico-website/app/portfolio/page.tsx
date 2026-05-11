'use client'

import { PageHero, Button, SectionLabel, Divider } from '@/components/ui'

const companies = [
  {
    name: 'SireIQ',
    status: 'Incubation',
    statusColor: 'var(--gold-dim)',
    statusBorder: 'rgba(201,164,71,0.15)',
    category: 'AI Assistant · Chat & Content Workflow',
    desc: 'An intelligent AI assistant engineered for chat, content creation, and workflow automation. SireIQ elevates how individuals and teams interact with information, generate output, and manage daily operations with adaptive intelligence.',
    roadmap: 'Browser extension → Web app → Enterprise API',
    market: 'SMB · Consumer · Teams',
    phase: 'Incubation Phase II',
    year: '2025',
  },
  {
    name: 'SEOAgentPro',
    status: 'Incubation',
    statusColor: 'var(--gold-dim)',
    statusBorder: 'rgba(201,164,71,0.15)',
    category: 'AI Search Intelligence · Growth',
    desc: 'Autonomous AI-driven SEO intelligence platform. Real-time analysis, content strategy generation, competitive monitoring, and autonomous optimization — all managed by AI agents without manual intervention.',
    roadmap: 'Core analytics → Agent automation → Agency platform',
    market: 'Agencies · E-Commerce · B2B',
    phase: 'Incubation Phase I',
    year: '2025',
  },
  {
    name: 'Fycra',
    status: 'Stealth',
    statusColor: 'var(--text-3)',
    statusBorder: 'var(--border-w)',
    category: 'Developer Platform · AI Code Infrastructure',
    desc: 'A next-generation AI-native code platform designed for modern development teams. Intelligent code assistance, automated review, workflow acceleration, and team collaboration — rebuilt from the ground up for the AI era.',
    roadmap: 'Internal development · Stealth mode',
    market: 'Developers · Engineering Teams',
    phase: 'Stealth',
    year: '2025',
  },
  {
    name: 'Fycera',
    status: 'Stealth',
    statusColor: 'var(--text-3)',
    statusBorder: 'var(--border-w)',
    category: 'AI Creative Infrastructure · Content',
    desc: 'AI-native content creation infrastructure for creators, brands, and media operations. Intelligent generation, brand consistency, workflow automation, and creative scaling tools designed for professional content operations at speed.',
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
        title={<>Six ventures.<br />One strategic<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>ecosystem.</em></>}
        subtitle="Each company in the Tarvico portfolio is designed from first principles — AI-native architecture, sustainable unit economics, and long-term defensibility."
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 3rem' }}>

        {/* ── FLAGSHIP ───────────────────────────────────────────────────────── */}
        <SectionLabel>Flagship Venture</SectionLabel>

        <div style={{
          border: '1px solid var(--gold-border)',
          background: 'var(--bg-card)',
          marginBottom: '5rem',
          overflow: 'hidden',
        }}>
          <div style={{ height: 2, background: 'linear-gradient(to right, var(--gold), var(--blue), transparent)' }} />
          <div style={{ padding: '3rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: '1.25rem' }}>
                  <span style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    border: '1px solid var(--gold-border)', color: 'var(--gold)',
                    fontSize: '0.56rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                    padding: '4px 12px', fontWeight: 500, background: 'var(--gold-glow)',
                  }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', display: 'inline-block' }} />
                    Flagship · Launching 2026
                  </span>
                </div>
                <h2 style={{
                  fontFamily: '"Cormorant Garamond", serif',
                  fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                  fontWeight: 400,
                  color: 'var(--text)',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.01em',
                }}>Vytre AWOS</h2>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500 }}>AI Workforce Infrastructure · Enterprise SaaS</div>
              </div>
              <Button href="/contact" variant="primary">Request Early Access →</Button>
            </div>

            <p style={{ fontSize: '1rem', color: 'var(--text-2)', lineHeight: 1.85, maxWidth: 720, fontWeight: 300, marginBottom: '2.5rem' }}>
              An AI Workforce Operating System that enables enterprises to deploy, manage, coordinate, and scale AI workers across operations, workflows, departments, and systems. Vytre AWOS is the control plane for the intelligent organization — providing the infrastructure layer for AI-driven work at scale.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1px', background: 'var(--border-w)' }}>
                {[
                  { label: 'Market', value: 'Enterprise / SMB' },
                  { label: 'Category', value: 'AI Infrastructure' },
                  { label: 'Model', value: 'SaaS · Usage-Based' },
                  { label: 'Status', value: 'Active Development', highlight: true },
                ].map(item => (
                  <div key={item.label} style={{ background: 'var(--bg-raised)', padding: '1.25rem' }}>
                    <div style={{ fontSize: '0.56rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.5rem', fontWeight: 500 }}>{item.label}</div>
                    <div style={{ fontSize: '0.82rem', color: item.highlight ? 'var(--gold)' : 'var(--text)', fontWeight: item.highlight ? 500 : 300 }}>{item.value}</div>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '1rem', fontWeight: 500 }}>Platform Capability Index</div>
                {awosCapabilities.map(cap => (
                  <div key={cap.label} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', marginBottom: '0.55rem' }}>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-2)', width: 140, fontWeight: 300 }}>{cap.label}</div>
                    <div style={{ flex: 1, height: 3, background: 'rgba(255,255,255,0.05)', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: `${cap.pct}%`, background: cap.color, opacity: 0.8 }} />
                    </div>
                    <div style={{ fontSize: '0.6rem', color: 'var(--text-3)', minWidth: 30, textAlign: 'right', fontWeight: 400 }}>{cap.pct}%</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── INCUBATION LABS ─────────────────────────────────────────────────── */}
        <SectionLabel>Incubation Labs</SectionLabel>
        <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.75, maxWidth: 560, fontWeight: 300, marginBottom: '2rem', marginTop: '0.5rem' }}>
          Four ventures currently in active incubation — each designed from first principles with AI-native architecture, independent brand identity, and long-term market positioning.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1px', background: 'var(--border-w)', marginBottom: '5rem' }}>
          {companies.map(c => (
            <div key={c.name}
              style={{ background: 'var(--bg)', padding: '2.5rem', transition: 'background 0.25s' }}
              onMouseEnter={e => { e.currentTarget.style.background = 'var(--bg-card)' }}
              onMouseLeave={e => { e.currentTarget.style.background = 'var(--bg)' }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.9rem', fontWeight: 400, color: 'var(--text)', letterSpacing: '-0.01em' }}>{c.name}</div>
                <span style={{
                  fontSize: '0.54rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                  border: `1px solid ${c.statusBorder}`, color: c.statusColor,
                  padding: '3px 9px', whiteSpace: 'nowrap', fontWeight: 500,
                }}>{c.status}</span>
              </div>
              <div style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.85rem', fontWeight: 500 }}>{c.category}</div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 300, marginBottom: '1.5rem' }}>{c.desc}</p>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-3)', marginBottom: '1.5rem', fontWeight: 300 }}>
                <span style={{ color: 'var(--text-3)' }}>Roadmap · </span>
                <span style={{ color: 'var(--text-2)' }}>{c.roadmap}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-w)', paddingTop: '1.25rem' }}>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-3)', fontWeight: 400 }}>{c.market}</span>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-3)', letterSpacing: '0.08em', fontWeight: 400 }}>{c.year} · {c.phase}</span>
              </div>
            </div>
          ))}
        </div>

        <Divider />

        {/* ── AFFILIATED ──────────────────────────────────────────────────────── */}
        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Affiliated Ventures</SectionLabel>

          <div style={{ border: '1px solid var(--border-w)', background: 'var(--bg-card)', marginTop: '1rem', overflow: 'hidden' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem', padding: '2.5rem' }}>
              <div>
                <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.2rem', fontWeight: 400, color: 'var(--text)', marginBottom: '0.5rem', letterSpacing: '-0.01em' }}>Urs79</h3>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--blue)', marginBottom: '1.25rem', fontWeight: 500 }}>Multimedia · Record Label · Publishing</div>
                <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.75, maxWidth: 560, fontWeight: 300 }}>
                  A multimedia company operating at the intersection of music, creative publishing, and digital entertainment. Record label, music publishing, and content distribution — designed for the streaming-native creative economy.
                </p>
              </div>
              <span style={{
                fontSize: '0.54rem', letterSpacing: '0.2em', textTransform: 'uppercase',
                border: '1px solid var(--blue-border)', color: 'var(--blue)',
                background: 'var(--blue-glow)', padding: '4px 12px', whiteSpace: 'nowrap', alignSelf: 'flex-start', fontWeight: 500,
              }}>Affiliated Venture</span>
            </div>
          </div>
        </div>

        <Divider />

        {/* ── ECOSYSTEM OVERVIEW ──────────────────────────────────────────────── */}
        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>Ecosystem Architecture</SectionLabel>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: 'var(--border-w)', marginTop: '2rem' }}>
            {[
              { label: 'Infrastructure', desc: 'AI operating systems, agent orchestration, and enterprise workflow platforms.', companies: 'Vytre AWOS', color: 'var(--gold)' },
              { label: 'Productivity', desc: 'AI assistants, search intelligence, and individual leverage tools for knowledge workers.', companies: 'SireIQ · SEOAgentPro', color: 'var(--gold-dim)' },
              { label: 'Developer + Creative', desc: 'Code platforms, creative infrastructure, and AI-native tools for builders and creators.', companies: 'Fycra · Fycera', color: 'var(--blue)' },
            ].map(tier => (
              <div key={tier.label} style={{ background: 'var(--bg)', padding: '2.5rem' }}>
                <div style={{ width: 32, height: 2, background: tier.color, marginBottom: '1.25rem' }} />
                <div style={{ fontSize: '0.95rem', color: 'var(--text)', marginBottom: '0.75rem', fontWeight: 400 }}>{tier.label}</div>
                <p style={{ fontSize: '0.8rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300, marginBottom: '1.25rem' }}>{tier.desc}</p>
                <div style={{ fontSize: '0.6rem', color: tier.color, letterSpacing: '0.1em', fontWeight: 500 }}>{tier.companies}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </>
  )
}
