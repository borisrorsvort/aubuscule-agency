import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import '@/components/hub/hub.css'
import { HubHome } from '@/components/hub/HubHome'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  return {
    title: t('siteTitle'),
    description: t('siteDescription'),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: '/fr',
        en: '/en',
        nl: '/nl',
        'x-default': '/fr',
      },
    },
  }
}

export default HubHome
