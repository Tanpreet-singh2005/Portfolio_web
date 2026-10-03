"use client";

import FadeUp from "@/components/FadeUp";
import { projects } from "@/data/content";
import type { Project } from "@/data/content";
import {
  CodeRegular,
  OpenRegular,
  PersonRegular,
} from "@fluentui/react-icons";

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const isPlaceholder = project.githubUrl === "TODO_REPO_URL";

  return (
    <FadeUp delay={0.1 + index * 0.12}>
      <article
        className="card p-8 flex flex-col h-full group"
        aria-label={project.title}
      >
        {/* Top row */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="w-10 h-10 rounded-xl bg-gold/10 flex items-center justify-center text-gold shrink-0">
            <CodeRegular fontSize={20} />
          </div>
          {!isPlaceholder && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View ${project.title} on GitHub (opens in new tab)`}
              className="p-2 rounded-lg text-ink/30 hover:text-gold transition-colors"
            >
              <OpenRegular fontSize={18} />
            </a>
          )}
        </div>

        {/* Title & subtitle */}
        <h3
          className="text-ink font-semibold text-xl mb-1 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {project.title}
        </h3>
        <p className="text-deep-brown/70 text-sm mb-1">{project.subtitle}</p>

        {/* Role badge */}
        {project.role && (
          <div className="inline-flex items-center gap-1.5 mb-3">
            <PersonRegular fontSize={12} className="text-gold" />
            <span
              className="font-mono text-[10px] tracking-widest uppercase text-gold"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {project.role}
            </span>
          </div>
        )}

        <hr className="hairline my-4" />

        {/* Bullets */}
        <ul className="flex flex-col gap-2.5 mb-6 flex-1" role="list">
          {project.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3">
              <span
                className="shrink-0 w-1.5 h-1.5 rounded-full bg-gold/60 mt-2"
                aria-hidden="true"
              />
              <p className="text-ink/65 text-sm leading-relaxed">{b}</p>
            </li>
          ))}
        </ul>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-auto" role="list">
          {project.tags.map((tag) => (
            <span
              key={tag}
              role="listitem"
              className="px-2.5 py-1 rounded-md text-xs font-medium text-deep-brown/70 bg-deep-brown/6 border border-deep-brown/10"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    </FadeUp>
  );
}

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-label="Projects"
      className="max-w-6xl mx-auto px-6 py-24 md:py-32"
    >
      {/* Section label */}
      <FadeUp>
        <span
          className="font-mono text-xs tracking-widest uppercase text-deep-brown/60 mb-4 block"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          05 · Projects
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
          Selected Work
        </h2>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} project={p} index={i} />
        ))}
      </div>
    </section>
  );
}
