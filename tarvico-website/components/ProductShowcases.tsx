import ProductScreenshot from '@/components/ProductScreenshot'
import Link from 'next/link'
import ProductDemo from '@/components/ProductDemo'
import { MaturityTag } from '@/components/ui'

export default function ProductShowcases({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <section id="products" aria-labelledby="products-title">
      {showHeading ? (
        <div className="ed-product-heading ed-gutter">
          <h2 id="products-title">Our products</h2>
          <span>Artificial intelligence and software</span>
        </div>
      ) : <h2 id="products-title" className="sr-only">Product demonstrations</h2>}
      <article className="ed-sireiq ed-gutter">
        <div className="ed-story">
          <MaturityTag tier="operational" />
          <h3>SireIQ</h3>
          <p>An AI platform for research, creation, understanding, planning and problem-solving.</p>
          <a className="ed-arrow-link" href="https://sireiq.com">Visit SireIQ <span aria-hidden="true">↗</span></a>
        </div>
        <ProductDemo product="sireiq">
          <div className="ed-sireiq-image">
            <ProductScreenshot name="sireiqPrompt" sizes="(max-width: 610px) calc(100vw - 74px), min(50vw, 940px)" />
          </div>
        </ProductDemo>
      </article>
      <article className="ed-vytre ed-gutter">
        <div className="ed-story">
          <MaturityTag tier="public-beta" />
          <h3>Vytre AWOS</h3>
          <p>An AI Workforce Operating System that coordinates AI executives, managers and workers, with people approving key decisions.</p>
          <a className="ed-arrow-link" href="https://www.vytre.com">Open Vytre public beta <span aria-hidden="true">↗</span></a>
          {!showHeading && (
            <div><Link className="ed-arrow-link" href="/vytre">Vytre overview <span aria-hidden="true">→</span></Link></div>
          )}
        </div>
        <ProductDemo product="vytre">
          <figure className="ed-vytre-visual">
            <ProductScreenshot name="vytre" sizes="(max-width: 610px) calc(90vw - 40px), min(48vw, 740px)" />
            <figcaption>Vytre <span>Public product demo</span></figcaption>
          </figure>
        </ProductDemo>
      </article>
    </section>
  )
}
