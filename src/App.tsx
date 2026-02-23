import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import InternetServices from './pages/InternetServices.tsx';
import CloudServices from "./pages/CloudServices";
import Connectivity from "./pages/Connectivity";
import Services from './pages/Services';
import Contact from './pages/Contact';
import ContactCenterSolutions from "./pages/ContactCenterSolutions";
import { Toaster } from "react-hot-toast";

<Toaster position="top-right" />

const PageTransition = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -12 }}
    transition={{ duration: 0.25, ease: 'easeOut' }}
  >
    {children}
  </motion.div>
);

const AppRoutes = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Home /></PageTransition>} />
        <Route path="/about" element={<PageTransition><About /></PageTransition>} />
        <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
        <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
        <Route path="/internet-services" element={<PageTransition><InternetServices /></PageTransition>} />
        <Route path="/cloud-services" element={<PageTransition><CloudServices /></PageTransition>} />
        <Route path="/connectivity" element={<PageTransition><Connectivity /></PageTransition>} />
        <Route path="/contact-center-solutions" element={<PageTransition><ContactCenterSolutions /></PageTransition>} /> 
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <AppRoutes />
        <Footer />
      </div>
    </Router>
  );
}

export default App;