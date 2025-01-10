"use client";
import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ScreenShotsSection from "@/Components/ScreenshotsSection";

const audioJamScreenshots = [
  { src: "/images/audiojam-screenshots/landing.png", alt: "Screenshot 1" },
  { src: "/images/audiojam-screenshots/login.png", alt: "Screenshot 2" },
  { src: "/images/audiojam-screenshots/billboard.png", alt: "Screenshot 3" },
  { src: "/images/audiojam-screenshots/top.png", alt: "Screenshot 4" },
  { src: "/images/audiojam-screenshots/roast.png", alt: "Screenshot 4" },
];

const AudioJamPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl py-16 md:py-24">
        {/* Banner Section */}
        <section className="space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            AudioJam Spotify Project
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-600">
            AudioJam Spotify is a web application integrating with the Spotify API 
            to deliver a personalized and interactive music experience.
          </p>
          <video
            className="w-full h-auto rounded-lg shadow-md"
            src="/videos/Audiojam-demo-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        {/* Call to Action */}
        <section className="space-y-6 mb-16 text-center">
          <a
            href="https://itch.io/undead-purge"
            className="text-blue-600 hover:underline text-lg"
          >
            Download on itch.io
          </a>
          <a
            href="https://drive.google.com/path-to-project" 
            className="text-blue-600 hover:underline text-lg block mt-4"
          >
            Project Files (Google Drive)
          </a>
        </section>

        {/* Project Description */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Overview
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            AudioJam Spotify is a feature-rich platform enabling users to explore 
            their music preferences, manage playlists, and receive personalized recommendations 
            in a fun and interactive way.
          </p>
        </section>

        {/* Features Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>Secure user authentication using Spotify’s OAuth system.</li>
            <li>Comprehensive playlist management, including creating and saving playlists.</li>
            <li>Search tracks, albums, and artists with song recommendations.</li>
            <li>Analyze audio features such as tempo, energy, and danceability.</li>
            <li>Integrate humor using the Gemini API for music taste roasts.</li>
            <li>Display Billboard Hot 100 and metadata from Last.fm and MusicBrainz.</li>
          </ul>
        </section>

        {/* Setup Instructions */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Setup Instructions
          </h2>
          <ol className="list-decimal list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>Clone the repository from the GitHub link above.</li>
            <li>Install dependencies using <code className="bg-gray-100 px-1 py-0.5 rounded">pip install -r requirements.txt</code>.</li>
            <li>Configure the environment variables in a <code className="bg-gray-100 px-1 py-0.5 rounded">.env</code> file:</li>
            <li>
              Run the application using <code className="bg-gray-100 px-1 py-0.5 rounded">python app.py</code>.
            </li>
            <li>Access the app at <code className="bg-gray-100 px-1 py-0.5 rounded">http://localhost:5000</code>.</li>
          </ol>
        </section>

        {/* Screenshots Section */}
        <ScreenShotsSection screenshots={audioJamScreenshots} />

        {/* Navigation to Next Project */}
        <section className="text-center">
          <a href="/notesapp" className="text-blue-600 hover:underline text-lg">
            Next Project: Byte Notes App
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AudioJamPage;
