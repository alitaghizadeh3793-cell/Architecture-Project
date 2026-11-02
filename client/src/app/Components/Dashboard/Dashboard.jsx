"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

function LiquidButton({ size = "md" }) {
  const isLg = size === "lg";
  const btnClass = isLg ? "w-44 h-12 text-[14px]" : "w-36 h-10 text-[13px]";
  const iconClass = isLg ? "w-5 h-5" : "w-4 h-4";

  return (
    <button
      className={`${btnClass} rounded-full bg-[#006a9c] text-white relative overflow-hidden group/btn z-10 font-bold cursor-pointer shadow-lg shadow-[#006a9c]/30 hover:text-white transition-colors duration-1000`}
      style={{ fontFamily: "inherit" }}
    >
      <span className="absolute bg-[#008bc9] w-56 h-56 rounded-full group-hover/btn:scale-100 scale-0 -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/btn:duration-500 duration-700 origin-center transform transition-all" />
      <span className="absolute bg-[#001e30] w-56 h-56 rounded-full group-hover/btn:scale-100 scale-0 -z-10 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/btn:duration-700 duration-500 origin-center transform transition-all" />
      <span className="relative z-10 flex items-center justify-center gap-2">
        <svg className={iconClass} fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
        مشاهده پروژه
      </span>
    </button>
  );
}

const PhotoCard = ({ src, alt, className = "", delay = "" }) => (
  <div className={`rounded-2xl overflow-hidden relative group cursor-pointer animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 ${delay} ${className}`}>
    <Image src={src} alt={alt} fill className="object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500" />
    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
      <LiquidButton size="md" />
    </div>
  </div>
);

export default function AboutSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("opacity-100", "translate-y-0");
            entry.target.classList.remove("opacity-0", "translate-y-8");
          }
        });
      },
      { threshold: 0.1 },
    );
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section
      dir="rtl"
      ref={sectionRef}
      className="min-h-screen bg-[#f8f9fc] overflow-hidden font-vazir py-28 px-4 md:px-8 relative"
    >
      {/* پس‌زمینه */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 left-0 w-[450px] h-[450px] bg-blue-500/10 rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-sky-500/[0.05] rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── عکس‌ها سمت راست ── */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="grid grid-cols-12 gap-4 h-[580px]">

              {/* عکس بزرگ */}
              <div className="col-span-12 md:col-span-8 row-span-2 rounded-3xl overflow-hidden relative group cursor-pointer animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
                <Image
                  src="/image-dashboard/image-4.jpg"
                  alt="طراحی داخلی"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                  <LiquidButton size="lg" />
                </div>
              </div>

              {/* عکس کوچک ۱ */}
              <PhotoCard
                src="/image-dashboard/image-3.jpg"
                alt="فضا"
                className="col-span-6 md:col-span-4"
                delay="delay-200"
              />

              {/* عکس کوچک ۲ */}
              <div className="col-span-6 md:col-span-4 rounded-2xl overflow-hidden relative group cursor-pointer animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
                <Image
                  src="/image-dashboard/image-1.jpg"
                  alt="فضا"
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/55 transition-all duration-500" />
                <div className="absolute bottom-4 right-4 left-4 bg-white/70 backdrop-blur-xl rounded-2xl p-4 border border-white/80 shadow-xl transition-opacity duration-300 group-hover:opacity-0 pointer-events-none">
                  <p className="text-xs font-bold text-gray-800">طراحی مدرن</p>
                  <p className="text-[10px] text-gray-500">۲۰۲۶</p>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-400 translate-y-3 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto">
                  <LiquidButton size="md" />
                </div>
              </div>

            </div>
          </div>

          {/* ── محتوا سمت چپ ── */}
          <div className="lg:col-span-5 flex flex-col justify-center gap-8 order-2 lg:order-1">

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              <span className="text-[10px] tracking-[4px] text-[#006a9c] uppercase font-semibold bg-[#006a9c]/10 px-4 py-1.5 rounded-full">
                معرفی ما
              </span>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 leading-[1.1] animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
              خلق فضاهای
              <br />
              <span className="relative inline-block">
                <span className="text-[#006a9c]">بی‌نظیر</span>
                <span className="absolute -bottom-1 right-0 left-0 h-1 bg-[#006a9c]/30 rounded-full" />
              </span>
            </h2>

            <p className="text-base text-gray-600 leading-[2] font-light border-r-2 border-[#006a9c]/30 pr-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              ما با تلفیق هنر و علم معماری، فضاهایی خلق می‌کنیم که نه تنها زیبا،
              بلکه الهام‌بخش و کاربردی هستند. هر پروژه برای ما یک داستان منحصربه‌فرد است
              که با دقت و خلاقیت به تصویر می‌کشیم.
            </p>

            <div className="animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
              <a
                href="/AboutUs"
                className="inline-flex items-center gap-3 text-[#006a9c] font-semibold text-sm group/link"
              >
                <span className="border-b border-[#006a9c]/40 group-hover/link:border-[#006a9c] transition-colors pb-0.5">
                  بیشتر بدانید
                </span>
                <svg className="w-4 h-4 -rotate-180 group-hover/link:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}