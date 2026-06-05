'use client';
import { useReveal } from '@/hooks/useReveal';
import { RevealCard } from '@/components/RevealCard';

interface Experience {
  role: string;
  org: string;
  period: string;
  duration: string;
  description: string;
  tags: string[];
  icon: string;
  highlight?: boolean;
}

const EXPERIENCES: Experience[] = [
  {
    role: 'Technology Intern',
    org: 'Schoolnet India Limited',
    period: 'May 2025 – Jun 2025',
    duration: '2 months',
    description:
      'Analyzed the technical architecture of a K-Class platform serving 1M+ students. Documented scalable development practices and backend workflows using C++ and Python.',
    tags: ['C++', 'Python', 'Backend', 'Architecture'],
    icon: '💼',
    highlight: true,
  },
  {
    role: 'PR & Outreach Lead',
    org: 'AI Club – VIT Bhopal',
    period: 'Apr 2025 – Present',
    duration: '1 yr 3 mo',
    description:
      'Driving member engagement, forging partnerships, and promoting hands-on AI workshops and hackathons across the university community.',
    tags: ['Leadership', 'AI', 'Community', 'Events'],
    icon: '🤖',
    highlight: true,
  },
  {
    role: 'Finance & Sponsorship Team Member',
    org: 'E-Cell – VIT Bhopal',
    period: 'Mar 2025 – Present',
    duration: '1 yr 4 mo',
    description:
      'Planning budgets, forecasting expenses, and ensuring the financial sustainability of entrepreneurial events and startup competitions.',
    tags: ['Finance', 'Sponsorship', 'Entrepreneurship'],
    icon: '💰',
  },
  {
    role: 'Open Source Contributor',
    org: 'Social Winter of Code (SWOC)',
    period: 'Jan 2025 – Present',
    duration: '1 yr 6 mo',
    description:
      'Actively contributing to open-source projects during SWOC, collaborating with developers globally to ship meaningful code.',
    tags: ['Open Source', 'Collaboration', 'Git'],
    icon: '🌐',
  },
  {
    role: 'Open Source Contributor',
    org: 'GirlScript Summer of Code',
    period: 'Sep 2024 – Nov 2024',
    duration: '3 months',
    description:
      'Contributed to multiple repositories during GirlScript Summer of Code, enhancing features and fixing bugs.',
    tags: ['Open Source', 'GSSoC', 'Community'],
    icon: '👩‍💻',
  },
  {
    role: 'Hacktoberfest Contributor',
    org: 'Hacktoberfest',
    period: 'Oct 2024 – Nov 2024',
    duration: '2 months',
    description:
      'Participated in Hacktoberfest, making quality pull requests to open-source projects and earning the official badge.',
    tags: ['Open Source', 'Hacktoberfest', 'Git'],
    icon: '🎃',
  },
  {
    role: 'Event Management Team',
    org: 'NSS – VIT Bhopal',
    period: 'Sep 2024 – Present',
    duration: '1 yr 10 mo',
    description:
      'Organizing social-impact initiatives, coordinating logistics, and fostering community growth across NSS events.',
    tags: ['Events', 'Community', 'Social Impact'],
    icon: '🌱',
  },
  {
    role: 'Podcast Team Member',
    org: 'E-Cell – VIT Bhopal',
    period: 'Nov 2024 – Mar 2025',
    duration: '5 months',
    description:
      "Podcast host and team member at ECell VIT Bhopal University's Podcast Team, interviewing entrepreneurs and startup founders.",
    tags: ['Podcast', 'Entrepreneurship', 'Communication'],
    icon: '🎙️',
  },
];
export default function ExperienceSection() {
  const headerRef = useReveal();

  return (
    <section id="experience" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div ref={headerRef} className="reveal section-header">
          <p className="text-purple-400 font-mono text-sm mb-3 tracking-widest uppercase">My Journey</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white">
            Experience &amp; <span className="gradient-text">Activities</span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-xl mx-auto">
            From internships to open-source sprints, leadership roles to podcast hosting — here's what I've been up to.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-6">
          {EXPERIENCES.map((exp, i) => (
            <RevealCard key={i} delay={Math.min(i * 80, 400)}>
              <div className={`experience-card group glass rounded-2xl p-6 border transition-all duration-300 cursor-pointer text-center flex flex-col items-center justify-center ${exp.highlight ? 'border-purple-500/50 glow-purple' : 'border-slate-700/50'}`}>
                <h3 className="text-white font-bold text-lg sm:text-xl">{exp.role}</h3>
                <p className="gradient-text font-semibold text-sm mt-1">{exp.org}</p>

                <div className="experience-card-content w-full">
                  <div className="experience-card-inner">
                    <div className="pt-5 mt-5 border-t border-slate-800/50 flex flex-col items-center gap-3">
                      <div className="flex gap-4 text-xs text-slate-400 justify-center">
                        <span>{exp.period}</span>
                        <span>•</span>
                        <span className="text-purple-400 font-medium">{exp.duration}</span>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed max-w-xl mx-auto">{exp.description}</p>
                      <div className="flex flex-wrap justify-center gap-2 mt-2">
                        {exp.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealCard>
          ))}
        </div>
      </div>
    </section>
  );
}
