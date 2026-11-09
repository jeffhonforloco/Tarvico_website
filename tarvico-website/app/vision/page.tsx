import CorporateImage from '@/components/CorporateImage'
import { PageHero } from '@/components/ui'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Vision and Founder Letter | Tarvico Inc.',
  description:
    'Explore Tarvico’s long-term interests in AI infrastructure, energy and intelligent mobility, including the proposed Lagos AI campus, the Vytreon V7 concept and the founder’s letter.',
  keywords: [
    'Tarvico founder letter',
    'Jeff Honforloco letter',
    'Jeff Honforloco CEO Tarvico',
    'Jeff Honforloco',
    'Tarvico vision statement',
    'AI company founder story',
    'U.S. technology company vision',
    'building AI companies long term',
    'Tarvico Inc origins',
  ],
  openGraph: {
    title: 'Vision and Founder Letter | Tarvico Inc.',
    description:
      'Tarvico’s long-term vision, including the proposed Lagos AI campus and Vytreon V7 concept.',
    url: 'https://www.tarvico.com/vision',
    images: [
      {
        url: 'https://www.tarvico.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tarvico Inc. logo, white chevron and gold triangle on black',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vision and Founder Letter | Tarvico Inc.',
    description:
      'Tarvico’s long-term vision for AI infrastructure, energy and intelligent mobility.',
    images: ['https://www.tarvico.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.tarvico.com/vision',
  },
}

const paragraphs = [
  { lead: true, text: 'When I moved to the United States more than a decade ago, I did not arrive with a roadmap for building a technology company. I came with ambition, curiosity, and a belief that creativity and persistence could open doors that once felt impossible.' },
  { text: 'My background was not in Silicon Valley. I began as a professional photographer — someone deeply interested in people, storytelling, design, emotion, and the way technology shapes human experience. Photography taught me how to observe details, how to think creatively, and how to see possibilities where others might not.' },
  { text: 'Over time, that curiosity expanded far beyond creative work. I became increasingly fascinated by software, systems, automation, artificial intelligence, and the future of how people work and live. Without a traditional technical background, I started teaching myself how to build using modern AI tools, experimenting constantly, learning through iteration, and turning ideas into working products.' },
  { text: 'That journey became the foundation for Tarvico Inc.' },
  { bold: true, text: 'Tarvico was created from a simple belief: The next generation of great companies will not just build software. They will build systems that improve how people operate, create, communicate, and solve problems in everyday life.' },
  { text: 'We are entering a new technological era where AI is becoming an operational layer across business, creativity, productivity, infrastructure, and daily human interaction. I believe this shift will redefine how companies are built and how individuals access opportunity.' },
  { text: 'Our goal at Tarvico is to participate meaningfully in that transformation.' },
  { text: 'Today, we are building AI-native products focused on intelligent workflows, automation, digital operations, and scalable systems for businesses and individuals. Our flagship initiative — Vytre AWOS, an AI Workforce Operating System — represents the beginning of a much larger vision: creating technologies that help organizations operate more intelligently while giving people more leverage over their time, creativity, and potential.' },
  { text: 'But our ambitions extend beyond software alone.' },
  { text: 'Over the long term, I envision Tarvico becoming a diversified technology company that develops products, platforms, and everyday tools that people genuinely rely on — across digital experiences, infrastructure, AI systems, and eventually consumer products that integrate naturally into daily life.' },
  { text: 'The companies that inspire me most are not defined by a single product. They are defined by their ability to evolve, experiment, and continuously build for the future. What began as search engines, social networks, or software platforms eventually became ecosystems that shaped industries and human behavior at global scale.' },
  { text: 'That long-term mindset deeply influences how we think about Tarvico.' },
  { text: 'We are still at the beginning of our journey. Many of our products are in early development. We are a small team with large ambitions, learning and building every day. But history has shown that transformative companies often begin with small groups of determined people willing to think differently, move relentlessly, and commit themselves to a vision larger than their current circumstances.' },
  { text: 'At Tarvico, we believe innovation should be practical, accessible, and human-centered. Technology should not exist only to impress people — it should genuinely improve how people work, create, and live.' },
  { text: 'We also believe the future belongs to builders who combine creativity with adaptability. The rise of AI is making it possible for individuals and small teams to accomplish what once required enormous organizations. That shift is empowering a new generation of creators and entrepreneurs around the world, including people whose paths into technology may not have been traditional.' },
  { bold: true, text: 'I see myself in that future.' },
  { text: 'Tarvico exists because I believe ambitious ideas should not be limited by background, geography, or conventional expectations. What matters most is vision, persistence, execution, and the willingness to continue building even when the path is uncertain.' },
  { text: 'This company is being built with long-term conviction. We are focused on creating enduring products, meaningful technology, and a culture centered around curiosity, discipline, creativity, and continuous innovation.' },
  { text: 'The work ahead will take years. There will be challenges, pivots, experimentation, and growth. But we are building with the belief that the technologies created today can shape how people and businesses operate for decades to come.' },
  { text: 'Thank you to everyone following our journey, supporting our work, and believing in what Tarvico can become.' },
  { bold: true, text: 'We are only getting started.' },
]

const SERIF = 'var(--font-display)'
const BODY = 'var(--font-body)'

export default function VisionPage() {
  return (
    <>
      <PageHero layout="feature" title="Our vision" subtitle="Tarvico builds AI and digital products today. Its long-term interests include AI infrastructure, energy and intelligent mobility." />
      <section id="lagos-campus" className="keystone-shell keystone-band vision-feature vision-feature--campus" aria-labelledby="lagos-heading">
        <div>
          <h2 id="lagos-heading">Proposed Lagos AI campus</h2>
          <p>Tarvico is exploring a long-term concept for an AI data center campus in Lagos, Nigeria. The proposal illustrates how modular computing halls could be supported by power, cooling and network connectivity.</p>
          <p>No site acquisition, permits, financing or construction are confirmed.</p>
        </div>
        <CorporateImage name="lagos" caption="Architectural concept for a proposed campus in Lagos, Nigeria" />
        <dl className="vision-systems">
          <div><dt>Computing and connectivity</dt><dd>Modular halls for AI computing, supported by fiber connections.</dd></div>
          <div><dt>Power and storage</dt><dd>Illustrative solar, wind, battery storage and grid interconnection.</dd></div>
          <div><dt>Cooling and water</dt><dd>Cooling equipment and water infrastructure are part of the concept.</dd></div>
        </dl>
      </section>
      <section id="vytreon" className="keystone-dark" aria-labelledby="vytreon-heading">
        <div className="keystone-shell keystone-band vision-feature vision-feature--mobility">
          <div>
            <h2 id="vytreon-heading">Vytreon V7</h2>
            <p>Vytreon is a proposed electric mobility initiative. The V7 is an exterior design concept for a future electric SUV. Tarvico has no vehicle manufacturing or sales operation.</p>
            <p>Escazo’s <a className="keystone-link" href="https://escazo.com">travel platform ↗</a> operates today. Premium transportation remains a future ambition.</p>
          </div>
          <CorporateImage name="v7" caption="Future vehicle concept · Vytreon V7 exterior" />
        </div>
      </section>
      <section className="keystone-shell keystone-band company-questions">
        <details>
          <summary>Read the founder’s letter</summary>
          <article className="founder-letter">
            <h2>Building for the Next Era</h2>
        {paragraphs.map((p, i) => {
          if (p.lead) return (
            <p key={i} style={{ fontFamily: SERIF, fontSize: 'clamp(1.45rem, 2.6vw, 2rem)', fontWeight: 500, color: 'var(--paper-ink)', lineHeight: 1.4, marginBottom: '3rem', paddingLeft: '2rem', borderLeft: '2px solid var(--paper-ink)', letterSpacing: '-0.015em' }}>
              <span style={{ color: 'var(--paper-ink)', fontStyle: 'italic' }}>&ldquo;</span>{p.text}<span style={{ color: 'var(--paper-ink)', fontStyle: 'italic' }}>&rdquo;</span>
            </p>
          )
          if (p.bold) return (
            <p key={i} style={{ fontFamily: SERIF, fontSize: 'clamp(1.2rem, 2.2vw, 1.5rem)', color: 'var(--paper-ink)', lineHeight: 1.5, fontWeight: 500, margin: '2.5rem 0', letterSpacing: '-0.01em' }}>
              {p.text}
            </p>
          )
          return (
            <p key={i} style={{ fontSize: '1.08rem', color: 'var(--paper-muted)', lineHeight: 1.85, fontWeight: 400, marginBottom: '1.75rem' }}>
              {p.text}
            </p>
          )
        })}

        <div style={{ marginTop: '5rem', paddingTop: '3rem', borderTop: '1px solid var(--paper-line)' }}>
          <div style={{ fontFamily: SERIF, fontSize: '1.7rem', fontWeight: 500, fontStyle: 'italic', color: 'var(--paper-ink)', marginBottom: '0.6rem', letterSpacing: '-0.01em' }}>
            Jeff Honforloco
          </div>
          <div style={{ fontFamily: BODY, fontSize: '0.62rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--paper-ink)', fontWeight: 500, marginBottom: '0.3rem' }}>
            Founder &amp; Chief Executive Officer
          </div>
          <div style={{ fontFamily: BODY, fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--paper-muted)', fontWeight: 400 }}>
            Tarvico Inc. · 2026
          </div>
          <Link href="/founder" style={{ display: 'inline-block', marginTop: '2rem', fontFamily: BODY, fontSize: '0.66rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--paper-ink)', fontWeight: 500, textDecoration: 'none', borderBottom: '1px solid var(--accent-line)', paddingBottom: 4 }}>
            View founder profile →
          </Link>
        </div>
          </article>
        </details>
      </section>
    </>
  )
}
