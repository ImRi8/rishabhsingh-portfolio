export default function About() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-12 text-center">About Me</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h3 className="text-2xl font-semibold text-purple-300 mb-4">Who I Am</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              I'm Rishabh Singh, a full-stack builder and founder from India obsessed with shipping products that solve real problems. I combine deep technical expertise spanning backend systems, frontend development, and AI/ML with a founder's mindset—focused on execution, user feedback, and market traction.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              My journey is defined by shipping—from shipping my first production app to deploying 28+ projects with real users. I've learned that great products come from ruthless execution, deep user understanding, and technical excellence.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When not coding, I'm building in public, exploring emerging tech, and collaborating with fellow founders to create ventures with real impact.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-purple-300 mb-4">Key Achievements</h3>
            <div className="space-y-4">
              <div className="p-4 rounded-lg bg-purple-600/10 border border-purple-500/20">
                <h4 className="font-semibold text-white mb-2">28+ Public Repositories</h4>
                <p className="text-sm text-gray-400">Diverse portfolio showcasing full-stack applications, APIs, and innovative projects</p>
              </div>
              <div className="p-4 rounded-lg bg-blue-600/10 border border-blue-500/20">
                <h4 className="font-semibold text-white mb-2">Production-Ready Systems</h4>
                <p className="text-sm text-gray-400">Experience building scalable backends, real-time systems, and AI-powered applications</p>
              </div>
              <div className="p-4 rounded-lg bg-pink-600/10 border border-pink-500/20">
                <h4 className="font-semibold text-white mb-2">Multiple Tech Stacks</h4>
                <p className="text-sm text-gray-400">Proficient in TypeScript, Python, Go, JavaScript, React, and modern cloud technologies</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-purple-300 mb-6">Professional Experience</h3>
          <div className="relative pl-8 sm:pl-10">
            <div className="absolute left-3 sm:left-4 top-2 bottom-2 w-px bg-gradient-to-b from-purple-500/70 via-blue-500/50 to-cyan-500/70" />

            <div className="relative mb-8">
              <div className="absolute -left-[1.45rem] sm:-left-[1.7rem] top-2 h-3 w-3 rounded-full bg-purple-400 shadow-[0_0_0_4px_rgba(168,85,247,0.2)]" />
              <div className="p-6 rounded-lg border border-purple-500/20 bg-gradient-to-r from-purple-600/10 to-pink-600/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                  <h4 className="text-lg font-semibold text-white">SDE-I</h4>
                  <span className="text-sm text-purple-300">Feb 2025 - Present</span>
                </div>
                <p className="text-gray-300 text-sm">M2P Fintech</p>
                <p className="text-gray-400 text-sm mb-3">Delhi, IN</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Solved high cache I/O latency caused by frequent Redis access by introducing a layered caching architecture (Caffeine L1 + Redis L2 with cross-instance synchronization), serving hot data locally, avoiding network round trips, and reducing read latency from milliseconds to near nanosecond-level access.</li>
                  <li>Designed and implemented end-to-end import/export for complex no-code workflows, handling 10+ dependent workflow components and leveraging Server-Sent Events (SSE) to stream large workflow payloads reliably, improving scalability, user experience and one click migration.</li>
                  <li>Led root-cause analysis and remediation of a production-critical failure involving thread contention and Kubernetes pod starvation during concurrent file uploads, restoring availability, stabilizing workloads at peak traffic, and increasing upload success rates by 60%.</li>
                </ul>
              </div>
            </div>

            <div className="relative mb-8">
              <div className="absolute -left-[1.45rem] sm:-left-[1.7rem] top-2 h-3 w-3 rounded-full bg-blue-400 shadow-[0_0_0_4px_rgba(96,165,250,0.2)]" />
              <div className="p-6 rounded-lg border border-blue-500/20 bg-gradient-to-r from-blue-600/10 to-cyan-600/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                  <h4 className="text-lg font-semibold text-white">Software Engineer I</h4>
                  <span className="text-sm text-blue-300">June 2024 - Oct 2024</span>
                </div>
                <p className="text-gray-300 text-sm">Careerbuilder.com + Monster Jobs</p>
                <p className="text-gray-400 text-sm mb-3">Noida, IN</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Optimized cloud operations by engineering AWS solutions (S3, Batch, VPC, Lambda), reducing job processing times and automating email notifications for failed applications to enhance communication efficiency.</li>
                  <li>Secured APIs by rerouting traffic through CloudFront and WAF, reducing vulnerability exposure. Streamlined API testing with Postman, automated scripts to minimize manual effort, and optimized Jenkinsfiles.</li>
                </ul>
              </div>
            </div>

            <div className="relative mb-8">
              <div className="absolute -left-[1.45rem] sm:-left-[1.7rem] top-2 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_0_4px_rgba(56,189,248,0.2)]" />
              <div className="p-6 rounded-lg border border-sky-500/20 bg-gradient-to-r from-sky-600/10 to-indigo-600/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                  <h4 className="text-lg font-semibold text-white">Full-Stack Developer</h4>
                  <span className="text-sm text-sky-300">Feb 2024 - June 2024</span>
                </div>
                <p className="text-gray-300 text-sm">Vebholic Pvt. Ltd.</p>
                <p className="text-gray-400 text-sm mb-3">Remote, IN</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Built full-stack web applications using Express.js, TypeScript, and MongoDB, maintaining 99.9% uptime and reducing query latency by 30% through database optimization and end-to-end testing.</li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-[1.45rem] sm:-left-[1.7rem] top-2 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_0_4px_rgba(34,211,238,0.2)]" />
              <div className="p-6 rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-600/10 to-sky-600/5">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-2 gap-2">
                  <h4 className="text-lg font-semibold text-white">Education</h4>
                  <span className="text-sm text-cyan-300">Sept 2020 - May 2024</span>
                </div>
                <p className="text-gray-300 text-sm mb-1 font-medium">Jaypee Institute of Information Technology</p>
                <p className="text-gray-300 text-sm">Noida, IN</p>
                <p className="text-gray-400 text-sm mb-3">Bachelor of Technology in Computer Science and Engineering</p>
                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1">
                  <li>Relevant coursework: Data Structures, Algorithms, Databases, Operating Systems</li>
                  <li>Built academic and self-initiated projects that evolved into production-ready portfolio work</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
