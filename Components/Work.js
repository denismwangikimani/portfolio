"use client";

import React from "react";
import Link from "next/link";

const Work = () => {
  return (
    <div className="max-w-6xl mx-auto p-8 font-handwritten">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
        .font-handwritten {
          font-family: "Permanent Marker", cursive;
        }
      `}</style>
      <div className="relative">
        <h1 className="text-4xl mb-12 font-bold">SELECTED WORK</h1>

        <div className="grid grid-cols-12 gap-8">
          {/* Top Row */}
          <div className="col-span-5">
            <p className="text-sm italic mt-80">
              Project One creative exploration, documented through various
              mediums during summer 2023. A blend of traditional and
              contemporary approaches.
            </p>
          </div>

          <div className="col-span-2 flex justify-between space-x-8">
            <Link href="">
              <div className="bg-gray-300 w-80 mt-40 h-56 cursor-pointer" />
            </Link>
            <Link href="">
              <div className="bg-gray-300 w-64 h-96 cursor-pointer" />
            </Link>
          </div>

          {/* Middle Row */}
          <div className="col-span-6">
            <Link href="">
              <div className="bg-gray-300 w-full h-96 cursor-pointer" />
            </Link>
          </div>

          <div className="col-span-6 space-y-8 relative">
            <Link href="">
              <div className="bg-gray-300 w-full h-64 cursor-pointer" />
            </Link>

            {/* Absolutely positioned text overlay */}
            <div className="absolute top-72 left-0 right-0 text-center space-y-4">
              <h2 className="text-5xl mb-4 font-bold inline-block bg-black text-white px-3 py-1">
                HOW BAZAAR
              </h2>
              <p className="text-lg max-w-md mx-auto">
                Iconic moments from our archives revisited. This month: the
                creative journey of Project Three captures the innovative spirit
                of modern design
              </p>
              <p className="text-base">By CREATIVE DIRECTOR</p>
            </div>
          </div>

          {/* Bottom Row */}
          <div className="col-span-4">
            <p className="text-sm mb-4">
              Above: Project Four exploring the boundaries of design in winter
              2023. Right: Project Five studies at the studio from autumn 2023
            </p>
          </div>

          <div className="col-span-8 flex space-x-8">
            <Link href="">
              <div className="bg-gray-300 w-40 h-52 cursor-pointer" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
