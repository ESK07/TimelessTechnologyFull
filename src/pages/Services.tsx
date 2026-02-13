import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};
import { 
  Code, Smartphone, Cloud, Shield, Wifi, Satellite, Radio,
  CheckCircle, ArrowRight, Database, Cpu
} from 'lucide-react';

const UnifiedServices = () => {

  /* ───────────────────────────────────────────────
     MAIN SERVICES SECTION
  ─────────────────────────────────────────────── */
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: 'Internet Services',
      description: 'We provide high-quality internet access for businesses and homes, ensuring reliability and speed to support modern digital needs.',
      features: ['Fibre Optic Cable', 'Shared Internet Access', 'Network Design', 'Starlink Installation'],
      link: '/InternetServices'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile App Development',
      description: 'Native and cross-platform applications for iOS and Android, built for performance and scalability.',
      features: ['React Native', 'Flutter', 'Native Development', 'App Store Deployment']
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Services',
      description: 'Cloud solutions that empower your business with productivity, scalability, and collaboration tools.',
      features: ['AWS/Azure Setup', 'Cloud Migration', 'Microsoft 365', 'Monitoring & Analytics'],
      
      link: '/CloudServices'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with robust security tools and defensive strategies.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Sophos & Fortinet']
      
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Data Analytics',
      description: 'Turn raw data into meaningful insights using advanced analytics and visualization.',
      features: ['BI Dashboards', 'Machine Learning', 'Data Visualization', 'Predictive Analytics'],
      
    },
    {
      icon: <Wifi className="w-8 h-8" />,
      title: 'IoT Solutions',
      description: 'Smart solutions for homes and businesses leveraging IoT technology.',
      features: ['Automation', 'Real-time Monitoring', 'Device Integration', 'Edge Computing'],
      
    }
  ];

  /* ───────────────────────────────────────────────
     CONNECTIVITY SOLUTIONS SECTION
  ─────────────────────────────────────────────── */
  const connectivity = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: 'Microwave Technology',
      description:
        'High-speed microwave transmission capable of carrying large amounts of data over long distances. Ideal for remote or high-demand environments.',
      features: [
        'High-speed capacity',
        'Reliable long-distance links',
        'Great for remote locations',
        'Supports voice, video & data'
      ]
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: 'VSAT (Satellite Internet)',
      description:
        'Satellite-based connectivity providing internet access anywhere with direct line-of-sight to a satellite.',
      features: [
        'Global coverage',
        'Works anywhere',
        'Highly reliable',
        'Independent of fiber infrastructure'
      ]
    }
  ];

  
 
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Complete <span className="text-green-400">Technology Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            All our services and connectivity solutions combined into one powerful platform.
          </p>
        </div>
      </section>

      {/* MAIN SERVICES */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Professional Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              From cloud to mobile apps, we provide a full suite of digital services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-600 hover:shadow-2xl transition"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl mb-6">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" />
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="flex items-center justify-between mt-auto">
                  <span className="text-xl font-bold text-green-600 dark:text-green-400">{service.price}</span>
                  {service.link ? (
                    <Link to={service.link} className="flex items-center text-green-600 dark:text-green-400 hover:text-green-700 dark:hover:text-green-300">
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  ) : (
                    <button className="flex items-center text-gray-400 cursor-not-allowed" disabled>
                      Learn More <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  )}
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONNECTIVITY SOLUTIONS */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 dark:text-white">
              Connectivity Solutions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Powerful communication technologies to keep you connected anywhere.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {connectivity.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-600 hover:shadow-2xl transition"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl mb-6">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 dark:text-white">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{item.description}</p>

                <ul className="space-y-3">
                  {item.features.map((f, i) => (
                    <li key={i} className="flex items-center text-gray-700 dark:text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 mr-3" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>
{/* Contact Center Solutions Section (Your Added Code) */}
        <motion.div
          variants={fadeUp}
          className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-lg transition-colors duration-200"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800 dark:text-green-400">
            Customer-Centric Digital Solutions
          </h1>
          <p className="text-center text-lg text-gray-600 dark:text-gray-300 mb-10">
            Our digital offers start from the needs and wants of you, our customer. As technology advances and users evolve, we tailor our service scope to meet the complex demands of businesses and users.
          </p>

          <div className="bg-gray-50 dark:bg-gray-900 p-8 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold text-green-700 dark:text-green-400 mb-4">Evolving with Technology</h2>
            <p className="text-gray-700 dark:text-gray-300">
              As a digital company, we are always evolving and adapting as technology evolves. Our evolution is driven by skilled and experienced personnel committed to delivering solutions that are not only current but also future-proof.
            </p>
          </div>
        </motion.div>
      
    </div>
  );
};

export default UnifiedServices;
