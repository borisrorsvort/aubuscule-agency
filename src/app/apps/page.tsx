import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Apps — Aubuscule',
  description: 'Les applications développées par Aubuscule.',
  alternates: { canonical: '/apps' },
}

export default function AppsHome() {
  return (
    <main id="main-content">
      <div className="wrap">
        <h1>Apps</h1>
        <p>Listing des apps — à venir (Epic 5).</p>
      </div>
    </main>
  )
}
