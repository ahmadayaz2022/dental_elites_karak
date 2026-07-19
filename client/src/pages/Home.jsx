import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import Statistics from "../components/Statistics/Statistics";

import DoctorsSection from "../components/DoctorsSection/DoctorsSection";
import ProcessSection from "../components/ProcessSection/ProcessSection";
import WhyChooseUs from "../components/WhyChooseUs/WhyChooseUs";
import TestimonialsSection from "../components/TestimonialsSection/TestimonialsSection";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ServicesSection />
      <Statistics />
      <DoctorsSection />
      <ProcessSection />
      <WhyChooseUs />
      <TestimonialsSection />
    </>
  );
}

export default Home;