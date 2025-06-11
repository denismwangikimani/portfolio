"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScreenShotsSection from "@/components/ScreenshotsSection";

interface Screenshot {
  src: string;
  alt: string;
}

const menuPlannerScreenshots: Screenshot[] = [
  {
    src: "/images/menu-planner-screenshots/login.png",
    alt: "Landing Page",
  },
  {
    src: "/images/menu-planner-screenshots/dashboard.png",
    alt: "Dashboard",
  },
  {
    src: "/images/menu-planner-screenshots/allergies.png",
    alt: "allergies page",
  },
  {
    src: "/images/menu-planner-screenshots/schedules.png",
    alt: "Schedules Management",
  },
  {
    src: "/images/menu-planner-screenshots/pdf.png",
    alt: "MENU DOWNLOADED PDF",
  },
];

const MenuSchedulingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl py-16 md:py-24">
        {/* Banner Section */}
        <section className="space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Menu Scheduling App
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-600">
            A comprehensive meal planning application built with React,
            TypeScript, and Node.js that automates menu scheduling while
            accommodating dietary restrictions and allergies.
          </p>
          <video
            className="w-full h-auto rounded-lg shadow-md"
            src="/videos/menu-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        {/* Call to Action */}
        <section className="space-y-6 mb-16 text-center">
          <a
            href="https://menu-scheduling-app.onrender.com"
            className="text-blue-600 hover:underline text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live App
          </a>
          <a
            href="https://github.com/chingu-voyages/V53-tier3-team-32"
            className="text-blue-600 hover:underline text-lg block mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </section>

        {/* Project Description */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Overview</h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            The Menu Scheduling App was developed as part of Chingu Voyage 53, a
            collaborative development program. Our team of 3 developers and 2
            scrum masters worked together using Agile methodologies to build
            this solution from concept to deployment over a 6-week sprint.
          </p>
        </section>

        {/* Features Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>
              User authentication with secure JWT sessions and social login
              options (Google, GitHub)
            </li>
            <li>
              Allergy tracking system that filters out dishes containing
              allergens
            </li>
            <li>
              Automated menu generation using dietary preferences and
              restrictions
            </li>
            <li>Manual menu scheduling with customizable meal plans</li>
            <li>PDF export functionality for offline access to weekly menus</li>
            <li>
              Responsive design with tailored mobile and desktop experiences
            </li>
          </ul>
        </section>

        {/* Key Integrations Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Key Integrations
          </h2>
          <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>
              <strong>MongoDB Atlas:</strong> NoSQL database for flexible data
              storage and retrieval of user profiles, menus, and allergies
            </li>
            <li>
              <strong>TheMealDB API:</strong> External service for accessing
              diverse meal recipes and ingredients
            </li>
            <li>
              <strong>JWT Authentication:</strong> Secure token-based
              authentication for protected routes and API access
            </li>
            <li>
              <strong>PDFKit:</strong> PDF generation library for exporting
              weekly menus in document format
            </li>
            <li>
              <strong>Passport.js:</strong> Authentication middleware supporting
              multiple OAuth strategies
            </li>
            <li>
              <strong>Tailwind CSS:</strong> Utility-first CSS framework for
              responsive and customizable UI components
            </li>
          </ul>
        </section>

        {/* Setup Instructions */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Setup Instructions
          </h2>
          <ol className="list-decimal list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>
              Clone the repository from the project GitHub link:
              <code className="bg-gray-100 px-1 py-0.5 rounded block mt-2 ml-6">
                git clone
                https://github.com/chingu-voyages/V53-tier3-team-32.git
                <br />
                cd V53-tier3-team-32
              </code>
            </li>
            <li>
              Install server dependencies:
              <code className="bg-gray-100 px-1 py-0.5 rounded block mt-2 ml-6">
                cd app/server
                <br />
                npm install
              </code>
            </li>
            <li>
              Configure server environment variables in{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">.env</code> file
            </li>
            <li>
              Install client dependencies:
              <code className="bg-gray-100 px-1 py-0.5 rounded block mt-2 ml-6">
                cd ../client
                <br />
                npm install
              </code>
            </li>
            <li>
              Run the development servers:
              <div className="ml-6 mt-2">
                <p>For the backend:</p>
                <code className="bg-gray-100 px-1 py-0.5 rounded block mt-1">
                  cd ../server
                  <br />
                  npm run watch
                </code>
                <p className="mt-2">For the frontend:</p>
                <code className="bg-gray-100 px-1 py-0.5 rounded block mt-1">
                  cd ../client
                  <br />
                  npm start
                </code>
              </div>
            </li>
            <li>
              Access the application at{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                http://localhost:3000
              </code>
            </li>
          </ol>
        </section>

        {/* Screenshots Section */}
        <ScreenShotsSection screenshots={menuPlannerScreenshots} />

        {/* Navigation to Next Project */}
        <section className="text-center">
          <a
            href="/undead-purge-game"
            className="text-blue-600 hover:underline text-lg"
          >
            Next Project: Undead Purge Unity Video Game
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MenuSchedulingPage;
