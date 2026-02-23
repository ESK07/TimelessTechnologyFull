import { useState } from "react";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  /* ------------------ HANDLE CHANGE ------------------ */

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  /* ------------------ VALIDATION ------------------ */

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^[0-9+\-\s()]{7,15}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid phone number";
    }
    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Project details are required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  /* ------------------ HANDLE SUBMIT ------------------ */

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    setIsLoading(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...formData,
        }).toString(),
      });

      if (response.ok) {
        toast.success("Message sent successfully ");

        setFormData({
          name: "",
          email: "",
          phone: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });

        setErrors({});
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      toast.error("Something went wrong ❌");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* 🔥 Hidden Netlify Form (REQUIRED) */}
        <form name="contact" data-netlify="true" hidden>
          <input type="text" name="name" />
          <input type="email" name="email" />
          <input type="text" name="phone" />
          <input type="text" name="company" />
          <input type="text" name="service" />
          <input type="text" name="budget" />
          <textarea name="message"></textarea>
        </form>

        {/* Top Contact Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <ContactCard icon={<Mail />} title="Email Us" text="sales@timelesstechnology.co.zw" sub="We'll respond within 24 hours" />
          <ContactCard icon={<Phone />} title="Call Us" text="+263 867 722 2444" sub="Monday to Friday, 8 AM - 5 PM" />
          <ContactCard icon={<MapPin />} title="Visit Us" text="Avondale, Harare, Zimbabwe" sub="Schedule an appointment" />
          <ContactCard icon={<Clock />} title="Business Hours" text="Mon - Fri: 8 AM - 5 PM" sub="Weekend support available" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* LEFT SIDE */}
          <div>
            <h2 className="text-4xl font-bold mb-6">Let's Start a Conversation</h2>

            <p className="text-gray-600 mb-8">
              Whether you have a specific project in mind or just want to explore possibilities,
              we're here to help. Fill out the form and we'll get back to you with a detailed proposal.
            </p>

            <Feature text="Free Consultation" sub="Initial project assessment at no cost" />
            <Feature text="Detailed Proposal" sub="Comprehensive project plan and timeline" />
            <Feature text="Transparent Pricing" sub="Clear breakdown of costs and deliverables" />
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="bg-white p-8 rounded-xl shadow-md border">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Full Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  error={errors.name}
                />

                <Input
                  label="Email Address *"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  error={errors.email}
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input
                  label="Phone Number *"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  error={errors.phone}
                />

                <Input
                  label="Company Name"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                />

                <Select
                  label="Service Interested In *"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  error={errors.service}
                  options={["Web Development", "Internet Services", "Cloud Services", "Connectivity"]}
                />
              </div>

              <Select
                label="Project Budget"
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                options={["$1,000 - $5,000", "$5,000 - $10,000", "$10,000+"]}
              />

              <TextArea
                label="Project Details *"
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={errors.message}
              />

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-medium"
              >
                {isLoading ? "Sending..." : "Send Message "}
              </button>

            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- COMPONENTS ---------- */

function ContactCard({ icon, title, text, sub }: any) {
  return (
    <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center shadow-sm">
      <div className="flex justify-center mb-4 text-green-600">{icon}</div>
      <h4 className="font-semibold mb-2">{title}</h4>
      <p className="text-gray-700 text-sm">{text}</p>
      <p className="text-gray-500 text-xs mt-1">{sub}</p>
    </div>
  );
}

function Feature({ text, sub }: any) {
  return (
    <div className="flex items-start gap-3 mb-6">
      <CheckCircle className="text-green-600 mt-1" size={20} />
      <div>
        <p className="font-semibold">{text}</p>
        <p className="text-gray-500 text-sm">{sub}</p>
      </div>
    </div>
  );
}

function Input({ label, error, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        {...props}
        className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "focus:ring-green-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function Select({ label, options, error, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        {...props}
        className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "focus:ring-green-500"
        }`}
      >
        <option value="">Select option</option>
        {options.map((opt: string) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}

function TextArea({ label, error, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <textarea
        {...props}
        rows={4}
        className={`w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:ring-red-500"
            : "focus:ring-green-500"
        }`}
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}