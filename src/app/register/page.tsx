'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState({ 
    fullName: false, 
    email: false, 
    phone: false, 
    password: false 
  });
  const [fieldErrors, setFieldErrors] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (fieldErrors[name as keyof typeof fieldErrors]) {
      validateField(name, value);
    }
  };

  const handleFocus = (field: string) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field: string) => {
    setFocused({ ...focused, [field]: formData[field as keyof typeof formData].length > 0 });
    validateField(field, formData[field as keyof typeof formData] as string);
  };

  const validateField = (field: string, value: string) => {
    const errors = { ...fieldErrors };
    
    switch (field) {
      case 'fullName':
        if (!value.trim()) {
          errors.fullName = 'Họ và tên là bắt buộc';
        } else if (value.trim().length < 2) {
          errors.fullName = 'Họ và tên phải có ít nhất 2 ký tự';
        } else {
          errors.fullName = '';
        }
        break;
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!value) {
          errors.email = 'Email là bắt buộc';
        } else if (!emailRegex.test(value)) {
          errors.email = 'Email không hợp lệ';
        } else {
          errors.email = '';
        }
        break;
      case 'phone':
        if (value && !/^[0-9]{10,11}$/.test(value.replace(/\s/g, ''))) {
          errors.phone = 'Số điện thoại không hợp lệ';
        } else {
          errors.phone = '';
        }
        break;
      case 'password':
        if (!value) {
          errors.password = 'Mật khẩu là bắt buộc';
        } else if (value.length < 6) {
          errors.password = 'Mật khẩu phải có ít nhất 6 ký tự';
        } else {
          errors.password = '';
        }
        break;
    }
    
    setFieldErrors(errors);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    // Validate all fields
    validateField('fullName', formData.fullName);
    validateField('email', formData.email);
    validateField('phone', formData.phone);
    validateField('password', formData.password);
    
    // Check if there are any errors
    const hasErrors = Object.values({
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password
    }).some((value, index) => {
      const field = ['fullName', 'email', 'password'][index];
      return !value || fieldErrors[field as keyof typeof fieldErrors];
    });
    
    if (hasErrors) {
      return;
    }

    setLoading(true);

    try {
      await register(formData.email, formData.password, formData.fullName, formData.phone || undefined);
      router.push('/');
    } catch (err: unknown) {
      const errorMessage = err instanceof Error ? err.message : 'Đăng ký thất bại';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob-fast"></div>
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10 animate-scale-in">
        {/* Enhanced Card with Glassmorphism */}
        <div className="glass rounded-3xl shadow-2xl p-8 md:p-10 border border-white/30 hover-lift transition-all duration-300">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 shadow-lg mx-auto">
                <span className="text-3xl">✨</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Đăng ký
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Hoặc{' '}
              <Link href="/login" className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200 hover:underline">
                đăng nhập nếu đã có tài khoản
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg shadow-md animate-slide-in-right flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Full Name Input */}
            <div className="relative">
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={formData.fullName}
                onChange={handleChange}
                onFocus={() => handleFocus('fullName')}
                onBlur={() => handleBlur('fullName')}
                className={`peer w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white/50 backdrop-blur-sm text-gray-900 placeholder-transparent ${
                  fieldErrors.fullName
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
                }`}
                placeholder="Nhập họ và tên"
              />
              <label
                htmlFor="fullName"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused.fullName || formData.fullName.length > 0
                    ? 'top-2 text-xs text-indigo-600 font-medium'
                    : 'top-3.5 text-base text-gray-500'
                }`}
              >
                Họ và tên
              </label>
              {fieldErrors.fullName && (
                <p className="mt-1 text-sm text-red-600 animate-slide-in-right">{fieldErrors.fullName}</p>
              )}
            </div>

            {/* Email Input */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                className={`peer w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white/50 backdrop-blur-sm text-gray-900 placeholder-transparent ${
                  fieldErrors.email
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
                }`}
                placeholder="Nhập email"
              />
              <label
                htmlFor="email"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused.email || formData.email.length > 0
                    ? 'top-2 text-xs text-indigo-600 font-medium'
                    : 'top-3.5 text-base text-gray-500'
                }`}
              >
                Email
              </label>
              {fieldErrors.email && (
                <p className="mt-1 text-sm text-red-600 animate-slide-in-right">{fieldErrors.email}</p>
              )}
            </div>

            {/* Phone Input */}
            <div className="relative">
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                onFocus={() => handleFocus('phone')}
                onBlur={() => handleBlur('phone')}
                className={`peer w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white/50 backdrop-blur-sm text-gray-900 placeholder-transparent ${
                  fieldErrors.phone
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
                }`}
                placeholder="Nhập số điện thoại"
              />
              <label
                htmlFor="phone"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused.phone || formData.phone.length > 0
                    ? 'top-2 text-xs text-indigo-600 font-medium'
                    : 'top-3.5 text-base text-gray-500'
                }`}
              >
                Số điện thoại (tùy chọn)
              </label>
              {fieldErrors.phone && (
                <p className="mt-1 text-sm text-red-600 animate-slide-in-right">{fieldErrors.phone}</p>
              )}
            </div>

            {/* Password Input */}
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="new-password"
                required
                minLength={6}
                value={formData.password}
                onChange={handleChange}
                onFocus={() => handleFocus('password')}
                onBlur={() => handleBlur('password')}
                className={`peer w-full px-4 py-3 pr-12 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white/50 backdrop-blur-sm text-gray-900 placeholder-transparent ${
                  fieldErrors.password
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
                }`}
                placeholder="Nhập mật khẩu"
              />
              <label
                htmlFor="password"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused.password || formData.password.length > 0
                    ? 'top-2 text-xs text-indigo-600 font-medium'
                    : 'top-3.5 text-base text-gray-500'
                }`}
              >
                Mật khẩu (tối thiểu 6 ký tự)
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
              {fieldErrors.password && (
                <p className="mt-1 text-sm text-red-600 animate-slide-in-right">{fieldErrors.password}</p>
              )}
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] hover-lift animate-gradient"
              >
                {loading ? (
                  <>
                    <div className="spinner w-5 h-5 border-2"></div>
                    <span>Đang đăng ký...</span>
                  </>
                ) : (
                  <>
                    <span>Đăng ký</span>
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Back Link */}
          <div className="text-center mt-6">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 transition-colors duration-200 hover:underline group"
            >
              <span className="transform group-hover:-translate-x-1 transition-transform duration-300">←</span>
              <span>Quay lại trang chủ</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}