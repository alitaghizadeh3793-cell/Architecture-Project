"use client";

import { useState, useEffect } from "react";
import {
  Menu,
  X,
  Home,
  FolderOpen,
  Info,
  Wrench,
  Phone,
  Search,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (!open) return;
    const handleClickOutside = (e) => {
      if (!e.target.closest("header")) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

  useEffect(() => {
    if (!searchOpen) return;
    const handleClickOutside = (e) => {
      if (!e.target.closest("header")) {
        setSearchOpen(false);
        setSearchQuery("");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [searchOpen]);

  const navItems = [
    { name: "ارتباط با ما", href: "/ContactUs", icon: Phone },
    { name: "درباره ما", href: "/AboutUs", icon: Info },
    { name: "نمونه کار", href: "/Portfolio", icon: FolderOpen },
    { name: "خدمات", href: "/Services", icon: Wrench },
    { name: "خانه", href: "/", icon: Home },
  ];

  const mobileNavItems = [...navItems].reverse();

  const handleNavClick = () => {
    setOpen(false);
  };

  const isActive = (path) =>
    path === "/" ? pathname === "/" : pathname.startsWith(path);

  return (
    <header className=" [direction:ltr] fixed top-0 left-0 w-full z-50 font-vazir">
      <div
        className="mx-auto max-w-7xl mt-2 md:mt-4 px-4 md:px-6 py-3 md:py-4 flex items-center justify-between rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.12), rgba(1,1,1,0.55))",
          backdropFilter: "blur(20px)",
        }}
      >
        <Link
          href="/"
          onClick={handleNavClick}
          className="flex items-center gap-2.5 group shrink-0"
        >
          <div className="relative w-9 h-9">
            <div className="absolute inset-0 bg-gradient-to-br from-[#006a9c] to-[#00a3ff] rounded-xl rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <div className="absolute inset-0.5 bg-black rounded-xl flex items-center justify-center font-bold text-white text-sm">
              A
            </div>
          </div>
          <div className="text-white font-semibold tracking-[3px] text-sm md:text-base leading-none">
            ARCH<span className="text-[#006a9c]">STUDIO</span>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-sm text-white/90">
          {navItems.map((item) => {
            const active = isActive(item.href);
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className={`relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 group ${
                  active
                    ? "text-white bg-[#006a9c]/20"
                    : "text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <Icon
                  size={15}
                  className={
                    active
                      ? "text-[#006a9c]"
                      : "text-white/40 group-hover:text-white/70 transition-colors"
                  }
                />
                <span>{item.name}</span>
                {active && (
                  <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-gradient-to-r from-[#006a9c] to-[#00a3ff] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <div
            className={`flex items-center transition-all duration-300 overflow-hidden ${
              searchOpen ? "w-44 bg-white/10 rounded-xl px-3" : "w-9"
            }`}
          >
            <button
              onClick={() => {
                setSearchOpen(!searchOpen);
                setSearchQuery("");
              }}
              className="shrink-0 w-9 h-9 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            >
              {searchOpen ? <X size={16} /> : <Search size={16} />}
            </button>
            {searchOpen && (
              <input
                autoFocus
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="جستجو..."
                className="flex-1 bg-transparent text-white text-sm placeholder-white/30 outline-none py-2 font-vazir"
              />
            )}
          </div>

          <Image
            src="/Image-Header/IMG_3321.png"
            alt="لوگو"
            width={20}
            height={20}
            className="h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
          />
        </div>

        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => {
              setSearchOpen(!searchOpen);
              setOpen(false);
            }}
            className="text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            {searchOpen ? <X size={20} /> : <Search size={20} />}
          </button>
          <button
            onClick={() => {
              setOpen(!open);
              setSearchOpen(false);
            }}
            className="text-white p-2 rounded-xl hover:bg-white/10 transition-colors"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden mx-4 mt-2 overflow-hidden transition-all duration-300 ${
          searchOpen ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="flex items-center gap-3 px-4 py-3 rounded-2xl"
          style={{
            backdropFilter: "blur(20px)",
            background: "rgba(0,0,0,0.6)",
          }}
        >
          <Search size={16} className="text-white/40 shrink-0" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="جستجو در سایت..."
            className="flex-1 bg-transparent text-white text-sm placeholder-white/30 outline-none font-vazir"
          />
        </div>
      </div>

      <div
        className={`md:hidden mx-4 mt-2 overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="p-4 rounded-2xl shadow-2xl"
          style={{
            backdropFilter: "blur(20px)",
            background: "rgba(0,0,0,0.75)",
          }}
        >
          <div className="flex flex-col gap-1">
            {mobileNavItems.map((item) => {
              const active = isActive(item.href);
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                    active
                      ? "bg-[#006a9c]/20 text-white"
                      : "text-white/65 hover:text-white hover:bg-white/8"
                  }`}
                >
                  <Icon
                    size={17}
                    className={active ? "text-[#006a9c]" : "text-white/35"}
                  />
                  <span className="flex-1 text-sm font-medium">
                    {item.name}
                  </span>
                  {active && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#006a9c]" />
                  )}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── اوورلی تیره برای موبایل ── */}
      {open && (
        <div
          className="md:hidden fixed inset-0 -z-10 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
