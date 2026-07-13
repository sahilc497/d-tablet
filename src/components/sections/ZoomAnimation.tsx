"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Caveat } from "next/font/google";
import { IoIosArrowBack } from "react-icons/io";
import { IoDocumentOutline, IoMicOutline, IoHandRightOutline, IoInformationCircleOutline } from "react-icons/io5";
import { FaUndo, FaRedo, FaEraser, FaRegComment, FaImage } from "react-icons/fa";
import { BsPenFill } from "react-icons/bs";

const caveat = Caveat({ subsets: ["latin"], weight: "700" });

export default function ZoomAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftContentRef = useRef<HTMLDivElement>(null);
  const tabletRef = useRef<HTMLDivElement>(null);
  const inkRef = useRef<HTMLDivElement>(null);
  const finalContentRef = useRef<HTMLDivElement>(null);
  const [centerX, setCenterX] = useState(0);

  useEffect(() => {
    // Calculate the translation required to perfectly center the tablet
    const calculateCenter = () => {
      if (!tabletRef.current) return;
      const rect = tabletRef.current.getBoundingClientRect();
      const currentCenterX = rect.left + rect.width / 2;
      const targetCenterX = window.innerWidth / 2;
      setCenterX(targetCenterX - currentCenterX);
    };

    calculateCenter();
    window.addEventListener("resize", calculateCenter);
    return () => window.removeEventListener("resize", calculateCenter);
  }, []);

  useEffect(() => {
    if (centerX === 0) return; // Wait for center calculation

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=4000", // Smooth long scroll
          scrub: 1,
          pin: true,
          anticipatePin: 1
        }
      });

      // Phase 1: Left text fades out
      tl.to(leftContentRef.current, { opacity: 0, x: -50, duration: 1 });

      // Phase 2: Tablet moves to center
      tl.to(tabletRef.current, { 
        x: centerX,
        y: 0,
        scale: 1.2,
        duration: 2,
        ease: "power2.inOut"
      }, "<"); // starts simultaneously with text fade

      // Phase 3: Pause briefly in center
      tl.to(tabletRef.current, { duration: 0.5 }); 

      // Phase 4: The massive ink zoom
      tl.to(inkRef.current, {
        scale: 250, 
        transformOrigin: "center center", 
        duration: 4,
        ease: "power3.in"
      });

      // Phase 5: Fade tablet bg to black so the screen becomes black
      tl.to(tabletRef.current, {
        backgroundColor: "#000000",
        duration: 0.5,
      }, "<2.5"); // Starts 2.5s into the ink zoom

      // Phase 6: Final overlay text appears
      tl.to(finalContentRef.current, {
        opacity: 1,
        y: 0,
        duration: 1,
      });

    }, containerRef);

    return () => ctx.revert();
  }, [centerX]);

  return (
    <section ref={containerRef} className="h-screen w-full bg-theme-bg overflow-hidden relative flex items-center px-10 md:px-24">
      
      {/* Left Content */}
      <div ref={leftContentRef} className="w-full md:w-1/2 z-10 relative">
        <h3 className="text-2xl text-gray-400 font-medium mb-2">Off-line Storage</h3>
        <h2 className="text-4xl md:text-7xl font-bold text-theme-white tracking-tight mb-8">Simply Sketch,<br/>Speedy Sync</h2>
        <p className="text-gray-400 text-lg md:text-xl max-w-md">
          d-tab supports offline storage of up to 50 pages. And the offline contents can be fast synced to the app on your mobile device to record inspiration at the moment.
        </p>
      </div>

      {/* Right Content (Tablet) */}
      <div className="hidden md:flex w-1/2 justify-end z-20 absolute right-24 top-1/2 -translate-y-1/2">
        <div 
          ref={tabletRef} 
          className="w-[400px] h-[550px] bg-[#FAFAFA] rounded-2xl shadow-2xl relative flex flex-col items-center will-change-transform border border-white/10"
        >
          {/* Toolbar Top Row */}
          <div className="w-full px-4 pt-4 pb-2 flex items-center justify-between text-gray-500 text-xl z-10 bg-[#F4F4F4] rounded-t-2xl">
             <IoIosArrowBack />
             <IoDocumentOutline />
             <IoMicOutline />
             <div className="flex gap-4">
               <FaUndo className="text-sm" />
               <FaRedo className="text-sm" />
             </div>
             <IoHandRightOutline />
             <IoInformationCircleOutline />
          </div>

          {/* Toolbar Bottom Row */}
          <div className="w-full px-6 py-3 border-b border-gray-200 flex items-center justify-between text-gray-500 text-lg z-10 bg-white">
             <BsPenFill className="text-blue-500" />
             <FaEraser />
             <FaRegComment />
             <FaImage />
             <div className="w-4 h-4 rounded-full bg-black"></div>
             <div className="w-4 h-[2px] bg-gray-400"></div>
          </div>

          {/* Dot Grid Background */}
          <div className="absolute inset-0 top-[100px] rounded-b-2xl" style={{ backgroundImage: 'radial-gradient(#e5e7eb 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
          
          {/* The Ink Text */}
          <div 
            ref={inkRef} 
            className={`${caveat.className} text-8xl text-black select-none will-change-transform mt-32 z-20`}
          >
            d-tab
          </div>
        </div>
      </div>

      {/* Final Overlay Content */}
      <div 
        ref={finalContentRef} 
        className="absolute inset-0 z-30 flex flex-col items-center justify-center opacity-0 translate-y-10 pointer-events-none"
      >
        <h3 className="text-theme-accent text-2xl md:text-3xl font-medium mb-4 uppercase tracking-widest">Vector ink</h3>
        <h2 className="font-display text-theme-white text-7xl md:text-[8rem] tracking-tighter text-center leading-[0.9] uppercase">
          Each Line Can<br/>Be Reworked
        </h2>
        <p className="text-white/90 text-xl md:text-2xl mt-8 max-w-3xl text-center font-medium">
          The content you write on d-tab is recorded with vector lines, and you can easily export these offline stored contents as PDF format to re-edit.
        </p>
      </div>

    </section>
  );
}
