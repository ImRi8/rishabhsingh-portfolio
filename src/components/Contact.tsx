import Link from 'next/link';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-400">
            Interested in collaboration, investment opportunities, or just want to chat about tech?
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 rounded-lg border border-purple-500/30 bg-gradient-to-br from-purple-600/10 to-pink-600/10">
            <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
            <p className="text-gray-400 mb-4">Get in touch directly</p>
            <Link
              href="mailto:Singh.rishabh701@gmail.com"
              className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition font-medium"
            >
              Singh.rishabh701@gmail.com →
            </Link>
          </div>

          <div className="p-6 rounded-lg border border-blue-500/30 bg-gradient-to-br from-blue-600/10 to-cyan-600/10">
            <h3 className="text-xl font-semibold text-white mb-2">LinkedIn</h3>
            <p className="text-gray-400 mb-4">Professional network</p>
            <Link
              href="https://linkedin.com/in/rishabh690"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition font-medium"
            >
              linkedin.com/in/rishabh690 →
            </Link>
          </div>

          <div className="p-6 rounded-lg border border-pink-500/30 bg-gradient-to-br from-pink-600/10 to-rose-600/10">
            <h3 className="text-xl font-semibold text-white mb-2">GitHub</h3>
            <p className="text-gray-400 mb-4">View all my work</p>
            <Link
              href="https://github.com/ImRi8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-pink-400 hover:text-pink-300 transition font-medium"
            >
              github.com/ImRi8 →
            </Link>
          </div>

          <div className="p-6 rounded-lg border border-amber-500/30 bg-gradient-to-br from-amber-600/10 to-orange-600/10">
            <h3 className="text-xl font-semibold text-white mb-2">Instagram</h3>
            <p className="text-gray-400 mb-4">Follow my journey</p>
            <Link
              href="https://instagram.com/whorishabhsingh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 transition font-medium"
            >
              @whorishabhsingh →
            </Link>
          </div>
        </div>

        <div className="p-8 rounded-lg bg-gradient-to-r from-purple-600/20 to-pink-600/20 border border-purple-500/30 text-center">
          <h3 className="text-2xl font-semibold text-white mb-4">Why Work With Me?</h3>
          <ul className="text-gray-300 space-y-2 max-w-2xl mx-auto text-left">
            <li>✓ Full-stack expertise across frontend, backend, and AI systems</li>
            <li>✓ Proven ability to ship production-grade applications</li>
            <li>✓ Entrepreneurial mindset focused on solving real problems</li>
            <li>✓ Quick learner who stays updated with cutting-edge technologies</li>
            <li>✓ Strong problem-solving skills and attention to detail</li>
            <li>✓ Collaborative team player with excellent communication</li>
          </ul>
        </div>

        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>© 2026 Rishabh Singh. All rights reserved.</p>
          <p className="mt-2">Building the future, one line of code at a time 🚀</p>
        </div>
      </div>
    </section>
  );
}
