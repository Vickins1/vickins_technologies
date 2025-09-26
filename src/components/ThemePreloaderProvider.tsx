
"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import Preloader from "./Preloader";

interface ThemeContextType {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within ThemePreloaderProvider");
  }
  return context;
}

interface ThemePreloaderProviderProps {
  children: ReactNode;
}

export default function ThemePreloaderProvider({ children }: ThemePreloaderProviderProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isPreloaderVisible, setIsPreloaderVisible] = useState(true);

  // Set light theme as default on initial render
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");
    setIsDarkMode(false);
  }, []);

  // Hide preloader after 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPreloaderVisible(false);
    }, 2000); // Adjust as needed

    return () => clearTimeout(timer);
  }, []);

  const toggleTheme = () => {
    const newTheme = isDarkMode ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {isPreloaderVisible && <Preloader isDarkMode={isDarkMode} />}
      {children}
    </ThemeContext.Provider>
  );
}