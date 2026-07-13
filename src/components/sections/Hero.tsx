"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.2 })
        .to(subtitleRef.current, { opacity: 1, y: 0, duration: 1.2, ease: "power3.out" }, "-=0.8")
        .to(imageRef.current, { opacity: 1, scale: 1, filter: "blur(0px)", duration: 2, ease: "power2.out" }, "-=1");

      gsap.to(imageRef.current, {
        yPercent: 20,
        rotationZ: 5,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="h-screen w-full flex flex-col items-center justify-center relative overflow-hidden bg-black">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/10 via-black to-black opacity-50"></div>
      
      <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-bold z-10 opacity-0 translate-y-8 tracking-tighter text-center bg-clip-text text-transparent bg-gradient-to-b from-white to-white/50 px-4">
        Smart AI Notebook
      </h1>
      
      <p ref={subtitleRef} className="text-xl md:text-2xl mt-6 z-10 opacity-0 translate-y-4 text-gray-400 font-medium text-center max-w-4xl px-4 leading-relaxed">
        The Future of Learning, Note-Taking, and Academic Management. <br className="hidden md:block"/> A modern, AI-powered learning ecosystem from first year to graduation.
      </p>
      
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 z-20 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_40px_rgba(255,255,255,0.3)]"
      >
        Discover NotePlus
      </motion.button>
      
      <img 
        ref={imageRef}
        src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2027&auto=format&fit=crop" 
        alt="Digital Tablet" 
        className="absolute w-4/5 max-w-5xl object-cover opacity-0 mt-40 rounded-3xl blur-sm border border-white/10 shadow-2xl scale-[1.05] -z-10" 
      />
    </section>
  );
}
