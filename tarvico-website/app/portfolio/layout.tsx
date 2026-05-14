import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio — Tarvico Inc. AI Ventures | Vytre AWOS, SireIQ, SEOAgentPro',
  description:
    "Tarvico Inc.'s portfolio of AI-native ventures: Vytre AWOS (enterprise AI workforce OS), SireIQ (AI assistant), SEOAgentPro (autonomous SEO platform), Fycra (developer tools), and Fycera (AI creative software). Six companies, one institutional holding company.",
  keywords: [
    'Tarvico portfolio',
    'Vytre AWOS',
    'AI Workforce Operating System enterprise',
    'SireIQ AI assistant',
    'SEOAgentPro',
    'Fycra developer tools',
    'Fycera AI creative',
    'AI venture portfolio',
    'technology incubation',
    'Tarvico companies',
  ],
  openGraph: {
    title: 'Portfolio — Tarvico Inc. | Vytre AWOS, SireIQ, SEOAgentPro & More',
    description:
      'Six AI-native ventures, one institutional holding company. Explore the Tarvico portfolio — flagship enterprise infrastructure, AI assistants, autonomous SEO tools, developer platforms, and creative software.',
    url: 'https://www.tarvico.com/portfolio',
    images: [
      {
        url: 'https://www.tarvico.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Tarvico Inc. Portfolio — AI-Native Ventures',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarvico Inc. Portfolio — Six AI-Native Ventures',
    description:
      'Vytre AWOS, SireIQ, SEOAgentPro, Fycra, Fycera — six AI-native ventures under one institutional holding company.',
    images: ['https://www.tarvico.com/opengraph-image'],
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
    { '@type': 'ListItem', position: 2, name: 'Portfolio', item: 'https://www.tarvico.com/portfolio' },
  ],
}

const portfolioPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  '@id': 'https://www.tarvico.com/portfolio#webpage',
  url: 'https://www.tarvico.com/portfolio',
  name: 'Tarvico Portfolio — AI-Native Ventures',
  description: 'Portfolio of AI-native technology companies built and incubated by Tarvico Inc.',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/#organization' },
  inLanguage: 'en-US',
  hasPart: [
    {
      '@type': 'SoftwareApplication',
      name: 'Vytre AWOS',
      description: 'AI Workforce Operating System for enterprise — autonomous AI workforce deployment and coordination.',
      url: 'https://www.vytre.io',
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
