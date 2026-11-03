'use client'

import Link from 'next/link'
import { PageHero, Button, SectionLabel, Divider, MaturityTag } from '@/components/ui'
import type { MaturityTier } from '@/lib/businesses'

type Product = {
  name: string
  url: string
  domain: string
  internal?: string
  maturity: MaturityTier
  category: string
  desc: string
  market: string
}

// Featured businesses (approved shortlist) beyond the flagship.
const featured: Product[] = [
  {
    name: 'SireIQ',
    url: 'https://sireiq.com',
    domain: 'sireiq.com',
    maturity: 'operational',
    category: 'Intelligence Assistant · Chat & Workflow',
    desc: 'A publicly available, intelligent assistant for chat, content creation, and workflow automation — helping individuals and teams interact with information, generate output, and manage daily operations.',
    market: 'SMB · Consumer · Teams',
  },
  {
    name: 'Maeyen',
    url: 'https://www.maeyen.com',
    domain: 'maeyen.com',
    internal: '/maeyen',
    maturity: 'in-development',
    category: 'Commerce Trust Network · Africa',
    desc: 'A commerce trust network for Africa, starting from Nigeria. By verifying participants and protecting transactions, Maeyen aims to let buyers and sellers transact online with confidence — trust as the infrastructure beneath commerce.',
    market: 'Africa · Commerce · Consumer',
  },
]

// Additional public products.
const additional: Product[] = [
  {
    name: 'SEOAgentPro',
    url: 'https://www.seoagentpro.com',
    domain: 'seoagentpro.com',
    maturity: 'in-development',
    category: 'Search Intelligence · Digital Growth',
    desc: 'An autonomous SEO intelligence platform — real-time analysis, content strategy, competitive monitoring, and optimization.',
    market: 'Agencies · E-Commerce · B2B',
  },
  {
    name: 'Racym',
    url: 'https://www.racym.com',
    domain: 'racym.com',
    maturity: 'in-development',
    category: 'Talent Network · Creative',
    desc: 'A verified creative talent network that matches brands and agencies to pre-vetted talent based on proven, delivered work rather than follower count.',
    market: 'Brands · Agencies · Creators',
  },
]

