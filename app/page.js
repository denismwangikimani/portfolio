import LandingPart from "@/Components/Landing_part";
import Aboutme from "@/Components/Aboutme";
import Work from "@/Components/Work";
import Blog from "@/Components/Blog";
import Footer from "@/Components/Footer";
import React from "react";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <section id="landing" className="order-1">
        <LandingPart />
      </section>
      <section id="about" className="order-2">
        <Aboutme />
      </section>
      <section id="work" className="order-3">
        <Work />
      </section>
      <section id="blog" className="order-4">
        <Blog />
      </section>
      <section id="contact" className="order-5">
        <Footer />
      </section>
    </main>
  );
}
