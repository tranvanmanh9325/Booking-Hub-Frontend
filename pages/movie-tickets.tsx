import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'

import Navigation from '../components/navigation'
import Footer from '../components/footer'
import MovieTicketsSections from '../sections/movie-tickets-sections'

const MovieTickets = (props: any) => {
  return (
    <>
      <div className="movie-tickets-container1">
        <Head>
          <title>Movie-Tickets - Sarcastic Juicy Butterfly</title>
          <meta
            property="og:title"
            content="Movie-Tickets - Sarcastic Juicy Butterfly"
          />
          <link
            rel="canonical"
            href="https://sarcastic-juicy-butterfly-4vz5gk.teleporthq.app/movie-tickets"
          />
        </Head>
        <Navigation></Navigation>
        <section className="hero-booking">
          <div className="hero-media">
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
              src="https://videos.pexels.com/video-files/7233574/7233574-hd_2048_864_25fps.mp4"
              className="hero-video"
            ></video>
            <div className="hero-scrim"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-card">
              <h1 className="movie-tickets-hero-title hero-title">
                Trải Nghiệm Điện Ảnh Đỉnh Cao Tại Booking Hub
              </h1>
              <p className="movie-tickets-hero-subtitle hero-subtitle">
                Đặt vé xem phim nhanh chóng, chọn chỗ ngồi ưng ý và thanh toán
                bảo mật chỉ trong vài bước chạm.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary btn-lg">Đặt Vé Ngay</button>
                <button className="btn btn-lg btn-outline">
                  Xem Lịch Chiếu
                </button>
              </div>
              <div className="hero-badges">
                <div className="badge-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </svg>
                  <span>Thanh toán bảo mật</span>
                </div>
                <div className="badge-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2"></path>
                  </svg>
                  <span>Vé điện tử tức thì</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="showtimes-tabs">
          <div className="showtimes-container">
            <h2 className="movie-tickets-thq-section-title-elm1 section-title">
              Lịch Chiếu &amp; Chỗ Ngồi
            </h2>
            <div className="tabs-header">
              <button data-target="tab-now" className="tab-trigger active">
                Đang Chiếu
              </button>
              <button data-target="tab-soon" className="tab-trigger">
                Sắp Chiếu
              </button>
              <button data-target="tab-special" className="tab-trigger">
                Suất Chiếu Đặc Biệt
              </button>
            </div>
            <div className="tabs-content">
                <div id="tab-now" className="tab-panel active">
                  <div className="movie-grid">
                  <div className="movie-card">
                    <div className="movie-poster">
                      <img
                        src="https://images.pexels.com/photos/7991142/pexels-photo-7991142.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        alt="Movie Poster"
                      />
                      <span className="movie-rating">T18</span>
                    </div>
                    <div className="movie-info">
                      <h3>Hành Trình Vô Tận</h3>
                      <div className="time-slots">
                        <button className="time-btn">09:30</button>
                        <button className="time-btn">12:15</button>
                        <button className="time-btn active">15:00</button>
                        <button className="time-btn">18:45</button>
                      </div>
                      <div className="seat-preview">
                        <div className="screen-indicator">
                          <span>Màn Hình</span>
                        </div>
                        <div className="seat-grid-mini">
                          <div className="seat occupied"></div>
                          <div className="seat occupied"></div>
                          <div className="seat"></div>
                          <div className="seat"></div>
                          <div className="seat"></div>
                          <div className="seat"></div>
                          <div className="seat selected"></div>
                          <div className="seat selected"></div>
                          <div className="seat"></div>
                          <div className="seat"></div>
                        </div>
                        <p className="seat-status">Còn 42 chỗ trống</p>
                      </div>
                    </div>
                  </div>
                  <div className="movie-card">
                    <div className="movie-poster">
                      <img
                        src="https://images.pexels.com/photos/3709371/pexels-photo-3709371.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                        alt="Movie Poster"
                      />
                      <span className="movie-rating">P</span>
                    </div>
                    <div className="movie-info">
                      <h3>Thế Giới Diệu Kỳ</h3>
                      <div className="time-slots">
                        <button className="time-btn">10:00</button>
                        <button className="time-btn">14:30</button>
                        <button className="time-btn">17:15</button>
                        <button className="time-btn">20:00</button>
                      </div>
                      <div className="seat-preview">
                        <div className="screen-indicator">
                          <span>Màn Hình</span>
                        </div>
                        <div className="seat-grid-mini">
                          <div className="seat"></div>
                          <div className="seat"></div>
                          <div className="seat"></div>
                          <div className="seat occupied"></div>
                          <div className="seat occupied"></div>
                          <div className="seat"></div>
                          <div className="seat"></div>
                          <div className="seat"></div>
                          <div className="seat"></div>
                          <div className="seat"></div>
                        </div>
                        <p className="seat-status">Còn 15 chỗ trống</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="tab-soon" className="tab-panel">
                <div className="empty-state">
                  <p>Các phim sắp chiếu sẽ được cập nhật sớm nhất.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="checkout-process">
          <div className="checkout-container">
            <h2 className="section-title">Quy Trình Đặt Vé</h2>
            <div className="stepper-wrapper">
              <div className="step-item active">
                <div className="step-icon">
                  <span>1</span>
                </div>
                <div className="step-label">
                  <span>Chọn Phim</span>
                </div>
              </div>
              <div className="step-connector"></div>
              <div className="step-item">
                <div className="step-icon">
                  <span>2</span>
                </div>
                <div className="step-label">
                  <span>Chọn Chỗ</span>
                </div>
              </div>
              <div className="step-connector"></div>
              <div className="step-item">
                <div className="step-icon">
                  <span>3</span>
                </div>
                <div className="step-label">
                  <span>Thanh Toán</span>
                </div>
              </div>
              <div className="step-connector"></div>
              <div className="step-item">
                <div className="step-icon">
                  <span>4</span>
                </div>
                <div className="step-label">
                  <span>Nhận Vé</span>
                </div>
              </div>
            </div>
            <div className="checkout-auth-card">
              <div className="auth-header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12l2 2l4-4"></path>
                </svg>
                <h3>Bảo Mật Tuyệt Đối</h3>
              </div>
              <p className="section-content">
                Hệ thống Booking Hub sử dụng xác thực JWT và mã hóa SSL để đảm
                bảo mọi giao dịch của bạn luôn an toàn.
              </p>
              <div className="auth-actions">
                <button className="btn btn-primary">Đăng Nhập Ngay</button>
                <button className="btn btn-link">
                  Tiếp tục với tư cách khách
                </button>
              </div>
            </div>
          </div>
        </section>
        <MovieTicketsSections />
        <div className="movie-tickets-container2">
          <div className="movie-tickets-container3">
            <Script
              html={`<style>
        @keyframes slideIn {from {opacity: 0;
transform: translateX(-40px);}
to {opacity: 1;
transform: translateX(0);}}
        </style> `}
            ></Script>
          </div>
        </div>
        <div className="movie-tickets-container4">
          <div className="movie-tickets-container5">
            <Script
              html={`<script defer data-name="booking-hub-logic">
(function(){
  // Tabs Logic
  const tabTriggers = document.querySelectorAll(".tab-trigger")
  const tabPanels = document.querySelectorAll(".tab-panel")

  tabTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const target = trigger.getAttribute("data-target")

      tabTriggers.forEach((t) => t.classList.remove("active"))
      tabPanels.forEach((p) => p.classList.remove("active"))

      trigger.classList.add("active")
      document.getElementById(target).classList.add("active")
    })
  })

  // Simple Carousel Logic
  const track = document.querySelector(".carousel-track")
  const nextBtn = document.querySelector(".carousel-btn.next")
  const prevBtn = document.querySelector(".carousel-btn.prev")
  let index = 0

  function updateCarousel() {
    const cardWidth = document.querySelector(".testimonial-card").offsetWidth + 24 // width + gap
    track.style.transform = \`translateX(-\${index * cardWidth}px)\`
  }

  nextBtn.addEventListener("click", () => {
    const max = track.children.length - (window.innerWidth > 991 ? 3 : window.innerWidth > 767 ? 2 : 1)
    if (index < max) {
      index++
      updateCarousel()
    } else {
      index = 0
      updateCarousel()
    }
  })

  prevBtn.addEventListener("click", () => {
    if (index > 0) {
      index--
      updateCarousel()
    }
  })

  window.addEventListener("resize", updateCarousel)

  // Movie Time Selection
  const timeBtns = document.querySelectorAll(".time-btn")
  timeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const parent = btn.closest(".time-slots")
      parent.querySelectorAll(".time-btn").forEach((b) => b.classList.remove("active"))
      btn.classList.add("active")
    })
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div
            aria-label="Sign up to TeleportHQ"
            className="movie-tickets-container6"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="movie-tickets-icon43"
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
            <span className="movie-tickets-text55">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .movie-tickets-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .movie-tickets-thq-section-title-elm1 {
            text-align: center !important;
          }
          .movie-tickets-container2 {
            display: none;
          }
          .movie-tickets-container3 {
            display: contents;
          }
          .movie-tickets-container4 {
            display: none;
          }
          .movie-tickets-container5 {
            display: contents;
          }
          .movie-tickets-container6 {
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
          .movie-tickets-icon43 {
            width: 24px;
            margin-right: 4px;
          }
          .movie-tickets-text55 {
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

export default MovieTickets