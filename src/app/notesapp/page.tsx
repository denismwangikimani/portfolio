"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScreenShotsSection from "@/components/ScreenshotsSection";

interface Screenshot {
  src: string;
  alt: string;
}

const notesScreenshots: Screenshot[] = [
  {
    src: "/images/notesapp-screenshots/login (2)_464x261.jpg",
    alt: "Screenshot 1",
  },
  { src: "/images/notesapp-screenshots/notes.png", alt: "Screenshot 2" },
  { src: "/images/notesapp-screenshots/search.png", alt: "Screenshot 3" },
  { src: "/images/notesapp-screenshots/empty.png", alt: "Screenshot 4" },
];

const NotesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl py-16 md:py-24">
        {/* Banner Section */}
        <section className="space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Byte-Notes
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-600">
            A modern web-based note-taking application built using the MERN
            stack. Byte-Notes simplifies your note management with a responsive
            design and secure user authentication.
          </p>
          <video
            className="w-full h-auto rounded-lg shadow-md"
            src="/videos/bytes-notes-app-demo-video - Made with Clipchamp.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        {/* Call to Action */}
        <section className="space-y-6 mb-16 text-center">
          <a
            href="https://new-bytes-notes-app.onrender.com/"
            className="text-blue-600 hover:underline text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live App
          </a>
          <a
            href="https://github.com/denismwangikimani/new-bytes-notes-app"
            className="text-blue-600 hover:underline text-lg block mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </section>

        {/* Project Description */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Project Description
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            Byte-Notes offers seamless note management through its clean
            interface and powerful features. With responsive design and secure
            user authentication, it ensures your notes are accessible and
            protected across devices.
          </p>
        </section>

        {/* Features Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>Create, edit, delete, and organize notes effortlessly.</li>
            <li>Search and filter notes by creation date.</li>
            <li>Secure authentication using JWT and bcryptjs.</li>
            <li>
              Sensitive pages, like the notes dashboard, are accessible only to
              authenticated users.
            </li>
            <li>Responsive design for mobile and desktop use.</li>
          </ul>
        </section>

        {/* Setup Instructions */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Setup Instructions
          </h2>
          <ol className="list-decimal list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>Clone the repository from the GitHub link above.</li>
            <li>Install dependencies for both client and server.</li>
            <li>
              Configure the environment variables in the{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">.env</code>{" "}
              file:
              <code className="bg-gray-100 px-1 py-0.5 rounded ml-2">
                DB_URL, JWT_SECRET, PORT
              </code>
            </li>
            <li>Start the server and client.</li>
            <li>
              Access the app at{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                http://localhost:3000
              </code>
              .
            </li>
          </ol>
        </section>

        {/* Screenshots Section */}
        <ScreenShotsSection screenshots={notesScreenshots} />

        {/* Navigation to Next Project */}
        <section className="text-center">
          <a
            href="/xyntra-web-bank-app"
            className="text-blue-600 hover:underline text-lg"
          >
            Next Project: Xyntra Web Bank App
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotesPage;
