import type { Metadata } from 'next'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  return {
    title: `${slug} — Blog Aubuscule`,
    alternates: { canonical: `https://blog.aubuscule.com/${slug}` },
  }
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  return (
    <main id="main-content">
      <div className="wrap">
        <h1>{slug}</h1>
        <p>Article — à venir (Epic 8).</p>
      </div>
    </main>
  )
}
