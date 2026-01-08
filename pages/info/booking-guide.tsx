import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Navigation from '../../components/navigation'
import BookingGuideStyles from '../../components/info/booking-guide-styles'

const BookingGuide: React.FC = () => {
    return (
        <>
            <Head>
                <title>Hướng Dẫn Đặt Chỗ - Booking Hub</title>
                <meta name="description" content="Hướng dẫn chi tiết từng bước đặt phòng, vé máy bay và nhà hàng trên Booking Hub. Đặt chỗ dễ dàng, nhanh chóng và an toàn." />
            </Head>
            <Navigation />

            <div className="booking-guide-wrapper">
                <div className="booking-guide-hero">
                    <div className="booking-guide-container">
                        <h1 className="booking-guide-title">Hướng Dẫn Đặt Chỗ</h1>
                        <p className="booking-guide-subtitle">
                            Chào mừng bạn đến với Booking Hub! Dưới đây là quy trình đơn giản để bạn có thể đặt phòng, vé vui chơi hoặc bàn ăn nhà hàng chỉ trong vài phút.
                        </p>
                    </div>
                </div>

                <div className="booking-guide-container">
                    <div className="booking-guide-content">

                        {/* Steps Section */}
                        <div className="guide-steps-grid">
                            {/* Step 1 */}
                            <div className="guide-step-card">
                                <span className="step-number">01</span>
                                <div className="step-icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="11" cy="11" r="8"></circle>
                                        <path d="m21 21-4.35-4.35"></path>
                                    </svg>
                                </div>
                                <h3 className="step-title">Tìm Kiếm</h3>
                                <p className="step-description">
                                    Nhập điểm đến, ngày đi và số lượng người vào thanh tìm kiếm. Hệ thống sẽ lọc ra những lựa chọn tốt nhất dành cho bạn từ hàng ngàn kết quả.
                                </p>
                            </div>

                            {/* Step 2 */}
                            <div className="guide-step-card">
                                <span className="step-number">02</span>
                                <div className="step-icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M9 11V6a3 3 0 0 1 6 0v5"></path>
                                        <path d="M12 11c-1.1 0-2 .9-2 2v5c0 1.1.9 2 2 2h0c1.1 0 2-.9 2-2v-5c0-1.1-.9-2-2-2h0z"></path>
                                        <path d="M18 11V6a3 3 0 0 0-6 0v5"></path>
                                        <path d="M6 11V6a3 3 0 0 1 6 0v5"></path>
                                    </svg>
                                </div>
                                <h3 className="step-title">Lựa Chọn</h3>
                                <p className="step-description">
                                    Xem chi tiết hình ảnh, đánh giá từ khách hàng cũ và so sánh giá cả. Chọn dịch vụ phù hợp nhất với nhu cầu và ngân sách của bạn.
                                </p>
                            </div>

                            {/* Step 3 */}
                            <div className="guide-step-card">
                                <span className="step-number">03</span>
                                <div className="step-icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                    </svg>
                                </div>
                                <h3 className="step-title">Đặt Chỗ</h3>
                                <p className="step-description">
                                    Điền thông tin cá nhân và yêu cầu đặc biệt (nếu có). Kiểm tra kỹ lại thông tin đặt chỗ trước khi chuyển sang bước thanh toán.
                                </p>
                            </div>

                            {/* Step 4 */}
                            <div className="guide-step-card">
                                <span className="step-number">04</span>
                                <div className="step-icon-wrapper">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                                        <line x1="2" y1="10" x2="22" y2="10"></line>
                                        <line x1="0" y1="0" x2="0" y2="0"></line>
                                    </svg>
                                </div>
                                <h3 className="step-title">Thanh Toán & Nhận Vé</h3>
                                <p className="step-description">
                                    Thanh toán an toàn qua các cổng thanh toán uy tín. Vé điện tử hoặc mã đặt chỗ sẽ được gửi ngay lập tức qua email của bạn.
                                </p>
                            </div>
                        </div>

                        {/* Important Notes */}
                        <div className="important-notes-section">
                            <h2 className="notes-title">Lưu Ý Quan Trọng</h2>
                            <div className="notes-grid">
                                <div className="note-item">
                                    <div className="note-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <line x1="12" y1="8" x2="12" y2="12"></line>
                                            <line x1="12" y1="16" x2="12.01" y2="16"></line>
                                        </svg>
                                    </div>
                                    <div className="note-content">
                                        <h4>Xác nhận email</h4>
                                        <p>Vui lòng kiểm tra kỹ địa chỉ email. Mọi thông tin xác nhận và vé điện tử sẽ được gửi qua email này.</p>
                                    </div>
                                </div>

                                <div className="note-item">
                                    <div className="note-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                            <polyline points="7 10 12 15 17 10"></polyline>
                                            <line x1="12" y1="15" x2="12" y2="3"></line>
                                        </svg>
                                    </div>
                                    <div className="note-content">
                                        <h4>Lưu vé điện tử</h4>
                                        <p>Bạn có thể lưu ảnh chụp màn hình vé điện tử hoặc mã QR để check-in nhanh chóng mà không cần mạng internet.</p>
                                    </div>
                                </div>

                                <div className="note-item">
                                    <div className="note-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                                        </svg>
                                    </div>
                                    <div className="note-content">
                                        <h4>Chính sách hủy</h4>
                                        <p>Mỗi dịch vụ có chính sách hoàn hủy khác nhau. Hãy đọc kỹ điều khoản trước khi thanh toán.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="cta-section">
                            <Link href="/" className="cta-button">
                                Bắt đầu đặt chỗ ngay
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                </svg>
                            </Link>
                        </div>

                    </div>
                </div>
            </div>

            <BookingGuideStyles />
        </>
    )
}

export default BookingGuide