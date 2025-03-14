"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 py-4 px-6 md:px-10 flex justify-between items-center bg-white backdrop-blur-md z-50">
      {/* Left side: Name */}
      <Link
        href="/#landing"
        className="text-xl text-black font-bold cursor-pointer"
      >
        Denis
      </Link>

      {/* Right side: Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-10">
        {navItems.map((item) => (
          <Link
            href={item.href}
            key={item.name}
            className={`text-lg font-medium transition-colors ${
              hoveredItem === item.name
                ? "text-black font-semibold"
                : hoveredItem
                ? "text-gray-500"
                : "text-gray-800"
            }`}
            onMouseEnter={() => setHoveredItem(item.name)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="z-50 relative">
          {menuOpen ? (
            <X className="w-8 h-8 text-black" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>

        {menuOpen && (
          <div className="fixed inset-0 z-40 bg-white flex flex-col justify-center items-center">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-2xl font-bold text-black hover:text-black py-4"
                onClick={toggleMenu}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
