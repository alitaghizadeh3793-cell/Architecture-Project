"use client";

import Image from "next/image";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const processDataDetails = {
  "process-01": {
    title: "تحلیل و کالبدشکافی",
    subtitle: "گام اول: شناخت دقیق بستر پروژه",
    coverImage: "/image-Service/detail-1-1.jpg",
    introduction:
      "پیش از هر اقدامی، شناخت عمیق از بستر فیزیکی، عملکردی و زیبایی‌شناختی پروژه، پایه‌گذار یک طراحی موفق است. در این مرحله، تیم مهندسی مهراز با رویکردی علمی و دقیق، تمامی ابعاد سازه، تأسیسات، نورگیرها، مسیرهای دسترسی، اقلیم منطقه و حتی فرهنگ ساکنان را مورد بررسی قرار می‌دهد. این تحلیل چندلایه، نه‌تنها محدودیت‌ها را آشکار می‌سازد، بلکه فرصت‌های پنهان طراحی را نیز نمایان می‌کند.",
    technicalDetails:
      "بررسی مقاومت مصالح موجود، آنالیز تنش‌های سازه‌ای، مطالعه مسیرهای تأسیسات مکانیکی و الکتریکی، ارزیابی کیفیت هوای داخلی، آنالیز نور روز و سایه‌اندازی، و تهیه نقشه‌های توپوگرافی دقیق از جمله فعالیت‌های تخصصی این فاز است. تمام داده‌ها با استفاده از نرم‌افزارهای شبیه‌سازی مدل‌سازی می‌شوند.",
    subSteps: [
      "بازدید میدانی و عکس‌برداری هوایی با پهپاد برای ثبت نمای کلی پروژه",
      "بررسی اسناد و مدارک موجود (نقشه‌های ساختمانی، تأسیساتی، مدارک مالکیت)",
      "آزمایش‌های غیرمخرب بر روی سازه (التراسونیک، اسکلرومتری، رادار نفوذی)",
      "مصاحبه با کارفرما و بهره‌برداران جهت شناسایی نیازهای عملکردی و سلیقه‌ها",
      "تهیه گزارش تحلیلی اولیه با شناسایی نقاط قوت، ضعف و فرصت‌های بهبود",
      "بررسی شرایط اقلیمی و همسایگی برای طراحی هماهنگ با محیط",
    ],
    timeline: [
      { phase: "بررسی اسناد و مدارک", duration: "۲ روز" },
      { phase: "بازدید میدانی و برداشت", duration: "۳ روز" },
      { phase: "آزمایش‌های سازه‌ای", duration: "۵ روز" },
      { phase: "تحلیل داده‌ها و تهیه گزارش", duration: "۴ روز" },
      { phase: "جلسه ارائه گزارش به کارفرما", duration: "۱ روز" },
    ],
    tips: [
      "همیشه بیش از یک منبع برای اطلاعات سازه‌ای استفاده کنید تا دقت تحلیل افزایش یابد.",
      "نورگیری طبیعی را با توجه به مسیر خورشید در فصول مختلف شبیه‌سازی کنید.",
      "به جزئیات پنهان مانند ترک‌های قدیمی، رطوبت‌زدگی یا تغییرات غیرمجاز توجه ویژه داشته باشید.",
      "شرایط خاک و نوع پی‌سازی را حتماً بررسی کنید، زیرا تأثیر مستقیم بر ایمنی سازه دارد.",
    ],
    faq: [
      {
        q: "چرا کالبدشکافی سازه ضروری است؟",
        a: "زیرا هرگونه طراحی بدون شناخت دقیق از وضعیت موجود، ممکن است منجر به هزینه‌های اضافی، تأخیر یا حتی ریسک‌های ایمنی شود. این مرحله مانند عکس‌برداری پزشکی قبل از جراحی عمل می‌کند و دید کاملی از وضعیت سازه به ما می‌دهد.",
      },
      {
        q: "آیا این مرحله برای پروژه‌های نوسازی هم لازم است؟",
        a: "بله، به‌ویژه در پروژه‌های نوسازی که با سازه‌های قدیمی سروکار داریم، تحلیل دقیق می‌تواند از بروز مشکلات غیرمنتظره مانند ریزش یا ترک‌خوردگی جلوگیری کند.",
      },
      {
        q: "چه مدت زمانی برای این مرحله نیاز است؟",
        a: "بسته به ابعاد پروژه، معمولاً بین ۷ تا ۱۵ روز کاری زمان می‌برد تا تمام بررسی‌ها و تحلیل‌ها انجام شود.",
      },
    ],
    images: [
      "/image-Service/detail-1-1.jpg",
      "/image-Service/detail-1-2.jpg",
      "/image-Service/detail-1-3.jpg",
    ],
  },

  "process-02": {
    title: "استراتژی و دیزاین",
    subtitle: "گام دوم: تدوین مفهوم و راهبرد طراحی",
    coverImage: "/image-Service/detail-2-1.jpg",
    introduction:
      "در این فاز، تیم طراحی مهراز با نگاهی معمارانه، بین سبک شخصی شما و اصول نوین مهندسی، تعادلی میان زیبایی و عملکرد خلق می‌کند. خروجی تحلیل مرحله‌ی قبل، مبنای شکل‌گیری یک مفهوم طراحی منسجم می‌شود؛ مفهومی که نه فقط زیباست، بلکه پاسخ‌گوی واقعی نیاز، بودجه و سبک زندگی کارفرماست. این مرحله، پل ارتباطی میان «شناخت» و «تجسم» است.",
    technicalDetails:
      "تدوین برنامه‌ی فیزیکی فضا (Space Program)، طراحی چیدمان اولیه‌ی پلان‌ها، انتخاب پالت مصالح و رنگ متناسب با اقلیم و سبک درخواستی، بررسی امکان‌سنجی سازه‌ای پیشنهادها با مهندس محاسب، و تدوین راهبرد بهینه‌سازی مصرف انرژی از جمله فعالیت‌های اصلی این فاز است. تمام گزینه‌ها در قالب مودبورد و اسکیس‌های مفهومی مستندسازی می‌شوند.",
    subSteps: [
      "تدوین کانسپت اولیه بر اساس خروجی فاز تحلیل و نیازهای کارفرما",
      "طراحی چیدمان فضایی و پلان‌های مفهومی (Concept Plan)",
      "انتخاب پالت مصالح، رنگ و متریال متناسب با سبک درخواستی",
      "مشاوره با مهندس سازه برای امکان‌سنجی فنی ایده‌های طراحی",
      "تهیه مودبورد بصری و نمونه‌های الهام‌بخش برای هر فضا",
      "برگزاری جلسه‌ی ارائه به کارفرما و دریافت بازخورد برای اصلاح مسیر",
    ],
    timeline: [
      { phase: "تدوین کانسپت اولیه", duration: "۳ روز" },
      { phase: "طراحی پلان‌های مفهومی", duration: "۴ روز" },
      { phase: "انتخاب مصالح و پالت رنگی", duration: "۲ روز" },
      { phase: "بررسی فنی با مهندس سازه", duration: "۲ روز" },
      { phase: "ارائه به کارفرما و اصلاحات", duration: "۲ روز" },
    ],
    tips: [
      "همیشه چند گزینه‌ی طراحی متفاوت آماده کنید تا کارفرما بتواند مقایسه‌ی واقعی داشته باشد.",
      "پالت رنگی را ابتدا در نور طبیعی همان فضا تست کنید، نه زیر نور مصنوعی دفتر طراحی.",
      "در انتخاب مصالح، دوام و هزینه‌ی نگهداری را همان‌قدر مهم بدانید که ظاهر اولیه.",
      "کانسپت طراحی را از همان ابتدا با محدودیت‌های سازه‌ای هماهنگ کنید تا در اجرا غافلگیر نشوید.",
    ],
    faq: [
      {
        q: "کانسپت طراحی دقیقاً یعنی چه؟",
        a: "کانسپت، ایده‌ی مرکزی و داستان طراحی پروژه‌ی شماست؛ خط راهنمایی که تمام تصمیمات بعدی از انتخاب مصالح تا نورپردازی، حول آن شکل می‌گیرد.",
      },
      {
        q: "آیا در این مرحله می‌شود نظر خودم را هم اعمال کرد؟",
        a: "دقیقاً هدف همین است. جلسه‌ی ارائه در پایان این فاز، فرصتی است تا سلیقه و بازخورد شما مستقیماً در طراحی نهایی اعمال شود.",
      },
      {
        q: "اگر از کانسپت پیشنهادی راضی نباشم چه می‌شود؟",
        a: "معمولاً تا رسیدن به نتیجه‌ی مطلوب، چند دور بازنگری در همین فاز انجام می‌شود، بدون اینکه هزینه یا زمان‌بندی پروژه به‌طور محسوس افزایش یابد.",
      },
    ],
    images: [
      "/image-Service/detail-2-1.jpg",
      "/image-Service/detail-2-2.jpg",
      "/image-Service/detail-2-3.jpg",
    ],
  },

  "process-03": {
    title: "تداعی سه‌بعدی",
    subtitle: "گام سوم: تجسم فضا پیش از هرگونه تغییر فیزیکی",
    coverImage: "/image-Service/detail-3-1.jpg",
    introduction:
      "پیش از هرگونه تغییر فیزیکی، فضاهای آینده را در قالب مدل‌های دقیق سه‌بعدی به شما نشان می‌دهیم تا با اطمینان کامل به استقبال تحول بروید. این مرحله فاصله‌ی میان «تصور» و «واقعیت» را از بین می‌برد؛ هر گوشه از خانه یا دفتر آینده‌ی شما، پیش از اجرا، قابل مشاهده و بازبینی است. تصمیم‌گیری در این نقطه، بسیار کم‌هزینه‌تر از تغییر در حین ساخت است.",
    technicalDetails:
      "مدل‌سازی دقیق سه‌بعدی بر پایه‌ی نقشه‌های تأییدشده، اعمال متریال و بافت واقعی روی سطوح، رندرگیری با شبیه‌سازی نور طبیعی و مصنوعی در ساعات مختلف روز، و تهیه‌ی واک‌ترو (Walkthrough) مجازی از فضاها از جمله فعالیت‌های تخصصی این فاز است. در پروژه‌های بزرگ‌تر، امکان بازدید با واقعیت مجازی (VR) نیز فراهم می‌شود.",
    subSteps: [
      "ساخت مدل سه‌بعدی دقیق بر اساس پلان‌ها و مقاطع نهایی",
      "اعمال متریال، بافت و رنگ واقعی روی تمام سطوح مدل",
      "رندرگیری با نورپردازی طبیعی و مصنوعی برای ساعات مختلف روز",
      "تهیه واک‌ترو (پیمایش مجازی) از مسیرهای اصلی فضا",
      "بررسی مشترک مدل با کارفرما از زوایای مختلف و ثبت بازخورد",
      "اعمال اصلاحات نهایی و تأیید مدل پیش از ورود به فاز اجرا",
    ],
    timeline: [
      { phase: "مدل‌سازی سه‌بعدی پایه", duration: "۴ روز" },
      { phase: "اعمال متریال و بافت", duration: "۲ روز" },
      { phase: "رندرگیری و نورپردازی", duration: "۳ روز" },
      { phase: "تهیه واک‌ترو مجازی", duration: "۲ روز" },
      { phase: "بازبینی و اصلاحات نهایی", duration: "۲ روز" },
    ],
    tips: [
      "رندرها را همیشه در چند سناریوی نوری متفاوت (روز، غروب، شب) بررسی کنید.",
      "به مقیاس واقعی اثاثیه در مدل دقت کنید تا حس فضا گمراه‌کننده نباشد.",
      "اگر امکانش هست، پیمایش مجازی را حتماً تجربه کنید، نه فقط تصاویر ثابت را.",
      "هر تغییری که در این مرحله بخواهید اعمال کنید، همینجا بگویید؛ تغییر در فاز اجرا هزینه‌بر است.",
    ],
    faq: [
      {
        q: "تفاوت رندر با واقعیت نهایی چقدر است؟",
        a: "با استفاده از متریال و نورپردازی واقع‌گرایانه، رندرهای ما تا حد بسیار زیادی به نتیجه‌ی نهایی نزدیک هستند؛ اختلاف عمده معمولاً فقط در جزئیات بسیار ریز نورهای محیطی دیده می‌شود.",
      },
      {
        q: "آیا امکان دیدن فضا با واقعیت مجازی وجود دارد؟",
        a: "بله، برای پروژه‌های متوسط و بزرگ، امکان بازدید از مدل با هدست VR فراهم است تا حس واقعی حضور در فضا را پیش از اجرا تجربه کنید.",
      },
      {
        q: "چند بار می‌توانم درخواست اصلاح مدل بدهم؟",
        a: "تا رسیدن به نتیجه‌ی رضایت‌بخش همراه شما هستیم؛ معمولاً دو تا سه دور بازبینی برای نهایی‌شدن مدل کافی است.",
      },
    ],
    images: [
      "/image-Service/detail-3-1.jpg",
      "/image-Service/detail-3-2.jpg",
      "/image-Service/detail-3-3.jpg",
    ],
  },

  "process-04": {
    title: "اجرای دقیق و تعالی",
    subtitle: "گام چهارم: از نقشه تا تحویل کلید",
    coverImage: "/image-Service/detail-4-1.jpg",
    introduction:
      "نظارت موشکافانه بر تک‌تک جزئیات اجرایی توسط متخصصان مهراز تا روز تحویل و رسیدن به فضایی که در آن روح زندگی جاریست. در این مرحله، طراحی و مدل‌های تأییدشده وارد فاز ساخت واقعی می‌شوند؛ تیم نظارت مهراز به‌صورت مستمر کیفیت اجرا، زمان‌بندی و انطباق با نقشه‌ها را کنترل می‌کند تا نتیجه‌ی نهایی دقیقاً همان چیزی باشد که دیده و تأیید کرده‌اید.",
    technicalDetails:
      "هماهنگی و مدیریت پیمانکاران و تأمین‌کنندگان، کنترل کیفیت مصالح ورودی به کارگاه، نظارت فنی روزانه بر اجرای سازه، تأسیسات و نازک‌کاری، بازرسی‌های دوره‌ای مطابق چک‌لیست فنی، و تست و راه‌اندازی نهایی سیستم‌های مکانیکی و الکتریکی از جمله فعالیت‌های این فاز است. گزارش پیشرفت پروژه به‌صورت هفتگی برای کارفرما ارسال می‌شود.",
    subSteps: [
      "هماهنگی و انعقاد قرارداد با پیمانکاران و تأمین‌کنندگان معتبر",
      "نظارت روزانه بر کیفیت اجرا و انطباق با نقشه‌های مصوب",
      "کنترل زمان‌بندی پروژه و پیگیری بودجه در برابر پیش‌بینی اولیه",
      "بازرسی‌های دوره‌ای فنی از سازه، تأسیسات و نازک‌کاری",
      "تست و راه‌اندازی سیستم‌های مکانیکی، برقی و هوشمندسازی",
      "تحویل نهایی پروژه همراه با آموزش بهره‌برداری به کارفرما",
    ],
    timeline: [
      { phase: "هماهنگی پیمانکاران و شروع کار", duration: "۵ روز" },
      { phase: "اجرای سازه و زیرساخت", duration: "۲۵ روز" },
      { phase: "تأسیسات و نازک‌کاری", duration: "۲۰ روز" },
      { phase: "تست و راه‌اندازی سیستم‌ها", duration: "۴ روز" },
      { phase: "تحویل نهایی و آموزش بهره‌برداری", duration: "۱ روز" },
    ],
    tips: [
      "گزارش‌های هفتگی پیشرفت کار را حتماً مرور کنید تا از روند اجرا مطلع باشید.",
      "پیش از پوشش نهایی دیوارها، از تأسیسات زیرکار حتماً عکس و مستندسازی داشته باشید.",
      "برای تغییرات احتمالی در حین اجرا، همیشه یک ذخیره‌ی زمانی و بودجه‌ای در نظر بگیرید.",
      "تحویل نهایی را با یک بازدید کامل و چک‌لیست دقیق انجام دهید، نه فقط از روی ظاهر.",
    ],
    faq: [
      {
        q: "در طول اجرا چقدر در جریان پیشرفت کار قرار می‌گیرم؟",
        a: "به‌صورت هفتگی گزارش تصویری و مکتوب پیشرفت پروژه براتون ارسال می‌شود و در نقاط عطف کلیدی، بازدید حضوری از کارگاه هم هماهنگ می‌شود.",
      },
      {
        q: "اگر در حین اجرا بخواهم تغییری اعمال کنم چه می‌شود؟",
        a: "تغییرات کوچک معمولاً قابل اعمال هستند، اما بسته به مرحله‌ی اجرا ممکن است بر زمان‌بندی و هزینه تأثیر بگذارند؛ تیم پروژه پیش از هر تغییر، این موارد رو شفاف باهاتون در میان می‌گذارد.",
      },
      {
        q: "بعد از تحویل، پشتیبانی هم وجود دارد؟",
        a: "بله، پس از تحویل نهایی، دوره‌ی پشتیبانی فنی برای رفع هرگونه ایراد احتمالی و آموزش کامل بهره‌برداری از سیستم‌های نصب‌شده ارائه می‌شود.",
      },
    ],
    images: [
      "/image-Service/detail-4-1.jpg",
      "/image-Service/detail-4-2.jpg",
      "/image-Service/detail-4-3.jpg",
    ],
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

function BlueprintCorner({ className = "" }) {
  return (
    <svg viewBox="0 0 40 40" className={`absolute w-6 h-6 text-[#006a9c]/70 ${className}`} fill="none">
      <path d="M2 2 L2 16 M2 2 L16 2" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function DarkPanel({ children, className = "", noCorners = false }) {
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

function LightCard({ children, className = "" }) {
  return (
    <div
      className={`rounded-2xl bg-white border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

function SectionHeading({ eyebrow, title, boldWord, dark = true }) {
  return (
    <div className="mb-10">
      <p
        className={`text-[10px] tracking-[0.3em] font-bold uppercase mb-3 ${
          dark ? "text-[#3bb1ec]" : "text-[#006a9c]"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className={`text-[26px] md:text-[34px] font-light ${dark ? "text-white" : "text-gray-900"}`}>
        {title} <span className="font-bold">{boldWord}</span>
      </h2>
    </div>
  );
}

export default function ProcessDetailPage() {
  const { id } = useParams() || { id: "process-01" };
  const data = processDataDetails[id] || processDataDetails["process-01"];
  const [selectedImage, setSelectedImage] = useState(null);

  // ── استیت فیک برای متن هر سکشن ──
  // فعلاً فقط مقدار اولیه از data میاد، ولی چون داخل state هستن،
  // بعداً می‌شه از پنل ادمین یا هر فرم دیگه‌ای این مقادیر رو ست/ادیت کرد.
  const [introContent, setIntroContent] = useState({
    eyebrow: "Introduction",
    title: "درباره‌ی این",
    boldWord: "فرآیند",
    text: data.introduction,
  });

  const [techContent, setTechContent] = useState({
    eyebrow: "Technical Details",
    title: "جزئیات فنی و",
    boldWord: "مراحل اجرایی",
    text: data.technicalDetails,
  });

  const [timelineContent, setTimelineContent] = useState({
    eyebrow: "Timeline",
    title: "بازه‌های",
    boldWord: "زمانی",
  });

  const [faqContent, setFaqContent] = useState({
    eyebrow: "FAQ",
    title: "پرسش‌های",
    boldWord: "متداول",
  });

  const [galleryContent, setGalleryContent] = useState({
    eyebrow: "Gallery",
    title: "گالری",
    boldWord: "پروژه",
  });

  if (!data) {
    notFound();
  }

  return (
    <main dir="rtl" className="min-h-screen bg-[#0a0a0a] font-vazir">
      {/* ===== هیرو با تصویر تمام‌عرض ===== */}
      <div className="relative w-full min-h-[520px] md:min-h-[600px] flex items-end overflow-hidden bg-[#0a0a0a]">
        <Image src="/image-Service/image-2.jpg" alt={data.title} fill priority className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/70 to-[#0a0a0a]/20" />
        <div className="absolute inset-0 bg-gradient-to-l from-[#0a0a0a]/10 via-transparent to-[#0a0a0a]/40" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="relative z-20 max-w-7xl mx-auto px-4 md:px-8 pb-16 md:pb-20 w-full"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.25em] uppercase px-5 py-2 rounded-full mb-6"
            style={{
              background: "rgba(255,255,255,0.06)",
              backdropFilter: "blur(14px)",
              WebkitBackdropFilter: "blur(14px)",
              border: "1px solid rgba(59,177,236,0.35)",
              color: "#3bb1ec",
            }}
          >
            فرآیند {id?.split("-")[1] || "۰۱"}
          </motion.span>
          <motion.h1
            variants={fadeUp}
            className="text-[36px] md:text-[56px] font-light text-white leading-tight max-w-2xl"
            style={{ textShadow: "0 4px 24px rgba(0,0,0,0.5)" }}
          >
            {data.title}
          </motion.h1>
          <motion.p variants={fadeUp} className="text-[14px] md:text-[16px] text-gray-300 mt-5 max-w-lg leading-relaxed">
            {data.subtitle}
          </motion.p>
        </motion.div>
      </div>

      {/* ===== بخش تیره: بازگشت + مقدمه + خلاصه ===== */}
      <div className="relative bg-[#0a0a0a] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="pointer-events-none absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] bg-[#006a9c]/10" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-all duration-300 mb-12 border border-white/10 px-5 py-2.5 rounded-xl bg-white/[0.03] backdrop-blur-md hover:bg-white/[0.06] hover:border-[#006a9c]/40"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              بازگشت به صفحه اصلی
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <SectionHeading eyebrow={introContent.eyebrow} title={introContent.title} boldWord={introContent.boldWord} dark />
              <p className="text-[15px] md:text-[16px] leading-[2.1] text-gray-400 text-justify">
                {introContent.text}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <DarkPanel className="p-6">
                <p className="text-[10px] tracking-[0.2em] text-[#3bb1ec] font-bold uppercase mb-5">
                  خلاصه‌ی فرآیند
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-[12.5px] text-gray-500">گام‌های اجرایی</span>
                    <span className="text-[14px] font-bold text-white">{data.subSteps.length}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-white/5 pb-4">
                    <span className="text-[12.5px] text-gray-500">بازه‌های زمان‌بندی</span>
                    <span className="text-[14px] font-bold text-white">{data.timeline.length}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-[12.5px] text-gray-500">تصاویر گالری</span>
                    <span className="text-[14px] font-bold text-white">{data.images.length}</span>
                  </div>
                </div>
              </DarkPanel>
            </motion.div>
          </div>
        </div>
      </div>

      {/* ===== بخش روشن: جزئیات فنی + مراحل اجرایی ===== */}
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading eyebrow={techContent.eyebrow} title={techContent.title} boldWord={techContent.boldWord} dark={false} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <LightCard className="p-6 md:p-8">
              <p className="leading-[2.1] text-gray-600 text-justify">{techContent.text}</p>
            </LightCard>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {data.subSteps.map((step, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                transition={{ delay: idx * 0.05 }}
              >
                <LightCard className="p-5 flex items-start gap-4 hover:border-[#006a9c]/30 transition-colors duration-300">
                  <span className="shrink-0 w-9 h-9 rounded-full flex items-center justify-center font-bold text-[13px] bg-[#006a9c]/10 text-[#006a9c]">
                    {idx + 1}
                  </span>
                  <p className="text-gray-600 text-[13.5px] leading-relaxed pt-1.5">{step}</p>
                </LightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== بخش تیره: بازه‌های زمانی (استپر) ===== */}
      <div className="relative bg-[#0a0a0a] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] rounded-full blur-[140px] bg-[#006a9c]/10" />

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading eyebrow={timelineContent.eyebrow} title={timelineContent.title} boldWord={timelineContent.boldWord} dark />
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-2">
              <DarkPanel className="p-6 md:p-8">
                <div className="relative">
                  <div className="absolute top-2 bottom-2 right-[18px] w-px bg-white/10" />
                  <div className="flex flex-col gap-7">
                    {data.timeline.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 12 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.06, duration: 0.4 }}
                        className="relative flex items-center gap-5"
                      >
                        <span className="relative z-10 shrink-0 w-9 h-9 rounded-full flex items-center justify-center bg-[#0a0a0a] border-2 border-[#006a9c] text-[#3bb1ec] font-bold text-[12px]">
                          {idx + 1}
                        </span>
                        <div className="flex-1 flex items-center justify-between gap-4 border-b border-white/5 pb-4">
                          <p className="text-gray-300 text-[13.5px]">{item.phase}</p>
                          <span className="shrink-0 text-[12px] font-bold text-[#3bb1ec] bg-[#006a9c]/10 px-3 py-1 rounded-full">
                            {item.duration}
                          </span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </DarkPanel>
            </div>

            {/* نکات تخصصی */}
            {data.tips?.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <DarkPanel className="p-6 md:p-8 h-full">
                  <p className="text-[10px] tracking-[0.2em] text-[#3bb1ec] font-bold uppercase mb-5">
                    نکات تخصصی
                  </p>
                  <div className="flex flex-col gap-4">
                    {data.tips.map((tip, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <svg className="w-4 h-4 shrink-0 text-[#3bb1ec] mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <p className="text-gray-400 text-[13px] leading-relaxed">{tip}</p>
                      </div>
                    ))}
                  </div>
                </DarkPanel>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* ===== بخش روشن: پرسش‌های متداول ===== */}
      <div className="relative bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading eyebrow={faqContent.eyebrow} title={faqContent.title} boldWord={faqContent.boldWord} dark={false} />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.faq.map((item, idx) => (
              <motion.div key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: idx * 0.05 }}>
                <LightCard className="p-6 md:p-7 hover:border-[#006a9c]/30 transition-colors duration-300 h-full">
                  <h3 className="text-[14.5px] font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="text-[#006a9c]">؟</span> {item.q}
                  </h3>
                  <p className="text-gray-500 text-[13px] leading-relaxed pr-4 border-r-2 border-[#006a9c]/25">
                    {item.a}
                  </p>
                </LightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ===== بخش تیره: گالری + CTA ===== */}
      <div className="relative bg-[#0a0a0a] overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8 py-20">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <SectionHeading eyebrow={galleryContent.eyebrow} title={galleryContent.title} boldWord={galleryContent.boldWord} dark />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-20">
            {data.images.map((img, idx) => (
              <motion.div
                key={idx}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={{
                  hidden: { opacity: 0, scale: 0.94 },
                  visible: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: idx * 0.08 } },
                }}
                onClick={() => setSelectedImage(img)}
                className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer group border border-white/10 hover:border-[#006a9c]/50 transition-all duration-500"
              >
                <Image
                  src={img}
                  alt={`${data.title} - تصویر ${idx + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* فوتر: اشتراک‌گذاری + CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap items-center justify-between gap-6 border-t border-white/10 pt-10"
          >
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-[13px] font-medium">اشتراک‌گذاری این فرآیند:</span>
              <div className="flex gap-2">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.04] hover:bg-[#006a9c] transition-colors duration-300 text-gray-400 hover:text-white border border-white/10 hover:border-transparent">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </button>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-white/[0.04] hover:bg-[#006a9c] transition-colors duration-300 text-gray-400 hover:text-white border border-white/10 hover:border-transparent">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12c0-3.403 2.759-6.162 6.162-6.162s6.162 2.759 6.162 6.162-2.759 6.162-6.162 6.162-6.162-2.759-6.162-6.162zm11.162 0c0-2.762-2.238-5-5-5s-5 2.238-5 5 2.238 5 5 5 5-2.238 5-5zm1.5-6.5c0 .966-.784 1.75-1.75 1.75s-1.75-.784-1.75-1.75.784-1.75 1.75-1.75 1.75.784 1.75 1.75z" />
                  </svg>
                </button>
              </div>
            </div>
            <Link
              href="/contact"
              className="group relative inline-flex items-center gap-3 text-white px-8 py-3.5 rounded-xl transition-all duration-300 text-sm font-bold overflow-hidden"
              style={{
                background: "linear-gradient(180deg, #0aa1e8 0%, #006a9c 55%, #00507a 100%)",
                boxShadow: "0 10px 30px rgba(0,106,156,0.4)",
              }}
            >
              مشاوره رایگان پروژه
              <svg className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>

      {/* ===== مودال گالری ===== */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-[#0a0a0a]/95 flex items-center justify-center p-4 md:p-10 backdrop-blur-xl"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full max-h-[90vh] rounded-2xl border border-white/10 overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="تصویر بزرگ‌شده"
                width={1600}
                height={900}
                className="w-full h-[85vh] object-contain bg-[#0a0a0a]"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 w-11 h-11 flex items-center justify-center bg-black/60 hover:bg-[#006a9c] rounded-full text-white/80 hover:text-white transition-all duration-300 border border-white/10 backdrop-blur-md"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}