"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { CheckCircleIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface PricingPlan {
  name: string;
  description: string;
  price: string;
  features: string[];
  idealFor?: string;
  popular?: boolean;
}

const pricingPlans: PricingPlan[] = [
  {
    name: "E-commerce",
    description: "Complete online store",
    price: "KES 100,000+",
    features: [
      "Free Domain Name",
      "Enhanced Security",
      "5 Professional Emails",
      "Custom Store Design",
      "SEO Optimization",
      "Google Business Setup",
      "M-Pesa Integration",
      "Card Payments",
      "Admin Dashboard",
      "Sales Analytics",
      "24/7 Support",
    ],
    popular: true,
  },
  {
    name: "POS Systems",
    description: "Retail & payment solutions",
    price: "KES 80,000+",
    features: [
      "Inventory Management",
      "M-Pesa Integration",
      "Card Payments",
      "Sales Reporting",
      "Customer Management",
      "Multi-Device Sync",
      "Barcode Scanning",
      "Offline Mode",
      "Custom Dashboard",
      "24/7 Support",
    ],
    idealFor: "Retail, Restaurants",
  },
  {
    name: "Static Website",
    description: "Perfect for small businesses",
    price: "KES 50,000+",
    features: [
      "Free Domain Name",
      "Website Security",
      "Free Lifetime Hosting",
      "1-5 Pages",
      "5 Professional Emails",
      "Fast Loading Speed",
      "Unique Designs",
      "SEO Optimization",
      "Google Business Setup",
      "24/7 Support",
    ],
  },
  {
    name: "API & Automation",
    description: "Seamless integrations",
    price: "KES 30,000+",
    features: [
      "Payment Gateways",
      "Crypto Exchange APIs",
      "Social Media APIs",
      "Email Automation",
      "WhatsApp Integration",
      "Custom Workflows",
      "API Security",
      "Performance Optimization",
      "Analytics Tracking",
      "24/7 Support",
    ],
    idealFor: "E-commerce, FinTech",
  },
  {
    name: "Blockchain & Crypto",
    description: "Crypto websites & dApps",
    price: "KES 150,000+",
    features: [
      "Wallet Integration",
      "Smart Contracts",
      "Free Domain Name",
      "Token Presale Pages",
      "Web3 Authentication",
      "Staking Dashboards",
      "SEO Optimization",
      "Security Audits",
      "Real-time Analytics",
      "24/7 Support",
    ],
    idealFor: "DeFi, NFTs, Tokens",
  },
  {
    name: "Dynamic Website",
    description: "Database-driven sites",
    price: "KES 100,000+",
    features: [
      "CMS Integration",
      "Database Management",
      "Free Domain",
      "Content Updates",
      "User Management",
      "Advanced Search",
      "Custom Design",
      "Fast Performance",
      "Auto Backups",
      "24/7 Support",
    ],
    idealFor: "News, Education, Forums, Directories",
  },
  {
    name: "Custom Software",
    description: "Tailored business apps",
    price: "KES 200,000+",
    features: [
      "CRM Development",
      "Inventory Systems",
      "Workflow Automation",
      "Database Integration",
      "User Authentication",
      "Scalable Architecture",
      "Real-time Analytics",
      "Cloud Deployment",
      "Custom UI/UX",
      "24/7 Support",
    ],
    idealFor: "Enterprises, Startups",
  },
  {
    name: "Mobile App",
    description: "iOS & Android apps",
    price: "KES 250,000+",
    features: [
      "Native iOS & Android",
      "5 Professional Emails",
      "Fast Performance",
      "Store Publishing",
      "User Authentication",
      "Push Notifications",
      "Analytics Integration",
      "Real-time Sync",
      "API Integration",
      "24/7 Support",
    ],
  },
  {
    name: "Graphic Design",
    description: "Branding & digital assets",
    price: "KES 5,000+",
    features: [
      "Logo & Brand Identity",
      "Social Media Graphics",
      "Marketing Materials",
      "Print Design",
      "UI/UX Mockups",
      "Custom Illustrations",
      "High-Resolution Files",
      "Revisions Included",
      "Fast Turnaround",
      "24/7 Support",
    ],
  },
];

