import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api$', '/api/'],
      },
    ],
    sitemap: 'https://www.tarvico.com/sitemap.xml',
    host: 'https://www.tarvico.com',
  }
}
