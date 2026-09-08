import type { Metadata } from 'next'
import { notFound } from 'next/navigation'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>
}): Promise<Metadata> {
  const { locale, slug } = await params
  return {
    title: `${slug} — Aubuscule`,
    alternates: {
      canonical: `/${locale}/realisations/${slug}`,
      languages: {
        fr: `/fr/realisations/${slug}`,
        en: `/en/realisations/${slug}`,
        nl: `/nl/realisations/${slug}`,
        'x-default': `/fr/realisations/${slug}`,
      },
    },
  }
}

export default async function AppDetail({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { slug } = await params

  if (slug === 'remplate') {
    notFound()
  }

  notFound()
}
