import Image from 'next/image'

const studies = {
  keystone: { alt: '', caption: '' },
  sireiq: { alt: '', caption: '' },
  vytre: { alt: '', caption: '' },
  maeyen: { alt: '', caption: '' },
  strategy: { alt: 'A hypothetical infrastructure campus with concrete fins, solar panels and a service lane', caption: 'Future AI infrastructure · Concept rendering' },
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
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  )
}
