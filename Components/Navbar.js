"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
} from "../Components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "Work", href: "/#work" },
    { name: "About", href: "/#about" },
    { name: "Blog", href: "/#blog" },
    { name: "Contact", href: "/#contact" },
  ];

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full py-10 px-10 flex justify-between items-center bg-transparent">
      {/* Left side: Name */}
      <Link href="/#landing" passHref>
        <span className="text-xl font-bold cursor-pointer">Denis</span>
      </Link>

      {/* Right side: Desktop Navigation */}
      <div className="hidden md:flex">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-10">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.name}>
                <Link href={item.href} passHref>
                  <NavigationMenuLink
                    className={`text-l font-semibold transition-colors ${
                      hoveredItem === item.name
                        ? "text-primary font-bold"
                        : hoveredItem
                        ? "text-muted-foreground"
                        : ""
                    }`}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {item.name}
                  </NavigationMenuLink>
                </Link>
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
              <Link key={item.name} href={item.href} passHref>
                <a
                  className="text-2xl font-bold text-black hover:text-primary py-4"
                  onClick={toggleMenu}
                >
                  {item.name}
                </a>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
