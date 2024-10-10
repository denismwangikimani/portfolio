"use client";

import React, { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const navItems = ["Work", "About", "Blog", "Contact"];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full py-10 px-10 flex justify-between items-center bg-transparent">
      {/* Left side: Name */}
      <span className="text-xl font-bold">Denis Mwangi</span>

      {/* Right side: Desktop Navigation */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-10">
            {navItems.map((item) => (
              <NavigationMenuItem key={item}>
                <NavigationMenuLink
                  className={`text-l font-semibold transition-colors ${
                    hoveredItem === item
                      ? "text-primary font-bold"
                      : hoveredItem
                      ? "text-muted-foreground"
                      : ""
                  }`}
                  onMouseEnter={() => setHoveredItem(item)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  {item}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
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
              <a
                key={item}
                href="#"
                className="text-2xl font-bold text-black hover:text-primary py-4"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;