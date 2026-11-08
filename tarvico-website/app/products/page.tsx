import Link from 'next/link'
import { PageHero, MaturityTag } from '@/components/ui'
import { BUSINESSES } from '@/lib/businesses'

export default function ProductsPage() {
  const names = ['SireIQ', 'Vytre AWOS', 'Maeyen']
  return (
    <>
      <PageHero title="Products" subtitle="Explore the products Tarvico builds and operates." />
      <section className="keystone-shell keystone-band portfolio-index" aria-labelledby="featured-products">
        <h2 id="featured-products">Featured products</h2>
        {names.map(name => {
          const product = BUSINESSES.find(business => business.name === name)
          if (!product) return null
          return (
            <article className="portfolio-row" key={product.name}>
              <div className="portfolio-row-name">
                <h3>{product.name}</h3>
                <MaturityTag tier={product.maturity} />
              </div>
              <div className="portfolio-row-copy">
                <p>{product.tagline}</p>
                {product.internal ? <Link className="keystone-link" href={product.internal}>Explore {product.name} →</Link>
                  : <a className="keystone-link" href={product.url}>Visit {product.name} ↗</a>}
              </div>
            </article>
          )
        })}
        <Link className="keystone-link" href="/portfolio">View the full portfolio →</Link>
      </section>
    </>
  )
}
