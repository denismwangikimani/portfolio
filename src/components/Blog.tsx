/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

// Define types for blog posts
interface BlogPost {
  title: string;
  link: string;
  image: string;
  date: string;
  readTime: string;
}

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const MEDIUM_USERNAME = "denismwangi";
  const RSS_URL = `https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${MEDIUM_USERNAME}`;

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(RSS_URL);
        if (!response.ok) throw new Error("Failed to fetch posts");

        const data = await response.json();
        if (data.status === "ok") {
          const processedPosts = data.items.slice(0, 3).map((item: any) => {
            let imageUrl = item.thumbnail;
            if (!imageUrl || imageUrl === "") {
              const imgMatch = item.content.match(/<img[^>]+src="([^">]+)"/);
              imageUrl = imgMatch ? imgMatch[1] : "/placeholder.png";
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
      } catch (err: any) {
        setError(err.message || "An error occurred");
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Recent Articles
        </h2>
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-800 rounded w-3/4"></div>
          <div className="h-4 bg-gray-800 rounded w-1/2"></div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Recent Articles
        </h2>
        <div className="text-red-400">
          <p>Error loading blog posts: {error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-semibold mb-4">
        Recent Articles
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post, index) => (
          <a
            key={index}
            href={post.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group block"
          >
            <article className="bg-gray-900 border border-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2 h-full">
              <div className="relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                  priority={index === 0}
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "/placeholder.png";
                  }}
                />
              </div>
              <div className="p-4">
                <div className="flex items-center text-xs md:text-sm text-gray-400 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-base md:text-lg text-white group-hover:text-blue-400 transition-colors">
                  {post.title}
                </h3>
              </div>
            </article>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
