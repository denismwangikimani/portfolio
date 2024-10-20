//import Navbar from "@/Components/Navbar";
import LandingPart from "@/Components/Landing_part";
import Aboutme from "@/Components/Aboutme";
import Work from "@/Components/Work";
import Blog from "@/Components/Blog";
import Footer from "@/Components/Footer";
import React from "react";


export default function Home() {
  return (
    <main>
      <LandingPart />
      <Aboutme />
      <Work />
      <Blog />
      <Footer />
    </main>
  );
}
