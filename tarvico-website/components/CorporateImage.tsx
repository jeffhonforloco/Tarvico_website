import Image from 'next/image'

const images = {
  sireiq: { file: 'sireiq-public-interface', width: 1100, height: 670, alt: 'SireIQ’s public prompt interface with shortcuts for research, creation, understanding and planning' },
  sireiqPrompt: { file: 'sireiq-prompt-detail', width: 820, height: 255, alt: 'The SireIQ prompt composer and its Research, Build, Understand and Plan shortcuts' },
  vytre: { file: 'vytre-public-product-page', width: 674, height: 548, alt: 'Vytre’s public command-map demo shows a proposal moving through human approval, executive planning and assignment to AI workers' },
  lagos: { file: 'lagos-campus', width: 1280, height: 720, alt: 'A proposed Lagos AI campus with modular computing halls, solar arrays, wind turbines and a reservoir' },
  v7: { file: 'vytreon-v7-reference', width: 990, height: 381, alt: 'Exterior concept rendering of the proposed Vytreon V7 electric SUV' },
} as const

export type CorporateImageName = keyof typeof images

export default function CorporateImage({ name, caption, eager = false }: {
  name: CorporateImageName
  caption?: string
  eager?: boolean
}) {
  const { file, width, height, alt } = images[name]
  return (
    <figure className={`corporate-image corporate-image--${name}`}>
      <picture>
        {name === 'lagos' && <source media="(max-width: 640px)" srcSet="/images/lagos-campus-640.webp" />}
        <Image src={`/images/${file}.webp`} alt={alt} width={width} height={height}
          loading={eager ? 'eager' : 'lazy'} fetchPriority={eager ? 'high' : undefined} />
      </picture>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
