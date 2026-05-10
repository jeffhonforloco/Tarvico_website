import { PageHero, Button, SectionLabel, Divider } from '@/components/ui'

const companies = [
  {
    name: 'SireIQ',
    status: 'Incubation',
    statusColor: 'rgba(201,164,71,0.5)',
    category: 'AI Assistant · Chat & Content Workflow',
    desc: 'An intelligent AI assistant engineered for chat, content creation, and workflow automation. SireIQ elevates how individuals and teams interact with information, generate output, and manage daily operations with adaptive intelligence.',
    roadmap: 'Browser extension → Web app → Enterprise API',
    market: 'SMB · Consumer · Teams',
    phase: 'Incubation Phase II',
  },
  {
    name: 'SEOAgentPro',
    status: 'Incubation',
    statusColor: 'rgba(201,164,71,0.5)',
    category: 'AI Search Intelligence · Growth',
    desc: 'Autonomous AI-driven SEO intelligence platform. Real-time analysis, content strategy generation, competitive monitoring, and autonomous optimization execution — all managed by AI agents without manual intervention.',
    roadmap: 'Core analytics → Agent automation → Agency platform',
    market: 'Agencies · E-Commerce · B2B',
    phase: 'Incubation Phase I',
  },
  {
    name: 'Fycra',
    status: 'Stealth',
    statusColor: 'var(--text-3)',
    category: 'Developer Platform · AI Code Infrastructure',
    desc: 'A next-generation AI-native code platform designed for modern development teams. Intelligent code assistance, automated review, workflow acceleration, and team collaboration — rebuilt from the ground up for the AI era.',
    roadmap: 'Internal development · Stealth mode',
    market: 'Developers · Engineering Teams',
    phase: 'Stealth',
  },
  {
    name: 'Fycera',
    status: 'Stealth',
    statusColor: 'var(--text-3)',
    category: 'AI Creative Infrastructure · Content',
    desc: 'AI-native content creation infrastructure for creators, brands, and media operations. Intelligent generation, brand consistency, workflow automation, and creative scaling tools designed for professional content operations at speed.',
    roadmap: 'Concept validation · Design phase',
    market: 'Creators · Brands · Media',
    phase: 'Stealth',
  },
]

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        label="Portfolio"
        title={<>Five ventures.<br />One strategic<br /><em style={{ fontStyle: 'italic', color: 'var(--gold-light)' }}>ecosystem.</em></>}
        subtitle="Each company in the Tarvico portfolio is designed from first principles — AI-native architecture, sustainable unit economics, and long-term defensibility."
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 3rem' }}>

        {/* ── FLAGSHIP ───────────────────────────────────────────────────────── */}
        <SectionLabel>Operating Companies</SectionLabel>

        <div style={{
          border: '1px solid var(--gold-border)',
          padding: '3rem',
          background: 'var(--bg-raised)',
          marginBottom: '4rem',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '2rem', marginBottom: '2.5rem' }}>
            <div>
              <span style={{
                display: 'inline-block',
                border: '1px solid var(--gold)',
                color: 'var(--gold)',
                fontSize: '0.58rem',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                padding: '3px 10px',
                marginBottom: '1rem',
              }}>Flagship · Launching 2025</span>
              <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2.5rem', fontWeight: 300, color: 'var(--text)', marginBottom: '0.5rem' }}>Vytre AWOS</h2>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)' }}>AI Workforce Infrastructure · Enterprise SaaS</div>
            </div>
            <Button href="/contact" variant="primary">Request Early Access →</Button>
          </div>

          <p style={{ fontSize: '1rem', color: 'var(--text-2)', lineHeight: 1.75, maxWidth: 720, fontWeight: 300, marginBottom: '2rem' }}>
            An AI Workforce Operating System that enables enterprises to deploy, manage, coordinate, and scale AI workers across operations, workflows, departments, and systems. Vytre AWOS is the control plane for the intelligent organization — providing the infrastructure layer for AI-driven work at scale.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '1.5px', background: 'var(--border-w)' }}>
            {[
              { label: 'Market', value: 'Enterprise / SMB' },
              { label: 'Category', value: 'AI Infrastructure' },
              { label: 'Model', value: 'SaaS / Usage-Based' },
              { label: 'Status', value: 'Active Development', highlight: true },
            ].map(item => (
              <div key={item.label} style={{ background: 'var(--bg)', padding: '1.5rem' }}>
                <div style={{ fontSize: '0.6rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.5rem' }}>{item.label}</div>
                <div style={{ fontSize: '0.9rem', color: item.highlight ? 'var(--gold)' : 'var(--text)' }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── INCUBATION LABS ─────────────────────────────────────────────────── */}
        <SectionLabel>Incubation Labs</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.5px', background: 'var(--border-w)', marginTop: '1rem', marginBottom: '4rem' }}>
          {companies.map(c => (
            <div key={c.name} style={{ background: 'var(--bg)', padding: '2.5rem', transition: 'background 0.2s' }}
                 onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-raised)')}
                 onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.8rem', fontWeight: 300, color: 'var(--text)' }}>{c.name}</div>
                <span style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', border: `1px solid ${c.statusColor}`, color: c.statusColor, padding: '3px 10px', whiteSpace: 'nowrap' }}>{c.status}</span>
              </div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.75rem' }}>{c.category}</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300, marginBottom: '1.5rem' }}>{c.desc}</p>
              <div style={{ marginBottom: '1.5rem' }}>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-3)' }}>Roadmap: </span>
                <span style={{ fontSize: '0.72rem', color: 'var(--text-2)' }}>{c.roadmap}</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-w)', paddingTop: '1.2rem' }}>
                <span style={{ fontSize: '0.62rem', color: 'var(--text-3)' }}>{c.market}</span>
                <span style={{ fontSize: '0.62rem', color: 'var(--text-3)' }}>{c.phase}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── AFFILIATED ──────────────────────────────────────────────────────── */}
        <SectionLabel>Affiliated Ventures</SectionLabel>

        <div style={{ border: '1px solid var(--border-w)', padding: '2.5rem', background: 'var(--bg-raised)', marginTop: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 300, color: 'var(--text)', marginBottom: '0.5rem' }}>Urs79</h3>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>Multimedia · Record Label · Publishing</div>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.65, maxWidth: 560, fontWeight: 300 }}>
                A multimedia company operating at the intersection of music, creative publishing, and digital entertainment. Record label, music publishing, and content distribution — designed for the streaming-native creative economy.
              </p>
            </div>
            <span style={{ fontSize: '0.58rem', letterSpacing: '0.2em', textTransform: 'uppercase', border: '1px solid var(--text-3)', color: 'var(--text-3)', padding: '3px 10px', whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>Experimental Venture</span>
          </div>
        </div>

      </div>
    </>
  )
}
