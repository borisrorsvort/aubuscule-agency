import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  return {
    title: `${slug} — Aubuscule`,
    alternates: {
      canonical: `/${locale}/apps/${slug}`,
      languages: {
        fr: `/fr/apps/${slug}`,
        en: `/en/apps/${slug}`,
        nl: `/nl/apps/${slug}`,
        'x-default': `/fr/apps/${slug}`,
      },
    },
  }
}

export default async function AppDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params
  return (
    <main id="main-content">
      <div className="wrap">
        <h1>{slug}</h1>
        <p>
          {locale === 'fr'
            ? 'Page détail de l’app — à venir (Epic 5).'
            : locale === 'nl'
            ? 'App details pagina — binnenkort (Epic 5).'
            : 'App detail page — coming soon (Epic 5).'}
        </p>
      </div>
    </main>
  )
}
