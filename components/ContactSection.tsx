"use client";

import React, { useState } from "react";
import { Mail, Phone, MapPin, Copy, Check, Send, ArrowUp, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";

function LinkedInIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  );
}

export default function ContactSection() {

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const email = "faishalfajri.h@gmail.com";
  const phone = "+62 813-8534-6095";
  const linkedin = "https://www.linkedin.com/in/faishal-harits-al-fajri-2b146b250/";
  const location = "Bandung, West Java, Indonesia";

  const copyToClipboard = (text: string, type: "email" | "phone") => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="w-full border-t border-white/10 pt-20 bg-[#0e0e0e] relative">

      {/* Contact Main Box */}
      <div className="max-w-6xl mx-auto px-6 sm:px-8 mb-20">
        <ScrollReveal direction="up" distance={40} duration={800}>
          <div className="glass-panel p-8 sm:p-12 rounded-3xl text-center relative overflow-hidden border border-white/10 shadow-2xl">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-[#3B82F6]/10 blur-3xl rounded-full pointer-events-none" />

            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 relative z-10">
              Let's build something useful.
            </h2>

            <p className="font-sans text-base sm:text-lg text-[#c4c7c8] max-w-xl mx-auto mb-10 relative z-10">
              Have a project, opportunity, or idea worth discussing? I'd be happy to connect.
            </p>

            {/* Contact Details Grid (2x2 on sm+) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-10 text-left relative z-10">

              {/* Email */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between group hover:border-[#3B82F6]/50 transition-colors">
                <div className="overflow-hidden">
                  <span className="font-mono-tech text-[10px] text-[#8e9192] uppercase block mb-0.5">EMAIL</span>
                  <span className="font-mono-tech text-xs text-white font-medium truncate block">{email}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(email, "email")}
                  title="Copy Email"
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-[#c4c7c8] hover:text-white transition-colors shrink-0 ml-2"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* LinkedIn */}
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between group hover:border-[#0A66C2]/50 hover:bg-white/10 transition-colors"
              >
                <div className="overflow-hidden">
                  <span className="font-mono-tech text-[10px] text-[#8e9192] uppercase block mb-0.5">LINKEDIN</span>
                  <span className="font-mono-tech text-xs text-white font-medium truncate block">Faishal Harits Al Fajri</span>
                </div>
                <div className="p-1.5 rounded bg-[#0A66C2]/15 text-[#0A66C2] group-hover:bg-[#0A66C2] group-hover:text-white transition-colors shrink-0 ml-2">
                  <LinkedInIcon className="w-4 h-4" />
                </div>
              </a>

              {/* Phone */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center justify-between group hover:border-[#8B5CF6]/50 transition-colors">
                <div>
                  <span className="font-mono-tech text-[10px] text-[#8e9192] uppercase block mb-0.5">PHONE</span>
                  <span className="font-mono-tech text-xs text-white font-medium block">{phone}</span>
                </div>
                <button
                  onClick={() => copyToClipboard(phone, "phone")}
                  title="Copy Phone"
                  className="p-1.5 rounded bg-white/5 hover:bg-white/10 text-[#c4c7c8] hover:text-white transition-colors shrink-0 ml-2"
                >
                  {copiedPhone ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Location */}
              <div className="bg-white/5 p-4 rounded-xl border border-white/10 flex items-center gap-2">
                <div>
                  <span className="font-mono-tech text-[10px] text-[#8e9192] uppercase block mb-0.5">LOCATION</span>
                  <span className="font-mono-tech text-xs text-white font-medium block">{location}</span>
                </div>
              </div>

            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center justify-center gap-4 relative z-10">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center gap-2 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-sans font-semibold text-sm rounded-xl px-7 py-3 shadow-lg shadow-[#3B82F6]/25 transition-all transform hover:-translate-y-0.5"
              >
                <Send className="w-4 h-4" />
                <span>Email Me</span>
              </a>

              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#0A66C2] hover:bg-[#084e96] text-white font-sans font-semibold text-sm rounded-xl px-6 py-3 shadow-lg shadow-[#0A66C2]/25 transition-all transform hover:-translate-y-0.5"
              >
                <LinkedInIcon className="w-4 h-4" />
                <span>LinkedIn Profile</span>
              </a>

              <button
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 glass-panel hover:bg-white/10 text-[#c4c7c8] hover:text-white font-sans font-semibold text-sm rounded-xl px-6 py-3 transition-all"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </button>
            </div>

          </div>
        </ScrollReveal>
      </div>

      {/* Footer Sub-Bar */}
      <div className="w-full border-t border-white/10 bg-[#0e0e0e] py-8">
        <div className="max-w-6xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row justify-between items-center gap-4 font-mono-tech text-xs text-[#8e9192]">
          <div>
            &copy; 2026 Faishal Harits Al Fajri • Built with precision.
          </div>
          <div className="flex items-center space-x-6">
            <a href={linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#3B82F6] transition-colors flex items-center gap-1">
              <LinkedInIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <span>Kendal, Indonesia</span>
            <button onClick={scrollToTop} className="hover:text-white transition-colors">
              Back to top &uarr;
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}




