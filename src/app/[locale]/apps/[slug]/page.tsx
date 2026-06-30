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
      canonical: `/${locale}/apps/${slug}`,
      languages: {
        fr: `/fr/apps/${slug}`,
        en: `/en/apps/${slug}`,
        nl: `/nl/apps/${slug}`,
        'x-default': `/fr/apps/${slug}`,
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
