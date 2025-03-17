"use client";

import React, { useState } from "react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);

  const links = [
    { name: "Email", href: "mailto:deniskimanimwangi@gmail.com" },
    { name: "LinkedIn", href: "https://linkedin.com/in/denis-kimani" },
    { name: "GitHub", href: "https://github.com/denismwangikimani" },
    { name: "Medium", href: "https://medium.com/@denismwangi" },
  ];

  return (
    <footer className="min-h-screen w-full text-black bg-white flex items-center">
      <div className="w-full max-w-7xl mx-auto px-12 md:px-24 flex flex-col md:flex-row md:justify-between items-center md:items-start">
        {/* Left Section */}
        <div className="flex flex-col items-start">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-handwritten text-center md:text-left mb-2">
            Let&apos;s connect
          </h2>
          <span className="text-5xl md:text-7xl lg:text-8xl font-handwritten text-center md:text-left mb-8">
            digitally
          </span>

          {/* On larger screens, the © text stays below 'digitally' */}
          <span className="hidden md:block text-sm mt-8">
            © 2025 Denis Mwangi
          </span>
        </div>

        {/* Right Section - Links */}
        <div className="flex flex-col gap-8 items-center md:items-start mt-8 md:mt-0 md:ml-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.name !== "Email" ? "_blank" : undefined}
              rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
              className={`text-xl md:text-2xl font-handwritten transition-opacity duration-300 hover:opacity-100 ${
                hoveredLink && hoveredLink !== link.name
                  ? "opacity-30"
                  : "opacity-100"
              }`}
              onMouseEnter={() => setHoveredLink(link.name)}
              onMouseLeave={() => setHoveredLink(null)}
            >
              {link.name}
            </a>
          ))}

          {/* On mobile, this moves below the links */}
          <span className="block md:hidden text-sm mt-8">
            © 2025 Denis Mwangi
          </span>
        </div>
      </div>

      {/* Spacing adjustments for iPad screens */}
      <style jsx>{`
        @media (min-width: 768px) and (max-width: 1024px) {
          footer {
            padding-top: 20px;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
