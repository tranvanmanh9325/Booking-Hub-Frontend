import React from 'react'

const FeaturesSection: React.FC = () => {
    return (
        <section className="features-section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Tại Sao Chọn Booking Hub?</h2>
                    <p className="section-content">
                        Nền tảng công nghệ hiện đại mang đến trải nghiệm đặt chỗ mượt mà
                        nhất.
                    </p>
                </div>
                <div className="features-grid">
                    <div className="feature-card">
                        <div className="feature-icon-box">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="section-subtitle">Tốc Độ Vượt Trội</h3>
                        <p className="section-content">
                            Hệ thống xử lý hàng nghìn giao dịch cùng lúc với công nghệ
                            High Concurrency.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-box">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                >
                                    <path d="M10 22v-6.57M12 11h.01M12 7h.01M14 15.43V22m1-6a5 5 0 0 0-6 0m7-5h.01M16 7h.01M8 11h.01M8 7h.01"></path>
                                    <rect width="16" height="20" x="4" y="2" rx="2"></rect>
                                </g>
                            </svg>
                        </div>
                        <h3 className="section-subtitle">Tất Cả Trong Một</h3>
                        <p className="section-content">
                            Đặt vé phim, phòng khách sạn và hơn thế nữa chỉ trên một ứng
                            dụng duy nhất.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-box">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <g
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                >
                                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                                    <path d="m9 12l2 2l4-4"></path>
                                </g>
                            </svg>
                        </div>
                        <h3 className="section-subtitle">Bảo Mật Tuyệt Đối</h3>
                        <p className="section-content">
                            Công nghệ JWT và mã hóa đa lớp đảm bảo thông tin cá nhân của
                            bạn luôn an toàn.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-box">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="section-subtitle">Xác Nhận Tức Thì</h3>
                        <p className="section-content">
                            Không còn phải chờ đợi. Vé và mã đặt phòng được gửi ngay sau
                            khi thanh toán.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-box">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m9 18l6-6l-6-6"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="section-subtitle">Giao Diện Hiện Đại</h3>
                        <p className="section-content">
                            Thiết kế tinh tế, dễ sử dụng trên mọi thiết bị từ điện thoại
                            đến máy tính.
                        </p>
                    </div>
                    <div className="feature-card">
                        <div className="feature-icon-box">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    fill="none"
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.12 2.12 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.12 2.12 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.12 2.12 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16z"
                                ></path>
                            </svg>
                        </div>
                        <h3 className="section-subtitle">Hỗ Trợ 24/7</h3>
                        <p className="section-content">
                            Đội ngũ chuyên nghiệp luôn sẵn sàng giải đáp mọi thắc mắc của
                            bạn bất cứ lúc nào.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection
