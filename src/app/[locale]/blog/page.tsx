import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'nav' })
  const tMeta = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: `${t('blog')} — Aubuscule`,
    description: tMeta('siteDescription'),
    // TODO: remove once published
    robots: { index: false },
    alternates: {
      canonical: `/${locale}/blog`,
      languages: {
        fr: '/fr/blog',
        en: '/en/blog',
        nl: '/nl/blog',
        'x-default': '/fr/blog',
      },
    },
  }
}

export default async function BlogHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'nav' })
  return (
    <main id="main-content">
      <div className="wrap">
        <h1>{t('blog')}</h1>
        <p>
          {locale === 'fr'
            ? 'Articles — à venir (Epic 8).'
            : locale === 'nl'
            ? 'Artikelen — binnenkort (Epic 8).'
            : 'Articles — coming soon (Epic 8).'}
        </p>
      </div>
    </main>
  )
}
