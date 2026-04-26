export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend Development',
      icon: '🎨',
      skills: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Vue.js', 'JavaScript'],
    },
    {
      category: 'Backend Development',
      icon: '⚙️',
      skills: ['Node.js', 'Express', 'TypeScript', 'Go', 'Python', 'REST APIs'],
    },
    {
      category: 'Databases & Storage',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'Redis', 'SQLite'],
    },
    {
      category: 'AI/ML Integration',
      icon: '🤖',
      skills: ['LLM APIs', 'RAG Systems', 'Vector Databases', 'OpenAI', 'Machine Learning'],
    },
    {
      category: 'Real-Time Systems',
      icon: '⚡',
      skills: ['WebSocket', 'Socket.io', 'Real-Time Chat', 'Live Updates'],
    },
    {
      category: 'DevOps & Deployment',
      icon: '🚀',
      skills: ['Vercel', 'Docker', 'GitHub Actions', 'AWS', 'Cloud Deployment'],
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">Technical Skills</h2>
          <p className="text-lg text-gray-400">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="p-6 rounded-lg border border-purple-500/20 bg-gradient-to-br from-purple-600/10 to-pink-600/10 hover:border-purple-500/40 transition-all"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="text-lg font-semibold text-white mb-3">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-medium text-purple-300 bg-purple-600/30 rounded-full hover:bg-purple-600/50 transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg bg-blue-600/10 border border-blue-500/30 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">28+</div>
            <p className="text-gray-300">Public Projects</p>
          </div>
          <div className="p-6 rounded-lg bg-pink-600/10 border border-pink-500/30 text-center">
            <div className="text-4xl font-bold text-pink-400 mb-2">5+</div>
            <p className="text-gray-300">Production Deployments</p>
          </div>
          <div className="p-6 rounded-lg bg-purple-600/10 border border-purple-500/30 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">10+</div>
            <p className="text-gray-300">Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
