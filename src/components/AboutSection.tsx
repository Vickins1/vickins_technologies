import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

function AnimatedCounter({
  target,
  label,
  delay = 0,
}: {
  target: number;
  label: string;
  delay?: number;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // 2 seconds
    const stepTime = Math.abs(Math.floor(duration / target));

    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= target) {
          clearInterval(timer);
        }
      }, stepTime);
    }, delay * 1000);

    return () => clearTimeout(timeout);
  }, [target, delay]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="text-center p-2 sm:p-4 bg-[var(--navbar-bg)]/50 rounded-lg"
    >
      <span className="text-2xl sm:text-4xl font-bold text-[var(--button-bg)]">{count}+</span>
      <p className="text-sm sm:text-base">{label}</p>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <motion.section id="about" className="py-8 sm:py-16 bg-[var(--card-bg)] rounded-lg shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--button-bg)]/10 to-transparent opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8 sm:mb-12">Empowering Your Future with Innovative Technology</h2>
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full md:w-1/2">
            <Image src="/about.jpg" alt="Vickins Technologies Team" width={600} height={400} className="w-full rounded-xl shadow-2xl object-cover transform hover:scale-105 transition-transform duration-500" />
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="w-full md:w-1/2">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4">Who We Are</h3>
            <p className="mb-4 text-base sm:text-lg">
              At Vickins Technologies, we are a passionate team of innovators with over 4 years of
              experience, dedicated to transforming businesses through cutting-edge software
              solutions and digital technologies. Our mission is to empower organizations in Kenya
              and beyond by delivering tailored IT solutions that drive measurable results.
            </p>
            <p className="mb-4 sm:mb-6 text-base sm:text-lg">
              With an 80% success rate in our solutions, we combine expertise, creativity, and a
              client-centric approach to deliver exceptional outcomes. From developing groundbreaking
              platforms like LeaseCaptain.com to providing strategic IT consulting, we are your
              trusted partner in navigating the digital landscape.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              <AnimatedCounter target={30} label="Projects Completed" />
              <AnimatedCounter target={20} label="Happy Clients" delay={0.2} />
              <AnimatedCounter target={4} label="Years of Experience" delay={0.4} />
              <AnimatedCounter target={400} label="Active Users" delay={0.6} />
              <AnimatedCounter target={80} label="Success Rate %" delay={0.8} />
              <AnimatedCounter target={10} label="Industries Served" delay={1.0} />
            </div>

            <a href="#contact" className="inline-block bg-[var(--button-bg)] text-[var(--navbar-text)] px-4 py-2 sm:px-6 sm:py-3 rounded-full hover:opacity-90 transition duration-300 shadow-md font-semibold">
              Partner with Us
            </a>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}