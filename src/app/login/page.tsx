'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [focused, setFocused] = useState({ email: false, password: false });
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      setEmailError('Email là bắt buộc');
      return false;
    } else if (!emailRegex.test(email)) {
      setEmailError('Email không hợp lệ');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validatePassword = (password: string) => {
    if (!password) {
      setPasswordError('Mật khẩu là bắt buộc');
      return false;
    } else if (password.length < 6) {
      setPasswordError('Mật khẩu phải có ít nhất 6 ký tự');
      return false;
    }
    setPasswordError('');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    const isEmailValid = validateEmail(email);
    const isPasswordValid = validatePassword(password);
    
    if (!isEmailValid || !isPasswordValid) {
      return;
    }

    setLoading(true);

    try {
      await login(email, password);
      router.push('/');
    } catch (err: any) {
      setError(err.message || 'Đăng nhập thất bại');
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
      </div>

      <div className="max-w-md w-full space-y-8 relative z-10 animate-scale-in">
        {/* Enhanced Card with Glassmorphism */}
        <div className="glass rounded-3xl shadow-2xl p-8 md:p-10 border border-white/30 hover-lift transition-all duration-300">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-block mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center transform hover:rotate-12 transition-transform duration-300 shadow-lg mx-auto">
                <span className="text-3xl">🔐</span>
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
              Đăng nhập
            </h2>
            <p className="text-gray-600 text-sm md:text-base">
              Hoặc{' '}
              <Link href="/register" className="font-medium text-indigo-600 hover:text-indigo-700 transition-colors duration-200 hover:underline">
                đăng ký tài khoản mới
              </Link>
            </p>
          </div>

          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 text-red-700 px-4 py-3 rounded-lg shadow-md animate-slide-in-right flex items-center gap-2">
                <span className="text-xl">⚠️</span>
                <span>{error}</span>
              </div>
            )}

            {/* Email Input with Floating Label */}
            <div className="relative">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (emailError) validateEmail(e.target.value);
                }}
                onFocus={() => setFocused({ ...focused, email: true })}
                onBlur={() => {
                  setFocused({ ...focused, email: email.length > 0 });
                  validateEmail(email);
                }}
                className={`peer w-full px-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white/50 backdrop-blur-sm text-gray-900 placeholder-transparent ${
                  emailError
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
                }`}
                placeholder="Email"
              />
              <label
                htmlFor="email"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused.email || email.length > 0
                    ? 'top-2 text-xs text-indigo-600 font-medium'
                    : 'top-3.5 text-base text-gray-500'
                }`}
              >
                Email
              </label>
              {emailError && (
                <p className="mt-1 text-sm text-red-600 animate-slide-in-right">{emailError}</p>
              )}
            </div>

            {/* Password Input with Floating Label */}
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                autoComplete="current-password"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (passwordError) validatePassword(e.target.value);
                }}
                onFocus={() => setFocused({ ...focused, password: true })}
                onBlur={() => {
                  setFocused({ ...focused, password: password.length > 0 });
                  validatePassword(password);
                }}
                className={`peer w-full px-4 py-3 pr-12 border-2 rounded-xl focus:outline-none focus:ring-2 transition-all duration-300 bg-white/50 backdrop-blur-sm text-gray-900 placeholder-transparent ${
                  passwordError
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200'
                    : 'border-gray-300 focus:border-indigo-500 focus:ring-indigo-200'
                }`}
                placeholder="Mật khẩu"
              />
              <label
                htmlFor="password"
                className={`absolute left-4 transition-all duration-300 pointer-events-none ${
                  focused.password || password.length > 0
                    ? 'top-2 text-xs text-indigo-600 font-medium'
                    : 'top-3.5 text-base text-gray-500'
                }`}
              >
                Mật khẩu
              </label>
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700 transition-colors"
                aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
              {passwordError && (
                <p className="mt-1 text-sm text-red-600 animate-slide-in-right">{passwordError}</p>
              )}
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center items-center gap-2 py-3 px-4 border border-transparent text-base font-medium rounded-xl text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:from-indigo-700 hover:via-purple-700 hover:to-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] hover-lift animate-gradient"
              >
                {loading ? (
                  <>
                    <div className="spinner w-5 h-5 border-2"></div>
                    <span>Đang đăng nhập...</span>
                  </>
                ) : (
                  <>
                    <span>Đăng nhập</span>
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
