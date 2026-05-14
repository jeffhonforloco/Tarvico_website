import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers at Tarvico Inc. — Join the Technology Holding Company Building the Future',
  description:
    'Join Tarvico Inc. — a private technology holding company hiring exceptional engineers, product builders, and operators. Open roles across AI product engineering, growth, and operations. Build AI-native companies that endure.',
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
      'We hire exceptional people who want to build AI-native companies that matter. Open roles at Tarvico Inc. in engineering, product, growth, and operations.',
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
      'Build AI-native companies that endure. Open roles at Tarvico — engineering, product, growth, operations.',
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

const employerSchema = {
  '@context': 'https://schema.org',
  '@type': 'EmployerAggregateRating',
  itemReviewed: { '@id': 'https://www.tarvico.com/#organization' },
  name: 'Tarvico Inc. — Careers',
  description: 'Careers page for Tarvico Inc., a private technology holding company. Join our team to build enduring AI-native technology ventures.',
}

const jobPostingListSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.tarvico.com/careers#webpage',
  url: 'https://www.tarvico.com/careers',
  name: 'Careers at Tarvico Inc.',
  description: 'Open positions at Tarvico Inc. — a private technology holding company building AI-native ventures.',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/#organization' },
  inLanguage: 'en-US',
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingListSchema) }} />
      {children}
    </>
  )
}
