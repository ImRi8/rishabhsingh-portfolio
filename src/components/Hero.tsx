'use client';

import Link from 'next/link';

export default function Hero() {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const element = document.getElementById(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full text-center">
        <div className="inline-block mb-6 px-4 py-2 bg-purple-500/20 border border-purple-500/30 rounded-full">
          <p className="text-sm font-medium text-purple-300">Builder • Product-Focused Engineer • Entrepreneur</p>
        </div>
        
        <h1 className="text-5xl sm:text-7xl font-bold text-white mb-6 leading-tight">
          Rishabh Singh
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Full-Stack Developer building <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">AI-powered applications</span> and <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-600">scalable systems</span>
        </p>

        <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
          Full-stack builder obsessed with shipping products. From AI-powered SaaS to real-time systems, I turn ideas into launches. Proven ability to execute across frontend, backend, and product—from ideation to production users.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, 'projects')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            View My Work
          </Link>
          <Link
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, 'contact')}
            className="px-8 py-4 border border-purple-500 text-purple-300 font-semibold rounded-lg hover:bg-purple-500/10 transition-all duration-300 transform hover:scale-105 active:scale-95"
          >
            Get In Touch
          </Link>
        </div>

        <div className="flex justify-center gap-6 text-gray-400 text-sm">
          <a href="https://github.com/ImRi8" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
            GitHub
          </a>
          <a href="https://linkedin.com/in/rishabh690" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400 transition">
            LinkedIn
          </a>
          <a href="mailto:Singh.rishabh701@gmail.com" className="hover:text-purple-400 transition">
            Email
          </a>
        </div>
      </div>
    </section>
  );
}
