"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TV from "./TV";

const RetroTVPortfolio: React.FC = () => {
  const router = useRouter();
  const [hoveredTV, setHoveredTV] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      image: "/images/online-store-screenshots/store-landing.png",
      video: "/videos/store-demo.mp4",
      link: "/store",
      tvColor: "#b71a11",
    },
    {
      id: 2,
      image: "/images/xyntra-screenshots/landing_464x261.jpg",
      video: "/videos/xyntra-web-bank-demo-video.mp4",
      link: "/xyntra-web-bank-app",
      tvColor: "#1e88e5",
    },
    {
      id: 3,
      image: "/images/audiojam-screenshots/landingpage_upscaled_464x259.jpg",
      video: "/videos/Audiojam-demo-video.mp4",
      link: "/audiojam-music",
      tvColor: "#43a047",
    },
    {
      id: 4,
      image: "/images/notesapp-screenshots/login (2)_464x261.jpg",
      video: "/videos/bytes-notes-app-demo-video - Made with Clipchamp.mp4",
      link: "/notesapp",
      tvColor: "#ffa000",
    },
    {
      id: 5,
      image: "/images/undead-purge-screenshots/login.png",
      video: "/videos/undead-purge-demo-video - Made with Clipchamp.mp4",
      link: "/undead-purge-game",
      tvColor: "#8e24aa",
    },
    {
      id: 6,
      image: "/images/menu-planner-screenshots/dashboard.png",
      video: "/videos/menu-demo.mp4",
      link: "/menu-scheduling",
      tvColor: "#f4511e",
    },
    {
      id: 7,
      image: "/images/crypto-bot-screenshots/bot_464x141.jpg",
      video: "/videos/crypto-bot-demo-video.mp4",
      link: "/binance",
      tvColor: "#00897b",
    },
  ];

  const handleTVClick = (link: string) => {
    router.push(link);
  };

  const ProjectTV: React.FC<{ project: (typeof projects)[0] }> = ({
    project,
  }) => (
    <div
      className="relative cursor-pointer"
      onMouseEnter={() => setHoveredTV(project.id)}
      onMouseLeave={() => setHoveredTV(null)}
      onClick={() => handleTVClick(project.link)}
    >
      <TV
        screenContent={
          hoveredTV === project.id ? (
            <video
              className="w-full h-full object-contain rounded-[25px]"
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
              objectFit="contain"
              className="rounded-[25px]"
            />
          )
        }
        tvColor={project.tvColor}
      />
    </div>
  );

  return (
    <div className="w-full">
      {projects.map((p) => (
        <div
          key={p.id}
          className="min-h-screen flex items-center justify-center"
        >
          {/* Scale up 30% on large screens */}
          <div className="w-full max-w-[500px] transform lg:scale-[1.6] transition-transform">
            <ProjectTV project={p} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default RetroTVPortfolio;
