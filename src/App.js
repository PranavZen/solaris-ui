import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import "../src/assets/scss/main.css";
import HomePage from "./pages/HomePage";
import SupportPage from "./pages/SupportPage";
function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/support" element={<SupportPage />} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
