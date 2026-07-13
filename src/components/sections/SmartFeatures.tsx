"use client";

import { motion } from "framer-motion";
import { FaBrain, FaSync, FaLaptop, FaFilePdf, FaFolderOpen, FaBolt, FaBatteryHalf } from "react-icons/fa";

const features = [
  { icon: <FaBrain />, title: "Personalized Revision", desc: "AI generates chapter summaries and practice quizzes." },
  { icon: <FaSync />, title: "Google Drive Backup", desc: "Automatic, secure cloud synchronization." },
  { icon: <FaLaptop />, title: "Smart Search", desc: "Instantly search across years of handwritten notes." },
  { icon: <FaFilePdf />, title: "Multi-Year Storage", desc: "A lifelong archive of assignments and projects." },
  { icon: <FaFolderOpen />, title: "Collaborative Learning", desc: "Share notes and work seamlessly on group projects." },
  { icon: <FaBolt />, title: "Offline Support", desc: "Keep writing without internet; auto-syncs when connected." },
];

export default function SmartFeatures() {
  return (
    <section className="py-32 px-10 bg-[#0a0a0a] min-h-screen flex flex-col items-center">
      <div className="max-w-7xl w-full">
        <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center tracking-tight">Smart Features.</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <motion.div 
              key={idx}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-theme-card p-10 rounded-[2rem] border border-theme-border hover:border-theme-accent transition-all duration-500 shadow-2xl flex flex-col gap-4 group cursor-pointer"
            >
              <div className="text-4xl text-theme-white/80 p-4 bg-theme-bg w-fit rounded-2xl group-hover:scale-110 group-hover:text-theme-accent transition-all duration-500">{feat.icon}</div>
              <h3 className="text-2xl font-bold text-white mt-4">{feat.title}</h3>
              <p className="text-gray-400 text-lg">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
