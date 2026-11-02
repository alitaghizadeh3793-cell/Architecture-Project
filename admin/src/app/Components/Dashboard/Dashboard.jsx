"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  FolderKanban,
  MessageSquare,
  Users,
  Eye,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Server,
  Clock,
  ArrowLeft,
} from "lucide-react";

const stats = [
  { label: "پروژه‌های فعال", value: "۱۸", change: "+۳", up: true, icon: FolderKanban, percent: 72 },
  { label: "پیام‌های جدید", value: "۵", change: "+۲", up: true, icon: MessageSquare, percent: 40 },
  { label: "بازدید امروز", value: "۴۲۱", change: "-۶٪", up: false, icon: Eye, percent: 55 },
  { label: "اعضای تیم", value: "۷", change: "بدون تغییر", up: null, icon: Users, percent: 100 },
];

const recentMessages = [
  { name: "علی رضایی", subject: "درخواست مشاوره برای ویلای شمال", time: "۱۰ دقیقه پیش", unread: true },
  { name: "مریم کریمی", subject: "سوال درباره‌ی هزینه‌ی طراحی داخلی", time: "۱ ساعت پیش", unread: true },
  { name: "امیر صادقی", subject: "پیگیری پروژه‌ی دفتر کار", time: "۳ ساعت پیش", unread: false },
  { name: "نگار حسینی", subject: "درخواست نمونه‌کار بیشتر", time: "دیروز", unread: false },
];

const quickActions = [
  { label: "افزودن پروژه‌ی جدید", icon: FolderKanban, primary: true },
  { label: "افزودن عضو تیم", icon: Users, primary: false },
  { label: "افزودن خدمت جدید", icon: Plus, primary: false },
];

// کارت پایه‌ای مینیمال و شیک
function DashboardCard({ children, className = "", style = {} }) {
  return (
    <div
      className={`bg-white rounded-xl border border-neutral-200 shadow-sm ${className}`}
      style={style}
    >
      {children}
    </div>
  );
}

function StatCard({ label, value, change, up, icon: Icon, percent }) {
  return (
    <DashboardCard className="p-6 relative transition-colors duration-300 hover:border-neutral-400">
      <div className="flex items-start justify-between mb-6">
        <div className="w-10 h-10 rounded-lg flex items-center justify-center border border-neutral-200 bg-neutral-50 text-black">
          <Icon size={18} strokeWidth={2} />
        </div>
        {up !== null ? (
          <span
            className={`flex items-center gap-1 text-[11px] font-bold px-2 py-1 rounded-md border ${
              up 
                ? "text-black bg-neutral-100 border-neutral-200" 
                : "text-neutral-600 bg-neutral-50 border-neutral-200"
            }`}
          >
            {up ? <ArrowUpRight size={12} strokeWidth={2.5} /> : <ArrowDownRight size={12} strokeWidth={2.5} />}
            {change}
          </span>
        ) : (
          <span className="text-[11px] font-bold px-2 py-1 rounded-md text-neutral-500 bg-neutral-50 border border-neutral-200">
            {change}
          </span>
        )}
      </div>
      <p className="text-[32px] font-bold text-black tracking-tight leading-none">{value}</p>
      <p className="text-[13px] font-medium text-neutral-500 mt-2">{label}</p>

      {/* نوار پیشرفت مینیمال (سیاه و سفید) */}
      <div className="mt-6 h-1 w-full rounded-full bg-neutral-100 overflow-hidden">
        <div
          className="h-full rounded-full bg-black"
          style={{ width: `${percent}%` }}
        />
      </div>
    </DashboardCard>
  );
}

