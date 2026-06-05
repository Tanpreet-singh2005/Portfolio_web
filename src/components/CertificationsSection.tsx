'use client';
import { useReveal } from '@/hooks/useReveal';
import { RevealCard } from '@/components/RevealCard';

const CERTS = [
  {
    title: 'Introduction to Machine Learning',
    issuer: 'IIT Madras',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/30',
  },
  {
    title: 'Marketing Analytics',
    issuer: 'IIT Kharagpur',
    color: 'from-green-500/20 to-emerald-500/20 border-green-500/30',
  },
  {
    title: 'Fundamentals of AI and ML',
    issuer: 'Professional Certification',
    color: 'from-purple-500/20 to-violet-500/20 border-purple-500/30',
  },
  {
    title: 'Python Essentials',
    issuer: 'Professional Certification',
    color: 'from-yellow-500/20 to-orange-500/20 border-yellow-500/30',
  },
  {
    title: 'Python Programming Internship',
    issuer: 'Internship Certificate',
    color: 'from-pink-500/20 to-rose-500/20 border-pink-500/30',
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
              className={`card-3d glass rounded-2xl p-8 border bg-gradient-to-br ${cert.color} group relative overflow-hidden text-center flex flex-col items-center justify-center`}
            >
              <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-all duration-500 rounded-2xl" />
              <div className="relative z-10 flex flex-col items-center justify-center">
                <h3 className="text-white font-bold text-base mb-2 leading-snug">{cert.title}</h3>
                <p className="text-purple-300 text-sm font-medium">{cert.issuer}</p>
              </div>
            </RevealCard>
          ))}

          {/* Education card */}
          <RevealCard
            delay={500}
            className="card-3d glass rounded-2xl p-8 border border-indigo-500/40 bg-gradient-to-br from-indigo-500/15 to-purple-500/15 col-span-full lg:col-span-1 flex flex-col justify-between text-center items-center"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="flex flex-col items-center mb-4">
                <h3 className="text-white font-bold">B.Tech – CSE</h3>
                <p className="text-indigo-300 text-sm mt-1">Vellore Institute of Technology, Bhopal</p>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
                Currently in pre-final year, specializing in Computer Science & Engineering. Active in multiple technical and non-technical clubs.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
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
