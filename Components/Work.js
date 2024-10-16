"use client";

import React from "react";

const Work = () => {
  const projects = [
    {
      id: 1,
      name: "PROJECT ONE",
      bgColor: "bg-rose-500",
      textPosition: "right",
      imagePosition: "left",
    },
    {
      id: 2,
      name: "PROJECT TWO",
      bgColor: "bg-blue-500",
      textPosition: "left",
      imagePosition: "right",
    },
    {
      id: 3,
      name: "PROJECT THREE",
      bgColor: "bg-emerald-500",
      textPosition: "right",
      imagePosition: "left",
    },
    {
      id: 4,
      name: "PROJECT FOUR",
      bgColor: "bg-purple-500",
      textPosition: "left",
      imagePosition: "right",
    },
    {
      id: 5,
      name: "PROJECT FIVE",
      bgColor: "bg-amber-500",
      textPosition: "right",
      imagePosition: "left",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white py-20">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
        .font-handwritten {
          font-family: "Permanent Marker", cursive;
        }
      `}</style>
      {/* Header */}
      <div className="w-full max-w-7xl mx-auto px-4 mb-20">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold font-handwritten text-black">
            SELECTED CASES
          </h2>
          <div className="w-8 h-8 rounded-full bg-yellow-300"></div>
        </div>
      </div>

      {/* Projects */}
      <div className="space-y-32">
        {projects.map((project) => (
          <div key={project.id} className="w-full max-w-7xl mx-auto px-20">
            {" "}
            {/* Increased px for spacing */}
            <div className="flex items-center justify-between gap-8">
              {/* Content side */}
              <div
                className={`w-1/3 ${
                  project.textPosition === "left" ? "order-1" : "order-2"
                }`}
              >
                <h3 className="text-3xl font-bold tracking-wider mb-4 text-black font-handwritten w">
                  {project.name}
                </h3>
              </div>

              {/* Image side */}
              <div
                className={`w-1/3 aspect-[16/9] ${project.bgColor} ${
                  project.imagePosition === "left" ? "order-1" : "order-2"
                }`}
              >
                {/* This div will be replaced with your project images later */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
