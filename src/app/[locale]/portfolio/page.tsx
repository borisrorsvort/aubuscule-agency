import { getTranslations } from 'next-intl/server'
import { RealisationsGallery } from '@/components/portfolio/RealisationsGallery'

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'nav' })
  const tMeta = await getTranslations({ locale, namespace: 'meta' })
  return {
    title: t('portfolio'),
    description: tMeta('siteDescription'),
    alternates: {
      canonical: `/${locale}/portfolio`,
      languages: {
        fr: '/fr/portfolio',
        en: '/en/portfolio',
        nl: '/nl/portfolio',
        'x-default': '/fr/portfolio',
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
