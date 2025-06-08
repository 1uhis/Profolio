'use client';

import { useState } from "react";
import Link from "next/link";
import blogs from "../data/blogs";

const categories = {
  tech: "Tech Learning",
  reflection: "Personal Growth",
  daily: "Daily Thoughts",
};

export default function BlogListPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const filteredBlogs = selectedCategory
    ? blogs.filter(blog => blog.category === selectedCategory)
    : blogs;

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 font-pixelify">Blog</h1>

      <div className="flex flex-wrap gap-2 mb-8">
        <button
          onClick={() => setSelectedCategory(null)}
          className={`font-pixelify px-3 py-1 rounded-full text-sm border ${selectedCategory === null ? "bg-highlight-purple text-white" : "bg-white text-black hover:bg-gray-100"
            }`}
        >
          All
        </button>

        {Object.entries(categories).map(([key, label]) => (
          <button
            key={key}
            onClick={() => setSelectedCategory(key)}
            className={`font-pixelify px-3 py-1 rounded-full text-sm border ${selectedCategory === key ? "bg-highlight-purple text-white" : "bg-white text-black hover:bg-gray-100"
              }`}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="grid gap-8">
        {filteredBlogs.map(blog => (
          <Link href={`/blog/${blog.slug}`} key={blog.id}>
            <div className="border rounded-xl p-4 hover:shadow-lg transition duration-200 cursor-pointer bg-thrtiary-purple hover:bg-secondary-purple">
              <h2 className="font-pixelify text-xl font-semibold">{blog.title}</h2>
              <p className="text-sm text-gray-600 mt-2">{blog.excerpt}</p>
              <div className="mt-3 text-xs text-gray-600">
                {categories[blog.category]} · {blog.date}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}