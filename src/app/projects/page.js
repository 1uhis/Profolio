'use client';

import { useState } from "react";
import projects from "../data/ projects";
import Link from "next/link";

export default function ProjectsPage() {
    const [selectedTech, setSelectedTech] = useState(null);

    const allTags = Array.from(
        new Set(projects.flatMap((p) => p.stack))
    ).sort();

    const filteredProjects = selectedTech
        ? projects.filter((project) => project.stack.includes(selectedTech))
        : projects;

    return (
        <div className="max-w-5xl mx-auto px-6 py-12">
            <h1 className="text-3xl font-bold mb-6 font-pixelify">Projects</h1>

            <div className="flex flex-wrap gap-2 mb-8">
                <button
                    onClick={() => setSelectedTech(null)}
                    className={`font-pixelify px-3 py-1 rounded-full text-sm border ${selectedTech === null
                            ? "bg-highlight-purple text-white"
                            : "bg-white text-black hover:bg-gray-100"
                        }`}
                >
                    All
                </button>
                {allTags.map((tag) => (
                    <button
                        key={tag}
                        onClick={() => setSelectedTech(tag)}
                        className={`font-pixelify px-3 py-1 rounded-full text-sm border transition-colors duration-200 ${selectedTech === tag
                                ? "bg-highlight-purple text-white"
                                : "bg-white text-black hover:bg-gray-100"
                            }`}
                    >
                        {tag}
                    </button>
                ))}
            </div>

            <div className="grid gap-8 md:grid-cols-2">
                {filteredProjects.map((project) => (
                    <Link href={`/projects/${project.slug}`} key={project.slug}>
                        <div className="border rounded-xl p-4 hover:shadow-lg transition duration-200 bg-thrtiary-purple hover:bg-secondary-purple">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h2 className="font-pixelify text-xl font-semibold">{project.title}</h2>
                            <p className="text-sm text-gray-600 mt-2">{project.description}</p>
                            <div className="mt-3 flex gap-2 flex-wrap">
                                {project.stack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="font-pixelify text-xs px-2 py-1 rounded-full bg-highlight-purple text-white"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}