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
      canonical: `/${locale}/portfolio/${slug}`,
      languages: {
        fr: `/fr/portfolio/${slug}`,
        en: `/en/portfolio/${slug}`,
        nl: `/nl/portfolio/${slug}`,
        'x-default': `/fr/portfolio/${slug}`,
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
