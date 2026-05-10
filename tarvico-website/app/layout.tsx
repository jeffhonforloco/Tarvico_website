import type { Metadata } from 'next'

export const runtime = 'edge'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tarvico Inc. — Building AI-Native Companies',
  description:
    'Tarvico Inc. is an AI-native holding company that builds, launches, and scales software and AI ventures focused on automation, intelligence, productivity, and digital infrastructure.',
  keywords: [
    'Tarvico',
    'AI companies',
    'AI workforce',
    'holding company',
    'AI infrastructure',
    'enterprise AI',
  ],
  openGraph: {
    title: 'Tarvico Inc.',
    description: 'Building enduring AI-native companies.',
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
        <main className="pt-16 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
