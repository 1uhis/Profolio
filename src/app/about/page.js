// app/about/page.js

export default function AboutPage() {
    return (
      <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
          {/* LEFT: TEXT SECTION */}
          <div className="md:w-2/3 text-left">
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
  
            <p className="text-lg mb-4">
              Hi, I’m Bess — a recent graduate with a Master’s degree in Information Technology from the University of Auckland. I’m passionate about building clean, meaningful web experiences and exploring how technology can empower people.
            </p>
  
            <p className="text-lg mb-4">
              My background combines <span className="font-semibold">Computer Science, Statistics, and UX thinking</span>. During my studies and internships, I worked on full-stack applications, AI-integrated chatbots, and internal tools for real users. I enjoy working in agile teams, and I’m fluent in JavaScript, React, Python, and currently learning Java.
            </p>
  
            <p className="text-lg mb-4">
              I care deeply about <span className="italic">accessibility, thoughtful design, and writing code that communicates</span>. One of my proudest moments was leading a team to build an official site for the University of Auckland to support women in STEM — a project that earned us a Google scholarship.
            </p>
  
            <p className="text-lg mb-4">
              Outside of code, I love playing games, playing with dogs, and quietly studying life’s patterns. I believe growth comes from reflection, and that curiosity is a developer’s superpower.
            </p>
          </div>
  
          {/* RIGHT: IMAGE SECTION */}
          <div className="md:w-1/3 justify-center">
            <img
              src="/me.png" 
              alt="Bess smiling"
              className="rounded-2xl shadow-lg object-cover w-full max-w-[320px] md:max-w-[400px]"
            />
          </div>
        </div>
      </div>
    );
  }