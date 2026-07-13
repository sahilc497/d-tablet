"use client";

import { motion } from "framer-motion";

const features = [
  { 
    subtitle: "Collaborative Learning", 
    title: "One note for all meetings.", 
    img: "/images/collaborative_tablet_1783969992237.png" 
  },
  { 
    subtitle: "Personalized Revision", 
    title: "AI generates chapter summaries.", 
    img: "/images/revision_tablet_1783970004018.png" 
  },
  { 
    subtitle: "Smart Search", 
    title: "Instantly search across years of notes.", 
    img: "/images/search_tablet_1783970013984.png" 
  },
  { 
    subtitle: "Cloud Sync", 
    title: "Automatic, secure Google Drive backup.", 
    img: "/images/drive_tablet_1783970023164.png" 
  }
];

export default function SmartFeatures() {
  return (
    <section className="py-32 px-6 md:px-10 bg-theme-bg flex flex-col items-center">
      <div className="max-w-6xl w-full flex flex-col gap-32 md:gap-48">
        {features.map((feat, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center w-full"
          >
            <p className="text-xl md:text-3xl text-gray-400 font-medium mb-2">{feat.subtitle}</p>
            <h2 className="text-4xl md:text-7xl font-bold text-theme-white mb-12 md:mb-20 tracking-tight">{feat.title}</h2>
            
            <div className="w-full rounded-[2rem] overflow-hidden shadow-2xl relative bg-theme-card group">
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-700 z-10"></div>
              <img 
                src={feat.img} 
                alt={feat.title} 
                className="w-full aspect-[16/9] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out border-none outline-none"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
