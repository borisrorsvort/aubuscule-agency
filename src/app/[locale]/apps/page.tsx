import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'nav' })
  const tMeta = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: `${t('apps')} — Aubuscule`,
    description: tMeta('siteDescription'),
    // TODO: remove once published
    robots: { index: false },
    alternates: {
      canonical: `/${locale}/apps`,
      languages: {
        fr: '/fr/apps',
        en: '/en/apps',
        nl: '/nl/apps',
        'x-default': '/fr/apps',
      },
    },
  }
}

export default async function AppsHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'nav' })
  return (
    <main id="main-content">
      <div className="wrap">
        <h1>{t('apps')}</h1>
        <p>
          {locale === 'fr'
            ? 'Listing des apps — à venir (Epic 5).'
            : locale === 'nl'
            ? 'Lijst met apps — binnenkort (Epic 5).'
            : 'Apps listing — coming soon (Epic 5).'}
        </p>
      </div>
    </main>
  )
}
