import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/site'
import { locales } from '@/i18n/config'

// Only publicly-linked, ready pages. Apps/blog/dev are hidden stubs for now.
export default function sitemap(): MetadataRoute.Sitemap {
  // Static date to avoid unnecessary re-crawling of unchanged pages on every build.
  // Update this when content actually changes.
  const lastModified = new Date('2024-06-30')
  const paths = ['', '/agency']

  return paths.flatMap((path) =>
    locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? 1.0 : 0.9,
      alternates: {
        languages: Object.fromEntries(
          locales.map((loc) => [loc, `${SITE_URL}/${loc}${path}`])
        ),
      },
    }))
  )
}

