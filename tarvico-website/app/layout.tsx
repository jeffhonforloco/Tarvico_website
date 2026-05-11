import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tarvico Inc. — Technology Holding Company',
  description:
    'Tarvico Inc. is a private technology holding company that builds, acquires, and operates a portfolio of software and technology ventures designed for long-term value creation.',
  keywords: [
    'Tarvico',
    'technology holding company',
    'private holding company',
    'Vytre AWOS',
    'SireIQ',
    'SEOAgentPro',
    'software ventures',
    'digital infrastructure',
    'technology portfolio',
  ],
  openGraph: {
    title: 'Tarvico Inc. — Technology Holding Company',
    description: 'Building enduring technology companies and intelligent infrastructure for the next global economy.',
    siteName: 'Tarvico Inc.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main style={{ paddingTop: 68, minHeight: '100vh' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
