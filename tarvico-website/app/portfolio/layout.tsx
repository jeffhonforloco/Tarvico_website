import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Businesses — Tarvico Inc. | Vytre AWOS, SireIQ, Maeyen',
  description:
    "Tarvico Inc.'s portfolio of AI-native products: Vytre AWOS (enterprise AI Workforce Operating System), SireIQ (AI assistant), Maeyen (commerce trust infrastructure), SEOAgentPro (autonomous SEO), and Racym (verified creative talent network). Products built and operated by a privately held U.S. technology company.",
  keywords: [
    'Tarvico portfolio',
    'Vytre AWOS',
    'AI Workforce Operating System enterprise',
    'SireIQ AI assistant',
    'Maeyen commerce trust',
    'SEOAgentPro',
    'Racym talent network',
    'AI product portfolio',
    'Tarvico products',
  ],
  openGraph: {
    title: 'Our Businesses — Tarvico Inc. | Vytre AWOS, SireIQ, Maeyen & More',
    description:
      'The products a privately held U.S. technology company builds and operates — enterprise AI workforce infrastructure, an AI assistant, commerce trust infrastructure, and more.',
    url: 'https://www.tarvico.com/portfolio',
    images: [
      {
        url: 'https://www.tarvico.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tarvico Inc. — Our Businesses',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarvico Inc. — Our Businesses',
    description:
      'Vytre AWOS, SireIQ, Maeyen, SEOAgentPro, Racym — products built and operated by Tarvico Inc., a privately held U.S. technology company.',
    images: ['https://www.tarvico.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.tarvico.com/portfolio',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'Our Businesses', item: 'https://www.tarvico.com/portfolio' },
  ],
}

const portfolioPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.tarvico.com/portfolio#webpage',
  url: 'https://www.tarvico.com/portfolio',
  name: 'Our Businesses — Tarvico Inc.',
  description: 'The products Tarvico Inc. builds and operates, each with an honest maturity label.',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/#organization' },
  inLanguage: 'en-US',
  hasPart: [
    {
      '@type': 'SoftwareApplication',
      name: 'Vytre AWOS',
      description: 'AI Workforce Operating System for enterprise — autonomous AI workforce deployment and coordination.',
      url: 'https://www.vytre.com',
      applicationCategory: 'BusinessApplication',
      operatingSystem: 'Cloud',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'SireIQ',
      description: 'Intelligent AI assistant for chat, content creation, and workflow automation.',
      url: 'https://www.sireiq.com',
      applicationCategory: 'ProductivityApplication',
    },
    {
      '@type': 'SoftwareApplication',
      name: 'SEOAgentPro',
      description: 'Autonomous SEO intelligence platform for content strategy and search optimization.',
      url: 'https://www.seoagentpro.com',
      applicationCategory: 'BusinessApplication',
    },
    {
      '@type': 'WebApplication',
      name: 'Maeyen',
      description: 'Commerce trust infrastructure for Africa, starting from Nigeria — verifying participants and protecting transactions.',
      url: 'https://www.maeyen.com',
      applicationCategory: 'BusinessApplication',
    },
    {
      '@type': 'WebApplication',
      name: 'Racym',
      description: 'A verified creative talent network matching brands and agencies to pre-vetted talent based on delivered work.',
      url: 'https://www.racym.com',
      applicationCategory: 'BusinessApplication',
    },
  ],
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioPageSchema) }} />
      {children}
    </>
  )
}
