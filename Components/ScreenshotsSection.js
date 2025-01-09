import React from "react";
import Image from "next/image";

const ScreenshotsSection = ({ screenshots }) => {
  return (
    <section className="space-y-8 mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold">App Screenshots</h2>
      <div className="flex flex-col gap-8">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="w-full bg-gray-100 rounded-lg overflow-hidden shadow-md relative flex flex-col"
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              layout="responsive"
              width={700}
              height={475}
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScreenshotsSection;