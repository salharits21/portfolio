"use client";

import React from "react";
import { Server, Smartphone, Network, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function WhatIBuildSection() {
  const items = [
    {
      title: "Backend Systems",
      desc: "APIs, business logic, authentication, database operations, and system integrations.",
      icon: Server,
      accent: "#3B82F6",
    },
    {
      title: "Full-Stack Applications",
      desc: "Modern web and mobile applications connecting frontend experiences with reliable backend services.",
      icon: Smartphone,
      accent: "#8B5CF6",
    },
    {
      title: "Data & System Integration",
      desc: "Connecting application services, databases, recommendation systems, payment gateways, and data-processing components.",
      icon: Network,
      accent: "#D946EF",
    },
    {
      title: "Practical Digital Products",
      desc: "Software designed around real user needs, workflows, and business objectives.",
      icon: Sparkles,
      accent: "#10B981",
    },
  ];

  return (
    <section className="mb-32 max-w-6xl mx-auto px-6 sm:px-8">
      
      <ScrollReveal direction="up" distance={30} duration={600}>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-12 tracking-tight">
          WHAT I BUILD
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {items.map((item, idx) => {
          const Icon = item.icon;
          return (
            <ScrollReveal
              key={idx}
              direction="up"
              distance={40}
              duration={700}
              delay={idx * 120}
            >
              <div
                className="glass-panel p-8 rounded-3xl border border-white/10 glass-panel-hover group relative overflow-hidden h-full"
              >
                <div
                  className="absolute -right-10 -bottom-10 w-40 h-40 rounded-full blur-3xl opacity-10 pointer-events-none group-hover:opacity-25 transition-opacity"
                  style={{ backgroundColor: item.accent }}
                />

                <div className="flex items-start gap-5">
                  <div
                    className="p-3.5 rounded-2xl border shrink-0 transition-transform group-hover:scale-110"
                    style={{
                      backgroundColor: `${item.accent}15`,
                      borderColor: `${item.accent}30`,
                      color: item.accent,
                    }}
                  >
                    <Icon className="w-6 h-6" />
                  </div>

                  <div>
                    <h3 className="font-display text-xl font-bold text-white mb-2 tracking-tight group-hover:text-[#3B82F6] transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-sm text-[#c4c7c8] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

    </section>
  );
}


