// components/Dashboard.tsx
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const Dashboard: React.FC = () => {
  interface Post {
    id: string;
    title: string;
    excerpt: string;
  }

  const [posts, setPosts] = useState<Post[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Fetch posts from your API or database
    // This is just a placeholder, replace with actual API call
    const fetchPosts = async () => {
      const response = await fetch("/api/posts");
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-lime-400">Dashboard</h1>
      <button
        className="bg-lime-500 text-white px-4 py-2 rounded mb-4"
        onClick={() => router.push("/new-post")}
      >
        Create New Post
      </button>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="text-gray-500">{post.excerpt}</p>
            <button
              className="mt-2 text-blue-500"
              onClick={() => router.push(`/edit-post/${post.id}`)}
            >
              Edit
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
