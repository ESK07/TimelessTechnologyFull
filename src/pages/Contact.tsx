import { useState } from "react";
import toast from "react-hot-toast";
import { Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "YOUR_ACCESS_KEY_HERE",
          ...formData,
        }),
      });

      const data = await response.json();

      if (data.success) {
        toast.success("Message sent successfully 🚀");

        setFormData({
          name: "",
          email: "",
          company: "",
          service: "",
          budget: "",
          message: "",
        });
      } else {
        throw new Error("Submission failed");
      }
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again.");
      toast.error("Something went wrong ❌");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Top Contact Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          <ContactCard
            icon={<Mail className="text-green-600" />}
            title="Email Us"
            text="sales@timelesstechnology.co.zw"
            sub="We'll respond within 24 hours"
          />
          <ContactCard
            icon={<Phone className="text-green-600" />}
            title="Call Us"
            text="+263 867 722 2444"
            sub="Monday to Friday, 8 AM - 5 PM"
          />
          <ContactCard
            icon={<MapPin className="text-green-600" />}
            title="Visit Us"
            text="Avondale, Harare, Zimbabwe"
            sub="Schedule an appointment"
          />
          <ContactCard
            icon={<Clock className="text-green-600" />}
            title="Business Hours"
            text="Mon - Fri: 8 AM - 5 PM"
            sub="Weekend support available"
          />
        </div>

        {/* Main Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side */}
          <div>
            <h2 className="text-4xl font-bold mb-6">
              Let's Start a Conversation
            </h2>

            <p className="text-gray-600 mb-8">
              Whether you have a specific project in mind or just want to explore possibilities,
              we're here to help. Fill out the form and we'll get back to you
              with a detailed proposal.
            </p>

            <Feature text="Free Consultation" sub="Initial project assessment at no cost" />
            <Feature text="Detailed Proposal" sub="Comprehensive project plan and timeline" />
            <Feature text="Transparent Pricing" sub="Clear breakdown of costs and deliverables" />
          </div>

          {/* Right Side Form */}
          <div className="bg-white p-8 rounded-xl shadow-md border">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Full Name *" name="name" value={formData.name} onChange={handleChange} />
                <Input label="Email Address *" name="email" type="email" value={formData.email} onChange={handleChange} />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Input label="Company Name" name="company" value={formData.company} onChange={handleChange} />

                <Select
                  label="Service Interested In *"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
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
              />

              {errorMessage && (
                <div className="bg-red-100 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {errorMessage}
                </div>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg transition font-medium"
              >
                {isLoading ? "Sending..." : "Send Message ✈️"}
              </button>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}

/* ---------- Reusable Components ---------- */

function ContactCard({ icon, title, text, sub }: any) {
  return (
    <div className="bg-green-50 p-6 rounded-xl border border-green-200 text-center shadow-sm">
      <div className="flex justify-center mb-4">{icon}</div>
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

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        {...props}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}

function Select({ label, options, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        {...props}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      >
        <option value="">Select option</option>
        {options.map((opt: string) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function TextArea({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <textarea
        {...props}
        rows={4}
        className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
    </div>
  );
}