export default function Dashboard() {
  const unreadCount = recentMessages.filter((m) => m.unread).length;
  
  // استیت برای ذخیره تاریخ و زمان فعلی
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // فرمت کردن تاریخ به صورت: "شنبه، ۲۰ تیر ۱۴۰۳"
      const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      const formattedDate = new Intl.DateTimeFormat('fa-IR', dateOptions).format(now);
      
      // فرمت کردن ساعت به صورت: "۱۴:۳۰"
      const timeOptions = { hour: '2-digit', minute: '2-digit' };
      const formattedTime = new Intl.DateTimeFormat('fa-IR', timeOptions).format(now);
      
      setCurrentDateTime(`${formattedDate} - ساعت ${formattedTime}`);
    };

    // اجرای اولیه
    updateTime();

    // به‌روزرسانی هر ۱ دقیقه
    const intervalId = setInterval(updateTime, 60000);

    // پاکسازی تایمر در زمان از بین رفتن کامپوننت
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex flex-col gap-8 p-4 md:p-8 bg-[#FAFAFA] min-h-screen text-black" dir="rtl">
      {/* خوش‌آمدگویی */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-[22px] font-bold text-black tracking-tight">سلام سارا</h1>
          <p className="text-[14px] text-neutral-500 mt-1 font-medium">خلاصه‌ی وضعیت امروز پلتفرم شما</p>
        </div>
        
        {/* باکس نمایش تاریخ و ساعت داینامیک */}
        <div className="flex items-center gap-2 text-[12px] font-bold text-neutral-600 bg-white border border-neutral-200 rounded-lg px-4 py-2 w-fit shadow-sm min-h-[38px]">
          <Clock size={14} className="text-black shrink-0" strokeWidth={2.5} />
          {currentDateTime ? currentDateTime : "در حال دریافت زمان..."}
        </div>
      </div>

      {/* استت‌کارت‌ها */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {stats.map((s) => (
          <StatCard key={s.label} {...s} />
        ))}
      </div>

      {/* بخش اصلی */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* پیام‌های اخیر */}
        <DashboardCard className="lg:col-span-2 p-6">
          <div className="flex items-center justify-between mb-6 pb-4 border-b border-neutral-100">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-md bg-neutral-100 border border-neutral-200 text-black flex items-center justify-center">
                <MessageSquare size={14} strokeWidth={2.5} />
              </div>
              <h2 className="text-[15px] font-bold text-black">پیام‌های اخیر</h2>
              {unreadCount > 0 && (
                <span className="text-[10px] font-bold bg-black text-white rounded-md min-w-[20px] h-5 flex items-center justify-center px-1.5 ml-2">
                  {unreadCount}
                </span>
              )}
            </div>
            <Link
              href="/messages"
              className="flex items-center gap-1.5 text-[12px] font-bold text-neutral-500 hover:text-black transition-colors"
            >
              مشاهده همه
              <ArrowLeft size={14} />
            </Link>
          </div>

          <div className="flex flex-col">
            {recentMessages.map((m, i) => (
              <Link
                key={i}
                href="/messages"
                className="flex items-center gap-4 py-3.5 px-3 rounded-lg hover:bg-neutral-50 transition-colors group"
              >
                <div className="w-10 h-10 shrink-0 rounded-full bg-neutral-900 flex items-center justify-center text-white text-[13px] font-bold">
                  {m.name.slice(0, 1)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-[14px] font-bold text-black truncate">{m.name}</p>
                    {m.unread && <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0" />}
                  </div>
                  <p className="text-[13px] font-medium text-neutral-500 truncate mt-0.5">{m.subject}</p>
                </div>
                <span className="text-[11px] font-medium text-neutral-400 shrink-0">{m.time}</span>
              </Link>
            ))}
          </div>
        </DashboardCard>

        {/* ستون کناری: اقدامات سریع + وضعیت سرور */}
        <div className="flex flex-col gap-6">
          <DashboardCard className="p-6">
            <h2 className="text-[15px] font-bold text-black mb-5 pb-4 border-b border-neutral-100">عملیات سریع</h2>
            <div className="flex flex-col gap-3">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <button
                    key={action.label}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-[13px] font-bold transition-all duration-200 border ${
                      action.primary
                        ? "bg-black text-white border-black hover:bg-neutral-800"
                        : "bg-white text-black border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50"
                    }`}
                  >
                    <Icon size={16} strokeWidth={2} className={action.primary ? "text-white" : "text-black"} />
                    {action.label}
                  </button>
                );
              })}
            </div>
          </DashboardCard>

          {/* ویجت وضعیت سرور با استایل کاملاً مینیمال */}
          <DashboardCard className="p-6 bg-black text-white border-black">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-md bg-neutral-800 text-white flex items-center justify-center">
                <Server size={16} strokeWidth={2} />
              </div>
              <p className="font-bold text-[15px]">وضعیت سیستم</p>
            </div>
            
            <p className="text-neutral-400 font-medium text-[13px] leading-relaxed mb-6">
              تمامی سرویس‌ها در دسترس هستند. آخرین بکاپ ۲ ساعت پیش ذخیره شد.
            </p>
            
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-[11px] font-bold text-white bg-neutral-800 border border-neutral-700 px-3 py-1.5 rounded-md">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-white"></span>
                </span>
                آنلاین و پایدار
              </span>
            </div>
          </DashboardCard>
        </div>
      </div>
    </div>
  );
}