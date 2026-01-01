import React, { useEffect } from 'react'
import Head from 'next/head'
import Script from 'dangerous-html/react'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const MovieTickets: React.FC = () => {
  useEffect(() => {
    // Tabs Logic
    const tabTriggers = document.querySelectorAll('.tab-trigger')
    const tabPanels = document.querySelectorAll('.tab-panel')

    const handleTabClick = (trigger: Element) => {
      const target = trigger.getAttribute('data-target')
      
      tabTriggers.forEach(t => t.classList.remove('active'))
      tabPanels.forEach(p => p.classList.remove('active'))
      
      trigger.classList.add('active')
      if (target) {
        const targetPanel = document.getElementById(target)
        if (targetPanel) {
          targetPanel.classList.add('active')
        }
      }
    }

    const tabClickHandlers: Array<{ element: Element; handler: () => void }> = []
    tabTriggers.forEach(trigger => {
      const handler = () => handleTabClick(trigger)
      trigger.addEventListener('click', handler)
      tabClickHandlers.push({ element: trigger, handler })
    })

    // Simple Carousel Logic
    const track = document.querySelector('.carousel-track')
    const nextBtn = document.querySelector('.carousel-btn.next')
    const prevBtn = document.querySelector('.carousel-btn.prev')
    let index = 0

    const updateCarousel = () => {
      if (track) {
        const card = document.querySelector('.testimonial-card')
        if (card) {
          const cardWidth = (card as HTMLElement).offsetWidth + 24 // width + gap
          track.setAttribute('style', `transform: translateX(-${index * cardWidth}px)`)
        }
      }
    }

    const handleNext = () => {
      if (track) {
        const max = track.children.length - (window.innerWidth > 991 ? 3 : window.innerWidth > 767 ? 2 : 1)
        if (index < max) {
          index++
          updateCarousel()
        } else {
          index = 0
          updateCarousel()
        }
      }
    }

    const handlePrev = () => {
      if (index > 0) {
        index--
        updateCarousel()
      }
    }

    if (nextBtn) nextBtn.addEventListener('click', handleNext)
    if (prevBtn) prevBtn.addEventListener('click', handlePrev)
    window.addEventListener('resize', updateCarousel)

    // Movie Time Selection
    const timeBtns = document.querySelectorAll('.time-btn')
    const timeClickHandlers: Array<{ element: Element; handler: () => void }> = []
    timeBtns.forEach(btn => {
      const handler = () => {
        const parent = btn.closest('.time-slots')
        if (parent) {
          parent.querySelectorAll('.time-btn').forEach(b => b.classList.remove('active'))
          btn.classList.add('active')
        }
      }
      btn.addEventListener('click', handler)
      timeClickHandlers.push({ element: btn, handler })
    })

    return () => {
      tabClickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener('click', handler)
      })
      if (nextBtn) nextBtn.removeEventListener('click', handleNext)
      if (prevBtn) prevBtn.removeEventListener('click', handlePrev)
      window.removeEventListener('resize', updateCarousel)
      timeClickHandlers.forEach(({ element, handler }) => {
        element.removeEventListener('click', handler)
      })
    }
  }, [])

  return (
    <>
        <Head>
        <title>Đặt Vé Xem Phim - Booking Hub</title>
          <meta
            property="og:title"
          content="Đặt Vé Xem Phim - Booking Hub"
          />
          <link
            rel="canonical"
          href="https://bookinghub.vn/movie-tickets"
          />
        </Head>
      <Navigation />
      
      <section className="hero-booking">
        <div className="hero-media">
          <video autoPlay muted loop playsInline className="hero-video">
            <source src="https://videos.pexels.com/video-files/7233574/7233574-hd_2048_864_25fps.mp4" type="video/mp4" />
          </video>
          <div className="hero-scrim"></div>
        </div>
        <div className="hero-content-wrapper">
          <div className="hero-card">
            <h1 className="hero-title">Trải Nghiệm Điện Ảnh Đỉnh Cao Tại Booking Hub</h1>
            <p className="hero-subtitle">Đặt vé xem phim nhanh chóng, chọn chỗ ngồi ưng ý và thanh toán bảo mật chỉ trong vài bước chạm.</p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-lg">Đặt Vé Ngay</button>
              <button className="btn btn-outline btn-lg">Xem Lịch Chiếu</button>
            </div>
            <div className="hero-badges">
              <div className="badge-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12l2 2l4-4"/></svg>
                <span>Thanh toán bảo mật</span>
              </div>
              <div className="badge-item">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2"/></svg>
                <span>Vé điện tử tức thì</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="showtimes-tabs">
        <div className="showtimes-container">
          <h2 className="section-title">Lịch Chiếu & Chỗ Ngồi</h2>
          <div className="tabs-header">
            <button className="tab-trigger active" data-target="tab-now">Đang Chiếu</button>
            <button className="tab-trigger" data-target="tab-soon">Sắp Chiếu</button>
            <button className="tab-trigger" data-target="tab-special">Suất Chiếu Đặc Biệt</button>
          </div>
          <div className="tabs-content">
            <div id="tab-now" className="tab-panel active">
              <div className="movie-grid">
                <div className="movie-card">
                  <div className="movie-poster">
                    <img src="https://images.pexels.com/photos/7991142/pexels-photo-7991142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Movie Poster" />
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
                      <div className="screen-indicator">Màn Hình</div>
                      <div className="seat-grid-mini">
                        <div className="seat occupied"></div><div className="seat occupied"></div><div className="seat"></div><div className="seat"></div><div className="seat"></div>
                        <div className="seat"></div><div className="seat selected"></div><div className="seat selected"></div><div className="seat"></div><div className="seat"></div>
                      </div>
                      <p className="seat-status">Còn 42 chỗ trống</p>
                    </div>
                  </div>
                </div>
                <div className="movie-card">
                  <div className="movie-poster">
                    <img src="https://images.pexels.com/photos/3709371/pexels-photo-3709371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Movie Poster" />
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
                      <div className="screen-indicator">Màn Hình</div>
                      <div className="seat-grid-mini">
                        <div className="seat"></div><div className="seat"></div><div className="seat"></div><div className="seat occupied"></div><div className="seat occupied"></div>
                        <div className="seat"></div><div className="seat"></div><div className="seat"></div><div className="seat"></div><div className="seat"></div>
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
            <div id="tab-special" className="tab-panel">
              <div className="empty-state">
                <p>Suất chiếu đặc biệt sẽ được cập nhật sớm nhất.</p>
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
              <div className="step-icon">1</div>
              <div className="step-label">Chọn Phim</div>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-icon">2</div>
              <div className="step-label">Chọn Chỗ</div>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-icon">3</div>
              <div className="step-label">Thanh Toán</div>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-icon">4</div>
              <div className="step-label">Nhận Vé</div>
            </div>
          </div>
          <div className="checkout-auth-card">
            <div className="auth-header">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12l2 2l4-4"/></svg>
              <h3>Bảo Mật Tuyệt Đối</h3>
            </div>
            <p className="section-content">Hệ thống Booking Hub sử dụng xác thực JWT và mã hóa SSL để đảm bảo mọi giao dịch của bạn luôn an toàn.</p>
            <div className="auth-actions">
              <button className="btn btn-primary">Đăng Nhập Ngay</button>
              <button className="btn btn-link">Tiếp tục với tư cách khách</button>
            </div>
          </div>
        </div>
      </section>

      <section className="about-grid">
        <div className="about-container">
          <div className="about-header">
            <h2 className="section-title">Tại Sao Chọn Booking Hub?</h2>
            <p className="section-subtitle">Nền tảng đặt vé hiện đại, tối ưu cho trải nghiệm người dùng.</p>
          </div>
          <div className="grid-wrapper">
            <div className="about-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
              </div>
              <h3>Tốc Độ Vượt Trội</h3>
              <p>Hệ thống xử lý hàng nghìn giao dịch cùng lúc mà không giật lag.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              </div>
              <h3>Thời Gian Thực</h3>
              <p>Cập nhật tình trạng ghế trống và lịch chiếu ngay lập tức.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              </div>
              <h3>Thanh Toán Đa Dạng</h3>
              <p>Hỗ trợ ví điện tử, thẻ nội địa và quốc tế bảo mật cao.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3>Hỗ Trợ 24/7</h3>
              <p>Đội ngũ chăm sóc khách hàng luôn sẵn sàng giải đáp thắc mắc.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3>Tin Cậy Tuyệt Đối</h3>
              <p>Được tin dùng bởi hàng triệu người dùng trên toàn quốc.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19 7-7 3 3-7 7-3-3Z"/><path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z"/><path d="m2 2 8.8 8.8"/><path d="M9.2 12.3 2 15h0l3.3 1.5"/></svg>
              </div>
              <h3>Giao Diện Hiện Đại</h3>
              <p>Thiết kế tinh tế, dễ sử dụng trên cả máy tính và điện thoại.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-masonry">
        <div className="gallery-container">
          <h2 className="section-title">Không Gian Điện Ảnh</h2>
          <div className="masonry-grid">
            <div className="masonry-item">
              <img src="https://images.pexels.com/photos/3709371/pexels-photo-3709371.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Cinema Hall" />
              <div className="item-overlay"><span>Phòng Chiếu IMAX</span></div>
            </div>
            <div className="masonry-item tall">
              <img src="https://images.pexels.com/photos/12041240/pexels-photo-12041240.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Modern Architecture" />
              <div className="item-overlay"><span>Kiến Trúc Độc Đáo</span></div>
            </div>
            <div className="masonry-item">
              <img src="https://images.pexels.com/photos/7991142/pexels-photo-7991142.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Audience" />
              <div className="item-overlay"><span>Trải Nghiệm Nhóm</span></div>
            </div>
            <div className="masonry-item">
              <img src="https://images.pexels.com/photos/7991486/pexels-photo-7991486.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Cinema Seats" />
              <div className="item-overlay"><span>Ghế Ngồi Cao Cấp</span></div>
            </div>
            <div className="masonry-item tall">
              <img src="https://images.pexels.com/photos/7234264/pexels-photo-7234264.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Private Cinema" />
              <div className="item-overlay"><span>Rạp Chiếu Riêng Tư</span></div>
            </div>
            <div className="masonry-item">
              <img src="https://images.pexels.com/photos/7513412/pexels-photo-7513412.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Audience Night" />
              <div className="item-overlay"><span>Suất Chiếu Đêm</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-carousel">
        <div className="testimonials-container">
          <h2 className="section-title">Khách Hàng Nói Gì?</h2>
          <div className="carousel-viewport">
            <div className="carousel-track">
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="quote">&quot;Giao diện đặt vé của Booking Hub cực kỳ mượt mà. Tôi có thể chọn được ghế ngồi ưng ý chỉ trong chưa đầy 1 phút!&quot;</p>
                <div className="author">
                  <div className="author-info">
                    <span className="name">Nguyễn Minh Anh</span>
                    <span className="role">Người dùng thân thiết</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="quote">&quot;Hệ thống thanh toán rất an toàn. Tôi hoàn toàn yên tâm khi sử dụng thẻ tín dụng để đặt vé tại đây.&quot;</p>
                <div className="author">
                  <div className="author-info">
                    <span className="name">Trần Hoàng Nam</span>
                    <span className="role">Yêu thích điện ảnh</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">★★★★★</div>
                <p className="quote">&quot;Tốc độ tải trang và cập nhật lịch chiếu rất nhanh. Đây chắc chắn là ứng dụng đặt vé tốt nhất tôi từng dùng.&quot;</p>
                <div className="author">
                  <div className="author-info">
                    <span className="name">Lê Thị Mai</span>
                    <span className="role">Khách hàng mới</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-controls">
            <button className="carousel-btn prev" aria-label="Previous">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
            </button>
            <button className="carousel-btn next" aria-label="Next">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
            </button>
          </div>
        </div>
      </section>

      <section className="faq-accordion">
        <div className="faq-container">
          <h2 className="section-title">Câu Hỏi Thường Gặp</h2>
          <div className="accordion-wrapper">
            <details className="faq-item">
              <summary className="faq-summary">
                <span>Làm thế nào để tôi nhận được vé sau khi thanh toán?</span>
                <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="faq-content">
                <p>Sau khi thanh toán thành công, vé điện tử (QR Code) sẽ được gửi trực tiếp vào email của bạn và hiển thị trong mục &quot;Vé của tôi&quot; trên ứng dụng Booking Hub.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span>Tôi có thể hủy vé và hoàn tiền không?</span>
                <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="faq-content">
                <p>Chính sách hủy vé tùy thuộc vào quy định của từng rạp chiếu phim. Thông thường, bạn có thể hủy vé trước giờ chiếu ít nhất 2 tiếng để được hoàn tiền vào ví Booking Hub.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span>Booking Hub có hỗ trợ đặt vé cho nhóm lớn không?</span>
                <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="faq-content">
                <p>Có, bạn có thể đặt tối đa 10 vé trong một giao dịch. Đối với nhu cầu đặt vé số lượng lớn hơn cho sự kiện, vui lòng liên hệ hotline hỗ trợ của chúng tôi.</p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span>Thanh toán trên Booking Hub có an toàn không?</span>
                <svg className="chevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </summary>
              <div className="faq-content">
                <p>Tuyệt đối an toàn. Chúng tôi sử dụng các tiêu chuẩn bảo mật cao nhất như PCI DSS và mã hóa JWT để bảo vệ thông tin cá nhân và tài chính của bạn.</p>
              </div>
            </details>
          </div>
      </div>
      </section>

      <Footer />

      <Script
        html={`<style>
/* Hero Section */
.hero-booking {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: var(--color-on-surface);
}

.hero-media {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.hero-video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-scrim {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to right, var(--color-scrim), transparent);
  z-index: 2;
}

.hero-content-wrapper {
  position: relative;
  z-index: 3;
  width: 100%;
  max-width: var(--content-max-width);
  padding: var(--spacing-4xl) var(--spacing-xl);
  display: flex;
  justify-content: flex-start;
}

.hero-card {
  max-width: 600px;
  background: var(--color-backplate);
  padding: var(--spacing-3xl);
  border-radius: var(--border-radius-xl);
  backdrop-filter: blur(12px);
  color: var(--color-surface);
  border: 1px solid color-mix(in srgb, var(--color-surface) 10%, transparent);
  animation: slideIn 0.8s ease-out;
}

.hero-title {
  color: var(--color-surface);
  margin-bottom: var(--spacing-lg);
}

.hero-subtitle {
  color: var(--color-surface);
  opacity: 0.9;
  margin-bottom: var(--spacing-2xl);
}

.hero-actions {
  display: flex;
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-2xl);
}

.hero-badges {
  display: flex;
  gap: var(--spacing-xl);
  border-top: 1px solid color-mix(in srgb, var(--color-surface) 20%, transparent);
  padding-top: var(--spacing-xl);
}

.badge-item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  font-size: var(--font-size-sm);
}

@keyframes slideIn {
  from { opacity: 0; transform: translateX(-40px); }
  to { opacity: 1; transform: translateX(0); }
}

/* Showtimes Tabs */
.showtimes-tabs {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
}

.showtimes-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.tabs-header {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin: var(--spacing-2xl) 0;
  border-bottom: var(--divider-value);
}

.tab-trigger {
  padding: var(--spacing-md) var(--spacing-xl);
  border: none;
  background: none;
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface-secondary);
  cursor: pointer;
  position: relative;
  transition: color 0.3s ease;
}

.tab-trigger.active {
  color: var(--color-primary);
}

.tab-trigger.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--color-primary);
}

.tab-panel {
  display: none;
}

.tab-panel.active {
  display: block;
}

.movie-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-2xl);
}

.movie-card {
  display: flex;
  gap: var(--spacing-xl);
  background: var(--color-surface-elevated);
  padding: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 20px rgba(0,0,0,0.05);
}

.movie-poster {
  flex: 0 0 160px;
  position: relative;
  border-radius: var(--border-radius-md);
  overflow: hidden;
}

.movie-poster img {
  width: 100%;
  height: 240px;
  object-fit: cover;
}

.movie-rating {
  position: absolute;
  top: var(--spacing-sm);
  left: var(--spacing-sm);
  background: var(--color-accent);
  color: var(--color-on-accent);
  padding: 2px 8px;
  border-radius: var(--border-radius-sm);
  font-size: var(--font-size-xs);
  font-weight: bold;
}

.movie-info {
  flex: 1;
}

.time-slots {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-sm);
  margin: var(--spacing-md) 0;
}

.time-btn {
  padding: 6px 12px;
  border: 1px solid var(--color-outline);
  border-radius: var(--border-radius-sm);
  background: var(--color-surface);
  cursor: pointer;
  transition: all 0.2s ease;
}

.time-btn.active, .time-btn:hover {
  background: var(--color-primary);
  color: var(--color-on-primary);
  border-color: var(--color-primary);
}

.seat-preview {
  margin-top: var(--spacing-lg);
  background: var(--color-surface);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-md);
}

.screen-indicator {
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;
  color: var(--color-on-surface-secondary);
  border-bottom: 1px solid var(--color-outline);
  margin-bottom: var(--spacing-sm);
}

.seat-grid-mini {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 4px;
  justify-items: center;
}

.seat {
  width: 12px;
  height: 12px;
  border-radius: 2px;
  background: var(--color-outline);
}

.seat.occupied { background: var(--color-on-surface-secondary); opacity: 0.3; }
.seat.selected { background: var(--color-accent); }

.seat-status {
  font-size: var(--font-size-xs);
  margin-top: var(--spacing-sm);
  color: var(--color-on-surface-secondary);
}

.empty-state {
  text-align: center;
  padding: var(--spacing-4xl) 0;
  color: var(--color-on-surface-secondary);
}

/* Checkout Process */
.checkout-process {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface-elevated);
}

.checkout-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  text-align: center;
}

.stepper-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: var(--spacing-3xl) 0;
}

.step-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-sm);
}

.step-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--color-surface);
  border: 2px solid var(--color-outline);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  color: var(--color-on-surface-secondary);
}

.step-item.active .step-icon {
  background: var(--color-primary);
  border-color: var(--color-primary);
  color: var(--color-on-primary);
}

.step-label {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
}

.step-connector {
  flex: 0 0 60px;
  height: 2px;
  background: var(--color-outline);
  margin-top: -20px;
}

.checkout-auth-card {
  background: var(--color-surface);
  padding: var(--spacing-3xl);
  border-radius: var(--border-radius-xl);
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  max-width: 600px;
  margin: 0 auto;
}

.auth-header {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
}

.auth-actions {
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-2xl);
}

/* About Grid */
.about-grid {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
}

.about-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.about-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
}

.about-card {
  padding: var(--spacing-2xl);
  background: var(--color-surface-elevated);
  border-radius: var(--border-radius-lg);
  transition: transform 0.3s ease;
}

.about-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  color: var(--color-primary);
  margin-bottom: var(--spacing-lg);
}

/* Gallery Masonry */
.gallery-masonry {
  padding: var(--spacing-4xl) 0;
  background: var(--color-on-surface);
  color: var(--color-surface);
}

.gallery-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.masonry-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
  gap: var(--spacing-lg);
}

.masonry-item {
  position: relative;
  overflow: hidden;
  border-radius: var(--border-radius-md);
}

.masonry-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.masonry-item.tall {
  grid-row: span 2;
}

.item-overlay {
  position: absolute;
  top: 0;
  left: 0;
            width: 100%;
  height: 100%;
  background: var(--color-scrim);
  display: flex;
  align-items: flex-end;
  padding: var(--spacing-lg);
  opacity: 0;
  transition: opacity 0.3s ease;
}

.masonry-item:hover .item-overlay { opacity: 1; }
.masonry-item:hover img { transform: scale(1.1); }

/* Testimonials Carousel */
.testimonials-carousel {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface-elevated);
  position: relative;
}

.testimonials-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.carousel-viewport {
  overflow: hidden;
  margin: var(--spacing-3xl) 0;
}

.carousel-track {
  display: flex;
  gap: var(--spacing-xl);
  transition: transform 0.5s ease;
}

.testimonial-card {
  flex: 0 0 calc(33.333% - var(--spacing-xl));
  background: var(--color-surface);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-lg);
  box-shadow: 0 4px 15px rgba(0,0,0,0.05);
}

.stars {
  color: #f1c40f;
  margin-bottom: var(--spacing-md);
}

.quote {
  font-style: italic;
  margin-bottom: var(--spacing-lg);
}

.author-info .name {
            display: block;
  font-weight: bold;
}

.author-info .role {
  font-size: var(--font-size-xs);
  color: var(--color-on-surface-secondary);
}

.carousel-controls {
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
}

.carousel-btn {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  border: 1px solid var(--color-outline);
  background: var(--color-surface);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.carousel-btn:hover {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

/* FAQ Accordion */
.faq-accordion {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
}

.faq-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.accordion-wrapper {
  margin-top: var(--spacing-3xl);
}

.faq-item {
  border-bottom: var(--divider-value);
  padding: var(--spacing-md) 0;
}

.faq-summary {
  list-style: none;
            display: flex;
  justify-content: space-between;
            align-items: center;
  cursor: pointer;
  padding: var(--spacing-md) 0;
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-medium);
}

.faq-summary::-webkit-details-marker { display: none; }

.chevron {
  transition: transform 0.3s ease;
}

.faq-item[open] .chevron {
  transform: rotate(180deg);
}

.faq-content {
  padding: var(--spacing-md) 0;
  color: var(--color-on-surface-secondary);
}

/* Responsive */
@media (max-width: 991px) {
  .movie-grid { grid-template-columns: 1fr; }
  .grid-wrapper { grid-template-columns: repeat(2, 1fr); }
  .testimonial-card { flex: 0 0 calc(50% - var(--spacing-xl)); }
  .hero-card { margin: 0 auto; text-align: center; }
  .hero-actions { justify-content: center; }
  .hero-badges { justify-content: center; }
}

@media (max-width: 767px) {
  .masonry-grid { grid-template-columns: repeat(2, 1fr); }
  .step-connector { display: none; }
  .stepper-wrapper { flex-direction: column; gap: var(--spacing-lg); }
  .testimonial-card { flex: 0 0 100%; }
}

@media (max-width: 479px) {
  .grid-wrapper { grid-template-columns: 1fr; }
  .masonry-grid { grid-template-columns: 1fr; }
  .hero-actions { flex-direction: column; }
  .movie-card { flex-direction: column; }
  .movie-poster { flex: 0 0 auto; }
}
</style>`}
      />
    </>
  )
}

export default MovieTickets
