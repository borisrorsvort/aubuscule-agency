import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { RemplatePage } from '@/components/apps/RemplatePage'

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
      canonical: `/${locale}/apps/remplate`,
      languages: {
        fr: '/fr/apps/remplate',
        en: '/en/apps/remplate',
        nl: '/nl/apps/remplate',
        'x-default': '/fr/apps/remplate',
      },
    },
  }
}

export default async function RemplateRoute() {
  return <RemplatePage />
}
