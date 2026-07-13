"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="py-40 px-10 bg-black flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-white/10 via-black to-black opacity-60"></div>
      
      <div className="max-w-4xl w-full text-center z-10">
        <img 
          src="https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?q=80&w=2027&auto=format&fit=crop" 
          alt="Tablet Render" 
          className="w-full max-w-3xl mx-auto rounded-3xl opacity-80 mix-blend-screen mb-12 shadow-[0_0_100px_rgba(255,255,255,0.1)]"
        />
        
        <h2 className="font-display text-6xl md:text-8xl font-bold mb-8 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-500">
          Write Naturally.<br/>Think Digitally.
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mt-12">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 font-bold rounded-full text-xl text-gray-900 bg-gradient-to-b from-gray-100 via-gray-300 to-gray-400 border border-gray-400 shadow-[inset_0_1px_2px_rgba(255,255,255,0.9),_0_0_25px_rgba(156,163,175,0.4)] hover:from-white hover:via-gray-200 hover:to-gray-300 transition-all tracking-wide active:shadow-[inset_0_3px_5px_rgba(0,0,0,0.2)]"
          >
            Buy Now — ₹25,000
          </motion.button>
          
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-[#111] text-white font-bold text-lg rounded-full border border-white/20 hover:bg-white/10 transition-colors"
          >
            Contact Sales
          </motion.button>
        </div>
      </div>
      
      <footer className="w-full max-w-7xl border-t border-white/10 pt-10 mt-32 text-center text-gray-500 font-medium flex flex-col md:flex-row justify-between items-center gap-4 z-10">
        <p>&copy; 2026 NotePlus. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy</a>
          <a href="#" className="hover:text-white transition-colors">Terms</a>
          <a href="#" className="hover:text-white transition-colors">Support</a>
        </div>
      </footer>
    </section>
  );
}
