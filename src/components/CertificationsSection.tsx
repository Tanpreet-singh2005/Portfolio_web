'use client';
import { useReveal } from '@/hooks/useReveal';
import { RevealCard } from '@/components/RevealCard';
import { AppIcon, Icons } from '@/components/AppIcon';

const CERTS = [
  {
    title: 'Marketing Analytics',
    issuer: 'IIT Kharagpur | NPTEL | 99% | Top 1% Topper | Elite + Gold',
    iconColor: 'bg-blue-600',
    icon: Icons.BarChart,
  },
  {
    title: 'Introduction to Machine Learning',
    issuer: 'IIT Madras | NPTEL | 71% | Elite',
    iconColor: 'bg-purple-600',
    icon: Icons.GraduationCap,
  },
  {
    title: 'Fundamentals of AI and ML',
    issuer: 'Professional Certification by VITyarthi',
    iconColor: 'bg-indigo-600',
    icon: Icons.Sparkles,
  },
  {
    title: 'Python Essentials',
    issuer: 'Professional Certification by VITyarthi',
    iconColor: 'bg-emerald-600',
    icon: Icons.Terminal,
  },
  {
    title: 'Python Programming Internship',
    issuer: 'Internship Certificate',
    iconColor: 'bg-rose-600',
    icon: Icons.Briefcase,
  },
];

export default function CertificationsSection() {
  const headerRef = useReveal();

  return (
    <section id="certifications" className="py-28 px-6 section-bg flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        <div ref={headerRef} className="reveal section-header text-center w-full">
          <p className="text-red-400 font-mono text-sm mb-3 tracking-widest uppercase">Credentials</p>
          <br />
          <h2 className="text-4xl sm:text-5xl font-black text-foreground">
            Certifications & <span className="gradient-text">Learning</span>
          </h2>
          <br />
          <p className="text-foreground opacity-55 ">
            Continuous learning from premier institutions — IIT Madras, IIT Kharagpur, and industry-recognized programs.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-10">
          {CERTS.map((cert, i) => {
            const Icon = cert.icon;
            return (
              <RevealCard
                key={i}
                delay={i * 100}
                className="card-3d glass rounded-2xl p-8 border border-red-500/20 group relative overflow-hidden text-center flex flex-col items-center justify-center min-h-[180px] h-full"
              >
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.02] transition-all duration-500 rounded-2xl" />
                <div className="relative z-10 flex flex-col items-center justify-center">
                  <AppIcon color={cert.iconColor} size="md">
                    <Icon />
                  </AppIcon>
                  <h3 className="text-foreground font-bold text-base mb-2 leading-snug">{cert.title}</h3>
                  <p className="text-red-400 text-sm font-medium">{cert.issuer}</p>
                </div>
              </RevealCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
