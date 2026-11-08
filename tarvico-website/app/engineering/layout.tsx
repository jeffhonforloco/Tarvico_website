import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Engineering — AI, Infrastructure & Systems',
  description:
    'The Tarvico engineering blog — a long-term technical knowledge base on artificial intelligence, agent systems, infrastructure, cloud architecture, security, and scaling AI-native software.',
  keywords: [
    'Tarvico engineering',
    'Tarvico engineering blog',
    'AI engineering',
    'agent systems',
    'AI infrastructure',
    'cloud architecture',
    'backend engineering',
    'scaling AI systems',
  ],
  openGraph: {
    title: 'Engineering at Tarvico — AI, Infrastructure & Systems',
    description:
      'A long-term technical knowledge base on AI, agent systems, infrastructure, architecture, security, and scaling AI-native software.',
    url: 'https://www.tarvico.com/engineering',
    images: [{ url: 'https://www.tarvico.com/og-image.png', width: 1200, height: 630, alt: 'Tarvico Inc. logo, white chevron and gold triangle on black' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Engineering at Tarvico',
    description: 'A long-term technical knowledge base on AI, infrastructure, and systems.',
    images: ['https://www.tarvico.com/og-image.png'],
  },
  alternates: { canonical: 'https://www.tarvico.com/engineering' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'Engineering', item: 'https://www.tarvico.com/engineering' },
  ],
}

const blogSchema = {
  '@context': 'https://schema.org',
  '@type': 'Blog',
  '@id': 'https://www.tarvico.com/engineering#blog',
  url: 'https://www.tarvico.com/engineering',
  name: 'Tarvico Engineering',
  description: 'A long-term technical knowledge base on AI, agent systems, infrastructure, architecture, security, and scaling AI-native software.',
  publisher: { '@id': 'https://www.tarvico.com/#organization' },
  inLanguage: 'en-US',
  about: ['Artificial Intelligence', 'Agent Systems', 'Infrastructure', 'Cloud Architecture', 'Security', 'Backend Engineering'],
}

export default function EngineeringLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      {children}
    </>
  )
}
