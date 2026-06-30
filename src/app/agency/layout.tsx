import type { Metadata } from 'next'
import { Nav } from '@/components/shared/Nav'
import { Footer } from '@/components/shared/Footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://agency.aubuscule.com'),
  title: 'Aubuscule — Artisans numériques pour artistes',
  description:
    'Aubuscule accompagne les artistes — digital, audio, vidéo et administratif. Musiciens, plasticiens, performeurs : deux artisans au service de votre projet.',
  alternates: {
    canonical: 'https://agency.aubuscule.com',
  },
  openGraph: {
    title: 'Aubuscule — Artisans numériques pour artistes',
    description:
      'Accompagnement digital, audio, vidéo et administratif pour musiciens, plasticiens et artistes.',
    locale: 'fr_BE',
    type: 'website',
    url: 'https://agency.aubuscule.com',
    siteName: 'Aubuscule',
    images: [{ url: '/img/og-image.png', width: 1200, height: 630, alt: 'Aubuscule' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aubuscule — Artisans numériques pour artistes',
    description:
      'Accompagnement digital, audio, vidéo et administratif pour musiciens, plasticiens et artistes.',
    images: ['/img/og-image.png'],
  },
}

const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Aubuscule',
  url: 'https://agency.aubuscule.com',
  logo: 'https://agency.aubuscule.com/img/og-image.png',
  description: 'Aubuscule accompagne les artistes — digital, audio, vidéo et administratif.',
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
      jobTitle: 'Artisan numérique · Photo',
      knowsAbout: ['Web', 'Design', 'Photo', 'Automatisation'],
    },
    {
      '@type': 'Person',
      name: 'Éric',
      jobTitle: 'Musicien · Composition · Son',
      knowsAbout: ['Enregistrement', 'Mix / Master', 'Vidéo', 'Clip'],
    },
  ],
}

export default function AgencyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <Nav />
      {children}
      <Footer />
    </>
  )
}
