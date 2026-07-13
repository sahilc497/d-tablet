"use client";

import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-black/40 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-3 cursor-pointer group">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-theme-accent to-blue-800 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.8)] transition-all duration-500 relative overflow-hidden border border-white/10">
          <div className="absolute inset-0 bg-white/20 blur-md scale-150 -rotate-45 translate-y-10 group-hover:translate-y-0 transition-all duration-500"></div>
          <span className="font-display text-white text-2xl relative z-10 leading-none">D</span>
        </div>
        <span className="font-display text-2xl tracking-widest text-theme-white uppercase mt-1 opacity-90 group-hover:opacity-100 transition-opacity">
          TAB
        </span>
      </div>
      
      <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-300">
        <a href="#" className="hover:text-white transition-colors">Features</a>
        <a href="#" className="hover:text-white transition-colors">Specifications</a>
        <a href="#" className="hover:text-white transition-colors">Support</a>
      </nav>

      <button className="px-6 py-2 bg-theme-accent text-white font-semibold rounded-full hover:bg-blue-600 transition-colors shadow-lg text-sm">
        Buy Now
      </button>
    </motion.header>
  );
}
