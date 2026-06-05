'use client';
import { useReveal } from '@/hooks/useReveal';
import { RevealCard } from '@/components/RevealCard';

const CERTS = [
  {
    title: 'Introduction to Machine Learning',
    issuer: 'IIT Madras',
    icon: '🧠',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
    badge: '🏆',
  },
  {
    title: 'Marketing Analytics',
    issuer: 'IIT Kharagpur',
    icon: '📊',
    color: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
    badge: '🎓',
  },
  {
    title: 'Fundamentals of AI and ML',
    issuer: 'Professional Certification',
    icon: '🤖',
    color: 'from-purple-500/20 to-violet-500/20 border-purple-500/30',
    badge: '✅',
  },
  {
    title: 'Python Essentials',
    issuer: 'Professional Certification',
    icon: '🐍',
    color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30',
    badge: '⭐',
  },
  {
    title: 'Python Programming Internship',
    issuer: 'Internship Certificate',
    icon: '💻',
    color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30',
    badge: '💎',
  },
];

export default function CertificationsSection() {
  const headerRef = useReveal();

  return (
    <section id="certifications" className="py-28 px-6 section-bg">
      <div className="max-w-6xl mx-auto">
        <div ref={headerRef} className="reveal section-header">
          <p className="text-purple-400 font-mono text-sm mb-3 tracking-widest uppercase">Credentials</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Certifications &amp; <span className="gradient-text">Learning</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            Continuous learning from premier institutions — IIT Madras, IIT Kharagpur, and industry-recognized programs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTS.map((cert, i) => (
            <RevealCard
              key={i}
              delay={i * 100}
              className={`card-3d glass rounded-2xl p-6 border bg-gradient-to-br ${cert.color} group relative overflow-hidden`}
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-all duration-500 rounded-2xl" />
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <span className="text-3xl">{cert.icon}</span>
                  <span className="text-xl">{cert.badge}</span>
                </div>
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{cert.title}</h3>
                <p className="text-purple-300 text-sm font-medium">{cert.issuer}</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <span className="text-xs text-slate-500 flex items-center gap-1.5">
                    <svg className="w-3 h-3 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    Verified Certificate
                  </span>
                </div>
              </div>
            </RevealCard>
          ))}

          {/* Education card */}
          <RevealCard
            delay={500}
            className="card-3d glass rounded-2xl p-6 border border-indigo-500/40 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 col-span-full lg:col-span-1 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🎓</span>
                <div>
                  <h3 className="text-white font-bold">B.Tech – CSE</h3>
                  <p className="text-indigo-300 text-sm">Vellore Institute of Technology, Bhopal</p>
                </div>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed">
                Currently in pre-final year, specializing in Computer Science & Engineering. Active in multiple technical and non-technical clubs.
              </p>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {['DSA', 'DBMS', 'OOP', 'OS', 'CN'].map((sub) => (
                <span key={sub} className="text-xs px-2.5 py-1 rounded-full bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {sub}
                </span>
              ))}
            </div>
          </RevealCard>
        </div>
      </div>
    </section>
  );
}