export default function Pricing() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideWidth, setSlideWidth] = useState(0);
  const slideshowRef = useRef<HTMLDivElement | null>(null);

  // Double the pricing plans for seamless looping
  const extendedPricingPlans = [...pricingPlans, ...pricingPlans];

  useEffect(() => {
    const handleResize = () => {
      if (slideshowRef.current) {
        const firstSlide = slideshowRef.current.querySelector('.flex > div') as HTMLElement | null;
        if (firstSlide) {
          setSlideWidth(firstSlide.getBoundingClientRect().width);
        }
        // Adjust current slide to stay within the first set on resize
        setCurrentSlide((prev) => prev % pricingPlans.length);
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial calculation

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => {
      let next = prev - 1;
      if (next < 0) {
        next = extendedPricingPlans.length + next; // Wrap to end
        // Schedule reset after transition
        setTimeout(() => {
          setCurrentSlide(next % pricingPlans.length);
        }, 800); // Match transition duration
      }
      return next;
    });
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => {
      let next = prev + 1;
      if (next >= extendedPricingPlans.length) {
        next = next % extendedPricingPlans.length;
        // Schedule reset after transition
        setTimeout(() => {
          setCurrentSlide(next);
        }, 800); // Match transition duration
      } else if (next >= pricingPlans.length) {
        // Schedule reset to start of first set after transition
        setTimeout(() => {
          setCurrentSlide(next - pricingPlans.length);
        }, 800); // Match transition duration
      }
      return next;
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      id="pricing"
      className="py-12 bg-[var(--card-bg)] rounded-lg shadow-lg relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--button-bg)]/10 to-transparent opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-4">Our Pricing Plans</h2>
        <p className="text-center mb-8 text-base">Professional Solutions Tailored to Your Business Needs</p>
        <div className="relative overflow-hidden" ref={slideshowRef}>
          <motion.div
            className="flex"
            animate={{ x: -currentSlide * slideWidth }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }} // Smooth cubic-bezier easing
          >
            {extendedPricingPlans.map((plan, index) => (
              <motion.div
                key={`${plan.name}-${index}`}
                className="flex-shrink-0 w-11/12 sm:w-5/12 md:w-4/12 lg:w-3/12 px-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}
              >
                <div
                  className={`relative p-4 bg-[var(--navbar-bg)]/80 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
                    plan.popular ? "border-2 border-[var(--button-bg)]" : ""
                  }`}
                >
                  {plan.popular && (
                    <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[var(--button-bg)] text-[var(--navbar-text)] text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold mb-1 text-center">{plan.name}</h3>
                  <p className="text-center text-xs mb-2 opacity-80">{plan.description}</p>
                  <p className="text-xl font-bold text-center mb-3 text-[var(--button-bg)]">
                    From {plan.price}
                  </p>
                  <ul className="space-y-2 mb-4 max-h-48 overflow-y-auto">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center text-xs">
                        <CheckCircleIcon className="h-4 w-4 text-[var(--button-bg)] mr-1.5" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {plan.idealFor && (
                    <p className="text-center text-xs mb-3">
                      <span className="font-semibold">Ideal for:</span> {plan.idealFor}
                    </p>
                  )}
                  <motion.a
                    href="#contact"
                    className="block text-center bg-[var(--button-bg)] text-[var(--navbar-text)] px-4 py-2 rounded-full hover:opacity-90 transition duration-300 shadow-sm text-sm font-semibold"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    Get Started
                  </motion.a>
                </div>
              </motion.div>
            ))}
          </motion.div>
          {/* Navigation buttons */}
          <motion.button
            onClick={goToPrevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-[var(--button-bg)] text-[var(--navbar-text)] p-2 rounded-full shadow-md hover:opacity-90 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ChevronLeftIcon className="h-5 w-5" />
          </motion.button>
          <motion.button
            onClick={goToNextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[var(--button-bg)] text-[var(--navbar-text)] p-2 rounded-full shadow-md hover:opacity-90 transition duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <ChevronRightIcon className="h-5 w-5" />
          </motion.button>
        </div>
      </div>
    </motion.section>
  );
}