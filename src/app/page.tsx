import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { Team } from '@/components/Team'
import { Testimonials } from '@/components/Testimonials'
import { Contact } from '@/components/Contact'

export default function Home() {
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
