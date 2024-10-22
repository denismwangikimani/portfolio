"use client";

import React from "react";
import { Slash } from "lucide-react";
import Navbar from "./Navbar";

const LandingPage = () => {
  return (
    // Landing Page
    <div className="relative h-screen w-full bg-white overflow-hidden font-handwritten">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
        .font-handwritten {
          font-family: "Permanent Marker", cursive;
        }
      `}</style>

      {/* Navbar at the top */}
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>

      {/* Top Left Corner Slash and Number */}
      <div className="absolute top-20 left-6 sm:top-44 sm:left-48 flex items-center pt-20 sm:pt-40">
        <Slash className="w-4 h-4 sm:w-6 sm:h-6 text-red-500" />
        <span className="ml-1 text-xs sm:text-sm">{24}</span>
      </div>

      {/* Main Content Container */}
      <div className="h-full w-full flex justify-center items-center pt-32 sm:pt-52">
        {/* Main Content */}
        <div className="text-center px-4 sm:px-0">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wider flex items-center justify-center">
            DENIS MWANGI
          </h1>

          {/* SOFTWARE and DEVELOPER */}
          <div className="mt-4 flex justify-center items-center gap-4 sm:gap-8">
            <span className="text-sm sm:text-lg md:text-xl">
              FULLSTACK SOFTWARE DEVELOPER
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
