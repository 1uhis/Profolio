'use client';

import { Download, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
    return (
        <div className="max-w-3xl mx-auto px-6 pt-32 pb-12 text-center">
            <h1 className="text-3xl font-bold mb-6 font-pixelify">Let&apos;s Connect!</h1>
            <p className="text-gray-600 mb-10">
                Whether it&apos;s about a project, feedback, or just a chat—feel free to reach out.
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4">
                <a
                    href="https://drive.google.com/file/d/1HF8BicyX_xWAwC9KL2zXnpVKwHE5PEe5/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-gray-800 rounded-md hover:bg-gray-100 transition font-semibold w-full md:w-auto"
                >
                    <Download className="w-5 h-5" />
                    Download CV
                </a>
                <a
                    href="https://www.linkedin.com/in/bess-yang-0a372421a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-gray-800 rounded-md hover:bg-gray-100 transition font-semibold w-full md:w-auto"
                >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                </a>
                <a
                    href="https://github.com/1uhis"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3 border border-gray-800 rounded-md hover:bg-gray-100 transition font-semibold w-full md:w-auto"
                >
                    <Github className="w-5 h-5" />
                    GitHub
                </a>
            </div>
        </div>
    );
}