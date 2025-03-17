"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScreenShotsSection from "@/components/ScreenshotsSection";

interface Screenshot {
  src: string;
  alt: string;
}

const xyntraScreenshots: Screenshot[] = [
  {
    src: "/images/xyntra-screenshots/landing_464x261.jpg",
    alt: "Landing Page",
  },
  {
    src: "/images/xyntra-screenshots/transactions.png",
    alt: "Transactions Page",
  },
  { src: "/images/xyntra-screenshots/transfer.png", alt: "Transfer Page" },
  { src: "/images/xyntra-screenshots/bank.png", alt: "Bank Account Page" },
];

const XyntraWebBankPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl py-16 md:py-24">
        {/* Banner Section */}
        <section className="space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Xyntra Web Bank App
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-600">
            A modern banking application built using Next.js, TypeScript, and
            Tailwind CSS, offering seamless account management and secure
            transactions.
          </p>
          <video
            className="w-full h-auto rounded-lg shadow-md"
            src="/videos/xyntra-web-bank-demo-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        {/* Call to Action */}
        <section className="space-y-6 mb-16 text-center">
          <a
            href="https://xyntra-web-bank-app.vercel.app/"
            className="text-blue-600 hover:underline text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live App
          </a>
          <a
            href="https://github.com/denismwangikimani/xyntra_web_bank_app"
            className="text-blue-600 hover:underline text-lg block mt-4"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </section>

        {/* Key Features Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>User authentication with secure sessions using Appwrite.</li>
            <li>
              Bank account linking and transaction history powered by Plaid.
            </li>
            <li>Fund transfers enabled through Dwolla integration.</li>
            <li>Responsive design optimized for mobile and desktop devices.</li>
          </ul>
        </section>

        {/* Key Integrations Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Key Integrations
          </h2>
          <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>
              <strong>Appwrite</strong>: Secure user authentication and database
              management.
            </li>
            <li>
              <strong>Plaid</strong>: Account linking and transaction retrieval.
            </li>
            <li>
              <strong>Dwolla</strong>: Enabling secure fund transfers.
            </li>
            <li>
              <strong>Sentry</strong>: Real-time error tracking and monitoring.
            </li>
          </ul>
        </section>

        {/* Setup Instructions Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Setup Instructions
          </h2>
          <ol className="list-decimal list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>Clone the repository from the project GitHub link.</li>
            <li>
              Install dependencies using{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                npm install
              </code>
              .
            </li>
            <li>
              Configure the environment variables in the{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">.env</code> file
              using the example provided.
            </li>
            <li>
              Run the development server with{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                npm run dev
              </code>
              .
            </li>
            <li>
              Access the application at{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                http://localhost:3000
              </code>
              .
            </li>
          </ol>
        </section>

        {/* Screenshots Section */}
        <ScreenShotsSection screenshots={xyntraScreenshots} />

        {/* Navigation to Next Project */}
        <section className="text-center">
          <a
            href="/audiojam-music"
            className="text-blue-600 hover:underline text-lg"
          >
            Next Project: AudioJam Spotify Project
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default XyntraWebBankPage;
