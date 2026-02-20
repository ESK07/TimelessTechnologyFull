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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAIL_SERVICE_ID as string,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID as string,
        {
          name: formData.name,
          email: formData.email,
          company: formData.company,
          service: formData.service,
          budget: formData.budget,
          message: formData.message,
        },
        import.meta.env.VITE_EMAIL_PUBLIC_KEY as string
      );

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);

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

      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Contact Info Cards */}
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

          {/* Contact Form Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            <div>
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
                Let's Start a Conversation
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities,
                we're here to help. Fill out the form and we'll get back to you.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 border border-green-200 dark:border-gray-700 rounded-xl p-8 shadow-lg">
              <form onSubmit={handleSubmit} className="space-y-6">

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Full Name *"
                  className="w-full border rounded-lg px-4 py-3"
                />

                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Email Address *"
                  className="w-full border rounded-lg px-4 py-3"
                />

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Project Details *"
                  className="w-full border rounded-lg px-4 py-3"
                />

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.02 }}
                  whileTap={{ scale: isLoading ? 1 : 0.98 }}
                  transition={{ duration: 0.2 }}

                  className={`w-full py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 ${
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
        </div>
      </section>
    </div>
  );
};

export default Contact;
