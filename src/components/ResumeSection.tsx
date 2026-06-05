'use client';
import { useReveal } from '@/hooks/useReveal';

// 🔁 Replace this URL with your actual Google Drive share link
const RESUME_DRIVE_URL = 'https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing';
const RESUME_DOWNLOAD_URL = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID';

export default function ResumeSection() {
  const ref = useReveal();

  return (
    <section id="resume" className="py-28 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <div ref={ref} className="reveal">
          <p className="text-purple-400 font-mono text-sm mb-3 tracking-widest uppercase">Get In Touch</p>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-6">
            My <span className="gradient-text">Resume</span>
          </h2>
          <p className="text-slate-400 text-base leading-relaxed mb-10 max-w-xl mx-auto">
            Want to know more about my experience and skills? Download or view my full resume — or reach out directly, I'd love to connect!
          </p>

          {/* Resume card */}
          <div className="glass rounded-3xl p-8 border border-purple-500/30 glow-purple relative overflow-hidden mb-8">
            {/* Decorative circles */}
            <div className="absolute -top-12 -right-12 w-40 h-40 rounded-full bg-purple-500/10 blur-2xl" />
            <div className="absolute -bottom-12 -left-12 w-40 h-40 rounded-full bg-indigo-500/10 blur-2xl" />

            <div className="relative z-10">
              <div className="w-20 h-20 rounded-2xl btn-shimmer flex items-center justify-center text-4xl mx-auto mb-6 animate-float">
                📄
              </div>
              <h3 className="text-white font-bold text-2xl mb-2">Aarya Shrivaastava</h3>
              <p className="text-purple-300 text-sm mb-6">B.Tech CSE · VIT Bhopal · Pre-Final Year</p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href={RESUME_DRIVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-shimmer px-8 py-3 rounded-full text-white font-semibold text-sm inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/>
                  </svg>
                  View Resume
                </a>
                <a
                  href={RESUME_DOWNLOAD_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full glass border border-slate-600 text-slate-200 font-semibold text-sm hover:border-purple-500 hover:text-white transition-all inline-flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
                  </svg>
                  Download PDF
                </a>
              </div>
            </div>
          </div>

          {/* Contact row */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:aarya.shrivaastava1026@gmail.com"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-slate-700 text-slate-300 hover:border-purple-500 hover:text-white transition-all text-sm"
            >
              <svg className="w-4 h-4 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              aarya.shrivaastava1026@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-slate-700 text-slate-300 hover:border-blue-500 hover:text-white transition-all text-sm"
            >
              <svg className="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/AaryaShrivaastava"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full glass border border-slate-700 text-slate-300 hover:border-slate-400 hover:text-white transition-all text-sm"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
