import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import InternetServices from './pages/InternetServices.tsx';
import CloudServices from "./pages/CloudServices";
import Connectivity from "./pages/Connectivity";
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import ContactCenterSolutions from "./pages/ContactCenterSolutions";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-neutral-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/internet-services" element={<InternetServices />} />
          <Route path="/cloud-services" element={<CloudServices />} />
          <Route path="/connectivity" element={<Connectivity />} />
          <Route path="/contact-center-solutions" element={<ContactCenterSolutions />} /> 
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;