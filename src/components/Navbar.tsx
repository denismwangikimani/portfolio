"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if we're on the About page or any other dark background page
  const isDarkPage = pathname === "/About" || pathname.startsWith("/About/");

  // Set text color based on the current page
  const textColor = isDarkPage ? "text-white" : "text-black";
  const hoverTextColor = isDarkPage ? "text-white" : "text-black";
  const nonHoverTextColor = isDarkPage ? "text-gray-300" : "text-gray-800";

  const navItems = [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Blog", href: "/About#blog" },
    { name: "Contact", href: "/#footer" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 py-4 px-6 md:px-10 flex justify-between items-center bg-transparent z-50`}
    >
      {/* Left side: Name */}
      <Link
        href="/#landing"
        className={`text-xl ${textColor} font-bold cursor-pointer`}
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
                ? hoverTextColor + " font-semibold"
                : hoveredItem
                ? isDarkPage
                  ? "text-gray-400"
                  : "text-gray-500"
                : nonHoverTextColor
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
            <X className={`w-8 h-8 ${textColor}`} />
          ) : (
            <Menu className={`w-6 h-6 ${textColor}`} />
          )}
        </button>

        {menuOpen && (
          <div
            className={`fixed inset-0 z-40 ${
              isDarkPage ? "bg-black" : "bg-white"
            } flex flex-col justify-center items-center`}
          >
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-2xl font-bold ${
                  isDarkPage
                    ? "text-white hover:text-gray-300"
                    : "text-black hover:text-black"
                } py-4`}
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
