import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Tarvico Inc. — Founding Story, Leadership & Corporate Structure',
  description:
    'Tarvico Inc. is a private AI technology holding company founded by Jeff Hon in 2026. Learn about the founding story, leadership, corporate structure, and the philosophy behind building enduring AI-native technology ventures.',
  keywords: [
    'Tarvico about',
    'Tarvico Inc. history',
    'Jeff Hon founder',
    'Jeff Honforloco founder',
    'technology holding company leadership',
    'AI company founding story',
    'Tarvico corporate structure',
    'Tarvico Inc. 2026',
    'private AI holding company',
  ],
  openGraph: {
    title: 'About Tarvico Inc. — Founding Story, Leadership & Corporate Structure',
    description:
      'The founding story, corporate structure, and operating philosophy behind Tarvico Inc. — a private AI technology holding company building enduring AI-native ventures for long-term institutional value.',
    url: 'https://www.tarvico.com/about',
    images: [
      {
        url: 'https://www.tarvico.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'About Tarvico Inc. — Private AI Technology Holding Company',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Tarvico Inc. — Founding Story & Leadership',
    description:
      'The founding story, corporate structure, and operating philosophy behind Tarvico Inc. — a private AI technology holding company.',
    images: ['https://www.tarvico.com/og-image.png'],
  },
  alternates: {
    canonical: 'https://www.tarvico.com/about',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'About', item: 'https://www.tarvico.com/about' },
  ],
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  '@id': 'https://www.tarvico.com/about#webpage',
  url: 'https://www.tarvico.com/about',
  name: 'About Tarvico Inc.',
  description: 'The founding story, corporate structure, leadership, and operating philosophy of Tarvico Inc. — a private AI technology holding company.',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/#organization' },
  inLanguage: 'en-US',
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }} />
      {children}
    </>
  )
}
