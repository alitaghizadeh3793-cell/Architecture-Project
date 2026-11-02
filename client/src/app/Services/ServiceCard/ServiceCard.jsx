"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const processDetails = [
  {
    id: "process-01",
    num: "۰۱",
    title: "تحلیل و کالبدشکافی",
    desc: "کارشناسان مهراز با حضور در محل، تمامی زوایای سازه را بررسی می‌کنند تا تصویری شفاف از پتانسیل‌های فضا داشته باشیم.",
    features: ["ارزیابی فنی اسکلت و سازه", "شناسایی ریشه‌های نم و فرسودگی", "ترسیم نیازهای عملکردی"],
    color: "#006a9c",
    image: "/image-ServiceCard/image-1.jpg",
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M21 21L16.65 16.65M19 11C19 15.42 15.42 19 11 19C6.58 19 3 15.42 3 11C3 6.58 6.58 3 11 3C15.42 3 19 6.58 19 11Z"/>
        <path d="M8 11H14M11 8V14" opacity=".5"/>
      </svg>
    ),
  },
  {
    id: "process-02",
    num: "۰۲",
    title: "استراتژی و دیزاین",
    desc: "تیم طراحی مهراز با برگزاری جلسات تعاملی، سبک اختصاصی شما را کشف می‌کند و تعادلی میان زیبایی‌شناسی و اصول مهندسی برقرار می‌سازد.",
    features: ["تعیین سبک معماری", "برنامه‌ریزی فضایی دقیق", "بودجه‌بندی شفاف و مرحله‌ای"],
    color: "#e88934",
    image: "/image-ServiceCard/image-3.jpg",
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
        <path d="M12 4V2M12 4C10.5 4 8 7 6 12L4 20M12 4C13.5 4 16 7 18 12L20 20"/>
        <path d="M9 14H15" opacity=".6"/>
        <circle cx="12" cy="4" r="1" fill="currentColor"/>
      </svg>
    ),
  },
  {
    id: "process-03",
    num: "۰۳",
    title: "تداعی سه‌بعدی",
    desc: "پیش از هرگونه تغییر فیزیکی، خانه آینده شما را در فضای مجازی با دقت بالا خلق می‌کنیم تا با اطمینان کامل تصمیم بگیرید.",
    features: ["شبیه‌سازی دقیق متریال و رنگ", "طراحی نورپردازی هوشمند", "مشاهده نتیجه نهایی پیش از اجرا"],
    color: "#7c3aed",
    image: "/image-ServiceCard/image-4.jpg",
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22L21 17V7L12 2L3 7V17L12 22Z"/>
        <path d="M12 22V12M12 12L21 7M12 12L3 7"/>
        <path d="M4.5 16.5L10.5 13.5M19.5 16.5L13.5 13.5M12 4.5V9.5" strokeWidth="1" opacity=".4"/>
      </svg>
    ),
  },
  {
    id: "process-04",
    num: "۰۴",
    title: "اجرای دقیق و تعالی",
    desc: "تیم اجرایی مهراز با نظارت مستقیم مدیر پروژه وارد عمل می‌شود و گزارش‌های هفتگی، تضمین‌کننده اجرای دقیق مطابق طراحی است.",
    features: ["نظارت مستمر کیفی پروژه", "گزارش‌دهی هفتگی به کارفرما", "تحویل با گارانتی کامل"],
    color: "#059669",
    image: "/image-ServiceCard/image-3.jpg",
    svg: (
      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 12H22L12 2Z"/>
        <path d="M2 12L12 22L22 12"/>
        <path d="M7 12V17M17 12V17M12 12V20" strokeWidth="1.2" opacity=".5"/>
      </svg>
    ),
  },
];

