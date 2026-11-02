// "use client";
// import { useState, useRef, useEffect } from "react";

// const Icons = {
//   Plus: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5v14"/></svg>,
//   ArrowRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
//   Upload: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
//   Users: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
//   X: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
//   Spinner: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="animate-spin"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25"/><path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>,
// };

// const emptyForm = { name: "", role: "" };

// export default function Team() {
//   const [view, setView] = useState("list");
//   const [members, setMembers] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);

//   // ── فرم افزودن عضو تیم ──
//   const [form, setForm] = useState(emptyForm);
//   const [imageFile, setImageFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [submitting, setSubmitting] = useState(false);
//   const [formError, setFormError] = useState("");
//   const fileInputRef = useRef(null);

//   useEffect(() => {
//     const fetchMembers = async () => {
//       try {
//         const response = await fetch("/api/team");
//         if (!response.ok) throw new Error("خطا در شبکه");
//         const data = await response.json();
//         setMembers(data);
//       } catch (error) {
//         console.error("خطا:", error);
//       } finally {
//         setIsLoading(false);
//       }
//     };
//     fetchMembers();
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

//     if (!form.name.trim() || !form.role.trim()) {
//       setFormError("لطفاً تمام فیلدهای الزامی را پر کنید.");
//       return;
//     }

//     setSubmitting(true);
//     try {
//       const body = new FormData();
//       body.append("name", form.name);
//       body.append("role", form.role);
//       if (imageFile) body.append("image", imageFile);

//       const response = await fetch("/api/team", {
//         method: "POST",
//         body,
//       });

//       if (!response.ok) throw new Error("خطا در ارسال اطلاعات به سرور");

//       const newMember = await response.json();
//       setMembers((prev) => [newMember, ...prev]);
//       resetForm();
//       setView("list");
//     } catch (error) {
//       console.error("خطا:", error);
//       setFormError("ارسال اطلاعات با خطا مواجه شد. دوباره تلاش کنید.");
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
//                 <h1 className="text-[22px] font-bold text-black tracking-tight">تیم</h1>
//                 <p className="text-[14px] text-neutral-500 mt-1 font-medium">مدیریت اعضای تیم برای صفحه‌ی درباره‌ی ما</p>
//               </div>
//               <button
//                 onClick={handleOpenForm}
//                 className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-800 transition-colors shadow-sm w-fit"
//               >
//                 <Icons.Plus /> افزودن عضو جدید
//               </button>
//             </div>

//             {isLoading ? (
//               <div className="text-center py-20 text-neutral-500 font-medium">در حال بارگذاری...</div>
//             ) : members.length === 0 ? (
//               // --- Empty State ---
//               <div className="flex flex-col items-center justify-center bg-white border border-neutral-200 rounded-xl py-20 px-4 text-center shadow-sm">
//                 <div className="w-16 h-16 bg-neutral-50 text-neutral-400 rounded-full flex items-center justify-center mb-4 border border-neutral-100">
//                   <Icons.Users />
//                 </div>
//                 <h3 className="text-[16px] font-bold text-black mb-2">هنوز کسی رو اضافه نکردی</h3>
//                 <p className="text-[13px] text-neutral-500 max-w-[300px] mb-6">
//                   برای شروع، اولین عضو تیم رو با استفاده از دکمه زیر در سیستم ثبت کن.
//                 </p>
//                 <button
//                   onClick={handleOpenForm}
//                   className="flex items-center gap-2 bg-white text-black border border-neutral-200 px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-50 transition-colors"
//                 >
//                   <Icons.Plus /> افزودن اولین عضو
//                 </button>
//               </div>
//             ) : (
//               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
//                 {members.map((member, idx) => (
//                   <div
//                     key={member.id ?? idx}
//                     className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
//                   >
//                     <div className="relative aspect-square bg-neutral-100">
//                       {member.image ? (
//                         // eslint-disable-next-line @next/next/no-img-element
//                         <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
//                       ) : (
//                         <div className="w-full h-full flex items-center justify-center text-neutral-300">
//                           <Icons.Users />
//                         </div>
//                       )}
//                     </div>
//                     <div className="p-4">
//                       <h3 className="text-[14px] font-bold text-black truncate">{member.name}</h3>
//                       <p className="text-[12.5px] text-neutral-500 mt-0.5 truncate">{member.role}</p>
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
//               <h2 className="text-[18px] font-bold text-black mb-1">افزودن عضو جدید</h2>
//               <p className="text-[13px] text-neutral-500 mb-6">اطلاعات عضو تیم رو وارد کن</p>

