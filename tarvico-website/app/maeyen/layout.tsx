import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Maeyen — Commerce Trust Infrastructure for Africa',
  description:
    'Maeyen is a Tarvico company building commerce trust infrastructure for Africa, starting from Nigeria. By verifying participants and protecting transactions, Maeyen lets buyers and sellers transact online with confidence.',
  keywords: [
    'Maeyen',
    'commerce trust network',
    'commerce trust infrastructure',
    'African online commerce',
    'Nigeria e-commerce trust',
    'buyer seller trust',
    'Tarvico Maeyen',
  ],
  openGraph: {
    title: 'Maeyen — Commerce Trust Infrastructure for Africa',
    description:
      'A commerce trust network for Africa, starting from Nigeria — verifying participants and protecting transactions so buyers and sellers can transact with confidence.',
    url: 'https://www.tarvico.com/maeyen',
    images: [{ url: 'https://www.tarvico.com/og-image.png', width: 1200, height: 630, alt: 'Maeyen — Commerce Trust Infrastructure for Africa' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Maeyen — Commerce Trust Infrastructure for Africa',
    description: 'A commerce trust network for Africa, starting from Nigeria.',
    images: ['https://www.tarvico.com/og-image.png'],
  },
  alternates: { canonical: 'https://www.tarvico.com/maeyen' },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tarvico.com' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://www.tarvico.com/products' },
    { '@type': 'ListItem', position: 3, name: 'Maeyen', item: 'https://www.tarvico.com/maeyen' },
  ],
}

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  '@id': 'https://www.tarvico.com/maeyen#software',
  name: 'Maeyen',
  applicationCategory: 'BusinessApplication',
  operatingSystem: 'Web',
  url: 'https://www.maeyen.com',
  description:
    'A commerce trust network for Africa, starting from Nigeria. Maeyen verifies participants and protects transactions so buyers and sellers can transact online with confidence.',
  publisher: { '@id': 'https://www.tarvico.com/#organization' },
  brand: { '@id': 'https://www.tarvico.com/#organization' },
  areaServed: 'Africa',
}

const webPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://www.tarvico.com/maeyen#webpage',
  url: 'https://www.tarvico.com/maeyen',
  name: 'Maeyen — Commerce Trust Infrastructure for Africa',
  isPartOf: { '@id': 'https://www.tarvico.com/#website' },
  about: { '@id': 'https://www.tarvico.com/maeyen#software' },
  inLanguage: 'en-US',
}

export default function MaeyenLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }} />
      {children}
    </>
  )
}
