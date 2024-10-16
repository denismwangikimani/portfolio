import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MousePointer } from "lucide-react";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen w-full bg-white font-['Permanent_Marker'] p-8">
      <div className="max-w-4xl mx-auto relative mt-32">
        <h1 className="text-8xl mb-4 relative">
          <span className="text-7xl">HEL</span>
          <span className="text-9xl">LO</span>
          <span className="text-7xl">!</span>
        </h1>

        <div className="flex flex-col relative">
          <div className="flex items-start gap-4">
            <div className="flex-1">
              <div className="relative ml-6">
                <MousePointer className="absolute -left-12 top-8 w-8 h-8 transform rotate-90" />
                <Link
                  href="#"
                  style={{ whiteSpace: "nowrap" }}
                  className="text-4xl inline-block bg-black text-white px-3 py-1 hover:underline cursor-pointer"
                >
                  LEARN MORE ABOUT ME
                </Link>
              </div>
              <div className="mt-2 ml-10" style={{ whiteSpace: "nowrap" }}>
                <span className="text-2xl">
                  <span className="">BUILDING</span>{" "}
                  <span>
                    <span className="text-4xl font-extrabold">S</span>
                    <span className="text-3xl font-bold">CA</span>
                    <span className="text-2xl">LABLE</span>
                  </span>{" "}
                  <span>
                    <span className="text-2xl">AP</span>
                    <span className="text-3xl font-bold">P</span>
                    <span className="text-3xl font-bold">LICAT</span>
                    <span className="text-2xl">ION</span>
                  </span>
                </span>
              </div>
            </div>

            <div className="w-64 h-64 relative border-4 border-black ">
              <div className="absolute -top-2 -left-2 w-4 h-4 bg-white border-2 border-black"></div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-white border-2 border-black"></div>
              <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white border-2 border-black"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-white border-2 border-black"></div>
              <Image
                src="/images/profile.jpg"
                alt="Profile"
                layout="fill"
                objectFit="cover"
                className="grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
