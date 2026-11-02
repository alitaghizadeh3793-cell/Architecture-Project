"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/image-content/salman-saqib-z6UAWpQAhXs-unsplash.jpg",
  "/image-content/image-2.jpg",
  "/image-content/IMG_20260711_181445_847.jpg",
];

export default function Content() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section dir="rtl" className="relative h-screen w-full overflow-hidden bg-[#010101] font-vazir">
      <div className="absolute inset-0">
        {images.map((src, index) => (
          <div
            key={src}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIdx ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={src}
              alt="luxury architecture"
              fill
              priority
              className="object-cover object-center scale-105"
            />
          </div>
        ))}

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#010101]/5 via-[#010101]/60 to-[#010101]/40 z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#010101] via-transparent to-transparent z-[1]" />
      </div>

      {/* Subtle Glow */}
      <div
        className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full blur-[160px] z-[2]"
        style={{ background: `var(--text)`, opacity: 0.1 }}
      />

      {/* HERO CONTENT */}
      <div className="absolute bottom-24 right-24 max-w-2xl z-10">
        <span className="text-xs tracking-[6px] text-white/40 uppercase">
          Luxury Architecture
        </span>

        <h1 className="mt-6 text-white leading-[0.9]">
          <span className="block text-6xl font-light">خانه‌ای برای</span>
          <span className="block text-7xl font-bold">زندگی مدرن</span>
          <span className="block mt-4 text-4xl font-light" style={{ color: `var(--text)` }}>
            طراحی مینیمال و لوکس
          </span>
        </h1>

        <p className="mt-8 text-white/50 leading-8 text-sm max-w-lg">
          ما فضاهایی خلق می‌کنیم که در آن معماری، آرامش و عملکرد در یک تعادل کامل قرار می‌گیرند.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href={"/Portfolio"}
            className="px-7 py-3 rounded-full text-white hover:scale-105 transition"
            style={{ background: `var(--text)` }}
          >
            مشاهده پروژه‌ها
          </Link>
          <Link
            href={"/ContactUs"}
            className="px-7 py-3 rounded-full border border-white/15 text-white/80 hover:bg-white/10 transition"
          >
            ارتباط با ما
          </Link>
        </div>
      </div>

      {/* Bottom Minimal Line */}
      <div className="absolute bottom-10 left-24 text-white/30 text-xs tracking-[4px] z-[2]">
        ARCHITECTURE STUDIO — 2026
      </div>

      {/* Right Minimal Label */}
      <div
        className="absolute bottom-10 right-24 text-xs tracking-[6px] z-[2]"
        style={{ color: `var(--text)`, opacity: 0.6 }}
      >
        MODERN · MINIMAL · LUXURY
      </div>

      {/* Soft Vignette */}
      <div className="absolute inset-0 bg-black/20 pointer-events-none z-[2]" />
    </section>
  );
}