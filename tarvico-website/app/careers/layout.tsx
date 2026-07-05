import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at Tarvico Inc. — Join the Technology Holding Company Building the Future',
  description:
    'Careers at Tarvico Inc. — a private technology holding company building enduring AI-native companies. Learn about our culture, mission, and the roles we hire for across AI product engineering, growth, and operations. Applications welcome year-round.',
  keywords: [
    'Tarvico careers',
    'Tarvico jobs',
    'AI company jobs',
    'technology holding company careers',
    'software engineering jobs AI',
    'AI startup hiring',
    'join Tarvico',
    'AI product manager jobs',
    'machine learning engineering jobs',
  ],
  openGraph: {
    title: 'Careers at Tarvico Inc. — Build AI Companies That Endure',
    description:
      'We hire exceptional people who want to build AI-native companies that matter — across engineering, product, growth, and operations. Applications welcome year-round.',
    url: 'https://www.tarvico.com/careers',
    images: [
      {
        url: 'https://www.tarvico.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Careers at Tarvico Inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Careers at Tarvico Inc.',
    description:
      'Build AI-native companies that endure. Culture, mission, and the roles Tarvico hires for — engineering, product, growth, operations.',
    images: ['https://www.tarvico.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.tarvico.com/careers',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'Careers', item: 'https://www.tarvico.com/careers' },
  ],
}

const careersPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.tarvico.com/careers#webpage',
  url: 'https://www.tarvico.com/careers',
  name: 'Careers at Tarvico Inc.',
  description: 'Culture, mission, and the roles Tarvico Inc. hires for — a private technology holding company building AI-native ventures.',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/#organization' },
  inLanguage: 'en-US',
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(careersPageSchema) }} />
      {children}
    </>
  )
}
