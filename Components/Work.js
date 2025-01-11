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

const PolaroidProject = ({ href, imagePath, title, rotation = "0", zIndex = 0, className = "" }) => {
  return (
    <Link href={href}>
      <div 
        className={`absolute group ${className}`}
        style={{ 
          transform: `rotate(${rotation}deg)`,
          zIndex: zIndex
        }}
      >
        <div className="transform transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:[z-index:50]">
          {/* Tape - Moved inside transform container */}
          <div 
            className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 md:w-16 h-4 md:h-6 bg-[#fde047] rotate-3 rounded-sm shadow-sm" 
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 10px)`
            }}
          />

          {/* Polaroid Frame */}
          <div className="w-32 md:w-48 lg:w-64 bg-[#FAFAFA] p-2 md:p-3 rounded-sm shadow-xl">
            {/* Image Container */}
            <div className="relative w-full aspect-square mb-2 md:mb-4 bg-black">
              <Image
                src={imagePath}
                alt={title}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            
            {/* Title Container */}
            <div className="text-center pb-1 md:pb-2">
              <h3 className="font-handwritten text-xs md:text-sm lg:text-base text-gray-800">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Work = () => {
  const projects = [
    { href: "/project-one", imagePath: "/images/profile.jpg", title: "Notes App" },
    { href: "/project-two", imagePath: "/images/profile.jpg", title: "Audio Jam" },
    { href: "/project-three", imagePath: "/images/profile.jpg", title: "Xyntra Bank" },
    { href: "/project-four", imagePath: "/images/profile.jpg", title: "Project Four" },
    { href: "/project-five", imagePath: "/images/profile.jpg", title: "Project Five" },
    { href: "/project-six", imagePath: "/images/profile.jpg", title: "Project Six" }
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

        {/* Polaroid Layout Container */}
        <div className="relative h-[600px] md:h-[800px] lg:h-[1000px] mx-auto max-w-4xl">
          {/* Top Row */}
          <PolaroidProject {...projects[0]} rotation="-6" zIndex="2" 
            className="top-[0%] left-[12%] md:left-[15%]" />
          <PolaroidProject {...projects[1]} rotation="4" zIndex="1" 
            className="top-[0%] right-[12%] md:right-[15%]" />
          
          {/* Middle */}
          <PolaroidProject {...projects[2]} rotation="-2" zIndex="3" 
            className="top-[30%] left-[25%] md:left-[30%]" />
          
          {/* Bottom Row */}
          <PolaroidProject {...projects[3]} rotation="5" zIndex="2" 
            className="bottom-[5%] left-[8%] md:left-[5%]" />
          <PolaroidProject {...projects[4]} rotation="-4" zIndex="4" 
            className="bottom-[8%] left-[32%] md:left-[35%]" />
          <PolaroidProject {...projects[5]} rotation="3" zIndex="1" 
            className="bottom-[1%] right-[8%] md:right-[10%]" />
        </div>
      </div>
    </div>
  );
};

export default Work;