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

const PolaroidProject = ({
  href,
  imagePath,
  title,
  rotation = "0",
  zIndex = 0,
  className = "",
}) => {
  return (
    <Link href={href}>
      <div
        className={`md:absolute group ${className}`}
        style={{
          transform: `rotate(${rotation}deg)`,
          zIndex: zIndex,
        }}
      >
        <div className="transform transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:[z-index:50]">
          {/* Tape - Hidden on mobile */}
          <div
            className="hidden md:block absolute -top-6 left-1/2 -translate-x-1/2 w-16 md:w-20 h-6 md:h-8 bg-[#fde047] rotate-3 rounded-sm shadow-sm"
            style={{
              backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 5px, rgba(0,0,0,0.03) 5px, rgba(0,0,0,0.03) 10px)`,
            }}
          />

          {/* Polaroid Frame */}
          <div className="w-full md:w-52 lg:w-72 bg-[#FAFAFA] p-3 md:p-4 rounded-sm shadow-xl">
            {/* Image Container */}
            <div className="relative w-full h-48 md:h-44 lg:h-56 mb-3 md:mb-5 bg-black overflow-hidden">
              <Image
                src={imagePath}
                alt={title}
                fill
                sizes="(max-width: 768px) 100%, (max-width: 1024px) 224px, 288px"
                style={{
                  objectFit: "contain",
                  backgroundColor: "black",
                }}
                priority
              />
            </div>

            {/* Title Container */}
            <div className="text-center pb-2 md:pb-3">
              <h3 className="font-handwritten text-base md:text-base lg:text-lg text-gray-800">
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
    {
      href: "/notesapp",
      imagePath: "/images/landing/login (2)_464x261.jpg",
      title: "Bytes Notes App",
    },
    {
      href: "/audiojam-music",
      imagePath: "/images/landing/landingpage_upscaled_464x259.jpg",
      title: "Audio Jam",
    },
    {
      href: "/xyntra-web-bank-app",
      imagePath: "/images/landing/landing_464x261.jpg",
      title: "Xyntra Web Bank",
    },
    {
      href: "/binance",
      imagePath: "/images/landing/bot_464x141.jpg",
      title: "Binance Crypto Trading Bot",
    },
    {
      href: "/undead-purge-game",
      imagePath: "/images/landing/login_464x261.jpg",
      title: "Undead Purge FPS Game",
    },
    {
      href: "/project-six",
      imagePath: "/images/profile.jpg",
      title: "Project Six",
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
        <h1 className="text-2xl lg:text-4xl mb-8 lg:mb-16 font-bold">
          <CircledText>SELECTED WORK</CircledText>
        </h1>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {projects.map((project, index) => (
            <PolaroidProject
              key={index}
              {...project}
              rotation={(index % 2 === 0 ? -2 : 2).toString()}
              className="relative"
            />
          ))}
        </div>

        {/* Desktop/Tablet Layout */}
        <div className="hidden md:block relative h-[1000px] lg:h-[1200px] mx-auto max-w-5xl">
          {/* Top Row */}
          <PolaroidProject
            {...projects[0]}
            rotation="-4"
            zIndex="2"
            className="top-[5%] left-[12%]"
          />
          <PolaroidProject
            {...projects[1]}
            rotation="3"
            zIndex="1"
            className="top-[5%] right-[12%]"
          />

          {/* Middle */}
          <PolaroidProject
            {...projects[2]}
            rotation="-2"
            zIndex="3"
            className="top-[28%] left-[32%]"
          />

          {/* Bottom Row */}
          <PolaroidProject
            {...projects[3]}
            rotation="4"
            zIndex="2"
            className="bottom-[15%] left-[8%]"
          />
          <PolaroidProject
            {...projects[4]}
            rotation="-3"
            zIndex="4"
            className="bottom-[18%] left-[38%]"
          />
          <PolaroidProject
            {...projects[5]}
            rotation="2"
            zIndex="1"
            className="bottom-[12%] right-[8%]"
          />
        </div>
      </div>
    </div>
  );
};

export default Work;