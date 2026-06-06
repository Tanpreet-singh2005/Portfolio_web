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
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div ref={headerRef} className="reveal section-header text-center w-full">
          <p className="text-red-400 font-mono text-sm mb-3 tracking-widest uppercase">What I Know</p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground">
            Skills & <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-foreground opacity-55 mt-4 max-w-xl mx-auto">
            A blend of programming fundamentals, modern tooling, and leadership skills built across coursework, open-source, and clubs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10">
          {Object.entries(SKILLS).map(([category, skills], i) => (
            <RevealCard
              key={category}
              delay={i * 100}
              className="card-3d glass rounded-2xl p-8 sm:p-10 border border-red-500/20 text-center flex flex-col items-center justify-between min-h-[250px] h-full overflow-hidden"
            >
              <div className="flex flex-col items-center mb-5 w-full">
                <span className="text-3xl mb-3">{CATEGORY_ICONS[category]}</span>
                <h3 className="text-foreground font-bold text-lg">{category}</h3>
              </div>
              <div className="flex flex-wrap justify-center gap-2.5 mt-auto">
                {skills.map((skill) => (
                  <span key={skill} className="skill-pill px-3.5 py-1.5 rounded-full text-xs text-foreground font-semibold cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </RevealCard>
          ))}

          {/* HackerRank star card */}
          <RevealCard
            delay={600}
            className="card-3d glass rounded-2xl p-8 sm:p-10 border border-yellow-500/30 flex flex-col items-center justify-center text-center col-span-full lg:col-span-1 min-h-[250px]"
          >
            <div className="flex gap-1 mb-3 justify-center animate-float">
              {[...Array(4)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <h3 className="text-foreground font-bold text-lg mb-1">HackerRank 4★ C++</h3>
            <p className="text-foreground opacity-55 text-sm mb-5">Ranked among top competitive programmers</p>
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
