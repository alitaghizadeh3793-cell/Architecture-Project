"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import JoinUsModal from "./JoinUsModal/JoinUsModal";

const STUDIO = {
  heroBackground: "/image-content/IMG_20260711_181447_862.jpg",
  heroImage: "/image-AboutUs/image-2.jpg",
  stats: [
    { value: "۱۲+", label: "سال تجربه" },
    { value: "۱۸۰+", label: "پروژه اجراشده" },
    { value: "۹۵٪", label: "رضایت مشتریان" },
    { value: "۴۰+", label: "معمار و متخصص" },
  ],
  process: [
    {
      no: "۰۱",
      title: "مشاوره اولیه",
      desc: "نشستی صمیمی برای شنیدن ایده، نیاز و بودجه‌ی شما، پیش از هر طراحی.",
    },
    {
      no: "۰۲",
      title: "طراحی مفهومی",
      desc: "تیم طراحی چند مفهوم متفاوت رو بر پایه‌ی سلیقه و کاربری فضا آماده می‌کند.",
    },
    {
      no: "۰۳",
      title: "نظارت بر اجرا",
      desc: "همراهی مستمر مهندسان ناظر در تمام مراحل ساخت تا رسیدن به کیفیت مطلوب.",
    },
    {
      no: "۰۴",
      title: "تحویل نهایی",
      desc: "تحویل کلید پروژه با گزارش کامل فنی و پشتیبانی پس از تحویل.",
    },
  ],
  team: [
    {
      name: "سارا محمدی",
      role: "بنیان‌گذار و مدیر طراحی",
      image: "/image-content/team-1.jpg",
    },
    {
      name: "علی رضایی",
      role: "معمار ارشد",
      image: "/image-content/team-2.jpg",
    },
    {
      name: "نگار حسینی",
      role: "طراح داخلی",
      image: "/image-content/team-3.jpg",
    },
    {
      name: "امیر صادقی",
      role: "مهندس عمران",
      image: "/image-content/team-4.jpg",
    },
    {
      name: "مریم کریمی",
      role: "طراح شهری",
      image: "/image-content/team-5.jpg",
    },
    {
      name: "رضا احمدی",
      role: "مدیر پروژه",
      image: "/image-content/team-6.jpg",
    },
    {
      name: "الناز یوسفی",
      role: "کارشناس متره و برآورد",
      image: "/image-content/team-7.jpg",
    },
  ],
};

