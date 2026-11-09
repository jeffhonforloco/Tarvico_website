import Image from 'next/image'
import ProductScreenshot, { type ProductScreenshotName } from '@/components/ProductScreenshot'

const images = {
  lagos: { file: 'lagos-campus', width: 1280, height: 720, alt: 'A proposed Lagos AI campus with modular computing halls, solar arrays, wind turbines and a reservoir' },
  v7: { file: 'vytreon-v7-reference', width: 990, height: 381, alt: 'Exterior concept rendering of the proposed Vytreon V7 electric SUV' },
} as const

export type CorporateImageName = keyof typeof images | ProductScreenshotName

export default function CorporateImage({ name, caption, eager = false, wide = false }: {
  name: CorporateImageName
  caption?: string
  eager?: boolean
  wide?: boolean
}) {
  const isProduct = name === 'sireiq' || name === 'sireiqPrompt' || name === 'vytre'
  const image = isProduct ? null : images[name]
  return (
    <figure className={`corporate-image corporate-image--${name}`}>
      {image ? (
        <picture>
          {name === 'lagos' && <source media="(max-width: 640px)" srcSet="/images/lagos-campus-640.webp" />}
          <Image src={`/images/${image.file}.webp`} alt={image.alt} width={image.width} height={image.height}
            loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} />
        </picture>
      ) : isProduct && (
        <ProductScreenshot name={name} eager={eager}
          sizes={wide ? '(max-width: 1070px) 90vw, 960px' : '(max-width: 767px) 90vw, min(39vw, 740px)'} />
      )}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
