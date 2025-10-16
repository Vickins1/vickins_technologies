import { motion } from "framer-motion";

export default function ProcessSection() {
  const processSteps = [
    { number: "01", title: "Discovery", description: "We start by understanding your unique business needs and challenges, ensuring that we tailor our solutions to your specific goals." },
    { number: "02", title: "Planning", description: "Based on the discovery phase, we plan the best approach using the latest technology to optimize your business operations." },
    { number: "03", title: "Execute", description: "Our team of experts efficiently implements the solutions, ensuring smooth integration and minimal disruption to your operations." },
    { number: "04", title: "Deliver", description: "We deliver high-quality results, ensuring that the solutions meet your expectations and drive measurable growth for your business." },
  ];

  return (
    <motion.section id="process" className="py-8 sm:py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">How Our IT Solutions Drive Your Business Growth</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
        {processSteps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="text-center p-4 sm:p-6 bg-[var(--card-bg)] rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[var(--button-bg)] text-[var(--navbar-text)] flex items-center justify-center text-lg sm:text-xl font-bold mb-3 sm:mb-4 mx-auto">
              {step.number}
            </div>
            <h3 className="text-lg sm:text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-sm sm:text-base">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}