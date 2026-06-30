import type { Metadata } from 'next'
import '@/components/hub/hub.css'
import { HubHome } from '@/components/hub/HubHome'

export const metadata: Metadata = {
  title: 'Aubuscule',
  description: 'Aubuscule — agence, apps, blog, shop. Tout ce qu\u2019il faut pour les artistes.',
  alternates: { canonical: '/' },
}

export default HubHome
