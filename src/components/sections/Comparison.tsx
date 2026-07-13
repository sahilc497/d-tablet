"use client";

import { motion } from "framer-motion";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";

const comparisonData = [
  { traditional: "Can be lost or damaged", smart: "Secure cloud backup", iconT: <FaTimesCircle className="text-red-500" />, iconS: <FaCheckCircle className="text-green-500" /> },
  { traditional: "Heavy to carry", smart: "One lightweight device", iconT: <FaTimesCircle className="text-red-500" />, iconS: <FaCheckCircle className="text-green-500" /> },
  { traditional: "Difficult to organize", smart: "AI automatically organizes notes", iconT: <FaTimesCircle className="text-red-500" />, iconS: <FaCheckCircle className="text-green-500" /> },
  { traditional: "No search functionality", smart: "Instant search across all notes", iconT: <FaTimesCircle className="text-red-500" />, iconS: <FaCheckCircle className="text-green-500" /> },
  { traditional: "Static information", smart: "Interactive AI assistant", iconT: <FaTimesCircle className="text-red-500" />, iconS: <FaCheckCircle className="text-green-500" /> },
  { traditional: "Manual revision", smart: "AI-generated summaries and quizzes", iconT: <FaTimesCircle className="text-red-500" />, iconS: <FaCheckCircle className="text-green-500" /> },
  { traditional: "Paper-based exams", smart: "Digital examinations", iconT: <FaTimesCircle className="text-red-500" />, iconS: <FaCheckCircle className="text-green-500" /> },
  { traditional: "Limited sharing", smart: "Instant cloud sharing", iconT: <FaTimesCircle className="text-red-500" />, iconS: <FaCheckCircle className="text-green-500" /> },
  { traditional: "Requires multiple notebooks", smart: "One device for all subjects", iconT: <FaTimesCircle className="text-red-500" />, iconS: <FaCheckCircle className="text-green-500" /> },
  { traditional: "Difficult long-term storage", smart: "Multi-year cloud archive", iconT: <FaTimesCircle className="text-red-500" />, iconS: <FaCheckCircle className="text-green-500" /> },
];

export default function Comparison() {
  return (
    <section className="py-32 px-10 bg-[#050505] flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <h2 className="text-4xl md:text-6xl font-bold mb-6 text-center tracking-tight">The Future is Here.</h2>
        <p className="text-xl text-gray-400 text-center mb-20 max-w-3xl mx-auto">See how the Smart AI Digital Notebook fundamentally outperforms traditional paper-based learning.</p>
        
        <div className="bg-theme-card rounded-3xl border border-theme-border overflow-hidden shadow-2xl">
          <div className="grid grid-cols-2 bg-theme-bg/50 border-b border-theme-border p-6">
            <div className="text-xl md:text-2xl font-semibold text-gray-400 text-center">Traditional Notebook</div>
            <div className="text-xl md:text-2xl font-bold text-white text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">Smart AI Notebook</div>
          </div>
          
          <div className="divide-y divide-white/5">
            {comparisonData.map((row, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="grid grid-cols-2 p-6 hover:bg-white/[0.02] transition-colors"
              >
                <div className="flex items-center gap-4 justify-center md:justify-start px-4">
                  <div className="hidden md:block">{row.iconT}</div>
                  <span className="text-gray-400 font-medium text-center md:text-left">{row.traditional}</span>
                </div>
                <div className="flex items-center gap-4 justify-center md:justify-start px-4 border-l border-white/5 pl-8">
                  <div className="hidden md:block">{row.iconS}</div>
                  <span className="text-white font-semibold text-center md:text-left">{row.smart}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
