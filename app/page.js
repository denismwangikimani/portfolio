import LandingPart from "@/Components/Landing_part";
import Aboutme from "@/Components/Aboutme";
import Work from "@/Components/Work";
import Blog from "@/Components/Blog";
import Footer from "@/Components/Footer";
import React from "react";

export default function Home() {
  return (
    <main>
      <section id="landing">
        <LandingPart />
      </section>
      <section id="about">
        <Aboutme />
      </section>
      <section id="work">
        <Work />
      </section>
      <section id="blog">
        <Blog />
      </section>
      <section id="contact">
        <Footer />
      </section>
    </main>
  );
}
