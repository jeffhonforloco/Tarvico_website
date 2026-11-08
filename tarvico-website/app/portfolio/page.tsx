import Link from 'next/link'
import { PageHero, MaturityTag } from '@/components/ui'
import CorporateImage, { type CorporateImageName } from '@/components/CorporateImage'
import type { MaturityTier } from '@/lib/businesses'

type Product = {
  name: string
  url: string
  domain: string
  internal?: string
  maturity: MaturityTier
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
    desc: 'An AI assistant for research, creation, planning and problem-solving.',
    market: 'SMB · Consumer · Teams',
  },
  {
    name: 'Maeyen',
    url: 'https://www.maeyen.com',
    domain: 'maeyen.com',
    internal: '/maeyen',
    maturity: 'in-development',
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
    desc: 'An autonomous SEO intelligence platform — real-time analysis, content strategy, competitive monitoring, and optimization.',
    market: 'Agencies · E-Commerce · B2B',
  },
  {
    name: 'Racym',
    url: 'https://www.racym.com',
    domain: 'racym.com',
    maturity: 'in-development',
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
  desc: 'An AI Workforce Operating System for coordinating executives, managers and worker agents with human approvals.',
  market: 'Enterprise / SMB',
}

function ProductRow({ product, study }: { product: Product; study?: CorporateImageName }) {
  return (
    <article className={`portfolio-row${study ? ' portfolio-row--illustrated' : ''}`}>
      <div className="portfolio-row-name">
        <h3>{product.name}</h3>
        <MaturityTag tier={product.maturity} />
      </div>
      <div className="portfolio-row-copy">
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
      {study && <CorporateImage name={study} caption={study === 'vytre' ? 'Vytre product demo' : 'SireIQ public interface'} />}
    </article>
  )
}

export default function BusinessesPage() {
  return (
    <>
      <PageHero layout="index"
        title="Portfolio"
        subtitle="The products Tarvico builds and operates, grouped by stage. Product brands sit within Tarvico Inc. unless otherwise disclosed."
      />

      <section className="keystone-shell keystone-band portfolio-index" aria-labelledby="current-products">
        <h2 id="current-products">Products today</h2>
        <ProductRow product={featured[0]} study="sireiqPrompt" />
        <ProductRow product={vytre} study="vytre" />
        <ProductRow product={{ name: 'Escazo', maturity: 'operational', url: 'https://escazo.com', domain: 'escazo.com', market: 'Travelers', desc: 'An operating travel platform that monitors trips and helps travelers respond to disruptions. Premium transportation remains a future ambition.' }} />
        <h2 className="portfolio-index-heading">In development</h2>
        <ProductRow product={featured[1]} />
        {additional.map(product => <ProductRow key={product.name} product={product} />)}
      </section>

      <section className="home-portfolio">
        <div className="keystone-shell keystone-band">
          <h2 className="corporate-section-title">Long-term direction</h2>
          <p className="vision-intro">AI infrastructure, energy and intelligent mobility are future interests alongside Tarvico’s current software products.</p>
          <Link className="keystone-link" href="/vision">Our vision →</Link>
        </div>
      </section>
    </>
  )
}
