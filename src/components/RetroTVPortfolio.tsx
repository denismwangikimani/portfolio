"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TV from "./TV"; 

const RetroTVPortfolio: React.FC = () => {
  const router = useRouter();
  const [hoveredTV, setHoveredTV] = useState<number | null>(null);

  // Sample projects data structure
  const projects = [
    // Top row (2 TVs)
    {
      id: 1,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "top-left",
    },
    {
      id: 2,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "top-right",
    },
    // Middle row (2 TVs)
    {
      id: 3,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "middle-left",
    },
    {
      id: 4,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "middle-right",
    },
    // Bottom row (3 TVs)
    {
      id: 5,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "bottom-left",
    },
    {
      id: 6,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "bottom-middle",
    },
    {
      id: 7,
      image: "/images/profile.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/About",
      position: "bottom-right",
    },
  ];

  const handleTVClick = (link: string) => {
    router.push(link);
  };

  // Modified TV component that handles the media content
  // Modified ProjectTV component that better integrates media with the TV screen
  const ProjectTV: React.FC<{
    project: (typeof projects)[0];
  }> = ({ project }) => {
    return (
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setHoveredTV(project.id)}
        onMouseLeave={() => setHoveredTV(null)}
        onClick={() => handleTVClick(project.link)}
      >
        {/* First render the TV */}
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
          />
        </div>
      </div>
    );
  };

  return (
    <div className="w-full overflow-hidden">
      {/* Stacked TV Grid: 3-2-2 from bottom to top */}
      <div className="grid grid-cols-1 gap-0">
        {/* Top row - 2 TVs */}
        <div className="flex justify-start items-end gap-0">
          {projects
            .filter(p => p.position.startsWith("top"))
            .map(project => (
              <div key={project.id} className="w-1/3">
                <ProjectTV project={project} />
              </div>
            ))}
        </div>
        
        {/* Middle row - 2 TVs - increased negative margin */}
        <div 
          className="flex justify-start items-end gap-0"
          style={{ marginTop: "-65px" }} // More negative margin
        >
          {projects
            .filter(p => p.position.startsWith("middle"))
            .map(project => (
              <div key={project.id} className="w-1/3">
                <ProjectTV project={project} />
              </div>
            ))}
        </div>
        
        {/* Bottom row - 3 TVs - increased negative margin */}
        <div 
          className="flex justify-start items-end gap-0"
          style={{ marginTop: "-65px" }} // More negative margin
        >
          {projects
            .filter(p => p.position.startsWith("bottom"))
            .map(project => (
              <div key={project.id} className="w-1/3">
                <ProjectTV project={project} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default RetroTVPortfolio;
