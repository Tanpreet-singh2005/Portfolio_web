"use client";

import FadeUp from "@/components/FadeUp";
import { profile } from "@/data/content";
import {
  GlobeRegular,
  BriefcaseRegular,
  BookOpenRegular,
} from "@fluentui/react-icons";

const HIGHLIGHTS = [
  {
    icon: <BriefcaseRegular fontSize={20} />,
    label: "Current Role",
    value: "Full Stack Engineer Intern @ DataObserve LLC",
  },
  {
    icon: <BookOpenRegular fontSize={20} />,
    label: "Studying",
    value: "B.Tech CSE — VIT Bhopal (CGPA 9.07)",
  },
  {
    icon: <GlobeRegular fontSize={20} />,
    label: "Focus Areas",
    value: "AI Platforms · Backend APIs · ETL Pipelines",
  },
];

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Aarya"
      className="max-w-6xl mx-auto px-6 py-28 md:py-36"
    >
      {/* Section label */}
      <FadeUp>
        <span
          className="font-mono text-xs tracking-widest uppercase text-deep-brown/60 mb-4 block"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          01 · About
        </span>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: heading */}
        <FadeUp delay={0.1}>
          <h2
            className="text-ink leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.4rem, 5vw, 4rem)",
              fontWeight: 500,
            }}
          >
            Building at the{" "}
            <em className="not-italic text-deep-brown italic">intersection</em>{" "}
            of AI&nbsp;&amp;&nbsp;engineering.
          </h2>
        </FadeUp>

        {/* Right: body + highlights */}
        <div className="flex flex-col gap-8">
          <FadeUp delay={0.2}>
            <p className="text-ink/70 text-lg leading-relaxed">
              I&rsquo;m a Computer Science undergraduate at VIT Bhopal with a focus on
              building AI-driven platforms and scalable backend systems. Currently
              interning at DataObserve LLC (Houston, TX), I architect agentic workflows,
              engineer RESTful APIs, and optimize data pipelines across PostgreSQL and GCP.
            </p>
          </FadeUp>

          <FadeUp delay={0.3}>
            <p className="text-ink/70 text-lg leading-relaxed">
              I care deeply about clean architecture, measurable outcomes, and writing
              software that handles real-world load. Outside of code I lead PR &amp; outreach
              for VIT Bhopal&rsquo;s AI Club and advocate for student-industry collaboration.
            </p>
          </FadeUp>

          {/* Highlight cards */}
          <div className="flex flex-col gap-3 mt-2">
            {HIGHLIGHTS.map((h, i) => (
              <FadeUp key={h.label} delay={0.35 + i * 0.08}>
                <div className="card flex items-center gap-4 px-5 py-4">
                  <span className="text-gold shrink-0">{h.icon}</span>
                  <div className="min-w-0">
                    <p
                      className="font-mono text-[10px] tracking-widest uppercase text-ink/40 mb-0.5"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {h.label}
                    </p>
                    <p className="text-ink/80 text-sm font-medium truncate">{h.value}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Social links */}
          <FadeUp delay={0.6}>
            <div className="flex items-center gap-4 flex-wrap">
              <a
                href={profile.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in new tab)"
                className="font-mono text-xs tracking-wide underline underline-offset-4 text-deep-brown hover:text-gold transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                GitHub ↗
              </a>
              <a
                href={profile.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in new tab)"
                className="font-mono text-xs tracking-wide underline underline-offset-4 text-deep-brown hover:text-gold transition-colors"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                LinkedIn ↗
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
