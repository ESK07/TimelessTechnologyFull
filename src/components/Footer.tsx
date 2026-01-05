import { Link } from 'react-router-dom';
import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-50 border-t border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                 src="/images/timeless.png"
                  alt="Timeless Technology Logo"
                  className="h-20 w-auto"
              />
            </div>

            <p className="text-gray-600 text-sm leading-relaxed">
              Empowering businesses with innovative technology solutions that stand the test of time.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-600 hover:text-green-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors text-sm">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">Web Development</li>
              <li className="text-gray-600 text-sm">Internet Services</li>
              <li className="text-gray-600 text-sm">Cloud Services</li>
              <li className="text-gray-600 text-sm">Connectivity</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4">Get In Touch</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-sm text-gray-600">
                <Mail className="h-4 w-4 text-green-500" />
                <span>sales@timelesstechnology.co.zw</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-600">
                <Phone className="h-4 w-4 text-green-500" />
                <span>+263 867 722 2444</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-600">
                <MapPin className="h-4 w-4 text-green-500" />
                <span>2nd Floor, Pasangano Building, Avondale, Harare, Zimbabwe</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-200 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 text-sm">
              © {currentYear} Timeless Technology. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;