import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "../src/assets/scss/main.css";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";
import AboutUs from "./pages/AboutUs";
import Modal from "./components/modal/Modal";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
function App() {
  return (
    <BrowserRouter forceRefresh={true}>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/support" element={<SupportPage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/terms-and-conditions" element={<TermsConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      </Routes>
      <Modal />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
