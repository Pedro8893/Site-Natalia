import { Accordions } from '@/components/accordions'
import { Contact } from '@/components/contact'
import { Features } from '@/components/features'
import { HeroHome } from '@/components/hero-home'
import { Services } from '@/components/services'
import { Testimonials } from '@/components/testimonials'

const HomePage = () => {
  return (
    <>
    <HeroHome />
    <Features />
    <Services />
    <Testimonials />
    <Contact />
    <Accordions />
    </>
   )
}

export default HomePage