import Link from 'next/link';
import Image from 'next/image';
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
  toggleSidebar: () => void;
}

export default function Navbar({ isDarkMode, toggleTheme, toggleSidebar }: NavbarProps) {
  return (
    <nav className="bg-[var(--navbar-bg)] text-[var(--navbar-text)] py-3 sticky top-0 z-50 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05, rotate: 2 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Image
              src={isDarkMode ? '/logo1.png' : '/logo2.png'}
              alt="Vickins Technologies Logo"
              width={100}
              height={40}
              className="transition-transform duration-300"
            />
          </motion.div>
        </Link>
        <div className="flex items-center space-x-8">
          <motion.button
            onClick={toggleTheme}
            className="p-2 hover:bg-[var(--card-bg)] hover:bg-opacity-30 rounded-full transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <AnimatePresence mode="wait">
              {isDarkMode ? (
                <motion.div
                  key="sun"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <SunIcon className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <MoonIcon className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
          <motion.button
            onClick={toggleSidebar}
            className="md:hidden p-2 hover:bg-[var(--card-bg)] hover:bg-opacity-30 rounded-full transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 15 }}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </motion.button>
          <ul className="hidden md:flex space-x-8 items-center">
            {['Home', 'Process', 'About', 'Services', 'Pricing', 'Clients', 'Contact'].map((item) => (
              <motion.li
                key={item}
                whileHover={{ y: -2 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <Link
                  href={`#${item.toLowerCase()}`}
                  className="relative text-sm font-semibold tracking-wide text-[var(--navbar-text)] hover:text-[var(--button-bg)] transition duration-300 group"
                >
                  {item}
                  <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-[var(--button-bg)] transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}