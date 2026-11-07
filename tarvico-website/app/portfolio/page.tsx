import Link from 'next/link'
import { PageHero, MaturityTag, Eyebrow } from '@/components/ui'
import ConceptImage, { type Study } from '@/components/ConceptImage'
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

const vytre: Product = {
  name: 'Vytre AWOS',
  url: 'https://www.vytre.com',
  domain: 'vytre.com',
  internal: '/vytre',
  maturity: 'public-beta',
  category: 'Flagship · AI Workforce Infrastructure',
  desc: 'An AI Workforce Operating System — the enterprise control plane to deploy, manage, coordinate, observe, and govern AI workers across operations, workflows, and systems.',
  market: 'Enterprise / SMB',
}

function ProductRow({ product, study }: { product: Product; study?: Study }) {
  return (
    <article className={`portfolio-row${study ? ' portfolio-row--illustrated' : ''}`}>
      <div className="portfolio-row-name">
        <h3>{product.name}</h3>
        <MaturityTag tier={product.maturity} />
      </div>
      <div className="portfolio-row-copy">
        <p className="keystone-label">{product.category}</p>
        <p>{product.desc}</p>
        <p className="portfolio-market">Audience · {product.market}</p>
        {product === vytre && (
          <details className="portfolio-details">
            <summary>Platform capabilities and model</summary>
            <p>Software as a service. Agent orchestration, workflow intelligence, enterprise integration, observability and governance controls.</p>
          </details>
        )}
        <div className="keystone-actions">
          {product.internal && <Link className="keystone-link" href={product.internal}>{product.name} overview →</Link>}
          <a className="keystone-link" href={product.url} target="_blank" rel="noopener noreferrer">{product.domain} ↗</a>
        </div>
      </div>
      {study && <ConceptImage study={study} />}
    </article>
  )
}

export default function BusinessesPage() {
  return (
    <>
      <PageHero
        label="Our Businesses"
        title={<>Our businesses, one <span className="editorial-emphasis">strategy.</span></>}
        subtitle="A selective view of the products Tarvico builds and operates — each shown with an honest maturity label. Tarvico is a privately held U.S. technology company; these are products it develops, not separately incorporated companies."
      />

      <section className="keystone-shell keystone-band portfolio-index" aria-labelledby="current-products">
        <h2 id="current-products">Products today</h2>
        <ProductRow product={featured[0]} study="sireiq" />
        <ProductRow product={vytre} study="vytre" />
        <h2 className="portfolio-index-heading">In development</h2>
        <ProductRow product={featured[1]} study="maeyen" />
        {additional.map(product => <ProductRow key={product.name} product={product} />)}
      </section>

      {/* ── STRATEGIC CONTEXT — mineral editorial band ──────────────────────── */}
      <section className="keystone-paper" style={{ borderTop: '1px solid var(--border-w)' }}>
        <div className="mob-p" style={{ maxWidth: 1200, margin: '0 auto', padding: '7rem max(1.5rem, 4vw)' }}>
          <Eyebrow folio="04" label="How It Fits Together" onMineral />
          <h2 style={{ fontFamily: 'var(--font-display)', fontWeight: 670, fontSize: 'clamp(1.9rem, 3.6vw, 3rem)', lineHeight: 1.08, letterSpacing: '-0.02em', color: 'var(--paper-ink)', maxWidth: 640, marginBottom: '1.25rem', textWrap: 'balance' }}>
            One strategy, three pillars.
          </h2>
          <p style={{ fontSize: '1rem', color: 'var(--paper-muted)', lineHeight: 1.7, maxWidth: 640, marginBottom: '3.5rem' }}>
            Today’s products sit within Tarvico’s first strategic pillar — Artificial Intelligence &amp; Global Technology. Two further pillars, AI infrastructure and energy, and intelligent mobility, are long-term ambitions.
          </p>
          <p style={{ color: 'var(--paper-muted)', maxWidth: 640, marginBottom: '2rem' }}>
            <a href="https://escazo.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textUnderlineOffset: '.22em' }}>Escazo’s travel platform</a> is operational. Premium transportation and broader mobility operations remain long-term plans.
          </p>
          <div className="mob-stack" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, borderTop: '1px solid var(--paper-line)' }}>
            {[
              { label: 'AI Workforce Infrastructure', desc: 'Enterprise AI operating systems and agent orchestration.', companies: 'Vytre AWOS', color: 'var(--paper-ink)' },
              { label: 'Commerce & Trust', desc: 'Verified, reputation-driven networks for commerce and creative work.', companies: 'Maeyen · Racym', color: 'var(--paper-ink)' },
              { label: 'Productivity & Search', desc: 'AI assistants and search intelligence that give people leverage.', companies: 'SireIQ · SEOAgentPro', color: 'var(--paper-ink)' },
            ].map((tier, i) => (
              <div key={tier.label} style={{ padding: '2rem 1.75rem 2rem 0', borderTop: i === 0 ? 'none' : undefined, borderLeft: i > 0 ? '1px solid var(--paper-line)' : 'none', paddingLeft: i > 0 ? '1.75rem' : 0 }}>
                <div style={{ width: 28, height: 3, background: tier.color, marginBottom: '1.25rem', borderRadius: 3 }} />
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.02rem', color: 'var(--paper-ink)', marginBottom: '0.6rem', fontWeight: 700, letterSpacing: '-0.01em' }}>{tier.label}</div>
                <p style={{ fontSize: '0.84rem', color: 'var(--paper-muted)', lineHeight: 1.6, marginBottom: '1.25rem' }}>{tier.desc}</p>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: tier.color, fontWeight: 500 }}>{tier.companies}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
