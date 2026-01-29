import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { toast } from 'react-toastify';
import Script from 'next/script'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Navigation from '../../components/navigation'
import { LoginStyles } from '@/components/auth/login-styles'
import { apiClient } from '../../lib/api-client'
import { useAuth } from '../../hooks/use-auth'
import { LoadingSpinner } from '../../components/ui/LoadingSpinner'
import { loginSchema, LoginValues } from '../../lib/validations/auth-schemas';
import { AuthResponse, LoginRequest, GoogleAuthRequest } from '../../types/auth';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';
import { Card } from '../../components/ui/Card';

const Login: React.FC = () => {
  const router = useRouter()
  const { login } = useAuth()
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)

  const {
    register,
    handleSubmit,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
      rememberMe: false,
    },
  });

  useEffect(() => {
    // Safety check for window presence (important for Next.js SSR/environments)
    if (typeof window === 'undefined') {
      return;
    }

    // 1. Global handler for ErrorEvent and PromiseRejectionEvent
    const handleGlobalError = (event: ErrorEvent | PromiseRejectionEvent) => {
      const errorMsg = event instanceof ErrorEvent ? event.message : event.reason?.message; // reason might be an object

      if (typeof errorMsg === 'string' && (errorMsg.includes('Popup window closed') || errorMsg.includes('popup_closed_by_user'))) {
        event.preventDefault();
        event.stopPropagation(); // Stop propagation
        setIsGoogleLoading(false);
      }
    };

    // 2. Intercept console.error to prevent Next.js overlay from showing logs
    // We bind to the specific console instance to avoid context issues
    const originalConsoleError = console.error ? console.error.bind(console) : null;

    if (originalConsoleError) {
      console.error = (...args) => {
        // Check first argument for the specific error message
        if (args.length > 0 && typeof args[0] === 'string' &&
          (args[0].includes('Popup window closed') || args[0].includes('popup_closed_by_user'))) {
          setIsGoogleLoading(false);
          return; // Suppress the log
        }
        // Also check if the error object is passed as an argument
        if (args.length > 0 && args[0] instanceof Error &&
          (args[0].message.includes('Popup window closed') || args[0].message.includes('popup_closed_by_user'))) {
          setIsGoogleLoading(false);
          return;
        }

        originalConsoleError(...args);
      };
    }

    // Add event listeners with capture phase for 'error'
    window.addEventListener('error', handleGlobalError, true);
    window.addEventListener('unhandledrejection', handleGlobalError);

    return () => {
      // Restore original console.error
      if (originalConsoleError) {
        console.error = originalConsoleError;
      }
      // Check window again in cleanup just in case
      if (typeof window !== 'undefined') {
        window.removeEventListener('error', handleGlobalError, true);
        window.removeEventListener('unhandledrejection', handleGlobalError);
      }
    };
  }, []);

  const onSubmit = async (data: LoginValues) => {
    setIsLoading(true)

    try {
      const response = await apiClient.post<AuthResponse, LoginRequest>('/api/auth/login', {
        email: data.email,
        password: data.password,
      })

      // Store token if available
      if (response.token) {
        login(response.token, response.refreshToken, {
          id: response.id ?? response.userId ?? 0,
          email: response.email,
          fullName: response.fullName,
          avatarUrl: response.avatarUrl,
          phone: response.phone,
          role: response.role,
          partnerType: response.partnerType
        })
      }

      // Redirect based on role
      if (response.role === 'ADMIN') {
        router.push('/admin/dashboard')
      } else if (response.role === 'PARTNER') {
        router.push('/partner/dashboard')
      } else {
        router.push('/')
      }
    } catch (error: any) {
      console.error('Login error:', error)
      const errorMessage = error.response?.data?.message || error.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.';
      setError('root', { message: errorMessage });
      toast.error(errorMessage);
    } finally {
      setIsLoading(false)
    }
  }

  // Define the token response handler first so it can be referenced
  const handleGoogleTokenResponse = async (tokenResponse: any) => {
    try {
      if (!tokenResponse || !tokenResponse.access_token) {
        setError('root', { message: 'Không thể lấy token từ Google.' });
        setIsGoogleLoading(false)
        return
      }

      // Get user info from Google
      const userInfoResponse = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
        headers: {
          Authorization: `Bearer ${tokenResponse.access_token}`,
        },
      })

      if (!userInfoResponse.ok) {
        throw new Error('Không thể lấy thông tin người dùng từ Google.')
      }

      const userInfo = await userInfoResponse.json()

      // Send user info to backend
      const data = await apiClient.post<AuthResponse, GoogleAuthRequest>('/api/auth/google', {
        email: userInfo.email,
        name: userInfo.name,
        picture: userInfo.picture,
        googleId: userInfo.id,
      })

      // Store token if available
      if (data && data.token) {
        login(data.token, data.refreshToken, {
          id: data.id ?? data.userId ?? 0,
          email: data.email,
          fullName: data.fullName,
          avatarUrl: data.avatarUrl || userInfo.picture, // Fallback to Google picture if backend doesn't return it
          phone: data.phone,
          role: data.role,
          partnerType: data.partnerType
        })
      }

      // Redirect based on role
      if (data.role === 'ADMIN') {
        router.push('/admin/dashboard')
      } else if (data.role === 'PARTNER') {
        router.push('/partner/dashboard')
      } else {
        router.push('/')
      }
    } catch (error: any) {
      console.error('Google token response error:', error)
      setError('root', { message: error.message || 'Có lỗi xảy ra khi xử lý đăng nhập Google. Vui lòng thử lại.' });
      setIsGoogleLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true)
    // Clear root errors if any
    clearErrors('root');

    try {
      const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID

      if (!clientId) {
        const msg = 'Google Client ID chưa được cấu hình. Vui lòng liên hệ quản trị viên.';
        setError('root', { message: msg });
        setIsGoogleLoading(false)
        return
      }

      // Wait for Google Identity Services to load (with timeout)
      let attempts = 0
      const maxAttempts = 50 // 5 seconds max wait

      while (typeof window !== 'undefined' && !(window as any).google && attempts < maxAttempts) {
        await new Promise(resolve => setTimeout(resolve, 100))
        attempts++
      }

      if (typeof window !== 'undefined' && (window as any).google) {
        const google = (window as any).google

        // Use OAuth 2.0 flow with popup
        const client = google.accounts.oauth2.initTokenClient({
          client_id: clientId,
          scope: 'email profile',
          callback: handleGoogleTokenResponse,
          error_callback: (error: any) => {
            // Ignored popup_closed_by_user error and just reset loading state
            if (error?.type === 'popup_closed_by_user') {
              setIsGoogleLoading(false);
              return;
            }

            console.error('Google Sign-In error callback:', error);
            setIsGoogleLoading(false);
          },
        })

        client.requestAccessToken()
      } else {
        // Fallback: redirect to Google OAuth if script didn't load
        const redirectUri = `${window.location.origin}/auth/google/callback`
        const scope = 'email profile'
        const responseType = 'code'
        const googleAuthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=${responseType}&scope=${encodeURIComponent(scope)}&access_type=offline&prompt=consent`

        window.location.href = googleAuthUrl
      }
    } catch (error) {
      console.error('Google Sign-In error:', error)
      setError('root', { message: 'Có lỗi xảy ra khi đăng nhập với Google. Vui lòng thử lại.' });
      setIsGoogleLoading(false)
    }
  }


  return (
    <>
      <div className="login-container">
        <Head>
          <title>Đăng Nhập - Booking Hub</title>
          <meta property="og:title" content="Đăng Nhập - Booking Hub" />
        </Head>
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="lazyOnload"
          onLoad={() => {
            // Google Identity Services loaded
          }}
        />
        <Navigation></Navigation>
        <section className="login-section">
          <div className="login-media-container">
            <img
              src="https://images.pexels.com/photos/29870243/pexels-photo-29870243.jpeg?auto=compress&cs=tinysrgb&w=1500"
              alt="Login Background"
              className="login-bg-image"
            />
            <div className="login-overlay"></div>
          </div>
          <div className="login-content-wrapper">
            <Card className="login-card-content">
              <div className="login-header">
                <div className="login-icon-wrapper">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h1 className="login-title">Đăng Nhập</h1>
                <p className="login-subtitle">
                  Chào mừng bạn trở lại! Vui lòng đăng nhập để tiếp tục.
                </p>
              </div>

              {errors.root && (
                <div className="login-error-message">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="m12 8v4"></path>
                    <path d="m12 16h.01"></path>
                  </svg>
                  <span>{errors.root.message}</span>
                </div>
              )}

              <form onSubmit={handleSubmit(onSubmit)} className="login-form">
                <Input
                  label="Email"
                  type="email"
                  id="email"
                  placeholder="Nhập email của bạn"
                  autoComplete="email"
                  error={errors.email?.message}
                  {...register('email')}
                  leftIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
                    </svg>
                  }
                />

                <Input
                  label="Mật khẩu"
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  placeholder="Nhập mật khẩu của bạn"
                  autoComplete="current-password"
                  error={errors.password?.message}
                  {...register('password')}
                  leftIcon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                    </svg>
                  }
                  rightElement={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                      style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex' }}
                    >
                      {showPassword ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M2 2l20 20"></path>
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                        >
                          <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                          <circle cx="12" cy="12" r="3"></circle>
                        </svg>
                      )}
                    </button>
                  }
                />

                <div className="login-form-options">
                  <label className="login-checkbox-wrapper">
                    <input
                      type="checkbox"
                      className="login-checkbox"
                      {...register('rememberMe')}
                    />
                    <span className="login-checkbox-label">Ghi nhớ đăng nhập</span>
                  </label>
                  <a href="/auth/forgot-password" className="login-forgot-link">
                    Quên mật khẩu?
                  </a>
                </div>

                <Button
                  type="submit"
                  data-testid="login-submit"
                  size="lg"
                  variant="primary"
                  isLoading={isLoading}
                  className="w-full mt-4"
                  style={{ width: '100%', marginTop: '1rem' }}
                >
                  Đăng Nhập
                </Button>
              </form>

              <div className="login-divider">
                <span>Hoặc</span>
              </div>

              <div className="login-social-buttons">
                <Button
                  type="button"
                  variant="ghost"
                  onClick={handleGoogleSignIn}
                  disabled={isGoogleLoading || isLoading}
                  isLoading={isGoogleLoading}
                  className="login-social-btn"
                  style={{ border: '1px solid var(--color-border)', justifyContent: 'center' }}
                  leftIcon={
                    !isGoogleLoading && (
                      <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd">
                          <path d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12v3.287h4.844a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z" fill="#4285F4" />
                          <path d="M12 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503H4.577v2.202A8.997 8.997 0 0 0 12 21z" fill="#34A853" />
                          <path d="M7.244 13.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V7.683H4.577A8.996 8.996 0 0 0 3 12c0 1.452.348 2.827.577 4.317l2.667-2.202z" fill="#FBBC05" />
                          <path d="M12 7.38c1.248 0 2.368.428 3.25 1.27l2.438-2.438C16.22 4.558 14.295 3.75 12 3.75a8.997 8.997 0 0 0-7.423 3.933l2.667 2.202C7.912 8.874 9.786 7.38 12 7.38z" fill="#EA4335" />
                        </g>
                      </svg>
                    )
                  }
                >
                  <span>Tiếp tục với Google</span>
                </Button>

                <Button
                  type="button"
                  variant="ghost"
                  className="login-social-btn"
                  style={{ border: '1px solid var(--color-border)', justifyContent: 'center' }}
                  leftIcon={
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
                    </svg>
                  }
                >
                  <span>Tiếp tục với Facebook</span>
                </Button>
              </div>

              <div className="login-footer">
                <span className="login-footer-text">
                  Chưa có tài khoản?{' '}
                  <a href="/auth/register" className="login-footer-link">
                    Đăng ký ngay
                  </a>
                </span>
              </div>
            </Card>
          </div>
        </section>
      </div>
      <LoginStyles />
    </>
  )
}

export default Login