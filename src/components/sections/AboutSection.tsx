"use client";

import FadeUp from "@/components/FadeUp";

export default function AboutSection() {
  return (
    <section
      id="about"
      aria-label="About Aarya"
      className="w-full section-band-1 py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
      {/* Section label */}
      <FadeUp>
        <span
          className="font-mono text-[11px] tracking-[0.28em] uppercase text-deep-brown/60 mb-5 block"
          style={{ fontFamily: "var(--font-mono, monospace)" }}
        >
          {/*01 · About*/}
        </span>
      </FadeUp>

      {/* Main Headline */}
      <FadeUp delay={0.1}>
        <h2
          className="text-ink leading-tight max-w-6xl mb-16 md:mb-20"
          style={{
            fontFamily: "var(--font-edwardian, cursive)",
            fontSize: "clamp(2.3rem, 4.9vw, 3.9rem)",
            fontWeight: 400,
          }}
        >
          Building at the <em className="text-deep-brown">intersection</em><br className="hidden md:block" /> of AI &amp; engineering.
        </h2>
      </FadeUp>

      {/* Asymmetric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
        
        {/* 1. WHO I AM (Full Width, Editorial Text Layout) */}
        <div className="md:col-span-12 col-span-1">
          <FadeUp delay={0.2} className="h-full">
            <div className="h-full p-8 md:p-12 rounded-[24px] border border-white/20 bg-white/30 backdrop-blur-md shadow-[0_8px_30px_rgba(70,45,35,0.04)] hover:-translate-y-1 transition-transform duration-300">
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-deep-brown/50 block mb-4">
                Profile
              </span>
              <h3 
                className="text-[26px] md:text-[34px] text-ink mb-8 leading-tight max-w-4xl" 
                style={{ fontFamily: "var(--font-display, serif)" }}
              >
                I enjoy turning curiosity into things that work — understanding a problem, breaking it down, and building something practical from it.
              </h3>
              <div className="flex flex-col md:flex-row gap-6 md:gap-12 text-ink/75 text-[15px] md:text-[16.5px] leading-relaxed">
                <p className="flex-1">
                  I’m particularly drawn to challenging problems where engineering, data, and intelligent systems come together. I like taking ownership from the early stages of understanding a problem through building, testing, refining, and making the final result reliable.
                </p>
                <p className="flex-1">
                  What matters to me is not just getting something to work, but understanding why it works and finding ways to make it better. I enjoy learning quickly, experimenting with new ideas, and working through problems that don’t have an obvious solution.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* 2. HOW I THINK / BUILD */}
        <div className="md:col-span-7 col-span-1">
          <FadeUp delay={0.3} className="h-full">
            <div className="h-full p-8 md:p-10 rounded-[24px] border border-white/20 bg-white/30 backdrop-blur-md shadow-[0_8px_30px_rgba(70,45,35,0.04)] hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-center">
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-deep-brown/50 block mb-5">
                Technical Mindset
              </span>
              <h3 
                className="text-[24px] md:text-[28px] text-ink mb-5 leading-snug" 
                style={{ fontFamily: "var(--font-display, serif)" }}
              >
                Understanding the problem.<br />
                Building the solution.<br />
                Improving what comes next.
              </h3>
              <p className="text-ink/75 text-[15px] md:text-[16.5px] leading-relaxed">
                I enjoy going beyond simply making something work — I want to understand the system underneath it, improve it, and make it reliable.
              </p>
            </div>
          </FadeUp>
        </div>

        {/* 3. EDUCATION + 9.07 */}
        <div className="md:col-span-5 col-span-1">
          <FadeUp delay={0.4} className="h-full">
            <div className="h-full p-8 md:p-9 rounded-[24px] border border-white/20 bg-white/30 backdrop-blur-md shadow-[0_8px_30px_rgba(70,45,35,0.04)] hover:-translate-y-1 transition-transform duration-300 flex flex-col justify-between">
              <div>
                <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-deep-brown/50 block mb-4">
                  Education
                </span>
                <h3 
                  className="text-[20px] md:text-[22px] text-ink mb-6 leading-snug" 
                  style={{ fontFamily: "var(--font-display, serif)" }}
                >
                  B.Tech in Computer Science<br />&amp; Engineering
                </h3>
              </div>
              
              <div className="flex items-end justify-between gap-4 mt-4">
                <div className="flex flex-col gap-1.5 pb-2">
                  <span className="text-ink/90 font-medium text-[14.5px] leading-tight">VIT Bhopal University</span>
                  <span className="text-ink/50 text-[12px] font-mono tracking-widest mt-0.5">2023 — 2027</span>
                </div>
                
                <div className="flex flex-col items-end">
                  <span 
                    className="text-[64px] md:text-[76px] text-ink tracking-[-0.04em]"
                    style={{ fontFamily: "var(--font-display, serif)", lineHeight: "0.8" }}
                  >
                    9.07
                  </span>
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-deep-brown/50 mt-3">
                    CGPA / 10
                  </span>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* 4. PROOF IN NUMBERS */}
        <div className="md:col-span-12 col-span-1">
          <FadeUp delay={0.5} className="h-full">
            <div className="h-full p-8 md:p-10 rounded-[24px] border border-ink/5 bg-[#F6EDDF]/40 backdrop-blur-md shadow-[0_8px_30px_rgba(70,45,35,0.04)] hover:-translate-y-1 transition-transform duration-300">
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-deep-brown/50 block mb-3">
                Proof in Numbers
              </span>
              <h3 
                className="text-2xl md:text-[28px] text-ink mb-8 md:mb-10 leading-tight" 
                style={{ fontFamily: "var(--font-display, serif)" }}
              >
                Technical Achievements
              </h3>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 md:gap-y-10">
                
                {/* Metric 1 */}
                <div className="flex flex-col">
                  <span className="text-[36px] md:text-[46px] text-ink tracking-[-0.04em] leading-none mb-2" style={{ fontFamily: "var(--font-display, serif)" }}>
                    99%
                  </span>
                  <span className="text-ink/80 text-[13px] md:text-[14px] leading-snug font-medium">NPTEL Marketing<br />Analytics Score</span>
                </div>

                {/* Metric 2 */}
                <div className="flex flex-col">
                  <span className="text-[36px] md:text-[46px] text-ink tracking-[-0.04em] leading-none mb-2" style={{ fontFamily: "var(--font-display, serif)" }}>
                    Top 1%
                  </span>
                  <span className="text-ink/80 text-[13px] md:text-[14px] leading-snug font-medium">Among 3,495<br />candidates</span>
                </div>

                {/* Metric 3 */}
                <div className="flex flex-col">
                  <span className="text-[36px] md:text-[46px] text-ink tracking-[-0.04em] leading-none mb-2" style={{ fontFamily: "var(--font-display, serif)" }}>
                    4★
                  </span>
                  <span className="text-ink/80 text-[13px] md:text-[14px] leading-snug font-medium">C++<br />HackerRank</span>
                </div>

                {/* Metric 4 */}
                <div className="flex flex-col">
                  <span className="text-[36px] md:text-[46px] text-ink tracking-[-0.04em] leading-none mb-2" style={{ fontFamily: "var(--font-display, serif)" }}>
                    3★
                  </span>
                  <span className="text-ink/80 text-[13px] md:text-[14px] leading-snug font-medium">Python<br />HackerRank</span>
                </div>

                {/* Metric 5 */}
                <div className="flex flex-col">
                  <span className="text-[36px] md:text-[46px] text-ink tracking-[-0.04em] leading-none mb-2" style={{ fontFamily: "var(--font-display, serif)" }}>
                    12%
                  </span>
                  <span className="text-ink/80 text-[13px] md:text-[14px] leading-snug font-medium">Baseline accuracy<br />improvement</span>
                </div>

                {/* Metric 6 */}
                <div className="flex flex-col">
                  <span className="text-[36px] md:text-[46px] text-ink tracking-[-0.04em] leading-none mb-2" style={{ fontFamily: "var(--font-display, serif)" }}>
                    10K+
                  </span>
                  <span className="text-ink/80 text-[13px] md:text-[14px] leading-snug font-medium">Multimodal samples<br />processed</span>
                </div>

                {/* Metric 7 */}
                <div className="flex flex-col">
                  <span className="text-[36px] md:text-[46px] text-ink tracking-[-0.04em] leading-none mb-2" style={{ fontFamily: "var(--font-display, serif)" }}>
                    5
                  </span>
                  <span className="text-ink/80 text-[13px] md:text-[14px] leading-snug font-medium">Datasets<br />standardized</span>
                </div>

              </div>
            </div>
          </FadeUp>
        </div>

        {/* 5. WHO I AM OUTSIDE TECHNOLOGY */}
        <div className="md:col-span-8 md:col-start-3 col-span-1">
          <FadeUp delay={0.6} className="h-full">
            <div className="h-full p-8 md:p-10 rounded-[24px] border border-white/20 bg-white/30 backdrop-blur-md shadow-[0_8px_30px_rgba(70,45,35,0.04)] hover:-translate-y-1 transition-transform duration-300 flex flex-col items-center text-center">
              <span className="font-mono text-[11px] font-bold tracking-[0.2em] uppercase text-deep-brown/50 block mb-5">
                Beyond Technology
              </span>
              <p className="text-ink text-[16px] md:text-[18px] leading-relaxed max-w-2xl" style={{ fontFamily: "var(--font-display, serif)" }}>
                A creative side shaped by Kathak, music, painting, astronomy, and astrophotography — with a constant curiosity to explore new places, perspectives, and experiences.
              </p>
            </div>
          </FadeUp>
        </div>

      </div>
      </div>
    </section>
  );
}
