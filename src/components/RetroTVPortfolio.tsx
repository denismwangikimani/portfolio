"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const RetroTVPortfolio: React.FC = () => {
  const router = useRouter();
  const [hoveredTV, setHoveredTV] = useState<number | null>(null);

  // Sample projects - replace with your actual projects
  const projects = [
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

  const handleTVClick = () => {
    router.push("/About");
  };

  // Function to determine TV rotation based on position
  const getTVRotation = (position: string) => {
    if (position.includes("left")) return "-rotate-6";
    if (position.includes("right")) return "rotate-6";
    return "";
  };

  return (
    <div className="relative w-full min-h-screen bg-white py-16 px-4">
      {/* Top row - 2 TVs */}
      <div className="flex justify-center mb-16">
        <div className="flex flex-wrap gap-6 justify-center max-w-6xl">
          {projects
            .filter((p) => p.position.startsWith("top"))
            .map((project) => (
              <div
                key={project.id}
                className={`relative cursor-pointer transform ${getTVRotation(
                  project.position
                )} hover:scale-105 transition-transform duration-300`}
                onMouseEnter={() => setHoveredTV(project.id)}
                onMouseLeave={() => setHoveredTV(null)}
                onClick={handleTVClick}
              >
                <div className="television-container flex flex-col items-center z-[1]">
                  <div className="television w-[250px] h-[200px] rounded-[25px] shadow-lg bg-gradient-to-b from-[#b71a11] to-[#88110b] flex justify-center items-center z-[2]">
                    <div className="television-inner w-[93%] h-[90%] bg-gradient-to-b from-[#454c45] via-[#232522] to-[#232522] border-b border-white shadow-inner rounded-[15px] flex items-center justify-center overflow-hidden">
                      <div className="television-screen-container border border-[#222] shadow-md rounded-[15px] w-[90%] h-[85%] overflow-hidden flex justify-center items-center">
                        <div className="television-crt w-[99%] h-[95%] bg-[#111] shadow-md rounded-[15px] overflow-hidden flex justify-center items-center">
                          <div className="television-screen bg-[#302d30] w-[95%] h-[95%] rounded-[15px] shadow-inner overflow-hidden relative">
                            {hoveredTV === project.id ? (
                              <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                              >
                                <source src={project.video} type="video/mp4" />
                              </video>
                            ) : (
                              <img
                                src={project.image}
                                alt={`Project ${project.id}`}
                                className="w-full h-full object-cover"
                              />
                            )}
                            <div className="noise absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_bottom,transparent,#aaa4,#8881,#6664,#4445,#2228,#4443,transparent),repeating-linear-gradient(transparent_0_2px,rgba(37,36,41,0.3)_2px_4px)] animate-scanlines"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="television-base w-[200px] h-[15px] bg-gradient-to-b from-[#b71a11] to-[#88110b] flex justify-between items-center shadow-md"></div>
                  <div className="foot-container w-[70%] flex justify-between">
                    <div className="foot left w-5 h-2.5 bg-[#b71a11] shadow-md"></div>
                    <div className="foot right w-5 h-2.5 bg-[#b71a11] shadow-md"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Middle row - 2 TVs */}
      <div className="flex justify-center mb-16">
        <div className="flex flex-wrap gap-6 justify-center max-w-6xl">
          {projects
            .filter((p) => p.position.startsWith("middle"))
            .map((project) => (
              <div
                key={project.id}
                className={`relative cursor-pointer transform ${getTVRotation(
                  project.position
                )} hover:scale-105 transition-transform duration-300`}
                onMouseEnter={() => setHoveredTV(project.id)}
                onMouseLeave={() => setHoveredTV(null)}
                onClick={handleTVClick}
              >
                <div className="television-container flex flex-col items-center z-[1]">
                  <div className="television w-[250px] h-[200px] rounded-[25px] shadow-lg bg-gradient-to-b from-[#b71a11] to-[#88110b] flex justify-center items-center z-[2]">
                    <div className="television-inner w-[93%] h-[90%] bg-gradient-to-b from-[#454c45] via-[#232522] to-[#232522] border-b border-white shadow-inner rounded-[15px] flex items-center justify-center overflow-hidden">
                      <div className="television-screen-container border border-[#222] shadow-md rounded-[15px] w-[90%] h-[85%] overflow-hidden flex justify-center items-center">
                        <div className="television-crt w-[99%] h-[95%] bg-[#111] shadow-md rounded-[15px] overflow-hidden flex justify-center items-center">
                          <div className="television-screen bg-[#302d30] w-[95%] h-[95%] rounded-[15px] shadow-inner overflow-hidden relative">
                            {hoveredTV === project.id ? (
                              <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                              >
                                <source src={project.video} type="video/mp4" />
                              </video>
                            ) : (
                              <img
                                src={project.image}
                                alt={`Project ${project.id}`}
                                className="w-full h-full object-cover"
                              />
                            )}
                            <div className="noise absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_bottom,transparent,#aaa4,#8881,#6664,#4445,#2228,#4443,transparent),repeating-linear-gradient(transparent_0_2px,rgba(37,36,41,0.3)_2px_4px)] animate-scanlines"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="television-base w-[200px] h-[15px] bg-gradient-to-b from-[#b71a11] to-[#88110b] flex justify-between items-center shadow-md"></div>
                  <div className="foot-container w-[70%] flex justify-between">
                    <div className="foot left w-5 h-2.5 bg-[#b71a11] shadow-md"></div>
                    <div className="foot right w-5 h-2.5 bg-[#b71a11] shadow-md"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Bottom row - 3 TVs */}
      <div className="flex justify-center">
        <div className="flex flex-wrap gap-6 justify-center max-w-6xl">
          {projects
            .filter((p) => p.position.startsWith("bottom"))
            .map((project) => (
              <div
                key={project.id}
                className={`relative cursor-pointer transform ${getTVRotation(
                  project.position
                )} hover:scale-105 transition-transform duration-300`}
                onMouseEnter={() => setHoveredTV(project.id)}
                onMouseLeave={() => setHoveredTV(null)}
                onClick={handleTVClick}
              >
                <div className="television-container flex flex-col items-center z-[1]">
                  <div className="television w-[250px] h-[200px] rounded-[25px] shadow-lg bg-gradient-to-b from-[#b71a11] to-[#88110b] flex justify-center items-center z-[2]">
                    <div className="television-inner w-[93%] h-[90%] bg-gradient-to-b from-[#454c45] via-[#232522] to-[#232522] border-b border-white shadow-inner rounded-[15px] flex items-center justify-center overflow-hidden">
                      <div className="television-screen-container border border-[#222] shadow-md rounded-[15px] w-[90%] h-[85%] overflow-hidden flex justify-center items-center">
                        <div className="television-crt w-[99%] h-[95%] bg-[#111] shadow-md rounded-[15px] overflow-hidden flex justify-center items-center">
                          <div className="television-screen bg-[#302d30] w-[95%] h-[95%] rounded-[15px] shadow-inner overflow-hidden relative">
                            {hoveredTV === project.id ? (
                              <video
                                className="w-full h-full object-cover"
                                autoPlay
                                muted
                                loop
                              >
                                <source src={project.video} type="video/mp4" />
                              </video>
                            ) : (
                              <img
                                src={project.image}
                                alt={`Project ${project.id}`}
                                className="w-full h-full object-cover"
                              />
                            )}
                            <div className="noise absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_bottom,transparent,#aaa4,#8881,#6664,#4445,#2228,#4443,transparent),repeating-linear-gradient(transparent_0_2px,rgba(37,36,41,0.3)_2px_4px)] animate-scanlines"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="television-base w-[200px] h-[15px] bg-gradient-to-b from-[#b71a11] to-[#88110b] flex justify-between items-center shadow-md"></div>
                  <div className="foot-container w-[70%] flex justify-between">
                    <div className="foot left w-5 h-2.5 bg-[#b71a11] shadow-md"></div>
                    <div className="foot right w-5 h-2.5 bg-[#b71a11] shadow-md"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scanlines {
          0% {
            background-position-y: 0, 0;
          }
          100% {
            background-position-y: -221px, -150px;
          }
        }
        .animate-scanlines {
          animation: scanlines 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default RetroTVPortfolio;
