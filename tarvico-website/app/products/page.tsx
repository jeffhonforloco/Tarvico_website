import Link from 'next/link'
import { PageHero, SectionLabel, Button } from '@/components/ui'

const products = [
  {
    name: 'Vytre AWOS',
    href: '/vytre',
    tag: 'Flagship · AI Workforce Infrastructure',
    desc: 'An AI Workforce Operating System — the enterprise control plane to deploy, manage, coordinate, and scale AI workers across operations, workflows, and systems.',
    stage: 'Active development',
  },
  {
    name: 'Maeyen',
    href: '/maeyen',
    tag: 'Commerce Trust Infrastructure · Africa',
    desc: 'A commerce trust network for Africa, starting from Nigeria — verifying participants and protecting transactions so buyers and sellers can transact with confidence.',
    stage: 'Building',
  },
]

export default function ProductsPage() {
  return (
    <>
      <PageHero
        label="Products"
        title={<>Products built to <span className="text-foundry">last.</span></>}
        subtitle="Tarvico builds enduring, AI-native products that solve foundational problems. Two are in active development today; more will grow within the same ecosystem over time."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem 3rem' }}>

        <SectionLabel>Current Products</SectionLabel>

        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginTop: '2.5rem', marginBottom: '5rem' }}>
          {products.map(p => (
            <Link key={p.name} href={p.href} className="card-lift" style={{
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
              background: 'var(--bg-card)',
              border: '1px solid var(--bronze-line)',
              borderRadius: 'var(--radius-xl)',
              padding: '2.75rem',
              boxShadow: 'var(--shadow-sm)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: 'var(--bronze)', opacity: 0.7 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.035em' }}>{p.name}</div>
                <span style={{ fontSize: '0.56rem', letterSpacing: '0.14em', textTransform: 'uppercase', border: '1px solid var(--bronze-line)', color: 'var(--bronze)', background: 'var(--bronze-soft)', padding: '4px 11px', whiteSpace: 'nowrap', fontWeight: 600, borderRadius: 999 }}>{p.stage}</span>
              </div>
              <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '0.85rem', fontWeight: 600 }}>{p.tag}</div>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-2)', lineHeight: 1.7, marginBottom: '1.75rem', flex: 1 }}>{p.desc}</p>
              <span style={{ fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--bronze)', fontWeight: 600 }}>Explore {p.name} →</span>
            </Link>
          ))}
        </div>

        <div style={{
          border: '1px solid var(--border-w)',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-card)',
          padding: '2.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '1.5rem',
        }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{ fontSize: '1.1rem', color: 'var(--text)', fontWeight: 600, fontFamily: 'var(--font-display)', letterSpacing: '-0.02em', marginBottom: '0.5rem' }}>The full Tarvico ecosystem</div>
            <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.7 }}>
              Beyond its flagship products, Tarvico builds and operates a wider portfolio of AI-native products across productivity, search, commerce trust, and creative software.
            </p>
          </div>
          <Button href="/portfolio" variant="secondary">View the Portfolio →</Button>
        </div>

      </div>
    </>
  )
}
