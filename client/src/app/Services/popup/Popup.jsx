// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";

// export default function FreeConsultation() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     phone: "",
//     city: "",
//     message: "",
//   });

//   const [focused, setFocused] = useState({
//     firstName: false,
//     lastName: false,
//     phone: false,
//     city: false,
//     message: false,
//   });

//   const cities = [
//     "تهران",
//     "اصفهان",
//     "شیراز",
//     "مشهد",
//     "تبریز",
//     "کرج",
//     "قم",
//     "اهواز",
//     "رشت",
//     "کرمانشاه",
//     "زاهدان",
//     "همدان",
//     "اراک",
//     "یزد",
//     "اردبیل",
//     "بندرعباس",
//     "کرمان",
//     "سنندج",
//     "گرگان",
//     "قزوین",
//   ];

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Data:", formData);
//     alert("درخواست مشاوره شما با موفقیت ثبت شد!");
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleFocus = (e) => {
//     setFocused({
//       ...focused,
//       [e.target.name]: true,
//     });
//   };

//   const handleBlur = (e) => {
//     if (!e.target.value) {
//       setFocused({
//         ...focused,
//         [e.target.name]: false,
//       });
//     }
//   };

//   // SVG Icons
//   const UserIcon = () => (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//     </svg>
//   );

//   const PhoneIcon = () => (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
//     </svg>
//   );

//   const LocationIcon = () => (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
//     </svg>
//   );

//   const MessageIcon = () => (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//     </svg>
//   );

//   const ArrowIcon = () => (
//     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
//     </svg>
//   );

//   return (
//     <section className="font-vazir relative py-28 px-4 md:py-40 md:px-6 overflow-hidden bg-white">
//       {/* پس‌زمینه سفید با افکت‌های ملایم */}
//       <div className="absolute inset-0">
//         <div className="absolute top-[-30%] right-[-20%] w-[800px] h-[800px] bg-gradient-to-l from-[#006a9c]/5 via-[#006a9c]/3 to-transparent rounded-full blur-3xl" />
//         <div className="absolute bottom-[-20%] left-[-10%] w-[700px] h-[700px] bg-gradient-to-r from-[#e88934]/5 via-[#7c3aed]/3 to-transparent rounded-full blur-3xl" />
//         <div className="absolute inset-0" style={{
//           backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.03) 1px, transparent 0)`,
//           backgroundSize: '40px 40px'
//         }} />
//       </div>

//       {/* محتوای اصلی */}
//       <div className="relative z-10 max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-16 items-center">
//           {/* سمت چپ - فرم */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7 }}
//             dir="rtl"
//           >
//             <div className="bg-white shadow-2xl rounded-[40px] p-8 md:p-10 border border-gray-100">
//               <div className="flex items-center gap-4 mb-6">
//                 <span className="text-[#006a9c] text-sm font-bold tracking-[5px] uppercase">
//                   مشاوره رایگان
//                 </span>
//                 <div className="w-12 h-0.5 bg-[#006a9c]" />
//               </div>

//               <h3 className="text-3xl font-black mb-2 text-gray-800">
//                 درخواست مشاوره
//               </h3>
//               <p className="text-gray-500 text-sm mb-6">
//                 فرم زیر را پر کنید تا کارشناسان ما با شما تماس بگیرند
//               </p>

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 {/* نام و نام خانوادگی */}
//                 <div className="grid grid-cols-2 gap-4">
//                   {/* Input نام */}
//                   <div className="relative">
//                     <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
//                       <UserIcon />
//                     </div>
//                     <input
//                       type="text"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       onFocus={handleFocus}
//                       onBlur={handleBlur}
//                       required
//                       className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-4 pr-12 pl-4 text-gray-800 placeholder-transparent focus:outline-none focus:border-[#006a9c] transition-all duration-300"
//                       placeholder=" "
//                     />
//                     <span
//                       className={`absolute right-12 transition-all duration-300 ${
//                         focused.firstName || formData.firstName
//                           ? "top-1 text-[10px] text-[#006a9c] font-bold"
//                           : "top-1/2 -translate-y-1/2 text-base text-gray-500"
//                       }`}
//                     >
//                       نام <span className="text-red-500">*</span>
//                     </span>
//                   </div>

//                   {/* Input نام خانوادگی */}
//                   <div className="relative">
//                     <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
//                       <UserIcon />
//                     </div>
//                     <input
//                       type="text"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       onFocus={handleFocus}
//                       onBlur={handleBlur}
//                       required
//                       className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-4 pr-12 pl-4 text-gray-800 placeholder-transparent focus:outline-none focus:border-[#006a9c] transition-all duration-300"
//                       placeholder=" "
//                     />
//                     <span
//                       className={`absolute right-12 transition-all duration-300 pointer-events-none ${
//                         focused.lastName || formData.lastName
//                           ? "top-1 text-[10px] text-[#006a9c] font-bold"
//                           : "top-1/2 -translate-y-1/2 text-base text-gray-500"
//                       }`}
//                     >
//                       نام خانوادگی <span className="text-red-500">*</span>
//                     </span>
//                   </div>
//                 </div>

//                 {/* تلفن */}
//                 <div className="relative">
//                   <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 z-10">
//                     <PhoneIcon />
//                   </div>
//                   <input
//                     type="tel"
//                     name="phone"
//                     value={formData.phone}
//                     onChange={handleChange}
//                     onFocus={handleFocus}
//                     onBlur={handleBlur}
//                     required
//                     dir="ltr"
//                     className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-4 pr-12 pl-4 text-gray-800 placeholder-transparent focus:outline-none focus:border-[#006a9c] transition-all duration-300"
//                     placeholder=" "
//                   />
//                   <span
//                     className={`absolute right-12 transition-all duration-300 pointer-events-none ${
//                       focused.phone || formData.phone
//                         ? "top-1 text-[10px] text-[#006a9c] font-bold"
//                         : "top-1/2 -translate-y-1/2 text-base text-gray-500"
//                     }`}
//                   >
//                     شماره تلفن <span className="text-red-500">*</span>
//                   </span>
//                 </div>

//                 {/* شهر */}
//                 <div className="relative">
//                   <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 z-10 pointer-events-none">
//                     <LocationIcon />
//                   </div>
//                   <select
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     onFocus={() => setFocused({ ...focused, city: true })}
//                     onBlur={(e) => {
//                       if (!e.target.value) {
//                         setFocused({ ...focused, city: false });
//                       }
//                     }}
//                     required
//                     className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-4 pr-12 pl-4 text-gray-800 appearance-none focus:outline-none focus:border-[#006a9c] transition-all duration-300 cursor-pointer"
//                   >
//                     <option value="" className="bg-white text-gray-500">
//                       شهر خود را انتخاب کنید
//                     </option>
//                     {cities.map((city) => (
//                       <option key={city} value={city} className="bg-white">
//                         {city}
//                       </option>
//                     ))}
//                   </select>
//                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                     </svg>
//                   </div>
//                   <span
//                     className={`absolute right-12 transition-all duration-300 pointer-events-none ${
//                       focused.city || formData.city
//                         ? "top-1 text-[10px] text-[#006a9c] font-bold"
//                         : "top-1/2 -translate-y-1/2 text-base text-gray-500"
//                     }`}
//                   >
//                     شهر <span className="text-red-500">*</span>
//                   </span>
//                 </div>

//                 {/* پیام */}
//                 <div className="relative">
//                   <div className="absolute right-3 top-4 text-gray-400 z-10">
//                     <MessageIcon />
//                   </div>
//                   <textarea
//                     name="message"
//                     value={formData.message}
//                     onChange={handleChange}
//                     onFocus={handleFocus}
//                     onBlur={handleBlur}
//                     rows={4}
//                     className="w-full bg-gray-50 border-2 border-gray-200 rounded-2xl py-4 pr-12 pl-4 text-gray-800 placeholder-transparent focus:outline-none focus:border-[#006a9c] transition-all duration-300 resize-none"
//                     placeholder=" "
//                   />
//                   <span
//                     className={`absolute right-12 transition-all duration-300 pointer-events-none ${
//                       focused.message || formData.message
//                         ? "top-1 text-[10px] text-[#006a9c] font-bold"
//                         : "top-4 text-base text-gray-500"
//                     }`}
//                   >
//                     پیام شما (اختیاری)
//                   </span>
//                 </div>

//                 {/* دکمه ارسال */}
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full bg-gradient-to-r from-[#006a9c] to-[#0088cc] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-[#006a9c]/25 group"
//                 >
//                   <span>ثبت درخواست مشاوره</span>
//                   <ArrowIcon />
//                 </motion.button>

//                 <p className="text-gray-400 text-xs text-center mt-4">
//                   با ثبت فرم، با قوانین و حریم خصوصی ما موافقت کرده‌اید
//                 </p>
//               </form>
//             </div>
//           </motion.div>

//           {/* سمت راست - توضیحات */}
//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.7, delay: 0.2 }}
//             className="text-right order-first md:order-last"
//             dir="rtl"
//           >
//             <div className="flex items-center gap-4 mb-6 justify-end">
//               <span className="text-[#006a9c] text-sm font-bold tracking-[5px] uppercase">
//                 چرا مهراز؟
//               </span>
//               <div className="w-12 h-0.5 bg-[#006a9c]" />
//             </div>

//             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight text-gray-800">
//               با ما
//               <span className="text-[#006a9c]"> رایگان </span>
//               مشورت کنید
//             </h2>

//             <p className="text-gray-500 leading-[2] text-base md:text-lg mb-8 max-w-lg mr-auto">
//               تیم متخصص مهراز آماده پاسخگویی به سوالات شماست. فرم را پر کنید تا
//               کارشناسان ما در اسرع وقت با شما تماس بگیرند.
//             </p>

//             {/* مزایا */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-4 justify-end">
//                 <div className="text-right">
//                   <h4 className="font-bold text-gray-800">مشاوره تخصصی</h4>
//                   <p className="text-gray-500 text-sm">بررسی دقیق نیازهای شما</p>
//                 </div>
//                 <div className="w-12 h-12 rounded-full bg-[#006a9c]/10 flex items-center justify-center text-[#006a9c] text-xl">
//                   ✓
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 justify-end">
//                 <div className="text-right">
//                   <h4 className="font-bold text-gray-800">پاسخگویی سریع</h4>
//                   <p className="text-gray-500 text-sm">تماس در کمتر از ۲۴ ساعت</p>
//                 </div>
//                 <div className="w-12 h-12 rounded-full bg-[#e88934]/10 flex items-center justify-center text-[#e88934] text-xl">
//                   ✓
//                 </div>
//               </div>

//               <div className="flex items-center gap-4 justify-end">
//                 <div className="text-right">
//                   <h4 className="font-bold text-gray-800">بدون تعهد</h4>
//                   <p className="text-gray-500 text-sm">مشاوره کاملاً رایگان</p>
//                 </div>
//                 <div className="w-12 h-12 rounded-full bg-[#059669]/10 flex items-center justify-center text-[#059669] text-xl">
//                   ✓
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }







// "use client";
// import { motion } from "framer-motion";
// import { useState } from "react";

// const cities = [
//   "تهران","اصفهان","شیراز","مشهد","تبریز","کرج","قم","اهواز",
//   "رشت","کرمانشاه","زاهدان","همدان","اراک","یزد","اردبیل",
//   "بندرعباس","کرمان","سنندج","گرگان","قزوین",
// ];

// const benefits = [
//   { icon: "✦", color: "#006a9c", bg: "rgba(0,106,156,0.08)", title: "مشاوره تخصصی", desc: "بررسی دقیق نیازهای شما توسط کارشناس" },
//   { icon: "✦", color: "#e88934", bg: "rgba(232,137,52,0.08)", title: "پاسخگویی سریع", desc: "تماس در کمتر از ۲۴ ساعت" },
//   { icon: "✦", color: "#059669", bg: "rgba(5,150,105,0.08)", title: "کاملاً رایگان", desc: "بدون هیچ تعهد یا پرداختی" },
// ];

// function FloatingInput({ name, label, type = "text", required = false, value, onChange, onFocus, onBlur, focused, dir = "rtl", icon }) {
//   const isActive = focused || value;
//   return (
//     <div className="relative group">
//       {/* آیکون */}
//       <div className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 transition-colors duration-300 ${isActive ? "text-[#006a9c]" : "text-gray-400"}`}>
//         {icon}
//       </div>
//       <input
//         type={type}
//         name={name}
//         value={value}
//         onChange={onChange}
//         onFocus={onFocus}
//         onBlur={onBlur}
//         required={required}
//         dir={dir}
//         placeholder=" "
//         className="peer w-full bg-gray-50/80 border-2 border-gray-100 rounded-2xl pt-6 pb-3 pr-12 pl-4 text-gray-800 text-[14px] focus:outline-none focus:border-[#006a9c] focus:bg-white transition-all duration-300 group-hover:border-gray-200"
//       />
//       <label className={`absolute right-12 transition-all duration-250 pointer-events-none font-medium ${
//         isActive
//           ? "top-2 text-[10px] text-[#006a9c] tracking-wider uppercase"
//           : "top-1/2 -translate-y-1/2 text-[14px] text-gray-400"
//       }`}>
//         {label}{required && <span className="text-red-400 mr-0.5">*</span>}
//       </label>
//     </div>
//   );
// }

// function FloatingTextarea({ name, label, value, onChange, onFocus, onBlur, focused, icon }) {
//   const isActive = focused || value;
//   return (
//     <div className="relative group">
//       <div className={`absolute right-4 top-5 z-10 transition-colors duration-300 ${isActive ? "text-[#006a9c]" : "text-gray-400"}`}>
//         {icon}
//       </div>
//       <textarea
//         name={name}
//         value={value}
//         onChange={onChange}
//         onFocus={onFocus}
//         onBlur={onBlur}
//         rows={4}
//         placeholder=" "
//         className="peer w-full bg-gray-50/80 border-2 border-gray-100 rounded-2xl pt-8 pb-3 pr-12 pl-4 text-gray-800 text-[14px] focus:outline-none focus:border-[#006a9c] focus:bg-white transition-all duration-300 resize-none group-hover:border-gray-200"
//       />
//       <label className={`absolute right-12 transition-all duration-250 pointer-events-none font-medium ${
//         isActive
//           ? "top-2 text-[10px] text-[#006a9c] tracking-wider uppercase"
//           : "top-5 text-[14px] text-gray-400"
//       }`}>
//         {label}
//       </label>
//     </div>
//   );
// }

// export default function FreeConsultation() {
//   const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", city: "", message: "" });
//   const [focused, setFocused] = useState({ firstName: false, lastName: false, phone: false, city: false, message: false });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
//   const handleFocus = (e) => setFocused({ ...focused, [e.target.name]: true });
//   const handleBlur = (e) => {
//     if (!e.target.value) setFocused({ ...focused, [e.target.name]: false });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     setTimeout(() => setSubmitted(false), 4000);
//   };

//   const UserIcon = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>;
//   const PhoneIcon = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>;
//   const LocationIcon = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
//   const MsgIcon = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>;

//   return (
//     <section dir="rtl" className="font-vazir relative py-24 md:py-36 px-4 md:px-8 overflow-hidden bg-white">

//       {/* گرید پس‌زمینه */}
//       <div
//         className="absolute inset-0 pointer-events-none"
//         style={{
//           backgroundImage: "linear-gradient(rgba(0,0,0,.038) 1px,transparent 1px),linear-gradient(90deg,rgba(0,0,0,.038) 1px,transparent 1px)",
//           backgroundSize: "48px 48px",
//           WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%,#000 40%,transparent 100%)",
//           maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%,#000 40%,transparent 100%)",
//         }}
//       />

//       {/* نورهای محیطی */}
//       <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[140px] bg-[#006a9c]/6 pointer-events-none" />
//       <div className="absolute bottom-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[140px] bg-[#e88934]/5 pointer-events-none" />

//       <div className="relative z-10 max-w-6xl mx-auto">
//         <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

//           {/* ── سمت راست: متن + مزایا ── */}
//           <motion.div
//             initial={{ opacity: 0, x: 40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
//           >
//             {/* eyebrow */}
//             <div className="flex items-center gap-3 mb-6 justify-end">
//               <div className="w-8 h-px bg-[#006a9c]" />
//               <span className="text-[10px] font-bold tracking-[5px] text-[#006a9c] uppercase">چرا مهراز؟</span>
//             </div>

//             {/* عنوان */}
//             <h2 className="text-[38px] md:text-[52px] font-black text-gray-900 leading-[1.15] mb-5 tracking-tight">
//               با ما
//               <span className="text-[#006a9c]"> رایگان </span>
//               <br />مشورت کنید
//             </h2>

//             <p className="text-gray-500 text-[14.5px] leading-[2.1] mb-10 max-w-md mr-auto font-light">
//               تیم متخصص مهراز آماده پاسخگویی به سوالات شماست. فرم را پر کنید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند.
//             </p>

//             {/* مزایا */}
//             <div className="flex flex-col gap-4">
//               {benefits.map((b, i) => (
//                 <motion.div
//                   key={i}
//                   initial={{ opacity: 0, x: 20 }}
//                   whileInView={{ opacity: 1, x: 0 }}
//                   viewport={{ once: true }}
//                   transition={{ delay: 0.15 + i * 0.1, duration: 0.55 }}
//                   className="flex items-center gap-4 group justify-end"
//                 >
//                   <div className="text-right">
//                     <p className="font-bold text-gray-800 text-[14px]">{b.title}</p>
//                     <p className="text-gray-400 text-[12px] mt-0.5">{b.desc}</p>
//                   </div>
//                   <div
//                     className="w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center text-[15px] transition-transform duration-300 group-hover:scale-110"
//                     style={{ background: b.bg, color: b.color }}
//                   >
//                     {b.icon}
//                   </div>
//                 </motion.div>
//               ))}
//             </div>

//             {/* ستاره‌های اعتماد */}
//             <div className="flex items-center gap-3 mt-10 justify-end">
//               <div className="text-right">
//                 <p className="text-[12px] text-gray-400">بر اساس نظر مشتریان</p>
//                 <p className="text-[13px] font-bold text-gray-700">امتیاز ۴.۹ از ۵</p>
//               </div>
//               <div className="flex gap-1">
//                 {[1,2,3,4,5].map(i => (
//                   <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
//                   </svg>
//                 ))}
//               </div>
//             </div>
//           </motion.div>

//           {/* ── سمت چپ: فرم ── */}
//           <motion.div
//             initial={{ opacity: 0, x: -40 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
//           >
//             <div className="bg-white rounded-[36px] p-8 md:p-10 shadow-[0_8px_60px_rgba(0,0,0,0.08)] border border-gray-100/80 relative overflow-hidden">

//               {/* خط رنگی بالای فرم */}
//               <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-l from-[#006a9c] via-[#0088cc] to-transparent" />

//               {/* هدر فرم */}
//               <div className="mb-7">
//                 <div className="flex items-center gap-3 mb-3">
//                   <div className="w-8 h-px bg-[#006a9c]" />
//                   <span className="text-[10px] font-bold tracking-[4px] text-[#006a9c] uppercase">مشاوره رایگان</span>
//                 </div>
//                 <h3 className="text-[24px] font-black text-gray-900">درخواست مشاوره</h3>
//                 <p className="text-gray-400 text-[13px] mt-1.5">فرم را پر کنید تا کارشناسان ما با شما تماس بگیرند</p>
//               </div>

//               <form onSubmit={handleSubmit} className="space-y-4">

//                 {/* نام و نام خانوادگی */}
//                 <div className="grid grid-cols-2 gap-4">
//                   <FloatingInput name="firstName" label="نام" required value={formData.firstName} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} focused={focused.firstName} icon={UserIcon} />
//                   <FloatingInput name="lastName" label="نام خانوادگی" required value={formData.lastName} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} focused={focused.lastName} icon={UserIcon} />
//                 </div>

//                 {/* تلفن */}
//                 <FloatingInput name="phone" label="شماره تلفن" type="tel" required dir="ltr" value={formData.phone} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} focused={focused.phone} icon={PhoneIcon} />

//                 {/* شهر — select سفارشی */}
//                 <div className="relative group">
//                   <div className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none transition-colors duration-300 ${focused.city || formData.city ? "text-[#006a9c]" : "text-gray-400"}`}>
//                     {LocationIcon}
//                   </div>
//                   <select
//                     name="city"
//                     value={formData.city}
//                     onChange={handleChange}
//                     onFocus={() => setFocused({ ...focused, city: true })}
//                     onBlur={(e) => { if (!e.target.value) setFocused({ ...focused, city: false }); }}
//                     required
//                     className="w-full bg-gray-50/80 border-2 border-gray-100 rounded-2xl pt-6 pb-3 pr-12 pl-4 text-gray-800 text-[14px] appearance-none focus:outline-none focus:border-[#006a9c] focus:bg-white transition-all duration-300 cursor-pointer group-hover:border-gray-200"
//                   >
//                     <option value="" disabled />
//                     {cities.map(c => <option key={c} value={c}>{c}</option>)}
//                   </select>
//                   <label className={`absolute right-12 transition-all duration-250 pointer-events-none font-medium ${
//                     focused.city || formData.city
//                       ? "top-2 text-[10px] text-[#006a9c] tracking-wider uppercase"
//                       : "top-1/2 -translate-y-1/2 text-[14px] text-gray-400"
//                   }`}>
//                     شهر<span className="text-red-400 mr-0.5">*</span>
//                   </label>
//                   <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
//                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
//                   </div>
//                 </div>

//                 {/* پیام */}
//                 <FloatingTextarea name="message" label="پیام شما (اختیاری)" value={formData.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} focused={focused.message} icon={MsgIcon} />

//                 {/* دکمه ارسال */}
//                 <motion.button
//                   type="submit"
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   className="w-full relative overflow-hidden bg-[#006a9c] text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:shadow-[0_12px_32px_rgba(0,106,156,0.3)] group"
//                 >
//                   <span className="relative z-10">
//                     {submitted ? "✓ درخواست ثبت شد!" : "ثبت درخواست مشاوره"}
//                   </span>
//                   {!submitted && (
//                     <svg className="w-5 h-5 relative z-10 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
//                     </svg>
//                   )}
//                   {/* لایه hover */}
//                   <span className="absolute inset-0 bg-gradient-to-l from-[#005580] to-[#006a9c] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//                 </motion.button>

//                 <p className="text-gray-300 text-[11px] text-center">
//                   با ثبت فرم، با قوانین و حریم خصوصی ما موافقت کرده‌اید
//                 </p>
//               </form>
//             </div>
//           </motion.div>

//         </div>
//       </div>
//     </section>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { useAppContext } from "@/app/Context/Context";

const cities = [
  "تهران","اصفهان","شیراز","مشهد","تبریز","کرج","قم","اهواز",
  "رشت","کرمانشاه","زاهدان","همدان","اراک","یزد","اردبیل",
  "بندرعباس","کرمان","سنندج","گرگان","قزوین",
];

const benefits = [
  { icon: "✦", color: "#3bb1ec", bg: "rgba(0,106,156,0.14)", title: "مشاوره تخصصی", desc: "بررسی دقیق نیازهای شما توسط کارشناس" },
  { icon: "✦", color: "#f0a35f", bg: "rgba(232,137,52,0.12)", title: "پاسخگویی سریع", desc: "تماس در کمتر از ۲۴ ساعت" },
  { icon: "✦", color: "#34d399", bg: "rgba(5,150,105,0.12)", title: "کاملاً رایگان", desc: "بدون هیچ تعهد یا پرداختی" },
];

function FloatingInput({ name, label, type = "text", required = false, value, onChange, onFocus, onBlur, focused, dir = "rtl", icon }) {
  const isActive = focused || value;
  return (
    <div className="relative group">
      <div className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 transition-colors duration-300 ${isActive ? "text-[#3bb1ec]" : "text-gray-500"}`}>
        {icon}
      </div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        required={required}
        dir={dir}
        placeholder=" "
        className="peer w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl pt-6 pb-3 pr-12 pl-4 text-white text-[14px] focus:outline-none focus:border-[#006a9c] focus:bg-white/[0.06] transition-all duration-300 group-hover:border-white/20"
      />
      <label className={`absolute right-12 transition-all duration-250 pointer-events-none font-medium ${
        isActive
          ? "top-2 text-[10px] text-[#3bb1ec] tracking-wider uppercase"
          : "top-1/2 -translate-y-1/2 text-[14px] text-gray-500"
      }`}>
        {label}{required && <span className="text-red-400 mr-0.5">*</span>}
      </label>
    </div>
  );
}

function FloatingTextarea({ name, label, value, onChange, onFocus, onBlur, focused, icon }) {
  const isActive = focused || value;
  return (
    <div className="relative group">
      <div className={`absolute right-4 top-5 z-10 transition-colors duration-300 ${isActive ? "text-[#3bb1ec]" : "text-gray-500"}`}>
        {icon}
      </div>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        rows={4}
        placeholder=" "
        className="peer w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl pt-8 pb-3 pr-12 pl-4 text-white text-[14px] focus:outline-none focus:border-[#006a9c] focus:bg-white/[0.06] transition-all duration-300 resize-none group-hover:border-white/20"
      />
      <label className={`absolute right-12 transition-all duration-250 pointer-events-none font-medium ${
        isActive
          ? "top-2 text-[10px] text-[#3bb1ec] tracking-wider uppercase"
          : "top-5 text-[14px] text-gray-500"
      }`}>
        {label}
      </label>
    </div>
  );
}

export default function Popup() {
  const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", city: "", message: "" });
  const [focused, setFocused] = useState({ firstName: false, lastName: false, phone: false, city: false, message: false });
  const [submitted, setSubmitted] = useState(false);
  const { setNotif } = useAppContext();

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleFocus = (e) => setFocused({ ...focused, [e.target.name]: true });
  const handleBlur = (e) => {
    if (!e.target.value) setFocused({ ...focused, [e.target.name]: false });
  };
const handleSubmit = (e) => {
  e.preventDefault();
  console.log("submit");

  if (!formData.firstName.trim()) {
    setNotif({
       id: Date.now(),
       message: "نام را وارد کنید",
       type: "error",
    });
    return;
  }

  if (!formData.lastName.trim()) {
    setNotif({
       id: Date.now(),
      type: "error",
      message: "نام خانوادگی را وارد کنید",
    });
    return;
  }

  if (!formData.phone.trim()) {
    setNotif({
      id: Date.now(),
      type: "error",
      message: "شماره تماس را وارد کنید",
    });
    return;
  }

  if (!formData.city.trim()) {
    setNotif({
       id: Date.now(),
      type: "error",
      message: "شهر را انتخاب کنید",
    });
    return;
  }

  setNotif({
     id: Date.now(),
     message: "درخواست شما با موفقیت ثبت شد",
     type: "success",
  });

  setSubmitted(true);

  setTimeout(() => {
    setSubmitted(false);
  }, 4000);

};

  const UserIcon = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>;
  const PhoneIcon = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>;
  const LocationIcon = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>;
  const MsgIcon = <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>;

  return (
    <section dir="rtl" className="font-vazir relative py-24 md:py-32 px-4 md:px-8 overflow-hidden bg-[#0a0a0a]">

      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.045) 1px,transparent 1px)",
          backgroundSize: "48px 48px",
          WebkitMaskImage: "radial-gradient(ellipse 85% 85% at 50% 50%,#000 40%,transparent 100%)",
          maskImage: "radial-gradient(ellipse 85% 85% at 50% 50%,#000 40%,transparent 100%)",
        }}
      />

      {/* نورهای محیطی */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full blur-[140px] bg-[#006a9c]/12 pointer-events-none" />
      <div className="absolute bottom-[-15%] left-[-5%] w-[600px] h-[600px] rounded-full blur-[140px] bg-[#e88934]/8 pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto">
        <div className="grid md:grid-cols-2 lg:gap-2 items-center">

          {/* ── سمت راست: یک ستون یکپارچه، کاملاً راست‌چین برای سایت فارسی ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center text-center"
          >
            {/* eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[10px] font-bold tracking-[5px] text-[#3bb1ec] uppercase">چرا مهراز؟</span>
              <div className="w-8 h-px bg-[#006a9c]" />
            </div>

            {/* عنوان */}
            <h2 className="text-right text-[38px] md:text-[52px] font-black text-white leading-[1.15] mb-5 tracking-tight">
              با ما
              <span className="text-[#3bb1ec]"> رایگان </span>
              <br />مشورت کنید
            </h2>

            <p className="text-gray-400 text-[14.5px] leading-[2.1] mb-10 max-w-md font-light">
              تیم متخصص مهراز آماده پاسخگویی به سوالات شماست. فرم را پر کنید تا کارشناسان ما در اسرع وقت با شما تماس بگیرند.
            </p>

            {/* مزایا — یک کارت یکپارچه به‌جای ردیف‌های پراکنده */}
            <div
              className="w-full max-w-md rounded-2xl overflow-hidden mb-8"
              style={{
                background: "rgba(255,255,255,0.03)",
                backdropFilter: "blur(18px)",
                WebkitBackdropFilter: "blur(18px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {benefits.map((b, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
                  className={`flex items-center gap-4 px-5 py-4 group ${
                    i !== benefits.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  <div
                    className="w-11 h-11 shrink-0 rounded-2xl flex items-center justify-center text-[15px] transition-transform duration-300 group-hover:scale-110 border border-white/10"
                    style={{ background: b.bg, color: b.color }}
                  >
                    {b.icon}
                  </div>
                  <div className="min-w-0 text-right">
                    <p className="font-bold text-white text-[14px]">{b.title}</p>
                    <p className="text-gray-500 text-[12px] mt-0.5">{b.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── سمت چپ: فرم ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <div
              className="rounded-[36px] p-8 md:p-12 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,0.035)",
                backdropFilter: "blur(24px)",
                WebkitBackdropFilter: "blur(24px)",
                border: "1px solid rgba(255,255,255,0.09)",
                boxShadow: "0 20px 60px rgba(0,0,0,0.55), inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              {/* خط رنگی بالای فرم */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-l from-[#0aa1e8] via-[#006a9c] to-transparent" />

              {/* هدر فرم */}
              <div className="mb-7">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-px bg-[#006a9c]" />
                  <span className="text-[10px] font-bold tracking-[4px] text-[#3bb1ec] uppercase">مشاوره رایگان</span>
                </div>
                <h3 className="text-[24px] font-black text-white">درخواست مشاوره</h3>
                <p className="text-gray-500 text-[13px] mt-1.5">فرم را پر کنید تا کارشناسان ما با شما تماس بگیرند</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">

                {/* نام و نام خانوادگی */}
                <div className="grid grid-cols-2 gap-4">
                  <FloatingInput name="firstName" label="نام" value={formData.firstName} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} focused={focused.firstName} icon={UserIcon} />
                  <FloatingInput name="lastName" label="نام خانوادگی" value={formData.lastName} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} focused={focused.lastName} icon={UserIcon} />
                </div>

                {/* تلفن */}
                <FloatingInput name="phone" label="شماره تلفن" type="tel" dir="ltr" value={formData.phone} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} focused={focused.phone} icon={PhoneIcon} />

                {/* شهر — select سفارشی */}
                <div className="relative group">
                  <div className={`absolute right-4 top-1/2 -translate-y-1/2 z-10 pointer-events-none transition-colors duration-300 ${focused.city || formData.city ? "text-[#3bb1ec]" : "text-gray-500"}`}>
                    {LocationIcon}
                  </div>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    onFocus={() => setFocused({ ...focused, city: true })}
                    onBlur={(e) => { if (!e.target.value) setFocused({ ...focused, city: false }); }}
                    className="w-full bg-white/[0.04] border-2 border-white/10 rounded-2xl pt-6 pb-3 pr-12 pl-4 text-white text-[14px] appearance-none focus:outline-none focus:border-[#006a9c] focus:bg-white/[0.06] transition-all duration-300 cursor-pointer group-hover:border-white/20"
                  >
                    <option value="" disabled className="bg-[#141414] text-white" />
                    {cities.map(c => <option key={c} value={c} className="bg-[#141414] text-white">{c}</option>)}
                  </select>
                  <label className={`absolute right-12 transition-all duration-250 pointer-events-none font-medium ${
                    focused.city || formData.city
                      ? "top-2 text-[10px] text-[#3bb1ec] tracking-wider uppercase"
                      : "top-1/2 -translate-y-1/2 text-[14px] text-gray-500"
                  }`}>
                    شهر<span className="text-red-400 mr-0.5">*</span>
                  </label>
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"/></svg>
                  </div>
                </div>

                {/* پیام */}
                <FloatingTextarea name="message" label="پیام شما (اختیاری)" value={formData.message} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} focused={focused.message} icon={MsgIcon} />

                {/* دکمه ارسال */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full relative overflow-hidden text-white font-bold py-4 rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 group"
                  style={{
                    background: "linear-gradient(180deg, #0aa1e8 0%, #006a9c 55%, #00507a 100%)",
                    boxShadow: "0 10px 30px rgba(0,106,156,0.4)",
                  }}
                >
                  <span className="relative z-10">
                    {submitted ? "✓ درخواست ثبت شد!" : "ثبت درخواست مشاوره"}
                  </span>
                  {!submitted && (
                    <svg className="w-5 h-5 relative z-10 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                    </svg>
                  )}
                  {/* لایه hover */}
                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.15), transparent)" }} />
                </motion.button>

                <p className="text-gray-600 text-[11px] text-center">
                  با ثبت فرم، با قوانین و حریم خصوصی ما موافقت کرده‌اید
                </p>
              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}