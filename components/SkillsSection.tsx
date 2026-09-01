"use client";

import React from "react";
import { Code2, Server, Layout, Database, Wrench } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

export default function SkillsSection() {
  const skillGroups = [
    {
      category: "Programming Languages",
      icon: Code2,
      accent: "#3B82F6",
      skills: ["PHP", "JavaScript", "Go"],
    },
    {
      category: "Backend",
      icon: Server,
      accent: "#8B5CF6",
      skills: ["Laravel", "Node.js", "Express.js", "RESTful API development"],
    },
    {
      category: "Frontend",
      icon: Layout,
      accent: "#D946EF",
      skills: ["React", "Flutter"],
    },
    {
      category: "Databases",
      icon: Database,
      accent: "#10B981",
      skills: ["MySQL", "PostgreSQL"],
    },
    {
      category: "Other Technologies",
      icon: Wrench,
      accent: "#F59E0B",
      skills: ["Xendit", "Antigravity", "OpenGrep"],
    },
  ];

  return (
    <section id="skills" className="mb-32 max-w-6xl mx-auto px-6 sm:px-8">
      
      <ScrollReveal direction="up" distance={30} duration={600}>
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-12 tracking-tight">
          TECH STACK
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillGroups.map((group, idx) => {
          const Icon = group.icon;
          return (
            <ScrollReveal
              key={idx}
              direction="up"
              distance={40}
              duration={700}
              delay={idx * 100}
            >
              <div
                className="glass-panel p-6 rounded-2xl border border-white/10 glass-panel-hover flex flex-col justify-between h-full"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className="p-2.5 rounded-xl border"
                      style={{
                        backgroundColor: `${group.accent}15`,
                        borderColor: `${group.accent}30`,
                        color: group.accent,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-lg font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="font-mono-tech text-xs px-3.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white hover:border-[#3B82F6]/50 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between font-mono-tech text-[11px] text-[#8e9192]">
                  <span>{group.skills.length} tools</span>
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: group.accent }} />
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

    </section>
  );
}


