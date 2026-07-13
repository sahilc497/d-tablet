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
      <div className="text-xl font-bold tracking-tighter text-white cursor-pointer">
        Smart AI Notebook.
      </div>
      
      <nav className="hidden md:flex gap-8 items-center text-sm font-medium text-gray-300">
        <a href="#" className="hover:text-white transition-colors">Features</a>
        <a href="#" className="hover:text-white transition-colors">Specifications</a>
        <a href="#" className="hover:text-white transition-colors">Support</a>
      </nav>

      <button className="px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.3)] text-sm">
        Buy Now
      </button>
    </motion.header>
  );
}
