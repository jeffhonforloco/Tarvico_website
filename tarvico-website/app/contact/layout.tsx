import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Tarvico Inc. — investor inquiries, partnership discussions, press requests, and general contact channels for a private AI technology holding company.',
  keywords: [
    'Tarvico contact',
    'contact Tarvico',
    'Tarvico investor contact',
    'Tarvico partnership',
    'Tarvico press contact',
    'AI company contact',
  ],
  openGraph: {
    title: 'Contact Tarvico Inc.',
    description:
      'Reach Tarvico Inc. for investor inquiries, partnership discussions, press requests, and general correspondence.',
    url: 'https://www.tarvico.com/contact',
  },
  twitter: {
    title: 'Contact Tarvico Inc.',
    description:
      'Investor inquiries, partnership discussions, and press contacts for Tarvico Inc.',
  },
  alternates: {
    canonical: 'https://www.tarvico.com/contact',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
