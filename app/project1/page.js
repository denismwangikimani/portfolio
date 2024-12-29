import React from "react";
import Image from "next/image";

export default function Project1() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Banner Section */}
      <section className="relative h-96 flex items-center justify-center bg-red-500">
        <video 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          autoPlay
          loop
          muted
        >
          <source src="/path-to-video.mp4" type="video/mp4" />
        </video>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold mb-4">Project 1</h1>
          <p className="text-lg italic">Revolutionizing Waste Management</p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="flex justify-center items-center my-8">
        <a
          href="live-demo-link"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mx-2"
        >
          Live Demo
        </a>
        <a
          href="github-repo-link"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-button bg-gray-800 hover:bg-gray-900 text-white font-bold py-2 px-4 rounded mx-2"
        >
          GitHub Repo
        </a>
      </section>

      {/* Short Project Description */}
      <section className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-700">
          This project addresses the issue of inefficient waste management by
          providing a seamless solution for tracking and recycling. The app is
          designed for urban municipalities and waste collection agencies to
          optimize routes and improve efficiency.
        </p>
      </section>

      {/* Development Process */}
      <section className="p-8 mt-8 bg-gray-50">
        <Image
          src="/path-to-flowchart.png"
          alt="Development Flowchart"
          className="mx-auto"
          width={800}
          height={600}
        />
      </section>

      {/* Snippets of Code */}
      <section className="p-8 bg-white shadow-md rounded-lg max-w-4xl mx-auto mt-8">
        <h2 className="text-3xl font-semibold mb-4">Key Code Snippets</h2>
        <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
          <code>
{`function optimizeRoute(wasteLocations) {
  const optimized = wasteLocations.sort((a, b) => a.distance - b.distance);
  return optimized;
}`}
          </code>
        </pre>
      </section>

      {/* Challenges and Solutions */}
      <section className="p-8 mt-8 bg-gray-50">
        <h2 className="text-3xl font-semibold mb-4">Challenges & Solutions</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>
            <strong>Challenge:</strong> Mapping inefficient routes dynamically.
            <br />
            <strong>Solution:</strong> Implemented Dijkstra’s algorithm for
            shortest path optimization.
          </li>
          <li>
            <strong>Challenge:</strong> Real-time updates with minimal lag.
            <br />
            <strong>Solution:</strong> Leveraged WebSockets for real-time
            communication.
          </li>
        </ul>
      </section>

      {/* Navigation to Next Project */}
      <section className="flex justify-end p-8">
        <a
          href="/project2"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        >
          Next Project →
        </a>
      </section>
    </main>
  );
}
