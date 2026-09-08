import { getTranslations } from 'next-intl/server'
import { RealisationsGallery } from '@/components/realisations/RealisationsGallery'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'nav' })
  const tMeta = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: `${t('realisations')} — Aubuscule`,
    description: tMeta('siteDescription'),
    alternates: {
      canonical: `/${locale}/realisations`,
      languages: {
        fr: '/fr/realisations',
        en: '/en/realisations',
        nl: '/nl/realisations',
        'x-default': '/fr/realisations',
      },
    },
  }
}

export default async function RealisationsHome() {
  return (
    <main id="main-content">
      <div className="wrap">
        <RealisationsGallery />
      </div>
    </main>
  )
}
