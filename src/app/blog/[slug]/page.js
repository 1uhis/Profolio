import ReactMarkdown from "react-markdown";
import Link from "next/link";
import blogs from "@/app/data/blogs";

export default function BlogDetail({ params }) {
  const blog = blogs.find(b => b.slug === params.slug);

  if (!blog) {
    return <div>Blog not found.</div>;
  }

  const categories = {
    tech: "Tech Learning",
    reflection: "Personal Growth",
    daily: "Daily Thoughts",
  };

  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <Link
        href="/blog"
        className="text-blue-500 hover:underline mb-6 inline-block"
      >
        ← Back to Blog
      </Link>

      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>

      <div className="text-gray-600 mb-4">
        <strong>Category:</strong> {categories[blog.category]} &nbsp;&nbsp;
        <strong>Date:</strong> {blog.date}
      </div>

      <ReactMarkdown
        components={{
          h2: ({ node, ...props }) => (
            <h2 className="text-xl md:text-2xl font-bold mt-6 mb-3" {...props} />
          ),
          p: ({ node, ...props }) => (
            <p className="text-gray-700 leading-relaxed mb-4" {...props} />
          ),
          ul: ({ node, ...props }) => (
            <ul className="list-disc ml-5 mb-4 text-gray-700" {...props} />
          ),
          li: ({ node, ...props }) => <li className="mb-1" {...props} />,
        }}
      >
        {blog.content}
      </ReactMarkdown>
    </div>
  );
}