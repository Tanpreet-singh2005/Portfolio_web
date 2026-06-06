'use client';
import { useReveal } from '@/hooks/useReveal';

const ABOUT_STATS = [
  { label: 'Year', value: 'Final Year' },
  { label: 'HackerRank', value: '4⭐ C++' },
  { label: 'Open Source', value: '4+ Programs' },
  { label: 'Clubs', value: '3 Active' },
];

export default function AboutSection() {
  const ref = useReveal();
  const statsRef = useReveal();

  return (
    <section id="about" className="py-28 px-6 section-bg">
      <div style={{ maxWidth: '896px', margin: '0 auto', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {/* Text */}
        <div ref={ref} className="reveal -mt-16 flex flex-col items-center w-full">
          <p className="text-red-400 font-mono text-sm mb-15 tracking-widest uppercase">About Me</p>
          <br/>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-8">
            Building the <span className="gradient-text">Future</span>,<br />
            One Line at a Time
          </h2>
          < br />
          <div style={{ background: 'var(--glass)', border: '1px solid rgba(229,62,62,0.2)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', borderRadius: '24px', padding: '2.5rem', width: '100%', maxWidth: '800px', marginBottom: '2rem', boxShadow: '0 10px 40px rgba(0,0,0,0.2)' }}>
            <div className="space-y-4 text-foreground opacity-75 leading-relaxed text-justify">
              <p>
                I'm a final year{' '}
                <span className="text-foreground opacity-100 font-semibold">B.Tech CSE student at VIT Bhopal</span>,
                driven by a passion for crafting efficient, scalable software that makes a real difference.
              </p>
              <p>
                Proficient in{' '}
                <span className="text-red-400 font-semibold opacity-100">C, C++, Python, and OOP</span> — with a{' '}
                <span className="text-yellow-400 font-bold opacity-100">4⭐ HackerRank rating in C++</span> — I enjoy
                tackling complex algorithmic challenges and translating them into clean, maintainable code.
              </p>
              <p>
                Beyond the classroom, I lead as{' '}
                <span className="text-red-400 font-semibold opacity-100">PR & Outreach Lead of the AI Club</span>,
                manage finances at{' '}
                <span className="text-red-400 font-semibold opacity-100">E-Cell</span>, and coordinate community
                events with <span className="text-red-400 font-semibold opacity-100">NSS</span>.
              </p>
              <p>
                Actively contributing to{' '}
                <span className="text-green-400 font-semibold opacity-100">SWOC, GirlScript Summer of Code, Hacktoberfest</span>{' '}
                and seeking software development internships to grow further.
              </p>
            </div>
          </div>
        </div>

        {/* Stats grid */}
        <div ref={statsRef} className="reveal delay-200 mt-6 w-full max-w-3xl">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {ABOUT_STATS.map(({ label, value }) => (
              <div
                key={label}
                className="card-3d glass rounded-2xl p-6 border border-red-500/20 text-center group hover:border-red-400/50 transition-all"
              >
                <div className="text-2xl font-black gradient-text mb-1 group-hover:scale-110 transition-transform">
                  {value}
                </div>
                <div className="text-foreground opacity-50 text-xs uppercase tracking-widest">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-6 mt-12 reveal delay-300">
          <a
            href="https://github.com/AaryaShrivaastava"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a
            href="https://codolio.com/profile/ApexVoyager30"
            target="_blank"
            rel="noopener noreferrer"
            title="Codolio"
            className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8.001 2.4A5.6 5.6 0 002.4 8v8a5.6 5.6 0 005.601 5.6h8A5.6 5.6 0 0021.6 16V8A5.6 5.6 0 0016 2.4h-8zm.001 3.2h8a2.4 2.4 0 012.4 2.4v8a2.4 2.4 0 01-2.4 2.4H8.002A2.4 2.4 0 015.6 16V8A2.4 2.4 0 018.002 5.6zM9.6 8a1.6 1.6 0 100 3.2A1.6 1.6 0 009.6 8zm4.8 4.8a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z"/>
            </svg>
          </a>
          <a
            href="https://hackerrank.com/profile/aarya_shrivaast2"
            target="_blank"
            rel="noopener noreferrer"
            title="HackerRank"
            className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c1.285 0 9.75 4.886 10.392 6 .645 1.115.645 10.885 0 12S13.287 24 12 24s-9.75-4.885-10.395-6c-.641-1.115-.641-10.885 0-12C2.25 4.886 10.715 0 12 0zm2.295 6.799c-.141 0-.258.115-.258.258v3.875H9.963V6.908a.405.405 0 00-.405-.405H8.2a.405.405 0 00-.405.405v10.359c0 .224.181.405.405.405h1.358c.224 0 .405-.181.405-.405v-4.119h4.074v4.269c0 .142.115.258.258.258h1.498c.141 0 .258-.116.258-.258V7.057a.258.258 0 00-.258-.258h-1.498z"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
