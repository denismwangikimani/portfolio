"use client";

import React from "react";
import Blog from "@/components/Blog";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-5xl py-16">
        <div className="space-y-12">
          <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold mb-8">
            Hello
          </h1>

          <p className="text-lg md:text-xl leading-relaxed">
            My name is Denis Mwangi Kimani. A self-taught full-stack developer
            based in Nairobi and currently working as a freelancer. My journey
            has been shaped by a passion for building dynamic and user-friendly
            web applications, leveraging modern technologies like React,
            Node.js, and PostgreSQL.
          </p>

          <p className="text-lg md:text-xl leading-relaxed">
            Beyond web development, I enjoy exploring game development with
            Unity as a fun and creative side project. I&apos;m passionate about
            problem-solving, continuous learning, and delivering high-quality
            solutions. When I&apos;m not coding, you&apos;ll find me
            experimenting with new ideas, refining my skills, or sharing
            insights to inspire others in the tech community.
          </p>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-semibold">Skills</h2>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-lg">
              <li className="flex items-center space-x-2">
                <span>TypeScript</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>React</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Node.js</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Unity</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>PostgreSQL</span>
              </li>
              <li className="flex items-center space-x-2">
                <span>Python</span>
              </li>
            </ul>
          </div>

          {/* Blog Section with ID for navigation */}
          <div id="blog">
            <Blog />
          </div>
        </div>
      </main>
    </div>
  );
};

export default AboutPage;
