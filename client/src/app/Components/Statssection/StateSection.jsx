"use client";
import { useEffect, useRef, useState } from "react";

const stats = [
  { num: 12,   suffix: "+", label: "سال تجربه" },
  { num: 250,  suffix: "+", label: "پروژه انجام‌شده" },
  { num: 50,   suffix: "K+", label: "دنبال‌کننده" },
  { num: 18,   suffix: "",  label: "کارکنان" },
];

function useCountUp(target, duration = 2000, start = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);

  return count;
}

function StatItem({ num, suffix, label, index }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const count = useCountUp(num, 2000, visible);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`flex items-center gap-5 transition-all duration-700 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative shrink-0 font-vazir">
        <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#006a9c]" />
        <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#006a9c]" />
        <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#006a9c]" />
        <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#006a9c]" />
        <p className="text-[52px] md:text-[64px] font-black text-white leading-none px-4 py-1 tabular-nums">
          {count}{suffix}
        </p>
      </div>

      <p className="text-white/70 text-sm md:text-base leading-snug font-light max-w-[80px]">
        {label}
      </p>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section
      dir="rtl"
      className="relative py-24 overflow-hidden"
      style={{
        backgroundImage: "url('/image-content/444c190ae03694f1bfb8710314afefbe.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 font-vazir">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8">
          {stats.map((s, i) => (
            <StatItem
              key={s.label}
              num={s.num}
              suffix={s.suffix}
              label={s.label}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
}