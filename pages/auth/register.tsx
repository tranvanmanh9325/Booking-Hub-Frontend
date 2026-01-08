import React, { useState } from 'react'
import Head from 'next/head'
import Script from 'next/script'

import Navigation from '../../components/navigation'
import { RegisterStyles } from '../../components/auth/register-styles'
import { useRegisterHandlers, RegisterFormData, RegisterErrors } from '../../components/auth/register-handlers'

const Register: React.FC = () => {
  const [formData, setFormData] = useState<RegisterFormData>({
    email: '',
    password: '',
    confirmPassword: '',
    fullName: '',
    phone: '',
  })
  const [errors, setErrors] = useState<RegisterErrors>({})
  const [isLoading, setIsLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [isGoogleLoading, setIsGoogleLoading] = useState(false)

  const { handleChange, handleSubmit, handleGoogleSignIn } = useRegisterHandlers(
    formData,
    setFormData,
    errors,
    setErrors,
    setIsLoading,
    setIsGoogleLoading,
    agreeToTerms
  )

  return (
    <>
      <div className="register-container">
        <Head>
          <title>Đăng Ký - Booking Hub</title>
          <meta property="og:title" content="Đăng Ký - Booking Hub" />
        </Head>
        <Script
          src="https://accounts.google.com/gsi/client"
          strategy="lazyOnload"
          onLoad={() => {
            // Google Identity Services loaded
          }}
        />
        <Navigation></Navigation>
        <section className="register-section">
          <div className="register-media-container">
            <img
              src="https://images.pexels.com/photos/29870243/pexels-photo-29870243.jpeg?auto=compress&cs=tinysrgb&w=1500"
              alt="Register Background"
              className="register-bg-image"
            />
            <div className="register-overlay"></div>
          </div>
          <div className="register-content-wrapper">
            <div className="register-card">
              <div className="register-header">
                <div className="register-icon-wrapper">
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
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <h1 className="register-title">Tạo Tài Khoản</h1>
                <p className="register-subtitle">
                  Đăng ký ngay để trải nghiệm dịch vụ đặt chỗ tốt nhất
                </p>
              </div>

              {errors.general && (
                <div className="register-error-message">
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

              <form onSubmit={handleSubmit} className="register-form">
                <div className="register-form-group">
                  <label htmlFor="fullName" className="register-label">
                    Họ và Tên
                  </label>
                  <div className="register-input-wrapper">
                    <div className="register-input-icon">
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
                        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                        <circle cx="12" cy="7" r="4"></circle>
                      </svg>
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`register-input ${errors.fullName ? 'register-input-error' : ''}`}
                      placeholder="Nhập họ và tên của bạn"
                      autoComplete="name"
                    />
                  </div>
                  {errors.fullName && (
                    <span className="register-field-error">{errors.fullName}</span>
                  )}
                </div>

                <div className="register-form-group">
                  <label htmlFor="email" className="register-label">
                    Email
                  </label>
                  <div className="register-input-wrapper">
                    <div className="register-input-icon">
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
                      className={`register-input ${errors.email ? 'register-input-error' : ''}`}
                      placeholder="Nhập email của bạn"
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && (
                    <span className="register-field-error">{errors.email}</span>
                  )}
                </div>

                <div className="register-form-group">
                  <label htmlFor="phone" className="register-label">
                    Số Điện Thoại <span className="register-optional">(Tùy chọn)</span>
                  </label>
                  <div className="register-input-wrapper">
                    <div className="register-input-icon">
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
                        <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"></path>
                      </svg>
                    </div>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`register-input ${errors.phone ? 'register-input-error' : ''}`}
                      placeholder="Nhập số điện thoại (10-11 số)"
                      autoComplete="tel"
                    />
                  </div>
                  {errors.phone && (
                    <span className="register-field-error">{errors.phone}</span>
                  )}
                </div>

                <div className="register-form-group">
                  <label htmlFor="password" className="register-label">
                    Mật khẩu
                  </label>
                  <div className="register-input-wrapper">
                    <div className="register-input-icon">
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
                      className={`register-input ${errors.password ? 'register-input-error' : ''}`}
                      placeholder="Nhập mật khẩu (tối thiểu 6 ký tự)"
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="register-password-toggle"
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
                    <span className="register-field-error">{errors.password}</span>
                  )}
                </div>

                <div className="register-form-group">
                  <label htmlFor="confirmPassword" className="register-label">
                    Xác Nhận Mật Khẩu
                  </label>
                  <div className="register-input-wrapper">
                    <div className="register-input-icon">
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
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className={`register-input ${errors.confirmPassword ? 'register-input-error' : ''}`}
                      placeholder="Nhập lại mật khẩu"
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      className="register-password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      aria-label={showConfirmPassword ? 'Ẩn mật khẩu' : 'Hiện mật khẩu'}
                    >
                      {showConfirmPassword ? (
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
                  {errors.confirmPassword && (
                    <span className="register-field-error">{errors.confirmPassword}</span>
                  )}
                </div>

                <div className="register-form-group">
                  <label className="register-checkbox-wrapper">
                    <input
                      type="checkbox"
                      className="register-checkbox"
                      checked={agreeToTerms}
                      onChange={(e) => setAgreeToTerms(e.target.checked)}
                    />
                    <span className="register-checkbox-label">
                      Tôi đồng ý với{' '}
                      <a href="/info/terms" target="_blank" className="register-link">
                        Điều khoản sử dụng
                      </a>{' '}
                      và{' '}
                      <a href="/info/privacy" target="_blank" className="register-link">
                        Chính sách bảo mật
                      </a>
                    </span>
                  </label>
                </div>

                <button
                  type="submit"
                  className="register-submit-btn"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <svg
                        className="register-spinner"
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
                      <span>Đang đăng ký...</span>
                    </>
                  ) : (
                    <span>Đăng Ký</span>
                  )}
                </button>
              </form>

              <div className="register-divider">
                <span>Hoặc</span>
              </div>

              <div className="register-social-buttons">
                <button
                  type="button"
                  className="register-social-btn register-social-google"
                  onClick={handleGoogleSignIn}
                  disabled={isGoogleLoading || isLoading}
                >
                  {isGoogleLoading ? (
                    <>
                      <svg
                        className="register-spinner"
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
                          <path d="M20.66 12.693c0-.603-.054-1.182-.155-1.738H12v3.287h4.844a3.91 3.91 0 0 1-1.697 2.566v2.133h2.747c1.608-1.48 2.535-3.65 2.535-6.24z" fill="#4285F4" />
                          <path d="M12 21c2.295 0 4.22-.76 5.625-2.06l-2.747-2.132c-.76.51-1.734.81-2.878.81-2.214 0-4.088-1.494-4.756-3.503H4.577v2.202A8.997 8.997 0 0 0 12 21z" fill="#34A853" />
                          <path d="M7.244 13.115c-.17-.51-.267-1.055-.267-1.615s.097-1.105.267-1.615V7.683H4.577A8.996 8.996 0 0 0 3 12c0 1.452.348 2.827.577 4.317l2.667-2.202z" fill="#FBBC05" />
                          <path d="M12 7.38c1.248 0 2.368.428 3.25 1.27l2.438-2.438C16.22 4.558 14.295 3.75 12 3.75a8.997 8.997 0 0 0-7.423 3.933l2.667 2.202C7.912 8.874 9.786 7.38 12 7.38z" fill="#EA4335" />
                        </g>
                      </svg>
                      <span>Đăng ký với Google</span>
                    </>
                  )}
                </button>
                <button type="button" className="register-social-btn register-social-facebook">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" fill="#1877F2" />
                  </svg>
                  <span>Đăng ký với Facebook</span>
                </button>
              </div>

              <div className="register-footer">
                <span className="register-footer-text">
                  Đã có tài khoản?{' '}
                  <a href="/auth/login" className="register-footer-link">
                    Đăng nhập ngay
                  </a>
                </span>
              </div>
            </div>
          </div>
        </section>
      </div>
      <RegisterStyles />
    </>
  )
}

export default Register