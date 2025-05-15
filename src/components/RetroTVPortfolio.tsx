"use client";

import React, { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import TV from "./TV";

const RetroTVPortfolio: React.FC = () => {
  const router = useRouter();
  const [hoveredTV, setHoveredTV] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  // Removed unused inViewport state

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
      image: "/images/notesapp-screenshots/landing.png",
      video: "/videos/bytes-notes-app-demo-video - Made with Clipchamp.mp4",
      link: "/notesapp",
      tvColor: "#fbc02d",
    },
    {
      id: 4,
      image: "/images/audiojam-screenshots/landingpage_upscaled_464x259.jpg",
      video: "/videos/Audiojam-demo-video.mp4",
      link: "/audiojam-music",
      tvColor: "#43a047",
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

  // Set up intersection observer for the entire tv section
  useEffect(() => {
    if (typeof window === "undefined" || !sectionRef.current) return;

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        // Add/remove scroll-snap class to body when entering/exiting Work section
        if (entry.isIntersecting) {
          document.body.classList.add("in-tv-section");
        } else {
          document.body.classList.remove("in-tv-section");
        }
      },
      {
        threshold: 0.1,
      }
    );

    sectionObserver.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) {
        sectionObserver.unobserve(sectionRef.current);
      }
      document.body.classList.remove("in-tv-section");
    };
  }, []);

  // Set up observers for individual TV sections
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("tv-active");
          } else {
            entry.target.classList.remove("tv-active");
          }
        });
      },
      {
        root: null,
        rootMargin: "-10% 0px",
        threshold: 0.3,
      }
    );

    const tvSections = document.querySelectorAll(".tv-section");
    tvSections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      tvSections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const handleTVClick = (link: string) => {
    router.push(link);
  };

  const ProjectTV: React.FC<{ project: (typeof projects)[0] }> = ({
    project,
  }) => (
    <div
      className="relative cursor-pointer transform transition-transform duration-500 hover:scale-105"
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
    <div ref={sectionRef} className="tv-portfolio-section">
      {projects.map((p) => (
        <div
          key={p.id}
          className="tv-section min-h-screen w-full flex items-center justify-center transform transition-all duration-700 opacity-0 translate-y-20"
          data-tv-id={p.id}
        >
          <div className="w-full max-w-[500px] transform lg:scale-[1.6] transition-transform">
            <ProjectTV project={p} />
          </div>
        </div>
      ))}

      <style jsx global>{`
        /* Base scroll styles */
        html {
          scroll-behavior: smooth;
        }

        /* Applied only when in TV section */
        body.in-tv-section {
          scroll-snap-type: y mandatory;
        }

        /* TV section specific styles */
        .tv-section {
          scroll-snap-align: start;
          scroll-snap-stop: always;
        }

        .tv-active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        /* Make sure the footer doesn't snap */
        #footer {
          scroll-snap-align: none;
        }
      `}</style>
    </div>
  );
};

export default RetroTVPortfolio;
