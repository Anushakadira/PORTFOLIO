import "./App.css";
import ContactSection from "./Component/Contact-section";
import Footer from "./Component/Footer";
import HeroSection from "./Component/Hero-section";
import Navbar from "./Component/Navbar";
import PortfolioSection from "./Component/Portfolio-section";
import ProfessionalSkillsSection from "./Component/ProfessionalSkills-section";


function App() {
  return (
  <>
      <Navbar />
      <HeroSection />
      <ProfessionalSkillsSection />
      <PortfolioSection />
      <ContactSection/>
      <Footer />
    </>
  );
}

export default App;


     