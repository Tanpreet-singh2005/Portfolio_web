"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FadeUp from "@/components/FadeUp";
import { profile } from "@/data/content";
import {
  MailRegular,
  SendRegular,
  CheckmarkCircleRegular,
  ErrorCircleRegular
} from "@fluentui/react-icons";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xyekkpve";

function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        const data = await response.json().catch(() => ({}));
        setErrorMessage(data?.error || "Unable to send your message. Please try again.");
        setStatus("error");
      }
    } catch (error) {
      setErrorMessage("Network error occurred. Please check your connection or email directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 px-4"
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mb-2 shadow-[0_0_30px_rgba(52,211,153,0.35)] animate-bounce">
          <CheckmarkCircleRegular fontSize={36} />
        </div>
        <h3 className="text-white font-bold text-2xl tracking-tight">
          Message Sent Directly to Tanpreet!
        </h3>
        <p className="text-slate-300 text-sm max-w-md leading-relaxed">
          Thank you for reaching out. Your message was delivered via Formspree. Tanpreet will review and respond promptly.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-4 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-sm font-semibold transition-all border border-slate-700 cursor-pointer"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center justify-between">
            <span>Your Name</span>
            <span className="text-cyan-400 font-bold">*</span>
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required
            placeholder="John Doe"
            className="w-full px-4 h-12 rounded-xl bg-[#080D1A] border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
          />
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center justify-between">
            <span>Email Address</span>
            <span className="text-cyan-400 font-bold">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required
            placeholder="john@example.com"
            className="w-full px-4 h-12 rounded-xl bg-[#080D1A] border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold">
          Subject
        </label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          placeholder="Software Engineer Role / Technical Discussion"
          className="w-full px-4 h-12 rounded-xl bg-[#080D1A] border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-slate-300 font-semibold flex items-center justify-between">
          <span>Your Message</span>
          <span className="text-cyan-400 font-bold">*</span>
        </label>
        <textarea 
          id="message" 
          name="message" 
          required
          rows={5}
          placeholder="Hi Tanpreet, we'd love to connect regarding an engineering position or technical collaboration..."
          className="w-full p-4 rounded-xl bg-[#080D1A] border border-slate-700/80 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all resize-y"
        />
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.div 
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="flex items-center gap-2 p-3.5 rounded-xl bg-rose-500/15 border border-rose-500/30 text-rose-300 text-xs"
          >
            <ErrorCircleRegular fontSize={18} />
            <span>{errorMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button 
        type="submit" 
        disabled={status === "submitting"}
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.98 }}
        className="w-full h-12 mt-2 rounded-xl bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 hover:brightness-110 active:scale-95 text-slate-950 font-extrabold text-sm tracking-wide transition-all shadow-[0_0_25px_rgba(56,189,248,0.35)] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "submitting" ? (
          <>
            <span className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
            <span>Transmitting via Formspree...</span>
          </>
        ) : (
          <>
            <SendRegular fontSize={18} />
            <span>Send Message Directly</span>
          </>
        )}
      </motion.button>
    </form>
  );
}

export default function ContactSection() {
  return (
    <section
      id="contact"
      aria-label="Contact Tanpreet"
      className="w-full section-band-2 py-24 md:py-36 relative"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span className="font-mono text-xs tracking-widest uppercase text-cyan-300 font-semibold">
              07 · Direct Channel
            </span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            <FadeUp delay={0.08}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-6 shadow-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-300">
                  Actively Available for SDE Roles &amp; Full-Time Positions
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Let&rsquo;s connect &amp; build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-300 animate-shimmer">
                  something great.
                </span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed max-w-md">
                Whether you have an open Software Engineering position, would like to discuss full-stack distributed architecture, or explore code collaboration — my inbox is actively monitored.
              </p>
            </FadeUp>

            <FadeUp delay={0.16}>
              <div className="flex flex-col gap-4">
                {/* Email Box */}
                <motion.a
                  href={`mailto:${profile.email}`}
                  whileHover={{ scale: 1.02, x: 4 }}
                  className="p-4.5 rounded-2xl bg-slate-900/70 border border-slate-700/80 hover:border-cyan-500/50 flex items-center gap-4 transition-all group shadow-md"
                >
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                    <MailRegular fontSize={22} />
                  </div>
                  <div>
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                      Direct Email
                    </span>
                    <span className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {profile.email}
                    </span>
                  </div>
                </motion.a>

                {/* Social Profiles */}
                <div className="p-5 rounded-2xl bg-slate-900/70 border border-slate-700/80 shadow-md">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3 font-semibold">
                    Verified Direct Links
                  </span>
                  <div className="flex flex-wrap gap-2.5">
                    <motion.a
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-xl bg-[#090E1B] border border-white/10 hover:border-cyan-500/50 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <span>LinkedIn</span>
                      <span className="text-cyan-400 font-bold">↗</span>
                    </motion.a>
                    <motion.a
                      href={profile.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-xl bg-[#090E1B] border border-white/10 hover:border-cyan-500/50 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <span>GitHub</span>
                      <span className="text-cyan-400 font-bold">↗</span>
                    </motion.a>
                    <motion.a
                      href={profile.links.gfg}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-4 py-2 rounded-xl bg-[#090E1B] border border-white/10 hover:border-cyan-500/50 text-xs font-semibold text-slate-200 hover:text-cyan-300 transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <span>GeeksforGeeks (160+)</span>
                      <span className="text-cyan-400 font-bold">↗</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right: Formspree Form with Glowing Frame */}
          <div className="w-full lg:col-span-7">
            <FadeUp delay={0.2}>
              <motion.div 
                whileHover={{ y: -3 }}
                transition={{ duration: 0.3 }}
                className="card p-7 sm:p-10 border border-slate-700/90 bg-[#0A101E]/90 backdrop-blur-2xl shadow-[0_25px_60px_rgba(0,0,0,0.7)]"
              >
                <div className="mb-7">
                  <h3 className="text-2xl font-bold text-white mb-1.5 flex items-center gap-2">
                    <span>Send a Direct Message</span>
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                  </h3>
                  <p className="text-slate-400 text-xs font-mono">
                    Form wired to Formspree endpoint (<span className="text-cyan-400">xyekkpve</span>) · instant dispatch
                  </p>
                </div>
                <ContactForm />
              </motion.div>
            </FadeUp>
          </div>

        </div>

      </div>
    </section>
  );
}
