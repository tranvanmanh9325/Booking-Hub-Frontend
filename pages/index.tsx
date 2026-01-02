import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import HomeSections from '../sections/home-sections'

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
        <HomeSections></HomeSections>
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
        `}
      </style>
    </>
  )
}

export default Home