import React from 'react'
import Script from 'dangerous-html/react'
import Footer from '../components/footer'

const HomeSections: React.FC = () => {
  return (
    <>
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
    </>
  )
}

export default HomeSections