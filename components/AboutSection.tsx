"use client";

import React from "react";
import { GraduationCap, Award, MapPin, Calendar } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function AboutSection() {
  return (
    <section id="about" className="mb-32 grid grid-cols-1 md:grid-cols-12 gap-12 max-w-6xl mx-auto px-6 sm:px-8">
      
      {/* Left Column: About Me Bio */}
      <ScrollReveal
        direction="up"
        distance={40}
        duration={750}
        className="md:col-span-5 flex flex-col justify-start"
      >
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-6 tracking-tight">
          About Me
        </h2>

        <div className="glass-panel p-8 rounded-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#3B82F6]/10 blur-3xl rounded-full pointer-events-none" />
          
          <p className="font-sans text-base text-[#c4c7c8] leading-relaxed mb-5 relative z-10">
            I'm <strong className="text-white font-semibold">Faishal Harits Al Fajri</strong>, a Software Engineering graduate from Telkom University Bandung with a strong interest in building reliable web applications and backend systems.
          </p>

          <p className="font-sans text-base text-[#c4c7c8] leading-relaxed mb-5 relative z-10">
            My experience spans full-stack development, RESTful APIs, database design, system integration, and software development in both academic and professional environments.
          </p>

          <p className="font-sans text-base text-[#c4c7c8] leading-relaxed relative z-10">
            I enjoy working at the intersection of product ideas and engineering implementation — turning requirements into structured, maintainable, and usable software.
          </p>
        </div>
      </ScrollReveal>

      {/* Right Column: Education Timeline */}
      <ScrollReveal
        direction="up"
        distance={40}
        duration={750}
        delay={150}
        className="md:col-span-7 flex flex-col justify-start"
      >
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">
          Education
        </h3>

        <div className="relative border-l border-white/10 ml-2 sm:ml-4 pl-8 sm:pl-10 pb-4">
          {/* Glowing Gradient Line */}
          <div className="absolute left-[-1px] top-0 h-full w-[2px] bg-gradient-to-b from-[#3B82F6] via-[#8B5CF6]/40 to-transparent pointer-events-none" />

          {/* Glowing Timeline Marker Dot perfectly centered on the line */}
          <div className="absolute left-[-6px] top-1.5 w-3 h-3 bg-[#3B82F6] rounded-full shadow-[0_0_12px_rgba(59,130,246,0.9)] ring-4 ring-[#0A0A0A]" />

          <p className="font-mono-tech text-xs text-[#8e9192] uppercase tracking-wider mb-2">
            GRADUATION: AUGUST 2026
          </p>

          <h4 className="font-sans text-xl font-bold text-white mb-1">
            Telkom University
          </h4>

          <p className="font-sans text-base text-[#c4c7c8] mb-3">
            Bachelor of Software Engineering (S.T. / S.Kom)
          </p>

          <div className="flex items-center gap-2 text-xs font-mono-tech text-[#8e9192] mb-4">
            <MapPin className="w-3.5 h-3.5 text-[#3B82F6]" />
            <span>Bandung, West Java</span>
          </div>

          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-lg">
            <Award className="w-4 h-4 text-[#3B82F6]" />
            <span className="font-mono-tech text-xs font-semibold text-white">
              GPA: 3.55 / 4.00
            </span>
          </div>
        </div>

      </ScrollReveal>

    </section>
  );
}


