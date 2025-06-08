import projects from "@/app/data/projects";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import Link from "next/link";
import Image from 'next/image';

export default function ProjectDetail({ params }) {
    const project = projects.find((p) => p.slug === params.slug);

    if (!project) return notFound();

    return (
        <div className="max-w-3xl mx-auto px-6 py-12">
            <Link href="/projects" className="text-blue-500 hover:underline">
                ← Back to Projects
            </Link>
            <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
            <Image
                src={project.image}
                alt={project.title}
                width={600}
                height={400}
                className="w-full h-full object-cover rounded-lg mb-6"
            />
            <div className="text-gray-600 mb-4">
                <strong>Tech Stack:</strong> {project.stack.join(", ")}
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
                    li: ({ node, ...props }) => (
                        <li className="mb-1" {...props} />
                    ),
                    strong: ({ node, ...props }) => (
                        <strong className="font-semibold text-black" {...props} />
                    ),
                    em: ({ node, ...props }) => (
                        <em className="italic text-gray-600" {...props} />
                    ),
                }}
            >
                {project.content}
            </ReactMarkdown>
            {project.github && (
                <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-6 text-blue-500 underline"
                >
                    View on GitHub
                </a>
            )}
        </div>
    );
}