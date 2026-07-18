import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Statistics from "./components/Statistics/Statistics";
import Stats from "./components/Stats/Stats";
import AboutSection from "./components/AboutSection/AboutSection";
import ServicesSection from "./components/ServicesSection/ServicesSection";
import DoctorsSection from "./components/DoctorsSection/DoctorsSection";

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
    </>
  );
}

export default App;