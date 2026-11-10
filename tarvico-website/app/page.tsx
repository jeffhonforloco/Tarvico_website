import type { Metadata, ResolvingMetadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ProductScreenshot from '@/components/ProductScreenshot'
import ProductShowcases from '@/components/ProductShowcases'
import { MaturityTag } from '@/components/ui'

export async function generateMetadata(
  _props: unknown,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const title = 'Tarvico Inc. — Private Technology Holding Company'
  const { openGraph, twitter } = await parent

  return {
    title: { absolute: title },
    openGraph: { ...openGraph, url: openGraph?.url ?? undefined, title },
    twitter: {
      ...twitter,
      site: twitter?.site ?? undefined,
      siteId: twitter?.siteId ?? undefined,
      creator: twitter?.creator ?? undefined,
      creatorId: twitter?.creatorId ?? undefined,
      description: twitter?.description ?? undefined,
      title,
    },
  }
}

export default function HomePage() {
  return (
    <>
      <section className="ed-hero ed-gutter" aria-labelledby="hero-title">
        <h1 id="hero-title">Technology for<br className="ed-desktop-break" /> a connected<br className="ed-desktop-break" /> future.</h1>
        <div className="ed-hero-copy">
          <p>Tarvico Inc. is a U.S.-incorporated technology company that builds and operates AI and digital products.</p>
          <a className="ed-primary" href="#products">Explore our products <span aria-hidden="true">↘</span></a>
        </div>
        <figure className="ed-hero-visual">
          <div className="ed-hero-image">
            <ProductScreenshot name="sireiq" sizes="(max-width: 950px) 89vw, min(57vw, 1200px)" eager />
          </div>
          <div className="ed-hero-detail">
            <ProductScreenshot name="sireiqPrompt" sizes="(max-width: 950px) 36vw, min(16vw, 324px)" decorative />
          </div>
          <figcaption>SireIQ <span>Public interface</span></figcaption>
        </figure>
      </section>

      <ProductShowcases />

      <section id="portfolio" className="ed-portfolio ed-gutter" aria-labelledby="portfolio-title">
        <div className="ed-section-heading"><h2 id="portfolio-title">Selected portfolio</h2><Link className="ed-arrow-link" href="/portfolio">View portfolio <span aria-hidden="true">↗</span></Link></div>
        <div className="ed-portfolio-spread">
          <article>
            <MaturityTag tier="in-development" />
            <h3>Maeyen</h3>
            <p>Developing seller verification and transaction protection for online commerce in Africa, starting in Nigeria.</p>
            <Link className="ed-arrow-link" href="/maeyen">About Maeyen <span aria-hidden="true">↗</span></Link>
          </article>
          <article>
            <MaturityTag tier="operational" label="Operating travel platform" />
            <h3>Escazo</h3>
            <p>Monitors trips and helps travelers respond when plans change.</p>
            <a className="ed-arrow-link" href="https://escazo.com">Visit Escazo <span aria-hidden="true">↗</span></a>
          </article>
        </div>
      </section>

      <section id="vision" className="ed-vision" aria-labelledby="vision-title">
        <div className="ed-vision-title ed-gutter">
          <h2 id="vision-title">Our long-term vision</h2>
          <p>Tarvico is exploring the future of AI infrastructure, energy and intelligent mobility.</p>
        </div>
        <article className="ed-campus">
          <picture><source media="(max-width: 600px)" srcSet="/images/lagos-campus-640.webp" /><Image width={1280} height={720} src="/images/lagos-campus.webp" alt="Concept rendering of a modular data center campus with solar fields and a reservoir near Lagos" /></picture>
          <div className="ed-vision-story">
            <p className="ed-stage">Proposed concept</p>
            <h3>Lagos AI campus</h3>
            <p>A long-term proposal for modular computing, power, cooling and connectivity in Lagos, Nigeria. Site acquisition, permits, financing and construction remain unconfirmed.</p>
            <Link className="ed-arrow-link" href="/vision#lagos-campus">Explore the proposal <span aria-hidden="true">↗</span></Link>
          </div>
        </article>
        <article className="ed-mobility ed-gutter">
          <div className="ed-vision-story">
            <p className="ed-stage">Future vehicle concept</p>
            <h3>Vytreon V7</h3>
            <p>An electric SUV design for a proposed mobility initiative. It is a design concept with no announced production availability.</p>
            <Link className="ed-arrow-link" href="/vision#vytreon">Explore the concept <span aria-hidden="true">↗</span></Link>
          </div>
          <Image width={990} height={381} src="/images/vytreon-v7-reference.webp" alt="Vytreon V7 electric SUV concept rendering, viewed from the front three-quarter angle" />
        </article>
      </section>

      <section id="company" className="ed-company ed-gutter" aria-labelledby="company-title">
        <h2 id="company-title">About Tarvico</h2>
        <div><p>Tarvico Inc. is privately held and incorporated in Delaware. Its product brands sit within the parent company unless otherwise disclosed.</p>
        <div className="ed-company-links"><Link className="ed-arrow-link" href="/about">Company <span aria-hidden="true">↗</span></Link><Link className="ed-arrow-link" href="/investors">Investor information <span aria-hidden="true">↗</span></Link></div></div>
      </section>
    </>
  )
}
