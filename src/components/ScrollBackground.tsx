export default function ScrollBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none -z-20 overflow-hidden bg-[#080C16]" aria-hidden="true">
      {/* Radiant Top Horizon Gradient (Pure CSS GPU layer) */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[650px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 55% at 50% -10%, rgba(56, 189, 248, 0.16) 0%, rgba(99, 102, 241, 0.09) 45%, transparent 75%)",
        }}
      />

      {/* Subtle Right Ambient Accent */}
      <div 
        className="absolute top-[25%] right-0 w-[500px] h-[500px] pointer-events-none opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(129, 140, 248, 0.1) 0%, transparent 70%)",
        }}
      />

      {/* Subtle Left Lower Accent */}
      <div 
        className="absolute top-[60%] left-0 w-[500px] h-[500px] pointer-events-none opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(52, 211, 153, 0.08) 0%, transparent 70%)",
        }}
      />

      {/* Hairline Technical Dot / Grid Pattern with Radial Mask */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.7) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.7) 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 20%, #000 30%, transparent 90%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 20%, #000 30%, transparent 90%)",
        }}
      />

      {/* Smooth Dark Vignette Edge Blend */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#080C16]/50 to-[#080C16]" />
    </div>
  );
}
