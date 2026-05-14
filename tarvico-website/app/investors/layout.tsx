import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investor Relations — Tarvico Inc. | Investment Thesis & Governance',
  description:
    'Tarvico Inc. investor relations: $4.7T AI market opportunity, investment thesis, portfolio strategy, and governance structure. A private technology holding company engineered for long-term compounding value. Contact: investors@tarvico.com.',
  keywords: [
    'Tarvico investor relations',
    'AI holding company investment',
    'technology portfolio investment',
    'private technology company investors',
    'AI venture investment thesis',
    'Tarvico investment thesis',
    'long-term AI technology investment',
    'institutional AI investment',
    'invest in Tarvico',
  ],
  openGraph: {
    title: 'Investor Relations — Tarvico Inc. | Technology Holding Company',
    description:
      'Market opportunity, investment thesis, and governance for Tarvico Inc. — a private technology holding company building compounding portfolio value through AI-native ventures. Contact investors@tarvico.com.',
    url: 'https://www.tarvico.com/investors',
    images: [
      {
        url: 'https://www.tarvico.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tarvico Inc. — Investor Relations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarvico Inc. — Investor Relations',
    description:
      'Investment thesis, AI market opportunity, and governance for a private technology holding company. Contact investors@tarvico.com.',
    images: ['https://www.tarvico.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.tarvico.com/investors',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'Investor Relations', item: 'https://www.tarvico.com/investors' },
  ],
}

const investorPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.tarvico.com/investors#webpage',
  url: 'https://www.tarvico.com/investors',
  name: 'Tarvico Inc. — Investor Relations',
  description: 'Investment thesis, market opportunity, and governance structure for Tarvico Inc., a private technology holding company.',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/#organization' },
  inLanguage: 'en-US',
  speakable: {
    '@type': 'SpeakableSpecification',
    cssSelector: ['h1', 'h2', '[data-speakable]'],
  },
}

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(investorPageSchema) }} />
      {children}
    </>
  )
}