function BlueprintCorner({ className = "", color = "text-[#006a9c]/70" }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={`absolute w-6 h-6 ${color} ${className}`}
      fill="none"
    >
      <path d="M2 2 L2 16 M2 2 L16 2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function StatCard({ value, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="relative rounded-2xl px-6 py-7 text-center"
      style={{
        background: "rgba(255,255,255,0.04)",
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        border: "1px solid rgba(255,255,255,0.09)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      <BlueprintCorner className="-top-1 -right-1 rotate-90" />
      <BlueprintCorner className="-bottom-1 -left-1 rotate-[270deg]" />
      <p className="text-[30px] md:text-[36px] font-black text-[#3bb1ec]">
        {value}
      </p>
      <p className="text-[12px] text-gray-400 mt-2">{label}</p>
    </motion.div>
  );
}

function ProcessStep({ no, title, desc, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex-1"
    >
      <div className="flex items-center gap-4 md:block">
        <span className="text-[13px] font-black text-[#006a9c] shrink-0">
          {no}
        </span>
        <div className="hidden md:block h-px flex-1 bg-gray-200 my-5" />
      </div>
      <h4 className="text-[16px] font-bold text-gray-900 mt-3 md:mt-4">
        {title}
      </h4>
      <p className="text-[13px] text-gray-500 mt-2 leading-relaxed max-w-[240px]">
        {desc}
      </p>
    </motion.div>
  );
}

function TeamCard({ name, role, image, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative rounded-2xl overflow-hidden aspect-[3/4] border border-gray-200"
    >
      <Image
        src={image}
        alt={name}
        fill
        className="object-cover grayscale-[15%] transition-all duration-500 group-hover:grayscale-0 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
      <div className="absolute bottom-0 right-0 p-5">
        <p className="text-white text-[15px] font-bold">{name}</p>
        <p className="text-gray-300 text-[11.5px] mt-1">{role}</p>
      </div>
    </motion.div>
  );
}

function JoinUsCard({ index, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      className="group relative cursor-pointer rounded-2xl overflow-hidden aspect-[3/4] bg-black border border-white/10 flex flex-col items-center justify-center text-center px-5"
    >
      <div
        className="absolute inset-0 opacity-30 transition-opacity duration-500 group-hover:opacity-50"
        style={{
          background:
            "radial-gradient(circle at 50% 30%, rgba(0,106,156,0.35), transparent 65%)",
        }}
      />
      <div className="relative z-10 w-14 h-14 rounded-full border border-white/25 flex items-center justify-center mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:border-[#3bb1ec]">
        <svg viewBox="0 0 24 24" className="w-6 h-6 text-white">
          <path
            d="M12 5v14M5 12h14"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <p className="relative z-10 text-white text-[16px] font-bold leading-snug">
        نفر بعدی <span className="text-[#3bb1ec]">شما</span> باشید
      </p>
      <p className="relative z-10 text-gray-400 text-[11.5px] mt-2">
        به تیم معماری مهراز بپیوندید
      </p>
    </motion.div>
  );
}

export default function AboutUs() {
  const [showJoinModal, setShowJoinModal] = useState(false);
  return (
    <section dir="rtl" className="font-vazir">
      <div className="relative w-full min-h-[520px] md:min-h-[600px] flex items-end overflow-hidden bg-[#0a0a0a]">
        <Image
          src={STUDIO.heroBackground}
          alt="استودیوی معماری مهراز"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/65 to-[#0a0a0a]/15" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/10 via-transparent to-[#0a0a0a]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-20 w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.3em] text-[#3bb1ec] font-bold uppercase mb-3"
          >
            About Us
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[34px] md:text-[54px] font-light text-white leading-tight max-w-2xl"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
          >
            ما فضاهایی می‌سازیم که{" "}
            <span className="font-bold">زندگی می‌کنند</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[14px] text-gray-300 mt-5 max-w-lg leading-relaxed"
          >
            بیش از یک دهه تجربه در طراحی و اجرای پروژه‌های مسکونی، تجاری و
            اداری؛ با تیمی که هر پروژه را مثل خانه‌ی خودش می‌بیند.
          </motion.p>
        </div>
      </div>

      {/* ══════════════ بخش تیره: فلسفه‌ی طراحی + آمار ══════════════ */}
      <div className="relative bg-[#0a0a0a] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="pointer-events-none absolute top-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] bg-[#006a9c]/10" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 pt-20 pb-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] tracking-[0.3em] text-[#3bb1ec] font-bold uppercase mb-4">
              Our Philosophy
            </p>
            <h2 className="text-[32px] md:text-[46px] font-light text-white leading-[1.3] mb-6">
              معماری که با <span className="font-bold">داستان شما</span> شروع
              می‌شود
            </h2>
            <p className="text-[14px] text-gray-400 leading-[2] max-w-lg">
              ما باور داریم هر فضا باید روایتگر زندگی کسی باشد که در آن جریان
              دارد. تیم مهراز از یک ایده‌ی ساده شکل گرفت: طراحی نباید فقط زیبا
              باشد، باید با نحوه‌ی زندگی، کار و رشد شما هماهنگ باشد. از اولین
              نشست مشاوره تا آخرین میخ روی دیوار، کنار شما می‌مانیم.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {STUDIO.stats.map((s, i) => (
                <StatCard
                  key={s.label}
                  value={s.value}
                  label={s.label}
                  index={i}
                />
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-2xl overflow-hidden min-h-[420px] border border-white/5"
          >
            <Image
              src={STUDIO.heroImage}
              alt="فضای کار استودیوی معماری مهراز"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 right-0 p-6">
              <p className="text-white text-[14px] font-medium">
                استودیوی طراحی مهراز
              </p>
              <p className="text-gray-300 text-[11px] mt-1">مشهد 1405</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ══════════════ بخش روشن: فرآیند کاری ══════════════ */}
      <div className="relative bg-[#f7f6f4] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(0,0,0,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.035) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[10px] tracking-[0.3em] text-[#006a9c] font-bold uppercase mb-3">
                Our Process
              </p>
              <h3 className="text-[28px] md:text-[38px] font-light text-gray-900">
                از ایده تا <span className="font-bold">تحویل کلید</span>
              </h3>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-[13px] text-gray-500 max-w-sm leading-relaxed"
            >
              فرآیندی شفاف و مرحله‌به‌مرحله، طراحی‌شده تا در هر لحظه بدانید
              پروژه‌ی شما دقیقاً در چه مرحله‌ای است.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {STUDIO.process.map((step, i) => (
              <ProcessStep
                key={step.no}
                no={step.no}
                title={step.title}
                desc={step.desc}
                index={i}
              />
            ))}
          </div>

          {/* ── تیم ما ── */}
          <div className="mt-24">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <p className="text-[10px] tracking-[0.3em] text-[#006a9c] font-bold uppercase mb-3">
                Our Team
              </p>
              <h3 className="text-[28px] md:text-[38px] font-light text-gray-900">
                آدم‌های پشت <span className="font-bold">هر پروژه</span>
              </h3>
            </motion.div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
              {STUDIO.team.map((member, i) => (
                <TeamCard key={member.name} {...member} index={i} />
              ))}
              <JoinUsCard
                index={STUDIO.team.length}
                onClick={() => setShowJoinModal(true)}
              />
            </div>
          </div>
        </div>
      </div>
      <JoinUsModal
        open={showJoinModal}
        onClose={() => setShowJoinModal(false)}
      />
    </section>
  );
}
