"use client";

import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
      const current = sections.find((section) => {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="z-50 fixed top-6 left-1/2 -translate-x-1/2 w-auto max-w-fit rounded-full bg-[#131313]/85 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.6)] px-4 sm:px-6 py-2.5 nav-glass">
      {/* Centered Nav Links */}
      <nav className="flex items-center space-x-4 sm:space-x-8">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href.substring(1);
          return (
            <a
              key={link.name}
              href={link.href}
              className={`font-sans text-xs sm:text-sm font-medium transition-all duration-300 px-2 sm:px-3 py-1 rounded-full ${
                isActive
                  ? "text-white bg-white/10 shadow-sm"
                  : "text-[#c4c7c8] hover:text-white hover:bg-white/5"
              }`}
            >
              {link.name}
            </a>
          );
        })}
      </nav>
    </header>
  );
}


