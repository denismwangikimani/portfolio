"use client";

import React from "react";
import Link from "next/link";

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
          border-top: 6px solid #fde047;
          border-radius: 1.5em 1em 2em 1.5em;
          bottom: -0.3em;
          content: "";
          left: -0.3em;
          position: absolute;
          right: -0.3em;
          top: -0.1em;
        }
      `}</style>
      <span className="circle-highlight">{children}</span>
    </div>
  );
};

// Example usage in your Work component
const Work = () => {
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

        <div className="grid grid-cols-12 gap-4 lg:gap-8">
          {/* Top Row */}
          <div className="col-span-12 lg:col-span-5">
            <p className="hidden lg:block text-sm italic mt-40 lg:mt-80">
              Project One creative exploration, documented through various
              mediums during summer 2023. A blend of traditional and
              contemporary approaches.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-7 flex justify-between space-x-4 lg:space-x-8">
            <Link href="">
              <div className="bg-gray-300 w-40 lg:w-80 mt-20 lg:mt-40 h-40 lg:h-56 cursor-pointer" />
            </Link>
            <Link href="">
              <div className="bg-gray-300 w-40 lg:w-64 h-64 lg:h-96 cursor-pointer" />
            </Link>
          </div>

          {/* Middle Row */}
          <div className="col-span-12 lg:col-span-6 flex justify-between space-x-4 lg:space-x-0">
            <Link href="" className="w-3/5 lg:w-full">
              <div className="bg-gray-300 w-full h-64 lg:h-96 cursor-pointer" />
            </Link>
            <Link href="" className="w-2/5 lg:hidden">
              <div className="bg-gray-300 w-full h-48 cursor-pointer" />
            </Link>
          </div>

          <div className="hidden lg:block lg:col-span-6 space-y-4 lg:space-y-8 relative">
            <Link href="">
              <div className="bg-gray-300 w-full h-40 lg:h-64 cursor-pointer" />
            </Link>
            {/* Absolutely positioned text overlay */}
            <div className="absolute top-64 lg:top-72 left-0 right-0 text-center space-y-2 lg:space-y-4">
              <h2 className="text-3xl lg:text-5xl mb-2 lg:mb-4 font-bold inline-block bg-black text-white px-2 lg:px-3 py-1">
                HOW BAZAAR
              </h2>
              <p className="text-xs lg:text-base max-w-sm mx-auto">
                Iconic moments from our archives revisited. This month: the
                creative journey of Project Three captures the innovative spirit
                of modern design.
              </p>
              <p className="text-xs lg:text-base">By CREATIVE DIRECTOR</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="col-span-12 lg:col-span-4">
            <p className="hidden lg:block text-sm mb-4">
              Above: Project Four exploring the boundaries of design in winter
              2023. Right: Project Five studies at the studio from autumn 2023.
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8 flex space-x-4 lg:space-x-8">
            <Link href="">
              <div className="bg-gray-300 w-24 lg:w-40 h-40 lg:h-52 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
