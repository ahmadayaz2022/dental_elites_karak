import Hero from '../components/Hero.jsx'
import About from '../components/About.jsx'
import Services from '../components/Services.jsx'
import WhyChooseUs from '../components/WhyChooseUs.jsx'
import Process from '../components/Process.jsx'
import Doctors from '../components/Doctors.jsx'
import Gallery from '../components/Gallery.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import Appointment from '../components/Appointment.jsx'
import Contact from '../components/Contact.jsx'
import Video from '../components/video.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <Doctors />
      <Video />
      <About />
      <Services />
      <WhyChooseUs />
      <Process />
      <Gallery />
      <Testimonials />
      <FAQ />
      <Appointment />
      <Contact />
    </>
  )
}
