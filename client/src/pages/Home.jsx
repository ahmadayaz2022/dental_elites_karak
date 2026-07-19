import Hero from "../components/Hero/Hero";
import Stats from "../components/Stats/Stats";
import AboutSection from "../components/AboutSection/AboutSection";
import ServicesSection from "../components/ServicesSection/ServicesSection";
import DoctorsSection from "../components/DoctorsSection/DoctorsSection";
import ProcessSection from "../components/ProcessSection/ProcessSection";

function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ServicesSection />
      <DoctorsSection />
      <ProcessSection />
    </>
  );
}

export default Home;