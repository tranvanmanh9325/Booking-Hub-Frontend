import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Home: React.FC = () => {
  return (
    <>
      <div className="home-container1">
        <Head>
          <title>Sentimental Apprehensive Rail</title>
          <meta property="og:title" content="Sentimental Apprehensive Rail" />
          <link
            rel="canonical"
            href="https://sentimental-apprehensive-rail-jrswfn.teleporthq.app/"
          />
        </Head>
        <Navigation></Navigation>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="hero-section">
          <div className="hero-media-container">
            <img
              src="https://images.pexels.com/photos/29870243/pexels-photo-29870243.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Booking Hub Hero"
              className="hero-bg-image"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-text-block">
              <h1 className="home-hero-title hero-title">
                Trải Nghiệm Đặt Chỗ Hoàn Hảo
              </h1>
              <p className="home-hero-subtitle hero-subtitle">
                Từ những thước phim bom tấn đến những kỳ nghỉ sang trọng,
                Booking Hub kết nối mọi nhu cầu giải trí của bạn trong một nền
                tảng duy nhất.
              </p>
              <div className="hero-search-container">
                <div className="search-tabs">
                  <button data-type="movie" className="search-tab active">
                    Phim Ảnh
                  </button>
                  <button data-type="hotel" className="search-tab">
                    Khách Sạn
                  </button>
                  <button title="Sắp ra mắt" className="search-tab disabled">
                    Nhà Hàng
                  </button>
                </div>
                <form
                  action="/search"
                  method="GET"
                  data-form-id="d7b4f0f9-f90e-48e9-82f5-a79329de5b6e"
                  className="search-form"
                >
                  <div className="search-input-group">
                    <div className="search-field">
                      <input
                        type="text"
                        placeholder="Bạn muốn đi đâu hoặc xem gì?"
                        required={true}
                        id="thq_textinput_n_V8"
                        name="textinput"
                        data-form-field-id="thq_textinput_n_V8"
                      />
                    </div>
                    <div className="search-field">
                      <input
                        type="date"
                        required={true}
                        id="thq_textinput_WVzY"
                        name="textinput"
                        data-form-field-id="thq_textinput_WVzY"
                      />
                    </div>
                    <button
                      type="submit"
                      id="thq_button_8H9E"
                      name="button"
                      data-form-field-id="thq_button_8H9E"
                      className="btn btn-accent btn-lg"
                    >
                      Tìm Kiếm
                    </button>
                  </div>
                </form>
                <div className="hero-quick-filters">
                  <span className="filter-label">Gợi ý:</span>
                  <button className="filter-chip">Phim hành động</button>
                  <button className="filter-chip">Resort ven biển</button>
                  <button className="filter-chip">Phòng Suite</button>
                </div>
              </div>
              <div className="hero-cta-group">
                <a href="#featured">
                  <div className="btn btn-primary btn-xl">
                    <span>Bắt Đầu Đặt Chỗ</span>
                  </div>
                </a>
                <a href="#about">
                  <div className="btn btn-xl btn-outline">
                    <span>Tìm Hiểu Thêm</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>
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
        <section className="showcase-section">
          <div className="section-header-full">
            <h2 className="section-title">Khám Phá Xu Hướng</h2>
            <p className="section-content">
              Những lựa chọn hàng đầu dành riêng cho bạn hôm nay.
            </p>
          </div>
          <div id="showcaseCarousel" className="carousel-container">
            <div className="carousel-track">
              <div className="showcase-card">
                <div className="card-media">
                  <img
                    src="https://images.pexels.com/photos/14021955/pexels-photo-14021955.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Hotel 1"
                  />
                  <span className="card-badge">Khách Sạn</span>
                </div>
                <div className="card-body">
                  <h3 className="section-subtitle">Grand Plaza Suite</h3>
                  <p className="section-content">
                    Trải nghiệm không gian xa hoa tại trung tâm thành phố.
                  </p>
                  <div className="card-footer">
                    <span className="price">Từ 2.500.000đ</span>
                    <button className="btn btn-primary btn-sm">Đặt Ngay</button>
                  </div>
                </div>
              </div>
              <div className="showcase-card">
                <div className="card-media">
                  <img
                    src="https://images.pexels.com/photos/4062524/pexels-photo-4062524.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Cinema 1"
                  />
                  <span className="card-badge">Phim Ảnh</span>
                </div>
                <div className="card-body">
                  <h3 className="section-subtitle">Chiến Binh Cuối Cùng</h3>
                  <p className="section-content">
                    Bom tấn hành động không thể bỏ lỡ trong tháng này.
                  </p>
                  <div className="card-footer">
                    <span className="price">95.000đ</span>
                    <button className="btn btn-primary btn-sm">Mua Vé</button>
                  </div>
                </div>
              </div>
              <div className="showcase-card">
                <div className="card-media">
                  <img
                    src="https://images.pexels.com/photos/5461582/pexels-photo-5461582.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Hotel 2"
                  />
                  <span className="card-badge">Khách Sạn</span>
                </div>
                <div className="card-body">
                  <h3 className="section-subtitle">Ocean Breeze Resort</h3>
                  <p className="section-content">
                    Tận hưởng tiếng sóng biển ngay bên hiên nhà bạn.
                  </p>
                  <div className="card-footer">
                    <span className="price">Từ 1.800.000đ</span>
                    <button className="btn btn-primary btn-sm">Đặt Ngay</button>
                  </div>
                </div>
              </div>
              <div className="showcase-card">
                <div className="card-media">
                  <img
                    src="https://images.pexels.com/photos/19169811/pexels-photo-19169811.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Cinema 2"
                  />
                  <span className="card-badge">Phim Ảnh</span>
                </div>
                <div className="card-body">
                  <h3 className="section-subtitle">Hành Trình Kỳ Diệu</h3>
                  <p className="section-content">
                    Phim hoạt hình cảm động dành cho cả gia đình.
                  </p>
                  <div className="card-footer">
                    <span className="price">85.000đ</span>
                    <button className="btn btn-primary btn-sm">Mua Vé</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <div id="stat-bookings" className="stat-value">
                  <span>500,000+</span>
                </div>
                <div className="stat-label">
                  <span>Lượt Đặt Chỗ Thành Công</span>
                </div>
              </div>
              <div className="stat-item">
                <div id="stat-uptime" className="stat-value">
                  <span>99.9%</span>
                </div>
                <div className="stat-label">
                  <span>Thời Gian Hoạt Động</span>
                </div>
              </div>
              <div className="stat-item">
                <div id="stat-speed" className="stat-value">
                  <span>&lt; 2s</span>
                </div>
                <div className="stat-label">
                  <span>Tốc Độ Xử Lý Trung Bình</span>
                </div>
              </div>
              <div className="stat-item">
                <div id="stat-secure" className="stat-value">
                  <span>100%</span>
                </div>
                <div className="stat-label">
                  <span>Giao Dịch An Toàn</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="testimonials-section">
          <div className="section-header-full">
            <h2 className="section-title">Khách Hàng Nói Gì?</h2>
            <p className="section-content">
              Sự tin tưởng của bạn là động lực để chúng tôi phát triển.
            </p>
          </div>
          <div id="testimonialCarousel" className="testimonial-carousel">
            <div className="testimonial-track">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                </div>
                <p className="testimonial-text">
                  &quot;Giao diện cực kỳ mượt mà. Tôi có thể đặt vé xem phim và
                  phòng khách sạn chỉ trong chưa đầy 5 phút. Rất chuyên
                  nghiệp!&quot;
                </p>
                <div className="testimonial-user">
                  <div className="user-avatar">
                    <span>MH</span>
                  </div>
                  <div className="user-info">
                    <span className="user-name">Minh Hoàng</span>
                    <span className="user-role">Khách hàng thường xuyên</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                </div>
                <p className="testimonial-text">
                  &quot;Hệ thống thanh toán rất an toàn. Tôi luôn yên tâm khi sử
                  dụng Booking Hub cho các chuyến công tác của mình.&quot;
                </p>
                <div className="testimonial-user">
                  <div className="user-avatar">
                    <span>LA</span>
                  </div>
                  <div className="user-info">
                    <span className="user-name">Lan Anh</span>
                    <span className="user-role">Quản lý dự án</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="var(--color-accent)"
                      d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
                    ></path>
                  </svg>
                </div>
                <p className="testimonial-text">
                  &quot;Ấm cúng và tiện lợi. Booking Hub thực sự hiểu người dùng
                  cần gì. Chắc chắn sẽ giới thiệu cho bạn bè!&quot;
                </p>
                <div className="testimonial-user">
                  <div className="user-avatar">
                    <span>QT</span>
                  </div>
                  <div className="user-info">
                    <span className="user-name">Quốc Trung</span>
                    <span className="user-role">Travel Blogger</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="gallery-section">
          <div className="section-header-full">
            <h2 className="section-title">Không Gian Của Chúng Tôi</h2>
            <p className="section-content">
              Khám phá những địa điểm tuyệt vời bạn có thể trải nghiệm cùng
              Booking Hub.
            </p>
          </div>
          <div className="gallery-masonry">
            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/18426842/pexels-photo-18426842.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Gallery 1"
              />
            </div>
            <div className="gallery-item large">
              <img
                src="https://images.pexels.com/photos/34940589/pexels-photo-34940589.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Gallery 2"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/20653866/pexels-photo-20653866.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Gallery 3"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/19689227/pexels-photo-19689227.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Gallery 4"
              />
            </div>
            <div className="gallery-item tall">
              <img
                src="https://images.pexels.com/photos/19689237/pexels-photo-19689237.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Gallery 5"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/6758528/pexels-photo-6758528.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Gallery 6"
              />
            </div>
            <div className="gallery-item">
              <img
                src="https://images.pexels.com/photos/11038192/pexels-photo-11038192.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Gallery 7"
              />
            </div>
            <div className="gallery-item wide">
              <img
                src="https://images.pexels.com/photos/20143786/pexels-photo-20143786.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Gallery 8"
              />
            </div>
          </div>
        </section>
        <section className="final-cta-section">
          <div className="cta-split-container">
            <div className="cta-content-column">
              <h2 className="section-title">
                Sẵn Sàng Cho Trải Nghiệm Tiếp Theo?
              </h2>
              <p className="section-content">
                Tham gia cùng hơn 500,000 người dùng đã tin tưởng Booking Hub.
                Đăng ký tài khoản ngay hôm nay để nhận những ưu đãi độc quyền.
              </p>
              <div className="cta-button-group">
                <button className="btn btn-primary btn-xl">Đăng Ký Ngay</button>
                <button className="btn btn-xl btn-outline">
                  Khám Phá Thêm
                </button>
              </div>
              <div className="cta-quick-links">
                <a href="#">
                  <div className="quick-link">
                    <span>Mua Vé Phim</span>
                  </div>
                </a>
                <a href="#">
                  <div className="quick-link">
                    <span>Đặt Khách Sạn</span>
                  </div>
                </a>
                <a href="#">
                  <div className="quick-link">
                    <span>Ưu Đãi Sắp Tới</span>
                  </div>
                </a>
              </div>
            </div>
            <div className="cta-visual-column">
              <div className="visual-card-stack">
                <div className="visual-card">
                  <div className="card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
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
                  <div className="card-text">
                    <strong>Ưu đãi vé phim</strong>
                    <span>Giảm 20% cho thành viên mới</span>
                  </div>
                </div>
                <div className="visual-card">
                  <div className="card-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="32"
                      height="32"
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
                  <div className="card-text">
                    <strong>Khách sạn VIP</strong>
                    <span>Tích điểm đổi đêm nghỉ miễn phí</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="home-container4">
          <div className="home-container5">
            <Script
              html={`<style>
        @keyframes float {0%,100% {transform: translateY(0);}
50% {transform: translateY(-15px);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="home-container6">
          <div className="home-container7">
            <Script
              html={`<script defer data-name="booking-hub-logic">
(function(){
  const tabs = document.querySelectorAll(".search-tab")
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      if (!tab.classList.contains("disabled")) {
        tabs.forEach((t) => t.classList.remove("active"))
        tab.classList.add("active")
        const type = tab.getAttribute("data-type")
        const input = document.querySelector('.search-field input[type="text"]')
        if (type === "movie") {
          input.placeholder = "Bạn muốn xem phim gì hôm nay?"
        } else if (type === "hotel") {
          input.placeholder = "Bạn muốn nghỉ dưỡng ở đâu?"
        }
      }
    })
  })

  const showcaseCarousel = document.getElementById("showcaseCarousel")
  let isDown = false
  let startX
  let scrollLeft

  const initCarousel = (carousel) => {
    carousel.addEventListener("mousedown", (e) => {
      isDown = true
      carousel.classList.add("active")
      startX = e.pageX - carousel.offsetLeft
      scrollLeft = carousel.scrollLeft
    })
    carousel.addEventListener("mouseleave", () => {
      isDown = false
      carousel.classList.remove("active")
    })
    carousel.addEventListener("mouseup", () => {
      isDown = false
      carousel.classList.remove("active")
    })
    carousel.addEventListener("mousemove", (e) => {
      if (!isDown) return
      e.preventDefault()
      const x = e.pageX - carousel.offsetLeft
      const walk = (x - startX) * 2
      carousel.scrollLeft = scrollLeft - walk
    })
  }

  initCarousel(showcaseCarousel)
  initCarousel(document.getElementById("testimonialCarousel"))

  const animateStats = () => {
    const stats = [
      { id: "stat-bookings", end: 500000, suffix: "+" },
      { id: "stat-uptime", end: 99.9, suffix: "%" },
      { id: "stat-speed", end: 2, prefix: "< ", suffix: "s" },
      { id: "stat-secure", end: 100, suffix: "%" },
    ]

    const options = {
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stats.forEach((stat) => {
            const el = document.getElementById(stat.id)
            let start = 0
            const duration = 2000
            const stepTime = 20
            const steps = duration / stepTime
            const increment = stat.end / steps

            const timer = setInterval(() => {
              start += increment
              if (start >= stat.end) {
                el.innerText = (stat.prefix || "") + stat.end + stat.suffix
                clearInterval(timer)
              } else {
                el.innerText = (stat.prefix || "") + Math.floor(start) + stat.suffix
              }
            }, stepTime)
          })
          observer.unobserve(entry.target)
        }
      })
    }, options)

    const statsSection = document.querySelector(".stats-section")
    if (statsSection) observer.observe(statsSection)
  }

  animateStats()
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div aria-label="Sign up to TeleportHQ" className="home-container8">
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="home-icon62"
            >
              <path
                d="M9.1017 4.64355H2.17867C0.711684 4.64355 -0.477539 5.79975 -0.477539 7.22599V13.9567C-0.477539 15.3829 0.711684 16.5391 2.17867 16.5391H9.1017C10.5687 16.5391 11.7579 15.3829 11.7579 13.9567V7.22599C11.7579 5.79975 10.5687 4.64355 9.1017 4.64355Z"
                fill="#B23ADE"
              ></path>
              <path
                d="M10.9733 12.7878C14.4208 12.7878 17.2156 10.0706 17.2156 6.71886C17.2156 3.3671 14.4208 0.649963 10.9733 0.649963C7.52573 0.649963 4.73096 3.3671 4.73096 6.71886C4.73096 10.0706 7.52573 12.7878 10.9733 12.7878Z"
                fill="#FF5C5C"
              ></path>
              <path
                d="M17.7373 13.3654C19.1497 14.1588 19.1497 15.4634 17.7373 16.2493L10.0865 20.5387C8.67402 21.332 7.51855 20.6836 7.51855 19.0968V10.5141C7.51855 8.92916 8.67402 8.2807 10.0865 9.07221L17.7373 13.3654Z"
                fill="#2874DE"
              ></path>
            </svg>
            <span className="home-text30">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
            display: none;
          }
          .home-container7 {
            display: contents;
          }
          .home-container8 {
            right: 50px;
            border: 1px solid #ffffff5c;
            bottom: 30px;
            display: flex;
            z-index: 22;
            position: fixed;
            box-shadow: 5px 5px 10px 0px rgba(31, 31, 31, 0.4);
            min-height: auto;
            align-items: center;
            padding-top: 8px;
            padding-left: 12px;
            border-radius: 8px;
            padding-right: 12px;
            padding-bottom: 8px;
            backdrop-filter: blur(6px);
            background-color: rgba(41, 41, 41, 0.41);
          }
          .home-icon62 {
            width: 24px;
            margin-right: 4px;
          }
          .home-text30 {
            color: white;
            font-size: 13px;
            font-style: normal;
            font-weight: 500;
            line-height: 24px;
          }
        `}
      </style>
    </>
  )
}

export default Home
