"use client";

export default function InteractiveDemo() {
  return (
    <section className="py-32 px-10 bg-black min-h-screen flex flex-col items-center justify-center">
      <div className="max-w-7xl w-full text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-10 tracking-tight">Interactive Demo.</h2>
        <p className="text-xl text-gray-400 mb-16 max-w-3xl mx-auto">Experience the seamless workflow from writing on the tablet to instant cloud synchronization.</p>
        
        <div className="w-full h-[60vh] bg-[#111] rounded-[3rem] border border-white/10 flex items-center justify-center shadow-2xl relative overflow-hidden">
          {/* Placeholder for interactive demo animation */}
          <div className="absolute inset-0 flex items-center justify-center opacity-50">
            <span className="text-white/30 text-2xl font-semibold">GSAP Scroll-tied Animation Placeholder</span>
          </div>
          <img src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2027&auto=format&fit=crop" alt="Demo" className="w-full h-full object-cover opacity-20 blur-sm" />
        </div>
      </div>
    </section>
  );
}
