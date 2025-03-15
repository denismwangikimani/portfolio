"use client";

import React from "react";

const PersonalTagCard: React.FC = () => {
  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden pt-16">
      {/* Binary code lanyard in Y-shape */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 flex justify-center">
        {/* Left side of the V */}
        <div className="relative w-8 h-40 bg-black transform -rotate-12 overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-xs text-lime-400 font-mono">
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <div key={`left-${i}`} className="flex">
                  {Array(3)
                    .fill(0)
                    .map((_, j) => (
                      <span key={`left-${i}-${j}`} className="mx-px">
                        {Math.random() > 0.5 ? "1" : "0"}
                      </span>
                    ))}
                </div>
              ))}
          </div>
        </div>

        {/* Right side of the V */}
        <div className="relative w-8 h-40 bg-black transform rotate-12 overflow-hidden">
          <div className="absolute inset-0 flex flex-col items-center justify-center text-xs text-lime-400 font-mono">
            {Array(20)
              .fill(0)
              .map((_, i) => (
                <div key={`right-${i}`} className="flex">
                  {Array(3)
                    .fill(0)
                    .map((_, j) => (
                      <span key={`right-${i}-${j}`} className="mx-px">
                        {Math.random() > 0.5 ? "1" : "0"}
                      </span>
                    ))}
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Vertical part of the Y */}
      <div className="absolute top-40 left-1/2 transform -translate-x-1/2 w-8 h-32 bg-black overflow-hidden">
        <div className="absolute inset-0 flex flex-col items-center justify-center text-xs text-lime-400 font-mono">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={`vert-${i}`} className="flex">
                {Array(3)
                  .fill(0)
                  .map((_, j) => (
                    <span key={`vert-${i}-${j}`} className="mx-px">
                      {Math.random() > 0.5 ? "1" : "0"}
                    </span>
                  ))}
              </div>
            ))}
        </div>
      </div>

      {/* Metal clasp */}
      <div className="absolute top-72 left-1/2 transform -translate-x-1/2 w-12 h-6 bg-neutral-800 rounded-sm flex items-center justify-center">
        <div className="w-10 h-4 bg-neutral-700 rounded-sm"></div>
      </div>

      {/* Metal hook */}
      <div className="absolute top-80 left-1/2 transform -translate-x-1/2 w-6 h-10 bg-gradient-to-b from-neutral-300 to-neutral-400 rounded-full flex items-center justify-center">
        <div className="w-4 h-8 bg-black rounded-full"></div>
      </div>

      {/* ID Card */}
      <div className="relative mt-40 bg-neutral-800 p-6 w-72 h-96 shadow-lg rounded-lg">
        {/* Tag hole */}
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 h-6 w-6 rounded-full bg-neutral-700 border border-neutral-600 flex items-center justify-center">
          <div className="h-3 w-3 rounded-full bg-neutral-900"></div>
        </div>

        {/* Top Text */}
        <div className="flex justify-between text-xs text-white mt-4">
          <span>Kenyan</span>
          <span>21 yrs</span>
        </div>

        {/* Main content */}
        <div className="mt-8 flex">
          {/* Left side with name and image */}
          <div className="w-2/3">
            <h1 className="text-2xl font-bold tracking-tighter mb-6 text-white">
              DENIS MWANGI
            </h1>

            {/* Smiley face */}
            <div className="border-2 border-white w-44 h-44 flex items-center justify-center">
              <div className="text-white text-6xl font-mono">
                <div className="flex justify-center mb-2">
                  <span className="mx-4">X</span>
                  <span className="mx-4">X</span>
                </div>
                {/* <div className="flex justify-center mb-2">
                  <span>o</span>
                </div> */}
                <div className="flex justify-center">
                  <span className="text-6xl rotate-270">(</span>
                  {/* <span className="rotate-90 inline-block">D</span>
                  <span className="text-5xl">)</span> */}
                </div>
              </div>
            </div>
          </div>

          {/* Right side with vertical text */}
          <div className="w-1/3 flex items-center justify-center">
            <div className="transform rotate-270 origin-center whitespace-nowrap text-white text-xl font-bold mb-2 ml-16">
              FULLSTACK DEVELOPER
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-between px-6">
          <div className="flex space-x-1">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-2 h-2 bg-lime-400"></div>
            ))}
          </div>
          <div className="flex space-x-1">
            {[1, 2].map((i) => (
              <div key={i} className="w-2 h-2 bg-lime-400"></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalTagCard;
