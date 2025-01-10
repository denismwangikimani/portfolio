"use client";
import React from "react";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";
import ScreenShotsSection from "@/Components/ScreenshotsSection";

const binanceScreenshots = [
  { src: "/images/crypto-bot-screenshots/bot.png", alt: "Screenshot 1" },
];

const BinancePage = () => {
  return (
    <div className="min-h-screen bg-white text-black">
      <Navbar />
      <main className="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl py-16 md:py-24">
        {/* Banner Section */}
        <section className="space-y-8 mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Crypto Trading Bot
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-center text-gray-600">
            An automated cryptocurrency trading bot that utilizes real-time
            market data and advanced technical indicators to execute secure and
            efficient trades.
          </p>
          <video
            className="w-full h-auto rounded-lg shadow-md"
            src="/videos/crypto-bot-demo-video.mp4"
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
            Project Description
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            This project automates cryptocurrency trading by leveraging Binance
            API and technical indicators to analyze market data and execute
            predefined trading strategies. It ensures efficient operations and
            offers modularity for customizing strategies.
          </p>
        </section>

        {/* Development Process */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Development Process
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-gray-700">
            The bot was developed in Python, leveraging Binance API for
            real-time data acquisition and pandas for analysis. It integrates
            multiple technical indicators for precise decision-making and
            features a modular architecture for easy strategy customization.
          </p>
        </section>

        {/* Setup Instructions */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Setup Instructions
          </h2>
          <ol className="list-decimal list-inside text-lg md:text-xl leading-relaxed text-gray-700 space-y-2">
            <li>Clone the repository from the GitHub link above.</li>
            <li>Install Python 3.9 or higher.</li>
            <li>
              Install dependencies using{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">
                pip install -r requirements.txt
              </code>
              .
            </li>
            <li>
              Create a{" "}
              <code className="bg-gray-100 px-1 py-0.5 rounded">.env</code> file
              and add Binance API credentials.
            </li>
            <li>
              Run the bot using <code>python live_trading_mode.py</code>.
            </li>
          </ol>
        </section>

        {/* Flow of Data and Processes */}
        <section className="space-y-8 mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Flow of Data and Processes
          </h2>
          <div
            className="w-full rounded-lg flex items-center justify-center"
            style={{
              backgroundImage: "url('/images/crypto_bot_chart_flow.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              paddingBottom: "50%",
            }}
          ></div>
          <ul className="list-none space-y-4">
            <li className="flex items-start space-x-2">
              <span className="font-semibold">
                1. User Input Layer → Data Acquisition:
              </span>
              <p className="text-gray-700">
                Loads user-configured parameters and fetches real-time market
                data via Binance API.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold">
                2. Data Acquisition → Data Processing:
              </span>
              <p className="text-gray-700">
                Cleans and formats raw market data; calculates key technical
                indicators.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold">
                3. Data Processing → Decision Engine:
              </span>
              <p className="text-gray-700">
                Feeds processed data to the decision engine to execute
                user-defined strategies.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold">
                4. Decision Engine → Execution Layer:
              </span>
              <p className="text-gray-700">
                Issues secure trade commands (buy/sell/hold).
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold">
                5. Execution Layer → Logging and Analytics:
              </span>
              <p className="text-gray-700">
                Logs executed trades and analyzes performance for insights.
              </p>
            </li>
            <li className="flex items-start space-x-2">
              <span className="font-semibold">6. Error Handling:</span>
              <p className="text-gray-700">
                Detects and resolves issues across any module in real-time.
              </p>
            </li>
          </ul>
        </section>

        {/* Project Screenshots */}
        <ScreenShotsSection screenshots={binanceScreenshots} />

        {/* Navigation to Next Project */}
        <section className="text-center">
          <a href="/audiojam-music" className="text-blue-600 hover:underline text-lg">
            Next Project: AudioJam 
          </a>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default BinancePage;
