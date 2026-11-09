import Image from 'next/image'

function WordmarkImage({ variant, footer }: { variant: 'black' | 'white'; footer: boolean }) {
  const dark = variant === 'white'
  const width = dark ? 1255 : 1087
  const height = dark ? 151 : 129
  const file = `/images/tarvico-${variant}`
  const srcSet = [192, 384, 576].map(size => `${file}-${size}.webp ${size}w`).concat(`${file}.webp ${width}w`).join(', ')

  return (
    <picture className={dark ? 'brand-wordmark-dark' : 'brand-wordmark-light'}>
      <source type="image/webp" srcSet={srcSet} sizes={footer ? '150px' : 'clamp(128px, 11.5vw, 190px)'} />
      <Image src={`${file}-384.webp`} width={width} height={height} alt=""
        loading={footer ? 'lazy' : 'eager'} fetchPriority="low" />
    </picture>
  )
}

export default function BrandWordmark({ footer = false }: { footer?: boolean }) {
  return (
    <span className="brand-wordmark" role="img" aria-label="Tarvico Inc.">
      {!footer && <WordmarkImage variant="black" footer={false} />}
      <WordmarkImage variant="white" footer={footer} />
    </span>
  )
}
