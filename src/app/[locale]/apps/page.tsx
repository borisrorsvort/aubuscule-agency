import { getTranslations } from 'next-intl/server'
import { AppsGallery } from '@/components/apps/AppsGallery'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'nav' })
  const tMeta = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: `${t('apps')} — Aubuscule`,
    description: tMeta('siteDescription'),
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

export default async function AppsHome() {
  return (
    <main id="main-content">
      <div className="wrap">
        <AppsGallery />
      </div>
    </main>
  )
}
