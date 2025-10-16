"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface PreloaderProps {
  isDarkMode: boolean;
}

export default function Preloader({ isDarkMode }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  // Explicitly type the particles state
  const [particles, setParticles] = useState<
    { left: string; animationDelay: string; animationDuration: string }[]
  >([]);

  // Generate particle styles on the client side
  useEffect(() => {
    const newParticles = [...Array(10)].map(() => ({
      left: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 2}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    }));
    setParticles(newParticles);

    // Hide preloader after 2 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center z-50 transition-all duration-700 ease-out ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ background: "var(--color-background)" }}
    >
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((style, i) => (
          <div
            key={i}
            className="absolute w-1 sm:w-2 h-1 sm:h-2 rounded-full opacity-20 animate-float"
            style={{
              ...style,
              backgroundColor: isDarkMode ? "rgba(59, 130, 246, 0.3)" : "rgba(107, 114, 128, 0.3)",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center gap-4 sm:gap-6 z-10">
        <div className="group">
          <Image
            src={isDarkMode ? "/logo1.png" : "/logo2.png"}
            alt="Vickins Technologies Logo"
            width={100}
            height={100}
            className="sm:w-[120px] sm:h-[120px] animate-float-logo group-hover:animate-float-logo-hover transition-all duration-300 cursor-default"
            priority
          />
        </div>
        <div className="flex items-center space-x-1">
          <span className="text-lg sm:text-xl font-medium" style={{ color: "var(--color-foreground)" }}>
            Vickins Technologies
          </span>
          <div className="flex space-x-0.5 ml-1">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[var(--button-bg)] animate-dot-scale"
                style={{ animationDelay: `${i * 0.3}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); opacity: 0; }
          10% { opacity: 0.2; }
          90% { opacity: 0.2; }
          50% { transform: translateY(-20px) rotate(2deg); opacity: 0.3; }
        }
        .animate-float {
          animation: float linear infinite;
          bottom: -10px;
        }
        @keyframes float-logo {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(1deg); }
        }
        .animate-float-logo {
          animation: float-logo 2s ease-in-out infinite;
        }
        @keyframes float-logo-hover {
          0%, 100% { transform: translateY(0px) rotate(0deg) scale(1); }
          50% { transform: translateY(-12px) rotate(3deg) scale(1.05); }
        }
        .animate-float-logo-hover {
          animation: float-logo-hover 1s ease-in-out infinite;
        }
        @keyframes dot-scale {
          0%, 100% { transform: scale(0.5); opacity: 0.3; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        .animate-dot-scale {
          animation: dot-scale 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}