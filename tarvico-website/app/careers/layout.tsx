import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Join Tarvico Inc. — we hire exceptional people who want to build AI-native companies that matter. Explore open roles across engineering, product, growth, and operations.',
  keywords: [
    'Tarvico careers',
    'Tarvico jobs',
    'AI company jobs',
    'technology holding company careers',
    'software engineering jobs',
    'AI startup hiring',
    'join Tarvico',
  ],
  openGraph: {
    title: 'Careers — Tarvico Inc.',
    description:
      'We hire exceptional people who want to build AI-native companies that matter. Explore open roles at Tarvico Inc. — a private technology holding company with a long-term vision.',
    url: 'https://www.tarvico.com/careers',
  },
  twitter: {
    title: 'Careers at Tarvico Inc.',
    description:
      'Build AI-native companies that matter. Explore open roles at Tarvico.',
  },
  alternates: {
    canonical: 'https://www.tarvico.com/careers',
  },
}

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
