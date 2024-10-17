import React from "react";
import Link from "next/link";

const Work = () => {
  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl mb-12 font-bold text-center">INSPIRATION</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Top Row */}
        <div className="space-y-2">
          <p className="text-sm italic">
            Project One creative exploration, documented through various
            mediums during summer 2023. A blend of traditional and contemporary
            approaches.
          </p>
          <Link href="">
            <div className="bg-gray-300 w-full h-64 cursor-pointer" />
          </Link>
        </div>

        <Link href="">
          <div className="bg-gray-300 w-full h-64 cursor-pointer" />
        </Link>

        {/* Middle Row */}
        <Link href="">
          <div className="bg-gray-300 w-full h-96 cursor-pointer" />
        </Link>

        <div className="flex flex-col justify-between">
          <Link href="">
            <div className="bg-gray-300 w-full h-64 cursor-pointer mb-8" />
          </Link>

          <div className="text-center space-y-4">
            <h2 className="text-5xl mb-4 font-bold">HOW BAZAAR</h2>
            <p className="text-lg">
              Iconic moments from our archives revisited. This month: the
              creative journey of Project Three captures the innovative spirit
              of modern design
            </p>
            <p className="text-base">By CREATIVE DIRECTOR</p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="col-span-1 md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-2">
            <p className="text-sm">
              Above: Project Four exploring the boundaries of design in winter
              2023. Right: Project Five studies at the studio from autumn 2023
            </p>
            <Link href="">
              <div className="bg-gray-300 w-full h-48 cursor-pointer" />
            </Link>
          </div>

          <div className="space-y-4">
            <Link href="">
              <div className="bg-gray-300 w-full h-48 cursor-pointer" />
            </Link>
            <p className="text-sm">
              For this innovative series, the creative team placed emphasis on
              spontaneity and natural elements. These dynamic pieces from late
              2023 show how modern design has evolved from traditional
              approaches. The project took inspiration out of the studio and
              into the world, from urban landscapes to natural settings,
              creating a unique blend of structure and chaos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
