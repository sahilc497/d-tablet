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
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-gray-100 via-gray-300 to-gray-500 flex items-center justify-center shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),_0_0_15px_rgba(156,163,175,0.3)] group-hover:shadow-[inset_0_1px_2px_rgba(255,255,255,1),_0_0_25px_rgba(156,163,175,0.6)] transition-all duration-500 relative overflow-hidden border border-gray-400">
          <div className="absolute inset-0 bg-white/40 blur-md scale-150 -rotate-45 translate-y-10 group-hover:translate-y-0 transition-all duration-500"></div>
          <span className="font-display text-gray-900 text-2xl relative z-10 leading-none">D</span>
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

      <button className="px-6 py-2 font-bold rounded-full text-sm text-gray-900 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-400 border border-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),_0_0_15px_rgba(156,163,175,0.3)] hover:from-white hover:via-gray-200 hover:to-gray-300 transition-all tracking-wide active:scale-95 active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.2)]">
        Buy Now
      </button>
    </motion.header>
  );
}
