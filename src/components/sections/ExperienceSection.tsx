"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import { experience } from "@/data/content";
import type { ExperienceItem } from "@/data/content";

const CARD_ACCENTS = [
  "bg-[#FCF9F2]", // DataObserve (warm/gold)
  "bg-[#F7F4EF]", // Schoolnet (cream/brown)
  "bg-[#FBF8F1]", // E-Cell (gold accent)
  "bg-[#F5F5F4]", // AI Club (muted)
  "bg-[#FAFAF9]", // NSS (neutral)
];

function padZero(num: number) {
  return num < 10 ? `0${num}` : num.toString();
}

export default function ExperienceSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="experience"
      aria-label="Work experience"
      className="max-w-[1400px] mx-auto px-6 py-24 md:py-32"
    >
      <FadeUp>
        <div className="max-w-6xl mx-auto mb-12">
          <span
            className="font-mono text-xs tracking-widest uppercase text-deep-brown/60 mb-4 block"
            style={{ fontFamily: "var(--font-mono)" }}
          >
          My journey
          </span>
          <h2
            className="text-ink"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2rem, 4vw, 3.2rem)",
              fontWeight: 500,
            }}
          >
            Professional Trajectory
            {/*Where I&rsquo;ve Worked*/}
          </h2>
        </div>
      </FadeUp>

      <FadeUp delay={0.1}>
        <div className="max-w-6xl mx-auto h-[750px] md:h-[550px] flex flex-col md:flex-row gap-3 md:gap-4 w-full">
          {experience.map((item, index) => {
            const isActive = activeIndex === index;
            const bgClass = CARD_ACCENTS[index % CARD_ACCENTS.length];

            return (
              <div
                key={item.company}
                onClick={() => setActiveIndex(index)}
                className={[
                  "group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] border border-ink/5 shadow-sm flex",
                  bgClass,
                  isActive
                    ? "md:w-3/5 flex-grow md:flex-grow-0"
                    : "md:w-[72px] md:flex-none flex-none h-[64px] md:h-full hover:bg-white",
                ].join(" ")}
                aria-expanded={isActive}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActiveIndex(index);
                  }
                }}
              >
                {/* Inactive State Content */}
                <div
                  className={[
                    "absolute inset-0 flex md:flex-col items-center justify-between md:justify-start p-4 md:py-8 transition-opacity duration-300",
                    isActive ? "opacity-0 pointer-events-none" : "opacity-100",
                  ].join(" ")}
                >
                  <span className="font-mono text-[11px] font-bold text-ink/40 tracking-wider">
                    {padZero(index + 1)}
                  </span>
                  <span
                    className="md:[writing-mode:vertical-rl] md:rotate-180 font-mono text-[13px] tracking-[0.2em] font-semibold text-deep-brown uppercase whitespace-nowrap md:mt-8"
                  >
                    {item.company}
                  </span>
                  <span className="md:hidden font-mono text-[10px] tracking-widest text-ink/40 uppercase">
                    {item.category}
                  </span>
                </div>

                {/* Active State Content */}
                <div
                  className={[
                    "absolute inset-0 p-6 md:p-10 flex flex-col w-full h-full transition-opacity duration-500 delay-100",
                    isActive ? "opacity-100" : "opacity-0 pointer-events-none",
                  ].join(" ")}
                >
                  <div className="flex flex-col h-full w-full max-w-2xl mx-auto md:mx-0">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="font-mono text-sm font-bold text-ink/30">
                        {padZero(index + 1)}
                      </span>
                      <span className="font-mono text-[11px] tracking-widest uppercase text-hero-pink font-semibold">
                        {item.category}
                      </span>
                    </div>

                    <h3
                      className="text-2xl md:text-4xl text-ink leading-tight mb-2"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {item.company}
                    </h3>
                    
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-8">
                      <p className="text-deep-brown font-medium text-lg md:text-xl">
                        {item.role}
                      </p>
                      <div className="flex items-center gap-3 text-ink/50 font-mono text-xs tracking-wide">
                        <span>{item.period}</span>
                        {item.location && (
                          <>
                            <span className="w-1 h-1 rounded-full bg-ink/20" />
                            <span>{item.location}</span>
                          </>
                        )}
                      </div>
                    </div>

                    <div className="flex-grow overflow-y-auto pr-4 scrollbar-thin scrollbar-thumb-ink/10 scrollbar-track-transparent">
                      <ul className="flex flex-col gap-4" role="list">
                        {item.bullets.map((bullet, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span
                              className="shrink-0 w-1.5 h-1.5 rounded-full bg-gold/80 mt-2"
                              aria-hidden="true"
                            />
                            <p className="text-ink/80 text-[15px] leading-relaxed">
                              {bullet}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </FadeUp>
    </section>
  );
}
