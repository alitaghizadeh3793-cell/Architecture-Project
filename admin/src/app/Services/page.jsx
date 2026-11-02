// "use client";
// import { useState, useRef, useEffect } from "react";
// import DatePicker from "react-multi-date-picker";
// import persian from "react-date-object/calendars/persian";
// import persian_fa from "react-date-object/locales/persian_fa";
// import "react-multi-date-picker/styles/layouts/prime.css";
// import { api } from "../config";

// const Icons = {
//   Plus: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5v14"/></svg>,
//   ArrowRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
//   Upload: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
//   Folder: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
//   X: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
//   Image: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>,
//   Calendar: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
//   Spinner: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="animate-spin"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25"/><path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>,
// };

// const emptyForm = { title: "", date: "", description: "" };

// export default function Projects() {
//   const [view, setView] = useState("list");
//   const [projects, setProjects] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // ── فرم افزودن پروژه ──
//   const [form, setForm] = useState(emptyForm);
//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [submitting, setSubmitting] = useState(false);
//   const [formError, setFormError] = useState("");
//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     const fetchProjects = async () => {
//       try {
//         // const response = await api.get("/api/projects");
//         // if (!response.ok) throw new Error("خطا در شبکه");
//         // const data = await response.json();
//         // setProjects(data);
//       } catch (error) {
//         console.error("خطا:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchProjects();
//   }, []);

