"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const features = [
  {
    subtitle: "Natural Handwriting",
    title: "Write naturally. Think digitally.",
    desc: "Write notes, draw diagrams, and solve equations with a perfect paper-like feel.",
    img: "/images/handwriting_tablet_1783969682703.png",
  },
  {
    subtitle: "Intelligent Classification",
    title: "Automatically organized.",
    desc: "AI automatically categorizes your notes by semester and subject without manual effort.",
    img: "/images/organized_tablet_1783969694545.png",
  },
  {
    subtitle: "AI Study Assistant",
    title: "Your personal tutor.",
    desc: "Ask questions, generate flashcards, and converse with your own handwritten notes like ChatGPT.",
    img: "/images/ai_tutor_tablet_1783969706574.png",
  },
  {
    subtitle: "Paperless Examinations",
    title: "Secure digital exams.",
    desc: "Conduct secure, timed exams digitally with stylus-based responses and encrypted storage.",
    img: "/images/exam_tablet_1783969718316.png",
  }
];

export default function HorizontalStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const pinWrapWidth = pinWrapRef.current ? pinWrapRef.current.scrollWidth - window.innerWidth : 0;

    const ctx = gsap.context(() => {
      const horizontalTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${pinWrapWidth + window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      horizontalTl.to(pinWrapRef.current, {
        x: -pinWrapWidth,
        ease: "none"
      });

      const panels = gsap.utils.toArray('.story-panel');
      panels.forEach((panel: any) => {
        gsap.to(panel, {
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontalTl,
            start: "left center",
            end: "center center",
            scrub: true,
          }
        });
      });

      const images = gsap.utils.toArray('.story-img');
      images.forEach((img: any) => {
        gsap.fromTo(img, 
          { scale: 1.2 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest('.story-panel'),
              containerAnimation: horizontalTl,
              start: "left right",
              end: "center center",
              scrub: true,
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-theme-bg overflow-hidden">
      <div className="w-[100vw] h-screen overflow-hidden flex items-center">
        <div ref={pinWrapRef} className="h-screen flex items-center">
          {features.map((feat, idx) => (
            <div key={idx} className="story-panel w-[100vw] h-screen flex flex-col items-center justify-center text-center px-6 md:px-10 shrink-0 pt-24 md:pt-32 pb-10">
              <p className="text-xl md:text-2xl text-gray-400 font-medium mb-2">{feat.subtitle}</p>
              <h2 className="text-5xl md:text-7xl font-bold text-theme-white mb-4 tracking-tight">{feat.title}</h2>
              <p className="text-base md:text-xl text-gray-400 max-w-2xl mb-8">{feat.desc}</p>
              
              <div className="w-full max-w-5xl rounded-[2rem] overflow-hidden shadow-2xl relative bg-theme-card flex-1 min-h-0 mb-4">
                <div className="absolute inset-0 bg-black/10 z-10"></div>
                <img 
                  src={feat.img} 
                  alt={feat.title} 
                  className="story-img w-full h-full object-cover border-none outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
