import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MousePointer } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen w-full bg-white font-['Permanent_Marker'] p-8">
      <div className="max-w-4xl mx-auto relative mt-32">
        <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-4 relative">
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            HEL
          </span>
          <span className="text-7xl sm:text-8xl md:text-9xl lg:text-10xl">
            LO
          </span>
          <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
            !
          </span>
        </h1>

        <div className="flex flex-col relative">
          <div className="flex items-start gap-4 flex-col sm:flex-row">
            <div className="flex-1">
              <div className="relative ml-2 sm:ml-6">
                <MousePointer className="absolute -left-8 sm:-left-12 top-6 sm:top-8 w-6 h-6 sm:w-8 sm:h-8 transform rotate-90" />
                <Link
                  href="#"
                  style={{ whiteSpace: "nowrap" }}
                  className="text-2xl sm:text-3xl md:text-4xl inline-block bg-black text-white px-2 sm:px-3 py-1 hover:underline cursor-pointer"
                >
                  LEARN MORE ABOUT ME
                </Link>
              </div>
              <div
                className="mt-2 ml-6 sm:ml-10"
                style={{ whiteSpace: "nowrap" }}
              >
                <span className="text-xl sm:text-1xl">
                  <span className="">BUILDING</span>{" "}
                  <span>
                    <span className="text-3xl sm:text-2xl font-extrabold">
                      S
                    </span>
                    <span className="text-2xl sm:text-2xl font-bold">CA</span>
                    <span className="text-lg sm:text-1xl">LABLE</span>
                  </span>{" "}
                  <span>
                    <span className="text-lg sm:text-1xl">AP</span>
                    <span className="text-2xl sm:text-2xl font-bold">P</span>
                    <span className="text-2xl sm:text-2xl font-bold">
                      LICAT
                    </span>
                    <span className="text-lg sm:text-1xl">ION</span>
                  </span>
                </span>
              </div>
            </div>

            <div className="w-48 h-48 sm:w-64 sm:h-64 relative border-4 border-black">
              <div className="absolute -top-1.5 -left-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-black"></div>
              <div className="absolute -top-1.5 -right-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-black"></div>
              <div className="absolute -bottom-1.5 -left-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-black"></div>
              <div className="absolute -bottom-1.5 -right-1.5 w-3 h-3 sm:w-4 sm:h-4 bg-white border-2 border-black"></div>
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
