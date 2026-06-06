'use client';
import { useReveal } from '@/hooks/useReveal';

// 🔁 Replace this URL with your actual Google Drive share link
const RESUME_DRIVE_URL = 'https://drive.google.com/file/d/1AaIKb5kx0G_pus__ku4AFw2GcFLkjP4T/view?usp=sharing';

export default function ResumeSection() {
  const ref = useReveal();

  return (
    <section id="resume" className="py-32 px-6">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div ref={ref} className="reveal w-full flex flex-col items-center">
          <p className="text-red-400 font-mono text-sm mb-3 tracking-widest uppercase">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-8">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-foreground opacity-60 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            Want to know more about my experience and skills? View my full resume or reach out directly — I'd love to connect!
          </p>

          {/* Resume card */}
          <div className="glass rounded-3xl p-12 sm:p-16 border border-red-500/25 shadow-xl relative overflow-hidden mb-12 w-full max-w-3xl">
            {/* Decorative blobs */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-red-500/8 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-red-400/8 blur-2xl" />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
              <div className="flex-1 flex flex-col items-center md:items-start">
                <h3 className="text-foreground font-bold text-3xl mb-2">Aarya Shrivaastava</h3>
                <p className="text-red-400 text-sm font-semibold mb-8">B.Tech CSE · VIT Bhopal · Final Year</p>

                <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                  <a
                    href='https://drive.google.com/file/d/1AaIKb5kx0G_pus__ku4AFw2GcFLkjP4T/view?usp=sharing'//{RESUME_DRIVE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-shimmer px-10 py-3.5 rounded-full text-white font-bold text-sm inline-flex items-center gap-2 cursor-pointer shadow-lg"
                  >
                    Resume
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Large right-aligned resume icon */}
              <div className="w-24 h-24 rounded-2xl btn-shimmer flex items-center justify-center text-white order-first md:order-last animate-float shrink-0">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Contact icons */}
          <div className="flex items-center justify-center gap-6">
            <a
              href="mailto:aarya.shrivaastava1026@gmail.com"
              title="Email Me"
              className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3"
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn"
              className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </a>
            <a
              href="https://github.com/AaryaShrivaastava"
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub"
              className="w-12 h-12 flex items-center justify-center rounded-full glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:scale-110 hover:-translate-y-1"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
