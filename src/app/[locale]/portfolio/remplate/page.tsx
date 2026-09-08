import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { RemplatePage } from '@/components/portfolio/RemplatePage'

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
      canonical: `/${locale}/portfolio/remplate`,
      languages: {
        fr: '/fr/portfolio/remplate',
        en: '/en/portfolio/remplate',
        nl: '/nl/portfolio/remplate',
        'x-default': '/fr/portfolio/remplate',
      },
    },
  }
}

export default async function RemplateRoute() {
  return <RemplatePage />
}
