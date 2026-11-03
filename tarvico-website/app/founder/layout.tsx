import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Jeff Honforloco — Founder & CEO of Tarvico Inc.',
  description:
    'Jeff Yèmalín Bienvenu Honforloco (Jeff Hon) is the founder and CEO of Tarvico Inc., a privately held U.S. technology company building enduring AI-native companies. A self-taught builder and former professional photographer, he leads vision, strategy, and product across the Tarvico portfolio.',
  keywords: [
    'Jeff Honforloco',
    'Jeff Hon',
    'Jeff Yèmalín Bienvenu Honforloco',
    'Tarvico founder',
    'Tarvico CEO',
    'founder of Tarvico',
    'who founded Tarvico',
    'Tarvico Inc. founder',
    'Vytre founder',
  ],
  openGraph: {
    title: 'Jeff Honforloco — Founder & CEO of Tarvico Inc.',
    description:
      'Founder and CEO of Tarvico Inc. — a self-taught builder and former professional photographer building enduring, AI-native technology companies for the long term.',
    url: 'https://www.tarvico.com/founder',
    images: [
      {
        url: 'https://www.tarvico.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Jeff Honforloco — Founder & CEO of Tarvico Inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jeff Honforloco — Founder & CEO of Tarvico Inc.',
    description:
      'Founder and CEO of Tarvico Inc., building enduring AI-native technology companies for the long term.',
    images: ['https://www.tarvico.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.tarvico.com/founder',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'Founder', item: 'https://www.tarvico.com/founder' },
  ],
}

const founderSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  '@id': 'https://www.tarvico.com/#founder',
  name: 'Jeff Yèmalín Bienvenu Honforloco',
  alternateName: ['Jeff Hon', 'Jeff Honforloco'],
  jobTitle: 'Founder & Chief Executive Officer',
  description:
    'Founder and CEO of Tarvico Inc. A self-taught builder and former professional photographer, he leads vision, strategy, and product direction across Tarvico’s portfolio of AI-native products.',
  worksFor: { '@id': 'https://www.tarvico.com/#organization' },
  url: 'https://www.tarvico.com/founder',
  knowsAbout: [
    'Artificial Intelligence',
    'Enterprise Software',
    'AI Workforce Infrastructure',
    'Technology Portfolio Strategy',
    'Product Strategy',
    'Long-Term Company Building',
  ],
  sameAs: ['https://x.com/tarvicoinc'],
}

const profilePageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfilePage',
  '@id': 'https://www.tarvico.com/founder#webpage',
  url: 'https://www.tarvico.com/founder',
  name: 'Jeff Honforloco — Founder & CEO of Tarvico Inc.',
  description: 'Profile of Jeff Honforloco, founder and CEO of Tarvico Inc.',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/#founder' },
  mainEntity: { '@id': 'https://www.tarvico.com/#founder' },
  inLanguage: 'en-US',
}

export default function FounderLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(founderSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profilePageSchema) }} />
      {children}
    </>
  )
}
