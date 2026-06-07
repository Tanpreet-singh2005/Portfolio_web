'use client';
import { useReveal } from '@/hooks/useReveal';

export default function ContactSection() {
  const ref = useReveal();

  return (
    <section id="contact" className="py-24 px-6 flex items-center justify-center relative z-10">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        <div ref={ref} className="reveal w-full flex flex-col items-center">
          
          <p className="text-red-400 font-mono text-sm mb-3 tracking-widest uppercase">Let's Connect</p>
          
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-6">
            Have a project in mind?<br/>
            <span className="gradient-text">Let's make it happen</span>
          </h2>
          
          <p className="text-foreground opacity-60 text-base leading-relaxed mb-12 max-w-xl mx-auto">
            I'm always open to discussing new projects, internships, freelance work, or opportunities to collaborate.
          </p>

          <div className="glass rounded-[2rem] p-8 sm:p-12 border border-white/10 shadow-xl relative overflow-hidden w-full max-w-2xl text-left bg-black/20 dark:bg-black/40">
            {/* Form */}
            <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground opacity-90">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    placeholder="Your name" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-foreground placeholder-foreground/40 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground opacity-90">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    placeholder="your@email.com" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-foreground placeholder-foreground/40 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground opacity-90">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  placeholder="Tell me about your project..." 
                  className="w-full bg-white/5 border border-white/10 rounded-xl p-3.5 text-foreground placeholder-foreground/40 focus:outline-none focus:border-red-400 focus:bg-white/10 transition-all resize-none"
                />
              </div>

              <button 
                type="submit" 
                className="w-full bg-foreground text-background font-semibold py-4 rounded-xl mt-2 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity"
              >
                Send Message
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </form>

            <div className="flex items-center gap-4 my-8 relative">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-xs font-mono tracking-wider text-foreground opacity-40 px-2 bg-background/0 relative z-10 uppercase">or reach out via</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Social Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <a href="https://github.com/AaryaShrivaastava" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-400 hover:bg-red-500/10 transition-all text-sm font-medium group">
                <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:text-red-400 transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                <span className="group-hover:text-red-400 transition-colors">GitHub</span>
                <svg className="w-3 h-3 opacity-30 ml-1 group-hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-400 hover:bg-red-500/10 transition-all text-sm font-medium group">
                <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:text-red-400 transition-all" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                <span className="group-hover:text-red-400 transition-colors">LinkedIn</span>
                <svg className="w-3 h-3 opacity-30 ml-1 group-hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
              <a href="mailto:aarya.shrivaastava1026@gmail.com" className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white/5 border border-white/10 hover:border-red-400 hover:bg-red-500/10 transition-all text-sm font-medium group">
                <svg className="w-4 h-4 opacity-70 group-hover:opacity-100 group-hover:text-red-400 transition-all" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                <span className="group-hover:text-red-400 transition-colors">Email</span>
                <svg className="w-3 h-3 opacity-30 ml-1 group-hover:text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/></svg>
              </a>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
