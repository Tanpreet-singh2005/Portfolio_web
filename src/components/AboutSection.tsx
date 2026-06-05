'use client';
import { useReveal } from '@/hooks/useReveal';

const ABOUT_STATS = [
  { label: 'Year', value: 'Pre-Final' },
  { label: 'HackerRank', value: '4⭐ C++' },
  { label: 'Open Source', value: '4+ Programs' },
  { label: 'Clubs', value: '3 Active' },
];

export default function AboutSection() {
  const ref = useReveal();
  const statsRef = useReveal();

  return (
    <section id="about" className="py-28 px-6 section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div ref={ref} className="reveal">
            <p className="text-purple-400 font-mono text-sm mb-3 tracking-widest uppercase">About Me</p>
            <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
              Building the{' '}
              <span className="gradient-text">Future</span>,<br />
              One Line at a Time
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                I'm a pre-final year <span className="text-white font-semibold">B.Tech CSE student at VIT Bhopal</span>, driven by a passion for crafting efficient, scalable software that makes a real difference.
              </p>
              <p>
                Proficient in <span className="text-purple-300 font-semibold">C, C++, Python, and OOP</span> — with a{' '}
                <span className="text-yellow-400 font-bold">4⭐ HackerRank rating in C++</span> — I enjoy tackling complex algorithmic challenges and translating them into clean, maintainable code.
              </p>
              <p>
                Beyond the classroom, I lead as <span className="text-purple-300 font-semibold">PR & Outreach Lead of the AI Club</span>, manage finances at <span className="text-purple-300 font-semibold">E-Cell</span>, and coordinate community events with <span className="text-purple-300 font-semibold">NSS</span>.
              </p>
              <p>
                Actively contributing to <span className="text-green-400 font-semibold">SWOC, GirlScript Summer of Code, Hacktoberfest</span> and seeking software development internships to grow further.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://github.com/AaryaShrivaastava"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-shimmer px-6 py-2.5 rounded-full text-white text-sm font-semibold inline-flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </a>
              <a
                href="https://codolio.com/profile/ApexVoyager30"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2.5 rounded-full glass border border-slate-600 text-slate-200 text-sm font-semibold hover:border-purple-500 transition-all inline-flex items-center gap-2"
              >
                🚀 Codolio
              </a>
            </div>
          </div>

          {/* Stats grid */}
          <div ref={statsRef} className="reveal delay-200">
            <div className="grid grid-cols-2 gap-4">
              {ABOUT_STATS.map(({ label, value }) => (
                <div
                  key={label}
                  className="card-3d glass rounded-2xl p-6 border border-purple-500/20 text-center group hover:border-purple-400/50 transition-all"
                >
                  <div className="text-2xl font-black gradient-text mb-1 group-hover:scale-110 transition-transform">
                    {value}
                  </div>
                  <div className="text-slate-500 text-xs uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>

            {/* Profile links card */}
            <div className="glass rounded-2xl p-6 border border-slate-700/50 mt-4 space-y-3">
              <h4 className="text-white font-semibold text-sm mb-4">Find Me Online</h4>
              {[
                { icon: '🐙', label: 'GitHub', sub: 'AaryaShrivaastava', url: 'https://github.com/AaryaShrivaastava' },
                { icon: '📊', label: 'HackerRank', sub: 'aarya_shrivaast2', url: 'https://hackerrank.com/profile/aarya_shrivaast2' },
                { icon: '🚀', label: 'Codolio', sub: 'ApexVoyager30', url: 'https://codolio.com/profile/ApexVoyager30' },
                { icon: '💼', label: 'LinkedIn', sub: 'aarya-shrivaastava', url: 'https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3' },
              ].map(({ icon, label, sub, url }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-purple-500/10 transition-all group"
                >
                  <span className="text-xl">{icon}</span>
                  <div className="flex-1">
                    <div className="text-white text-sm font-medium">{label}</div>
                    <div className="text-slate-500 text-xs">{sub}</div>
                  </div>
                  <svg className="w-4 h-4 text-slate-600 group-hover:text-purple-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
