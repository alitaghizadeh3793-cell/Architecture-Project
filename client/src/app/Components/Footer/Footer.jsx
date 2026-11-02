"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "خانه", href: "/" },
    { name: "نمونه کار", href: "/projects" },
    { name: "خدمات", href: "/services" },
    { name: "درباره ما", href: "/about" },
    { name: "ارتباط با ما", href: "/ContactUs" },
  ];

  const services = [
    { name: "طراحی داخلی", href: "/services/interior" },
    { name: "طراحی معماری", href: "/services/architecture" },
    { name: "دکوراسیون", href: "/services/decoration" },
    { name: "نورپردازی", href: "/services/lighting" },
    { name: "طراحی فضاهای اداری", href: "/services/office" },
  ];

  const socialLinks = [
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
        </svg>
      ),
      href: "https://instagram.com",
      color: "hover:text-pink-500",
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0a12 12 0 00-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      href: "https://telegram.org",
      color: "hover:text-blue-400",
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      href: "https://whatsapp.com",
      color: "hover:text-green-500",
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      href: "https://linkedin.com",
      color: "hover:text-blue-600",
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      ),
      href: "https://youtube.com",
      color: "hover:text-red-600",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <footer className="relative [direction:ltr] bg-gradient-to-b from-[#0a0a0a] via-[#0f0f0f] to-black pt-20 pb-6 px-4 md:px-8 overflow-hidden font-vazir">
      {/* المان‌های تزئینی پس‌زمینه */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#006a9c]/[0.04] rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#006a9c]/[0.03] rounded-full blur-[100px]" />
        <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-[#006a9c]/[0.02] rounded-full blur-[80px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.015)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>

      {/* واترمارک */}
      <p className="absolute bottom-20 right-8 text-[120px] md:text-[160px] font-black text-white/[0.02] leading-none tracking-widest pointer-events-none select-none">
        ARCH STUDIO
      </p>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* ── بخش بالایی فوتر ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-white/[0.06]"
        >
          {/* ستون ۱: درباره (سمت راست) */}
          <motion.div variants={itemVariants} className="space-y-5 md:order-4">
            <Link
              href="/"
              className="flex items-center gap-2.5 group justify-end md:justify-start"
            >
              <div className="relative w-10 h-10 order-1 md:order-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#006a9c] to-[#00a3ff] rounded-xl -rotate-3 group-hover:-rotate-6 transition-transform duration-300" />
                <div className="absolute inset-0.5 bg-black rounded-xl flex items-center justify-center font-bold text-white text-sm">
                  A
                </div>
              </div>
              <div className="text-white font-semibold tracking-[3px] text-base leading-none order-2 md:order-2">
                ARCH<span className="text-[#006a9c]">STUDIO</span>
              </div>
            </Link>

            <p className="text-white/40 text-sm leading-[1.9] max-w-xs text-right md:text-left">
              گروه معماری و طراحی داخلی با بیش از ۱۲ سال تجربه در خلق فضاهای
              منحصر‌به‌فرد و لوکس.
            </p>

            {/* شبکه‌های اجتماعی */}
            <div className="flex items-center gap-3 pt-2 justify-end md:justify-start">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.06] flex items-center justify-center text-white/40 transition-all duration-300 hover:bg-[#006a9c]/20 hover:border-[#006a9c]/30 ${social.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* ستون ۲: لینک‌های سریع */}
          <motion.div variants={itemVariants} className="space-y-5 md:order-1">
            <h4 className="text-white font-bold text-base text-right md:text-left">
              لینک‌های <span className="text-[#006a9c]">سریع</span>
            </h4>
            <ul className="space-y-3 text-right md:text-left">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-white/40 text-sm hover:text-[#006a9c] transition-colors duration-300 flex items-center gap-2 group justify-end md:justify-start"
                  >
                    <span className="order-2 md:order-1">{link.name}</span>
                    <span className="w-1 h-1 rounded-full bg-[#006a9c]/30 group-hover:bg-[#006a9c] transition-colors duration-300 order-1 md:order-2" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ستون ۳: خدمات */}
          <motion.div variants={itemVariants} className="space-y-5 md:order-2">
            <h4 className="text-white font-bold text-base text-right md:text-left">
              <span className="text-[#006a9c]">خدمات</span> ما
            </h4>
            <ul className="space-y-3 text-right md:text-left">
              {services.map((service) => (
                <li key={service.name}>
                  <Link
                    href={service.href}
                    className="text-white/40 text-sm hover:text-[#006a9c] transition-colors duration-300 flex items-center gap-2 group justify-end md:justify-start"
                  >
                    <span className="order-2 md:order-1">{service.name}</span>
                    <span className="w-1 h-1 rounded-full bg-[#006a9c]/30 group-hover:bg-[#006a9c] transition-colors duration-300 order-1 md:order-2" />
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ستون ۴: اطلاعات تماس */}
          <motion.div variants={itemVariants} className="space-y-5 md:order-3">
            <h4 className="text-white font-bold text-base text-right md:text-left">
              اطلاعات <span className="text-[#006a9c]">تماس</span>
            </h4>
            <ul className="space-y-4 text-right md:text-left">
              <li className="flex items-start gap-3 text-white/40 text-sm justify-end md:justify-start">
                <span className="order-2 md:order-1">
                  تهران، خیابان ولیعصر، پلاک ۱۲۳
                </span>
                <svg
                  className="w-5 h-5 text-[#006a9c] shrink-0 mt-0.5 order-1 md:order-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm justify-end md:justify-start">
                <a
                  href="tel:+982112345678"
                  className="order-2 md:order-1 hover:text-[#006a9c] transition-colors"
                >
                  +۹۸ ۲۱ ۱۲۳۴ ۵۶۷۸
                </a>
                <svg
                  className="w-5 h-5 text-[#006a9c] shrink-0 order-1 md:order-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm justify-end md:justify-start">
                <a
                  href="mailto:info@archstudio.com"
                  className="order-2 md:order-1 hover:text-[#006a9c] transition-colors"
                >
                  info@archstudio.com
                </a>
                <svg
                  className="w-5 h-5 text-[#006a9c] shrink-0 order-1 md:order-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </li>
              <li className="flex items-center gap-3 text-white/40 text-sm justify-end md:justify-start">
                <span className="order-2 md:order-1">
                  شنبه تا چهارشنبه: ۹ تا ۱۸
                </span>
                <svg
                  className="w-5 h-5 text-[#006a9c] shrink-0 order-1 md:order-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* ── بخش پایینی فوتر ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-white/30 text-xs"
        >
          <p className="text-center md:text-right">
            © {currentYear} <span className="text-[#006a9c]">ARCH STUDIO</span>{" "}
            - تمامی حقوق محفوظ است
          </p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="hover:text-[#006a9c] transition-colors"
            >
              حریم خصوصی
            </Link>
            <Link
              href="/terms"
              className="hover:text-[#006a9c] transition-colors"
            >
              قوانین و مقررات
            </Link>
            <Link
              href="/sitemap"
              className="hover:text-[#006a9c] transition-colors"
            >
              نقشه سایت
            </Link>
          </div>

          {/* خط تزئینی */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#006a9c]/20 to-transparent" />
        </motion.div>

        <motion.button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 left-8 w-12 h-12 rounded-full bg-[#006a9c] text-white shadow-lg shadow-[#006a9c]/30 flex items-center justify-center hover:shadow-xl hover:shadow-[#006a9c]/50 transition-all duration-300 hover:-translate-y-1 z-40"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </motion.button>
      </div>
    </footer>
  );
}
