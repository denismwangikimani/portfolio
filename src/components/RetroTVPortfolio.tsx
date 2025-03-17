"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TV from "./TV";

const RetroTVPortfolio: React.FC = () => {
  const router = useRouter();
  const [hoveredTV, setHoveredTV] = useState<number | null>(null);

  // Adjustable spacing values for HORIZONTAL spacing between TVs in each row
  const secondRowSpacing = 140; // Horizontal space between TVs in the second row
  const thirdRowSpacing = 134; // Horizontal space between TVs in the third row
  const bottomRowSpacing = 140; // Horizontal space between TVs in the bottom row

  // How much each row shifts left/right
  const rowOffset = 90;

  // Updated projects data structure with new positions
  const projects = [
    // Top row (1 TV)
    {
      id: 1,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "top-center",
      tvColor: "#b71a11", // Red
      rotation: "0deg",
    },
    // Second row from top (2 TVs)
    {
      id: 2,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "second-left",
      tvColor: "#1e88e5", // Blue
      rotation: "0deg",
    },
    {
      id: 3,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "second-right",
      tvColor: "#43a047", // Green
      rotation: "0deg",
    },
    // Third row from top (2 TVs)
    {
      id: 4,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "third-left",
      tvColor: "#ffa000", // Amber
      rotation: "0deg",
    },
    {
      id: 5,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "third-right",
      tvColor: "#8e24aa", // Purple
      rotation: "0deg",
    },
    // Bottom row (2 TVs)
    {
      id: 6,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "bottom-left",
      tvColor: "#f4511e", // Deep Orange
      rotation: "0deg",
    },
    {
      id: 7,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "bottom-right",
      tvColor: "#00897b", // Teal
      rotation: "0deg",
    },
  ];

  const handleTVClick = (link: string) => {
    router.push(link);
  };

  // Modified TV component that handles the media content
  const ProjectTV: React.FC<{
    project: (typeof projects)[0];
  }> = ({ project }) => {
    return (
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setHoveredTV(project.id)}
        onMouseLeave={() => setHoveredTV(null)}
        onClick={() => handleTVClick(project.link)}
        style={{
          transform: project.rotation ? `rotate(${project.rotation})` : "",
        }}
      >
        {/* Render the TV */}
        <div className="relative">
          <TV
            screenContent={
              hoveredTV === project.id ? (
                <video
                  className="w-full h-full object-cover rounded-[25px]"
                  autoPlay
                  muted
                  loop
                >
                  <source src={project.video} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={project.image}
                  alt={`Project ${project.id}`}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-[25px]"
                />
              )
            }
            tvColor={project.tvColor}
          />
        </div>
      </div>
    );
  };

  // TV container width
  const tvWidth = 300;

  return (
    <div className="w-full overflow-hidden">
      <div className="relative mx-auto" style={{ maxWidth: "1200px" }}>
        {/* Top row - 1 TV (centered) */}
        <div
          className="flex justify-center"
          style={{
            zIndex: 40,
            position: "relative",
          }}
        >
          {projects
            .filter((p) => p.position.startsWith("top"))
            .map((project) => (
              <div
                key={project.id}
                className="relative"
                style={{ width: `${tvWidth}px` }}
              >
                <ProjectTV project={project} />
              </div>
            ))}
        </div>

        {/* Second row - 2 TVs with adjustable spacing between them */}
        <div
          className="flex justify-center"
          style={{
            marginTop: "-65px", // Adjusted for proper stacking
            marginLeft: `${-rowOffset}px`,
            zIndex: 30,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: `${secondRowSpacing}px` }}>
            {projects
              .filter((p) => p.position.startsWith("second"))
              .map((project) => (
                <div key={project.id} style={{ width: `${tvWidth}px` }}>
                  <ProjectTV project={project} />
                </div>
              ))}
          </div>
        </div>

        {/* Third row - 2 TVs with adjustable spacing between them */}
        <div
          className="flex justify-center"
          style={{
            marginTop: "-65px", // Adjusted for proper stacking
            marginLeft: `${rowOffset}px`,
            zIndex: 20,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: `${thirdRowSpacing}px` }}>
            {projects
              .filter((p) => p.position.startsWith("third"))
              .map((project) => (
                <div key={project.id} style={{ width: `${tvWidth}px` }}>
                  <ProjectTV project={project} />
                </div>
              ))}
          </div>
        </div>

        {/* Bottom row - 2 TVs with adjustable spacing between them */}
        <div
          className="flex justify-center"
          style={{
            marginTop: "-65px", // Adjusted for proper stacking
            zIndex: 10,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: `${bottomRowSpacing}px` }}>
            {projects
              .filter((p) => p.position.startsWith("bottom"))
              .map((project) => (
                <div key={project.id} style={{ width: `${tvWidth}px` }}>
                  <ProjectTV project={project} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetroTVPortfolio;
