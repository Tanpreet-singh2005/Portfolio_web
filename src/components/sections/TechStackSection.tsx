"use client";

import FadeUp from "@/components/FadeUp";
import { techStack } from "@/data/content";

// Map categories to subtle tint colours for their container
const CATEGORY_TINTS: Record<string, string> = {
  "Languages":        "rgba(201,162,39,0.08)",
  "Backend & APIs":   "rgba(74,43,47,0.05)",
  "AI / ML":          "rgba(255,51,128,0.05)",
  "Databases & Cloud":"rgba(74,43,47,0.05)",
  "Tools":            "rgba(201,162,39,0.08)",
};

export default function TechStackSection() {
  return (
    <section
      id="skills"
      aria-label="Technical skills"
      className="max-w-6xl mx-auto px-6 py-24 md:py-32"
    >
      {/* Section label */}
      <FadeUp>
        <span
          className="font-mono text-xs tracking-widest uppercase text-deep-brown/60 mb-4 block"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          04 · Skills
        </span>
      </FadeUp>

      <FadeUp delay={0.05}>
        <h2
          className="text-ink mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 500,
          }}
        >
          Tech Stack
        </h2>
      </FadeUp>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {techStack.map((cat, i) => (
          <FadeUp key={cat.category} delay={0.1 + i * 0.07}>
            <div
              className="card p-6 h-full"
              style={{ background: CATEGORY_TINTS[cat.category] ?? "rgba(255,255,255,0.55)" }}
              role="region"
              aria-label={cat.category}
            >
              <h3
                className="font-mono text-xs tracking-widest uppercase text-deep-brown/70 mb-4"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                {cat.category}
              </h3>
              <div className="flex flex-wrap gap-2" role="list">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    role="listitem"
                    className="inline-flex items-center px-3 py-1.5 rounded-full text-sm font-medium text-ink/80 bg-white/70 border border-ink/8 hover:border-gold/50 hover:text-gold transition-colors duration-150"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
