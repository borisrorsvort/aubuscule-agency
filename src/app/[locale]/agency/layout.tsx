import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import { SITE_URL } from '@/lib/site'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>
}): Promise<Metadata> {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'meta' })

  return {
    title: t('agencyTitle'),
    description: t('agencyDescription'),
    alternates: {
      canonical: `/${locale}/agency`,
      languages: {
        fr: `/fr/agency`,
        en: `/en/agency`,
        nl: `/nl/agency`,
        'x-default': `/fr/agency`,
      },
    },
    openGraph: {
      title: t('agencyTitle'),
      description: t('agencyOgDescription'),
      locale: locale === 'fr' ? 'fr_BE' : locale === 'nl' ? 'nl_BE' : 'en_US',
      type: 'website',
      url: `${SITE_URL}/${locale}/agency`,
      siteName: 'Aubuscule',
      images: [{ url: '/img/og-image.png', width: 1200, height: 630, alt: t('ogImageAlt') }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('agencyTitle'),
      description: t('agencyOgDescription'),
      images: ['/img/og-image.png'],
    },
  }
}

export default async function AgencyLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  const t = await getTranslations({ locale, namespace: 'team' })
  const tMeta = await getTranslations({ locale, namespace: 'meta' })

  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Aubuscule',
    url: `${SITE_URL}/${locale}`,
    logo: `${SITE_URL}/img/og-image.png`,
    description: tMeta('agencyOgDescription'),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bruxelles',
      addressCountry: 'BE',
    },
    email: 'contact@aubuscule.com',
    sameAs: ['https://www.instagram.com/aubuscule_agency/'],
    foundingDate: '2024',
    numberOfEmployees: { '@type': 'QuantitativeValue', value: 2 },
    founder: [
      {
        '@type': 'Person',
        name: 'Boris Rorsvort',
        jobTitle: t('members.boris.role'),
        knowsAbout: t.raw('members.boris.tags'),
      },
      {
        '@type': 'Person',
        name: 'Éric',
        jobTitle: t('members.eric.role'),
        knowsAbout: t.raw('members.eric.tags'),
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      {children}
    </>
  )
}
