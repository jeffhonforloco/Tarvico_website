import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Tarvico Inc. — Investor, Partnership & Press Inquiries',
  description:
    'Contact Tarvico Inc.: investor inquiries at investors@tarvico.com, press at press@tarvico.com, partnerships at partners@tarvico.com, and general inquiries at hello@tarvico.com. A private AI technology holding company.',
  keywords: [
    'Tarvico contact',
    'contact Tarvico',
    'Tarvico investor contact',
    'investors@tarvico.com',
    'Tarvico partnership',
    'Tarvico press contact',
    'AI company contact',
    'hello@tarvico.com',
  ],
  openGraph: {
    title: 'Contact Tarvico Inc. — Investor, Partnership & Press Inquiries',
    description:
      'Reach Tarvico Inc. for investor inquiries (investors@tarvico.com), partnership discussions, press requests (press@tarvico.com), and general correspondence (hello@tarvico.com).',
    url: 'https://www.tarvico.com/contact',
    images: [
      {
        url: 'https://www.tarvico.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Contact Tarvico Inc.',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Tarvico Inc.',
    description:
      'Investor inquiries, partnership discussions, and press contacts for Tarvico Inc. — investors@tarvico.com | press@tarvico.com.',
    images: ['https://www.tarvico.com/opengraph-image'],
  },
  alternates: {
    canonical: 'https://www.tarvico.com/contact',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'Contact', item: 'https://www.tarvico.com/contact' },
  ],
}

const contactPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  '@id': 'https://www.tarvico.com/contact#webpage',
  url: 'https://www.tarvico.com/contact',
  name: 'Contact Tarvico Inc.',
  description: 'Contact channels for Tarvico Inc. — investor relations, partnerships, press, and general inquiries.',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/#organization' },
  inLanguage: 'en-US',
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchema) }} />
      {children}
    </>
  )
}
