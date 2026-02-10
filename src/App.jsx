import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero";
import PartnersMarquee from "./components/PartnersMarquee";
import Introduction from "./components/Introduction";
import ServicesSection from "./components/ServicesSection";
import SystemsCatalogue from "./components/SystemsCatalogue";
import CapabilitiesSection from "./components/CapabilitiesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqAndNewsletter from "./components/FaqAndNewsletter";
import Footer from "./components/Footer";
import CustomCursor from "./components/CustomCursor";
import FloatingCTA from "./components/FloatingCTA";
import LoaderIntro from "./components/LoaderIntro";
import { useState } from "react";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);

  const handleLoaderFinish = () => {
    setShowLoader(false);
    requestAnimationFrame(() => {
      if (window.__lenis?.resize) window.__lenis.resize();
      if (window.__lenis?.start) window.__lenis.start();
      window.dispatchEvent(new Event("resize"));
    });
  };

  return (
    <>
      {showLoader && <LoaderIntro onFinish={handleLoaderFinish} />}

      {!showLoader && (
        <>
          <CustomCursor />
          <Navbar />
          <Hero />
          <PartnersMarquee />
          <Introduction />
          <ServicesSection />
          <SystemsCatalogue />
          <CapabilitiesSection />
          <TestimonialsSection />
          <FaqAndNewsletter />
          <Footer />
          <FloatingCTA />
        </>
      )}
    </>
  );
}
