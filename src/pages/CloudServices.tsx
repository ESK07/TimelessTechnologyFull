import { useState } from "react";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const CloudServices = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<string>("");

  const openModal = (plan: string) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const closeModal = () => setShowModal(false);

  const packages = [
    {
      name: "Microsoft 365 Business Basic",
      features: [
        "Web and mobile versions of Microsoft 365 apps only",
        "Chat, call, meet up to 300 attendees",
        "1 TB of cloud storage per user",
        "Business-class email",
        "Standard security",
        "Anytime phone and web support",
      ],
      apps: [
        "Word",
        "Excel",
        "PowerPoint",
        "Teams",
        "Outlook",
        "OneDrive",
        "SharePoint",
        "Exchange",
      ],
    },
    {
      name: "Microsoft 365 Business Standard",
      features: [
        "Everything in Microsoft 365 Business Basic, plus:",
        "Desktop versions of Microsoft 365 apps with premium features",
        "Easily host webinars",
        "1 TB of cloud storage per user",
        "Attendee registration and reporting tools",
        "Manage customer appointments",
      ],
      apps: [
        "Word",
        "Excel",
        "PowerPoint",
        "Teams",
        "Outlook",
        "OneDrive",
        "SharePoint",
        "Exchange",
        "Access (PC Only)",
        "Publisher (PC Only)",
      ],
    },
    {
      name: "Microsoft 365 Business Premium",
      features: [
        "Everything in Microsoft 365 Business Standard, plus:",
        "Advanced security",
        "Chat, call, meet up to 300 attendees",
        "Access and data control",
        "Cyberthreat protection",
      ],
      apps: [
        "Word",
        "Excel",
        "PowerPoint",
        "Teams",
        "Outlook",
        "OneDrive",
        "SharePoint",
        "Exchange",
        "Access",
        "Publisher",
        "Intune",
        "Azure",
      ],
    },
    {
      name: "Microsoft 365 Apps for Business",
      features: [
        "Desktop versions of Microsoft 365 apps with premium features",
        "1 TB of cloud storage per user",
        "Standard security",
        "Anytime phone and web support",
      ],
      apps: [
        "Word",
        "Excel",
        "PowerPoint",
        "Teams",
        "Outlook",
        "OneDrive",
        "SharePoint",
        "Exchange",
      ],
    },
  ];

  return (
    <div className="relative bg-gray-50 text-gray-800 pt-28 pb-20 overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-80 bg-gradient-to-b from-green-100 via-transparent to-transparent opacity-70"></div>
        <svg
          className="absolute bottom-0 left-0 w-full text-green-100 opacity-40"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="currentColor"
            d="M0,96L48,85.3C96,75,192,53,288,64C384,75,480,117,576,138.7C672,160,768,160,864,138.7C960,117,1056,75,1152,69.3C1248,64,1344,96,1392,112L1440,128V320H0Z"
          ></path>
        </svg>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        {/* Header Section */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl font-bold text-green-700 mb-4">
            CLOUD SERVICES
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            With strategic partnerships across multiple cloud service providers,
            our cloud services provide a rich experience for our enterprise
            customers, guaranteeing a productive environment for both your
            remote and local teams.
          </p>
        </motion.div>

        {/* Packages Section */}
        <div className="space-y-16">
          {packages.map((pkg, index) => (
            <motion.div
              key={index}
              className="relative bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-green-500 to-green-300 rounded-l-2xl"></div>
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                <h2 className="text-2xl font-semibold text-green-700">
                  {pkg.name}
                </h2>
                <button
                  onClick={() => openModal(pkg.name)}
                  className="mt-4 lg:mt-0 inline-block px-6 py-2 bg-green-600 text-white rounded-full text-sm font-medium hover:bg-green-700 transition"
                >
                  Request Quote
                </button>
              </div>

              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                {pkg.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
              <div>
                <p className="font-medium text-gray-800 mb-2">
                  Apps and Services:
                </p>
                <div className="flex flex-wrap gap-2">
                  {pkg.apps.map((app, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Section */}
        <motion.div
          className="mt-20"
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-semibold text-green-700 mb-6">
            Frequently Asked Questions
          </h2>
          <ul className="space-y-4 text-gray-700">
            <li>
              <strong>How reliable is Microsoft 365?</strong>  
              All Microsoft 365 services are available with a 99.9% uptime,
              financially backed service guarantee.
            </li>
            <li>What happened to Office365 Business Plans?</li>
            <li>
              How many devices can I install Microsoft 365 apps on if I have a
              Microsoft 365 Business Plan?
            </li>
            <li>Can I switch to other Microsoft 365 Business Plans?</li>
            <li>
              Does Microsoft 365 Business support domain-based email addresses?
            </li>
            <li>Does Microsoft 365 Business work without internet access?</li>
            <li>
              Can I mix and match different Microsoft 365 Business Plans?
            </li>
            <li>
              Can I purchase Microsoft 365 add-on services to supplement my
              subscription?
            </li>
            <li>Can I cancel my subscription at any time?</li>
            <li>
              What happens to my data when I cancel my subscription?
            </li>
            <li>
              How many users can I host for online meetings and video calls
              using Microsoft Teams?
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Gradient Divider */}
      <div className="mt-20 h-1 w-full bg-gradient-to-r from-green-500 via-green-300 to-green-500 opacity-60"></div>

      {/* Quote Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
          <motion.div
            className="bg-white rounded-2xl shadow-xl max-w-md w-full p-6 relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-lg"
            >
              ✕
            </button>
            <h3 className="text-2xl font-semibold text-green-700 mb-4">
              Request Quote
            </h3>
            <p className="text-gray-700 mb-4">
              You are requesting a quote for:{" "}
              <span className="font-medium">{selectedPlan}</span>
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-2 border rounded-md"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 border rounded-md"
              />
              <textarea
                placeholder="Additional Details"
                className="w-full p-2 border rounded-md"
                rows={3}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-2 rounded-md hover:bg-green-700 transition"
              >
                Submit Request
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default CloudServices;
