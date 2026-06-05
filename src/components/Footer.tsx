export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="py-10 px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg btn-shimmer flex items-center justify-center text-white font-bold text-xs">
            AS
          </div>
          <span>Aarya Shrivaastava</span>
        </div>
        <p className="text-center">
          Built with <span className="text-purple-400">Next.js</span> &amp; WebGL shaders ·{' '}
          <span className="text-slate-600">{year}</span>
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/AaryaShrivaastava" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://codolio.com/profile/ApexVoyager30" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Codolio</a>
          <a href="https://www.linkedin.com/in/aarya-shrivaastava-7b198b2a3" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
