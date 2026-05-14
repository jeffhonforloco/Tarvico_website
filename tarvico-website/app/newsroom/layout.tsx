import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsroom — Tarvico Inc. | Latest News & Announcements',
  description:
    'Latest news, announcements, and press coverage from Tarvico Inc. — portfolio milestones, product launches, company updates, and press releases from a private AI technology holding company. Press contact: press@tarvico.com.',
  keywords: [
    'Tarvico news',
    'Tarvico newsroom',
    'Tarvico press releases',
    'AI company news 2026',
    'Vytre AWOS announcement',
    'technology holding company updates',
    'Tarvico announcements',
    'AI startup news',
    'press@tarvico.com',
  ],
  openGraph: {
    title: 'Newsroom — Tarvico Inc. | Latest News & Announcements',
    description:
      'Latest news, announcements, and press coverage from Tarvico Inc. — portfolio milestones, product launches, and company updates. Press contact: press@tarvico.com.',
    url: 'https://www.tarvico.com/newsroom',
    images: [
      {
        url: 'https://www.tarvico.com/opengraph-image',
        width: 1200,
        height: 630,
        alt: 'Tarvico Inc. Newsroom — Latest News & Announcements',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarvico Inc. Newsroom',
    description:
      'Latest news, portfolio milestones, and company announcements from Tarvico Inc. Press: press@tarvico.com.',
    images: ['https://www.tarvico.com/opengraph-image'],
  },
  alternates: {
    canonical: 'https://www.tarvico.com/newsroom',
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'Newsroom', item: 'https://www.tarvico.com/newsroom' },
  ],
}

const newsroomPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://www.tarvico.com/newsroom#webpage',
  url: 'https://www.tarvico.com/newsroom',
  name: 'Tarvico Inc. Newsroom',
  description: 'News, announcements, and press releases from Tarvico Inc. — a private AI technology holding company.',
  publisher: { '@id': 'https://www.tarvico.com/#organization' },
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  inLanguage: 'en-US',
}

export default function NewsroomLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(newsroomPageSchema) }} />
      {children}
    </>
  )
}
