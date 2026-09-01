"use client";

import React from "react";
import { Quote } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function ManifestoSection() {
  const points = [
    "Understand the problem before implementation.",
    "Design clear system boundaries.",
    "Build maintainable backend logic.",
    "Keep APIs structured and predictable.",
    "Treat databases as part of the system architecture.",
    "Build with real users and workflows in mind.",
  ];

  return (
    <section className="mb-32 max-w-6xl mx-auto px-6 sm:px-8">
      
      <ScrollReveal direction="up" distance={30} duration={600}>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-12 tracking-tight">
          HOW I APPROACH SOFTWARE
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Quote Card */}
        <ScrollReveal
          direction="up"
          distance={40}
          duration={800}
          delay={100}
          className="lg:col-span-6"
        >
          <div className="glass-panel p-8 sm:p-10 rounded-3xl relative overflow-hidden border border-white/10 shadow-2xl group">
            <div className="absolute top-0 right-0 w-48 h-48 bg-[#3B82F6]/10 rounded-full blur-3xl pointer-events-none" />
            
            <Quote className="w-10 h-10 text-[#3B82F6] mb-6 opacity-60 group-hover:rotate-12 transition-transform duration-300" />
            
            <blockquote className="font-sans text-lg sm:text-xl font-medium italic text-white leading-relaxed mb-6">
              "I believe good software is not only about writing code. It is about understanding the problem, structuring the system, and building something that can actually be used."
            </blockquote>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between font-mono-tech text-xs">
              <span className="text-[#3B82F6] font-bold uppercase tracking-wider">
                FAISHAL HARITS AL FAJRI
              </span>
              <span className="text-[#8e9192]">Development Philosophy</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Principles List */}
        <div className="lg:col-span-6 space-y-3">
          {points.map((pt, idx) => (
            <ScrollReveal
              key={idx}
              direction="up"
              distance={25}
              duration={600}
              delay={150 + idx * 70}
            >
              <div
                className="glass-panel p-4 rounded-xl border border-white/5 flex items-center gap-4 hover:border-[#3B82F6]/40 transition-colors"
              >
                <span className="font-mono-tech text-sm font-bold text-[#3B82F6] px-3 py-1 rounded-md bg-[#3B82F6]/10 border border-[#3B82F6]/20">
                  0{idx + 1}
                </span>
                <span className="font-sans text-sm text-[#c4c7c8] font-medium">
                  {pt}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

    </section>
  );
}


