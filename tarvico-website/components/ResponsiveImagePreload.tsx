'use client'

import ReactDOM from 'react-dom'

type ImagePreloadOptions = {
  as: 'image'
  imageSrcSet: string
  imageSizes: string
  fetchPriority: 'high'
}

const preload = (ReactDOM as typeof ReactDOM & {
  preload?: (href: string, options: ImagePreloadOptions) => void
}).preload

export default function ResponsiveImagePreload({ src, srcSet, sizes }: { src: string; srcSet: string; sizes: string }) {
  if (preload) {
    preload(src, { as: 'image', imageSrcSet: srcSet, imageSizes: sizes, fetchPriority: 'high' })
    return null
  }

  return <link rel="preload" as="image" imageSrcSet={srcSet} imageSizes={sizes} fetchPriority="high" />
}
