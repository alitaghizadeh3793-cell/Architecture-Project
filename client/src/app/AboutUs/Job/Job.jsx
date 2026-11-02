"use client"

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CloseIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const UserIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
);

const MailIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const LocationIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const BriefcaseIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const HistoryIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UploadIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
  </svg>
);

const CheckIcon = ({ className = "w-12 h-12" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const ChevronDownIcon = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);

const MessageIcon = ({ className = "w-5 h-5" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

const modalVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  },
  exit: { 
    opacity: 0, 
    scale: 0.95, 
    y: 20,
    transition: { duration: 0.2, ease: "easeIn" }
  }
};

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const successVariants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -10 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: 0,
    transition: { duration: 0.5, type: "spring", bounce: 0.4 }
  }
};

const inputVariants = {
  focus: { scale: 1.01, transition: { duration: 0.2 } },
  blur: { scale: 1, transition: { duration: 0.2 } }
};

// ============================================
// کامپوننت Input سفارشی
// ============================================

const CustomInput = ({ 
  label, 
  name, 
  value, 
  onChange, 
  error, 
  icon: Icon, 
  type = "text", 
  placeholder,
  required = false,
  autoFocus = false
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      setTimeout(() => inputRef.current.focus(), 300);
    }
  }, [autoFocus]);

  return (
    <motion.div 
      className="relative"
      initial="blur"
      animate={isFocused ? "focus" : "blur"}
      variants={inputVariants}
    >
      <label className="block text-xs font-medium text-[#006a9c] mb-1.5 tracking-wider uppercase">
        {label} {required && <span className="text-[#006a9c]">*</span>}
      </label>
      <div className="relative">
        {Icon && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[#006a9c]/40">
            <Icon className="w-4 h-4" />
          </div>
        )}
        <input
          ref={inputRef}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`
            w-full px-4 py-3 pr-11 bg-[#0a0a0a] border rounded-xl
            text-white placeholder:text-gray-600 text-sm
            transition-all duration-300 outline-none
            ${error 
              ? 'border-red-500/50 focus:border-red-500 focus:shadow-[0_0_20px_rgba(239,68,68,0.15)]' 
              : 'border-white/10 focus:border-[#006a9c]/50 focus:shadow-[0_0_30px_rgba(0,106,156,0.1)]'
            }
            hover:border-white/20
          `}
        />
        {isFocused && !error && (
          <div className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#006a9c] to-transparent rounded-full" />
        )}
      </div>
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xs mt-1.5"
        >
          {error}
        </motion.p>
      )}
    </motion.div>
  );
};

// ============================================
// کامپوننت Select سفارشی
// ============================================

