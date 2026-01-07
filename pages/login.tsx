import React, { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'
import { useRouter } from 'next/router'
import ScriptHTML from 'dangerous-html/react'

import Navigation from '../components/navigation'

const Login: React.FC = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const [errors, setErrors] = useState<{ email?: string; password?: string; general?: string }>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = () => {
    const newErrors: typeof errors = {}

    if (!formData.email) {
      newErrors.email = 'Email là bắt buộc'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ'
    }

    if (!formData.password) {
      newErrors.password = 'Mật khẩu là bắt buộc'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      return
    }

    setIsLoading(true)
    setErrors({})

    try {
      const response = await fetch('http://localhost:8080/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        setErrors({ general: data.message || 'Đăng nhập thất bại. Vui lòng thử lại.' })
        setIsLoading(false)
        return
      }

      // Store token if available
      if (data.token) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify(data.user || {}))
      }

      // Redirect to home page
      router.push('/')
    } catch (error) {
      console.error('Login error:', error)
      setErrors({ general: 'Có lỗi xảy ra. Vui lòng thử lại sau.' })
    } finally {
      setIsLoading(false)
    }
  }

  const handleGoogleSignIn = async () => {
    setIsGoogleLoading(true)
    setErrors({})

    try {
      const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID
      
      if (!clientId) {
        setErrors({ general: 'Google Client ID chưa được cấu hình. Vui lòng liên hệ quản trị viên.' })
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
      setErrors({ general: 'Có lỗi xảy ra khi đăng nhập với Google. Vui lòng thử lại.' })
      setIsGoogleLoading(false)
    }
  }

  const handleGoogleTokenResponse = async (tokenResponse: any) => {
    try {
      if (!tokenResponse || !tokenResponse.access_token) {
        setErrors({ general: 'Không thể lấy token từ Google.' })
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
      const backendResponse = await fetch('http://localhost:8080/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: userInfo.email,
          name: userInfo.name,
          picture: userInfo.picture,
          googleId: userInfo.id,
        }),
      })

      // Check if response is ok and has content
      if (!backendResponse.ok) {
        let errorMessage = 'Đăng nhập với Google thất bại.'
        try {
          const errorData = await backendResponse.json()
          errorMessage = errorData.message || errorMessage
        } catch (e) {
          // If response is not JSON, use status text
          errorMessage = backendResponse.statusText || errorMessage
        }
        setErrors({ general: errorMessage })
        setIsGoogleLoading(false)
        return
      }

      // Parse JSON response
      let data
      const contentType = backendResponse.headers.get('content-type')
      if (contentType && contentType.includes('application/json')) {
        const text = await backendResponse.text()
        if (text) {
          try {
            data = JSON.parse(text)
          } catch (e) {
            console.error('Failed to parse JSON:', e)
            setErrors({ general: 'Phản hồi từ server không hợp lệ.' })
            setIsGoogleLoading(false)
            return
          }
        } else {
          setErrors({ general: 'Phản hồi từ server trống.' })
          setIsGoogleLoading(false)
          return
        }
      } else {
        setErrors({ general: 'Phản hồi từ server không đúng định dạng.' })
        setIsGoogleLoading(false)
        return
      }

      // Store token if available
      if (data && data.token) {
        localStorage.setItem('token', data.token)
        localStorage.setItem('user', JSON.stringify({
          id: data.userId,
          email: data.email,
          fullName: data.fullName
        }))
      }

      // Redirect to home page
      router.push('/')
    } catch (error) {
      console.error('Google token response error:', error)
      setErrors({ general: 'Có lỗi xảy ra khi xử lý đăng nhập Google. Vui lòng thử lại.' })
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
            <div className="login-card">
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

              {errors.general && (
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
                  <span>{errors.general}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="login-form">
                <div className="login-form-group">
                  <label htmlFor="email" className="login-label">
                    Email
                  </label>
                  <div className="login-input-wrapper">
                    <div className="login-input-icon">
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
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`login-input ${errors.email ? 'login-input-error' : ''}`}
                      placeholder="Nhập email của bạn"
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && (
                    <span className="login-field-error">{errors.email}</span>
                  )}
                </div>

                <div className="login-form-group">
                  <label htmlFor="password" className="login-label">
                    Mật khẩu
                  </label>
                  <div className="login-input-wrapper">
                    <div className="login-input-icon">
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
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className={`login-input ${errors.password ? 'login-input-error' : ''}`}
                      placeholder="Nhập mật khẩu của bạn"
                      autoComplete="current-password"
                    />
                    <button
                      type="button"
                      className="login-password-toggle"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={showPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
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
                  </div>
                  {errors.password && (
                    <span className="login-field-error">{errors.password}</span>
                  )}
                </div>

                <div className="login-form-options">
                  <label className="login-checkbox-wrapper">
                    <input type="checkbox" className="login-checkbox" />
                    <span className="login-checkbox-label">Ghi nhớ đăng nhập</span>
                  </label>
                  <a href="/forgot-password" className="login-forgot-link">
                    Quên mật khẩu?
                  </a>
                </div>

                <button
                  type="submit"
                  className="login-submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="login-spinner"
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
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                      </svg>
                      <span>Đang đăng nhập...</span>
                    </>
                  ) : (
                    <span>Đăng Nhập</span>
                  )}
                </button>
              </form>

              <div className="login-divider">
                <span>Hoặc</span>
              </div>

              <div className="login-social-buttons">
                <button 
                  type="button" 
                  className="login-social-btn login-social-google"
                  onClick={handleGoogleSignIn}
                  disabled={isGoogleLoading || isLoading}
                >
                  {isGoogleLoading ? (
                    <>
                      <svg
                        className="login-spinner"
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
                        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                      </svg>
                      <span>Đang xử lý...</span>
                    </>
                  ) : (
                    <>
                      <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fillRule="evenodd">
                          <path d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12v3.287h4.844a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z" fill="#4285F4"/>
                          <path d="M12 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503H4.577v2.202A8.997 8.997 0 0 0 12 21z" fill="#34A853"/>
                          <path d="M7.244 13.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V7.683H4.577A8.996 8.996 0 0 0 3 12c0 1.452.348 2.827.577 4.317l2.667-2.202z" fill="#FBBC05"/>
                          <path d="M12 7.38c1.248 0 2.368.428 3.25 1.27l2.438-2.438C16.22 4.558 14.295 3.75 12 3.75a8.997 8.997 0 0 0-7.423 3.933l2.667 2.202C7.912 8.874 9.786 7.38 12 7.38z" fill="#EA4335"/>
                        </g>
                      </svg>
                      <span>Tiếp tục với Google</span>
                    </>
                  )}
                </button>
                <button type="button" className="login-social-btn login-social-facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2"/>
                  </svg>
                  <span>Tiếp tục với Facebook</span>
                </button>
              </div>

              <div className="login-footer">
                <span className="login-footer-text">
                  Chưa có tài khoản?{' '}
                  <a href="/register" className="login-footer-link">
                    Đăng ký ngay
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <ScriptHTML
        html={`<style>
.login-section {
  display: flex;
  background: var(--color-surface);
  min-height: calc(100vh - 80px);
  align-items: center;
  justify-content: center;
  position: relative;
  padding: var(--spacing-4xl) var(--spacing-xl);
}

.login-media-container {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  position: absolute;
}

.login-bg-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.login-overlay {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  position: absolute;
  background: var(--color-scrim);
}

.login-content-wrapper {
  width: 100%;
  display: flex;
  z-index: 3;
  position: relative;
  justify-content: center;
  max-width: 500px;
}

.login-card {
  width: 100%;
  padding: var(--spacing-3xl);
  background: var(--color-surface);
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
  border-radius: var(--border-radius-xl);
  border: 1px solid var(--color-border);
}

.login-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.login-icon-wrapper {
  width: 64px;
  height: 64px;
  display: flex;
  margin: 0 auto var(--spacing-lg);
  background: color-mix(in oklab, var(--color-primary) 10%, transparent);
  align-items: center;
  border-radius: var(--border-radius-full);
  justify-content: center;
  color: var(--color-primary);
}

.login-title {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-3xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  margin-bottom: var(--spacing-sm);
}

.login-subtitle {
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-base);
  line-height: var(--line-height-body);
}

.login-error-message {
  gap: var(--spacing-sm);
  display: flex;
  padding: var(--spacing-md) var(--spacing-lg);
  margin-bottom: var(--spacing-xl);
  background: color-mix(in oklab, #ef4444 10%, transparent);
  align-items: center;
  border-radius: var(--border-radius-md);
  border: 1px solid color-mix(in oklab, #ef4444 30%, transparent);
  color: #ef4444;
  font-size: var(--font-size-sm);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.login-form-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.login-label {
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface);
}

.login-input-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.login-input-icon {
  left: var(--spacing-md);
  color: var(--color-on-surface-secondary);
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
}

.login-input {
  width: 100%;
  border: 1px solid var(--color-border);
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-md) 48px;
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  background: var(--color-surface-elevated);
  transition: all 0.2s ease;
  border-radius: var(--border-radius-control);
  color: var(--color-on-surface);
}

.login-input:focus {
  outline: none;
  border-color: var(--color-primary);
  box-shadow: 0 0 0 3px color-mix(in oklab, var(--color-primary) 10%, transparent);
}

.login-input::placeholder {
  color: var(--color-on-surface-secondary);
}

.login-input-error {
  border-color: #ef4444;
}

.login-input-error:focus {
  border-color: #ef4444;
  box-shadow: 0 0 0 3px color-mix(in oklab, #ef4444 10%, transparent);
}

.login-password-toggle {
  right: var(--spacing-md);
  border: none;
  cursor: pointer;
  padding: var(--spacing-xs);
  position: absolute;
  background: none;
  color: var(--color-on-surface-secondary);
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.login-password-toggle:hover {
  color: var(--color-primary);
}

.login-field-error {
  color: #ef4444;
  font-size: var(--font-size-xs);
  margin-top: var(--spacing-xs);
}

.login-form-options {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: calc(var(--spacing-xl) * -1);
}

.login-checkbox-wrapper {
  gap: var(--spacing-sm);
  cursor: pointer;
  display: flex;
  align-items: center;
}

.login-checkbox {
  width: 18px;
  height: 18px;
  cursor: pointer;
  accent-color: var(--color-primary);
}

.login-checkbox-label {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
  user-select: none;
}

.login-forgot-link {
  font-size: var(--font-size-sm);
  color: var(--color-primary);
  text-decoration: none;
  transition: color 0.2s ease;
  font-weight: var(--font-weight-medium);
}

.login-forgot-link:hover {
  color: var(--color-secondary);
  text-decoration: underline;
}

.login-submit-btn {
  width: 100%;
  border: none;
  cursor: pointer;
  padding: var(--spacing-md) var(--spacing-xl);
  font-family: var(--font-family-heading);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-primary);
  background: var(--color-primary);
  transition: all 0.3s ease;
  border-radius: var(--border-radius-control);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
}

.login-submit-btn:hover:not(:disabled) {
  background: var(--color-secondary);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px color-mix(in oklab, var(--color-primary) 30%, transparent);
}

.login-submit-btn:active:not(:disabled) {
  transform: translateY(0);
}

.login-submit-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.login-spinner {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.login-divider {
  display: flex;
  align-items: center;
  margin: var(--spacing-3xl) 0;
  text-align: center;
}

.login-divider::before,
.login-divider::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--color-border);
}

.login-divider span {
  padding: 0 var(--spacing-lg);
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-sm);
}

.login-social-buttons {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.login-social-btn {
  width: 100%;
  border: 1px solid var(--color-border);
  cursor: pointer;
  padding: var(--spacing-md) var(--spacing-xl);
  font-family: var(--font-family-body);
  font-size: var(--font-size-base);
  font-weight: var(--font-weight-medium);
  background: var(--color-surface);
  transition: all 0.2s ease;
  border-radius: var(--border-radius-control);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  color: var(--color-on-surface);
}

.login-social-btn:hover:not(:disabled) {
  background: var(--color-surface-elevated);
  border-color: var(--color-primary);
  transform: translateY(-2px);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.login-social-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.login-social-btn svg {
  flex-shrink: 0;
}

.login-footer {
  text-align: center;
  margin-top: var(--spacing-3xl);
  padding-top: var(--spacing-xl);
  border-top: 1px solid var(--color-border);
}

.login-footer-text {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
}

.login-footer-link {
  color: var(--color-primary);
  text-decoration: none;
  font-weight: var(--font-weight-medium);
  transition: color 0.2s ease;
}

.login-footer-link:hover {
  color: var(--color-secondary);
  text-decoration: underline;
}

@media (max-width: 767px) {
  .login-section {
    padding: var(--spacing-2xl) var(--spacing-lg);
    min-height: calc(100vh - 60px);
  }
  
  .login-card {
    padding: var(--spacing-2xl);
  }
  
  .login-title {
    font-size: var(--font-size-2xl);
  }
  
  .login-form-options {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--spacing-sm);
  }
}

@media (max-width: 479px) {
  .login-card {
    padding: var(--spacing-xl);
  }
  
  .login-icon-wrapper {
    width: 56px;
    height: 56px;
  }
  
  .login-title {
    font-size: var(--font-size-xl);
  }
}
</style>`}
      />
      <style jsx>
        {`
          .login-container {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
        `}
      </style>
    </>
  )
}

export default Login