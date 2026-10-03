"use client";

import FadeUp from "@/components/FadeUp";
import { profile } from "@/data/content";
import { OpenRegular } from "@fluentui/react-icons";

const SOCIAL_LINKS = [
  { label: "GitHub",   href: profile.links.github,   available: !profile.links.github.startsWith("TODO") },
  { label: "LinkedIn", href: profile.links.linkedin,  available: !profile.links.linkedin.startsWith("TODO") },
  { label: "Codolio",  href: profile.links.codolio,   available: !profile.links.codolio.startsWith("TODO") },
  { label: "X / Twitter", href: profile.links.x,     available: !profile.links.x.startsWith("TODO") },
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="max-w-6xl mx-auto px-6 py-24 md:py-36"
    >
      {/* Section label */}
      <FadeUp>
        <span
          className="font-mono text-xs tracking-widest uppercase text-deep-brown/60 mb-4 block"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          06 · Contact
        </span>
      </FadeUp>

      <div className="grid md:grid-cols-2 gap-16 items-start">
        {/* Left: heading */}
        <div>
          <FadeUp delay={0.1}>
            <h2
              className="text-ink leading-tight mb-6"
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                fontWeight: 500,
              }}
            >
              Let&rsquo;s build{" "}
              <em className="italic font-light text-deep-brown">something</em>
              <br />
              together.
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="text-ink/60 text-lg leading-relaxed max-w-sm">
              Whether it&rsquo;s a role, a collaboration, or just a conversation about
              AI and backend architecture — my inbox is open.
            </p>
          </FadeUp>
        </div>

        {/* Right: contact card */}
        <FadeUp delay={0.25}>
          <div className="card p-8 flex flex-col gap-6">
            {/* Résumé */}
            <div>
              <p
                className="font-mono text-[10px] tracking-widest uppercase text-ink/40 mb-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Résumé
              </p>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Aarya's résumé PDF (opens in new tab)"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-deep-brown text-white text-sm font-medium hover:bg-ink transition-colors"
              >
                <OpenRegular fontSize={16} />
                Download PDF
              </a>
            </div>

            <hr className="hairline" />

            {/* Social */}
            <div>
              <p
                className="font-mono text-[10px] tracking-widest uppercase text-ink/40 mb-3"
                style={{ fontFamily: "var(--font-mono)" }}
              >
                Elsewhere
              </p>
              <div className="flex flex-wrap gap-2">
                {SOCIAL_LINKS.filter((l) => l.available).map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${link.label} profile (opens in new tab)`}
                    className="px-4 py-2 rounded-full border border-ink/10 text-ink/70 text-sm font-medium hover:border-gold/50 hover:text-gold transition-all"
                  >
                    {link.label} ↗
                  </a>
                ))}
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
