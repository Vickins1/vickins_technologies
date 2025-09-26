"use client";

import { useState, useEffect } from "react"; // Add useEffect
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import ProcessSection from "../components/ProcessSection";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import TechnologySection from "../components/TechnologySection";
import ClientsSection from "../components/ClientsSection";
import PricingSection from "../components/PricingSection";
import ContactSection from "../components/ContactSection";

export default function Home() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Set light theme as default on initial render
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    setIsDarkMode(false);
  }, []); // Empty dependency array to run once on mount

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev);

  return (
    <div className="min-h-screen font-[var(--font-sans)]">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} isDarkMode={isDarkMode} toggleSidebar={toggleSidebar} />

      <main className="container mx-auto px-4 py-12">
        <HeroSection />
        <ProcessSection />
        <AboutSection />
        <ServicesSection />
        <TechnologySection />
        <ClientsSection />
        <PricingSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}