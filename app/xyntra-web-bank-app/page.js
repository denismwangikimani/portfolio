"use client";
import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const XyntraWebBankPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl py-16 md:py-24">
        {/* Banner Section */}
        <section className="space-y-8 mb-16">
          <video
            className="w-full h-auto rounded-lg shadow-md"
            src="/assets/xyntra-banner.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Xyntra Web Bank App
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-600">
            A modern banking application built using Next.js, TypeScript, and Tailwind CSS, 
            offering seamless account management and secure transactions.
          </p>
        </section>

        {/* Key Features Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>User authentication with secure sessions using Appwrite.</li>
            <li>Bank account linking and transaction history powered by Plaid.</li>
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
              <strong>Appwrite</strong>: Secure user authentication and database management.
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
            <li>Install dependencies using <code className="bg-gray-100 px-1 py-0.5 rounded">npm install</code>.</li>
            <li>
              Configure the environment variables in the `.env` file using the example provided.
            </li>
            <li>Run the development server with <code className="bg-gray-100 px-1 py-0.5 rounded">npm run dev</code>.</li>
            <li>Access the application at <code className="bg-gray-100 px-1 py-0.5 rounded">http://localhost:3000</code>.</li>
          </ol>
        </section>

        {/* Screenshots Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            App Screenshots
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

export default XyntraWebBankPage;
