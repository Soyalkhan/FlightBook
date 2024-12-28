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


function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Banner />
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
        {/* <Route path="/flights" element={<flights />} /> */}

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