//               <form onSubmit={handleSubmit} className="flex flex-col gap-5">
//                 {/* آپلود تصویر */}
//                 <div>
//                   <label className="text-[13px] font-bold text-black mb-2 block">
//                     عکس پروفایل <span className="text-red-500">*</span>
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
//                       <div className="relative aspect-square w-40 mx-auto my-4 rounded-full overflow-hidden">
//                         {/* eslint-disable-next-line @next/next/no-img-element */}
//                         <img src={imagePreview} alt="پیش‌نمایش" className="w-full h-full object-cover" />
//                         <button
//                           type="button"
//                           onClick={(e) => {
//                             e.stopPropagation();
//                             handleRemoveImage();
//                           }}
//                           className="absolute top-1.5 left-1.5 w-7 h-7 flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition-colors"
//                         >
//                           <Icons.X />
//                         </button>
//                       </div>
//                     ) : (
//                       <div className="flex flex-col items-center justify-center gap-2 py-12 text-neutral-400">
//                         <Icons.Upload />
//                         <p className="text-[13px] font-medium text-neutral-500">
//                           برای آپلود کلیک کن یا عکس رو بکش و رها کن
//                         </p>
//                         <p className="text-[11px] text-neutral-400">PNG، JPG یا WEBP</p>
//                       </div>
//                     )}
//                   </div>
//                 </div>

//                 {/* نام */}
//                 <div>
//                   <label className="text-[13px] font-bold text-black mb-2 block">
//                     نام و نام خانوادگی <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="name"
//                     value={form.name}
//                     onChange={handleFieldChange}
//                     placeholder="مثلاً سارا محمدی"
//                     className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-[13.5px] text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
//                   />
//                 </div>

//                 {/* سمت */}
//                 <div>
//                   <label className="text-[13px] font-bold text-black mb-2 block">
//                     سمت <span className="text-red-500">*</span>
//                   </label>
//                   <input
//                     type="text"
//                     name="role"
//                     value={form.role}
//                     onChange={handleFieldChange}
//                     placeholder="مثلاً معمار ارشد"
//                     className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-[13.5px] text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
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
//                         <Icons.Plus /> ثبت عضو
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
import { api } from "../config";

const Icons = {
  Plus: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5v14"/></svg>,
  ArrowRight: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>,
  Upload: () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  Users: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  X: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>,
  Spinner: () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="animate-spin"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="3" opacity="0.25"/><path d="M21 12a9 9 0 0 0-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/></svg>,
  File: () => <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>,
  Mail: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="5" width="20" height="14" rx="2"/><path d="M3 6l9 7 9-7"/></svg>,
  Phone: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 5a2 2 0 0 1 2-2h3.28a1 1 0 0 1 .948.684l1.498 4.493a1 1 0 0 1-.502 1.21l-2.257 1.13a11.042 11.042 0 0 0 5.516 5.516l1.13-2.257a1 1 0 0 1 1.21-.502l4.493 1.498a1 1 0 0 1 .684.949V19a2 2 0 0 1-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>,
  Download: () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>,
};

const emptyForm = { name: "", role: "" };