//   const resetForm = () => {
//     setForm(emptyForm);
//     setImageFile(null);
//     setImagePreview(null);
//     setFormError("");
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const handleOpenForm = () => {
//     resetForm();
//     setView("form");
//   };

//   const handleFieldChange = (e) => {
//     setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
//   };

//   const handleImageSelect = (file) => {
//     if (!file) return;
//     if (!file.type.startsWith("image/")) {
//       setFormError("لطفاً یک فایل تصویری انتخاب کنید.");
//       return;
//     }
//     setFormError("");
//     setImageFile(file);
//     setImagePreview(URL.createObjectURL(file));
//   };

//   const handleFileInputChange = (e) => handleImageSelect(e.target.files?.[0]);

//   const handleDrop = (e) => {
//     e.preventDefault();
//     handleImageSelect(e.dataTransfer.files?.[0]);
//   };

//   const handleRemoveImage = () => {
//     setImageFile(null);
//     setImagePreview(null);
//     if (fileInputRef.current) fileInputRef.current.value = "";
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormError("");

//     if (!form.title.trim() || !form.date || !form.description.trim()) {
//       setFormError("لطفاً تمام فیلدهای الزامی را پر کنید.");
//       return;
//     }

//     setSubmitting(true);
//     try {
//       const body = new FormData();
//       body.append("title", form.title);
//       body.append("date", form.date);
//       body.append("description", form.description);
//       if (imageFile) body.append("image", imageFile);

//       const response = await api.post("/api/projects", {
//         method: "POST",
//         body,
//       });

//       if (!response.ok) throw new Error("خطا در ارسال اطلاعات به سرور");

//       const newProject = await response.json();
//       setProjects((prev) => [newProject, ...prev]);
//       resetForm();
//       setView("list");
//     } catch (error) {
//       console.error("خطا:", error);
//       setFormError("ارسال پروژه با خطا مواجه شد. دوباره تلاش کنید.");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <div className="bg-[#FAFAFA] min-h-screen p-4 md:p-8" dir="rtl">
//       <div className="max-w-screen-xl mx-auto">

//         {view === "list" && (
//           <div className="flex flex-col gap-8">
//             <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
//               <div>
//                 <h1 className="text-[22px] font-bold text-black tracking-tight">پروژه‌ها</h1>
//                 <p className="text-[14px] text-neutral-500 mt-1 font-medium">مدیریت و مشاهده نمونه‌کارهای سایت</p>
//               </div>
//               <button
//                 onClick={handleOpenForm}
//                 className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-800 transition-colors shadow-sm w-fit"
//               >
//                 <Icons.Plus /> افزودن پروژه جدید
//               </button>
//             </div>

//             {isLoading ? (
//               <div className="text-center py-20 text-neutral-500 font-medium">در حال بارگذاری...</div>
//             ) : projects.length === 0 ? (
//               // --- Empty State ---
//               <div className="flex flex-col items-center justify-center bg-white border border-neutral-200 rounded-xl py-20 px-4 text-center shadow-sm">
//                 <div className="w-16 h-16 bg-neutral-50 text-neutral-400 rounded-full flex items-center justify-center mb-4 border border-neutral-100">
//                   <Icons.Folder />
//                 </div>
//                 <h3 className="text-[16px] font-bold text-black mb-2">هنوز پروژه‌ای اضافه نشده است</h3>
//                 <p className="text-[13px] text-neutral-500 max-w-[300px] mb-6">
//                   برای شروع، اولین نمونه‌کار خود را با استفاده از دکمه زیر در سیستم ثبت کنید.
//                 </p>
//                 <button
//                   onClick={handleOpenForm}
//                   className="flex items-center gap-2 bg-white text-black border border-neutral-200 px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-50 transition-colors"
//                 >
//                   <Icons.Plus /> افزودن اولین پروژه
//                 </button>
//               </div>
//             ) : (
//               <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//                 {projects.map((project, idx) => (
//                   <div
//                     key={project.id ?? idx}
//                     className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//                   >
//                     <div className="relative aspect-[4/3] bg-neutral-100">
//                       {project.image ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center text-neutral-300">
//                           <Icons.Image />
//                         </div>
//                       )}
//                     </div>
//                     <div className="p-4">
//                       <h3 className="text-[15px] font-bold text-black">{project.title}</h3>
//                       <p className="text-[12px] text-neutral-400 mt-1 flex items-center gap-1.5">
//                         <Icons.Calendar />
//                         {project.date}
//                       </p>
//                       <p className="text-[13px] text-neutral-500 mt-2 leading-relaxed line-clamp-2">
//                         {project.description}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         )}

//         {view === "form" && (
//           <div className="flex flex-col gap-6 max-w-2xl mx-auto">
//             <button
//               onClick={() => setView("list")}
//               className="flex items-center gap-2 text-[13px] font-bold text-neutral-500 hover:text-black w-fit"
//             >
//               <Icons.ArrowRight /> بازگشت به لیست
//             </button>

//             <div className="bg-white border border-neutral-200 rounded-xl p-6 md:p-8 shadow-sm">
//               <h2 className="text-[18px] font-bold text-black mb-1">افزودن پروژه جدید</h2>
//               <p className="text-[13px] text-neutral-500 mb-6">اطلاعات نمونه‌کار جدید را وارد کنید</p>

//               <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//                 {/* آپلود تصویر */}
//                 <div>
//                   <label className="text-[13px] font-bold text-black mb-2 block">
//                     تصویر پروژه <span className="text-red-500">*</span>
//                   </label>
//                   <div
//                     onDragOver={(e) => e.preventDefault()}
//                     onDrop={handleDrop}
//                     onClick={() => fileInputRef.current?.click()}
//                     className="relative border-2 border-dashed border-neutral-200 rounded-xl overflow-hidden cursor-pointer hover:border-neutral-400 transition-colors bg-neutral-50"
//                   >
//                     <input
//                       ref={fileInputRef}
//                       type="file"
//                       accept="image/*"
//                       onChange={handleFileInputChange}
//                       className="hidden"
//                     />
//                     {imagePreview ? (
//                       <div className="relative aspect-[16/9]">
//                         {/* eslint-disable-next-line @next/next/no-img-element */}
//                         <img src={imagePreview} alt="پیش‌نمایش" className="w-full h-full object-cover" />
//                         <button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleRemoveImage();
//                           }}
//                           className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition-colors"
//                         >
//                           <Icons.X />
//                         </button>
//                       </div>
//                     ) : (
//                       <div className="flex flex-col items-center justify-center gap-2 py-12 text-neutral-400">
//                         <Icons.Upload />
//                         <p className="text-[13px] font-medium text-neutral-500">
//                           برای آپلود کلیک کنید یا تصویر را بکشید و رها کنید
//                         </p>
//                         <p className="text-[11px] text-neutral-400">PNG، JPG یا WEBP</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* عنوان */}
//                 <div>
//                   <label className="text-[13px] font-bold text-black mb-2 block">
//                     عنوان پروژه <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="title"
//                     value={form.title}
//                     onChange={handleFieldChange}
//                     placeholder="مثلاً ویلای مدرن با نورپردازی لوکس در شمال تهران"
//                     className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-[13.5px] text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
//                   />
//                 </div>

//                 {/* تاریخ — تقویم شمسی */}
//                 <div>
//                   <label className="text-[13px] font-bold text-black mb-2 block">
//                     تاریخ <span className="text-red-500">*</span>
//                   </label>
//                   <DatePicker
//                     calendar={persian}
//                     locale={persian_fa}
//                     calendarPosition="bottom-right"
//                     value={form.date}
//                     onChange={(dateObject) =>
//                       setForm((f) => ({
//                         ...f,
//                         date: dateObject ? dateObject.format("YYYY/MM/DD") : "",
//                       }))
//                     }
//                     inputClass="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-[13.5px] text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
//                     placeholder="انتخاب تاریخ"
//                     containerClassName="w-full"
//                   />
//                 </div>

//                 {/* توضیحات */}
//                 <div>
//                   <label className="text-[13px] font-bold text-black mb-2 block">
//                     توضیحات <span className="text-red-500">*</span>
//                   </label>
//                   <textarea
//                     name="description"
//                     value={form.description}
//                     onChange={handleFieldChange}
//                     rows={4}
//                     placeholder="توضیح کوتاهی درباره‌ی این پروژه بنویسید..."
//                     className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-[13.5px] text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
//                   />
//                 </div>

//                 {formError && (
//                   <p className="text-[12.5px] text-red-500 font-medium">{formError}</p>
//                 )}

//                 <div className="flex items-center gap-3 pt-2">
//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
//                   >
//                     {submitting ? (
//                       <>
//                         <Icons.Spinner /> در حال ارسال...
//                       </>
//                     ) : (
//                       <>
//                         <Icons.Plus /> ثبت پروژه
//                       </>
//                     )}
//                   </button>
//                   <button
//                     type="button"
//                     onClick={() => setView("list")}
//                     className="px-6 py-2.5 rounded-lg text-[13px] font-bold text-neutral-500 hover:text-black hover:bg-neutral-50 transition-colors"
//                   >
//                     انصراف
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useRef, useEffect } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
// import { api } from "../config";

