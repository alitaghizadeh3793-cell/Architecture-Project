"use client";
import { useState, useEffect } from "react";
import { api } from "../config";

const Icons = {
  MessageSquare: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  User: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM12 14a7 7 0 0 0-7 7h14a7 7 0 0 0-7-7z"/></svg>,
  Phone: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
  MapPin: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.657 16.657L13.414 20.9a2 2 0 0 1-2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z"/><circle cx="12" cy="11" r="3"/></svg>,
  X: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  Trash: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>,
};

export default function Messages() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        // GET /api/messages
        // انتظار می‌ره آرایه‌ای از پیام‌ها برگرده، هر کدوم شامل:
        // { id, firstName, lastName, phone, city, message, date, read }
        const response = await api.get("/api/messages");
        // if (!response.ok) throw new Error("خطا در شبکه");
        // const data = await response.json();
        setMessages(data);
      } catch (error) {
        console.error("خطا:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMessages();
  }, []);

  const openMessage = async (msg) => {
    setSelected(msg);
    if (msg.read) return;

    // آپدیت خوش‌بینانه (optimistic) روی state
    setMessages((prev) => prev.map((m) => (m.id === msg.id ? { ...m, read: true } : m)));

    try {
      // PATCH /api/messages/:id  →  { read: true }
      await api.post(`/api/messages/${msg.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ read: true }),
      });
    } catch (error) {
      console.error("خطا در ثبت خوانده‌شدن پیام:", error);
    }
  };

  const deleteMessage = async (id) => {
    const prev = messages;
    setMessages((m) => m.filter((x) => x.id !== id));
    setSelected(null);

    try {
      // DELETE /api/messages/:id
      const response = await fetch(`/api/messages/${id}`, { method: "DELETE" });
      if (!response.ok) throw new Error("خطا در حذف");
    } catch (error) {
      console.error("خطا:", error);
      setMessages(prev); // برگردوندن state در صورت خطا
    }
  };

  const unreadCount = messages.filter((m) => !m.read).length;

  return (
    <div className="bg-[#FAFAFA] min-h-screen p-4 md:p-8" dir="rtl">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-[22px] font-bold text-black tracking-tight flex items-center gap-2.5">
              پیام‌ها
              {unreadCount > 0 && (
                <span className="text-[11px] font-bold bg-black text-white rounded-full min-w-[22px] h-[22px] flex items-center justify-center px-1.5">
                  {unreadCount}
                </span>
              )}
            </h1>
            <p className="text-[14px] text-neutral-500 mt-1 font-medium">
              درخواست‌های مشاوره‌ی رایگانی که از سایت ارسال شدن
            </p>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-20 text-neutral-500 font-medium">در حال بارگذاری...</div>
        ) : messages.length === 0 ? (
          // --- Empty State ---
          <div className="flex flex-col items-center justify-center bg-white border border-neutral-200 rounded-xl py-20 px-4 text-center shadow-sm">
            <div className="w-16 h-16 bg-neutral-50 text-neutral-400 rounded-full flex items-center justify-center mb-4 border border-neutral-100">
              <Icons.MessageSquare />
            </div>
            <h3 className="text-[16px] font-bold text-black mb-2">هنوز پیامی دریافت نشده</h3>
            <p className="text-[13px] text-neutral-500 max-w-[320px]">
              درخواست‌هایی که کاربرها از فرم «مشاوره رایگان» توی سایت می‌فرستن، همین‌جا نمایش داده می‌شن.
            </p>
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {messages.map((m) => (
              <button
                key={m.id}
                onClick={() => openMessage(m)}
                className="text-right bg-white border border-neutral-200 rounded-xl p-4 md:p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:border-neutral-300 transition-all"
              >
                <div className="relative w-11 h-11 shrink-0 rounded-full bg-black text-white flex items-center justify-center text-[13px] font-bold">
                  {m.firstName?.slice(0, 1)}
                  {!m.read && (
                    <span className="absolute -top-0.5 -left-0.5 w-3 h-3 rounded-full bg-red-500 ring-2 ring-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className={`text-[14px] truncate ${m.read ? "font-medium text-neutral-700" : "font-bold text-black"}`}>
                      {m.firstName} {m.lastName}
                    </h3>
                  </div>
                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1">
                    <span className="flex items-center gap-1.5 text-[12px] text-neutral-500">
                      <Icons.Phone /> {m.phone}
                    </span>
                    <span className="flex items-center gap-1.5 text-[12px] text-neutral-500">
                      <Icons.MapPin /> {m.city}
                    </span>
                  </div>
                  {m.message ? (
                    <p className="text-[12.5px] text-neutral-400 mt-1.5 truncate">{m.message}</p>
                  ) : (
                    <p className="text-[12.5px] text-neutral-300 mt-1.5 italic">بدون پیام</p>
                  )}
                </div>

                <span className="text-[11.5px] text-neutral-400 shrink-0">{m.date}</span>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* مودال نمایش کامل پیام */}
      {selected && (
        <div
          className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl w-full max-w-lg shadow-xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 shrink-0 rounded-full bg-black text-white flex items-center justify-center text-[13px] font-bold">
                  {selected.firstName?.slice(0, 1)}
                </div>
                <div>
                  <h3 className="text-[15px] font-bold text-black">
                    {selected.firstName} {selected.lastName}
                  </h3>
                  <p className="text-[11.5px] text-neutral-400 mt-0.5">{selected.date}</p>
                </div>
              </div>
              <button
                onClick={() => setSelected(null)}
                className="w-8 h-8 flex items-center justify-center rounded-lg text-neutral-400 hover:text-black hover:bg-neutral-100 transition-colors"
              >
                <Icons.X />
              </button>
            </div>

            <div className="px-6 py-5 flex flex-col gap-4">
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-[13px] text-neutral-600">
                  <Icons.Phone />
                  <a href={`tel:${selected.phone}`} className="hover:text-black hover:underline">
                    {selected.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-[13px] text-neutral-600">
                  <Icons.MapPin />
                  {selected.city}
                </div>
              </div>

              <div>
                <p className="text-[11px] font-bold text-neutral-400 uppercase tracking-wide mb-2">متن پیام</p>
                <p className="text-[13.5px] text-neutral-700 leading-relaxed bg-neutral-50 border border-neutral-100 rounded-xl p-4">
                  {selected.message || "کاربر توضیحی وارد نکرده است."}
                </p>
              </div>
            </div>

            <div className="flex items-center justify-between px-6 py-4 border-t border-neutral-100">
              <button
                onClick={() => deleteMessage(selected.id)}
                className="flex items-center gap-1.5 text-[12.5px] font-bold text-red-500 hover:text-red-600 transition-colors"
              >
                <Icons.Trash /> حذف پیام
              </button>
              <a
                href={`tel:${selected.phone}`}
                className="bg-black text-white px-5 py-2.5 rounded-lg text-[12.5px] font-bold hover:bg-neutral-800 transition-colors"
              >
                تماس با مشتری
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}