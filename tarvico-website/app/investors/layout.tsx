import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Investor Relations',
  description:
    'Tarvico Inc. investor relations — market opportunity, investment thesis, portfolio performance, and governance structure. A private technology holding company engineered for long-term compounding value.',
  keywords: [
    'Tarvico investor relations',
    'AI holding company investment',
    'technology portfolio investment',
    'private technology company investors',
    'AI venture capital',
    'Tarvico investment thesis',
    'long-term technology investment',
  ],
  openGraph: {
    title: 'Investor Relations — Tarvico Inc.',
    description:
      'Market opportunity, investment thesis, and governance structure for Tarvico Inc. — a private technology holding company building AI-native ventures for long-term institutional value.',
    url: 'https://www.tarvico.com/investors',
  },
  twitter: {
    title: 'Tarvico Inc. — Investor Relations',
    description:
      'Investment thesis, market opportunity, and governance for a private AI-native technology holding company.',
  },
  alternates: {
    canonical: 'https://www.tarvico.com/investors',
  },
}

export default function InvestorsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
