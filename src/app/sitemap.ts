import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'

// Only publicly-linked, ready pages. Apps/blog/dev are hidden stubs for now.
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return [
    { url: SITE_URL, lastModified, changeFrequency: 'monthly', priority: 1.0 },
    { url: `${SITE_URL}/agency`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
  ]
}
