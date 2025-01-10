"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

const CircledText = ({ children }) => {
  return (
    <div className="relative inline-block">
      <style jsx>{`
        .circle-highlight {
          position: relative;
          background-color: transparent;
        }
        .circle-highlight:after {
          border: 6px solid #fde047;
          border-radius: 1.5em;
          content: "";
          position: absolute;
          inset: -0.3em;
        }
      `}</style>
      <span className="circle-highlight">{children}</span>
    </div>
  );
};

const StickerProject = ({ href, imagePath, title }) => {
  return (
    <Link href={href}>
      <div className="relative group">
        <div className="absolute inset-0 bg-white rounded-lg transform rotate-2 transition-transform group-hover:rotate-3" />
        <div className="relative w-40 h-48 lg:w-64 lg:h-80 overflow-hidden rounded-lg border-8 border-white shadow-lg transform transition-transform group-hover:scale-105 bg-cream">
          {/* Image Container */}
          <div className="relative w-full h-[70%] overflow-hidden">
            <Image
              src={imagePath}
              alt={title}
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-sm"
            />
            {/* Sticker shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Title Container */}
          <div className="h-[30%] flex items-center justify-center p-2 text-center">
            <h3 className="font-handwritten text-base lg:text-xl text-gray-800">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Work = () => {
  const projects = [
    { 
      href: "/project-one", 
      imagePath: "/images/profile.jpg",
      title: "Notes App"
    },
    { 
      href: "/project-two", 
      imagePath: "/images/profile.jpg",
      title: "Audio Jam"
    },
    { 
      href: "/project-three", 
      imagePath: "/images/profile.jpg",
      title: "Xyntra Bank"
    },
    { 
      href: "/project-four", 
      imagePath: "/images/profile.jpg",
      title: "Project Four"
    },
    { 
      href: "/project-five", 
      imagePath: "/images/profile.jpg",
      title: "Project Five"
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4 lg:p-8 font-handwritten">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
        .font-handwritten {
          font-family: "Permanent Marker", cursive;
        }
      `}</style>

      <div className="relative">
        <h1 className="text-2xl lg:text-4xl mb-8 lg:mb-12 font-bold">
          <CircledText>SELECTED WORK</CircledText>
        </h1>

        {/* Sticker "X" Layout */}
        <div className="flex flex-col items-center space-y-4 lg:space-y-8">
          {/* Top Left and Top Right Stickers */}
          <div className="flex justify-between w-full lg:max-w-4xl">
            <StickerProject {...projects[0]} />
            <StickerProject {...projects[1]} />
          </div>

          {/* Center Sticker */}
          <div>
            <StickerProject {...projects[2]} />
          </div>

          {/* Bottom Left and Bottom Right Stickers */}
          <div className="flex justify-between w-full lg:max-w-4xl">
            <StickerProject {...projects[3]} />
            <StickerProject {...projects[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;