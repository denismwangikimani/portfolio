"use client";

import React from "react";

interface StickerProps {
  color: string;
  text: string;
}

const Sticker: React.FC<StickerProps> = ({ color, text }) => {
  return (
    <div
      className={`relative flex items-center justify-center px-4 py-2 rounded-md shadow-lg`}
      style={{
        backgroundColor: color,
        width: "280px",
        transform: "rotate(-5deg)",
      }}
    >
      <div className="text-black font-bold text-sm">
        <p className="uppercase">Denis Mwangi</p>
        <p className="text-xs font-light">{text}</p>
        <p className="text-xs">スマイル</p>
      </div>
      <div className="absolute top-2 right-2 text-2xl">😊</div>
    </div>
  );
};

const LandingPart = () => {
  return (
    <div className="flex flex-col gap-4 items-center min-h-screen p-6 justify-center">
      <div className="flex flex-col gap-2 items-center relative">
        <div className="relative" style={{ transform: "rotate(-5deg)" }}>
          <Sticker color="#D32F2F" text="Full Stack Software Developer" />
        </div>
        <div
          className="relative"
          style={{ transform: "rotate(5deg)", top: "-20px", left: "20px" }}
        >
          <Sticker color="#FBC02D" text="Full Stack Software Developer" />
        </div>
      </div>
    </div>
  );
};

export default LandingPart;
