import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { RemplateFAQ } from '@/components/portfolio/RemplateFAQ'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'remplate.meta' })

  return {
    title: t('faqTitle'),
    description: t('faqDesc'),
    alternates: {
      canonical: `/${locale}/apps/remplate/faq`,
      languages: {
        fr: '/fr/apps/remplate/faq',
        en: '/en/apps/remplate/faq',
        nl: '/nl/apps/remplate/faq',
        'x-default': '/fr/apps/remplate/faq',
      },
    },
    openGraph: {
      title: t('faqTitle'),
      description: t('faqDesc'),
      images: [
        {
          url: '/apps/remplate/screenshot.png',
          width: 1440,
          height: 1036,
          alt: t('faqTitle'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('faqTitle'),
      description: t('faqDesc'),
      images: ['/apps/remplate/screenshot.png'],
    },
  }
}

export default async function FAQRoute() {
  return <RemplateFAQ />
}
