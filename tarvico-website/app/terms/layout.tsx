import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Tarvico Inc. Terms of Service — the terms and conditions governing use of our website and services.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.tarvico.com/terms',
  },
}

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
