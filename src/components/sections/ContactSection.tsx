"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import { profile } from "@/data/content";
import { OpenRegular } from "@fluentui/react-icons";

const SOCIAL_LINKS = [
  { label: "GitHub",   href: profile.links.github,   available: !profile.links.github.startsWith("TODO") },
  { label: "LinkedIn", href: profile.links.linkedin,  available: !profile.links.linkedin.startsWith("TODO") },
  { label: "X / Twitter", href: profile.links.x,     available: !profile.links.x.startsWith("TODO") },
];

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    
    const formData = new FormData(e.currentTarget);
    formData.append("subject", "from portfolio");

    try {
      // NOTE: Replace the URL below with your actual Formspree endpoint URL
      // e.g., "https://formspree.io/f/xyzababc"
      const response = await fetch(process.env.NEXT_PUBLIC_FORMSPREE_URL || "https://formspree.io/f/mppqanoe", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });
      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
        <div className="w-14 h-14 rounded-full bg-[#d5ae61]/20 text-[#d5ae61] flex items-center justify-center mb-2">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" /></svg>
        </div>
        <h3 className="text-ink font-semibold text-[22px]" style={{ fontFamily: "var(--font-display, serif)" }}>Message sent successfully.</h3>
        <p className="text-ink/80 text-[15px]">Thanks — your message has been sent. I'll get back to you soon.</p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-6 px-6 py-2.5 rounded-xl bg-deep-brown text-white text-[15px] font-medium hover:bg-ink transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2.5">
        <label htmlFor="name" className="text-[15px] md:text-[16px] font-medium text-deep-brown">Name</label>
        <input 
          type="text" 
          id="name" 
          name="name" 
          required
          placeholder="Your first and last name"
          className="w-full px-5 h-[64px] rounded-xl bg-white/40 border border-[#d5cdb3]/40 text-ink text-[16px] placeholder:text-ink/40 focus:outline-none focus:border-deep-brown/40 focus:bg-white/60 transition-all"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <label htmlFor="email" className="text-[15px] md:text-[16px] font-medium text-deep-brown">Email</label>
        <input 
          type="email" 
          id="email" 
          name="email" 
          required
          placeholder="you@example.com"
          className="w-full px-5 h-[64px] rounded-xl bg-white/40 border border-[#d5cdb3]/40 text-ink text-[16px] placeholder:text-ink/40 focus:outline-none focus:border-deep-brown/40 focus:bg-white/60 transition-all"
        />
      </div>

      <div className="flex flex-col gap-2.5">
        <label htmlFor="message" className="text-[15px] md:text-[16px] font-medium text-deep-brown">Message</label>
        <textarea 
          id="message" 
          name="message" 
          required
          placeholder="What would you like to talk about?"
          className="w-full p-5 min-h-[170px] rounded-xl bg-white/40 border border-[#d5cdb3]/40 text-ink text-[16px] placeholder:text-ink/40 focus:outline-none focus:border-deep-brown/40 focus:bg-white/60 transition-all resize-y"
        />
      </div>

      {status === "error" && (
        <p className="text-red-800/80 text-[15px] font-medium mt-[-4px]">Something went wrong. Please try again or reach me directly.</p>
      )}

      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="mt-2 w-full h-[64px] rounded-xl bg-deep-brown text-white text-[16px] font-medium hover:bg-ink transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {status === "submitting" ? "Sending..." : "Send message"}
      </button>
    </form>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact"
      className="w-full section-band-2 py-24 md:py-32"
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">
      {/* Section label */}
      <FadeUp>
        <span
          className="font-mono text-xs tracking-widest uppercase text-deep-brown/60 mb-4 block"
          style={{ fontFamily: "var(--font-mono)" }}
        >
          {/*06 · Contact*/}
        </span>
      </FadeUp>

      <div className="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left: heading + text + socials */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div>
            <FadeUp delay={0.05}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/40 border border-[#d5cdb3]/40 backdrop-blur-md shadow-sm mb-8">
                <span className="relative flex h-2 w-2 ml-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[13px] font-medium text-deep-brown mr-1">
                  Open to internships, freelance opportunities, and collaborations.
                </span>
              </div>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h2
                className="text-ink leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-edwardian)",
                  fontSize: "clamp(2.3rem, 4.6vw, 3.6rem)",
                  fontWeight: 400,
                }}
              >
                Let&rsquo;s build{" "}
                <em className="text-deep-brown">something</em>
                <br />
                together.
              </h2>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="text-ink/85 text-lg leading-relaxed max-w-sm">
                Whether it&rsquo;s a role, a collaboration, or just a conversation about
                AI and backend architecture — my inbox is open.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.25}>
            <div className="flex flex-col gap-8">
              {/* Résumé */}
              

              {/* Social */}
              <div>
                <p
                  className="font-mono text-[11px] font-bold tracking-widest uppercase text-ink/70 mb-3"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  Connect with me directly
                </p>
                <div className="flex flex-wrap gap-2">
                  {SOCIAL_LINKS.filter((l) => l.available).map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${link.label} profile (opens in new tab)`}
                      className="px-4 py-2 rounded-full border border-ink/10 text-ink/90 text-sm font-medium hover:border-gold/50 hover:text-gold transition-all"
                    >
                      {link.label} ↗
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Right: contact form */}
        <div className="w-full lg:col-span-7">
          <FadeUp delay={0.3}>
            <div className="card p-6 sm:p-8 md:p-10 flex flex-col gap-6">
              <ContactForm />
            </div>
          </FadeUp>
        </div>
      </div>
      </div>
    </section>
  );
}
