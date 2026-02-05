import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { fadeUp, staggerContainer } from '../utils/animations';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-8 w-8 text-green-500" />,
      title: 'Email Us',
      details: 'sales@timelesstechnology.co.zw',
      subdescription: 'We\'ll respond within 24 hours'
    },
    {
      icon: <Phone className="h-8 w-8 text-green-500" />,
      title: 'Call Us',
      details: '+2638677222444',
      subdescription: 'Monday to Friday, 8 AM - 5 PM'
    },
    {
      icon: <MapPin className="h-8 w-8 text-green-500" />,
      title: 'Visit Us',
      details: 'Avondale, Harare, Zimbabwe',
      subdescription: 'Schedule an appointment'
    },
    {
      icon: <Clock className="h-8 w-8 text-green-500" />,
      title: 'Business Hours',
      details: 'Mon - Fri: 8 AM - 5 PM',
      subdescription: 'Weekend support available'
    }
  ];

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="pt-16 min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center transition-colors duration-200"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          >
            <CheckCircle className="h-20 w-20 text-green-500 dark:text-green-400 mx-auto mb-6" />
          </motion.div>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Thank You!
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-300 mb-8"
          >
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </motion.p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsSubmitted(false)}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Send Another Message
          </motion.button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-500 to-green-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to start your next project? We'd love to hear from you and discuss how we can help.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-green-50 dark:bg-gray-800 backdrop-blur-sm border border-green-200 dark:border-gray-700 rounded-xl p-8 text-center hover:bg-green-100 dark:hover:bg-gray-700 transition-all duration-300 group shadow-lg hover:shadow-xl"
              >
                <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {info.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                  {info.details}
                </p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {info.subdescription}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, 
                we're here to help. Fill out the form and we'll get back to you with a detailed proposal.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 dark:bg-green-500 rounded-full p-2 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold">Free Consultation</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Initial project assessment at no cost</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 dark:bg-green-500 rounded-full p-2 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold">Detailed Proposal</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Comprehensive project plan and timeline</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-600 dark:bg-green-500 rounded-full p-2 mt-1">
                    <CheckCircle className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-gray-900 dark:text-white font-semibold">Transparent Pricing</h4>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">Clear breakdown of costs and deliverables</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 backdrop-blur-sm border border-green-200 dark:border-gray-700 rounded-xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="web">Web Development</option>
                      <option value="mobile">Mobile Applications</option>
                      <option value="cloud">Cloud Solutions</option>
                      <option value="ai">AI Integration</option>
                      <option value="database">Database Solutions</option>
                      <option value="security">Cybersecurity</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="budget" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Budget
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-5k">Under $5,000</option>
                    <option value="5k-15k">$5,000 - $15,000</option>
                    <option value="15k-50k">$15,000 - $50,000</option>
                    <option value="50k-plus">$50,000+</option>
                    <option value="discuss">Let's discuss</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project, goals, and any specific requirements..."
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="h-5 w-5" />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;