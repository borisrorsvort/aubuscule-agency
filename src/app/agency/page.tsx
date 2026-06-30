import '@/components/agency/agency.css'
import { Hero } from '@/components/agency/Hero'
import { Services } from '@/components/agency/Services'
import { Team } from '@/components/agency/Team'
import { Testimonials } from '@/components/agency/Testimonials'
import { Contact } from '@/components/agency/Contact'

export default function AgencyHome() {
  return (
    <main id="main-content">
      <div className="wrap">
        <Hero />
        <Services />
        <Team />
        <Testimonials />
        <Contact />
      </div>
    </main>
  )
}
