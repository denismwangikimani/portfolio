"use client";
import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const UndeadPurgePage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl py-16 md:py-24">
        {/* Banner Section */}
        <section className="space-y-8 mb-16">
          <video
            className="w-full h-auto rounded-lg shadow-md"
            src="/path-to-gameplay-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Undead Purge
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-600">
            An intense zombie survival FPS game set in a desert apocalypse. Built using Unity and C#, 
            the game challenges you to survive waves of undead enemies.
          </p>
        </section>

        {/* Call to Action */}
        <section className="space-y-6 mb-16 text-center">
          <a
            href="https://itch.io/undead-purge" // Replace with actual itch.io link
            className="text-blue-600 hover:underline text-lg"
          >
            Download on itch.io
          </a>
          <a
            href="https://drive.google.com/path-to-project" // Replace with actual Google Drive link
            className="text-blue-600 hover:underline text-lg block mt-4"
          >
            Project Files (Google Drive)
          </a>
        </section>

        {/* Project Description */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Project Description
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            *Undead Purge* is a zombie wave survival game set in a sprawling desert environment. 
            Players must collect weapons and resources to fend off increasingly challenging waves of zombies. 
            Each wave doubles the number of enemies, requiring strategy, precision, and resource management 
            to survive.
          </p>
        </section>

        {/* Features Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>Desert apocalypse setting with dynamic gameplay.</li>
            <li>Multiple weapon types: pistol, rifle, grenades, smoke grenades.</li>
            <li>Wave-based zombie survival where enemy numbers double each round.</li>
            <li>Responsive controls: walk, jump, reload, and weapon switching.</li>
            <li>Built using Unity and C# for immersive 3D gameplay.</li>
          </ul>
        </section>

        {/* Setup Instructions */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Setup Instructions
          </h2>
          <ol className="list-decimal list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>Download the game project folder from the Google Drive link above.</li>
            <li>Open Unity and load the downloaded project folder.</li>
            <li>Ensure all dependencies are correctly installed and configured.</li>
            <li>Press the &quot;Play&quot; button in Unity to test and play the game.</li>
          </ol>
        </section>

        {/* Screenshots Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Game Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center"
              >
                <p className="text-center text-gray-600">
                  Screenshot {index + 1}
                </p>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default UndeadPurgePage;
