import { motion } from "framer-motion";
import { DevicePhoneMobileIcon, GlobeAltIcon, TvIcon } from "@heroicons/react/24/solid";

export default function TechnologySection() {
  const platforms = [
    { name: "Mobile", icon: DevicePhoneMobileIcon },
    { name: "Web", icon: GlobeAltIcon },
    { name: "TV", icon: TvIcon },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
      id="technology"
      className="py-8 sm:py-16 text-center"
    >
      <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12">We Deliver Top-Notch Solutions Built on Trust</h2>
      <p className="mb-6 sm:mb-8 text-base sm:text-lg">We are committed to delivering the best solutions with a foundation of trust and reliability. Our team utilizes the latest technologies to ensure top performance across platforms.</p>
      <div className="flex justify-center space-x-8 sm:space-x-12">
        {platforms.map((platform, index) => (
          <motion.div
            key={platform.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center group"
          >
            <platform.icon className="h-12 w-12 sm:h-16 sm:w-16 text-[var(--button-bg)] mb-2 group-hover:scale-110 transition-transform duration-300" />
            <span className="text-lg sm:text-xl font-semibold">{platform.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}