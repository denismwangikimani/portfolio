"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Your Medium username here
  const MEDIUM_USERNAME = "deniskimani";
  // Using a CORS proxy to avoid CORS issues
  const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(RSS_URL);
        if (!response.ok) throw new Error("Failed to fetch posts");

        const data = await response.json();
        if (data.status === "ok") {
          // Process only the first 3 posts
          const processedPosts = data.items.slice(0, 3).map((item) => {
            // Extract image from content if thumbnail is not available
            let imageUrl = item.thumbnail;
            if (!imageUrl || imageUrl === "") {
              const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
              imageUrl = imgMatch ? imgMatch[1] : "/placeholder.png"; // Using placeholder image
            }

            return {
              title: item.title,
              link: item.link,
              image: imageUrl,
              date: new Date(item.pubDate)
                .toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })
                .toUpperCase(),
              readTime: `${Math.ceil(
                item.content.split(" ").length / 200
              )} MIN READ`,
            };
          });
          setPosts(processedPosts);
        } else {
          throw new Error("Failed to parse RSS feed");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-3/4 mx-auto mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mx-auto"></div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="max-w-6xl mx-auto px-4 py-12 relative min-h-screen">
        <div className="text-center text-red-600 font-handwritten">
          <p>Error loading blog posts: {error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap");
        .font-handwritten {
          font-family: "Permanent Marker", cursive;
        }
      `}</style>

      {/* Header Text with large space */}
      <div className="text-center my-60">
        <h2 className="font-handwritten text-4xl font-bold mb-8">
          Occasionally, I blog about my journey and lessons learned.
        </h2>
      </div>

      {/* Blog Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <article className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={index === 0}
                  onError={(e) => {
                    e.target.src = "/placeholder.png";
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center text-sm text-gray-500 mb-2 font-handwritten">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-lg font-handwritten group-hover:text-blue-600 transition-colors">
                  {post.title}
                </h3>
              </div>
            </article>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Blog;
