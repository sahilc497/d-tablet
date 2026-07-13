"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "Do I need a subscription to use cloud sync?", answer: "No, basic cloud sync is free for all users. A premium tier is available for advanced features like AI OCR." },
  { question: "Is the pen battery-free?", answer: "Yes, our advanced EMR pen requires no charging or batteries, ever." },
  { question: "Can I read Kindle books on it?", answer: "Yes, NotePlus supports the Android ecosystem and you can install third-party reading apps." },
  { question: "What is the warranty period?", answer: "Every NotePlus comes with a 1-year limited hardware warranty." },
];

export default function TestimonialsAndFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-32 px-10 bg-[#0a0a0a] min-h-screen flex flex-col items-center">
      <div className="max-w-4xl w-full">
        {/* Testimonials Marquee Placeholder */}
        <div className="mb-32 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-10">Loved by Creators.</h2>
          <div className="flex overflow-hidden relative w-full h-24 bg-[#111] rounded-2xl items-center border border-white/5">
            <div className="animate-marquee whitespace-nowrap px-4 text-gray-400 font-medium">
              "The best digital notebook I've ever used." — The Verge &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; "A game changer for my workflow." — TechRadar &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; "Feels exactly like writing on paper." — Wired &nbsp;&nbsp;&nbsp; | &nbsp;&nbsp;&nbsp; "The best digital notebook I've ever used." — The Verge
            </div>
          </div>
        </div>

        {/* FAQ Accordion */}
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-center">Frequently Asked Questions.</h2>
        <div className="flex flex-col gap-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-[#111] border border-white/10 rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-5 text-left flex justify-between items-center text-lg font-medium text-white hover:bg-white/[0.02] transition-colors"
              >
                {faq.question}
                <span className="text-2xl text-gray-400">{openIndex === idx ? "−" : "+"}</span>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 text-gray-400 pb-5"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
