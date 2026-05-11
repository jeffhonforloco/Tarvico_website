import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Learn about Tarvico Inc. — the founding story, corporate structure, leadership, and the philosophy that drives a private technology holding company built for long-term institutional value.',
  keywords: [
    'Tarvico about',
    'Tarvico Inc. history',
    'Jeff Honforloco founder',
    'technology holding company leadership',
    'AI company founding story',
    'Tarvico corporate structure',
  ],
  openGraph: {
    title: 'About Tarvico Inc. — Private Technology Holding Company',
    description:
      'The founding story, corporate structure, and operating philosophy behind Tarvico — a private technology holding company building AI-native ventures for long-term value.',
    url: 'https://www.tarvico.com/about',
  },
  twitter: {
    title: 'About Tarvico Inc.',
    description:
      'The founding story, corporate structure, and operating philosophy behind Tarvico Inc.',
  },
  alternates: {
    canonical: 'https://www.tarvico.com/about',
  },
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
