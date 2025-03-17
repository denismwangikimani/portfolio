"use client";

import React, { useState, ReactNode } from "react";

interface RetroTVProps {
  screenContent?: ReactNode;
}

const RetroTV: React.FC<RetroTVProps> = ({ screenContent }) => {
  const [powerOn, setPowerOn] = useState(true); // Default to powered on for project display
  const [channelValue, setChannelValue] = useState(0);
  const [volumeValue, setVolumeValue] = useState(0);

  const moveSelector = (
    button: "channel" | "volume",
    direction: 1 | -1,
    event: React.MouseEvent
  ) => {
    event.preventDefault();
    if (button === "channel") {
      setChannelValue((prev) => prev + 30 * direction);
    } else {
      setVolumeValue((prev) => prev + 30 * direction);
    }
  };

  return (
    <div className="container flex justify-center items-center mt-16">
      <div className={`tv ${powerOn ? "on" : ""}`}>
        <div className="television-container flex flex-col items-center z-[1]">
          <div className="television w-[425px] h-[300px] rounded-[35px/45px] shadow-lg bg-gradient-to-b from-[#b71a11] to-[#88110b] flex justify-center items-center z-[2]">
            <div className="television-inner w-[93%] h-[90%] bg-gradient-to-b from-[#454c45] via-[#232522] to-[#232522] border-b border-white shadow-inner relative grid grid-cols-[3fr_1fr] grid-rows-[0.8fr] content-center gap-[3px] rounded-[25px/25px]">
              {/* Screen */}
              <div className="television-screen-container border border-[#222] shadow-md rounded-[35px/25px] m-[10px] overflow-hidden flex justify-center items-center bg-[linear-gradient(70deg,#555_15%,transparent_30%),repeating-conic-gradient(#222_0_30deg,#333_60deg,#222_90deg)]">
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

              {/* Controls - rest of TV component remains the same */}
              <div className="television-lateral grid grid-rows-[1.1fr_1fr] gap-[12px] my-[15px] ml-0">
                {/* ...existing controls code... */}
                <div className="dial-container border-2 border-[#333] border-l-[#444] border-b-[#444] rounded-[5px] shadow-md flex flex-col justify-center gap-[6px] items-center">
                  {/* Channel Button */}
                  <div
                    className="dial channel-button w-[42px] h-[42px] border-2 border-[#6e706f] rounded-full shadow-md flex justify-center items-center relative cursor-pointer bg-black"
                    onClick={(e) => moveSelector("channel", 1, e)}
                    onContextMenu={(e) => moveSelector("channel", -1, e)}
                  >
                    <div className="data-container flex justify-center w-full h-full">
                      {Array(12)
                        .fill(0)
                        .map((_, i) => (
                          <div
                            key={`channel-${i}`}
                            className="data text-[#888] text-[6px] shadow-sm absolute top-0 h-full"
                            style={{
                              transform: `rotate(${i * 30}deg)`,
                              transformOrigin: "50% 50%",
                            }}
                          >
                            #
                          </div>
                        ))}
                    </div>
                    <div className="dial-core w-[28px] h-[28px] rounded-full bg-[conic-gradient(#eee_0deg_45deg,#666_70deg_285deg,#eee_320deg)] absolute"></div>
                    <div
                      className="selector absolute w-[75%] h-1 bg-gradient-to-b from-[#666] to-[#aaa] border border-[#666] rounded"
                      style={{ transform: `rotate(${channelValue - 90}deg)` }}
                    ></div>
                  </div>

                  {/* Volume Button */}
                  <div
                    className="dial volume-button w-[42px] h-[42px] border-2 border-[#6e706f] rounded-full shadow-md flex justify-center items-center relative cursor-pointer bg-[#ccc]"
                    onClick={(e) => moveSelector("volume", 1, e)}
                    onContextMenu={(e) => moveSelector("volume", -1, e)}
                  >
                    <div className="data-container flex justify-center w-full h-full">
                      {Array(12)
                        .fill(0)
                        .map((_, i) => (
                          <div
                            key={`volume-${i}`}
                            className="data text-[#444] text-[6px] shadow-sm absolute top-0 h-full"
                            style={{
                              transform: `rotate(${i * 30}deg)`,
                              transformOrigin: "50% 50%",
                            }}
                          >
                            #
                          </div>
                        ))}
                    </div>
                    <div className="dial-core w-[28px] h-[28px] rounded-full bg-[conic-gradient(#eee_0deg_45deg,#666_70deg_285deg,#eee_320deg)] absolute"></div>
                    <div
                      className="selector absolute w-[75%] h-1 bg-gradient-to-b from-[#666] to-[#aaa] border border-[#666] rounded"
                      style={{ transform: `rotate(${volumeValue - 90}deg)` }}
                    ></div>
                  </div>
                </div>

                <div className="speaker-container grid grid-cols-6 gap-[1px_0] mb-[12px] mx-[2px]">
                  {Array(48)
                    .fill(0)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="w-[10px] h-[10px] bg-[radial-gradient(#000,#222)] rounded-full border-b border-white"
                      ></div>
                    ))}
                </div>
              </div>

              {/* Buttons */}
              <div className="buttons absolute bottom-[5px] right-[30px] w-[60px] flex justify-between">
                <div className="button-container w-[20px] h-[20px] bg-gradient-to-b from-white via-[#aaa] to-[#666] rounded-full flex justify-center items-center">
                  <div className="button w-[10px] h-[10px] rounded-full bg-gradient-to-t from-white via-[#aaa] to-[#666] shadow-md transform translate-x-0.5 translate-y-0.5 cursor-pointer active:translate-x-0 active:translate-y-0 active:shadow"></div>
                </div>
                <div className="button-container w-[20px] h-[20px] bg-gradient-to-b from-white via-[#aaa] to-[#666] rounded-full flex justify-center items-center">
                  <div
                    className="button w-[10px] h-[10px] rounded-full bg-gradient-to-t from-white via-[#aaa] to-[#666] shadow-md transform translate-x-0.5 translate-y-0.5 cursor-pointer active:translate-x-0 active:translate-y-0 active:shadow"
                    onClick={() => setPowerOn(!powerOn)}
                  ></div>
                </div>
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