function ProductCard({ p }: { p: Product }) {
  return (
    <div
      className="card-lift"
      style={{
        background: 'var(--bg-card)', padding: '2.5rem', display: 'flex', flexDirection: 'column', height: '100%',
        border: '1px solid var(--border-w)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--gold-border)'; e.currentTarget.style.boxShadow = 'var(--shadow)' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border-w)'; e.currentTarget.style.boxShadow = 'var(--shadow-sm)' }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem', gap: '0.75rem', flexWrap: 'wrap' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 700, color: 'var(--text)', letterSpacing: '-0.035em' }}>{p.name}</div>
        <MaturityTag tier={p.maturity} />
      </div>
      <div style={{ fontSize: '0.62rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: '0.85rem', fontWeight: 600 }}>{p.category}</div>
      <p style={{ fontSize: '0.9rem', color: 'var(--text-2)', lineHeight: 1.65, fontWeight: 400, marginBottom: '1.75rem', flex: 1 }}>{p.desc}</p>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-w)', paddingTop: '1.25rem', gap: '1rem' }}>
        <span style={{ fontSize: '0.66rem', color: 'var(--text-3)', fontWeight: 500 }}>{p.market}</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {p.internal && (
            <Link href={p.internal} style={{ fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '0.02em', fontWeight: 600, textDecoration: 'none' }}>Overview →</Link>
          )}
          <a href={p.url} target="_blank" rel="noopener noreferrer" style={{
            fontSize: '0.68rem', color: 'var(--gold)', letterSpacing: '0.02em', fontWeight: 600, textDecoration: 'none', transition: 'opacity 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.7' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}
          >{p.domain} ↗</a>
        </div>
      </div>
    </div>
  )
}

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        label="Our Businesses"
        title={<>Our businesses, one <span className="text-gradient-gold">strategy.</span></>}
        subtitle="A selective view of the products Tarvico builds and operates — each shown with an honest maturity label. Tarvico is a privately held U.S. technology company; these are products it develops, not separately incorporated companies."
      />

      <div className="mob-px mob-py" style={{ maxWidth: 1200, margin: '0 auto', padding: '6rem 3rem' }}>

        {/* ── FLAGSHIP: VYTRE AWOS ───────────────────────────────────────────── */}
        <SectionLabel>Flagship Product</SectionLabel>

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
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: '1.25rem' }}>
                  <span style={{ fontSize: '0.58rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>Flagship</span>
                  <MaturityTag tier="public-beta" />
                </div>
                <h2 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
                  fontWeight: 700,
                  color: 'var(--text)',
                  marginBottom: '0.5rem',
                  letterSpacing: '-0.035em',
                }}>Vytre AWOS</h2>
                <div style={{ fontSize: '0.64rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--gold)', fontWeight: 600 }}>AI Workforce Infrastructure · Enterprise</div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
                <Button href="/vytre" variant="primary">Product Overview →</Button>
                <a href="https://www.vytre.com" target="_blank" rel="noopener noreferrer" style={{
                  fontSize: '0.8rem', letterSpacing: '-0.005em',
                  color: 'var(--text-2)', textDecoration: 'none', fontWeight: 500,
                  transition: 'color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--gold)' }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-2)' }}
                >vytre.com ↗</a>
              </div>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 720, fontWeight: 400, marginBottom: '2.5rem' }}>
              An AI Workforce Operating System — the enterprise control plane to deploy, manage, coordinate, observe, and govern AI workers across operations, workflows, and systems. Vytre AWOS is in public beta.
            </p>

            <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'start' }}>
              <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.85rem' }}>
                {[
                  { label: 'Market', value: 'Enterprise / SMB' },
                  { label: 'Category', value: 'AI Infrastructure' },
                  { label: 'Model', value: 'SaaS' },
                  { label: 'Stage', value: 'Public Beta', highlight: true },
                ].map(item => (
                  <div key={item.label} style={{ background: 'var(--bg-raised)', padding: '1.25rem', borderRadius: 'var(--radius)', border: '1px solid var(--border-w)' }}>
                    <div style={{ fontSize: '0.58rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '0.5rem', fontWeight: 600 }}>{item.label}</div>
                    <div style={{ fontSize: '0.86rem', color: item.highlight ? 'var(--gold)' : 'var(--text)', fontWeight: item.highlight ? 600 : 500 }}>{item.value}</div>
                  </div>
                ))}
              </div>

              <div>
                <div style={{ fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-3)', marginBottom: '1rem', fontWeight: 600 }}>Platform Capabilities</div>
                {['Agent orchestration', 'Workflow intelligence', 'Enterprise integration', 'Observability', 'Governance controls'].map(label => (
                  <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.7rem', marginBottom: '0.7rem' }}>
                    <span style={{ width: 5, height: 5, borderRadius: '50%', background: 'var(--gold)', flexShrink: 0, opacity: 0.8 }} />
                    <span style={{ fontSize: '0.8rem', color: 'var(--text-2)', fontWeight: 400 }}>{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── FEATURED BUSINESSES ─────────────────────────────────────────────── */}
        <SectionLabel>Featured Businesses</SectionLabel>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.65, maxWidth: 580, fontWeight: 400, marginBottom: '2rem', marginTop: '0.5rem' }}>
          Products that are strategically important and publicly presentable today — a live assistant and a network in development.
        </p>
        <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '5rem' }}>
          {featured.map(p => <ProductCard key={p.name} p={p} />)}
        </div>

        {/* ── ADDITIONAL PRODUCTS ─────────────────────────────────────────────── */}
        <SectionLabel>Additional Products</SectionLabel>
        <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.65, maxWidth: 580, fontWeight: 400, marginBottom: '2rem', marginTop: '0.5rem' }}>
          Further products in development across search intelligence and verified creative talent.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '1.25rem', marginBottom: '5rem' }}>
          {additional.map(p => <ProductCard key={p.name} p={p} />)}
        </div>

        <Divider />

        {/* ── STRATEGIC CONTEXT ───────────────────────────────────────────────── */}
        <div style={{ padding: '5rem 0' }}>
          <SectionLabel>How It Fits Together</SectionLabel>
          <p style={{ fontSize: '0.92rem', color: 'var(--text-2)', lineHeight: 1.7, maxWidth: 620, fontWeight: 400, marginBottom: '2.5rem', marginTop: '0.5rem' }}>
            Today’s products sit within Tarvico’s first strategic pillar — Artificial Intelligence &amp; Global Technology. Two further pillars, AI infrastructure and energy, and intelligent mobility, are long-term ambitions.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {[
              { label: 'AI Workforce Infrastructure', desc: 'Enterprise AI operating systems and agent orchestration.', companies: 'Vytre AWOS', color: 'var(--gold)' },
              { label: 'Commerce & Trust', desc: 'Verified, reputation-driven networks for commerce and creative work.', companies: 'Maeyen · Racym', color: 'var(--gold-dim)' },
              { label: 'Productivity & Search', desc: 'AI assistants and search intelligence that give people leverage.', companies: 'SireIQ · SEOAgentPro', color: 'var(--gold-dim)' },
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
