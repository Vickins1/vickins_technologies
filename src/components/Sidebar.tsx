import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface SidebarProps {
  isOpen: boolean;
  isDarkMode: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, isDarkMode, toggleSidebar }: SidebarProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: '-100%', opacity: 0 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
          className="fixed top-0 left-0 h-full w-64 sm:w-72 bg-[var(--navbar-bg)] text-[var(--navbar-text)] z-50 p-6 sm:p-8 shadow-[4px_0_8px_rgba(0,0,0,0.2)] backdrop-blur-sm bg-opacity-95 md:hidden"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-6 sm:mb-8"
          >
            <Link href="/" onClick={toggleSidebar}>
              <Image
                src={isDarkMode ? '/logo1.png' : '/logo2.png'}
                alt="Vickins Technologies Logo"
                width={100}
                height={40}
                className="sm:w-[120px] sm:h-[48px] transition-transform duration-300 hover:scale-105"
              />
            </Link>
          </motion.div>
          <motion.button
            onClick={toggleSidebar}
            className="absolute top-4 right-4 p-1 sm:p-2 hover:bg-[var(--card-bg)] hover:bg-opacity-30 rounded-full transition duration-300"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <svg className="h-5 w-5 sm:h-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>
          <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-6">
            {['Home', 'Process', 'About', 'Services', 'Pricing', 'Clients', 'Contact'].map((item) => (
              <motion.li
                key={item}
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * (['Home', 'Process', 'About', 'Services', 'Technology', 'Clients', 'Contact'].indexOf(item) + 1), duration: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="relative text-base sm:text-lg font-semibold tracking-wide text-[var(--navbar-text)] hover:text-[var(--button-bg)] transition duration-300 group"
                  onClick={toggleSidebar}
                >
                  {item}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[var(--button-bg)] transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
}