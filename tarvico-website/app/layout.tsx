import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#070707',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tarvico.com'),
  title: {
    default: 'Tarvico Inc. — A Private Technology Holding Company',
    template: '%s | Tarvico Inc.',
  },
  description:
    'Tarvico Inc. is a private technology holding company that builds, acquires, and operates a portfolio of AI-native software ventures — engineered for long-term value creation, global scale, and institutional permanence. Founded by Jeff Hon.',
  keywords: [
    'Tarvico',
    'Tarvico Inc.',
    'private technology holding company',
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
    'Jeff Hon',
    'Jeff Honforloco',
    'Jeff Yèmalín Bienvenu Honforloco',
    'venture incubation',
    'AI infrastructure',
    'enterprise AI software',
    'AI company portfolio',
    'Delaware technology company',
  ],
  authors: [{ name: 'Jeff Yèmalín Bienvenu Honforloco', url: 'https://www.tarvico.com' }],
  creator: 'Tarvico Inc.',
  publisher: 'Tarvico Inc.',
  category: 'Technology',
  classification: 'Technology Holding Company',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/logo-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { rel: 'mask-icon', url: '/logo-icon.png', color: '#C9A447' },
    ],
  },
  manifest: '/manifest.webmanifest',
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
    title: 'Tarvico Inc. — A Private Technology Holding Company',
    description:
      'Tarvico Inc. builds, acquires, and operates a portfolio of AI-native software and technology ventures — engineered for long-term value creation and global scale. Based in Delaware, USA.',
    images: [
      {
        url: '/og-image.png',
        secureUrl: 'https://www.tarvico.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tarvico Inc. — A Private Technology Holding Company',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tarvicoinc',
    creator: '@tarvicoinc',
    title: 'Tarvico Inc. — A Private Technology Holding Company',
    description:
      'Building enduring AI-native technology companies for the next global economy. Tarvico is a private holding company that builds, acquires, and operates AI software ventures.',
    images: [
      {
        url: 'https://www.tarvico.com/og-image.png',
        alt: 'Tarvico Inc. — A Private Technology Holding Company',
      },
    ],
  },
  alternates: {
    canonical: 'https://www.tarvico.com',
    languages: {
      'en-US': 'https://www.tarvico.com',
    },
  },
  verification: {
    google: 'jQeeSN9bYApYMV3WoeseoMXsY4ZLszdTgaHo7mHaQ5M',
  },
  other: {
    'msapplication-TileColor': '#070707',
    'msapplication-TileImage': '/logo-icon.png',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Tarvico',
    'application-name': 'Tarvico Inc.',
    'format-detection': 'telephone=no',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.tarvico.com/#organization',
  name: 'Tarvico Inc.',
  alternateName: ['Tarvico', 'Tarvico Inc'],
  legalName: 'Tarvico Inc.',
  description:
    'A private technology holding company that builds, acquires, and operates a portfolio of AI-native software and technology ventures engineered for long-term value creation and global scale.',
  url: 'https://www.tarvico.com',
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://www.tarvico.com/#logo',
    url: 'https://www.tarvico.com/logo-icon.png',
    contentUrl: 'https://www.tarvico.com/logo-icon.png',
    width: 512,
    height: 512,
    caption: 'Tarvico Inc. — A Private Technology Holding Company',
  },
  image: [
    {
      '@type': 'ImageObject',
      url: 'https://www.tarvico.com/logo-icon.png',
      width: 512,
      height: 512,
    },
    {
      '@type': 'ImageObject',
      url: 'https://www.tarvico.com/og-image.png',
      width: 1200,
      height: 630,
    },
  ],
  foundingDate: '2026',
  founder: {
    '@type': 'Person',
    '@id': 'https://www.tarvico.com/#founder',
    name: 'Jeff Yèmalín Bienvenu Honforloco',
    alternateName: 'Jeff Hon',
    jobTitle: 'Founder & Chief Executive Officer',
    worksFor: { '@id': 'https://www.tarvico.com/#organization' },
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
    'AI-native SaaS',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Tarvico Portfolio Companies',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'SoftwareApplication',
          name: 'Vytre AWOS',
          description: 'AI Workforce Operating System — enterprise control plane for autonomous AI workforce deployment and coordination.',
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
    'https://twitter.com/tarvicoinc',
    'https://x.com/tarvicoinc',
    'https://www.facebook.com/tarvicoinc',
    'https://www.instagram.com/tarvicoinc',
    'https://www.tiktok.com/@tarvicoinc',
    'https://www.linkedin.com/company/tarvico',
    'https://www.crunchbase.com/organization/tarvico',
  ],
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.tarvico.com/#website',
  url: 'https://www.tarvico.com',
  name: 'Tarvico Inc.',
  alternateName: 'Tarvico',
  description: 'A Private Technology Holding Company — building enduring AI-native ventures for the next global economy.',
  publisher: {
    '@id': 'https://www.tarvico.com/#organization',
  },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://www.tarvico.com/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What is Tarvico Inc.?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarvico Inc. is a private technology holding company that builds, acquires, and operates a portfolio of AI-native software and technology ventures. Founded by Jeff Hon, Tarvico is engineered for long-term value creation, global scale, and institutional permanence.',
      },
    },
    {
      '@type': 'Question',
      name: 'Who founded Tarvico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarvico was founded by Jeff Yèmalín Bienvenu Honforloco (Jeff Hon), who serves as Founder and Chief Executive Officer. Tarvico was founded in 2026 and is incorporated in Delaware, USA.',
      },
    },
    {
      '@type': 'Question',
      name: 'What companies does Tarvico own?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarvico\'s portfolio includes Vytre AWOS (flagship AI Workforce Operating System for enterprise), SireIQ (AI productivity assistant), SEOAgentPro (autonomous SEO intelligence platform), Fycra (developer tools platform, stealth), and Fycera (AI creative content platform, stealth).',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Vytre AWOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vytre AWOS is Tarvico\'s flagship product — an AI Workforce Operating System that serves as the enterprise control plane for autonomous AI workforce deployment and coordination. It enables businesses to deploy, orchestrate, and scale AI-powered workers across every business function.',
      },
    },
    {
      '@type': 'Question',
      name: 'How can I invest in Tarvico?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarvico is a private company. Investor inquiries can be directed to investors@tarvico.com or through the Investor Relations page at tarvico.com/investors.',
      },
    },
    {
      '@type': 'Question',
      name: 'Where is Tarvico located?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarvico Inc. is incorporated in the state of Delaware, United States, and operates globally across its portfolio of AI-native technology ventures.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Tarvico do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarvico builds, acquires, and operates AI-native technology companies. The holding company provides capital, strategic guidance, and operational infrastructure to its portfolio companies across workforce infrastructure, developer tools, AI assistants, and creative software markets.',
      },
    },
  ],
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
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/logo-icon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="msapplication-TileImage" content="/logo-icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
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