const Icons = {
  Plus: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5v14"/></svg>,
  ArrowRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
  Upload: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  Folder: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>,
  X: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  Image: () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>,
  Calendar: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
  Spinner: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="animate-spin"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25"/><path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>,
};

const emptyForm = { title: "", date: "", description: "" };

export default function Projects() {
  const [view, setView] = useState("list");
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        // ─── ارتباط با بک‌اند: فعلاً غیرفعال (بک‌اند آماده نیست) ───
        // const response = await api.get("/api/projects");
        // if (!response.ok) throw new Error("خطا در شبکه");
        // const data = await response.json();
        // setProjects(data);
        // ─────────────────────────────────────────────────────────
      } catch (error) {
        console.error("خطا:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchProjects();
  }, []);

  const resetForm = () => {
    setForm(emptyForm);
    setImageFile(null);
    setImagePreview(null);
    setFormError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleOpenForm = () => {
    resetForm();
    setView("form");
  };

  const handleFieldChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleImageSelect = (file) => {
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      setFormError("لطفاً یک فایل تصویری انتخاب کنید.");
      return;
    }
    setFormError("");
    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleFileInputChange = (e) => handleImageSelect(e.target.files?.[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    handleImageSelect(e.dataTransfer.files?.[0]);
  };

  const handleRemoveImage = () => {
    setImageFile(null);
    setImagePreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormError("");

    if (!form.title.trim() || !form.date || !form.description.trim()) {
      setFormError("لطفاً تمام فیلدهای الزامی را پر کنید.");
      return;
    }

    setSubmitting(true);
    try {
      // ─── ارتباط با بک‌اند: فعلاً غیرفعال (بک‌اند آماده نیست) ───
      // const body = new FormData();
      // body.append("title", form.title);
      // body.append("date", form.date);
      // body.append("description", form.description);
      // if (imageFile) body.append("image", imageFile);

      // const response = await api.post("/api/projects", {
      //   method: "POST",
      //   body,
      // });

      // if (!response.ok) throw new Error("خطا در ارسال اطلاعات به سرور");

      // const newProject = await response.json();
      // setProjects((prev) => [newProject, ...prev]);
      // ─────────────────────────────────────────────────────────

      // TODO: تا زمانی که بک‌اند آماده بشه، پروژه به‌صورت موقت و محلی
      // (فقط در state، بدون ذخیره واقعی) اضافه می‌شود.
      const tempProject = {
        id: Date.now(),
        title: form.title,
        date: form.date,
        description: form.description,
        image: imagePreview,
      };
      setProjects((prev) => [tempProject, ...prev]);

      resetForm();
      setView("list");
    } catch (error) {
      console.error("خطا:", error);
      setFormError("ارسال پروژه با خطا مواجه شد. دوباره تلاش کنید.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-[#FAFAFA] min-h-screen p-4 md:p-8" dir="rtl">
      <div className="max-w-screen-xl mx-auto">

        {view === "list" && (
          <div className="flex flex-col gap-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h1 className="text-[22px] font-bold text-black tracking-tight">پروژه‌ها</h1>
                <p className="text-[14px] text-neutral-500 mt-1 font-medium">مدیریت و مشاهده نمونه‌کارهای سایت</p>
              </div>
              <button
                onClick={handleOpenForm}
                className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-800 transition-colors shadow-sm w-fit"
              >
                <Icons.Plus /> افزودن پروژه جدید
              </button>
            </div>

            {isLoading ? (
              <div className="text-center py-20 text-neutral-500 font-medium">در حال بارگذاری...</div>
            ) : projects.length === 0 ? (
              // --- Empty State ---
              <div className="flex flex-col items-center justify-center bg-white border border-neutral-200 rounded-xl py-20 px-4 text-center shadow-sm">
                <div className="w-16 h-16 bg-neutral-50 text-neutral-400 rounded-full flex items-center justify-center mb-4 border border-neutral-100">
                  <Icons.Folder />
                </div>
                <h3 className="text-[16px] font-bold text-black mb-2">هنوز پروژه‌ای اضافه نشده است</h3>
                <p className="text-[13px] text-neutral-500 max-w-[300px] mb-6">
                  برای شروع، اولین نمونه‌کار خود را با استفاده از دکمه زیر در سیستم ثبت کنید.
                </p>
                <button
                  onClick={handleOpenForm}
                  className="flex items-center gap-2 bg-white text-black border border-neutral-200 px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-50 transition-colors"
                >
                  <Icons.Plus /> افزودن اولین پروژه
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {projects.map((project, idx) => (
                  <div
                    key={project.id ?? idx}
                    className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="relative aspect-[4/3] bg-neutral-100">
                      {project.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-neutral-300">
                          <Icons.Image />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <h3 className="text-[15px] font-bold text-black">{project.title}</h3>
                      <p className="text-[12px] text-neutral-400 mt-1 flex items-center gap-1.5">
                        <Icons.Calendar />
                        {project.date}
                      </p>
                      <p className="text-[13px] text-neutral-500 mt-2 leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {view === "form" && (
          <div className="flex flex-col gap-6 max-w-2xl mx-auto">
            <button
              onClick={() => setView("list")}
              className="flex items-center gap-2 text-[13px] font-bold text-neutral-500 hover:text-black w-fit"
            >
              <Icons.ArrowRight /> بازگشت به لیست
            </button>

            <div className="bg-white border border-neutral-200 rounded-xl p-6 md:p-8 shadow-sm">
              <h2 className="text-[18px] font-bold text-black mb-1">افزودن پروژه جدید</h2>
              <p className="text-[13px] text-neutral-500 mb-6">اطلاعات نمونه‌کار جدید را وارد کنید</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* آپلود تصویر */}
                <div>
                  <label className="text-[13px] font-bold text-black mb-2 block">
                    تصویر پروژه <span className="text-red-500">*</span>
                  </label>
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className="relative border-2 border-dashed border-neutral-200 rounded-xl overflow-hidden cursor-pointer hover:border-neutral-400 transition-colors bg-neutral-50"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      onChange={handleFileInputChange}
                      className="hidden"
                    />
                    {imagePreview ? (
                      <div className="relative aspect-[16/9]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imagePreview} alt="پیش‌نمایش" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveImage();
                          }}
                          className="absolute top-3 left-3 w-8 h-8 flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition-colors"
                        >
                          <Icons.X />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-2 py-12 text-neutral-400">
                        <Icons.Upload />
                        <p className="text-[13px] font-medium text-neutral-500">
                          برای آپلود کلیک کنید یا تصویر را بکشید و رها کنید
                        </p>
                        <p className="text-[11px] text-neutral-400">PNG، JPG یا WEBP</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* عنوان */}
                <div>
                  <label className="text-[13px] font-bold text-black mb-2 block">
                    عنوان پروژه <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={form.title}
                    onChange={handleFieldChange}
                    placeholder="مثلاً ویلای مدرن با نورپردازی لوکس در شمال تهران"
                    className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-[13.5px] text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* تاریخ — تقویم شمسی */}
                <div>
                  <label className="text-[13px] font-bold text-black mb-2 block">
                    تاریخ <span className="text-red-500">*</span>
                  </label>
                  <DatePicker
                    calendar={persian}
                    locale={persian_fa}
                    calendarPosition="bottom-right"
                    value={form.date}
                    onChange={(dateObject) =>
                      setForm((f) => ({
                        ...f,
                        date: dateObject ? dateObject.format("YYYY/MM/DD") : "",
                      }))
                    }
                    inputClass="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-[13.5px] text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                    placeholder="انتخاب تاریخ"
                    containerClassName="w-full"
                  />
                </div>

                {/* توضیحات */}
                <div>
                  <label className="text-[13px] font-bold text-black mb-2 block">
                    توضیحات <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleFieldChange}
                    rows={4}
                    placeholder="توضیح کوتاهی درباره‌ی این پروژه بنویسید..."
                    className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-[13.5px] text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                {formError && (
                  <p className="text-[12.5px] text-red-500 font-medium">{formError}</p>
                )}

                <div className="flex items-center gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-800 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <Icons.Spinner /> در حال ارسال...
                      </>
                    ) : (
                      <>
                        <Icons.Plus /> ثبت پروژه
                      </>
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={() => setView("list")}
                    className="px-6 py-2.5 rounded-lg text-[13px] font-bold text-neutral-500 hover:text-black hover:bg-neutral-50 transition-colors"
                  >
                    انصراف
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
