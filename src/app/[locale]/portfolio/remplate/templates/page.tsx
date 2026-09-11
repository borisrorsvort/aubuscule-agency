import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { RemplateTemplates } from '@/components/portfolio/RemplateTemplates'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'remplate.meta' })

  return {
    title: t('templatesTitle'),
    description: t('templatesDesc'),
    alternates: {
      canonical: `/${locale}/apps/remplate/templates`,
      languages: {
        fr: '/fr/apps/remplate/templates',
        en: '/en/apps/remplate/templates',
        nl: '/nl/apps/remplate/templates',
        'x-default': '/fr/apps/remplate/templates',
      },
    },
    openGraph: {
      title: t('templatesTitle'),
      description: t('templatesDesc'),
      images: [
        {
          url: '/apps/remplate/screenshot.png',
          width: 1440,
          height: 1036,
          alt: t('templatesTitle'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('templatesTitle'),
      description: t('templatesDesc'),
      images: ['/apps/remplate/screenshot.png'],
    },
  }
}

export default async function TemplatesRoute() {
  return <RemplateTemplates />
}
