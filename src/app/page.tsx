import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Aubuscule',
  description: 'Aubuscule — agence, apps, blog.',
  alternates: { canonical: 'https://aubuscule.com' },
}

export default function HubHome() {
  return (
    <main id="main-content">
      <div className="wrap">
        <h1>Aubuscule</h1>
        <p>Hub — à venir (Epic 3).</p>
      </div>
    </main>
  )
}
