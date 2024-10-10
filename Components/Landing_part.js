import React from "react";
import { Code, Database, Globe, Cpu } from "lucide-react";

const LandingPart = () => {
  return (
    <div className="relative h-screen w-full bg-gray-100 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <Code className="absolute top-10 left-10 w-20 h-20" />
        <Database className="absolute bottom-10 right-10 w-20 h-20" />
        <Globe className="absolute top-1/2 left-1/4 w-16 h-16" />
        <Cpu className="absolute bottom-1/4 right-1/3 w-24 h-24" />
      </div>

      {/* Main content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="bg-black text-white p-4 transform -skew-x-12">
          <div className="flex space-x-4 mb-2 text-xs">
            <span>FRONTEND</span>
            <span>BACKEND</span>
            <span>DATABASE</span>
            <span>DEVOPS</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-none mb-2">
            FULL STACK
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-none">
            SOFTWARE DEVELOPER
          </h2>
          <div className="mt-2 text-right text-sm">BY [YOUR NAME]</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPart;
