import { Linkedin, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-thrtiary-purple font-pixelify dark:bg-gray-900 py-6 mt-12">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600 dark:text-gray-400">
        <p>© 2025 Bess Yang. All rights reserved.</p>
        <div className="flex space-x-6 mt-4 md:mt-0">
          <a
            href="https://www.linkedin.com/in/bess-yang-0a372421a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/1uhis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 dark:hover:text-white transition"
          >
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}