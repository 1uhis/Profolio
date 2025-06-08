'use client';

import { useEffect, useState } from 'react';
import projects from './data/ projects';
import blogs from './data/blogs';
import Link from "next/link";
import './globals.css'

const activities = [
  { text: 'job hunting', style: 'text-green-600 font-pixelify' },
  { text: 'playing with dogs', style: 'text-blue-500 font-mono' },
  { text: 'coding', style: 'text-yellow-600 font-bold font-silkscreen' },
  { text: 'enjoying music', style: 'text-pink-500 font-serif' },
  { text: 'building LEGO', style: 'text-indigo-600 font-extrabold font-jetbrains' },
  { text: 'live streaming', style: 'text-red-500 font-semibold font-fira' },
  { text: 'daydreaming', style: 'text-gray-600 italic font-caveat' },
  { text: 'baking desserts', style: 'text-orange-500 font-medium font-dancing' },
  { text: 'watching TV', style: 'text-purple-500 font-mono font-light' },
];

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [activityIndex, setActivityIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const latest_project = [...projects].sort((a, b) => b.date.localeCompare(a.date))[0];
  const latest_blog = [...blogs].sort((a, b) => b.date.localeCompare(a.date))[0];

  const current = activities[activityIndex];

  useEffect(() => {
    const typingSpeed = deleting ? 50 : 120;

    const timeout = setTimeout(() => {
      if (!deleting && charIndex < current.text.length) {
        setDisplayedText(current.text.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      } else if (deleting && charIndex > 0) {
        setDisplayedText(current.text.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      } else if (!deleting && charIndex === current.text.length) {
        setTimeout(() => setDeleting(true), 1000);
      } else if (deleting && charIndex === 0) {
        setDeleting(false);
        setActivityIndex((prev) => (prev + 1) % activities.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, activityIndex]);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-12 text-gray-800">
      <div className="flex flex-col md:flex-row justify-center items-center h-[70vh] text-3xl md:text-5xl font-semibold text-center px-4 w-full gap-2 md:gap-0">
        <span className="whitespace-nowrap">Meanwhile, Bess is&nbsp;</span>
        <span
          className={`inline-block min-w-[180px] md:min-w-[500px] text-left transition-all duration-300 ${current.style} whitespace-pre break-words`}
        >
          {displayedText}
          <span className="border-r-2 border-black animate-pulse ml-1"></span>
        </span>
      </div>

      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 mt-8">
        <section className="md:w-1/2">
          <h2 className="text-2xl font-bold mb-4 font-pixelify">Latest Project</h2>
          <Link href={`/projects/${latest_project.slug}`}>
            <div className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="text-lg font-semibold">{latest_project.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{latest_project.description}</p>
            </div>
          </Link>
        </section>

        <section className="md:w-1/2">
          <h2 className="text-2xl font-semibold mb-4 font-pixelify">Latest Blog</h2>
          <Link href={`/blog/${latest_blog.slug}`}>
            <div className="border rounded-lg p-4 hover:shadow-md transition">
              <h3 className="text-lg font-semibold">{latest_blog.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{latest_blog.excerpt}</p>
            </div>
          </Link>
        </section>

      </div>
    </main>
  );
}
