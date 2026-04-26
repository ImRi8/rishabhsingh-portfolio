import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Rishabh Singh - Software Developer & Builder',
  description: 'Full-stack developer building innovative solutions. Showcasing AI-powered apps, web platforms, and backend systems.',
  openGraph: {
    title: 'Rishabh Singh - Software Developer',
    description: 'Builder creating cutting-edge software products',
    url: 'https://rishabhsingh.dev',
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Contact />
    </main>
  );
}
