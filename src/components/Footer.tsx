"use client";

import { profile } from "@/data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      role="contentinfo"
      className="max-w-6xl mx-auto px-6 py-10 mt-8"
    >
      <hr className="hairline mb-8" />

      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Name mark */}
        <p
          className="text-ink/40 text-sm"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {profile.name} &copy; {year}
        </p>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in new tab)"
            className="text-ink/35 hover:text-gold text-sm transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            GitHub
          </a>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in new tab)"
            className="text-ink/35 hover:text-gold text-sm transition-colors"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            LinkedIn
          </a>
        </div>

        {/* Craft note */}
        <p
          className="text-ink/25 text-xs"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          Built with Next.js · Framer Motion
        </p>
      </div>
    </footer>
  );
}
