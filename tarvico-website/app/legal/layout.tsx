import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Legal',
  description:
    'Tarvico Inc. legal information — corporate disclosures, intellectual property notices, and regulatory information.',
  robots: { index: true, follow: true },
  alternates: {
    canonical: 'https://www.tarvico.com/legal',
  },
}

export default function LegalLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
