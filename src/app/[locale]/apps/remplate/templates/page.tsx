import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { RemplateTemplates } from '@/components/apps/RemplateTemplates'

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
  }
}

export default async function TemplatesRoute() {
  return <RemplateTemplates />
}
