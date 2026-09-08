import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { RemplatePage } from '@/components/realisations/RemplatePage'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'remplate.meta' })

  return {
    title: t('overviewTitle'),
    description: t('overviewDesc'),
    alternates: {
      canonical: `/${locale}/realisations/remplate`,
      languages: {
        fr: '/fr/realisations/remplate',
        en: '/en/realisations/remplate',
        nl: '/nl/realisations/remplate',
        'x-default': '/fr/realisations/remplate',
      },
    },
  }
}

export default async function RemplateRoute() {
  return <RemplatePage />
}
