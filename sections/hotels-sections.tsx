import React from 'react'
import Image from 'next/image'
import Script from 'dangerous-html/react'

const HotelsSections: React.FC = () => {
  return (
    <>
      <section className="hotels-gallery-section">
        <div className="gallery-bento-grid">
          <div className="bento-cell main-cell">
            <Image
              src="https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&cs=tinysrgb&w=1500"
              alt="Room Main View"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="cell-overlay">
              <h3 className="cell-title">Phòng Executive Suite</h3>
              <p className="cell-desc">
                Tầm nhìn hướng biển tuyệt đẹp với không gian rộng 65m².
              </p>
            </div>
          </div>
          <div className="bento-cell side-cell-1">
            <Image
              src="https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&cs=tinysrgb&w=1500"
              alt="Breakfast"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
          </div>
          <div className="bento-cell side-cell-2">
            <Image
              src="https://images.pexels.com/photos/6667462/pexels-photo-6667462.jpeg?auto=compress&cs=tinysrgb&w=1500"
              alt="Pool"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 50vw, 25vw"
            />
            <div className="gallery-more">
              <span>+15 Ảnh</span>
            </div>
          </div>
        </div>
        <div className="gallery-info-bar">
          <div className="info-group">
            <span className="info-label">Đánh giá chung:</span>
            <span className="info-value">Tuyệt vời (9.2/10)</span>
          </div>
          <div className="info-group">
            <span className="info-label">Chính sách:</span>
            <span className="info-value">
              Không hút thuốc, Không thú cưng
            </span>
          </div>
          <div className="info-group">
            <span className="info-label">Giá dự kiến:</span>
            <span className="info-value price-highlight">
              4,500,000₫ / đêm
            </span>
          </div>
        </div>
      </section>
      <section className="hotels-testimonials-section">
        <div className="testimonials-header">
          <h2 className="section-title">Khách Hàng Nói Gì?</h2>
          <p className="section-subtitle">
            Hơn 10,000 khách hàng đã tin tưởng Booking Hub
          </p>
        </div>
        <div
          className="hotels-carousel-container"
          tabIndex={0}
          role="region"
          aria-label="Khách hàng nói gì carousel"
        >
          <div className="hotels-carousel-track">
            <div className="hotels-testimonial-card">
              <div className="hotels-testimonial-rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
              </div>
              <p className="hotels-testimonial-text">
                &quot;Trải nghiệm đặt phòng cực kỳ nhanh chóng. Giao diện dễ
                sử dụng và giá cả luôn tốt hơn các trang khác. Tôi chắc chắn
                sẽ quay lại!&quot;
              </p>
              <div className="testimonial-user">
                <div className="hotels-user-avatar">
                  <span>NA</span>
                </div>
                <div className="user-info">
                  <span className="hotels-user-name">Nguyễn Anh</span>
                  <span className="user-status">Khách hàng thân thiết</span>
                </div>
              </div>
            </div>
            <div className="hotels-testimonial-card">
              <div className="hotels-testimonial-rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
              </div>
              <p className="hotels-testimonial-text">
                &quot;Dịch vụ hỗ trợ khách hàng rất chuyên nghiệp. Họ đã giúp
                tôi đổi ngày phòng chỉ trong vài phút mà không mất thêm
                phí.&quot;
              </p>
              <div className="testimonial-user">
                <div className="hotels-user-avatar">
                  <span>TH</span>
                </div>
                <div className="user-info">
                  <span className="hotels-user-name">Trần Hoa</span>
                  <span className="user-status">Doanh nhân</span>
                </div>
              </div>
            </div>
            <div className="hotels-testimonial-card">
              <div className="hotels-testimonial-rating">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="#FFB800"
                >
                  <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                </svg>
              </div>
              <p className="hotels-testimonial-text">
                &quot;Hình ảnh trên web rất trung thực so với thực tế. Tôi rất
                hài lòng với kỳ nghỉ tại Đà Nẵng vừa rồi nhờ Booking
                Hub.&quot;
              </p>
              <div className="testimonial-user">
                <div className="hotels-user-avatar">
                  <span>LD</span>
                </div>
                <div className="user-info">
                  <span className="hotels-user-name">Lê Dũng</span>
                  <span className="user-status">Travel Blogger</span>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-dots">
            <button
              className="dot active"
              aria-label="Go to testimonial 1"
              type="button"
            ></button>
            <button
              className="dot"
              aria-label="Go to testimonial 2"
              type="button"
            ></button>
            <button
              className="dot"
              aria-label="Go to testimonial 3"
              type="button"
            ></button>
          </div>
        </div>
      </section>
      <section className="pricing-section">
        <div className="pricing-container">
          <div className="pricing-header">
            <h2 className="section-title">Bảng Giá &amp; Dịch Vụ Thêm</h2>
            <p className="section-subtitle">
              So sánh và lựa chọn gói dịch vụ phù hợp nhất với bạn
            </p>
          </div>
          <div className="pricing-table-wrapper">
            <table className="pricing-table">
              <thead>
                <tr>
                  <th>
                    <span>Loại phòng / Dịch vụ</span>
                  </th>
                  <th>
                    <span>Cơ bản</span>
                  </th>
                  <th>
                    <span>Tiêu chuẩn</span>
                  </th>
                  <th>
                    <span>Cao cấp (VIP)</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="feature-name">
                    <span>Giá phòng / đêm</span>
                  </td>
                  <td>
                    <span>1,200,000₫</span>
                  </td>
                  <td>
                    <span>2,500,000₫</span>
                  </td>
                  <td>
                    <span>5,000,000₫</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">
                    <span>Bữa sáng buffet</span>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="icon-no"
                    >
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="icon-yes"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="icon-yes"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">
                    <span>Đưa đón sân bay</span>
                  </td>
                  <td>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="icon-no"
                    >
                      <path d="M18 6 6 18M6 6l12 12"></path>
                    </svg>
                  </td>
                  <td>
                    <span>Thêm 200k</span>
                  </td>
                  <td>
                    <span>Miễn phí</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">
                    <span>Hủy phòng linh hoạt</span>
                  </td>
                  <td>
                    <span>Không</span>
                  </td>
                  <td>
                    <span>Trước 24h</span>
                  </td>
                  <td>
                    <span>Bất kỳ lúc nào</span>
                  </td>
                </tr>
                <tr>
                  <td className="feature-name">
                    <span>Late Check-out</span>
                  </td>
                  <td>
                    <span>Đến 12:00</span>
                  </td>
                  <td>
                    <span>Đến 14:00</span>
                  </td>
                  <td>
                    <span>Đến 18:00</span>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td></td>
                  <td>
                    <button className="btn btn-outline btn-sm">
                      Chọn gói
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-primary btn-sm">
                      Chọn gói
                    </button>
                  </td>
                  <td>
                    <button className="btn btn-sm btn-accent">
                      Chọn gói
                    </button>
                  </td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>
      </section>
      <section className="cta-sticky-section">
        <div className="cta-alert-container">
          <div className="cta-summary">
            <div className="summary-item">
              <span className="summary-label">Phòng đã chọn:</span>
              <span className="summary-value">Executive Suite (2 đêm)</span>
            </div>
            <div className="summary-item">
              <span className="summary-label">Tổng cộng:</span>
              <span className="summary-value hotels-total-price">
                9,000,000₫
              </span>
            </div>
          </div>
          <div className="cta-payment-info">
            <div className="hotels-payment-methods">
              <Image
                src="https://api.iconify.design/logos:visa.svg"
                alt="Visa"
                width={32}
                height={32}
              />
              <Image
                src="https://api.iconify.design/logos:mastercard.svg"
                alt="Mastercard"
                width={32}
                height={32}
              />
              <Image
                src="https://api.iconify.design/logos:google-pay.svg"
                alt="Google Pay"
                width={32}
                height={32}
              />
            </div>
            <button className="btn btn-lg btn-accent">
              Xác nhận &amp; Thanh toán
            </button>
          </div>
          <button aria-label="Close" className="cta-close-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6 6 18M6 6l12 12"></path>
            </svg>
          </button>
        </div>
      </section>
      <div className="hotels-container19">
        <div className="hotels-container20">
          <Script
            html={`<style>
        @keyframes pulse {0% {transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(46, 204, 113, 0.7);}
70% {transform: scale(1);
box-shadow: 0 0 0 10px rgba(46, 204, 113, 0);}
100% {transform: scale(0.95);
box-shadow: 0 0 0 0 rgba(46, 204, 113, 0);}}@keyframes marker-pulse {0% {box-shadow: 0 0 0 0 rgba(0, 119, 204, 0.7);}
70% {box-shadow: 0 0 0 15px rgba(0, 119, 204, 0);}
100% {box-shadow: 0 0 0 0 rgba(0, 119, 204, 0);}}
        </style> `}
          ></Script>
        </div>
      </div>
      <div className="hotels-container21">
        <div className="hotels-container22">
          <Script
            html={`<script defer data-name="hotel-page-logic">
(function(){
  // Neighborhood selection logic
  const neighborhoodItems = document.querySelectorAll(".neighborhood-item")
  neighborhoodItems.forEach((item) => {
    item.addEventListener("click", () => {
      neighborhoodItems.forEach((i) => i.classList.remove("active"))
      item.classList.add("active")
    })
  })

  // Simple carousel logic for testimonials
  const track = document.querySelector(".carousel-track")
  const dots = document.querySelectorAll(".dot")
  let currentIndex = 0

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentIndex = index
      updateCarousel()
    })
  })

  function updateCarousel() {
    const cardWidth = document.querySelector(".testimonial-card").offsetWidth + 24 // width + gap
    track.style.transform = \`translateX(-\${currentIndex * cardWidth}px)\`

    dots.forEach((dot, index) => {
      dot.classList.toggle("active", index === currentIndex)
    })
  }

  // Handle CTA close
  const ctaSection = document.querySelector(".cta-sticky-section")
  const closeBtn = document.querySelector(".cta-close-btn")

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      ctaSection.style.display = "none"
    })
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  document.querySelectorAll(".hotel-card, .testimonial-card, .neighborhood-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "all 0.6s ease-out"
    observer.observe(el)
  })
})()
</script>`}
          ></Script>
        </div>
      </div>
    </>
  )
}

export default HotelsSections