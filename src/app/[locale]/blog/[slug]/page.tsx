import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  return {
    title: `${slug} — Blog Aubuscule`,
    alternates: {
      canonical: `/${locale}/blog/${slug}`,
      languages: {
        fr: `/fr/blog/${slug}`,
        en: `/en/blog/${slug}`,
        nl: `/nl/blog/${slug}`,
        'x-default': `/fr/blog/${slug}`,
      },
    },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  return (
    <main id="main-content">
      <div className="wrap">
        <h1>{slug}</h1>
        <p>
          {locale === 'fr'
            ? 'Article — à venir (Epic 8).'
            : locale === 'nl'
            ? 'Artikel — binnenkort (Epic 8).'
            : 'Article — coming soon (Epic 8).'}
        </p>
      </div>
    </main>
  )
}
