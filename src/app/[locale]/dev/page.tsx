import { getTranslations } from 'next-intl/server'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'nav' })
  return {
    title: `Dev — Aubuscule`,
    alternates: {
      canonical: `/${locale}/dev`,
      languages: {
        fr: '/fr/dev',
        en: '/en/dev',
        nl: '/nl/dev',
        'x-default': '/fr/dev',
      },
    },
  }
}

export default async function DevHome({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  return (
    <main id="main-content">
      <div className="wrap">
        <h1>Dev</h1>
        <p>
          {locale === 'fr'
            ? 'Bientôt disponible — à venir (Epic 6).'
            : locale === 'nl'
            ? 'Binnenkort beschikbaar — binnenkort (Epic 6).'
            : 'Coming soon — coming soon (Epic 6).'}
        </p>
      </div>
    </main>
  )
}
