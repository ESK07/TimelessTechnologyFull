import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
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
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY
      );

      setIsSubmitted(true);

      setFormData({
        name: '',
        email: '',
        company: '',
        service: '',
        budget: '',
        message: ''
      });

    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
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
        className="pt-16 min-h-screen bg-white dark:bg-gray-900 flex items-center justify-center transition-colors duration-200"
      >
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-center"
        >
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Thank You!
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Your message has been sent successfully. We'll get back to you within 24 hours.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Send Another Message
          </button>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-500 to-green-700 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h1>
        <p className="text-xl md:text-2xl max-w-4xl mx-auto">
          Ready to start your next project? We'd love to hear from you.
        </p>
      </section>

      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">

          {/* Contact Cards */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="bg-green-50 dark:bg-gray-800 border rounded-xl p-8 text-center shadow-lg"
              >
                <div className="mb-6 flex justify-center">
                  {info.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{info.title}</h3>
                <p className="font-medium mb-2">{info.details}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {info.subdescription}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Form */}
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 border rounded-xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">

              <input
                type="text"
                name="name"
                placeholder="Full Name *"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address *"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="text"
                name="company"
                placeholder="Company Name"
                value={formData.company}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              />

              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="">Select Service *</option>
                <option value="web">Web Development</option>
                <option value="mobile">Mobile Applications</option>
                <option value="cloud">Cloud Solutions</option>
                <option value="ai">AI Integration</option>
                <option value="database">Database Solutions</option>
                <option value="security">Cybersecurity</option>
              </select>

              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="">Select Budget</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-50k">$15,000 - $50,000</option>
                <option value="50k-plus">$50,000+</option>
                <option value="discuss">Let's discuss</option>
              </select>

              <textarea
                name="message"
                rows={6}
                placeholder="Project Details *"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-3"
              />

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className={`w-full py-4 rounded-lg font-semibold transition-all flex items-center justify-center space-x-2 ${
                  isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-green-600 hover:bg-green-700 text-white'
                }`}
              >
                {isLoading ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-5 w-5" />
                  </>
                )}
              </motion.button>

            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
