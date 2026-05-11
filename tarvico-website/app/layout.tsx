import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#07070A',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tarvico.com'),
  title: {
    default: 'Tarvico Inc. — Private Technology Holding Company',
    template: '%s — Tarvico Inc.',
  },
  description:
    'Tarvico Inc. is a private technology holding company that builds, acquires, and operates a portfolio of AI-native software and technology ventures — engineered for long-term value creation, global scale, and institutional permanence.',
  keywords: [
    'Tarvico',
    'Tarvico Inc.',
    'private technology holding company',
    'AI holding company',
    'technology holding company',
    'AI-native companies',
    'Vytre AWOS',
    'AI Workforce Operating System',
    'SireIQ',
    'SEOAgentPro',
    'Fycra',
    'Fycera',
    'software ventures',
    'technology portfolio',
    'Jeff Honforloco',
    'Jeff Yèmalín Bienvenu Honforloco',
    'venture incubation',
    'AI infrastructure',
  ],
  authors: [{ name: 'Jeff Yèmalín Bienvenu Honforloco', url: 'https://www.tarvico.com' }],
  creator: 'Tarvico Inc.',
  publisher: 'Tarvico Inc.',
  category: 'Technology',
  classification: 'Technology Holding Company',
  icons: {
    icon: [
      { url: '/logo-icon.png', type: 'image/png' },
    ],
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tarvico.com',
    siteName: 'Tarvico Inc.',
    title: 'Tarvico Inc. — Private Technology Holding Company',
    description:
      'Tarvico Inc. builds, acquires, and operates a portfolio of AI-native software and technology ventures — engineered for long-term value creation and global scale.',
    images: [
      {
        url: '/logo-icon.png',
        width: 512,
        height: 512,
        alt: 'Tarvico Inc. — Private Technology Holding Company',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tarvico',
    creator: '@tarvico',
    title: 'Tarvico Inc. — Private Technology Holding Company',
    description:
      'Building enduring AI-native technology companies for the next global economy.',
    images: ['/logo-icon.png'],
  },
  alternates: {
    canonical: 'https://www.tarvico.com',
    languages: {
      'en-US': 'https://www.tarvico.com',
    },
  },
  other: {
    'msapplication-TileColor': '#07070A',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.tarvico.com/#organization',
  name: 'Tarvico Inc.',
  alternateName: 'Tarvico',
  description:
    'A private technology holding company that builds, acquires, and operates a portfolio of AI-native software and technology ventures engineered for long-term value creation and global scale.',
  url: 'https://www.tarvico.com',
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://www.tarvico.com/#logo',
    url: 'https://www.tarvico.com/logo-icon.png',
    width: 512,
    height: 512,
    caption: 'Tarvico Inc.',
  },
  image: {
    '@type': 'ImageObject',
    url: 'https://www.tarvico.com/logo-icon.png',
    width: 512,
    height: 512,
  },
  foundingDate: '2026',
  founder: {
    '@type': 'Person',
    '@id': 'https://www.tarvico.com/#founder',
    name: 'Jeff Yèmalín Bienvenu Honforloco',
    jobTitle: 'Founder & Chief Executive Officer',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
    addressRegion: 'Delaware',
  },
  areaServed: 'Worldwide',
  knowsAbout: [
    'Artificial Intelligence',
    'Enterprise Software',
    'AI Workforce Infrastructure',
    'Technology Holding Companies',
    'Venture Incubation',
    'Developer Tools',
    'AI Content Creation',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tarvico Portfolio',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Vytre AWOS',
          description: 'AI Workforce Operating System — the enterprise control plane for autonomous AI workforce deployment and coordination.',
          url: 'https://www.vytre.io',
          applicationCategory: 'BusinessApplication',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'SireIQ',
          description: 'Intelligent assistant for chat, content creation, and workflow automation.',
          url: 'https://www.sireiq.com',
          applicationCategory: 'ProductivityApplication',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'SEOAgentPro',
          description: 'Autonomous SEO intelligence platform for content strategy and optimization.',
          url: 'https://www.seoagentpro.com',
          applicationCategory: 'BusinessApplication',
        },
      },
    ],
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'investor relations',
      email: 'investors@tarvico.com',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'press',
      email: 'press@tarvico.com',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: 'hello@tarvico.com',
      availableLanguage: 'English',
    },
  ],
  sameAs: [
    'https://www.tarvico.com',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.tarvico.com/#website',
  url: 'https://www.tarvico.com',
  name: 'Tarvico Inc.',
  description: 'Private Technology Holding Company',
  publisher: {
    '@id': 'https://www.tarvico.com/#organization',
  },
  inLanguage: 'en-US',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="icon" type="image/png" href="/logo-icon.png" />
        <link rel="shortcut icon" type="image/png" href="/logo-icon.png" />
        <link rel="apple-touch-icon" href="/logo-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body>
        <Nav />
        <main style={{ paddingTop: 72, minHeight: '100vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
