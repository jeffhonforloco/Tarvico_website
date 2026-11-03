import type { Metadata, Viewport } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

// Fonts are vendored into app/fonts/ and self-hosted with next/font/local.
// There is NO build-time or runtime request to Google Fonts — this is what
// keeps the Cloudflare Pages build deterministic and offline-safe. Variable
// woff2 (latin subset) carry the full weight axis in a single file each, so
// the whole AUREL type system is ~194 KB across six files.
//
// Project AUREL "FOUNDRY" type roles:
//   Inter       → body workhorse            (--font-inter)
//   Archivo     → monumental display        (--font-archivo)
//   IBM Plex Mono → technical annotations    (--font-plex-mono)
//   Fraunces    → editorial serif (Dir. C)  (--font-fraunces)
const inter = localFont({
  src: './fonts/inter-latin-wght-normal.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-inter',
})

const archivo = localFont({
  src: './fonts/archivo-latin-wght-normal.woff2',
  weight: '100 900',
  style: 'normal',
  display: 'swap',
  variable: '--font-archivo',
})

const plexMono = localFont({
  src: [
    { path: './fonts/ibm-plex-mono-latin-400-normal.woff2', weight: '400', style: 'normal' },
    { path: './fonts/ibm-plex-mono-latin-500-normal.woff2', weight: '500', style: 'normal' },
  ],
  display: 'swap',
  variable: '--font-plex-mono',
})

