import React from "react";
import Image from "next/image";

interface Screenshot {
  src: string;
  alt: string;
}

interface ScreenShotsSectionProps {
  screenshots: Screenshot[];
}

const ScreenShotsSection: React.FC<ScreenShotsSectionProps> = ({
  screenshots,
}) => {
  return (
    <section className="space-y-8 mb-16">
      <h2 className="text-2xl md:text-3xl font-semibold">
        Project Screenshots
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md border border-gray-200"
          >
            <Image
              src={screenshot.src}
              alt={screenshot.alt}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ScreenShotsSection;
