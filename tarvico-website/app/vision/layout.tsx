// Structured data for the founder letter. Page metadata (title, canonical,
// OG/Twitter) is exported from vision/page.tsx — not duplicated here.

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'Vision', item: 'https://www.tarvico.com/vision' },
  ],
}

const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.tarvico.com/#founder',
  name: 'Jeff Honforloco',
  jobTitle: 'Founder & Chief Executive Officer',
  worksFor: { '@id': 'https://www.tarvico.com/#organization' },
  url: 'https://www.tarvico.com/vision',
  sameAs: ['https://x.com/tarvicoinc'],
}

const visionPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://www.tarvico.com/vision#webpage',
  url: 'https://www.tarvico.com/vision',
  name: 'Founder Letter — Tarvico Inc.',
  description: 'A letter from Jeff Honforloco, Founder & CEO of Tarvico Inc., on the origins and long-term vision behind building enduring AI-native technology companies.',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/#founder' },
  mainEntity: { '@id': 'https://www.tarvico.com/#founder' },
  inLanguage: 'en-US',
}

export default function VisionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(visionPageSchema) }} />
      {children}
    </>
  )
}