export default function Team() {
  const [view, setView] = useState("list");
  const [activeTab, setActiveTab] = useState("team"); // "team" | "resumes"
  const [members, setMembers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // ── رزومه‌های ارسالی برای استخدام ──
  const [resumes, setResumes] = useState([]);
  const [isLoadingResumes, setIsLoadingResumes] = useState(true);

  // ── فرم افزودن عضو تیم ──
  const [form, setForm] = useState(emptyForm);
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await api.get("/api/team");
        // const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("خطا:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMembers();
  }, []);

  // useEffect(() => {
  //   const fetchResumes = async () => {
  //     try {
  //       const response = await fetch("/api/resumes");
  //       if (!response.ok) throw new Error("خطا در شبکه");
  //       const data = await response.json();
  //       setResumes(data);
  //     } catch (error) {
  //       console.error("خطا:", error);
  //     } finally {
  //       setIsLoadingResumes(false);
  //     }
  //   };
  //   fetchResumes();
  // }, []);

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

    if (!form.name.trim() || !form.role.trim()) {
      setFormError("لطفاً تمام فیلدهای الزامی را پر کنید.");
      return;
    }

    setSubmitting(true);
    try {
      const body = new FormData();
      body.append("name", form.name);
      body.append("role", form.role);
      if (imageFile) body.append("image", imageFile);

      const response = await fetch("/api/team", {
        method: "POST",
        body,
      });

      if (!response.ok) throw new Error("خطا در ارسال اطلاعات به سرور");

      const newMember = await response.json();
      setMembers((prev) => [newMember, ...prev]);
      resetForm();
      setView("list");
    } catch (error) {
      console.error("خطا:", error);
      setFormError("ارسال اطلاعات با خطا مواجه شد. دوباره تلاش کنید.");
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
                <h1 className="text-[22px] font-bold text-black tracking-tight">تیم</h1>
                <p className="text-[14px] text-neutral-500 mt-1 font-medium">مدیریت اعضای تیم و رزومه‌های ارسالی برای استخدام</p>
              </div>
              {activeTab === "team" && (
                <button
                  onClick={handleOpenForm}
                  className="flex items-center gap-2 bg-black text-white px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-800 transition-colors shadow-sm w-fit"
                >
                  <Icons.Plus /> افزودن عضو جدید
                </button>
              )}
            </div>

            {/* تب‌ها */}
            <div className="flex items-center gap-2 border-b border-neutral-200">
              <button
                onClick={() => setActiveTab("team")}
                className={`px-4 py-2.5 text-[13px] font-bold border-b-2 -mb-px transition-colors ${
                  activeTab === "team"
                    ? "border-black text-black"
                    : "border-transparent text-neutral-400 hover:text-black"
                }`}
              >
                اعضای تیم
              </button>
              <button
                onClick={() => setActiveTab("resumes")}
                className={`flex items-center gap-2 px-4 py-2.5 text-[13px] font-bold border-b-2 -mb-px transition-colors ${
                  activeTab === "resumes"
                    ? "border-black text-black"
                    : "border-transparent text-neutral-400 hover:text-black"
                }`}
              >
                رزومه‌های ارسالی
                {resumes.length > 0 && (
                  <span className="text-[10px] font-bold bg-black text-white rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
                    {resumes.length}
                  </span>
                )}
              </button>
            </div>

            {activeTab === "team" ? (
              isLoading ? (
                <div className="text-center py-20 text-neutral-500 font-medium">در حال بارگذاری...</div>
              ) : members.length === 0 ? (
                // --- Empty State ---
                <div className="flex flex-col items-center justify-center bg-white border border-neutral-200 rounded-xl py-20 px-4 text-center shadow-sm">
                  <div className="w-16 h-16 bg-neutral-50 text-neutral-400 rounded-full flex items-center justify-center mb-4 border border-neutral-100">
                    <Icons.Users />
                  </div>
                  <h3 className="text-[16px] font-bold text-black mb-2">هنوز کسی رو اضافه نکردی</h3>
                  <p className="text-[13px] text-neutral-500 max-w-[300px] mb-6">
                    برای شروع، اولین عضو تیم رو با استفاده از دکمه زیر در سیستم ثبت کن.
                  </p>
                  <button
                    onClick={handleOpenForm}
                    className="flex items-center gap-2 bg-white text-black border border-neutral-200 px-5 py-2.5 rounded-lg text-[13px] font-bold hover:bg-neutral-50 transition-colors"
                  >
                    <Icons.Plus /> افزودن اولین عضو
                  </button>
                </div>
              ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {members.map((member, idx) => (
                    <div
                      key={member.id ?? idx}
                      className="bg-white border border-neutral-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="relative aspect-square bg-neutral-100">
                        {member.image ? (
                          // eslint-disable-next-line @next/next/no-img-element
                          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center text-neutral-300">
                            <Icons.Users />
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="text-[14px] font-bold text-black truncate">{member.name}</h3>
                        <p className="text-[12.5px] text-neutral-500 mt-0.5 truncate">{member.role}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )
            ) : isLoadingResumes ? (
              <div className="text-center py-20 text-neutral-500 font-medium">در حال بارگذاری...</div>
            ) : resumes.length === 0 ? (
              // --- Empty State: رزومه ---
              <div className="flex flex-col items-center justify-center bg-white border border-neutral-200 rounded-xl py-20 px-4 text-center shadow-sm">
                <div className="w-16 h-16 bg-neutral-50 text-neutral-400 rounded-full flex items-center justify-center mb-4 border border-neutral-100">
                  <Icons.File />
                </div>
                <h3 className="text-[16px] font-bold text-black mb-2">هنوز رزومه‌ای ارسال نشده</h3>
                <p className="text-[13px] text-neutral-500 max-w-[320px]">
                  رزومه‌هایی که از فرم «همکاری با ما» توی سایت فرستاده بشن، همین‌جا نمایش داده می‌شن.
                </p>
              </div>
            ) : (
              <div className="flex flex-col gap-3">
                {resumes.map((r, idx) => (
                  <div
                    key={r.id ?? idx}
                    className="bg-white border border-neutral-200 rounded-xl p-4 md:p-5 flex flex-col md:flex-row md:items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="w-11 h-11 shrink-0 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center text-neutral-400">
                      <Icons.File />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="text-[14px] font-bold text-black">{r.name}</h3>
                        {r.position && (
                          <span className="text-[11px] font-bold text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-full">
                            {r.position}
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1.5">
                        {r.email && (
                          <span className="flex items-center gap-1.5 text-[12px] text-neutral-500">
                            <Icons.Mail /> {r.email}
                          </span>
                        )}
                        {r.phone && (
                          <span className="flex items-center gap-1.5 text-[12px] text-neutral-500">
                            <Icons.Phone /> {r.phone}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <span className="text-[11.5px] text-neutral-400">{r.date}</span>
                      {r.resumeUrl && (
                        <a
                          href={r.resumeUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center gap-1.5 bg-black text-white px-4 py-2 rounded-lg text-[12px] font-bold hover:bg-neutral-800 transition-colors"
                        >
                          <Icons.Download /> مشاهده رزومه
                        </a>
                      )}
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
              <h2 className="text-[18px] font-bold text-black mb-1">افزودن عضو جدید</h2>
              <p className="text-[13px] text-neutral-500 mb-6">اطلاعات عضو تیم رو وارد کن</p>

              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                {/* آپلود تصویر */}
                <div>
                  <label className="text-[13px] font-bold text-black mb-2 block">
                    عکس پروفایل <span className="text-red-500">*</span>
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
                      <div className="relative aspect-square w-40 mx-auto my-4 rounded-full overflow-hidden">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={imagePreview} alt="پیش‌نمایش" className="w-full h-full object-cover" />
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleRemoveImage();
                          }}
                          className="absolute top-1.5 left-1.5 w-7 h-7 flex items-center justify-center rounded-full bg-black/70 text-white hover:bg-black transition-colors"
                        >
                          <Icons.X />
                        </button>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center gap-2 py-12 text-neutral-400">
                        <Icons.Upload />
                        <p className="text-[13px] font-medium text-neutral-500">
                          برای آپلود کلیک کن یا عکس رو بکش و رها کن
                        </p>
                        <p className="text-[11px] text-neutral-400">PNG، JPG یا WEBP</p>
                      </div>
                    )}
                  </div>
                </div>

                {/* نام */}
                <div>
                  <label className="text-[13px] font-bold text-black mb-2 block">
                    نام و نام خانوادگی <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleFieldChange}
                    placeholder="مثلاً سارا محمدی"
                    className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-[13.5px] text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* سمت */}
                <div>
                  <label className="text-[13px] font-bold text-black mb-2 block">
                    سمت <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="role"
                    value={form.role}
                    onChange={handleFieldChange}
                    placeholder="مثلاً معمار ارشد"
                    className="w-full border border-neutral-200 rounded-lg px-4 py-2.5 text-[13.5px] text-black placeholder:text-neutral-400 focus:outline-none focus:border-black transition-colors"
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
                        <Icons.Plus /> ثبت عضو
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