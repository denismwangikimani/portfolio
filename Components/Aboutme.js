import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutMe = () => {
  return (
    <div className="relative min-h-screen w-full bg-white font-['Permanent_Marker'] p-8">
      <div className="max-w-4xl mx-auto relative">
        <h1 className="text-8xl mb-4 relative">
          <span className="text-8xl">HEL</span>
          <span className="text-9xl">LO</span>
          <span className="text-8xl">!</span>
        </h1>
        <div className="flex items-start">
          <div className="flex-1 -mt-8">
            <Link
              href="#"
              className="text-4xl inline-block bg-black text-white px-2 py-1 hover:underline cursor-pointer mt-5 ml-5"
            >
              LEARN MORE ABOUT ME
            </Link>
            {/*
            <br />
            <Link
              href="#"
              className="text-5xl inline-block bg-black text-white px-2 py-1 hover:underline cursor-pointer mt-2"
            >
              ABOUT ME
            </Link>
            */}
          </div>
          <div className="w-64 h-64 relative border-4 border-black mr-40">
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
  );
};

export default AboutMe;
