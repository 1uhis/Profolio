'use client';

import { useEffect, useState } from 'react';
import projects from './data/ projects';
import Link from "next/link";
import './globals.css'

const activities = [
  { text: 'job hunting', style: 'text-green-600 font-pixelify' },
  { text: 'coding', style: 'text-blue-500 font-mono' },
  { text: 'playing with dogs', style: 'text-yellow-600 font-bold font-silkscreen' },
  { text: 'enjoying music', style: 'text-pink-500 font-serif' },
];

export default function Home() {
  const [displayedText, setDisplayedText] = useState('');
  const [activityIndex, setActivityIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const latest = [...projects].sort((a, b) => b.date.localeCompare(a.date))[0];

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
      <div className="flex justify-center items-center h-[70vh] text-3xl md:text-5xl font-semibold text-center">
        <span>Meanwhile, Bess is&nbsp;</span>
        <span
          className={`inline-block min-w-[500px] text-left transition-all duration-300 ${current.style} whitespace-pre`}
        >
          {displayedText}
          <span className="border-r-2 border-black animate-pulse ml-1"></span>
        </span>
      </div>

      {/* Project Preview Section */}
      <section className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 font-pixelify">Latest Project</h2>
        <Link href={`/projects/${latest.slug}`}>
          <div className="border rounded-lg p-4 hover:shadow-md">
            <h3 className="text-lg font-semibold">{latest.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{latest.description}</p>
          </div>
        </Link>
      </section>

      {/* Blog Preview Section */}
      <section className="w-full max-w-4xl mt-12">
        <h2 className="text-2xl font-semibold mb-4 font-pixelify">Latest Blog</h2>
        <div className="bg-gray-100 rounded-xl p-6 shadow hover:shadow-md transition">
          <h3 className="text-xl font-medium">What I Learned from Teaching JavaScript</h3>
          <p className="text-gray-700 mt-2">
            Reflecting on my experience as a TA and mentor, sharing insights about learning by teaching.
          </p>
        </div>
      </section>
    </main>
  );
}
