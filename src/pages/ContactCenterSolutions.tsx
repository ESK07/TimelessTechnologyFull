import React from "react";
import { motion } from "framer-motion";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

export default function ServicesAndConnectivityPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 py-12 px-6 md:px-20">
      <motion.div
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.2 }}
        className="max-w-5xl mx-auto space-y-16"
      >
        {/* Header */}
        <motion.h1
          variants={fadeUp}
          className="text-4xl md:text-5xl font-bold text-center text-green-800"
        >
          Services & Connectivity
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          className="text-center text-lg text-gray-600 max-w-3xl mx-auto"
        >
          Explore our comprehensive digital services and robust connectivity solutions — all crafted to empower businesses, enhance communication, and drive digital transformation.
        </motion.p>

        {/* Services Section */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Digital Services</h2>
          <p className="text-gray-700">
            We deliver a wide range of digital services designed to meet modern business needs. From cloud solutions to cybersecurity and enterprise support, our services focus on innovation, stability, and performance.
          </p>
        </motion.div>

        {/* Connectivity Section */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-8 rounded-2xl shadow-md"
        >
          <h2 className="text-2xl font-semibold text-green-700 mb-4">Connectivity Solutions</h2>
          <p className="text-gray-700">
            Stay connected with our reliable broadband, fibre, and wireless connectivity options. Engineered for speed, security, and uptime — our connectivity offerings keep your business running without interruption.
          </p>
        </motion.div>

        {/* Contact Center Solutions Section (Your Added Code) */}
        <motion.div
          variants={fadeUp}
          className="bg-white p-10 rounded-2xl shadow-lg"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-center mb-4 text-green-800">
            Customer-Centric Digital Solutions
          </h1>
          <p className="text-center text-lg text-gray-600 mb-10">
            Our digital offers start from the needs and wants of you, our customer. As technology advances and users evolve, we tailor our service scope to meet the complex demands of businesses and users.
          </p>

          <div className="bg-gray-50 p-8 rounded-lg shadow-inner">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Evolving with Technology</h2>
            <p className="text-gray-700">
              As a digital company, we are always evolving and adapting as technology evolves. Our evolution is driven by skilled and experienced personnel committed to delivering solutions that are not only current but also future-proof.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
