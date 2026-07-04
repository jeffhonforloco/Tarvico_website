import { MetadataRoute } from 'next'

const BASE = 'https://www.tarvico.com'

type Route = {
  path: string
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']
  priority: number
}

// Single source of truth for indexable routes. Add new pages here — one line each.
const routes: Route[] = [
  { path: '',          changeFrequency: 'weekly',  priority: 1.0 },
  { path: '/about',    changeFrequency: 'monthly', priority: 0.9 },
  { path: '/portfolio', changeFrequency: 'monthly', priority: 0.9 },
  { path: '/investors', changeFrequency: 'monthly', priority: 0.85 },
  { path: '/vision',   changeFrequency: 'yearly',  priority: 0.8 },
  { path: '/careers',  changeFrequency: 'weekly',  priority: 0.75 },
  { path: '/newsroom', changeFrequency: 'weekly',  priority: 0.75 },
  { path: '/contact',  changeFrequency: 'yearly',  priority: 0.7 },
  { path: '/privacy',  changeFrequency: 'yearly',  priority: 0.3 },
  { path: '/terms',    changeFrequency: 'yearly',  priority: 0.3 },
  { path: '/legal',    changeFrequency: 'yearly',  priority: 0.3 },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }))
}