function ProcessCard({ step, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const isEven = index % 2 === 0;
  const router = useRouter();

  return (
    <div ref={ref} id={step.id} className="relative scroll-mt-32">
      {index < processDetails.length - 1 && (
        <div className="hidden md:block absolute left-1/2 top-[380px] w-px h-28 bg-gradient-to-b from-gray-200 to-transparent -translate-x-1/2 z-0" />
      )}

      <div className={`grid md:grid-cols-2 gap-16 lg:gap-24 items-center ${!isEven ? "md:[direction:ltr]" : ""}`}>

        {/* باکس ویژوال */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className={`${!isEven ? "md:[direction:rtl]" : ""}`}
        >
          <div className="group relative">
            {/* هاله نوری */}
            <div
              className="absolute -inset-6 rounded-[50px] blur-3xl opacity-0 group-hover:opacity-10 transition-all duration-700 pointer-events-none"
              style={{ backgroundColor: step.color }}
            />

            {/* کارت */}
            <div className="relative h-[380px] rounded-[40px] overflow-hidden border border-gray-100 group-hover:border-gray-200 transition-all duration-500 shadow-[0_8px_40px_rgba(0,0,0,0.06)] group-hover:shadow-[0_24px_64px_rgba(0,0,0,0.1)] group-hover:-translate-y-2">
              <Image
                src={step.image}
                width={250}
                height={250}
                alt={step.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

              <span className="absolute bottom-4 left-5 text-[96px] font-black text-white/10 group-hover:text-white/18 transition-colors duration-500 leading-none select-none pointer-events-none z-10">
                {step.num}
              </span>

              <div
                className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"
                style={{ background: `linear-gradient(to right, transparent, ${step.color}, transparent)` }}
              />

              {/* badge */}
              <div
                className="absolute -top-4 -right-4 w-12 h-12 rounded-2xl flex items-center justify-center text-white text-sm font-black shadow-lg z-20 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-4deg]"
                style={{ backgroundColor: step.color }}
              >
                {step.num}
              </div>
            </div>
          </div>
        </motion.div>

        {/* متن */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? 50 : -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          className={`flex flex-col gap-5 text-right ${!isEven ? "md:[direction:rtl]" : ""}`}
        >
          {/* آیکون */}
          <div
            className="w-12 h-12 rounded-2xl border flex items-center justify-center mb-2"
            style={{
              backgroundColor: `${step.color}12`,
              borderColor: `${step.color}25`,
              color: step.color,
            }}
          >
            {step.svg}
          </div>

          {/* تگ */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-px" style={{ backgroundColor: step.color }} />
            <span className="text-[10px] font-bold tracking-[4px] uppercase" style={{ color: step.color }}>
              مرحله {step.num}
            </span>
          </div>

          {/* عنوان */}
          <h2 className="text-[30px] md:text-[40px] font-black text-gray-900 leading-[1.2] tracking-tight">
            {step.title}
          </h2>

          {/* توضیح */}
          <p className="text-gray-500 text-[14px] leading-[2.1] font-light max-w-md">
            {step.desc}
          </p>

          {/* فیچرها */}
          <div className="flex flex-col gap-3 mt-1">
            {step.features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.25 + i * 0.1 }}
                className="group/feat flex items-center gap-3 cursor-default"
              >
                <span
                  className="w-[5px] h-[5px] rounded-full shrink-0 transition-transform duration-300 group-hover/feat:scale-[2]"
                  style={{ backgroundColor: step.color }}
                />
                <span className="text-[13px] text-gray-400 group-hover/feat:text-gray-800 transition-colors duration-300 font-light">
                  {f}
                </span>
              </motion.div>
            ))}
          </div>

          {/* دکمه */}
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => router.push(`/Services/process/${step.id}`)}
            className="mt-4 w-fit inline-flex items-center gap-2 px-6 py-3 cursor-pointer rounded-full text-[12px] font-semibold text-gray-600 border border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 shadow-sm"
          >
            جزئیات بیشتر فرآیند
            <span style={{ color: step.color }}>←</span>
          </motion.button>
        </motion.div>

      </div>
    </div>
  );
}

export default function WorkProcessLight() {
  return (
    <section
      dir="rtl"
      className="relative font-vazir text-gray-900 py-32 md:py-48 px-4 md:px-8 overflow-hidden bg-white"
    >
      {/* گرید شطرنجی */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.045) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.045) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)",
          maskImage:
            "radial-gradient(ellipse 80% 80% at 50% 50%, #000 40%, transparent 100%)",
        }}
      />

      {/* نورهای محیطی ملایم */}
      <div className="absolute top-[-8%] left-[8%] w-[500px] h-[500px] rounded-full blur-[130px] bg-[#006a9c]/6 pointer-events-none" />
      <div className="absolute bottom-[-8%] right-[5%] w-[450px] h-[450px] rounded-full blur-[130px] bg-[#7c3aed]/5 pointer-events-none" />
      <div className="absolute top-[40%] left-[42%] w-[380px] h-[380px] rounded-full blur-[110px] bg-[#e88934]/4 pointer-events-none" />

      {/* هدر */}
      <div className="max-w-5xl mx-auto mb-28 text-center relative z-10">
        <motion.span
          initial={{ opacity: 0, letterSpacing: "2px" }}
          whileInView={{ opacity: 1, letterSpacing: "6px" }}
          viewport={{ once: true }}
          className="text-[#006a9c] text-[10px] font-bold uppercase block mb-5 tracking-[6px]"
        >
          رویکرد مهراز
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="text-[42px] md:text-[60px] font-black tracking-tight leading-[1.1] text-gray-900"
        >
          خلق فضا در{" "}
          <em className="not-italic font-light text-[#006a9c] italic">چهار</em>
          {" "}گام بنیادین
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 max-w-sm mx-auto mt-5 text-[13.5px] font-light leading-[1.9]"
        >
          مراحل طراحی و اجرای مهندسی پروژه شما از ایده اولیه تا کلید تحویل
        </motion.p>
      </div>

      {/* مراحل */}
      <div className="max-w-5xl mx-auto relative z-10 flex flex-col gap-36 md:gap-48">
        {/* خط عمودی مرکزی */}
        <div className="hidden md:block absolute left-1/2 top-16 bottom-16 w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent -translate-x-1/2 pointer-events-none" />

        {processDetails.map((step, i) => (
          <ProcessCard key={step.id} step={step} index={i} />
        ))}
      </div>

      {/* فوتر */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-28 pt-10 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10"
      >
        <span className="text-[11px] text-gray-300 font-light">استودیو معماری و بازسازی لوکس مهراز</span>
        <span className="text-[10px] text-gray-300 tracking-[3px] uppercase">4 STEPS EXECUTION FLOW</span>
      </motion.div>
    </section>
  );
}