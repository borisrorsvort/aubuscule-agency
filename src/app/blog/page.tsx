import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blog — Aubuscule',
  description: 'Apps, services, tech et divers — le blog Aubuscule.',
  alternates: { canonical: 'https://blog.aubuscule.com' },
}

export default function BlogHome() {
  return (
    <main id="main-content">
      <div className="wrap">
        <h1>Blog</h1>
        <p>Articles — à venir (Epic 8).</p>
      </div>
    </main>
  )
}
