"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TV from "./TV";

const RetroTVPortfolio: React.FC = () => {
  const router = useRouter();
  const [hoveredTV, setHoveredTV] = useState<number | null>(null);

  // Adjustable spacing values for HORIZONTAL spacing between TVs in each row
  // const secondRowSpacing = 140; // Horizontal space between TVs in the second row
  // const thirdRowSpacing = 134; // Horizontal space between TVs in the third row
  // const bottomRowSpacing = 140; // Horizontal space between TVs in the bottom row

  // // How much each row shifts left/right
  // const rowOffset = 90;

  // Updated projects data structure with new positions
  const projects = [
    // Top row (1 TV)
    {
      id: 1,
      image: "/images/online-store-screenshots/store-landing.png",
      video: "/videos/store-demo.mp4",
      link: "/store",
      position: "top-center",
      tvColor: "#b71a11", // Red
      rotation: "0deg",
    },
    // Second row from top (2 TVs)
    {
      id: 2,
      image: "/images/xyntra-screenshots/landing_464x261.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/xyntra-web-bank-app",
      position: "second-left",
      tvColor: "#1e88e5", // Blue
      rotation: "0deg",
    },
    {
      id: 3,
      image: "/images/audiojam-screenshots/landingpage_upscaled_464x259.jpg",
      video: "/videos/Audiojam-demo-video.mp4",
      link: "/audiojam-music",
      position: "second-right",
      tvColor: "#43a047", // Green
      rotation: "0deg",
    },
    // Third row from top (2 TVs)
    {
      id: 4,
      image: "/images/notesapp-screenshots/login (2)_464x261.jpg",
      video: "/videos/bytes-notes-app-demo-video - Made with Clipchamp.mp4",
      link: "/notesapp",
      position: "third-left",
      tvColor: "#ffa000", // Amber
      rotation: "0deg",
    },
    {
      id: 5,
      image: "/images/undead-purge-screenshots/login.png",
      video: "/videos/undead-purge-demo-video - Made with Clipchamp.mp4",
      link: "/undead-purge-game",
      position: "third-right",
      tvColor: "#8e24aa", // Purple
      rotation: "0deg",
    },
    // Bottom row (2 TVs)
    {
      id: 6,
      image: "/images/menu-planner-screenshots/dashboard.png",
      video: "/videos/menu-demo.mp4",
      link: "/menu-scheduling",
      position: "bottom-left",
      tvColor: "#f4511e", // Deep Orange
      rotation: "0deg",
    },
    {
      id: 7,
      image: "/images/crypto-bot-screenshots/bot_464x141.jpg",
      video: "/videos/crypto-bot-demo-video.mp4",
      link: "/binance",
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

  // Single-column layout for mobile
  const MobileLayout = () => (
    <div className="block md:hidden px-4 space-y-8">
      {projects.map((p) => (
        <div key={p.id} className="mx-auto max-w-sm">
          <ProjectTV project={p} />
        </div>
      ))}
    </div>
  );

  // Existing staggered layout for larger screens
  const DesktopLayout = () => {
    // TV container width
    const tvWidth = 300;

    return (
      <div className="relative mx-auto max-w-[1200px] hidden md:block">
        {/* Top Row */}
        <div className="flex justify-center relative z-[40]">
          {projects
            .filter((p) => p.position.startsWith("top"))
            .map((p) => (
              <div
                key={p.id}
                className="relative"
                style={{ width: `${tvWidth}px` }}
              >
                <ProjectTV project={p} />
              </div>
            ))}
        </div>

        {/* Second Row */}
        <div
          className="flex justify-center relative z-[30]"
          style={{
            marginTop: "-65px",
            marginLeft: `-${90}px`, // rowOffset
          }}
        >
          <div
            style={{ display: "flex", gap: `${140}px` /* secondRowSpacing */ }}
          >
            {projects
              .filter((p) => p.position.startsWith("second"))
              .map((p) => (
                <div key={p.id} style={{ width: `${tvWidth}px` }}>
                  <ProjectTV project={p} />
                </div>
              ))}
          </div>
        </div>

        {/* Third Row */}
        <div
          className="flex justify-center relative z-[20]"
          style={{
            marginTop: "-65px",
            marginLeft: `${90}px`, // rowOffset
          }}
        >
          <div
            style={{ display: "flex", gap: `${134}px` /* thirdRowSpacing */ }}
          >
            {projects
              .filter((p) => p.position.startsWith("third"))
              .map((p) => (
                <div key={p.id} style={{ width: `${tvWidth}px` }}>
                  <ProjectTV project={p} />
                </div>
              ))}
          </div>
        </div>

        {/* Bottom Row */}
        <div
          className="flex justify-center relative z-[10]"
          style={{
            marginTop: "-65px",
          }}
        >
          <div
            style={{ display: "flex", gap: `${140}px` /* bottomRowSpacing */ }}
          >
            {projects
              .filter((p) => p.position.startsWith("bottom"))
              .map((p) => (
                <div key={p.id} style={{ width: `${tvWidth}px` }}>
                  <ProjectTV project={p} />
                </div>
              ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <MobileLayout />
      <DesktopLayout />
    </>
  );
};

export default RetroTVPortfolio;
