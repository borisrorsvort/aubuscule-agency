import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${slug} — Aubuscule`,
    alternates: { canonical: `/apps/${slug}` },
  }
}

export default async function AppDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <main id="main-content">
      <div className="wrap">
        <h1>{slug}</h1>
        <p>Page détail de l’app — à venir (Epic 5).</p>
      </div>
    </main>
  )
}
