"use client";

import React, { useState } from "react";

const Footer = () => {
  const [hoveredLink, setHoveredLink] = useState(null);

  const links = [
    { name: "Email", href: "mailto:deniskimanimwangi@gmail.com" },
    { name: "LinkedIn", href: "https://linkedin.com/in/denis-kimani" },
    { name: "GitHub", href: "https://github.com/denismwangikimani" },
    { name: "Medium", href: "https://medium.com/@denismwangi" },
  ];

  return (
    <footer className="h-screen w-full flex items-center">
      <div className="w-full max-w-7xl mx-auto px-12 md:px-24 flex flex-col md:flex-row md:justify-between items-center md:items-start">
        <div className="flex flex-col items-start">
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-handwritten text-center md:text-left mb-2">
            Let&apos;s connect
          </h2>
          <span className="text-5xl md:text-7xl lg:text-8xl font-handwritten text-center md:text-left mb-8">
            digitally
          </span>
          <span className="text-sm mt-8">© 2024 Denis Mwangi</span>
        </div>

        <div className="flex flex-col gap-8 items-center md:items-start mt-8 md:mt-0">
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
        </div>
      </div>
    </footer>
  );
};

export default Footer;
