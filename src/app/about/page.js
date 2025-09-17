import Image from 'next/image';

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        <div className="md:w-2/3 text-left">
          <h1 className="text-4xl font-bold mb-6">About Me</h1>

          <p className="text-lg mb-4">
            Hi, I&apos;m Bess — a recent graduate with a Master&apos;s degree in Information Technology from the University of Auckland. I&apos;m passionate about building clean, meaningful web experiences and exploring how technology can empower people.
          </p>

          <p className="text-lg mb-4">
            My background combines <span className="font-semibold">Computer Science, Statistics, and UX thinking</span>. During my studies and internships, I worked on full-stack applications, AI-integrated chatbots, and internal tools for real users. I enjoy working in agile teams, and I&apos;m fluent in JavaScript, React, Python, and currently learning Java.
          </p>

          <p className="text-lg mb-4">
            Outside of code, I love playing games, playing with dogs, and quietly studying life&apos;s patterns. I believe growth comes from reflection, and that curiosity is a developer&apos;s superpower. I was also honored to receive the{' '}
            <a
              href="https://www.linkedin.com/feed/update/urn:li:activity:6993682869277659137/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Google Scholarship
            </a>
            .
          </p>
        </div>
        <div className="md:w-1/3 justify-center">
          <Image
            src="/me.png"
            alt="Bess smiling"
            width={400}
            height={400}
            className="rounded-2xl shadow-lg object-cover w-full max-w-[320px] md:max-w-[400px]"
          />
        </div>
      </div>
    </div>
  );
}