const fraunces = localFont({
  src: [
    { path: './fonts/fraunces-latin-wght-normal.woff2', weight: '100 900', style: 'normal' },
    { path: './fonts/fraunces-latin-wght-italic.woff2', weight: '100 900', style: 'italic' },
  ],
  display: 'swap',
  variable: '--font-fraunces',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0A0A0C',
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tarvico.com'),
  title: {
    default: 'Tarvico Inc. — Building Technology for a Connected World',
    template: '%s | Tarvico Inc.',
  },
  description:
    'Tarvico Inc. is a privately held U.S. technology company, incorporated in Delaware, building artificial intelligence, digital platforms, and emerging technology businesses — with a long-term vision spanning global technology, intelligent mobility, computing infrastructure, and sustainable energy. Founded by Jeff Honforloco.',
  keywords: [
    'Tarvico',
    'Tarvico Inc.',
    'privately held U.S. technology company',
    'U.S. technology company',
    'AI-native companies',
    'Vytre AWOS',
    'AI Workforce Operating System',
    'SireIQ',
    'SEOAgentPro',
    'Maeyen',
    'Racym',
    'commerce trust network',
    'creative talent network',
    'software products',
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
  classification: 'Technology Company',
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
    title: 'Tarvico Inc. — Building Technology for a Connected World',
    description:
      'Tarvico Inc. is a privately held U.S. technology company building artificial intelligence, digital platforms, and emerging technology businesses for global markets. Incorporated in Delaware; operating from the United States.',
    images: [
      {
        url: '/og-image.png',
        secureUrl: 'https://www.tarvico.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Tarvico Inc. — Building Technology for a Connected World',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@tarvicoinc',
    creator: '@tarvicoinc',
    title: 'Tarvico Inc. — Building Technology for a Connected World',
    description:
      'A privately held U.S. technology company building AI, digital platforms, and emerging technology businesses — with a long-term vision spanning global technology, mobility, infrastructure, and energy.',
    images: [
      {
        url: 'https://www.tarvico.com/og-image.png',
        alt: 'Tarvico Inc. — Building Technology for a Connected World',
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
    'msapplication-TileColor': '#0A0A0C',
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
    'A privately held U.S. technology company, incorporated in Delaware, that builds and operates artificial intelligence, digital platforms, and emerging technology businesses — with a long-term vision spanning global technology, intelligent mobility, computing infrastructure, and sustainable energy.',
  url: 'https://www.tarvico.com',
  logo: {
    '@type': 'ImageObject',
    '@id': 'https://www.tarvico.com/#logo',
    url: 'https://www.tarvico.com/logo-icon.png',
    contentUrl: 'https://www.tarvico.com/logo-icon.png',
    width: 512,
    height: 512,
    caption: 'Tarvico Inc. — Building Technology for a Connected World',
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
    streetAddress: '8 The Green, #5275',
    addressLocality: 'Dover',
    addressRegion: 'DE',
    postalCode: '19901',
    addressCountry: 'US',
  },
  telephone: '+1-302-439-6442',
  email: 'hello@tarvico.com',
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
          url: 'https://www.vytre.com',
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
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'WebApplication',
          name: 'Maeyen',
          description: 'A commerce trust network for Africa, starting from Nigeria — built to solve the biggest problem in African online commerce: trust between buyers and sellers.',
          url: 'https://www.maeyen.com',
          applicationCategory: 'BusinessApplication',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'WebApplication',
          name: 'Racym',
          description: 'A verified creative talent network that matches brands and agencies to pre-vetted talent based on what they have actually delivered, not their follower count.',
          url: 'https://www.racym.com',
          applicationCategory: 'BusinessApplication',
        },
      },
    ],
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      telephone: '+1-302-439-6442',
      email: 'hello@tarvico.com',
      areaServed: 'Worldwide',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'investor relations',
      telephone: '+1-302-439-6442',
      email: 'investors@tarvico.com',
      availableLanguage: 'English',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'press',
      telephone: '+1-302-439-6442',
      email: 'press@tarvico.com',
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
  description: 'A privately held U.S. technology company building artificial intelligence, digital platforms, and emerging technology businesses for global markets.',
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
        text: 'Tarvico Inc. is a privately held U.S. technology company, incorporated in Delaware, that builds and operates artificial intelligence, digital platforms, and emerging technology businesses. Founded by Jeff Honforloco, it has a long-term vision spanning global technology, intelligent mobility, computing infrastructure, and sustainable energy.',
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
      name: 'What products does Tarvico build?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarvico builds and operates a portfolio of technology products. Featured products include Vytre AWOS (an AI Workforce Operating System for enterprise, in public beta), SireIQ (a publicly available AI assistant for chat, content, and workflow), and Maeyen (commerce trust infrastructure for Africa, in development), alongside additional products such as SEOAgentPro and Racym. Tarvico Inc. is the U.S. parent company that builds and operates these products.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Vytre AWOS?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Vytre AWOS is Tarvico\'s flagship product — an AI Workforce Operating System: an enterprise control plane to deploy, coordinate, observe, and govern AI workers across operations and workflows. It is currently in public beta.',
      },
    },
    {
      '@type': 'Question',
      name: 'What is Maeyen?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Maeyen is a Tarvico company building commerce trust infrastructure for Africa, starting from Nigeria. By verifying participants and protecting transactions, Maeyen lets buyers and sellers transact online with confidence — solving the biggest problem in African online commerce: trust.',
      },
    },
    {
      '@type': 'Question',
      name: 'What industries does Tarvico serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarvico builds across AI workforce infrastructure and enterprise software, commerce and trust networks, and productivity, developer, and creative software. Its portfolio companies serve enterprises, businesses, and consumers globally.',
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
        text: 'Tarvico Inc. is incorporated in Delaware, United States, with a registered office at 8 The Green, #5275, Dover, DE 19901, and currently operates from the United States. Its future international expansion strategy includes African markets such as Nigeria. The company can be reached at +1 (302) 439-6442.',
      },
    },
    {
      '@type': 'Question',
      name: 'What does Tarvico do?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Tarvico is a privately held U.S. technology company that builds and operates artificial intelligence, digital platforms, and emerging technology products. Its long-term vision spans global technology, intelligent mobility, computing infrastructure, and sustainable energy, with international expansion — including African markets — as a future strategy.',
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
    <html lang="en" className={`${inter.variable} ${archivo.variable} ${plexMono.variable} ${fraunces.variable}`}>
      <head>
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
