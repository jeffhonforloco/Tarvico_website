import Image from 'next/image'

export default function BrandWordmark() {
  return (
    <span className="brand-wordmark" role="img" aria-label="Tarvico Inc.">
      <Image className="brand-wordmark-light" src="/images/tarvico-black.webp" width={1087} height={129} alt="" loading="eager" />
      <Image className="brand-wordmark-dark" src="/images/tarvico-white.webp" width={1255} height={151} alt="" loading="eager" />
    </span>
  )
}
