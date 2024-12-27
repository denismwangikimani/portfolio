import React from "react";
import Navbar from "./Navbar";

const SprayPaintText = ({ children, className }) => (
  <div className={`relative ${className}`}>
    <div className="relative" style={{ 
      color: '#FFD700',
      opacity: 0.9,
      textShadow: '0 0 4px rgba(255, 215, 0, 0.3)',
      filter: 'blur(0.5px)'
    }}>
      {children}
    </div>
  </div>
);

const LandingPage = () => {
  return (
    <div className="relative h-screen w-full bg-white overflow-hidden">
      <div className="absolute top-0 w-full">
        <Navbar />
      </div>
      
      <div className="h-full flex flex-col justify-center items-center relative p-4">
        <div className="relative w-full max-w-4xl mx-auto text-center">
          <div className="relative">
            {/* Black text - Name */}
            <h1 className="text-black font-black text-[15vw] leading-[0.9] tracking-tighter">
              DENIS
              <br />
              MWANGI
            </h1>
            
            {/* Spray paint overlay text */}
            <div className="absolute inset-0 flex items-center justify-center">
              <SprayPaintText className="text-[14vw] tracking-tight transform -rotate-12 translate-y-1 font-handwritten">
                PORTFOLIO
              </SprayPaintText>
            </div>
            
            <p className="text-black text-[3vw] mt-4 font-medium tracking-tight">
              FULL STACK DEVELOPER
            </p>
          </div>
          
          {/* Single spray paint decorative element */}
          <div className="absolute -top-8 left-4 font-handwritten text-yellow-400 text-8xl">
            :)
          </div>
          <div className="absolute -bottom-8 right-4 font-handwritten text-yellow-400 text-8xl">
            !
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;