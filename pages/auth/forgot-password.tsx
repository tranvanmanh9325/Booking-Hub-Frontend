import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Navigation from '../../components/navigation'
import { ForgotPasswordStyles } from '@/components/auth/forgot-password-styles'
import { apiClient } from '../../lib/api-client'

const ForgotPassword: React.FC = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')
    const [error, setError] = useState<string | null>(null)
    const [success, setSuccess] = useState<string | null>(null)
    const [isLoading, setIsLoading] = useState(false)

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email) {
            setError('Vui lòng nhập địa chỉ email')
            return
        }

        if (!validateEmail(email)) {
            setError('Địa chỉ email không hợp lệ')
            return
        }

        setIsLoading(true)
        setError(null)
        setSuccess(null)

        try {
            await apiClient.post('/api/auth/forgot-password', { email })
            setSuccess('Chúng tôi đã gửi liên kết đặt lại mật khẩu đến email của bạn. Vui lòng kiểm tra hộp thư đến.')
        } catch (err: any) {
            console.error('Forgot password error:', err)
            setError(err.message || 'Có lỗi xảy ra. Vui lòng thử lại sau.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <div className="login-container">
                <Head>
                    <title>Quên Mật Khẩu - Booking Hub</title>
                    <meta property="og:title" content="Quên Mật Khẩu - Booking Hub" />
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
                                <h1 className="login-title">Quên Mật Khẩu?</h1>
                                <p className="login-subtitle">
                                    Đừng lo lắng! Nhập email của bạn và chúng tôi sẽ gửi hướng dẫn đặt lại mật khẩu.
                                </p>
                            </div>

                            {error && (
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
                                    <span>{error}</span>
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
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value)
                                                setError(null)
                                            }}
                                            className={`login-input ${error ? 'login-input-error' : ''}`}
                                            placeholder="Nhập email của bạn"
                                            disabled={isLoading}
                                        />
                                    </div>
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
                                            <span>Đang gửi...</span>
                                        </>
                                    ) : (
                                        <span>Gửi Yêu Cầu</span>
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

export default ForgotPassword