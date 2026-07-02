import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SITE_URL } from '@/lib/site'
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
    title: t('homeTitle'),
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
    openGraph: {
      title: t('homeTitle'),
      description: t('siteDescription'),
      locale: locale === 'fr' ? 'fr_BE' : locale === 'nl' ? 'nl_BE' : 'en_US',
      type: 'website',
      url: `${SITE_URL}/${locale}`,
      siteName: 'Aubuscule',
      images: [{ url: '/img/og-image.png', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('homeTitle'),
      description: t('siteDescription'),
      images: ['/img/og-image.png'],
    },
  }
}

export default async function HubPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Aubuscule',
    url: `${SITE_URL}/${locale}`,
    description: t('siteDescription'),
    inLanguage: locale === 'fr' ? 'fr-BE' : locale === 'nl' ? 'nl-BE' : 'en-US',
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <HubHome />
    </>
  )
}
