import type { Metadata, Viewport } from "next";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Faishal Harits | Software Engineer",
  description: "Portfolio of Faishal Harits Al Fajri, a Software Engineering graduate focused on backend systems, full-stack applications, APIs, and databases.",
  keywords: ["Faishal Harits", "Software Engineer", "Backend Developer", "Full Stack Developer", "Telkom University", "Bandung", "Laravel", "React", "Node.js", "MySQL", "PostgreSQL"],
  authors: [{ name: "Faishal Harits Al Fajri" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} dark scroll-smooth`}>
      <body className="bg-[#0A0A0A] text-[#e5e2e1] font-sans antialiased selection:bg-[#3B82F6] selection:text-white">
        {children}
      </body>
    </html>
  );
}



