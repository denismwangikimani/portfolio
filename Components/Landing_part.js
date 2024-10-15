"use client";

import React from "react";
import { Slash } from "lucide-react";

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full bg-white overflow-hidden font-handwritten flex justify-center items-center">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
        .font-handwritten {
          font-family: "Permanent Marker", cursive;
        }
      `}</style>

      {/* Top Left Corner Slash and Number */}
      <div className="absolute top-44 left-48 flex items-center">
        <Slash className="w-6 h-6 text-red-500" />
        <span className="ml-1 text-sm">{24}</span>
      </div>

      {/* Main FullStack Text */}
      <div className="text-center">
        <h1 className="text-8xl tracking-wider flex items-center justify-center">
          FULL
          {/* "STACK" with red box */}
          <span className="relative">
            <svg
              className="absolute -top-1 -left-1 w-full h-full"
              viewBox="0 0 350 100"
            >
              <rect
                x="0"
                y="0"
                width="350"
                height="100"
                fill="none"
                stroke="black"
                strokeWidth="10"
                strokeDasharray="5,5"
              />
            </svg>
            <span className="relative z-10 ">STACK</span>
          </span>
        </h1>

        {/* SOFTWARE and DEVELOPER */}
        <div className="mt-4 flex justify-center items-center gap-8">
          <span className="text-xl">SOFTWARE DEVELOPER</span>
          <span className="text-xl flex items-center">
          </span>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
