import type { Metadata, Viewport } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://www.tarvico.com'),
  title: {
    default: 'Tarvico Inc. — A Private Technology Holding Company',
    template: '%s — Tarvico Inc.',
  },
  description:
    'Tarvico Inc. is a private technology holding company that builds, acquires, and operates a portfolio of AI-native software and technology ventures — engineered for long-term value creation and global scale.',
  keywords: [
    'Tarvico',
    'Tarvico Inc.',
    'private technology holding company',
    'AI holding company',
    'technology holding company',
    'Vytre AWOS',
    'AI Workforce Operating System',
    'SireIQ',
    'SEOAgentPro',
    'Fycra',
    'Fycera',
    'AI-native companies',
    'software ventures',
    'technology portfolio',
    'Jeff Honforloco',
  ],
  authors: [{ name: 'Jeff Honforloco', url: 'https://www.tarvico.com' }],
  creator: 'Tarvico Inc.',
  publisher: 'Tarvico Inc.',
  icons: {
    icon: '/logo-icon.png',
    shortcut: '/logo-icon.png',
    apple: '/logo-icon.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.tarvico.com',
    siteName: 'Tarvico Inc.',
    title: 'Tarvico Inc. — A Private Technology Holding Company',
    description:
      'Tarvico Inc. is a private technology holding company building enduring AI-native software ventures for the next global economy.',
    images: [
      {
        url: '/logo-icon.png',
        width: 512,
        height: 512,
        alt: 'Tarvico Inc. — A Private Technology Holding Company',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@tarvico',
    creator: '@tarvico',
    title: 'Tarvico Inc. — A Private Technology Holding Company',
    description:
      'Tarvico Inc. is a private technology holding company building enduring AI-native software ventures for the next global economy.',
    images: ['/logo-icon.png'],
  },
  alternates: {
    canonical: 'https://www.tarvico.com',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Tarvico Inc.',
  alternateName: 'Tarvico',
  description:
    'A private technology holding company that builds, acquires, and operates a portfolio of AI-native software and technology ventures.',
  url: 'https://www.tarvico.com',
  logo: {
    '@type': 'ImageObject',
    url: 'https://www.tarvico.com/logo-icon.png',
    width: 512,
    height: 512,
  },
  image: 'https://www.tarvico.com/logo-icon.png',
  foundingDate: '2026',
  founder: {
    '@type': 'Person',
    name: 'Jeff Yèmalín Bienvenu Honforloco',
    jobTitle: 'Founder & Chief Executive Officer',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'US',
    addressRegion: 'Delaware',
  },
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'investor relations',
      email: 'investors@tarvico.com',
    },
    {
      '@type': 'ContactPoint',
      contactType: 'press',
      email: 'press@tarvico.com',
    },
  ],
  sameAs: ['https://www.tarvico.com'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
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
