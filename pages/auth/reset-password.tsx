import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Navigation from '../../components/navigation'
import { ForgotPasswordStyles } from './forgot-password-styles' // Reuse styles
import { apiClient } from '../../lib/api-client'

const ResetPassword: React.FC = () => {
    const router = useRouter()
    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    })
    const [token, setToken] = useState<string>('')
    const [errors, setErrors] = useState<{ password?: string; confirmPassword?: string; general?: string }>({})
    const [success, setSuccess] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
        if (router.isReady) {
            const { token } = router.query
            if (typeof token === 'string') {
                setToken(token)
            } else {
                setErrors({ general: 'Token không hợp lệ hoặc bị thiếu.' })
            }
        }
    }, [router.isReady, router.query])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
        if (errors[name as keyof typeof errors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }))
        }
    }

    const validateForm = () => {
        const newErrors: typeof errors = {}

        if (!formData.password) {
            newErrors.password = 'Mật khẩu là bắt buộc'
        } else if (formData.password.length < 6) {
            newErrors.password = 'Mật khẩu phải có ít nhất 6 ký tự'
        }

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Mật khẩu xác nhận không khớp'
        }

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!token) {
            setErrors({ general: 'Token không hợp lệ. Vui lòng yêu cầu lại liên kết đặt lại mật khẩu.' })
            return
        }

        if (!validateForm()) {
            return
        }

        setIsLoading(true)
        setErrors({})
        setSuccess(null)

        try {
            await apiClient.post('/api/auth/reset-password', {
                token,
                newPassword: formData.password,
            })
            setSuccess('Mật khẩu của bạn đã được đặt lại thành công. Bạn sẽ được chuyển hướng đến trang đăng nhập.')
            setTimeout(() => {
                router.push('/auth/login')
            }, 3000)
        } catch (err: any) {
            console.error('Reset password error:', err)
            setErrors({ general: err.message || 'Mã xác thực không hợp lệ hoặc đã hết hạn.' })
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="login-container">
                <Head>
                    <title>Đặt Lại Mật Khẩu - Booking Hub</title>
                </Head>
                <Navigation></Navigation>
                <section className="login-section">
                    <div className="login-media-container">
                        <img
                            src="https://images.pexels.com/photos/29870243/pexels-photo-29870243.jpeg?auto=compress&cs=tinysrgb&w=1500"
                            alt="Background"
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
                                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect>
                                        <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                                    </svg>
                                </div>
                                <h1 className="login-title">Đặt Lại Mật Khẩu</h1>
                                <p className="login-subtitle">
                                    Nhập mật khẩu mới của bạn bên dưới.
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

                            {success && (
                                <div className="login-success-message">
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
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                    </svg>
                                    <span>{success}</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="login-form">
                                <div className="login-form-group">
                                    <label htmlFor="password" className="login-label">
                                        Mật khẩu mới
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
                                            placeholder="Nhập mật khẩu mới"
                                        />
                                        <button
                                            type="button"
                                            className="login-password-toggle"
                                            onClick={() => setShowPassword(!showPassword)}
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

                                <div className="login-form-group">
                                    <label htmlFor="confirmPassword" className="login-label">
                                        Xác nhận mật khẩu
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
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                            </svg>
                                        </div>
                                        <input
                                            type={showPassword ? 'text' : 'password'}
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className={`login-input ${errors.confirmPassword ? 'login-input-error' : ''}`}
                                            placeholder="Nhập lại mật khẩu mới"
                                        />
                                    </div>
                                    {errors.confirmPassword && (
                                        <span className="login-field-error">{errors.confirmPassword}</span>
                                    )}
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
                                            <span>Đang cập nhật...</span>
                                        </>
                                    ) : (
                                        <span>Đặt Lại Mật Khẩu</span>
                                    )}
                                </button>
                            </form>

                            <div className="login-footer">
                                <span className="login-footer-text">
                                    Nhớ mật khẩu?{' '}
                                    <a href="/auth/login" className="login-footer-link">
                                        Đăng nhập
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <ForgotPasswordStyles />
        </>
    )
}

export default ResetPassword
