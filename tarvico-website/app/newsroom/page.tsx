import { PageHero, SectionLabel } from '@/components/ui'

const news = [
  {
    featured: true,
    category: 'Company · Announcement',
    title: 'Tarvico Inc. Launches — A New AI-Native Holding Company',
    excerpt: 'Tarvico Inc. announces its formation as an AI-native technology holding company, with a portfolio of five ventures in development and a flagship product — the AI Workforce Operating System — targeting enterprise launch in 2025.',
    date: 'May 2025',
  },
  {
    category: 'Product · Development',
    title: 'Vytre AWOS — Architecture Overview',
    excerpt: 'The AI Workforce Operating System enters active development. Core agent orchestration engine, enterprise API layer, and adaptive workflow execution framework underway.',
    date: 'April 2025',
  },
  {
    category: 'Vision · Research',
    title: 'The Future of Digital Labor Infrastructure',
    excerpt: 'An internal research paper on the trajectory of AI workforce systems, enterprise automation adoption, and the opportunity for AI-native operating platforms in the enterprise market.',
    date: 'March 2025',
  },
  {
    category: 'Portfolio · Update',
    title: 'SireIQ & SEOAgentPro Enter Incubation Phase',
    excerpt: 'Two portfolio companies graduate from concept validation into active incubation — SireIQ and SEOAgentPro begin product research, market validation, and initial prototyping.',
    date: 'March 2025',
  },
  {
    category: 'Founder · Letter',
    title: 'Founder Letter: Building for the Next Era',
    excerpt: 'Tarvico Founder & CEO Jeff Honforloco publishes the inaugural founder letter — outlining the vision, philosophy, and long-term ambitions behind Tarvico Inc.',
    date: 'February 2025',
  },
]

export default function NewsroomPage() {
  const [featured, ...rest] = news

  return (
    <>
      <PageHero
        label="Newsroom"
        title="Updates from Tarvico."
        subtitle="Announcements, product updates, research, and strategic communications from Tarvico Inc. and portfolio companies."
      />

      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '5rem 3rem' }}>

        {/* Featured */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem',
          alignItems: 'center',
          border: '1px solid var(--border-w)',
          padding: '3rem',
          background: 'var(--bg-raised)',
          marginBottom: '1.5px',
          cursor: 'pointer',
          transition: 'background 0.2s',
        }}
             onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-card)')}
             onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg-raised)')}>
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>{featured.category}</div>
            <h2 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '2rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1.2, marginBottom: '1rem' }}>{featured.title}</h2>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300, marginBottom: '1rem' }}>{featured.excerpt}</p>
            <div style={{ fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.1em' }}>{featured.date}</div>
          </div>
          <div style={{
            aspectRatio: '16/9',
            background: 'var(--bg-card)',
            border: '1px solid var(--border-w)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <svg viewBox="0 0 240 135" width="240" height="135">
              <path d="M120 25L150 90H90L120 25Z" fill="none" stroke="#C9A447" strokeWidth="1" />
              <path d="M108 65L120 42L132 65" fill="#C9A447" opacity="0.7" />
              <text x="120" y="118" textAnchor="middle" fontFamily="serif" fontSize="11" fill="#C9A447" letterSpacing="5" opacity="0.5">TARVICO</text>
            </svg>
          </div>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5px', background: 'var(--border-w)' }}>
          {rest.map(item => (
            <div key={item.title} style={{
              background: 'var(--bg)',
              padding: '2.5rem',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}
                 onMouseEnter={e => (e.currentTarget.style.background = 'var(--bg-raised)')}
                 onMouseLeave={e => (e.currentTarget.style.background = 'var(--bg)')}>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem' }}>{item.category}</div>
              <h3 style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.5rem', fontWeight: 300, color: 'var(--text)', lineHeight: 1.2, marginBottom: '0.75rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.82rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 300, marginBottom: '1rem' }}>{item.excerpt}</p>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-3)', letterSpacing: '0.1em' }}>{item.date}</div>
            </div>
          ))}
        </div>

        {/* Press contact */}
        <div style={{ textAlign: 'center', padding: '3rem 0', borderTop: '1px solid var(--border-w)', marginTop: '1.5px' }}>
          <span style={{ fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-3)' }}>
            Media inquiries:{' '}
            <a href="mailto:press@tarvico.com" style={{ color: 'var(--gold)', textDecoration: 'none' }}>press@tarvico.com</a>
          </span>
        </div>

      </div>
    </>
  )
}
