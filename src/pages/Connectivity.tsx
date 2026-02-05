import React from 'react';
import { 
  Satellite,
  Radio,
  CheckCircle,
  ArrowRight,
  Cpu
} from 'lucide-react';

const Connectivity = () => {

  const connectivityOptions = [
    {
      icon: <Radio className="w-8 h-8" />,
      title: "Microwave Technology",
      description:
        "Microwave technology carries large quantities of data at high speed. Ideal for remote areas with active commercial operations needing fast, stable data exchange.",
      features: [
        "High-speed data transfer",
        "Excellent for remote areas",
        "Supports voice, video & data",
        "Reliable long-distance transmission"
      ]
    },
    {
      icon: <Satellite className="w-8 h-8" />,
      title: "Satelite",
      description:
        "Satellite communication for reliable data transmission anywhere with line-of-sight to the satellite.",
      features: [
        "Global connectivity",
        "Works anywhere with satellite LoS",
        "Highly reliable",
        "Independent of terrestrial networks"
      ]
    }
  ];

  const technologies = [
   "Fiber Backhaul",
    "Satellite Systems",
    "Point-to-Point Links",
    "Point-to-Multipoint Systems",
    "Network Monitoring Tools",
    "Microwave Radios"
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Connectivity <span className="text-green-400">Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            High-performance communication technologies that keep your business connected.
          </p>
        </div>
      </section>

      {/* Connectivity Options */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-6">
          
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Our Connectivity Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Reliable and scalable solutions tailored to your communication needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {connectivityOptions.map((item, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 hover:border-green-200 dark:hover:border-green-600 hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900 rounded-2xl mb-6 group-hover:bg-green-600 group-hover:text-white transition duration-300">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-4">
                  {item.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center text-gray-400 cursor-not-allowed" disabled>
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Connectivity Technologies We Use
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Industry-leading equipment and tools powering our solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-xl p-6 text-center hover:bg-green-50 hover:border-green-200 border border-gray-200 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-green-600 transition-colors duration-300">
                  <Cpu className="w-6 h-6 text-green-600 group-hover:text-white" />
                </div>
                <span className="font-medium text-gray-900 group-hover:text-green-600 transition-colors duration-300">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Connectivity;
