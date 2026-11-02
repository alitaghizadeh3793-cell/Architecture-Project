"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { Menu, Bell, ChevronDown, LogOut } from "lucide-react";

const pageTitles = {
  "/": "داشبورد",
  "/Services": "پروژه‌ها",
  // "/services": "خدمات",
  "/messages": "پیام‌ها",
  "/team": "تیم",
  // "/settings": "تنظیمات",
};

export default function Header({ onMenuClick }) {
  const pathname = usePathname();
  const [profileOpen, setProfileOpen] = useState(false);
  const ref = useRef(null);

  const title = pageTitles[pathname] || "پنل مدیریت";

  useEffect(() => {
    if (!profileOpen) return;
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setProfileOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [profileOpen]);

  return (
    <header className="fixed top-0 left-0 right-0 lg:right-72 z-30 h-20 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-neutral-200 flex items-center justify-between px-6 md:px-8 transition-all">
      {/* بخش راست: منوی موبایل + عنوان صفحه */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="lg:hidden text-black hover:bg-neutral-200/60 p-2.5 rounded-lg border border-neutral-200 transition-colors"
        >
          <Menu size={18} strokeWidth={2} />
        </button>
        <div>
          <h1 className="text-[18px] md:text-[20px] font-bold text-black tracking-tight leading-none">
            {title}
          </h1>
          <p className="text-[12px] font-medium text-neutral-500 mt-1.5 hidden sm:block">
            مدیریت محتوای سایت آرک‌استودیو
          </p>
        </div>
      </div>

      {/* بخش چپ: اعلان‌ها + پروفایل */}
      <div className="flex items-center gap-3">
        {/* دکمه اعلان‌ها */}
        <button className="relative w-10 h-10 rounded-lg flex items-center justify-center text-black bg-white hover:bg-neutral-50 transition-colors border border-neutral-200 shadow-2xs">
          <Bell size={17} strokeWidth={2} />
          {/* نقطه اعلان با رنگ مورد نظر شما */}
          <span className="absolute top-2 left-2 w-2 h-2 rounded-full bg-[#006a9c] ring-2 ring-white" />
        </button>

        {/* منوی کاربری */}
        <div className="relative" ref={ref}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className={`flex items-center gap-2.5 p-1.5 pl-3 rounded-lg border transition-all ${
              profileOpen
                ? "bg-white border-[#006a9c]/30 shadow-xs"
                : "bg-white border-neutral-200 hover:border-neutral-300 shadow-2xs"
            }`}
          >
            <div className="w-8 h-8 rounded-md bg-black text-white flex items-center justify-center text-[12px] font-bold shrink-0">
              سم
            </div>
            <ChevronDown
              size={14}
              strokeWidth={2.5}
              className={`text-neutral-500 hidden sm:block transition-transform duration-200 ${
                profileOpen ? "rotate-180 text-black" : ""
              }`}
            />
          </button>

          {/* دراپ‌داون پروفایل مینیمال */}
          {profileOpen && (
            <div className="absolute left-0 mt-2.5 w-56 rounded-xl bg-white border border-neutral-200 shadow-[0_10px_38px_-10px_rgba(0,0,0,0.1)] overflow-hidden py-1.5 animate-in fade-in zoom-in-95 duration-150">
              <div className="px-4 py-3 border-b border-neutral-100 bg-neutral-50/50">
                <p className="text-[13px] font-bold text-black">سارا محمدی</p>
                <p className="text-[11px] font-medium text-neutral-400 mt-0.5 truncate">
                  admin@your-architecture.ir
                </p>
              </div>

              {/* دکمه خروج با افکت هاور از رنگ سفارشی شما */}
              <div className="pt-1.5 pb-0.5 px-1">
                <button className="w-full flex items-center gap-3 px-3 py-2 text-[13px] font-bold text-rose-600 hover:bg-[#006a9c]/10 hover:text-[#006a9c] rounded-lg transition-colors">
                  <LogOut size={16} strokeWidth={2} />
                  خروج از حساب
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}