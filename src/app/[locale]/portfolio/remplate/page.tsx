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
    openGraph: {
      title: t('overviewTitle'),
      description: t('overviewDesc'),
      images: [
        {
          url: '/apps/remplate/screenshot.png',
          width: 1440,
          height: 1036,
          alt: t('overviewTitle'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('overviewTitle'),
      description: t('overviewDesc'),
      images: ['/apps/remplate/screenshot.png'],
    },
  }
}

export default async function RemplateRoute() {
  return <RemplatePage />
}
