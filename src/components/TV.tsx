"use client";

import React, { useState, ReactNode } from "react";

interface RetroTVProps {
  screenContent?: ReactNode;
  tvColor?: string;
}

const RetroTV: React.FC<RetroTVProps> = ({
  screenContent,
  tvColor = "#b71a11",
}) => {
  const [powerOn, setPowerOn] = useState(true); // Default to powered on for project display

  return (
    <div className="container flex justify-center items-center mt-16">
      <div className={`tv ${powerOn ? "on" : ""}`}>
        <div className="television-container flex flex-col items-center z-[1]">
          <div
            className="television w-[425px] h-[300px] rounded-[35px/45px] shadow-lg flex justify-center items-center z-[2] relative"
            style={{
              background: `linear-gradient(${tvColor}, ${tvColor}cc)`, // Use tvColor with gradient
            }}
          >
            <div className="television-inner w-[93%] h-[90%] bg-gradient-to-b from-[#454c45] via-[#232522] to-[#232522] border-b border-white shadow-inner relative flex content-center rounded-[25px/25px]">
              {/* Screen - takes the full width */}
              <div className="television-screen-container border border-[#222] shadow-md rounded-[35px/25px] m-[10px] overflow-hidden flex justify-center items-center bg-[linear-gradient(70deg,#555_15%,transparent_30%),repeating-conic-gradient(#222_0_30deg,#333_60deg,#222_90deg)] w-full">
                <div className="television-crt w-[99%] h-[95%] bg-[#111] shadow-md rounded-[85px/100px] overflow-hidden flex justify-center items-center">
                  <div className="television-screen bg-[#302d30] w-[95%] h-[95%] rounded-[30%] shadow-inner overflow-hidden relative">
                    {/* TV Screen Content - now using provided content */}
                    <div className="absolute inset-0 flex justify-center items-center z-[1]">
                      {screenContent || (
                        <div className="logo-container flex justify-center items-center">
                          <div className="logo bg-[#f34b59] w-[45px] h-[32px] rounded-[8px] mr-[5px] grid place-items-center">
                            <div className="play w-[15px] h-[15px] bg-white clip-triangle"></div>
                          </div>
                          <div className="text text-white text-[42px] tracking-tighter font-bold">
                            YouTube
                          </div>
                        </div>
                      )}
                    </div>

                    {/* TV Effects - kept on top of content */}
                    <div className="noise w-full h-full bg-[linear-gradient(to_bottom,transparent,#aaa4,#8881,#6664,#4445,#2228,#4443,transparent),repeating-linear-gradient(transparent_0_2px,rgba(37,36,41,0.3)_2px_4px)] animate-scanlines absolute inset-0 z-[4] pointer-events-none"></div>

                    {/* Power Off Overlay */}
                    <div
                      className={`off w-full h-full bg-[radial-gradient(#222,#1a1a1a,#111)] absolute top-0 transition-opacity duration-500 z-[5] ${
                        powerOn ? "opacity-0" : "opacity-100"
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Power Button - positioned on the bottom edge of the TV frame */}
            <div
              className="power-button w-[16px] h-[16px] absolute bottom-[8px] right-[32px] z-10"
              style={{ transform: "translateY(50%)" }}
            >
              <div
                className="button-outer w-full h-full bg-[#333] rounded-full shadow-md cursor-pointer border border-[#444] flex items-center justify-center"
                onClick={() => setPowerOn(!powerOn)}
              >
                <div className="button-inner w-[10px] h-[10px] rounded-full bg-gradient-to-t from-[#f6f6f6] to-[#999] shadow-inner"></div>
              </div>
            </div>
          </div>
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
        .clip-triangle {
          clip-path: polygon(0 0, 100% 50%, 0 100%);
        }
      `}</style>
    </div>
  );
};

export default RetroTV;
