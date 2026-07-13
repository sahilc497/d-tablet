"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function ProductShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "+=150%",
          scrub: 1,
          pin: true,
        }
      });

      tl.to(".zoom-img", { scale: 1.5, yPercent: -5, ease: "power1.inOut" }, 0)
        .to(imgContainerRef.current, { width: "100vw", height: "100vh", borderRadius: "0%", ease: "power2.inOut" }, 0)
        .to(".zoom-text", { opacity: 1, y: 0, ease: "power2.out" }, 0.3)
        .to(".feature-card", { opacity: 1, y: 0, stagger: 0.2, ease: "power2.out" }, 0.5);
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#050505]">
      <div className="flex items-center justify-center flex-col h-screen overflow-hidden">
        <div ref={imgContainerRef} className="w-[40vw] h-[40vw] rounded-[4rem] overflow-hidden relative border border-white/10 shadow-2xl">
          <img src="https://images.unsplash.com/photo-1561154464-82e9adf32764?q=80&w=2070&auto=format&fit=crop" className="w-full h-full object-cover zoom-img scale-[0.8]" alt="Product details" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10 bg-black/40">
          <h2 className="zoom-text text-5xl md:text-8xl font-bold opacity-0 translate-y-10 text-center drop-shadow-2xl tracking-tight">AI Knowledge Base.</h2>
          <div className="flex gap-8 mt-16">
            <div className="feature-card opacity-0 translate-y-10 bg-black/60 backdrop-blur-xl p-8 rounded-3xl text-center w-56 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-2">Smart</h3>
              <p className="text-sm text-gray-300 font-medium">Content Recognition</p>
            </div>
            <div className="feature-card opacity-0 translate-y-10 bg-black/60 backdrop-blur-xl p-8 rounded-3xl text-center w-56 border border-white/20 shadow-2xl">
              <h3 className="text-3xl font-bold text-white mb-2">Auto</h3>
              <p className="text-sm text-gray-300 font-medium">Study Reminders</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
