"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ServicesHero from "./ServiceCard/ServiceCard";
import Popup from "./popup/Popup";

const steps = [
  { num: "۰۱", label: "تحلیل و کالبدشکافی", desc: "کارشناسان مهراز با بررسی دقیق سازه، ریشه‌های ناکارآمدی و آسیب‌های ساختمانی را استخراج کرده و نیازهای واقعی شما را ترسیم می‌کنند.", id: "process-01" },
  { num: "۰۲", label: "استراتژی و دیزاین", desc: "در این فاز، تیم طراحی ما با نگاهی معمارانه، بین سبک شخصی شما و اصول نوین مهندسی، تعادلی میان زیبایی و عملکرد خلق می‌کند.", id: "process-02" },
  { num: "۰۳", label: "تداعی سه‌بعدی", desc: "پیش از هرگونه تغییر فیزیکی، فضاهای آینده را در قالب مدل‌های دقیق سه‌بعدی به شما نشان می‌دهیم تا با اطمینان کامل به استقبال تحول بروید.", id: "process-03" },
  { num: "۰۴", label: "اجرای دقیق و تعالی", desc: "نظارت موشکافانه بر تک‌تک جزئیات اجرایی توسط متخصصان مهراز تا روز تحویل و رسیدن به فضایی که در آن روح زندگی جاریست.", id: "process-04" },
];

function AnimatedBlock({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: delay / 1000, ease: [0.25, 0.1, 0.25, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function WorkProcess() {
  // تابع اسکرول به سکشن مربوطه
  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div>
      <section 
        dir="rtl" 
        className="relative min-h-screen py-24 md:py-32 px-4 md:px-8 overflow-hidden font-vazir flex items-center"
      >
        
        {/* تصویر پس‌زمینه */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/image-Service/image-2.jpg"
            alt="خدمات معماری مهراز"
            fill
            className="object-cover object-center scale-105"
            priority
            sizes="100vw"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#010101]/20 via-[#010101]/40 to-[#010101]/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#010101]/60 via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#010101]/20 via-transparent to-[#010101]/40" />
          <div className="absolute top-[-120px] right-[-120px] w-[400px] h-[400px] rounded-full blur-[160px] bg-[#3f415d]/10" />
          <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full blur-[140px] bg-[#3f415d]/5" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10 w-full">
          <AnimatedBlock className="mb-16 text-center">
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3f415d]" />
              <span className="text-[10px] tracking-[6px] uppercase font-medium text-[#fff]">فرآیند تحول فضا</span>
            </div>
            <h1 className="text-[42px] md:text-[56px] lg:text-[72px] font-black leading-[1.1] mb-6">
              <span className="text-white">مسیر</span> <span className="text-white/70">معماری</span> <span className="text-white">ایده‌آل</span>
              <br />
              <span className="text-[28px] md:text-[40px] lg:text-[48px] text-white/50 font-light">با مهراز</span>
            </h1>
            <p className="max-w-2xl mx-auto leading-[2] text-sm md:text-base font-light tracking-wide text-white/50">
              از کالبد فرسوده تا شکوهِ معماری مدرن. در مهراز، بازسازی را هنری برای احیای هویت فضاهای شما می‌دانیم.
            </p>
          </AnimatedBlock>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {steps.map((s, i) => (
              <AnimatedBlock key={i} delay={i * 150} className="h-full">
                {/* تغییر به دکمه برای اسکرول */}
                <button 
                  onClick={() => handleScroll(s.id)}
                  className="w-full cursor-pointer group relative h-full p-7 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-500 flex flex-col items-center text-center shadow-[0_8px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_15px_50px_rgba(0,0,0,0.5)]"
                >
                  <div className="w-16 h-16 mb-5 rounded-full border-2 border-[#3f415d] text-[#fff] bg-[#3f415d]/10 flex items-center justify-center text-xl font-bold transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_4px_20px_rgba(63,65,93,0.3)] ">
                    {s.num}
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-white">{s.label}</h3>
                  <p className="text-[13px] leading-[1.8] flex-grow text-white/60 group-hover:text-white/80 transition-colors duration-300">
                    {s.desc}
                  </p>
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] group-hover:w-2/3 transition-all duration-500 ease-out bg-[#3f415d]" />
                </button>
              </AnimatedBlock>
            ))}
          </div>
        </div>
      </section>
      
      <ServicesHero />
      <Popup />
    </div>
  );
}