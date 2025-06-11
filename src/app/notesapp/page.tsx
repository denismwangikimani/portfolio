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
    src: "/images/notesapp-screenshots/landing.png",
    alt: "Screenshot 1",
  },
  { src: "/images/notesapp-screenshots/signup.png", alt: "Screenshot 2" },
  { src: "/images/notesapp-screenshots/heartnotes.png", alt: "Screenshot 3" },
  { src: "/images/notesapp-screenshots/flashcards.png", alt: "Screenshot 4" },
  { src: "/images/notesapp-screenshots/governance.png", alt: "Screenshot 5" },
  { src: "/images/notesapp-screenshots/filesidebar.png", alt: "Screenshot 6" },
  { src: "/images/notesapp-screenshots/filesidebarAI.png", alt: "Screenshot 7" },
  { src: "/images/notesapp-screenshots/settings.png", alt: "Screenshot 8" },
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
            Byte-Notes is an intelligent MERN stack note-taking application,
            featuring AI-powered assistance for writing and learning, media
            uploads, secure user authentication (Google & email/password), and
            a one-time Stripe payment model for lifetime access.
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
            href="https://bytenotesapp.netlify.app"
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
            Byte-Notes revolutionizes note management by integrating powerful
            AI tools (writing aid, flashcard generation, content Q&A,
            text-to-speech), media support, and robust security within a
            clean, responsive interface. Users can create, organize, and
            learn from their notes more effectively. It features secure
            Google/email authentication and a one-time Stripe payment for
            full access, ensuring a comprehensive and modern note-taking
            experience.
          </p>
        </section>

        {/* Features Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>
              AI-Powered Tools: Writing assistance, flashcard generation,
              content Q&A, text-to-speech.
            </li>
            <li>
              Rich Note Management: Create, edit, delete, group notes with a
              rich text editor, search, and filter.
            </li>
            <li>
              Media Integration: Upload and attach various file types to
              notes.
            </li>
            <li>
              Secure Authentication: Email/Password & Google OAuth, protected
              by JWT.
            </li>
            <li>
              Stripe Payment System: One-time fee for lifetime application
              access.
            </li>
            <li>
              User Account Control: Manage profile (username), change
              password, and delete account.
            </li>
            <li>
              Responsive Design: Seamless experience across desktop, tablet,
              and mobile devices.
            </li>
          </ul>
        </section>

        {/* Setup Instructions */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Setup Instructions
          </h2>
          <ol className="list-decimal list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>Clone the repository.</li>
            <li>
              Install dependencies:{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                npm install
              </code>{" "}
              in both client and server directories.
            </li>
            <li>
              Configure server{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">.env</code>:{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded ml-1">
                DB_URL, JWT_SECRET, PORT, STRIPE_SECRET_KEY, GOOGLE_CLIENT_ID
              </code>
            </li>
            <li>
              Configure client{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">.env</code>:{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded ml-1">
                REACT_APP_GOOGLE_CLIENT_ID, REACT_APP_STRIPE_PUBLISHABLE_KEY,
                REACT_APP_API_BASE_URL
              </code>
            </li>
            <li>
              Run server (
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                npm start
              </code>{" "}
              or{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                npm run dev
              </code>{" "}
              in server dir) and client (
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                npm start
              </code>{" "}
              in client dir).
            </li>
            <li>
              Access at{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                http://localhost:3000
              </code>{" "}
              (or client&apos;s configured port).
            </li>
          </ol>
        </section>

        {/* Screenshots Section */}
        <ScreenShotsSection screenshots={notesScreenshots} />

        {/* Navigation to Next Project */}
        <section className="text-center">
          <a
            href="/audiojam-music"
            className="text-blue-600 hover:underline text-lg"
          >
            Next Project: Spotify Audiojam
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default NotesPage;
