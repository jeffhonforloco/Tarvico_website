import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Tarvico Inc.',
    short_name: 'Tarvico',
    description:
      'Private technology holding company building enduring AI-native ventures for the next global economy.',
    start_url: '/',
    display: 'standalone',
    background_color: '#07070A',
    theme_color: '#07070A',
    icons: [
      {
        src: '/logo-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'any',
      },
      {
        src: '/logo-icon.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
    categories: ['business', 'finance', 'productivity'],
    lang: 'en-US',
    dir: 'ltr',
  }
}
