import Navbar from "@/Components/Navbar";
import LandingPart from "@/Components/Landing_part";
import Aboutme from "@/Components/Aboutme";
import React from "react";


export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingPart />
      <Aboutme />
    </main>
  );
}
