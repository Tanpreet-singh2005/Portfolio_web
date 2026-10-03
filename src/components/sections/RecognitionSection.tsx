"use client";

import FadeUp from "@/components/FadeUp";
import { education, extracurriculars } from "@/data/content";

export default function RecognitionSection() {
  return (
    <section
      id="recognition"
      aria-label="Recognition"
      className="w-full section-band-1 py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 flex flex-col gap-24">
      {/* Extracurriculars / Achievements */}
      <div>
        <FadeUp>
          <span
            className="font-mono text-xs tracking-widest uppercase text-deep-brown/60 mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
              {/*05 · Recognition*/}
          </span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2
            className="text-ink mb-10"
            style={{
              fontFamily: "var(--font-edwardian)",
              fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)",
              fontWeight: 400,
            }}
          >
            Achievements
          </h2>
        </FadeUp>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {extracurriculars.map((item, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.1}>
              <div className="card p-8 h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <span 
                  className="font-mono text-[11px] tracking-widest uppercase text-gold font-bold mb-4"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {item.period}
                </span>
                <h3 
                  className="text-ink font-semibold text-[17px] mb-4 leading-snug" 
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.role}
                </h3>
                <ul className="flex flex-col gap-3 flex-grow" role="list">
                  {item.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <span
                        className="shrink-0 w-1.5 h-1.5 rounded-full bg-gold/60 mt-2"
                        aria-hidden="true"
                      />
                      <p className="text-ink/90 text-sm leading-relaxed">{b}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>

      {/* Certificates */}
      <div>
        <FadeUp>
          <span
            className="font-mono text-xs tracking-widest uppercase text-deep-brown/60 mb-3 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
            {/*Credentials*/}
          </span>
        </FadeUp>
        <FadeUp delay={0.05}>
          <h2
            className="text-ink mb-10"
            style={{
              fontFamily: "var(--font-edwardian)",
              fontSize: "clamp(1.9rem, 3.8vw, 3.2rem)",
              fontWeight: 400,
            }}
          >
            Certificates
          </h2>
        </FadeUp>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {education.certifications.map((cert, i) => (
            <FadeUp key={i} delay={0.1 + i * 0.1}>
              <div className="card p-7 h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300">
                <h3 
                  className="text-ink font-semibold text-base mb-4 leading-snug" 
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {cert.title}
                </h3>
                <p className="text-ink/90 text-[13px] leading-relaxed flex-grow mb-6">
                  {cert.detail}
                </p>
                <span 
                  className="font-mono text-[11px] tracking-widest uppercase text-ink/40 font-bold mt-auto"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {/*Credential*/}
                </span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
}
