import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [darkMode, setDarkMode] = useState(() => {
    // Initialize from localStorage or default to light mode
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  const location = useLocation();

  // ---- Initialize Dark Mode on Mount ----
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    } else {
      document.documentElement.classList.remove("dark");
      setDarkMode(false);
    }
  }, []);

  // ---- Scroll Logic (Hide on Down, Show on Up) ----
  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;

      setScrolled(currentY > 60);

      if (currentY > lastY && currentY > 100) setScrollDirection("down");
      else setScrollDirection("up");

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ---- Dark Mode Toggle ----
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },

    {
      label: 'Services',
      children: [
        { path: '/internet-services', label: 'Internet Services' },
        { path: '/cloud-services', label: 'Cloud Services' },
        { path: '/connectivity', label: 'Connectivity' },
        { path: '/Services', label: 'All we do' },
      ],
    },

    { path: '/contact', label: 'Contact' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ 
        y: scrollDirection === "down" ? -100 : 0,
        backgroundColor: scrolled ? "rgba(255, 255, 255, 0.98)" : "rgba(255, 255, 255, 0.98)",
        boxShadow: scrolled ? "0 4px 20px rgba(0, 0, 0, 0.1)" : "0 0 0 rgba(0, 0, 0, 0)"
      }}
      transition={{ 
        duration: 0.3,
        ease: "easeInOut"
      }}
      className={`
        fixed w-full z-50
        ${darkMode ? "dark:bg-gray-900" : "bg-white"}
        ${scrolled ? "shadow-xl" : ""}
      `}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="flex items-center">
              <img
                src="/images/timeless.png"
                alt="Timeless Technology Logo"
                className="transition-all duration-300 w-auto h-12 hover:opacity-80"
              />
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 items-center">

            {navItems.map((item, index) =>
              item.children ? (
                <motion.div 
                  key={item.label} 
                  className="relative group"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="relative px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-1 group"
                  >
                    {item.label}
                    <motion.div
                      animate={{ rotate: servicesOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ChevronDown size={16} />
                    </motion.div>
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 bg-green-500 dark:bg-green-400"
                      initial={{ width: 0 }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-3 w-56 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-2xl py-2 z-50 overflow-hidden"
                      >
                        {item.children.map((child, childIndex) => (
                          <motion.div
                            key={child.path}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: childIndex * 0.05 }}
                          >
                            <Link
                              to={child.path}
                              onClick={() => setServicesOpen(false)}
                              className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-green-50 dark:hover:bg-gray-800 transition-colors duration-200 relative group"
                            >
                              <motion.span
                                className="absolute left-0 top-0 bottom-0 w-1 bg-green-500"
                                initial={{ scaleY: 0 }}
                                whileHover={{ scaleY: 1 }}
                                transition={{ duration: 0.2 }}
                              />
                              <span className="relative">{child.label}</span>
                            </Link>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  key={item.path}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="relative px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 group"
                  >
                    <motion.span
                      whileHover={{ scale: 1.05 }}
                      className="inline-block"
                    >
                      {item.label}
                    </motion.span>

                    {/* Animated underline */}
                    <motion.span
                      className="absolute left-0 bottom-0 h-0.5 bg-green-500 dark:bg-green-400"
                      initial={{ width: location.pathname === item.path ? "100%" : "0%" }}
                      animate={{ width: location.pathname === item.path ? "100%" : "0%" }}
                      whileHover={{ width: "100%" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  </Link>
                </motion.div>
              )
            )}

            {/* Dark Mode Toggle */}
            <motion.button
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.1, rotate: 15 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
            >
              <motion.div
                animate={{ rotate: darkMode ? 360 : 0 }}
                transition={{ duration: 0.5 }}
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </motion.div>
            </motion.button>
          </div>

          {/* Mobile Toggle */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="md:hidden text-gray-700 dark:text-gray-300 p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <motion.div
              animate={{ rotate: isOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </motion.div>
          </motion.button>
        </div>
      </div>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-30 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-64 bg-white dark:bg-gray-900 shadow-2xl z-40 md:hidden"
            >
              <div className="p-6 space-y-4 mt-16">
                {navItems.map((item, index) =>
                  item.children ? (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <button
                        onClick={() => setServicesOpen(!servicesOpen)}
                        className="w-full text-left text-gray-700 dark:text-gray-300 font-medium flex items-center justify-between py-2"
                      >
                        {item.label}
                        <motion.div
                          animate={{ rotate: servicesOpen ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <ChevronDown size={16} />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {servicesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="ml-4 space-y-2 overflow-hidden"
                          >
                            {item.children.map((child) => (
                              <motion.div
                                key={child.path}
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1 }}
                              >
                                <Link
                                  to={child.path}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setServicesOpen(false);
                                  }}
                                  className="block text-gray-600 dark:text-gray-400 py-2 hover:text-green-600 dark:hover:text-green-400 transition-colors"
                                >
                                  {child.label}
                                </Link>
                              </motion.div>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ) : (
                    <motion.div
                      key={item.path}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setIsOpen(false)}
                        className={`block text-gray-700 dark:text-gray-300 py-2 font-medium transition-colors ${
                          location.pathname === item.path 
                            ? "text-green-600 dark:text-green-400" 
                            : "hover:text-green-600 dark:hover:text-green-400"
                        }`}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  )
                )}

                {/* Dark Mode Toggle (mobile) */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="pt-6 border-t border-gray-200 dark:border-gray-700"
                >
                  <button
                    onClick={() => setDarkMode(!darkMode)}
                    className="w-full flex items-center justify-between gap-2 p-3 bg-gray-100 dark:bg-gray-800 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      {darkMode ? <Sun size={18} /> : <Moon size={18} />}
                      <span className="text-gray-700 dark:text-gray-300">
                        {darkMode ? "Light Mode" : "Dark Mode"}
                      </span>
                    </div>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
