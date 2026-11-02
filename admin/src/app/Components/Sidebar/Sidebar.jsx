"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FolderKanban,
  // Wrench,
  MessageSquare,
  Users,
  // Settings,
  LogOut,
  X,
} from "lucide-react";

const navItems = [
  { name: "داشبورد", href: "/", icon: LayoutDashboard },
  { name: "پروژه‌ها", href: "/Services", icon: FolderKanban },
  // { name: "خدمات", href: "/admin/services", icon: Wrench },
  { name: "پیام‌ها", href: "/messages", icon: MessageSquare, badge: 5 },
  { name: "تیم", href: "/team", icon: Users },
  // { name: "تنظیمات", href: "/admin/settings", icon: Settings },
];

export default function Sidebar({ open, onClose }) {
  const pathname = usePathname();

  const isActive = (href) => {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
};

  return (
    <>
      {/* اوورلی موبایل */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 right-0 z-50 w-72 flex flex-col transition-transform duration-300 lg:translate-x-0 ${
          open ? "translate-x-0" : "translate-x-full lg:translate-x-0"
        }`}
        style={{
          background: "rgba(10,10,10,0.92)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        {/* لوگو */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="relative w-9 h-9 shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-[#006a9c] to-[#00a3ff] rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300" />
              <div className="absolute inset-0.5 bg-black rounded-xl flex items-center justify-center font-bold text-white text-sm">
                A
              </div>
            </div>
            <div className="text-white font-semibold tracking-[2px] text-sm leading-none">
              ARCH<span className="text-[#006a9c]">STUDIO</span>
              <div className="text-[10px] text-gray-500 tracking-normal font-normal mt-1">پنل مدیریت</div>
            </div>
          </Link>
          <button
            onClick={onClose}
            className="lg:hidden text-gray-400 hover:text-white p-1.5 rounded-lg hover:bg-white/10 transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* ناوبری */}
        <nav className="flex-1 overflow-y-auto px-4 py-6 flex flex-col gap-1">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={onClose}
                className={`relative flex items-center gap-3 px-4 py-3 rounded-xl text-[13.5px] font-medium transition-all duration-300 group ${
                  active
                    ? "text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
                style={
                  active
                    ? {
                        background: "rgba(0,106,156,0.16)",
                        border: "1px solid rgba(0,106,156,0.35)",
                      }
                    : { border: "1px solid transparent" }
                }
              >
                <Icon
                  size={17}
                  className={active ? "text-[#3bb1ec]" : "text-gray-500 group-hover:text-gray-300"}
                />
                <span className="flex-1">{item.name}</span>
                {item.badge && (
                  <span className="text-[10px] font-bold bg-[#006a9c] text-white rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {item.badge}
                  </span>
                )}
                {active && (
                  <span className="absolute right-0 top-1/2 -translate-y-1/2 w-1 h-5 rounded-full bg-[#3bb1ec]" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* کاربر + خروج */}
        <div className="px-4 py-5 border-t border-white/5">
          <div className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors cursor-pointer group">
            <div className="w-9 h-9 shrink-0 rounded-full bg-gradient-to-br from-[#006a9c] to-[#00a3ff] flex items-center justify-center text-white text-[12px] font-bold">
              سم
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[12.5px] font-medium text-white truncate">سارا محمدی</p>
              <p className="text-[10.5px] text-gray-500 truncate">مدیر سایت</p>
            </div>
            <LogOut size={16} className="text-gray-500 group-hover:text-red-400 transition-colors" />
          </div>
        </div>
      </aside>
    </>
  );
}