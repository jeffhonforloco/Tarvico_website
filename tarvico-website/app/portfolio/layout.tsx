import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    "Explore Tarvico Inc.'s portfolio of six AI-native ventures — from Vytre AWOS, the enterprise AI Workforce Operating System, to SireIQ, SEOAgentPro, Fycra, and Fycera in active incubation.",
  keywords: [
    'Tarvico portfolio',
    'Vytre AWOS',
    'AI Workforce Operating System',
    'SireIQ',
    'SEOAgentPro',
    'Fycra',
    'Fycera',
    'AI venture portfolio',
    'technology incubation',
  ],
  openGraph: {
    title: 'Portfolio — Tarvico Inc.',
    description:
      'Six AI-native ventures, one institutional holding company. Explore the Tarvico portfolio — from flagship enterprise infrastructure to stealth developer tools and creative platforms.',
    url: 'https://www.tarvico.com/portfolio',
  },
  twitter: {
    title: 'Tarvico Inc. Portfolio',
    description:
      'Six AI-native ventures. From Vytre AWOS to SireIQ, SEOAgentPro, Fycra, and Fycera.',
  },
  alternates: {
    canonical: 'https://www.tarvico.com/portfolio',
  },
}

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
