import Link from 'next/link'
import { PageHero, MaturityTag } from '@/components/ui'
import ProductShowcases from '@/components/ProductShowcases'
import { BUSINESSES } from '@/lib/businesses'

export default function ProductsPage() {
  const product = BUSINESSES.find(business => business.name === 'Maeyen')
  return (
    <>
      <PageHero layout="feature" title="Products" subtitle="Explore the products Tarvico builds and operates." />
      <ProductShowcases showHeading={false} />
      <section className="keystone-shell keystone-band portfolio-index" aria-labelledby="developing-products">
        <h2 id="developing-products">In development</h2>
        {product && (
          <article className="portfolio-row">
            <div className="portfolio-row-name">
              <h3>{product.name}</h3>
              <MaturityTag tier={product.maturity} />
            </div>
            <div className="portfolio-row-copy">
              <p>{product.tagline}</p>
              <Link className="keystone-link" href="/maeyen">Explore Maeyen →</Link>
            </div>
          </article>
        )}
        <Link className="keystone-link" href="/portfolio">View the full portfolio →</Link>
      </section>
    </>
  )
}
