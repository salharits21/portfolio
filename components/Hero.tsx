"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight, MapPin, Sparkles, Code2, Terminal } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[85vh] flex flex-col justify-center pt-36 pb-20 mb-20 overflow-hidden">

      {/* Background Elements */}
      <div className="fixed inset-0 z-[-1] grid-texture pointer-events-none" />
      <div className="fixed top-0 left-0 w-full h-[800px] z-[-2] atmospheric-glow-1 pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-full h-[800px] z-[-2] atmospheric-glow-2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 sm:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">

          {/* Left Column: Copy & Headlines (order-2 on mobile, order-1 on desktop) */}
          <ScrollReveal
            direction="up"
            distance={30}
            duration={700}
            delay={100}
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start"
          >

            {/* Oversized Headline */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-[70px] font-extrabold text-white mb-3 gradient-text leading-[1.08] tracking-tight">
              Hi, I'm Faishal Harits Al Fajri
            </h1>

            {/* Software Engineer Label (Simplified clean typography like previous version) */}
            <p className="font-mono-tech text-xs sm:text-sm text-[#3B82F6] mb-6 tracking-widest font-medium uppercase">
              SOFTWARE ENGINEER • FULL-STACK / BACKEND
            </p>

            {/* Subtitle */}
            <p className="font-sans text-base sm:text-xl text-[#c4c7c8] leading-relaxed max-w-2xl mb-8">
              Software Engineering graduate focused on backend systems, full-stack applications, APIs, databases, and practical digital products.
            </p>

            {/* Location Tag */}
            <div className="flex items-center gap-2 text-xs sm:text-sm font-mono-tech text-[#8e9192] mb-8">
              <MapPin className="w-4 h-4 text-[#3B82F6]" />
              <span>Based in Kendal, Indonesia</span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-sans font-semibold text-sm sm:text-base rounded-xl px-7 py-3.5 shadow-lg shadow-[#3B82F6]/25 transition-all transform hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 glass-panel hover:bg-white/10 text-white font-sans font-semibold text-sm sm:text-base rounded-xl px-7 py-3.5 transition-all"
              >
                <span>Get in Touch</span>
              </a>
            </div>

          </ScrollReveal>

          {/* Right Column: Profile Photo (order-1 on mobile, order-2 on desktop) */}
          <ScrollReveal
            direction="up"
            distance={30}
            duration={800}
            delay={50}
            className="order-1 lg:order-2 lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 lg:w-full lg:max-w-[360px] aspect-square flex items-center justify-center">

              {/* Outer Decorative Glow Rings */}
              <div className="absolute -inset-3 sm:-inset-4 bg-gradient-to-tr from-[#3B82F6]/30 via-[#8B5CF6]/20 to-[#D946EF]/30 rounded-3xl blur-2xl opacity-60 animate-pulse pointer-events-none" />

              {/* Geometric Corner Tech Accents */}
              <div className="absolute -top-2.5 -left-2.5 sm:-top-3 sm:-left-3 w-6 h-6 sm:w-8 sm:h-8 border-t-2 border-l-2 border-[#3B82F6] rounded-tl-xl pointer-events-none z-20" />
              <div className="absolute -bottom-2.5 -right-2.5 sm:-bottom-3 sm:-right-3 w-6 h-6 sm:w-8 sm:h-8 border-b-2 border-r-2 border-[#8B5CF6] rounded-br-xl pointer-events-none z-20" />
              <div className="absolute -top-2.5 -right-2.5 sm:-top-3 sm:-right-3 w-3 h-3 text-[#3B82F6]/60 font-mono-tech text-xs pointer-events-none z-20">+</div>
              <div className="absolute -bottom-2.5 -left-2.5 sm:-bottom-3 sm:-left-3 w-3 h-3 text-[#8B5CF6]/60 font-mono-tech text-xs pointer-events-none z-20">+</div>

              {/* Glass Frame Container */}
              <div className="relative w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden glass-panel border border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.7)] group">

                {/* Subtle Inner Ambient Glow */}
                <div className="absolute top-0 right-0 w-32 sm:w-48 h-32 sm:h-48 bg-[#3B82F6]/20 rounded-full blur-3xl pointer-events-none z-10" />
                <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 bg-[#8B5CF6]/20 rounded-full blur-3xl pointer-events-none z-10" />

                {/* Profile Picture */}
                <div className="relative w-full h-full flex items-center justify-center p-1.5 sm:p-2">
                  <Image
                    src="/profile.png"
                    alt="Faishal Harits Al Fajri"
                    width={400}
                    height={400}
                    priority
                    className="w-full h-full object-cover object-center rounded-xl sm:rounded-2xl transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Bottom Overlay Glass Banner */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3 sm:left-3 sm:right-3 p-2 sm:p-2.5 rounded-lg sm:rounded-xl bg-black/65 backdrop-blur-md border border-white/10 flex items-center justify-between z-20">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981] shadow-[0_0_8px_#10B981]" />
                    <span className="font-mono-tech text-[10px] sm:text-[11px] text-white font-medium">Ready to Build</span>
                  </div>
                  <span className="font-mono-tech text-[9px] sm:text-[10px] text-[#8e9192]">Telkom Univ '26</span>
                </div>

              </div>

              {/* Floating Decorative Shape: Code Badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl glass-panel border border-white/15 shadow-xl flex items-center gap-1.5 z-30 transform hover:scale-110 transition-transform duration-300">
                <Code2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#3B82F6]" />
                <span className="font-mono-tech text-[10px] sm:text-[11px] text-white font-semibold">Fullstack</span>
              </div>

              {/* Floating Decorative Shape: Backend Architecture */}
              <div className="absolute -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 p-2 sm:p-2.5 rounded-xl sm:rounded-2xl glass-panel border border-white/15 shadow-xl flex items-center gap-1.5 z-30 transform hover:scale-110 transition-transform duration-300">
                <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#8B5CF6]" />
                <span className="font-mono-tech text-[10px] sm:text-[11px] text-white font-semibold">Backend Dev</span>
              </div>

            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}



