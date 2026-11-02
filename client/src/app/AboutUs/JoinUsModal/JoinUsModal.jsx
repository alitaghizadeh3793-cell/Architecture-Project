"use client";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, FileText, Loader2, CheckCircle2 } from "lucide-react";

const emptyForm = {
  fullName: "",
  email: "",
  phone: "",
  position: "",
  portfolio: "",
  message: "",
};

export default function JoinUsModal({ open, onClose }) {
  const [form, setForm] = useState(emptyForm);
  const [resumeFile, setResumeFile] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef(null);

  // بستن با کلید Esc
  useEffect(() => {
    if (!open) return;
    const handleKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  const resetAndClose = () => {
    setForm(emptyForm);
    setResumeFile(null);
    setError("");
    setSuccess(false);
    if (fileInputRef.current) fileInputRef.current.value = "";
    onClose();
  };

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleFileSelect = (file) => {
    if (!file) return;
    const allowed = ["application/pdf", "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document"];
    if (!allowed.includes(file.type)) {
      setError("لطفاً فایل رزومه را با فرمت PDF یا Word آپلود کنید.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("حجم فایل نباید بیشتر از ۵ مگابایت باشد.");
      return;
    }
    setError("");
    setResumeFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!form.fullName.trim() || !form.email.trim() || !form.position.trim() || !resumeFile) {
      setError("لطفاً نام، ایمیل، موقعیت شغلی و فایل رزومه را تکمیل کنید.");
      return;
    }

    setSubmitting(true);
    try {
      // ─── ارتباط با بک‌اند: فعلاً غیرفعال (بک‌اند آماده نیست) ───
      // const body = new FormData();
      // body.append("fullName", form.fullName);
      // body.append("email", form.email);
      // body.append("phone", form.phone);
      // body.append("position", form.position);
      // body.append("portfolio", form.portfolio);
      // body.append("message", form.message);
      // body.append("resume", resumeFile);
      //
      // const response = await api.post("/api/careers", { method: "POST", body });
      // if (!response.ok) throw new Error("خطا در ارسال اطلاعات");
      // ─────────────────────────────────────────────────────────

      await new Promise((res) => setTimeout(res, 900)); // شبیه‌سازی موقت ارسال
      setSuccess(true);
    } catch (err) {
      console.error(err);
      setError("ارسال درخواست با خطا مواجه شد. دوباره تلاش کنید.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          dir="rtl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
        >
          {/* بک‌دراپ */}
          <div
            onClick={resetAndClose}
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          />

          {/* پنجره پاپ‌آپ */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl"
          >
            {/* هدر */}
            <div className="sticky top-0 z-10 flex items-start justify-between px-6 md:px-8 pt-6 pb-5 bg-white border-b border-gray-100">
              <div>
                <p className="text-[10px] tracking-[0.25em] text-[#006a9c] font-bold uppercase mb-1.5">
                  Careers
                </p>
                <h3 className="text-[20px] md:text-[22px] font-bold text-gray-900">
                  به تیم مهراز بپیوندید
                </h3>
                <p className="text-[12.5px] text-gray-500 mt-1.5">
                  اطلاعات و رزومه‌ی خود را برای ما ارسال کنید.
                </p>
              </div>
              <button
                onClick={resetAndClose}
                className="shrink-0 cursor-pointer w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:text-black hover:bg-gray-100 transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* بدنه */}
            <div className="px-6 md:px-8 py-6">
              {success ? (
                <div className="flex flex-col items-center text-center py-10">
                  <div className="w-14 h-14 rounded-full bg-green-50 text-green-600 flex items-center justify-center mb-4">
                    <CheckCircle2 size={26} />
                  </div>
                  <h4 className="text-[16px] font-bold text-gray-900 mb-2">درخواست شما ثبت شد</h4>
                  <p className="text-[13px] text-gray-500 max-w-[280px] mb-6">
                    از علاقه‌ی شما به همکاری با استودیوی مهراز سپاسگزاریم. تیم ما رزومه‌ی شما را بررسی و در صورت تناسب، تماس خواهد گرفت.
                  </p>
                  <button
                    onClick={resetAndClose}
                    className="bg-black text-white px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-800 transition-colors"
                  >
                    بستن
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[12.5px] font-bold text-gray-800 mb-1.5 block">
                        نام و نام‌خانوادگی <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={form.fullName}
                        onChange={handleChange}
                        placeholder="مثلاً سارا محمدی"
                        className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#006a9c] transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-[12.5px] font-bold text-gray-800 mb-1.5 block">
                        شماره تماس
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="09xxxxxxxxx"
                        className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#006a9c] transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-[12.5px] font-bold text-gray-800 mb-1.5 block">
                      ایمیل <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="example@email.com"
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#006a9c] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[12.5px] font-bold text-gray-800 mb-1.5 block">
                      موقعیت شغلی مورد نظر <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="position"
                      value={form.position}
                      onChange={handleChange}
                      placeholder="مثلاً طراح داخلی، معمار، مهندس عمران"
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#006a9c] transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-[12.5px] font-bold text-gray-800 mb-1.5 block">
                      لینک نمونه‌کار (اختیاری)
                    </label>
                    <input
                      type="url"
                      name="portfolio"
                      value={form.portfolio}
                      onChange={handleChange}
                      placeholder="https://..."
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#006a9c] transition-colors"
                    />
                  </div>

                  {/* آپلود رزومه */}
                  <div>
                    <label className="text-[12.5px] font-bold text-gray-800 mb-1.5 block">
                      رزومه <span className="text-red-500">*</span>
                    </label>
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      onDragOver={(e) => e.preventDefault()}
                      onDrop={(e) => {
                        e.preventDefault();
                        handleFileSelect(e.dataTransfer.files?.[0]);
                      }}
                      className="border-2 border-dashed border-gray-200 rounded-xl px-4 py-5 flex items-center gap-3 cursor-pointer hover:border-[#006a9c]/50 hover:bg-gray-50/60 transition-colors"
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        accept=".pdf,.doc,.docx"
                        onChange={(e) => handleFileSelect(e.target.files?.[0])}
                        className="hidden"
                      />
                      {resumeFile ? (
                        <>
                          <FileText size={18} className="text-[#006a9c] shrink-0" />
                          <span className="text-[13px] text-gray-800 truncate">{resumeFile.name}</span>
                        </>
                      ) : (
                        <>
                          <Upload size={18} className="text-gray-400 shrink-0" />
                          <span className="text-[12.5px] text-gray-500">
                            فایل PDF یا Word خود را انتخاب یا رها کنید (حداکثر ۵ مگابایت)
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="text-[12.5px] font-bold text-gray-800 mb-1.5 block">
                      توضیحات تکمیلی
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={3}
                      placeholder="چند جمله درباره‌ی خودتان و انگیزه‌ی همکاری بنویسید..."
                      className="w-full border border-gray-200 rounded-lg px-3.5 py-2.5 text-[13px] text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#006a9c] transition-colors resize-none"
                    />
                  </div>

                  {error && (
                    <p className="text-[12.5px] text-red-500 font-medium">{error}</p>
                  )}

                  <div className="flex items-center gap-3 pt-2">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="flex cursor-pointer items-center gap-2 bg-black text-white px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {submitting ? (
                        <>
                          <Loader2 size={15} className="animate-spin" /> در حال ارسال...
                        </>
                      ) : (
                        "ارسال درخواست"
                      )}
                    </button>
                    <button
                      type="button"
                      onClick={resetAndClose}
                      className="px-6 py-2.5 cursor-pointer rounded-lg text-[13px] font-bold text-gray-500 hover:text-black hover:bg-gray-50 transition-colors"
                    >
                      انصراف
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}