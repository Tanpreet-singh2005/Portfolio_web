export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pt-20 pb-16 px-8" style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
      <div className="max-w-6xl mx-auto flex flex-col">

        {/* Top Section: Multi-column Layout */}
        <div className="flex flex-col md:flex-row justify-between gap-12 md:gap-8 mb-16">

          {/* Column 1: Brand & Bio */}
          <div className="flex flex-col items-start gap-5 md:max-w-sm">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg btn-shimmer flex items-center justify-center text-white font-bold text-xs">
                AS
              </div>
              <span className="text-foreground font-bold tracking-wider">Aarya Shrivaastava</span>
            </div>
            <p className="text-foreground opacity-60 text-sm leading-relaxed">
              Building cinematic full-stack experiences. <br />
              Built with <span className="text-red-400 font-semibold opacity-100">Next.js</span> &amp; WebGL shaders.
            </p>
            {/* Replace with your actual email address */}
            <a
              href="mailto:aarya.shrivaastava1026@gmail.com"
              className="mt-2 text-sm font-medium text-foreground hover:text-red-400 transition-colors flex items-center gap-2 group"
            >
              aarya.shrivaastava1026@gmail.com
              <svg
                className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100 transition-opacity group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>

          {/* Right side container for Nav & Connect */}
          <div className="flex flex-col sm:flex-row gap-16 md:gap-32">

            {/* Column 2: Navigation */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest uppercase text-red-400">
                Navigation
              </span>
              <nav className="flex flex-col gap-3 text-sm text-foreground opacity-60">
                <a href="#about" className="hover:opacity-100 hover:text-red-400 transition-colors w-fit">About</a>
                <a href="#projects" className="hover:opacity-100 hover:text-red-400 transition-colors w-fit">Projects</a>
                <a href="#experience" className="hover:opacity-100 hover:text-red-400 transition-colors w-fit">Experience</a>
                <a href="#contact" className="hover:opacity-100 hover:text-red-400 transition-colors w-fit">Contact</a>
              </nav>
            </div>

            {/* Column 3: Connect */}
            <div className="flex flex-col gap-6">
              <span className="text-xs font-bold tracking-widest uppercase text-red-400">
                Connect
              </span>
              <div className="flex gap-3">
                <a
                  href="https://github.com/AaryaShrivaastava"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="GitHub"
                  className="w-10 h-10 flex items-center justify-center rounded-lg glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:-translate-y-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </a>
                <a
                  href="https://codolio.com/profile/ApexVoyager30"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Codolio"
                  className="w-10 h-10 flex items-center justify-center rounded-lg glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:-translate-y-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.001 2.4A5.6 5.6 0 002.4 8v8a5.6 5.6 0 005.601 5.6h8A5.6 5.6 0 0021.6 16V8A5.6 5.6 0 0016 2.4h-8zm.001 3.2h8a2.4 2.4 0 012.4 2.4v8a2.4 2.4 0 01-2.4 2.4H8.002A2.4 2.4 0 015.6 16V8A2.4 2.4 0 018.002 5.6zM9.6 8a1.6 1.6 0 100 3.2A1.6 1.6 0 009.6 8zm4.8 4.8a1.6 1.6 0 100 3.2 1.6 1.6 0 000-3.2z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center rounded-lg glass border border-white/15 text-foreground opacity-60 hover:opacity-100 hover:border-red-400 hover:bg-red-500/10 transition-all hover:-translate-y-1"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Divider Bottom */}
        <div className="w-full h-px mb-8" style={{ background: 'rgba(255,255,255,0.08)' }}></div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-foreground opacity-40 text-xs">
          <p>
            &copy; {year} Aarya Shrivaastava. All rights reserved.
          </p>
          <p>
            Designed &amp; Built in India
          </p>
        </div>

      </div>
    </footer>
  );
}