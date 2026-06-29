'use client'

import { PageHero, SectionLabel } from '@/components/ui'

const news = [
  {
    featured: true,
    category: 'Company · Announcement',
    title: 'Tarvico Inc. Launches — A Private Technology Holding Company',
    excerpt: 'Tarvico Inc. announces its formation as a private technology holding company, with a portfolio of seven ventures in development and a flagship product — Vytre AWOS, the AI Workforce Operating System — targeting enterprise launch in 2026.',
    date: 'Q1 2026',
    readTime: '4 min read',
  },
  {
    category: 'Product · Development',
    title: 'Vytre AWOS — Architecture Overview',
    excerpt: 'The AI Workforce Operating System enters active development. Core agent orchestration engine, enterprise API layer, and adaptive workflow execution framework underway.',
    date: 'Q1 2026',
    readTime: '6 min read',
  },
  {
    category: 'Vision · Research',
    title: 'The Future of Digital Labor Infrastructure',
    excerpt: 'An internal research paper on the trajectory of AI workforce systems, enterprise automation adoption, and the opportunity for AI-native operating platforms in the enterprise market.',
    date: 'Q4 2025',
    readTime: '12 min read',
  },
  {
    category: 'Portfolio · Update',
    title: 'SireIQ & SEOAgentPro Enter Incubation Phase',
    excerpt: 'Two portfolio companies graduate from concept validation into active incubation — SireIQ and SEOAgentPro begin product research, market validation, and initial prototyping.',
    date: 'Q4 2025',
    readTime: '3 min read',
  },
  {
    category: 'Portfolio · Update',
    title: 'Maeyen & Racym Join the Tarvico Portfolio',
    excerpt: 'Two network-based ventures enter active development: Maeyen, a commerce trust network for Africa starting from Nigeria, and Racym, a verified creative talent network matching brands and agencies to pre-vetted talent by what they have actually delivered.',
    date: 'Q1 2026',
    readTime: '3 min read',
  },
  {
    category: 'Founder · Letter',
    title: 'Founder Letter: Building for the Next Era',
    excerpt: 'Tarvico Founder & CEO Jeff Honforloco publishes the inaugural founder letter — outlining the vision, philosophy, and long-term ambitions behind Tarvico Inc.',
    date: 'Q4 2025',
    readTime: '8 min read',
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

      <div className="mob-px mob-py" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 3rem' }}>

        <SectionLabel>Featured</SectionLabel>

        <div className="mob-stack" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '0',
          border: '1px solid var(--border-w)',
          background: 'var(--bg-card)',
          marginBottom: '4rem',
          overflow: 'hidden',
          borderTop: '2px solid var(--gold)',
          borderRadius: 'var(--radius-xl)',
          boxShadow: 'var(--shadow)',
        }}>
          <div style={{ padding: '3rem', borderRight: '1px solid var(--border-w)' }}>
            <div style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1.5rem', fontWeight: 600 }}>
              {featured.category}
            </div>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.6rem, 3vw, 2.5rem)',
              fontWeight: 700,
              color: 'var(--text)',
              lineHeight: 1.12,
              marginBottom: '1.5rem',
              letterSpacing: '-0.035em',
            }}>
              {featured.title}
            </h2>
            <p style={{ fontSize: '0.94rem', color: 'var(--text-2)', lineHeight: 1.75, fontWeight: 400 }}>
              {featured.excerpt}
            </p>
          </div>
          <div style={{ padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '2rem', fontWeight: 500 }}>Publication Details</div>
              {[
                { label: 'Date', value: featured.date },
                { label: 'Read time', value: featured.readTime },
                { label: 'Type', value: 'Company Announcement' },
                { label: 'Visibility', value: 'Public' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.85rem 0', borderBottom: '1px solid var(--border-w)' }}>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-3)', fontWeight: 400 }}>{item.label}</span>
                  <span style={{ fontSize: '0.72rem', color: 'var(--text-2)', fontWeight: 300 }}>{item.value}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '2rem' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 500, cursor: 'default' }}>
                Read Full Story →
              </span>
            </div>
          </div>
        </div>

        <SectionLabel>All Stories</SectionLabel>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem', marginTop: '1.5rem' }}>
          {rest.map(item => (
            <div key={item.title} style={{
              background: 'var(--bg-card)', padding: '2.5rem',
              transition: 'border-color 0.25s, box-shadow 0.25s, transform 0.3s cubic-bezier(0.16,1,0.3,1)', cursor: 'pointer',
              border: '1px solid var(--border-w)', borderTop: '2px solid var(--border-w)', borderRadius: 'var(--radius-lg)',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderTopColor = 'var(--gold)'; e.currentTarget.style.boxShadow = 'var(--shadow)'; e.currentTarget.style.transform = 'translateY(-3px)' }}
              onMouseLeave={e => { e.currentTarget.style.borderTopColor = 'var(--border-w)'; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              <div style={{ fontSize: '0.56rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '1rem', fontWeight: 600 }}>{item.category}</div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.1rem, 2vw, 1.45rem)',
                fontWeight: 700,
                color: 'var(--text)',
                lineHeight: 1.2,
                marginBottom: '1rem',
                letterSpacing: '-0.03em',
              }}>
                {item.title}
              </h3>
              <p style={{ fontSize: '0.84rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 400, marginBottom: '1.75rem' }}>
                {item.excerpt}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-w)', paddingTop: '1rem' }}>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-3)', fontWeight: 400 }}>{item.date}</span>
                <span style={{ fontSize: '0.6rem', color: 'var(--text-3)', fontWeight: 400 }}>{item.readTime}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '4rem', padding: '2.5rem', border: '1px solid var(--border-w)', background: 'var(--bg-card)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div style={{ fontSize: '0.6rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.5rem', fontWeight: 600 }}>Press & Media Inquiries</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 600, letterSpacing: '-0.02em', color: 'var(--gold)' }}>press@tarvico.com</div>
          </div>
          <div style={{ fontSize: '0.8rem', color: 'var(--text-2)', maxWidth: 360, fontWeight: 400, lineHeight: 1.7 }}>
            For media inquiries, interview requests, and press assets, contact our communications team directly.
          </div>
        </div>

      </div>
    </>
  )
}