const CustomSelect = ({ 
  label, 
  name, 
  value, 
  onChange, 
  error, 
  options, 
  placeholder,
  required = false
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find(opt => opt.value === value);

  return (
    <div className="relative" ref={selectRef}>
      <label className="block text-xs font-medium text-[#006a9c] mb-1.5 tracking-wider uppercase">
        {label} {required && <span className="text-[#006a9c]">*</span>}
      </label>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`
          w-full px-4 py-3 pr-11 bg-[#0a0a0a] border rounded-xl
          text-white text-sm text-right
          transition-all duration-300 outline-none
          flex items-center justify-between
          ${error 
            ? 'border-red-500/50' 
            : 'border-white/10 hover:border-white/20 focus:border-[#006a9c]/50'
          }
        `}
      >
        <span className={selectedOption ? 'text-white' : 'text-gray-600'}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDownIcon className={`w-4 h-4 text-[#006a9c]/40 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.95 }}
            transition={{ duration: 0.15 }}
            className="absolute z-50 w-full mt-2 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-2xl shadow-black/50"
          >
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange({ target: { name, value: option.value } });
                  setIsOpen(false);
                }}
                className={`
                  w-full px-4 py-3 text-sm text-right text-white
                  hover:bg-white/5 transition-colors duration-150
                  ${value === option.value ? 'bg-white/5 text-[#006a9c]' : ''}
                `}
              >
                {option.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xs mt-1.5"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};

// ============================================
// کامپوننت آپلود رزومه با Drag & Drop
// ============================================

const ResumeUpload = ({ file, onChange, error, required = false }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const fileInputRef = useRef(null);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      onChange(droppedFile);
    }
  };

  const handleFileSelect = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      onChange(selectedFile);
    }
  };

  const removeFile = () => {
    onChange(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div>
      <label className="block text-xs font-medium text-[#006a9c] mb-1.5 tracking-wider uppercase">
        بارگذاری رزومه {required && <span className="text-[#006a9c]">*</span>}
      </label>
      
      {!file ? (
        <motion.div
          whileHover={{ scale: 1.005 }}
          className={`
            relative border-2 border-dashed rounded-xl p-8 text-center
            transition-all duration-300 cursor-pointer
            ${isDragging 
              ? 'border-[#006a9c] bg-[#006a9c]/5 shadow-[0_0_40px_rgba(0,106,156,0.1)]' 
              : error
                ? 'border-red-500/50 hover:border-red-500/70'
                : 'border-white/10 hover:border-white/20 hover:bg-white/5'
            }
            ${isHovered ? 'bg-white/5' : 'bg-[#0a0a0a]'}
          `}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => fileInputRef.current?.click()}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileSelect}
            className="hidden"
          />
          
          <motion.div
            animate={isDragging ? { scale: 1.1 } : { scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            <UploadIcon className="w-12 h-12 mx-auto text-[#006a9c]/40 mb-4" />
            <p className="text-sm text-gray-400">
              {isDragging ? 'فایل را رها کنید' : 'برای آپلود کلیک کنید یا فایل را بکشید'}
            </p>
            <p className="text-xs text-gray-600 mt-1">PDF, DOC, DOCX • حداکثر ۵ مگابایت</p>
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-[#0a0a0a] border border-white/10 rounded-xl p-4 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#006a9c]/10 flex items-center justify-center">
              <span className="text-[#006a9c] text-sm font-bold">PDF</span>
            </div>
            <div className="text-right">
              <p className="text-sm text-white">{file.name}</p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={removeFile}
            className="p-2 text-gray-500 hover:text-red-500 transition-colors"
          >
            <CloseIcon className="w-4 h-4" />
          </button>
        </motion.div>
      )}
      
      {error && (
        <motion.p 
          initial={{ opacity: 0, y: -5 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-red-500 text-xs mt-1.5"
        >
          {error}
        </motion.p>
      )}
    </div>
  );
};



export default function Job({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    location: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const positions = [
    { value: 'architect', label: 'معمار ارشد' },
    { value: 'interior', label: 'طراح داخلی' },
    { value: 'urban', label: 'طراح شهری' },
    { value: 'landscape', label: 'معمار منظر' },
    { value: 'project', label: 'مدیر پروژه' },
    { value: 'draftsman', label: 'طراح نقشه' },
    { value: '3d', label: 'طراح سه‌بعدی' },
  ];

  const experiences = [
    { value: '0-1', label: 'کمتر از ۱ سال' },
    { value: '1-3', label: '۱ تا ۳ سال' },
    { value: '3-5', label: '۳ تا ۵ سال' },
    { value: '5-10', label: '۵ تا ۱۰ سال' },
    { value: '10+', label: 'بیش از ۱۰ سال' },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (file) => {
    setFormData(prev => ({ ...prev, resume: file }));
    if (errors.resume) {
      setErrors(prev => ({ ...prev, resume: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'نام و نام خانوادگی الزامی است';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'ایمیل الزامی است';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'ایمیل نامعتبر است';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'شماره تماس الزامی است';
    } else if (!/^[\d\-+() ]{10,15}$/.test(formData.phone.trim())) {
      newErrors.phone = 'شماره تماس نامعتبر است';
    }
    
    if (!formData.position) {
      newErrors.position = 'انتخاب موقعیت شغلی الزامی است';
    }
    
    if (!formData.resume) {
      newErrors.resume = 'بارگذاری رزومه الزامی است';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          location: '',
          position: '',
          experience: '',
          message: '',
          resume: null
        });
        onClose();
      }, 3000);
    } catch (error) {
      console.error('خطا در ارسال فرم:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={overlayVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md"
        onClick={onClose}
      />

      <motion.div
        variants={modalVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="fixed inset-0 z-[1000] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <div className="min-h-screen flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-[#010101] border border-white/10 rounded-3xl shadow-2xl shadow-black/70 overflow-hidden">
            
            <button
              onClick={onClose}
              className="absolute top-4 left-4 z-10 p-2 text-gray-500 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300"
              aria-label="بستن فرم"
            >
              <CloseIcon className="w-5 h-5" />
            </button>

            <div className="relative px-8 pt-10 pb-6 border-b border-white/5">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-[#006a9c]/10 border border-[#006a9c]/20">
                  <BriefcaseIcon className="w-6 h-6 text-[#006a9c]" />
                </div>
                <div>
                  <h2 id="modal-title" className="text-2xl font-bold text-white">
                    ثبت‌نام متقاضیان
                  </h2>
                  <p className="text-sm text-gray-500 mt-0.5">فرم زیر را تکمیل کنید تا با شما تماس بگیریم</p>
                </div>
              </div>
            </div>

            <div className="p-8">
              {isSuccess ? (
                <motion.div
                  variants={successVariants}
                  initial="hidden"
                  animate="visible"
                  className="py-12 text-center"
                >
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-[#006a9c]/10 border-2 border-[#006a9c]/30 flex items-center justify-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <CheckIcon className="w-12 h-12 text-[#006a9c]" />
                    </motion.div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">ثبت‌نام با موفقیت انجام شد!</h3>
                  <p className="text-gray-400">به زودی تیم ما با شما تماس خواهد گرفت.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="md:col-span-2">
                      <CustomInput
                        label="نام و نام خانوادگی"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        error={errors.fullName}
                        icon={UserIcon}
                        placeholder="مثال: احمد رضایی"
                        required
                        autoFocus
                      />
                    </div>

                    <CustomInput
                      label="ایمیل"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      error={errors.email}
                      icon={MailIcon}
                      placeholder="example@email.com"
                      required
                    />

                    <CustomInput
                      label="شماره تماس"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      error={errors.phone}
                      icon={PhoneIcon}
                      placeholder="۰۹۱۲۳۴۵۶۷۸۹"
                      required
                    />

                    <CustomInput
                      label="موقعیت مکانی"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      icon={LocationIcon}
                      placeholder="تهران، ایران"
                    />

                    <CustomSelect
                      label="موقعیت شغلی"
                      name="position"
                      value={formData.position}
                      onChange={handleChange}
                      error={errors.position}
                      options={positions}
                      placeholder="انتخاب موقعیت شغلی..."
                      required
                    />

                    <CustomSelect
                      label="سابقه کاری"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      options={experiences}
                      placeholder="انتخاب سابقه کاری..."
                    />
                  </div>

                  <CustomInput
                    label="پیام اضافی"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    icon={MessageIcon}
                    placeholder="توضیحات بیشتر درباره خودتان..."
                  />

                  <ResumeUpload
                    file={formData.resume}
                    onChange={handleFileChange}
                    error={errors.resume}
                    required
                  />

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={!isSubmitting ? { scale: 1.01 } : {}}
                    whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                    className={`
                      w-full py-4 rounded-xl text-white font-medium
                      transition-all duration-300 relative overflow-hidden
                      ${isSubmitting 
                        ? 'bg-[#006a9c]/40 cursor-not-allowed' 
                        : 'bg-[#006a9c] hover:shadow-[0_0_40px_rgba(0,106,156,0.3)]'
                      }
                    `}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        در حال ارسال...
                      </span>
                    ) : (
                      'ارسال درخواست'
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}