'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface GitHubProject {
  name: string;
  description: string;
  url: string;
  language: string;
  topics: string[];
  stars: number;
}

const featuredProjects: GitHubProject[] = [
  {
    name: 'DevNexus-Answers',
    description: 'AI-powered Q&A system that works over your codebase, Jira tickets, Confluence docs, and OpenAPI specs with citations. Built with TypeScript and modern LLM integrations.',
    url: 'https://github.com/ImRi8/DevNexus-Answers',
    language: 'TypeScript',
    topics: ['AI', 'LLM', 'RAG', 'Q&A'],
    stars: 0,
  },
  {
    name: 'NexHood-IQ',
    description: 'An AI-powered neighborhood intelligence platform that helps homebuyers make informed decisions using location data, demographics, and community insights.',
    url: 'https://github.com/ImRi8/NexHood-IQ',
    language: 'JavaScript/React',
    topics: ['AI', 'RealEstate', 'Intelligence'],
    stars: 0,
  },
  {
    name: 'Taskflow',
    description: 'A production-ready task management system with user authentication, project organization, and real-time task assignment. Full-stack implementation with TypeScript.',
    url: 'https://github.com/ImRi8/taskflow-rishabh-singh',
    language: 'TypeScript',
    topics: ['Full-Stack', 'Tasks', 'Auth'],
    stars: 0,
  },
  {
    name: 'Notion Clone',
    description: 'A full-stack Notion alternative with document management, real-time collaboration features, and rich text editing. Built with modern web technologies.',
    url: 'https://github.com/ImRi8/Notion',
    language: 'TypeScript/React',
    topics: ['Full-Stack', 'Documents', 'Collaboration'],
    stars: 1,
  },
  {
    name: 'Real-Time Chat',
    description: 'A production-ready real-time chat application backend with WebSocket support, user management, and message persistence.',
    url: 'https://github.com/ImRi8/Real-Time-chat-Application',
    language: 'JavaScript',
    topics: ['Backend', 'WebSocket', 'Chat'],
    stars: 0,
  },
  {
    name: 'Task Scheduler API',
    description: 'RESTful API for managing tasks with scheduling capabilities, built with Go for high performance and reliability.',
    url: 'https://github.com/ImRi8/task-Scheduler-App',
    language: 'Go',
    topics: ['API', 'Scheduling', 'Backend'],
    stars: 1,
  },
];

export default function Projects() {
  const [projects, setProjects] = useState<GitHubProject[]>(featuredProjects);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Projects are already set with featured list
    setLoading(false);
  }, []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-lg text-gray-400">
            A selection of my best work showcasing full-stack development, AI/ML, and system design
          </p>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-gray-400">Loading projects...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Link
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group h-full"
              >
                <div className="h-full p-6 rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-600/10 to-pink-600/10 hover:border-purple-500/60 hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition">
                      {project.name}
                    </h3>
                    {project.stars > 0 && (
                      <span className="flex items-center gap-1 text-yellow-400 text-sm font-medium">
                        ★ {project.stars}
                      </span>
                    )}
                  </div>

                  <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 text-xs font-medium text-purple-300 bg-purple-600/30 rounded-full">
                      {project.language}
                    </span>
                    {project.topics.slice(0, 2).map((topic) => (
                      <span key={topic} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-600/20 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>

                  <div className="text-purple-400 font-medium text-sm group-hover:translate-x-2 transition-transform">
                    View on GitHub →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Link
            href="https://github.com/ImRi8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 text-purple-300 hover:text-purple-200 border border-purple-500/50 rounded-lg hover:border-purple-500 transition"
          >
            View All Projects on GitHub →
          </Link>
        </div>
      </div>
    </section>
  );
}
