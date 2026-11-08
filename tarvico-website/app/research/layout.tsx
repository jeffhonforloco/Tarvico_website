import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Research & White Papers',
  description:
    'The Tarvico research library — white papers, AI research, commerce research, and technical documents from Tarvico Inc., intended to be durable and citable over time.',
  keywords: [
    'Tarvico research',
    'Tarvico white papers',
    'AI research',
    'commerce research',
    'technical documents',
    'Tarvico publications',
  ],
  openGraph: {
    title: 'Research & White Papers — Tarvico Inc.',
    description:
      'White papers, AI and commerce research, and technical documents from Tarvico Inc.',
    url: 'https://www.tarvico.com/research',
    images: [{ url: 'https://www.tarvico.com/og-image.png', width: 1200, height: 630, alt: 'Tarvico Inc. logo, white chevron and gold triangle on black' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Research & White Papers — Tarvico Inc.',
    description: 'White papers, AI and commerce research, and technical documents.',
    images: ['https://www.tarvico.com/og-image.png'],
  },
  alternates: { canonical: 'https://www.tarvico.com/research' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'Research', item: 'https://www.tarvico.com/research' },
  ],
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.tarvico.com/research#webpage',
  url: 'https://www.tarvico.com/research',
  name: 'Research & White Papers — Tarvico Inc.',
  description: 'The Tarvico research library — white papers, AI research, commerce research, and technical documents.',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/#organization' },
  inLanguage: 'en-US',
}

export default function ResearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      {children}
    </>
  )
}
