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
              className={`card-3d glass rounded-2xl p-6 border bg-gradient-to-br ${CATEGORY_COLORS[category]}`}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-2xl">{CATEGORY_ICONS[category]}</span>
                <h3 className="text-white font-bold text-lg">{category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
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
            <div className="text-5xl mb-3 animate-float">⭐⭐⭐⭐</div>
            <h3 className="text-white font-bold text-lg mb-1">HackerRank 4★ C++</h3>
            <p className="text-slate-400 text-sm mb-4">Ranked among top competitive programmers</p>
            <a
              href="https://hackerrank.com/profile/aarya_shrivaast2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-yellow-400 border border-yellow-500/40 px-4 py-1.5 rounded-full hover:bg-yellow-500/10 transition-all"
            >
              View Profile →
            </a>
          </RevealCard>
        </div>
      </div>
    </section>
  );
}
