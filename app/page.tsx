import Hero from '../components/Hero'
import HowItWorks from '../components/HowItWorks'
import HireTutor from '../components/HireTutor'
import Testimonials from '../components/Testimonials'
import CorporateTraining from '../components/CorporateTraining'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <main className="min-h-screen pt-20">
      <Hero />
      <Testimonials />
      <HowItWorks />
      <HireTutor />
      <CorporateTraining />
      <FAQ />
    </main>
  )
}