"use client";

import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import Link from "next/link";
import BlogPostCard from "@/components/BlogPostCard";

// Sample blog post data (in a real app, you'd fetch this from an API or database)
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React Hooks",
    excerpt:
      "Learn how to use React Hooks to manage state and side effects in your functional components.",
    date: "2023-05-15",
    category: "React",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 2,
    title: "Building Responsive Layouts with Tailwind CSS",
    excerpt:
      "Discover how to create beautiful, responsive layouts quickly using Tailwind CSS utility classes.",
    date: "2023-06-02",
    category: "CSS",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: 3,
    title: "Introduction to TypeScript for JavaScript Developers",
    excerpt:
      "Explore the benefits of TypeScript and learn how to integrate it into your JavaScript projects.",
    date: "2023-06-20",
    category: "TypeScript",
    image: "/placeholder.svg?height=200&width=300",
  },
];

const categories = ["All", "React", "CSS", "TypeScript"];

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredPosts = blogPosts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-4xl font-bold">My Blog</h1>

      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-grow">
          <Input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
        </div>
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="text-sm"
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {filteredPosts.map((post) => (
          <Link href={`/blog/${post.id}`} key={post.id}>
            <BlogPostCard {...post} />
          </Link>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <p className="mt-8 text-center text-lg text-muted-foreground">
          No blog posts found matching your criteria.
        </p>
      )}
    </div>
  );
}
