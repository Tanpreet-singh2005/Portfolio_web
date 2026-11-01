"use client";

import { useState } from "react";
import FadeUp from "@/components/FadeUp";
import { profile } from "@/data/content";
import { Check, Copy, Mail, Send, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { SiGeeksforgeeks } from "react-icons/si";

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
        setErrorMessage(data?.error || "Unable to send your message. Please try emailing directly.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("Network error occurred. Please try emailing directly.");
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12 px-4">
        <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-1 shadow-[0_0_25px_rgba(52,211,153,0.3)]">
          <Check size={28} />
        </div>
        <h3 className="text-white font-bold text-2xl tracking-tight">
          Message Transmitted to Tanpreet
        </h3>
        <p className="text-slate-300 text-sm max-w-md leading-relaxed">
          Thank you for reaching out! Your message was delivered via Formspree. Tanpreet will review and respond promptly.
        </p>
        <button 
          onClick={() => setStatus("idle")}
          className="mt-3 px-5 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-200 text-xs font-mono transition-colors border border-white/10 cursor-pointer"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-mono uppercase tracking-wider text-slate-300 font-medium">
            Your Name <span className="text-sky-400">*</span>
          </label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            required
            placeholder="John Doe"
            className="w-full px-4 h-11 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/20 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-mono uppercase tracking-wider text-slate-300 font-medium">
            Email Address <span className="text-sky-400">*</span>
          </label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            required
            placeholder="john@company.com"
            className="w-full px-4 h-11 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/20 transition-all"
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="subject" className="text-xs font-mono uppercase tracking-wider text-slate-300 font-medium">
          Subject
        </label>
        <input 
          type="text" 
          id="subject" 
          name="subject" 
          placeholder="Software Engineering Position / Technical Collaboration"
          className="w-full px-4 h-11 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/20 transition-all"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-mono uppercase tracking-wider text-slate-300 font-medium">
          Message <span className="text-sky-400">*</span>
        </label>
        <textarea 
          id="message" 
          name="message" 
          required
          rows={4}
          placeholder="Hi Tanpreet, we'd love to connect regarding an engineering position or technical collaboration..."
          className="w-full p-4 rounded-xl bg-white/[0.03] border border-white/10 text-white text-sm placeholder:text-slate-500 focus:outline-none focus:border-sky-400/60 focus:ring-1 focus:ring-sky-400/20 transition-all resize-y"
        />
      </div>

      {status === "error" && (
        <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/25 text-rose-300 text-xs">
          {errorMessage}
        </div>
      )}

      <button 
        type="submit" 
        disabled={status === "submitting"}
        className="w-full h-12 mt-1 rounded-xl bg-gradient-to-r from-sky-500 via-blue-600 to-indigo-600 hover:brightness-110 active:scale-[0.98] text-white font-semibold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-[0_0_20px_rgba(56,189,248,0.25)]"
      >
        {status === "submitting" ? (
          <span>Transmitting via Formspree...</span>
        ) : (
          <>
            <Send size={15} />
            <span>Send Direct Message</span>
          </>
        )}
      </button>
    </form>
  );
}

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      aria-label="Contact Tanpreet"
      className="w-full section-band-alt py-24 md:py-32 relative"
    >
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Tag */}
        <FadeUp>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
            <span className="font-mono text-xs tracking-wider uppercase text-slate-400 font-medium">
              07 · Direct Channel
            </span>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <FadeUp delay={0.06}>
              <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-5 shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                </span>
                <span className="text-xs font-mono text-emerald-400 font-semibold">
                  Actively Interviewing for Full-Time Roles
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
                Let&rsquo;s connect &amp; build{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-300">
                  something great.
                </span>
              </h2>

              <p className="text-slate-300 text-base leading-relaxed">
                Whether you have an open Software Engineering position, would like to discuss full-stack distributed systems, or explore code collaboration — my inbox is actively monitored.
              </p>
            </FadeUp>

            <FadeUp delay={0.12}>
              <div className="space-y-4">
                {/* Email Box */}
                <div className="p-4.5 rounded-2xl bg-white/[0.03] border border-white/[0.08] hover:border-sky-400/30 transition-all flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/15 border border-sky-500/30 flex items-center justify-center text-sky-400">
                      <Mail size={18} />
                    </div>
                    <div>
                      <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block">
                        Direct Email
                      </span>
                      <a 
                        href={`mailto:${profile.email}`} 
                        className="text-sm font-semibold text-white hover:text-sky-300 transition-colors"
                      >
                        {profile.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopy}
                    className="p-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 hover:text-white transition-colors cursor-pointer border border-white/5"
                    title="Copy email to clipboard"
                  >
                    {copied ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
                  </button>
                </div>

                {/* Verified Profiles */}
                <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.08] shadow-sm">
                  <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider block mb-3 font-semibold">
                    Verified Direct Links
                  </span>
                  <div className="flex flex-wrap gap-2 font-mono text-xs">
                    <a
                      href={profile.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-sky-400/40 text-slate-200 hover:text-white transition-all shadow-sm"
                    >
                      <FaLinkedin size={13} />
                      <span>LinkedIn ↗</span>
                    </a>
                    <a
                      href={profile.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-sky-400/40 text-slate-200 hover:text-white transition-all shadow-sm"
                    >
                      <FaGithub size={13} />
                      <span>GitHub ↗</span>
                    </a>
                    <a
                      href={profile.links.gfg}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/[0.03] border border-white/10 hover:border-sky-400/40 text-slate-200 hover:text-white transition-all shadow-sm"
                    >
                      <SiGeeksforgeeks size={13} />
                      <span>GFG (160+) ↗</span>
                    </a>
                  </div>
                </div>
              </div>
            </FadeUp>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.16}>
              <div className="glass-card-interactive p-7 sm:p-9">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1">
                    Send a Direct Message
                  </h3>
                  <p className="text-slate-400 text-xs font-mono">
                    Direct dispatch to Tanpreet via Formspree (<span className="text-sky-400">xyekkpve</span>)
                  </p>
                </div>
                <ContactForm />
              </div>
            </FadeUp>
          </div>

        </div>

      </div>
    </section>
  );
}
