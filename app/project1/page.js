"use client";
import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const ProjectPage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl py-16 md:py-24">
        {/* Banner Section */}
        <section className="space-y-8 mb-16">
          <video
            className="w-full h-auto rounded-lg shadow-md"
            src="/path-to-video.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Notes App
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center">
            A user-friendly notes application that allows users to create, read,
            update, and delete notes seamlessly.
          </p>
        </section>

        {/* Call to Action */}
        <section className="space-y-6 mb-16 text-center">
          <a
            href="https://live-demo-url.com"
            className="text-blue-600 hover:underline"
          >
            Live Demo
          </a>
          <br />
          <a
            href="https://github.com/yourusername/notes-app"
            className="text-blue-600 hover:underline"
          >
            GitHub Repository
          </a>
        </section>

        {/* Project Description */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Project Description
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            The Notes App solves the problem of managing personal and
            professional notes effectively. It is designed for anyone who needs
            to keep their tasks and ideas organized, from students to
            professionals.
          </p>
        </section>

        {/* Development Process */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Development Process
          </h2>
          <div className="w-full h-64 bg-gray-300 rounded-lg flex items-center justify-center">
            <p className="text-center text-gray-600">Flowchart Placeholder</p>
          </div>
          <p className="text-lg md:text-xl leading-relaxed">
            The application is built using React for the frontend and Express
            for the backend. It employs a PostgreSQL database for secure and
            efficient data storage.
          </p>
        </section>

        {/* Project Screenshots */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            App Screenshots
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {Array.from({ length: 5 }).map((_, index) => (
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

        {/* Challenges and Solutions */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Challenges and Solutions
          </h2>
          <p className="text-lg md:text-xl leading-relaxed">
            During development, one of the challenges was implementing secure
            user authentication. This was resolved by hashing passwords with
            bcryptjs-react and utilizing JWTs for session management.
          </p>
        </section>

        {/* Navigation to Next Project */}
        <section className="text-center">
          <a href="/project2" className="text-blue-600 hover:underline">
            Next Project
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectPage;
