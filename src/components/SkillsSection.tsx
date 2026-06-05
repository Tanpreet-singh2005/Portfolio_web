'use client';
import { useReveal } from '@/hooks/useReveal';
import { RevealCard } from '@/components/RevealCard';

const SKILLS = {
  'Languages': ['C', 'C++', 'Python', 'JavaScript', 'TypeScript', 'SQL'],
  'Core CS': ['Data Structures', 'Algorithms', 'OOP', 'DBMS', 'OS', 'Computer Networking'],
  'Web & Tools': ['React', 'Next.js', 'Git', 'GitHub', 'Firebase', 'Linux'],
  'AI / ML': ['Machine Learning', 'AI Fundamentals', 'Python for Data Science', 'Scikit-learn'],
  'Soft Skills': ['PR & Outreach', 'Event Management', 'Public Speaking', 'Finance Planning', 'Team Leadership'],
};

const CATEGORY_COLORS: Record<string, string> = {
  'Languages': 'from-purple-500/20 to-violet-500/20 border-purple-500/30',
  'Core CS': 'from-indigo-500/20 to-blue-500/20 border-indigo-500/30',
  'Web & Tools': 'from-cyan-500/20 to-teal-500/20 border-cyan-500/30',
  'AI / ML': 'from-pink-500/20 to-rose-500/20 border-pink-500/30',
  'Soft Skills': 'from-amber-500/20 to-orange-500/20 border-amber-500/30',
};

const CATEGORY_ICONS: Record<string, string> = {
  'Languages': '⚡',
  'Core CS': '🧠',
  'Web & Tools': '🌐',
  'AI / ML': '🤖',
  'Soft Skills': '🤝',
};

export default function SkillsSection() {
  const headerRef = useReveal();

  return (
    <section id="skills" className="py-28 px-6 section-bg">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal section-header">
          <p className="text-purple-400 font-mono text-sm mb-3 tracking-widest uppercase">What I Know</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            A blend of programming fundamentals, modern tooling, and leadership skills built across coursework, open-source, and clubs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(SKILLS).map(([category, skills], i) => (
            <RevealCard
              key={category}
              delay={i * 100}
              className={`card-3d glass rounded-2xl p-6 border bg-gradient-to-br ${CATEGORY_COLORS[category]} text-center flex flex-col items-center justify-center`}
            >
              <div className="flex flex-col items-center mb-5">
                <h3 className="text-white font-bold text-lg">{category}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill px-3 py-1 rounded-full text-xs text-slate-200 font-medium cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </RevealCard>
          ))}

          {/* HackerRank star card */}
          <RevealCard
            delay={600}
            className="card-3d glass rounded-2xl p-6 border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-orange-500/10 flex flex-col items-center justify-center text-center col-span-full lg:col-span-1"
          >
            <div className="flex gap-1 mb-3 justify-center animate-float">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h3 className="text-white font-bold text-lg mb-1">HackerRank 4★ C++</h3>
            <p className="text-slate-400 text-sm mb-4">Ranked among top competitive programmers</p>
            <a
              href="https://hackerrank.com/profile/aarya_shrivaast2"
              target="_blank"
              rel="noopener noreferrer"
              title="HackerRank Profile"
              className="w-11 h-11 flex items-center justify-center rounded-full glass border border-yellow-500/40 text-yellow-400 hover:text-white hover:border-yellow-400 hover:bg-yellow-500/10 transition-all hover:scale-110"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908a.405.405 0 00-.405-.405H8.2a.405.405 0 00-.405.405v10.359c0 .224.181.405.405.405h1.358c.224 0 .405-.181.405-.405v-4.119h4.074v4.269c0 .142.115.258.258.258h1.498c.141 0 .258-.116.258-.258V7.057a.258.258 0 00-.258-.258h-1.498z"/>
              </svg>
            </a>
          </RevealCard>
        </div>
      </div>
    </section>
  );
}
