import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";
import Stats from "./components/Stats/Stats";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import DoctorsSection from "./components/DoctorsSection/DoctorsSection";
import ProcessSection from "./components/ProcessSection/ProcessSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Statistics />
      <Stats/>
      <AboutSection/>
      <ServicesSection/>
      <DoctorsSection/>
      <ProcessSection />
    </>
  );
}

export default App;