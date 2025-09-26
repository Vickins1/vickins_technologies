import { motion } from "framer-motion";
import {
  CloudIcon,
  ComputerDesktopIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  ArrowPathIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";

export default function ServicesSection() {
  const services = [
    { title: "IT Consulting", description: "Our IT consulting services guide you through complex IT decisions, offering customized solutions to improve your business operations and technology infrastructure.", icon: ComputerDesktopIcon },
    { title: "Cloud Computing", description: "We provide scalable cloud computing solutions that enhance your business's flexibility and efficiency, allowing you to store and manage data seamlessly across multiple platforms.", icon: CloudIcon },
    { title: "Web Development", description: "Our expert web development team builds user-friendly, responsive, and feature-rich websites tailored to your business needs, ensuring optimal user experiences.", icon: CodeBracketIcon },
    { title: "Applications Development", description: "Our expert Apps development team builds user-friendly, responsive, and feature-rich Applications tailored to your business needs, ensuring optimal user experiences.", icon: DevicePhoneMobileIcon },
    { title: "Business Reform", description: "We assist in transforming your business strategies, optimizing workflows, and adopting best practices to enhance performance and drive long-term success.", icon: ArrowPathIcon },
    { title: "Graphic Design", description: "Our creative team delivers professional graphic design services, creating visually striking logos, branding, marketing materials, and digital assets that captivate your audience.", icon: PencilSquareIcon },
    { title: "LeaseCaptain Platform", description: "Vickins Technologies is the mastermind behind LeaseCaptain.com, a cutting-edge digital platform revolutionizing the equipment leasing industry. We can do the same for your big idea — turning vision into reality!", icon: RocketLaunchIcon },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
      id="services"
      className="py-16"
    >
      <h2 className="text-4xl font-bold text-center mb-12">Looking for the Perfect IT Solution?</h2>
      <p className="text-center mb-8 text-lg">We Provide Tailored IT Solutions to Keep Your Business Ahead</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-[var(--card-bg)] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 hover:transform hover:-translate-y-2"
          >
            <service.icon className="h-10 w-10 text-[var(--button-bg)] mb-4 mx-auto" />
            <h3 className="text-xl font-semibold mb-2 text-center">{service.title}</h3>
            <p className="text-center mb-4">{service.description}</p>
            <a href="#" className="text-[var(--button-bg)] hover:underline block text-center font-semibold">Learn More</a>
          </motion.div>
        ))}
      </div>
      <div className="text-center mt-8">
        <a href="#" className="bg-[var(--button-bg)] text-[var(--navbar-text)] px-6 py-3 rounded-full hover:opacity-90 transition duration-300 shadow-md">
          View All Services
        </a>
      </div>
    </motion.section>
  );
}