"use client";

import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScreenShotsSection from "@/components/ScreenshotsSection";

interface Screenshot {
  src: string;
  alt: string;
}

const storeScreenshots: Screenshot[] = [
  {
    src: "/images/online-store-screenshots/store-landing.png",
    alt: "Homepage",
  },
  {
    src: "/images/online-store-screenshots/store-trousers-images.png",
    alt: "Products Page",
  },
  {
    src: "/images/online-store-screenshots/store-product-page.png",
    alt: "Product Detail",
  },
  {
    src: "/images/online-store-screenshots/store-cart.png",
    alt: "Shopping Cart",
  },
  {
    src: "/images/online-store-screenshots/store-scheckout.png",
    alt: "store checkout",
  },
  {
    src: "/images/online-store-screenshots/admin-dashboard.png",
    alt: "store checkout",
  },
  {
    src: "/images/online-store-screenshots/admin-products.png",
    alt: "store checkout",
  },
  {
    src: "/images/online-store-screenshots/admin-discounts.png",
    alt: "store checkout",
  },
  {
    src: "/images/online-store-screenshots/admin-orders.png",
    alt: "store checkout",
  },
  {
    src: "/images/online-store-screenshots/admin-customers.png",
    alt: "store checkout",
  },
];

const OnlineStorePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl py-16 md:py-24">
        {/* Banner Section */}
        <section className="space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            HOUSE OF KIMANI Online Store with Admin Panel
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-600">
            A comprehensive e-commerce platform built with Next.js, featuring a
            sleek customer shopping experience and a powerful admin dashboard
            for complete store management.
          </p>
          <video
            className="w-full h-auto rounded-lg shadow-md"
            src="/videos/store-demo.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </section>

        {/* Call to Action */}
        <section className="space-y-6 mb-16 text-center">
          <a
            href="https://houseofkimani.netlify.app/"
            className="text-blue-600 hover:underline text-lg"
            target="_blank"
            rel="noopener noreferrer"
          >
            Live App
          </a>
          <a
            href="https://github.com/denismwangikimani/online-store"
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
            HOUSE OF KIMANI is a modern e-commerce platform designed to provide
            both an exceptional customer shopping experience and comprehensive
            tools for store management. Built with Next.js 15 and leveraging the
            App Router architecture, the application delivers superior
            performance, SEO optimization, and a responsive design that works
            seamlessly across all devices.
          </p>
        </section>

        {/* Features Section */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">Key Features</h2>
          <ul className="list-disc list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>
              <strong>Customer Shopping Experience:</strong> Browse products by
              category, view detailed product information, and utilize search
              functionality.
            </li>
            <li>
              <strong>Shopping Cart Management:</strong> Add products with
              options (color, size), adjust quantities, and review before
              checkout.
            </li>
            <li>
              <strong>Secure Checkout:</strong> Complete purchases with Stripe
              integration for seamless payment processing.
            </li>
            <li>
              <strong>User Authentication:</strong> Sign in/sign up with email
              or Google, view order history and manage profile.
            </li>
            <li>
              <strong>Admin Dashboard:</strong> Analytics dashboard with sales
              data, revenue metrics, and performance indicators.
            </li>
            <li>
              <strong>Inventory Management:</strong> Add, edit, delete products
              with support for multiple images, sizes, colors, and stock
              tracking.
            </li>
            <li>
              <strong>Marketing Tools:</strong> Create and manage discounts with
              percentage-based offers on specific products.
            </li>
            <li>
              <strong>Order Management:</strong> View and process customer
              orders with status updates (pending, processing, completed,
              canceled).
            </li>
            <li>
              <strong>Customer Database:</strong> Access customer profiles with
              purchase history and contact information.
            </li>
            <li>
              <strong>Banner Customization:</strong> Update homepage promotional
              banners with custom images and text.
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
              <strong>Next.js 15:</strong> App router architecture for improved
              performance and SEO optimization.
            </li>
            <li>
              <strong>Supabase:</strong> Authentication, database, and storage
              solution for user management and data persistence.
            </li>
            <li>
              <strong>Stripe:</strong> Secure payment processing with support
              for multiple payment methods.
            </li>
            <li>
              <strong>TypeScript:</strong> Enhanced code reliability and
              developer experience with static type checking.
            </li>
            <li>
              <strong>Tailwind CSS:</strong> Utility-first CSS framework for
              responsive and customizable UI components.
            </li>
            <li>
              <strong>Recharts:</strong> Interactive charts and data
              visualization for the admin dashboard.
            </li>
            <li>
              <strong>React Hot Toast:</strong> Non-intrusive notification
              system for user feedback.
            </li>
            <li>
              <strong>Heroicons:</strong> Beautiful, hand-crafted SVG icons for
              enhanced UI.
            </li>
            <li>
              <strong>Headless UI:</strong> Unstyled, accessible UI components
              for custom implementations.
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
                git clone https://github.com/denismwangikimani/online-store.git
                <br />
                cd online-store
              </code>
            </li>
            <li>
              Install dependencies:
              <code className="bg-gray-100 px-1 py-0.5 rounded block mt-2 ml-6">
                npm install
              </code>
            </li>
            <li>
              Configure environment variables:
              <div className="ml-6 mt-2">
                <p>
                  Create a{" "}
                  <code className="bg-gray-100 px-1 py-0.5 rounded">
                    .env.local
                  </code>{" "}
                  file in the root directory based on the example provided
                </p>
                <p className="mt-1">Add your Supabase and Stripe API keys</p>
              </div>
            </li>
            <li>
              Run the development server:
              <code className="bg-gray-100 px-1 py-0.5 rounded block mt-2 ml-6">
                npm run dev
              </code>
            </li>
            <li>
              Access the application at{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                http://localhost:3000
              </code>
            </li>
            <li>
              For production deployment:
              <code className="bg-gray-100 px-1 py-0.5 rounded block mt-2 ml-6">
                npm run build
                <br />
                npm run start
              </code>
            </li>
          </ol>
        </section>

        {/* Screenshots Section */}
        <ScreenShotsSection screenshots={storeScreenshots} />

        {/* Navigation to Next Project */}
        <section className="text-center">
          <a
            href="/xyntra-web-bank"
            className="text-blue-600 hover:underline text-lg"
          >
            Next Project: Xyntra web bank App
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OnlineStorePage;
