import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Tarvico Inc. Privacy Policy — how we collect, use, and protect personal information across our website and services.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.tarvico.com/privacy',
  },
}

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
