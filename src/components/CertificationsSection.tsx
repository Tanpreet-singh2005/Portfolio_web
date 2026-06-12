'use client';
import React from 'react';
import { useReveal } from '@/hooks/useReveal';
import { RevealCard } from '@/components/RevealCard';
import { AppIcon, Icons } from '@/components/AppIcon';

interface Cert {
  title: string;
  issuer: string;
  tags: string[];
  iconColor: string;
  icon: React.FC;
}

const CERTS: Cert[] = [
  {
    title: 'Marketing Analytics',
    issuer: 'IIT Kharagpur',
    tags: ['NPTEL', '99%', 'Top 1% Topper', 'Elite + Gold'],
    iconColor: 'bg-blue-600',
    icon: Icons.BarChart,
  },
  {
    title: 'Introduction to Machine Learning',
    issuer: 'IIT Madras',
    tags: ['NPTEL', '71%', 'Elite'],
    iconColor: 'bg-purple-600',
    icon: Icons.GraduationCap,
  },
  {
    title: 'Fundamentals of AI and ML',
    issuer: 'VITyarthi',
    tags: ['Professional Certification'],
    iconColor: 'bg-indigo-600',
    icon: Icons.Sparkles,
  },
  {
    title: 'Python Essentials',
    issuer: 'VITyarthi',
    tags: ['Professional Certification'],
    iconColor: 'bg-emerald-600',
    icon: Icons.Terminal,
  },
  {
    title: 'Python Programming Internship',
    issuer: 'Internship Certificate',
    tags: ['Python', 'Backend'],
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
          <p className="text-foreground opacity-55">
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
                className="cert-card group relative overflow-hidden rounded-2xl h-full"
              >
                {/* Glowing border layer */}
                <div
                  className="absolute inset-0 rounded-2xl pointer-events-none"
                  style={{
                    padding: '1px',
                    background: 'linear-gradient(135deg, rgba(224,32,79,0.35), rgba(139,92,246,0.2), rgba(224,32,79,0.15))',
                    WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                    WebkitMaskComposite: 'xor',
                    maskComposite: 'exclude',
                  }}
                />

                {/* Hover shimmer overlay */}
                <div className="absolute inset-0 bg-white/0 group-hover:bg-white/[0.03] transition-all duration-500 rounded-2xl" />

                {/* Card content */}
                <div className="glass rounded-2xl p-10 flex flex-col items-center text-center h-full relative z-10"
                  style={{ boxShadow: '0 0 24px rgba(224,32,79,0.08), 0 4px 30px rgba(0,0,0,0.3)' }}
                >
                  {/* Icon */}
                  <AppIcon color={cert.iconColor} size="md">
                    <Icon />
                  </AppIcon>

                  {/* Title */}
                  <h3 className="text-foreground font-bold text-lg leading-snug mt-1 mb-5">
                    {cert.title}
                  </h3>

                  {/* Metadata pills */}
                  <div className="flex flex-wrap justify-center gap-2.5 mb-auto">
                    {cert.tags.map((tag) => (
                      <span
                        key={tag}
                        className="skill-pill px-5 py-2 rounded-full text-xs font-semibold text-foreground cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Issuer at bottom */}
                  <div className="w-full border-t border-white/10 mt-6 pt-4">
                    <p className="text-red-400 text-sm font-semibold tracking-wide opacity-90">
                      {cert.issuer}
                    </p>
                  </div>
                </div>
              </RevealCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
