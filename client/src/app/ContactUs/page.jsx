"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Popup from "@/app/Services/popup/Popup";

const CONTACT_INFO = {
  phone: "۰۲۱-۸۸۷۷۶۶۵۵",
  mobile: "۰۹۱۲‌۳۴۵‌۶۷۸۹",
  email: "info@your-architecture.ir",
  address: "تهران، خیابان ولیعصر، بالاتر از میدان ونک، برج آرمان، طبقه ۶",
  hours: "شنبه تا چهارشنبه — ۹:۰۰ الی ۱۸:۰۰",
  lat: 35.7595,
  lng: 51.4116,
  neshanApiKey: "YOUR_NESHAN_API_KEY",
  heroBackground: "/image-content/contact-hero-bg.jpg",
  officeImage: "/image-content/contact-hero.jpg",
};

function BlueprintCorner({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={`absolute w-6 h-6 text-[#006a9c]/70 ${className}`} fill="none">
      <path d="M2 2 L2 16 M2 2 L16 2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function GlassPanel({ children, className = "", noCorners = false }) {
  return (
    <div
      className={`relative rounded-2xl ${className}`}
      style={{
        background: "rgba(255,255,255,0.03)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        border: "1px solid rgba(255,255,255,0.08)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
      }}
    >
      {!noCorners && (
        <>
          <BlueprintCorner className="-top-1 -right-1 rotate-90" />
          <BlueprintCorner className="-bottom-1 -left-1 rotate-[270deg]" />
        </>
      )}
      {children}
    </div>
  );
}

const infoItems = (info) => [
  {
    key: "address",
    label: "آدرس دفتر",
    value: info.address,
    icon: (
      <>
        <path d="M12 22s7-7.2 7-12.5A7 7 0 0 0 5 9.5C5 14.8 12 22 12 22z" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <circle cx="12" cy="9.5" r="2.4" stroke="currentColor" strokeWidth="1.6" fill="none" />
      </>
    ),
  },
  {
    key: "phone",
    label: "تلفن دفتر",
    value: info.phone,
    icon: (
      <path
        d="M3 5c0 9 7 16 16 16l3-4-6-3-2 2c-3-1.5-5.5-4-7-7l2-2-3-6-3 4z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
        fill="none"
      />
    ),
  },
  {
    key: "mobile",
    label: "موبایل",
    value: info.mobile,
    icon: (
      <>
        <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M11 18h2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </>
    ),
  },
  {
    key: "email",
    label: "ایمیل",
    value: info.email,
    icon: (
      <>
        <rect x="2" y="5" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M3 6l9 7 9-7" stroke="currentColor" strokeWidth="1.6" fill="none" />
      </>
    ),
  },
  {
    key: "hours",
    label: "ساعات پاسخگویی",
    value: info.hours,
    icon: (
      <>
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" fill="none" />
        <path d="M12 7v5l3.5 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
      </>
    ),
  },
];

function InfoRow({ icon, label, value, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
    >
      <GlassPanel noCorners className="flex items-center gap-4 px-5 py-4 hover:border-[#006a9c]/40 transition-colors duration-300">
        <div className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center bg-[#006a9c]/10 text-[#006a9c]">
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            {icon}
          </svg>
        </div>
        <div className="min-w-0">
          <p className="text-[10.5px] tracking-[0.15em] text-gray-500 uppercase mb-1">{label}</p>
          <p className="text-[14px] text-white/90 leading-relaxed break-words">{value}</p>
        </div>
      </GlassPanel>
    </motion.div>
  );
}

export default function ContactUs() {
  const mapSrc = `https://api.neshan.org/v5/static?key=${CONTACT_INFO.neshanApiKey}&type=standard-night&center=${CONTACT_INFO.lat},${CONTACT_INFO.lng}&zoom=15&size=1280x480`;

  return (
    <section dir="rtl" className="relative bg-[#0a0a0a] font-vazir min-h-screen pb-24 overflow-hidden">

      <div className="relative w-full min-h-[560px] md:min-h-[640px] flex items-end overflow-hidden">
        <Image
          src={"/image-Portfolio/image-2.jpg"}
          alt="دفتر مرکزی استودیوی معماری"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/20" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/10 via-transparent to-[#0a0a0a]/40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-20 w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[10px] tracking-[0.3em] text-[#3bb1ec] font-bold uppercase mb-3"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-[34px] md:text-[54px] font-light text-white leading-tight max-w-2xl"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
          >
            بیایید درباره‌ی <span className="font-bold">پروژه‌ی بعدی‌تان</span> صحبت کنیم
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-[14px] text-gray-300 mt-5 max-w-lg leading-relaxed"
          >
            تیم طراحی ما آماده‌ی شنیدن ایده‌ی شماست؛ از یک آپارتمان مسکونی تا یک
            مجموعه‌ی تجاری بزرگ. فرم زیر را پر کنید یا مستقیم تماس بگیرید.
          </motion.p>
        </div>
      </div>

      <div
        className="pointer-events-none absolute left-0 right-0 bottom-0 opacity-[0.04]"
        style={{
          top: "560px",
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-1 lg:grid-cols-5 gap-8 mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 relative rounded-2xl overflow-hidden min-h-[420px] border border-white/5"
        >
          <Image src={CONTACT_INFO.officeImage} alt="دفتر مرکزی استودیوی معماری" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
          <div className="absolute bottom-0 right-0 p-6">
            <p className="text-white text-[15px] font-medium">دفتر مرکزی</p>
            <p className="text-gray-300 text-[12px] mt-1">تهران، ایران</p>
          </div>
        </motion.div>

        <div className="lg:col-span-3 flex flex-col gap-4">
          {infoItems(CONTACT_INFO).map((item, i) => (
            <InfoRow key={item.key} icon={item.icon} label={item.label} value={item.value} index={i} />
          ))}
        </div>
      </div>

      {/* ── فرم تماس (بدون محدودیت عرض، به‌همون پهنایی که خودش تعریف کرده) ── */}
      <div className="relative mt-8">
        <Popup />
      </div>

      {/* ── نقشه (نشان) ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative max-w-7xl mx-auto px-4 md:px-8 mt-6"
      >
        <GlassPanel noCorners className="overflow-hidden p-2">
          <div className="relative w-full h-[420px] rounded-xl overflow-hidden bg-[#111]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={mapSrc}
              alt="موقعیت دفتر روی نقشه‌ی نشان"
              className="w-full h-full object-cover"
            />
            {/* پین موقعیت دفتر، وسط تصویر */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full">
              <svg viewBox="0 0 24 24" className="w-9 h-9 text-[#006a9c] drop-shadow-[0_4px_8px_rgba(0,0,0,0.6)]">
                <path
                  d="M12 22s7-7.2 7-12.5A7 7 0 0 0 5 9.5C5 14.8 12 22 12 22z"
                  fill="currentColor"
                  stroke="white"
                  strokeWidth="0.8"
                />
                <circle cx="12" cy="9.5" r="2.6" fill="white" />
              </svg>
            </div>
            <div className="absolute inset-0 pointer-events-none ring-1 ring-white/10 rounded-xl" />
            <div className="absolute bottom-4 left-4 text-[10px] text-white/50 bg-black/40 px-2 py-1 rounded-md backdrop-blur-sm">
              نقشه‌ی نشان
            </div>
          </div>
        </GlassPanel>
        <p className="text-[11px] text-gray-600 mt-3">
          برای فعال‌سازی نقشه، کلید API نشان رو از{" "}
          <a href="https://platform.neshan.org" target="_blank" rel="noreferrer" className="text-[#006a9c] hover:underline">
            platform.neshan.org
          </a>{" "}
          بگیرید و جای <code className="text-gray-400">neshanApiKey</code> در بالای فایل جایگزین کنید.
        </p>
      </motion.div>
    </section>
  );
}