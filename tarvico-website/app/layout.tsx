import type { Metadata } from 'next'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Tarvico Inc. — Intelligence Infrastructure for the Next Economy',
  description:
    'Tarvico Inc. is an AI-native technology holding company that builds, acquires, and scales intelligent software businesses across automation, infrastructure, and digital systems.',
  keywords: [
    'Tarvico',
    'AI holding company',
    'AI workforce operating system',
    'Vytre AWOS',
    'AI infrastructure',
    'enterprise AI',
    'intelligent systems',
    'digital infrastructure',
  ],
  openGraph: {
    title: 'Tarvico Inc. — Intelligence Infrastructure for the Next Economy',
    description: 'Building enduring AI-native companies and intelligent infrastructure for the future global economy.',
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
