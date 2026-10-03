"use client";

import FadeUp from "@/components/FadeUp";
import { education } from "@/data/content";
import {
  BuildingBankRegular,
  CertificateRegular,
  StarRegular,
} from "@fluentui/react-icons";

export default function EducationSection() {
  return (
    <section
      id="education"
      aria-label="Education"
      className="max-w-6xl mx-auto px-6 py-24 md:py-32"
    >
      {/* Section label */}
      <FadeUp>
        <span
          className="font-mono text-xs tracking-widest uppercase text-deep-brown/60 mb-4 block"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          02 · Education
        </span>
      </FadeUp>

      <FadeUp delay={0.1}>
        <h2
          className="text-ink mb-12"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(2rem, 4vw, 3.2rem)",
            fontWeight: 500,
          }}
        >
          Academic Background
        </h2>
      </FadeUp>

      <div className="grid lg:grid-cols-3 gap-8 items-start">
        {/* Degree card (spans 2 cols) */}
        <FadeUp delay={0.15} className="lg:col-span-2">
          <div className="card p-8 h-full">
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center text-gold">
                <BuildingBankRegular fontSize={24} />
              </div>
              <div className="min-w-0">
                <h3
                  className="text-ink font-semibold text-xl mb-1"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {education.institution}
                </h3>
                <p className="text-ink/50 text-sm mb-1">{education.location}</p>
                <p className="text-deep-brown font-medium mt-2 text-base">{education.degree}</p>
                <p className="text-ink/60 text-sm mt-0.5">{education.period}</p>

                <hr className="hairline my-5" />

                <div className="flex items-center gap-6 flex-wrap">
                  <div>
                    <p
                      className="font-mono text-[10px] tracking-widest uppercase text-ink/40 mb-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      CGPA
                    </p>
                    <p className="text-4xl font-semibold text-ink" style={{ fontFamily: "var(--font-display)" }}>
                      {education.cgpa}
                      <span className="text-xl text-ink/30 font-light">/10</span>
                    </p>
                  </div>
                  <div>
                    <p
                      className="font-mono text-[10px] tracking-widest uppercase text-ink/40 mb-1"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      Duration
                    </p>
                    <p className="text-ink/70 font-medium">{education.period}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

        {/* Certifications */}
        <FadeUp delay={0.25}>
          <div className="card p-6 h-full">
            <div className="flex items-center gap-2 mb-5">
              <CertificateRegular fontSize={18} className="text-gold" />
              <h3
                className="text-ink font-semibold text-base"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Certifications &amp; Awards
              </h3>
            </div>
            <ul className="flex flex-col gap-4" role="list">
              {education.certifications.map((cert, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 pb-4 border-b border-ink/5 last:border-0 last:pb-0"
                >
                  <StarRegular fontSize={14} className="text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-ink/80 text-sm font-medium leading-snug">{cert.title}</p>
                    <p
                      className="font-mono text-[10px] text-ink/40 mt-0.5 tracking-wide"
                      style={{ fontFamily: "var(--font-mono)" }}
                    >
                      {cert.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
