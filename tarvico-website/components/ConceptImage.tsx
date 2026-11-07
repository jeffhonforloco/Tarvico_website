import Image from 'next/image'

const studies = {
  keystone: { alt: 'A solid brushed-metal keystone lit against a black studio backdrop', caption: 'Keystone · material study' },
  sireiq: { alt: 'Repeating folded steel surfaces arranged in a precise rhythm', caption: 'SireIQ · information flow concept' },
  vytre: { alt: 'An aluminum plane aligns and connects parallel graphite modules', caption: 'Vytre AWOS · orchestration concept' },
  maeyen: { alt: 'Two ceramic forms fitted together along a precise dark seam', caption: 'Maeyen · transaction trust concept' },
  strategy: { alt: 'A hypothetical infrastructure campus with concrete fins, solar panels and a service lane', caption: 'Future infrastructure concept · illustrative' },
} as const

export type Study = keyof typeof studies

export default function ConceptImage({ study, priority = false }: { study: Study; priority?: boolean }) {
  const { alt, caption } = studies[study]
  return (
    <figure className={`concept-image concept-image--${study}`}>
      <picture>
        <source media="(max-width: 640px)" srcSet={`/keystone/${study}-640.webp`} />
        <Image
          src={`/keystone/${study}.webp`}
          alt={alt}
          width={1200}
          height={study === 'keystone' ? 1200 : 800}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : undefined}
          unoptimized
        />
      </picture>
      <figcaption>{caption}</figcaption>
    </figure>
  )
}
