import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products — Vytre AWOS & Maeyen',
  description:
    'Tarvico builds enduring, AI-native products that solve foundational problems. Current products include Vytre AWOS, an AI Workforce Operating System, and Maeyen, commerce trust infrastructure for Africa.',
  keywords: [
    'Tarvico products',
    'Vytre AWOS',
    'Maeyen',
    'AI Workforce Operating System',
    'commerce trust infrastructure',
    'Tarvico product ecosystem',
  ],
  openGraph: {
    title: 'Products — Vytre AWOS & Maeyen | Tarvico Inc.',
    description:
      'Enduring, AI-native products from Tarvico Inc. — Vytre AWOS (AI Workforce Operating System) and Maeyen (commerce trust infrastructure for Africa).',
    url: 'https://www.tarvico.com/products',
    images: [{ url: 'https://www.tarvico.com/og-image.png', width: 1200, height: 630, alt: 'Tarvico Inc. logo, white chevron and gold triangle on black' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products — Vytre AWOS & Maeyen | Tarvico Inc.',
    description: 'Enduring, AI-native products from Tarvico Inc.',
    images: ['https://www.tarvico.com/og-image.png'],
  },
  alternates: { canonical: 'https://www.tarvico.com/products' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.tarvico.com/products' },
  ],
}

const collectionSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.tarvico.com/products#webpage',
  url: 'https://www.tarvico.com/products',
  name: 'Products — Tarvico Inc.',
  description: 'Current AI-native products built and operated by Tarvico Inc.',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/#organization' },
  inLanguage: 'en-US',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        item: {
          '@type': 'SoftwareApplication',
          name: 'Vytre AWOS',
          applicationCategory: 'BusinessApplication',
          url: 'https://www.tarvico.com/vytre',
          description: 'An AI Workforce Operating System — the enterprise control plane to deploy, coordinate, and govern AI workers at scale.',
        },
      },
      {
        '@type': 'ListItem',
        position: 2,
        item: {
          '@type': 'WebApplication',
          name: 'Maeyen',
          applicationCategory: 'BusinessApplication',
          url: 'https://www.tarvico.com/maeyen',
          description: 'A commerce trust network for Africa, starting from Nigeria — verifying participants and protecting transactions.',
        },
      },
    ],
  },
}

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
      {children}
    </>
  )
}
