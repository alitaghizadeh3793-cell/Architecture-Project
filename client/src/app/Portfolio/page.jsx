"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Card from "./CardPortfolio/Card";

export default function ProjectsHero() {
  return (
    <div>
    <section dir="rtl" className="relative min-h-[92vh] flex items-center overflow-hidden font-vazir">

      <div className="absolute inset-0 z-0">
        <Image
          src="/image-content/IMG_20260711_181445_847.jpg"
          alt="نمونه کارها"
          fill
          priority
          className="object-cover object-center scale-105"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-l from-black/85 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full blur-[130px] bg-[#006a9c]/20 pointer-events-none z-[1]" />
      <div className="absolute bottom-[-10%] left-[10%] w-[400px] h-[400px] rounded-full blur-[120px] bg-[#006a9c]/10 pointer-events-none z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full py-32">
        <div className="max-w-2xl">

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-7"
          >
            <div className="w-8 h-[2px] bg-[#006a9c]" />
            <span className="text-[10px] font-bold tracking-[5px] text-[#006a9c] uppercase">
              پورتفولیو
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="text-[48px] md:text-[64px] lg:text-[76px] font-black text-white leading-[1.08] tracking-tight mb-6"
          >
            هر فضا
            <br />
            <span className="text-[#006a9c]">یک داستان</span>
            <br />
            <span className="text-white/60 font-light text-[0.75em]">منحصربه‌فرد</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="text-white/50 text-[15px] leading-[2.1] font-light max-w-md mb-10"
          >
            مجموعه‌ای از بهترین پروژه‌های طراحی داخلی و بازسازی که با دقت، خلاقیت
            و اشتیاق به تحویل رسیده‌اند.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <button className="group inline-flex items-center gap-3 bg-[#006a9c] hover:bg-[#005580] text-white font-bold text-[14px] px-8 py-4 rounded-full transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,106,156,0.4)]">
              مشاهده پروژه‌ها
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
            </button>

            <button className="inline-flex items-center gap-2 text-white/70 hover:text-white font-medium text-[14px] px-6 py-4 rounded-full border border-white/15 hover:border-white/35 transition-all duration-300">
              درخواست مشاوره
            </button>
          </motion.div>

        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0f0f0f] to-transparent z-[2] pointer-events-none" />
    </section>
    <Card />
    </div>
  );
}