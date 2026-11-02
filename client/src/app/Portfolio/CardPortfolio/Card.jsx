"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const categories = [
  "همه",
  "مسکونی",
  "تجاری",
  "اداری",
  "ویلایی",
  "هتل و رستوران",
];

const projects = [
  {
    id: 1,
    tag: "مسکونی",
    title: "ویلای مدرن با نورپردازی لوکس در شمال تهران",
    date: "خرداد ۱۴۰۴",
    image: "/image-content/444c190ae03694f1bfb8710314afefbe.jpg",
    href: "/projects/1",
    featured: false,
  },
  {
    id: 2,
    tag: "مسکونی",
    title: "آپارتمان لوکس با طراحی مینیمال در قلب شهر",
    date: "اردیبهشت ۱۴۰۴",
    image: "/image-content/99e59abdd3896f56a21578dbb6d07cd7.jpg",
    href: "/projects/2",
    featured: true,
  },
  {
    id: 3,
    tag: "اداری",
    title: "دفتر کار مدرن با فضای باز و روشن برای تیم خلاق",
    date: "فروردین ۱۴۰۴",
    image: "/image-content/aa47b9dfe86987387b73fce56eb17f46.jpg",
    href: "/projects/3",
    featured: false,
  },
  {
    id: 4,
    tag: "ویلایی",
    title: "ویلای ساحلی با چشم‌انداز دریا در شمال کشور",
    date: "بهمن ۱۴۰۳",
    image: "/image-content/project-4.jpg",
    href: "/projects/4",
    featured: false,
  },
  {
    id: 5,
    tag: "هتل و رستوران",
    title: "طراحی فضای داخلی رستوران با مفهومی متفاوت",
    date: "دی ۱۴۰۳",
    image: "/image-content/project-5.jpg",
    href: "/projects/5",
    featured: false,
  },
  {
    id: 6,
    tag: "هتل و رستوران",
    title: "بازسازی کامل لابی و اتاق‌های هتل بوتیک",
    date: "آذر ۱۴۰۳",
    image: "/image-content/project-6.jpg",
    href: "/projects/6",
    featured: false,
  },
  {
    id: 7,
    tag: "تجاری",
    title: "فروشگاه مد با طراحی خاص و نورپردازی هوشمند",
    date: "آبان ۱۴۰۳",
    image: "/image-content/project-7.jpg",
    href: "/projects/7",
    featured: false,
  },
  {
    id: 8,
    tag: "مسکونی",
    title: "بازسازی خانه قدیمی با حفظ هویت اصیل",
    date: "مهر ۱۴۰۳",
    image: "/image-content/project-8.jpg",
    href: "/projects/8",
    featured: false,
  },
  {
    id: 9,
    tag: "اداری",
    title: "فضای کوورکینگ با امکانات کامل و طراحی الهام‌بخش",
    date: "شهریور ۱۴۰۳",
    image: "/image-content/project-9.jpg",
    href: "/projects/9",
    featured: false,
  },
  {
    id: 10,
    tag: "ویلایی",
    title: "ویلای بزرگ با استخر و فضای سبز اختصاصی",
    date: "مرداد ۱۴۰۳",
    image: "/image-content/project-10.jpg",
    href: "/projects/10",
    featured: false,
  },
  {
    id: 11,
    tag: "تجاری",
    title: "مجتمع تجاری با فضاهای مشترک شیک و کاربردی",
    date: "تیر ۱۴۰۳",
    image: "/image-content/project-11.jpg",
    href: "/projects/11",
    featured: false,
  },
  {
    id: 12,
    tag: "هتل و رستوران",
    title: "کافه بوتیک با آمبیانس گرم و دنج",
    date: "خرداد ۱۴۰۳",
    image: "/image-content/project-12.jpg",
    href: "/projects/12",
    featured: false,
  },
];

function CardClip() {
  return (
    <svg
      width="0"
      height="0"
      style={{ position: "absolute" }}
      aria-hidden="true"
    >
      <defs>
        <clipPath id="projectCardClip" clipPathUnits="objectBoundingBox">
          <path d="M0.05,0 Q0.08,0 0.11,0.01 L0.95,0.18 Q1,0.19 1,0.24 L1,0.96 Q1,1 0.96,1 H0.04 Q0,1 0,0.96 V0.04 Q0,0 0.05,0 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

function ProjectCard({ project, index }) {
  return (
    <motion.div
    layout
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, scale: 0.95 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    >
    <CardClip />
      <div className="rounded-2xl">
      <Link
        href={project.href}
        className="group relative block w-full overflow-hidden bg-[#1a1a1a] border border-white/5 hover:border-[#006a9c]/50 transition-all duration-500"
       style={{
  clipPath: "url(#projectCardClip)",
  WebkitClipPath: "url(#projectCardClip)",
}}
      >
        <div
          className="relative h-[240px] overflow-hidden"
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent opacity-80" />
        </div>
        <div className="p-6">
          <span className="text-[10px] tracking-[0.2em] text-[#006a9c] font-bold uppercase">
            {project.tag}
          </span>
          <h3 className="text-[16px] font-medium text-white mt-2 leading-relaxed group-hover:text-[#006a9c] transition-colors">
            {project.title}
          </h3>
          <p className="text-[11px] text-gray-500 mt-4">{project.date}</p>
        </div>
      </Link>
      </div>
    </motion.div>
  );
}

export default function Card() {
  const [activeCategory, setActiveCategory] = useState("همه");

  const filtered =
    activeCategory === "همه"
      ? projects
      : projects.filter((p) => p.tag === activeCategory);

  return (
    <section
      dir="rtl"
      className="relative bg-[#0a0a0a] font-vazir min-h-screen pb-20"
    >
      <div className="sticky top-0 z-30 w-full pt-6 pb-4 px-4 md:px-8 bg-gradient-to-b from-[#0a0a0a] via-[#0a0a0a]/95 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div
            className="flex items-center gap-2 overflow-x-auto scrollbar-hide rounded-full py-3 px-4"
            style={{
              background: "rgba(255,255,255,0.04)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
            }}
          >
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`cursor-pointer relative shrink-0 text-[12px] font-medium px-6 py-2.5 rounded-full transition-all duration-300 ${
                    isActive
                      ? "text-white"
                      : "text-white/60 hover:text-white/90"
                  }`}
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(180deg, rgba(255,255,255,0.28) 0%, rgba(255,255,255,0.08) 60%, rgba(255,255,255,0.14) 100%)",
                          backdropFilter: "blur(14px) saturate(160%)",
                          WebkitBackdropFilter: "blur(14px) saturate(160%)",
                          border: "1px solid rgba(255,255,255,0.35)",
                          boxShadow:
                            "0 4px 16px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.6), inset 0 -1px 6px rgba(0,0,0,0.25)",
                        }
                      : {
                          background: "transparent",
                          border: "1px solid transparent",
                        }
                  }
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 mt-10">
        <div className="flex items-end justify-between mb-12">
          <div>
            <p className="text-[10px] tracking-[0.3em] text-[#006a9c] font-bold uppercase mb-3">
              Portfolio
            </p>
            <h2 className="text-[32px] md:text-[42px] font-light text-white">
              پروژه‌های <span className="font-bold">معماری</span>
            </h2>
          </div>
          <div className="text-gray-500 text-[13px]">
            {filtered.length} پروژه یافت شد
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
