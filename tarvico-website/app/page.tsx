import Link from 'next/link'
import CorporateImage from '@/components/CorporateImage'
import { MaturityTag } from '@/components/ui'
import { BUSINESSES } from '@/lib/businesses'

const currentProducts = [
  { name: 'SireIQ', description: 'An AI assistant for research, creation, planning and problem-solving.', image: 'sireiqPrompt', caption: 'SireIQ public interface', link: 'Visit SireIQ' },
  { name: 'Vytre AWOS', description: 'An AI Workforce Operating System for coordinating executives, managers and worker agents with human approvals.', image: 'vytre', caption: 'Vytre product demo', link: 'Visit Vytre' },
] as const

export default function HomePage() {
  return (
    <>
      <section className="home-intro keystone-dark">
        <div className="keystone-shell home-intro-grid">
          <div>
            <h1>Technology for a connected future.</h1>
            <p>Tarvico Inc. is a U.S.-incorporated technology company that builds and operates AI and digital products.</p>
            <a className="keystone-button keystone-button--primary" href="#products">Explore products →</a>
          </div>
          <CorporateImage name="sireiq" caption="SireIQ · Public interface" eager />
        </div>
      </section>

      <section id="products" className="keystone-shell keystone-band" aria-labelledby="current-products">
        <h2 className="corporate-section-title" id="current-products">Our products</h2>
        {currentProducts.map(product => {
          const business = BUSINESSES.find(item => item.name === product.name)
          if (!business?.url) return null
          return (
            <article className="home-product" key={product.name}>
              <div>
                <h3>{product.name}</h3>
                <MaturityTag tier={business.maturity} />
                <p>{product.description}</p>
                <a className="keystone-link" href={business.url}>{product.link} ↗</a>
              </div>
              <CorporateImage name={product.image} caption={product.caption} />
            </article>
          )
        })}
      </section>

      <section className="home-portfolio" aria-labelledby="selected-portfolio">
        <div className="keystone-shell keystone-band">
          <div className="keystone-heading-row">
            <h2 id="selected-portfolio">Selected portfolio</h2>
            <Link className="keystone-link" href="/portfolio">Full portfolio →</Link>
          </div>
          <article className="home-portfolio-row">
            <div><h3>Maeyen</h3><MaturityTag tier="in-development" /></div>
            <p>Trust infrastructure for digital commerce.</p>
            <Link className="keystone-link" href="/maeyen">About Maeyen →</Link>
          </article>
          <article className="home-portfolio-row">
            <div><h3>Escazo</h3><MaturityTag tier="operational" label="Operating travel platform" /></div>
            <p>Monitors trips and helps travelers respond to disruptions.</p>
            <a className="keystone-link" href="https://escazo.com">Visit Escazo ↗</a>
          </article>
        </div>
      </section>

      <section className="keystone-dark" aria-labelledby="our-vision">
        <div className="keystone-shell keystone-band">
          <h2 className="corporate-section-title" id="our-vision">Our vision</h2>
          <p className="vision-intro">Our long-term interests include AI infrastructure, energy and intelligent mobility.</p>
          <div className="future-grid">
            <article>
              <CorporateImage name="lagos" />
              <p className="future-stage">Architectural concept</p>
              <h3>Proposed Lagos AI campus</h3>
              <p>A concept for modular computing, power, cooling and connectivity in Lagos, Nigeria.</p>
              <Link className="keystone-link" href="/vision#lagos-campus">Explore the campus proposal →</Link>
            </article>
            <article>
              <CorporateImage name="v7" />
              <p className="future-stage">Future vehicle concept</p>
              <h3>Vytreon V7</h3>
              <p>An electric SUV concept for a proposed future mobility initiative.</p>
              <Link className="keystone-link" href="/vision#vytreon">Explore the mobility concept →</Link>
            </article>
          </div>
        </div>
      </section>

      <div className="keystone-shell keystone-band home-closing">
        <section aria-labelledby="about-tarvico">
          <h2 id="about-tarvico">About Tarvico</h2>
          <p>Tarvico Inc. is privately held and incorporated in Delaware. Its product brands sit within the parent company unless otherwise disclosed.</p>
          <div className="keystone-actions">
            <Link className="keystone-link" href="/about">Company →</Link>
            <Link className="keystone-link" href="/founder">Leadership →</Link>
          </div>
        </section>
        <section aria-labelledby="contact-tarvico">
          <h2 id="contact-tarvico">Contact</h2>
          <p>Contact Tarvico for investor information or business inquiries.</p>
          <div className="keystone-actions">
            <Link className="keystone-link" href="/investors">Investor information →</Link>
            <Link className="keystone-link" href="/contact">Contact Tarvico →</Link>
          </div>
        </section>
      </div>
    </>
  )
}
