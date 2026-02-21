import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, PhoneCall, Network, MapPin, Shield, Users, Award, CheckCircle } from 'lucide-react';
import { CountUp } from '../components/CountUp';
import { staggerContainer, fadeUp } from '../utils/animations';

const Home = () => {
  const coreServices = [
    {
      icon: <Wifi className="h-8 w-8 text-green-500" />,
      title: 'Internet Services',
      description: 'High-speed fibre connectivity to keep your business always-on and fast.',
      image: 'https://images.pexels.com/photos/2881229/pexels-photo-2881229.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      icon: <Network className="h-8 w-8 text-green-500" />,
      title: 'Connectivity Solutions',
      description: 'Robust local networks designed for secure, seamless collaboration.',
      image: 'https://images.pexels.com/photos/1054397/pexels-photo-1054397.jpeg?auto=compress&cs=tinysrgb&w=1200'
    },
    {
      icon: <PhoneCall className="h-8 w-8 text-green-500" />,
      title: 'VoIP',
      description: 'Reliable voice solutions with crisp call quality and flexible routing.',
      image: '/images/volp.png'
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-500" />,
      title: 'Timeless Track',
      description: 'Smart tracking to monitor assets, vehicles, and operations in real time.',
      image: '/images/tt.png'
    }
  ];
  const services = [
    {
      title: 'Microsoft 365',
      image: '/images/ms365.png',
    },
    {
      title: 'Local Area Network',
      image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?auto=compress&cs=tinysrgb&w=1200',
    },
    {
      title: 'IP PBX Solution',
      image: '/images/ipbx.png',
    },
  ];

  

  const stats = [
    { number: '150+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '5+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  const benefits = [
    'Cutting-edge technology stack',
    'Agile development methodology',
    'Dedicated project management',
    'Post-launch support and maintenance',
    'Scalable and secure solutions',
    'Competitive pricing'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-green-800 via-emerald-990 to-green-800"
      >
        <div className="absolute inset-0 bg-white/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            variants={fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut' }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
          >
            Building the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400"> Future </span>
            of Technology
          </motion.h1>
          <motion.p
            variants={fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.05 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
          >
            We design innovative digital solutions that empower businesses to thrive in a fast-changing world. 
            Every offering begins with your needs and aspirations at the center. 
            As technology evolves and user expectations grow, we adapt our services to meet complex demands with precision. 
            Our solutions are built to integrate effortlessly into your current ways of working—so you can unlock new opportunities without disrupting what already makes you successful.
          </motion.p>
          <motion.div
            variants={fadeUp}
            transition={{ duration: 0.65, ease: 'easeOut', delay: 0.1 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/contact"
                className="bg-white hover:bg-gray-100 text-green-600 px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 min-h-[56px]"
              >
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                to="/services"
                className="border-2 border-white/30 hover:border-white/50 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 backdrop-blur-sm hover:bg-white/10 flex items-center justify-center min-h-[56px]"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={staggerContainer}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-green-600 dark:text-green-400 mb-2">
                  {stat.number.includes('+') ? (
                    <CountUp end={parseInt(stat.number.replace('+', ''))} suffix="+" />
                  ) : stat.number.includes('/') ? (
                    stat.number
                  ) : (
                    <CountUp end={parseInt(stat.number)} />
                  )}
                </div>
                <div className="text-gray-700 dark:text-gray-300 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Services Section */}
      <section className="py-20 bg-green-50 dark:bg-gray-800 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Connectivity and communication solutions tailored to keep you moving.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-900 backdrop-blur-sm border border-gray-200 dark:border-gray-700 rounded-xl p-8 hover:bg-green-50 dark:hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-xl overflow-hidden"
              >
                <motion.div 
                  className="mb-6 rounded-lg overflow-hidden h-40"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-20">
            <motion.h3
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-10"
            >
              Featured Solutions
            </motion.h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl bg-white dark:bg-gray-900"
                >
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    className="overflow-hidden"
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  <div className="p-6 text-center">
                    <h4 className="font-semibold text-lg text-gray-900 dark:text-white">
                      {service.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

        </div>
      </section>
    

      {/* Why Choose Us Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUp}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
                Why Choose Timeless Technology?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                We combine technical expertise with business acumen to deliver solutions that not only work flawlessly but also drive real business results.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-green-50 dark:bg-gray-800 backdrop-blur-sm border border-green-200 dark:border-gray-700 rounded-xl p-6 text-center hover:bg-green-100 dark:hover:bg-gray-700 transition-all duration-300">
                <Shield className="h-12 w-12 text-green-500 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Secure & Reliable</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Enterprise-grade security standards</p>
              </div>
              <div className="bg-green-50 dark:bg-gray-800 backdrop-blur-sm border border-green-200 dark:border-gray-700 rounded-xl p-6 text-center hover:bg-green-100 dark:hover:bg-gray-700 transition-all duration-300">
                <Users className="h-12 w-12 text-green-500 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Expert Team</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Skilled professionals at your service</p>
              </div>
              <div className="bg-green-50 dark:bg-gray-800 backdrop-blur-sm border border-green-200 dark:border-gray-700 rounded-xl p-6 text-center hover:bg-green-100 dark:hover:bg-gray-700 transition-all duration-300">
                <Award className="h-12 w-12 text-green-500 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Award Winning</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Recognized for excellence</p>
              </div>
              <div className="bg-green-50 dark:bg-gray-800 backdrop-blur-sm border border-green-200 dark:border-gray-700 rounded-xl p-6 text-center hover:bg-green-100 dark:hover:bg-gray-700 transition-all duration-300">
                <ArrowRight className="h-12 w-12 text-green-500 dark:text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Future Ready</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">Built for tomorrow's challenges</p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="py-20 bg-green-50 dark:bg-gray-800 transition-colors duration-200"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
            Let's discuss how we can help you achieve your technology goals and stay ahead of the competition.
          </p>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 space-x-2"
            >
              <span>Start Your Project</span>
              <ArrowRight className="h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;