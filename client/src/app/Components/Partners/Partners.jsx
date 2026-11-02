"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// تغییر به دپارتمان‌های تخصصی یک تیم معماری
const partners = [
  { initials: "AR", name: "دپارتمان معماری", type: "طراحی پلان و نما" },
  { initials: "ST", name: "دپارتمان سازه", type: "محاسبات فنی" },
  { initials: "ME", name: "تاسیسات", type: "مکانیکال و الکتریکال" },
  { initials: "IN", name: "طراحی داخلی", type: "چیدمان و متریال" },
];

// تغییر به فازهای روند کاری پروژه معماری
const steps = [
  { num: "۰۱", label: "مطالعات", desc: "بررسی سایت، ضوابط و نیازسنجی دقیق کارفرما" },
  { num: "۰۲", label: "فاز یک", desc: "ارائه کانسپت، پلان‌های اولیه و مدلسازی سه‌بعدی" },
  { num: "۰۳", label: "فاز دو", desc: "تهیه نقشه‌های دقیق اجرایی، سازه و تاسیسات" },
  { num: "۰۴", label: "اجرا", desc: "پیاده‌سازی دقیق پروژه با نظارت عالیه تیم مهندسی" },
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

export default function Partners() {
  return (
    <section dir="rtl" className="relative bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-[#0a0a0a] py-24 md:py-32 px-4 md:px-8 overflow-hidden font-vazir">
      
      {/* المان‌های تزئینی پس‌زمینه */}
      <div className="absolute inset-0 pointer-events-none">
        {/* دایره‌های نورانی */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#006a9c]/[0.04] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#006a9c]/[0.03] rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#006a9c]/[0.02] rounded-full blur-[80px]" />
        
        {/* گرید نقطه‌چین تزئینی */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.02)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      {/* واترمارک */}
      <p className="absolute top-8 right-8 text-[140px] md:text-[180px] font-black text-white/[0.02] leading-none tracking-widest pointer-events-none select-none">
        دپارتمان‌ها
      </p>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── هدر ── */}
        <AnimatedBlock className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-[2px] bg-[#006a9c]" />
            <p className="text-[10px] tracking-[5px] text-[#006a9c] uppercase font-bold">
              تیم‌های تخصصی
            </p>
            <div className="w-8 h-[2px] bg-[#006a9c]" />
          </div>
          <h2 className="text-[38px] md:text-[48px] font-black text-white leading-[1.15]">
            تیم‌هایی که در هر{" "}
            <span className="text-[#006a9c] relative">
              مرحله
              <span className="absolute -bottom-2 right-0 left-0 h-1 bg-[#006a9c]/30 rounded-full" />
            </span>
            <br />
            کنار پروژه شما هستند
          </h2>
          <p className="text-white/30 text-sm md:text-base mt-4 max-w-xl">
            حضور تیم‌های متخصص و هماهنگ در تمام فازهای معماری و مهندسی برای خلق بهترین نتیجه
          </p>
        </AnimatedBlock>

        {/* ── گرید شرکت‌ها / دپارتمان‌ها ── */}
        <AnimatedBlock delay={100} className="mb-24">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {partners.map((p, i) => (
              <motion.div
                key={i}
                className="group relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm rounded-2xl border border-white/[0.06] hover:border-[#006a9c]/30 p-8 flex flex-col items-center gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,106,156,0.15)]"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#006a9c]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <span className="absolute top-3 right-4 text-[9px] text-white/10 font-bold tracking-wider">
                  {String(i + 1).padStart(2, "0")}
                </span>

                <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/[0.08] group-hover:border-[#006a9c]/40 group-hover:shadow-[0_0_30px_rgba(0,106,156,0.2)] transition-all duration-500 flex items-center justify-center">
                  <span className="text-white font-black text-xl tracking-tight group-hover:text-[#006a9c] transition-colors duration-300">
                    {p.initials}
                  </span>
                  
                  <div className="absolute -inset-1 rounded-2xl bg-[#006a9c]/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="text-center relative z-10">
                  <p className="text-[14px] font-bold text-white group-hover:text-[#006a9c] transition-colors duration-300">
                    {p.name}
                  </p>
                  <p className="text-[10px] text-white/30 tracking-[3px] uppercase mt-1.5">
                    {p.type}
                  </p>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-1/2 h-[2px] bg-gradient-to-r from-transparent via-[#006a9c] to-transparent transition-all duration-500" />
              </motion.div>
            ))}
          </div>
        </AnimatedBlock>

        <div className="relative">
          <AnimatedBlock delay={200} className="mb-14">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[2px] bg-[#006a9c]" />
              <p className="text-[10px] tracking-[5px] text-[#006a9c] uppercase font-bold">
                فرآیند کار
              </p>
              <div className="w-8 h-[2px] bg-[#006a9c]" />
            </div>
            <h3 className="text-[28px] md:text-[34px] font-bold text-white">
              چگونه <span className="text-[#006a9c]">کار</span> می‌کنیم
            </h3>
            <p className="text-white/30 text-sm mt-3">
              از ایده تا اجرا، در چهار مرحله حرفه‌ای
            </p>
          </AnimatedBlock>

          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="hidden md:block absolute top-10 right-[12%] left-[12%] h-[2px] bg-gradient-to-l from-transparent via-[#006a9c]/30 to-transparent z-0">
              <div className="absolute top-1/2 -translate-y-1/2 right-0 w-2 h-2 bg-[#006a9c] rounded-full" />
              <div className="absolute top-1/2 -translate-y-1/2 left-0 w-2 h-2 bg-[#006a9c] rounded-full" />
            </div>

            {steps.map((s, i) => (
              <AnimatedBlock key={i} delay={i * 150} className="relative">
                <motion.div 
                  className="group flex flex-col items-center gap-4 text-center relative z-10"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#006a9c] to-[#005580] flex items-center justify-center font-black text-white text-2xl shadow-[0_8px_32px_rgba(0,106,156,0.4)] group-hover:shadow-[0_12px_40px_rgba(0,106,156,0.6)] transition-all duration-500 group-hover:-translate-y-1.5">
                      {s.num}
                    </div>
                    
                    <div className="absolute -inset-1 rounded-2xl bg-[#006a9c]/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <span className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-[#006a9c] text-[8px] text-white font-bold flex items-center justify-center">
                      {i + 1}
                    </span>
                  </div>

                  <div>
                    <p className="text-[15px] font-bold text-white group-hover:text-[#006a9c] transition-colors duration-300">
                      {s.label}
                    </p>
                    <p className="text-[12px] text-white/30 leading-[1.8] max-w-[160px] mt-1.5">
                      {s.desc}
                    </p>
                  </div>

                  {i < steps.length - 1 && (
                    <div className="md:hidden text-white/10 mt-1">
                      <svg className="w-4 h-4 rotate-90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              </AnimatedBlock>
            ))}
          </div>
        </div>

        <AnimatedBlock delay={300} className="mt-20 flex justify-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <a
              href="/Services"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-[#006a9c] to-[#005580] text-white font-bold px-10 py-4 rounded-full shadow-[0_8px_32px_rgba(0,106,156,0.3)] hover:shadow-[0_12px_48px_rgba(0,106,156,0.5)] transition-all duration-300 hover:-translate-y-1"
            >
              شروع پروژه
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </a>
          </motion.div>
        </AnimatedBlock>

      </div>
    </section>
  );
}