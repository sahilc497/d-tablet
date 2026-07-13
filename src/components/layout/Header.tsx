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
      <div className="text-3xl font-playfair tracking-normal text-white cursor-pointer lowercase">
        d tab
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
