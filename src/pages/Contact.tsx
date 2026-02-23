import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, Check } from "lucide-react";
import toast from "react-hot-toast";
import { fadeUp, staggerContainer } from "../utils/animations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: ""
  });

  const [errors, setErrors] = useState<any>({});
  const [inlineError, setInlineError] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Auto-dismiss inline error
  useEffect(() => {
    if (inlineError) {
      const timer = setTimeout(() => setInlineError(""), 4000);
      return () => clearTimeout(timer);
    }
  }, [inlineError]);

  const validate = () => {
    const newErrors: any = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.match(/^\S+@\S+\.\S+$/))
      newErrors.email = "Valid email required";
    if (!formData.service) newErrors.service = "Please select a service";
    if (!formData.message.trim()) newErrors.message = "Project details required";
    return newErrors;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      toast.error("Please fix the highlighted fields.");
      return;
    }

    setIsLoading(true);
    setErrors({});

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData
        }).toString()
      });

      if (!response.ok) throw new Error("Submission failed");

      toast.success("Message sent successfully 🚀");
      setIsSubmitted(true);

      setTimeout(() => setIsSubmitted(false), 3000);

      setFormData({
        name: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: ""
      });

    } catch (error) {
      setInlineError("Something went wrong. Please try again.");
      toast.error("Submission failed ❌");
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen flex items-center justify-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 120 }}
          className="text-center"
        >
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
          <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
          <p>Your message has been sent successfully.</p>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      {/* Required Hidden Inputs */}
      <input type="hidden" name="form-name" value="contact" />
      <input type="hidden" name="bot-field" />

      {/* NAME */}
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Full Name *"
          className={`input ${errors.name ? "border-red-500" : ""}`}
        />
        {errors.name && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm">
            {errors.name}
          </motion.p>
        )}
      </div>

      {/* EMAIL */}
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email *"
          className={`input ${errors.email ? "border-red-500" : ""}`}
        />
        {errors.email && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm">
            {errors.email}
          </motion.p>
        )}
      </div>

      {/* MESSAGE */}
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Project Details *"
          className={`input ${errors.message ? "border-red-500" : ""}`}
        />
        {errors.message && (
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-red-500 text-sm">
            {errors.message}
          </motion.p>
        )}
      </div>

      {/* Animated Inline Error */}
      <AnimatePresence>
        {inlineError && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="bg-red-100 text-red-700 p-3 rounded-lg"
          >
            {inlineError}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="submit"
        disabled={isLoading}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-green-600 text-white py-3 rounded-lg w-full"
      >
        {isLoading ? "Sending..." : "Send Message"}
      </motion.button>
    </form>
  );
};

export default Contact;