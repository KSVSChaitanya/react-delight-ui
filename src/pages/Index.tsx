import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import FacilitiesSection from "@/components/FacilitiesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <FacilitiesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
