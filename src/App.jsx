import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Banner from "./Components/Banner";
import PopularRoutes from "./Components/PopularRoutes";
import Assurance from "./Components/Assurance";
import BannerBottom from "./Components/BannerBottom";
import Footer from "./Components/Footer";
import Testimonial from "./Components/Testimonial";
import ContactUs from "./Components/ContactUs";
import Hotels from "./Components/Hotels";
import NotFound from "./Components/NotFound";
import ScrollToTop from "./Components/ScrollToTop";
import TermsAndConditions from "./Components/TermsAndConditions";
import FAQ from "./Components/FAQ";
import DataPolicy from "./Components/DataPolicy";
import HeroSection from "./Components/Hero-section";
import loaderGif from "./assets/Airplane_loader.gif";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Change the delay as needed

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-white fixed inset-0 z-[9999]">
      <img
        src={loaderGif}
        alt="Loading..."
        className="w-[1900px] h-[1500px] object-contain"
      />
    </div>
    
    );
  }
  

  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              {/* <Banner /> */}
              <HeroSection />
              <BannerBottom />
              <PopularRoutes />
              <Assurance />
              <Testimonial />
            </>
          }
        />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/termsandconditions" element={<TermsAndConditions />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/data-policy" element={<DataPolicy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
