"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const projects = [
  {
    id: 1,
    tag: "طراحی داخلی",
    title: "ویلای مدرن با نورپردازی لوکس در شمال تهران",
    date: "خرداد ۱۴۰۴",
    image: "/image-content/444c190ae03694f1bfb8710314afefbe.jpg",
    href: "/projects/1",
    featured: false,
  },
  {
    id: 2,
    tag: "آپارتمان لوکس",
    title: "آپارتمان لوکس با طراحی مینیمال در قلب شهر",
    date: "اردیبهشت ۱۴۰۴",
    image: "/image-content/99e59abdd3896f56a21578dbb6d07cd7.jpg",
    href: "/projects/2",
    featured: true,
  },
  {
    id: 3,
    tag: "فضای اداری",
    title: "دفتر کار مدرن با فضای باز و روشن برای تیم خلاق",
    date: "فروردین ۱۴۰۴",
    image: "/image-content/aa47b9dfe86987387b73fce56eb17f46.jpg",
    href: "/projects/3",
    featured: false,
  },
  {
    id: 4,
    tag: "ویلای ساحلی",
    title: "ویلای ساحلی با چشم‌انداز دریا در شمال کشور",
    date: "بهمن ۱۴۰۳",
    image: "/image-content/project-4.jpg",
    href: "/projects/4",
    featured: false,
  },
  {
    id: 5,
    tag: "رستوران مدرن",
    title: "طراحی فضای داخلی رستوران با مفهومی متفاوت",
    date: "دی ۱۴۰۳",
    image: "/image-content/project-5.jpg",
    href: "/projects/5",
    featured: false,
  },
  {
    id: 6,
    tag: "هتل بوتیک",
    title: "بازسازی کامل لابی و اتاق‌های هتل بوتیک",
    date: "آذر ۱۴۰۳",
    image: "/image-content/project-6.jpg",
    href: "/projects/6",
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

function ProjectCard({ project }) {
  return (
    <div
      style={{
        clipPath: "url(#projectCardClip)",
        WebkitClipPath: "url(#projectCardClip)",
      }}
    >
      <Link
        href={project.href}
        className="group relative block w-full rounded-2xl overflow-hidden bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)] transition-all duration-500 hover:-translate-y-2"
      >
        {project.featured && (
          <div className="absolute top-4 right-4 z-20 bg-[#006a9c] text-white text-[10px] font-bold tracking-[2px] px-3 py-1.5 rounded-full shadow-lg shadow-[#006a9c]/25">
            ویژه
          </div>
        )}

        <div className="relative h-[260px] overflow-hidden bg-gray-100">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out" />
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#006a9c] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        </div>

        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-[10px] tracking-[3px] text-[#006a9c] font-bold uppercase bg-[#006a9c]/5 px-3 py-1 rounded-full">
              {project.tag}
            </span>
            <span className="text-[11px] text-gray-400">{project.date}</span>
          </div>

          <h3 className="text-[16px] font-bold leading-[1.6] text-gray-900 group-hover:text-[#006a9c] transition-colors duration-300">
            {project.title}
          </h3>

          <div className="flex items-center justify-between mt-5 pt-5 border-t border-gray-100/80">
            <span className="text-[11px] text-gray-400">مشاهده جزئیات</span>
            <div className="w-9 h-9 rounded-full bg-[#006a9c]/5 group-hover:bg-[#006a9c] flex items-center justify-center transition-colors duration-300">
              <svg
                className="w-4 h-4 text-[#006a9c] group-hover:text-white transition-colors duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default function StatItem() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(3);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setVisible(1);
      else if (window.innerWidth < 1024) setVisible(2);
      else setVisible(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const actualVisible = Math.min(visible, projects.length);

  const extendedProjects = [...projects, ...projects.slice(0, actualVisible)];

  const slideLeft = () => {
    if (index >= projects.length) return;
    setIsTransitioning(true);
    setIndex((prev) => prev + 1);
  };

  const slideRight = () => {
    if (index <= 0) return;
    setIsTransitioning(true);
    setIndex((prev) => prev - 1);
  };

  useEffect(() => {
    if (index === projects.length) {
      const timeout = setTimeout(() => {
        setIsTransitioning(false);
        setIndex(0);
      }, 500);

      return () => clearTimeout(timeout);
    }
  }, [index]);

  useEffect(() => {
    if (!isTransitioning && index === 0) {
      const frame = requestAnimationFrame(() => {
        setIsTransitioning(true);
      });
      return () => cancelAnimationFrame(frame);
    }
  }, [isTransitioning, index]);

  useEffect(() => {
    const interval = setInterval(() => {
      slideLeft();
    }, 10000);

    return () => clearInterval(interval);
  }, [index]);

  const cardsWidth = 100 / actualVisible;
  const translateValue = `translateX(${index * cardsWidth}%)`;

  const activeDotIndex = index % projects.length;

  const SWIPE_THRESHOLD = 40;

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    isDragging.current = true;
  };

  const handleTouchMove = (e) => {
    if (!isDragging.current) return;
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };

  const handleTouchEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;

    if (touchDeltaX.current <= -SWIPE_THRESHOLD) {
      slideLeft();
    } else if (touchDeltaX.current >= SWIPE_THRESHOLD) {
      slideRight();
    }
    touchDeltaX.current = 0;
  };

  return (
    <section
      dir="rtl"
      className="relative bg-gradient-to-b from-white via-[#f8f9fc] to-white py-20 md:py-28 overflow-hidden font-vazir"
    >
      <CardClip />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#006a9c]/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#006a9c]/5 rounded-full blur-3xl" />
      </div>

      <p className="absolute top-8 right-8 text-[120px] md:text-[160px] font-black text-black/[0.03] leading-none tracking-widest pointer-events-none select-none">
        نمونه‌کار
      </p>

      <div className="max-w-7xl mx-auto relative z-10 px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-14">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-[2px] bg-[#006a9c]" />
              <p className="text-[11px] tracking-[4px] text-[#006a9c] font-bold uppercase">
                آخرین پروژه‌ها
              </p>
              <div className="w-6 h-[2px] bg-[#006a9c]" />
            </div>
            <h2 className="text-[38px] md:text-[48px] font-black text-gray-900 leading-[1.15]">
              برترین <span className="text-[#006a9c]">نمونه کارهای</span>
              <br />
              <span className="text-gray-700">ما</span>
            </h2>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={slideRight}
            className="shrink-0 cursor-pointer w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-500 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:bg-[#006a9c] hover:text-white hover:border-[#006a9c] transition-all duration-300"
            aria-label="اسکرول به راست"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M14 5l7 7-7 7M21 12H3"
              />
            </svg>
          </button>

          <div
            className="overflow-hidden flex-1 relative touch-pan-y select-none"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div
              className="flex flex-row"
              style={{
                transform: translateValue,
                transition: isTransitioning
                  ? "transform 0.5s ease-in-out"
                  : "none",
              }}
            >
              {extendedProjects.map((project, i) => (
                <div
                  key={`${project.id}-${i}`}
                  style={{ flex: `0 0 ${100 / actualVisible}%` }}
                  className="px-3"
                >
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={slideLeft}
            className="shrink-0 cursor-pointer w-12 h-12 rounded-xl border border-gray-200 bg-white flex items-center justify-center text-gray-500 shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:bg-[#006a9c] hover:text-white hover:border-[#006a9c] transition-all duration-300"
            aria-label="اسکرول به چپ"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
          </button>
        </div>

        <div className="flex items-center justify-center gap-2.5 mt-10">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsTransitioning(true);
                setIndex(i);
              }}
              aria-label={`رفتن به پروژه ${i + 1}`}
              className="relative h-2 rounded-full transition-all duration-500 ease-out"
              style={{
                width: activeDotIndex === i ? "28px" : "8px",
                background: activeDotIndex === i ? "#006a9c" : "#d8dee5",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}