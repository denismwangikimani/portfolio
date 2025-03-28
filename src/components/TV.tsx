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
          {/* Antenna - removed mb-2 to eliminate the gap */}
          <div className="antenna-container w-[235px] h-[60px] flex flex-col justify-end">
            <div
              className="antenna w-full h-[4px] z-0 flex items-center"
              style={{
                background: `linear-gradient(to right, ${tvColor}, ${tvColor}cc)`,
                transformOrigin: "100% 50%",
                transform: "rotate(20deg) translateY(3px)",
              }}
            ></div>
          </div>

          <div
            className="television w-[425px] h-[300px] rounded-[35px/45px] shadow-lg flex justify-center items-center z-[2] relative"
            style={{
              background: `linear-gradient(${tvColor}, ${tvColor}cc)`, // Use tvColor with gradient
              marginTop: "-2px", // Add negative margin to connect with antenna
            }}
          >
            {/* Rest of TV code remains the same */}
            <div className="television-inner w-[93%] h-[90%] bg-gradient-to-b from-[#454c45] via-[#232522] to-[#232522] border-b border-white shadow-inner relative flex content-center rounded-[25px/25px]">
              {/* Screen - takes the full width */}
              <div className="television-screen-container border border-[#222] shadow-md rounded-[5px] m-[10px] overflow-hidden flex justify-center items-center bg-[#111] w-full">
                <div className="television-crt w-[99%] h-[98%] bg-[#111] overflow-hidden flex justify-center items-center">
                  <div className="television-screen bg-black w-full h-full overflow-hidden relative">
                    {/* TV Screen Content - content will be fully visible with no overlays */}
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

                    {/* Power Off Overlay - keeping this for functionality but removing all other effects */}
                    <div
                      className={`off w-full h-full bg-[#000] absolute top-0 transition-opacity duration-500 z-[5] ${
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

          {/* TV Base */}
          <div
            className="television-base w-[350px] h-[25px] flex justify-between items-center shadow-md relative"
            style={{
              background: `linear-gradient(to bottom, ${tvColor}, ${tvColor}dd)`,
            }}
          >
            <div className="slots w-1/2 h-[15px] flex justify-center">
              <div className="slot w-1 h-full bg-[#0b0000] ml-[3px] rounded-sm"></div>
              <div className="slot w-1 h-full bg-[#0b0000] ml-[3px] rounded-sm"></div>
              <div className="slot w-1 h-full bg-[#0b0000] ml-[3px] rounded-sm"></div>
            </div>
            <div className="slots w-1/2 h-[15px] flex justify-center">
              <div className="slot w-1 h-full bg-[#0b0000] ml-[3px] rounded-sm"></div>
              <div className="slot w-1 h-full bg-[#0b0000] ml-[3px] rounded-sm"></div>
              <div className="slot w-1 h-full bg-[#0b0000] ml-[3px] rounded-sm"></div>
              <div className="slot w-1 h-full bg-[#0b0000] ml-[3px] rounded-sm"></div>
              <div className="slot w-1 h-full bg-[#0b0000] ml-[3px] rounded-sm"></div>
              <div className="slot w-1 h-full bg-[#0b0000] ml-[3px] rounded-sm"></div>
            </div>
          </div>

          {/* TV Feet */}
          <div className="foot-container w-[70%] flex justify-between">
            <div
              className="foot left w-5 h-2.5 shadow-md"
              style={{
                background: tvColor,
              }}
            ></div>
            <div
              className="foot right w-5 h-2.5 shadow-md"
              style={{
                background: tvColor,
              }}
            ></div>
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
