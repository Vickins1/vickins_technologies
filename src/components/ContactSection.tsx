import { motion } from "framer-motion";
import { useState } from "react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { EnvelopeIcon, PhoneIcon, MapPinIcon, CheckCircleIcon } from "@heroicons/react/24/solid";

export default function ContactSection() {
  const [phone, setPhone] = useState<string | undefined>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>(null);

  const servicesList = [
    "E-commerce",
    "POS Systems",
    "Static Website",
    "API & Automation",
    "Blockchain & Crypto",
    "Dynamic Website",
    "Custom Software",
    "Mobile App",
    "Graphic Design",
    "Consultation",
  ];

  interface FormData {
    name: string;
    email: string;
    message: string;
  }

  type SubmitStatus = "success" | "error" | null;

  const handleServiceChange = (service: string) => {
    console.log("Checkbox clicked for service:", service);
    setSelectedServices((prev: string[]) =>
      prev.includes(service) ? prev.filter((s: string) => s !== service) : [...prev, service]
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prev: typeof formData) => ({
      ...prev,
      [name]: value,
    }));
  };

  interface ContactRequestBody extends FormData {
    phone: string | undefined;
    services: string[];
  }

  const handleContactSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    if (selectedServices.length === 0) {
      setSubmitStatus("error");
      alert("Please select at least one service.");
      setIsSubmitting(false);
      return;
    }

    try {
      const body: ContactRequestBody = {
        ...formData,
        phone,
        services: selectedServices,
      };

      const response: Response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setPhone("");
        setSelectedServices([]);
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      id="contact"
      className="py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Let’s Connect and Innovate Together</h2>
      <p className="text-center mb-12 text-lg">
        Reach out to discuss how we can transform your business with our expertise.
      </p>
      <div className="max-w-4xl mx-auto bg-[var(--card-bg)] p-8 rounded-xl shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="flex items-center"
              >
                <EnvelopeIcon className="h-6 w-6 text-[var(--button-bg)] mr-3" />
                <a
                  href="mailto:info@vickinstech.com"
                  className="hover:text-[var(--button-bg)] transition duration-300"
                >
                  info@vickinstechnologies.com
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex items-center"
              >
                <PhoneIcon className="h-6 w-6 text-[var(--button-bg)] mr-3" />
                <a
                  href="tel:+254123456789"
                  className="hover:text-[var(--button-bg)] transition duration-300"
                >
                  +254 794 501 005
                </a>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex items-center"
              >
                <MapPinIcon className="h-6 w-6 text-[var(--button-bg)] mr-3" />
                <span>Ruiru, Kenya</span>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
            <form className="space-y-4" onSubmit={handleContactSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Your Name"
                className="w-full p-3 rounded-lg border border-[var(--navbar-text)]/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] transition duration-300"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Your Email"
                className="w-full p-3 rounded-lg border border-[var(--navbar-text)]/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] transition duration-300"
                required
              />
              <PhoneInput
                placeholder="Your Phone Number"
                value={phone}
                onChange={setPhone}
                defaultCountry="KE"
                international
                countryCallingCodeEditable={false}
                className="w-full p-3 rounded-lg border border-[var(--navbar-text)]/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] transition duration-300"
              />
              <h4 className="text-lg font-semibold mb-2">Interested Services</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-40 overflow-y-auto pr-2">
                {servicesList.map((service, index) => (
                  <div key={service} className="flex items-center">
                    <input
                      id={`service-${index}`}
                      type="checkbox"
                      value={service}
                      checked={selectedServices.includes(service)}
                      onChange={() => handleServiceChange(service)}
                      className="hidden"
                    />
                    <label
                      htmlFor={`service-${index}`}
                      className="flex items-center cursor-pointer select-none text-base w-full p-2 rounded-lg hover:bg-[var(--card-bg)]/50 transition-all duration-200"
                    >
                      <span
                        className={`w-5 h-5 mr-3 border-2 rounded flex items-center justify-center transition-all duration-200 ${
                          selectedServices.includes(service)
                            ? "bg-[var(--button-bg)] border-[var(--button-bg)]"
                            : "border-[var(--navbar-text)]/40"
                        }`}
                      >
                        <CheckCircleIcon
                          className={`h-4 w-4 ${
                            selectedServices.includes(service) ? "text-white" : "text-[var(--navbar-text)]/40"
                          } transition-all duration-200`}
                        />
                      </span>
                      <span className="text-[var(--navbar-text)]">{service}</span>
                    </label>
                  </div>
                ))}
              </div>
              <p className="text-sm text-[var(--navbar-text)]">
                Selected Services: {selectedServices.length > 0 ? selectedServices.join(", ") : "None"}
              </p>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Your Message"
                className="w-full p-3 rounded-lg border border-[var(--navbar-text)]/20 bg-transparent focus:outline-none focus:ring-2 focus:ring-[var(--button-bg)] h-40 resize-none transition duration-300"
                required
              />
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className={`bg-[var(--button-bg)] text-[var(--navbar-text)] px-8 py-3 rounded-full w-full hover:opacity-90 transition duration-300 shadow-md font-semibold ${
                  isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                }`}
                whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
              {submitStatus === "success" && (
                <p className="text-green-500 text-center">Message sent successfully!</p>
              )}
              {submitStatus === "error" && (
                <p className="text-red-500 text-center">Error sending message. Please try again.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}