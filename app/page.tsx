import Hero from '../components/Hero'
import Features from '../components/Features'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import CallToAction from '../components/CallToAction'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Services />
      <Testimonials />
      <CallToAction />
    </main>
  )
}