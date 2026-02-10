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
import { useEffect, useState } from "react";
import QuoteModal from "./components/QuoteModal/QuoteModal";
import { Route, Routes, useLocation } from "react-router-dom";
import QuotePage from "./pages/QuotePage/QuotePage";
import ContactPage from "./pages/ContactPage/ContactPage";
import FacilitiesPage from "./pages/FacilitiesPage/FacilitiesPage";

export default function App() {
  const [showLoader, setShowLoader] = useState(true);
  const [quoteOpen, setQuoteOpen] = useState(false);
  const location = useLocation();

  const handleLoaderFinish = () => {
    setShowLoader(false);
  };

  useEffect(() => {
    if (location.pathname === "/contact") {
      document.body.classList.remove("use-custom-cursor");
    } else {
      document.body.classList.add("use-custom-cursor");
    }
  }, [location.pathname]);

  return (
    <>
      {showLoader && <LoaderIntro onFinish={handleLoaderFinish} />}
      <QuoteModal open={quoteOpen} onClose={() => setQuoteOpen(false)} />

      {!showLoader && (
        <>
          {location.pathname !== "/contact" ? <CustomCursor /> : null}
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
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
              }
            />
            <Route path="/quote" element={<QuotePage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/facilities" element={<FacilitiesPage />} />
          </Routes>
        </>
      )}
    </>
  );
}
