import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vytre AWOS — AI Workforce Operating System',
  description:
    'Vytre AWOS is Tarvico’s flagship product: an AI Workforce Operating System — the enterprise control plane to deploy, manage, coordinate, and scale AI workers across operations, workflows, and systems.',
  keywords: [
    'Vytre',
    'Vytre AWOS',
    'AI Workforce Operating System',
    'AI workforce infrastructure',
    'enterprise AI control plane',
    'AI agent orchestration',
    'Tarvico Vytre',
    'deploy AI workers',
  ],
  openGraph: {
    title: 'Vytre AWOS — AI Workforce Operating System',
    description:
      'The enterprise control plane to deploy, coordinate, observe, and govern AI workers at scale. Vytre AWOS is Tarvico’s flagship product.',
    url: 'https://www.tarvico.com/vytre',
    images: [{ url: 'https://www.tarvico.com/og-image.png', width: 1200, height: 630, alt: 'Tarvico Inc. logo, white chevron and gold triangle on black' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vytre AWOS — AI Workforce Operating System',
    description: 'The enterprise control plane to deploy, coordinate, and govern AI workers at scale.',
    images: ['https://www.tarvico.com/og-image.png'],
  },
  alternates: { canonical: 'https://www.tarvico.com/vytre' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.tarvico.com/products' },
    { '@type': 'ListItem', position: 3, name: 'Vytre AWOS', item: 'https://www.tarvico.com/vytre' },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://www.tarvico.com/vytre#software',
  name: 'Vytre AWOS',
  alternateName: 'Vytre AI Workforce Operating System',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://www.vytre.com',
  description:
    'An AI Workforce Operating System — the enterprise control plane to deploy, manage, coordinate, observe, and govern AI workers across operations, workflows, and systems.',
  publisher: { '@id': 'https://www.tarvico.com/#organization' },
  brand: { '@id': 'https://www.tarvico.com/#organization' },
  offers: {
    '@type': 'Offer',
    category: 'SaaS',
    availability: 'https://schema.org/PreOrder',
  },
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.tarvico.com/vytre#webpage',
  url: 'https://www.tarvico.com/vytre',
  name: 'Vytre AWOS — AI Workforce Operating System',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/vytre#software' },
  inLanguage: 'en-US',
}

export default function VytreLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      {children}
    </>
  )
}
