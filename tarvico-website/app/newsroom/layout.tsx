import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Newsroom',
  description:
    'The latest news, announcements, and press coverage from Tarvico Inc. — portfolio milestones, product launches, and company updates from a private AI technology holding company.',
  keywords: [
    'Tarvico news',
    'Tarvico newsroom',
    'Tarvico press',
    'AI company news',
    'Vytre AWOS launch',
    'technology holding company updates',
    'Tarvico announcements',
  ],
  openGraph: {
    title: 'Newsroom — Tarvico Inc.',
    description:
      'Latest news, announcements, and press coverage from Tarvico Inc. — portfolio milestones, product launches, and company updates.',
    url: 'https://www.tarvico.com/newsroom',
  },
  twitter: {
    title: 'Tarvico Inc. Newsroom',
    description:
      'Latest news, announcements, and portfolio updates from Tarvico Inc.',
  },
  alternates: {
    canonical: 'https://www.tarvico.com/newsroom',
  },
}

export default function NewsroomLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
