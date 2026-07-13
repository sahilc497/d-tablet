"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaPenNib, FaBatteryFull, FaCloud, FaWifi } from "react-icons/fa";

const features = [
  {
    title: "Natural Handwriting",
    desc: "Write notes, draw diagrams, and solve equations with a perfect paper-like feel.",
    img: "https://images.unsplash.com/photo-1583339824000-60b64d3fb0cc?q=80&w=2070&auto=format&fit=crop",
    icon: <FaPenNib className="text-3xl mb-4" />
  },
  {
    title: "Intelligent Classification",
    desc: "AI automatically categorizes your notes by semester and subject without manual effort.",
    img: "https://images.unsplash.com/photo-1542744094-24638ea89614?q=80&w=2070&auto=format&fit=crop",
    icon: <FaCloud className="text-3xl mb-4" />
  },
  {
    title: "AI Study Assistant",
    desc: "Ask questions, generate flashcards, and converse with your own handwritten notes like ChatGPT.",
    img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop",
    icon: <FaPenNib className="text-3xl mb-4" />
  },
  {
    title: "Paperless Examinations",
    desc: "Conduct secure, timed exams digitally with stylus-based responses and encrypted storage.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    icon: <FaBatteryFull className="text-3xl mb-4" />
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
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: panel,
            containerAnimation: horizontalTl,
            start: "left right",
            end: "left center",
            scrub: true,
          }
        });
      });

      const images = gsap.utils.toArray('.story-img');
      images.forEach((img: any) => {
        gsap.fromTo(img, 
          { scale: 1.4 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: img.closest('.story-panel'),
              containerAnimation: horizontalTl,
              start: "left right",
              end: "right left",
              scrub: true,
            }
          }
        );
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative bg-[#050505]">
      <div className="w-[100vw] h-screen overflow-hidden flex items-center">
        <div ref={pinWrapRef} className="h-screen flex justify-start items-center px-[10vw]">
          {features.map((feature, i) => (
            <div key={i} className="story-panel min-w-[75vw] h-[75vh] p-10 bg-[#111] rounded-[2.5rem] border border-white/5 shadow-2xl mr-[5vw] flex flex-col justify-center">
              <div className="w-full h-[55%] mb-8 rounded-3xl overflow-hidden">
                <img src={feature.img} alt={feature.title} className="story-img w-full h-full object-cover" />
              </div>
              <div className="flex items-start gap-6">
                <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-white">
                  {feature.icon}
                </div>
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">{feature.title}</h2>
                  <p className="text-gray-400 text-xl font-medium max-w-2xl">{feature.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
