import Image from 'next/image'
import ResponsiveImagePreload from '@/components/ResponsiveImagePreload'

const screenshots = {
  sireiq: {
    file: 'sireiq-interface', width: 3300, height: 2010, widths: [480, 768, 1200, 1800, 2400, 3300],
    alt: 'SireIQ’s public prompt interface with shortcuts for research, creation, understanding and planning',
  },
  sireiqPrompt: {
    file: 'sireiq-composer', width: 2508, height: 771, widths: [480, 900, 1080, 1500, 2508],
    alt: 'The SireIQ prompt composer and its Research, Build, Understand and Plan shortcuts',
  },
  vytre: {
    file: 'vytre-command-map', width: 2016, height: 2133, widths: [480, 640, 900, 1080, 1500, 2016],
    alt: 'Vytre’s public command map with its founder approval checkpoint, managers and worker-agent pools',
  },
} as const

export type ProductScreenshotName = keyof typeof screenshots

export default function ProductScreenshot({ name, sizes, decorative = false, eager = false }: {
  name: ProductScreenshotName
  sizes: string
  decorative?: boolean
  eager?: boolean
}) {
  const { file, width, height, widths, alt } = screenshots[name]
  const srcSet = widths.map(size => `/images/${file}-${size}.webp ${size}w`).join(', ')
  const src = `/images/${file}-${widths[1]}.webp`
  return (
    <>
      {eager && <ResponsiveImagePreload src={src} srcSet={srcSet} sizes={sizes} />}
      <picture>
        <source type="image/webp" srcSet={srcSet} sizes={sizes} />
        <Image src={src} width={width} height={height}
          alt={decorative ? '' : alt} loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : 'low'} />
      </picture>
    </>
  )
}
