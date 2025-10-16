import { FC } from "react";
import { motion } from "framer-motion";
import { FaXTwitter, FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaWhatsapp } from "react-icons/fa6";

const Footer: FC = () => {
  return (
    <footer className="bg-[var(--navbar-bg)] text-[var(--navbar-text)] py-8 sm:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--card-bg)]/20 to-transparent" />
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Vickins Technologies</h3>
            <p className="text-xs sm:text-sm leading-relaxed">
              Your trusted partner for innovative IT solutions in Kenya. We empower businesses with cutting-edge technology and exceptional service.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-1 sm:space-y-2 text-xs sm:text-sm">
              {["Home", "Services", "About", "Contact"].map((item) => (
                <motion.li
                  key={item}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <a href={`#${item.toLowerCase()}`} className="hover:text-[var(--button-bg)] transition duration-300">
                    {item}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Connect With Us</h3>
            <div className="flex justify-center md:justify-start space-x-3 sm:space-x-4">
              {[
                { Icon: FaXTwitter, href: "https://x.com/vickins_tech" },
                { Icon: FaWhatsapp, href: "https://wa.me/254794501005" },
                { Icon: FaFacebook, href: "https://www.facebook.com/profile.php?id=61569016955138" },
                { Icon: FaLinkedin, href: "https://www.linkedin.com/in/kelvinthuo" },
                { Icon: FaInstagram, href: "https://instagram.com/vickins.technologies" },
                { Icon: FaGithub, href: "https://github.com/vickins1" },
              ].map(({ Icon, href }, index) => (
                <motion.a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 sm:p-2 hover:bg-[var(--card-bg)] hover:bg-opacity-30 rounded-full transition duration-300"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15, delay: 0.1 * index }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                >
                  <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        <motion.div
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-[var(--navbar-text)]/20 text-center text-xs sm:text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p>
            &copy; 2021 - {new Date().getFullYear()} Vickins Technologies. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 sm:space-x-6 mt-2">
            <a href="/policy" className="hover:text-[var(--button-bg)] transition duration-300">Privacy Policy</a>
            <a href="/terms" className="hover:text-[var(--button-bg)] transition duration-300">Terms of Service</a>
            <a href="mailto:info@vickinstechnologies.com" className="hover:text-[var(--button-bg)] transition duration-300">Contact Us</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;