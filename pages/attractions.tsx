import React, { useEffect } from 'react'
import Head from 'next/head'
import Script from 'dangerous-html/react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Attractions: React.FC = () => {
  useEffect(() => {
    // Tab Switching Logic
    const tabTriggers = document.querySelectorAll('.tab-trigger')
    const tabContents = document.querySelectorAll('.tab-content')

    tabTriggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const targetTab = trigger.getAttribute('data-tab')
        
        // Remove active classes
        tabTriggers.forEach(t => t.classList.remove('active'))
        tabContents.forEach(c => c.classList.remove('active'))
        
        // Add active classes
        trigger.classList.add('active')
        const targetElement = document.getElementById(targetTab)
        if (targetElement) {
          targetElement.classList.add('active')
        }
      })
    })

    // Simple Carousel Scroll Enhancement
    const track = document.querySelector('.carousel-container')
    if (track) {
      let isDown = false
      let startX: number
      let scrollLeft: number

      const handleMouseDown = (e: MouseEvent) => {
        isDown = true
        startX = e.pageX - (track as HTMLElement).offsetLeft
        scrollLeft = (track as HTMLElement).scrollLeft
      }

      const handleMouseLeave = () => {
        isDown = false
      }

      const handleMouseUp = () => {
        isDown = false
      }

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDown) return
        e.preventDefault()
        const x = e.pageX - (track as HTMLElement).offsetLeft
        const walk = (x - startX) * 2
        ;(track as HTMLElement).scrollLeft = scrollLeft - walk
      }

      track.addEventListener('mousedown', handleMouseDown)
      track.addEventListener('mouseleave', handleMouseLeave)
      track.addEventListener('mouseup', handleMouseUp)
      track.addEventListener('mousemove', handleMouseMove)

      return () => {
        track.removeEventListener('mousedown', handleMouseDown)
        track.removeEventListener('mouseleave', handleMouseLeave)
        track.removeEventListener('mouseup', handleMouseUp)
        track.removeEventListener('mousemove', handleMouseMove)
      }
    }

    // Accessibility: Close other FAQ items when one opens
    const faqItems = document.querySelectorAll('.faq-item')
    faqItems.forEach(item => {
      item.addEventListener('toggle', (e) => {
        if ((item as HTMLDetailsElement).open) {
          faqItems.forEach(otherItem => {
            if (otherItem !== item) {
              ;(otherItem as HTMLDetailsElement).open = false
            }
          })
        }
      })
    })
  }, [])

  return (
    <>
      <div className="attractions-container">
        <Head>
          <title>Giải Trí - Booking Hub</title>
          <meta
            property="og:title"
            content="Giải Trí - Booking Hub"
          />
          <link
            rel="canonical"
            href="https://bookinghub.vn/attractions"
          />
        </Head>
        <Navigation />

        {/* SECTION 1: HERO */}
        <section className="hero-section">
          <div className="hero-media-container">
            <video className="hero-video" autoPlay loop muted playsInline poster="https://images.pexels.com/videos/5705254/pictures/preview-0.jpeg">
              <source src="https://videos.pexels.com/video-files/5705254/5705254-hd_1080_1920_30fps.mp4" type="video/mp4" />
            </video>
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-text-block">
              <h1 className="hero-title">Khám Phá Trải Nghiệm Tuyệt Vời Cùng Booking Hub</h1>
              <p className="hero-subtitle">Đặt vé tham quan, tour du lịch và các hoạt động giải trí chỉ trong vài cú nhấp chuột. Nền tảng tất cả-trong-một cho mọi hành trình của bạn.</p>
              <div className="hero-cta-group">
                <a href="#explore" className="btn btn-primary btn-xl">Khám phá ngay</a>
                <a href="#how-it-works" className="btn btn-outline btn-xl">Tìm hiểu thêm</a>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: SHOWCASE CAROUSEL */}
        <section id="explore" className="showcase-section">
          <div className="showcase-header">
            <h2 className="section-title">Hoạt Động Phổ Biến</h2>
            <p className="section-content">Những trải nghiệm được yêu thích nhất bởi cộng đồng Booking Hub.</p>
          </div>
          <div className="carousel-container">
            <div className="carousel-track">
              <div className="showcase-card">
                <img src="https://images.pexels.com/photos/13333183/pexels-photo-13333183.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Công viên Hồ Tây" className="card-img" />
                <div className="card-body">
                  <span className="card-tag">Giải trí</span>
                  <h3 className="card-title">Công viên Nước Hồ Tây</h3>
                  <p className="card-text">Trải nghiệm những trò chơi cảm giác mạnh và không gian thư giãn lý tưởng tại Hà Nội.</p>
                  <div className="card-footer">
                    <span className="price">Từ 150.000đ</span>
                    <button className="btn btn-accent btn-sm">Đặt ngay</button>
                  </div>
                </div>
              </div>
              <div className="showcase-card">
                <img src="https://images.pexels.com/photos/7336107/pexels-photo-7336107.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="VinWonders Nha Trang" className="card-img" />
                <div className="card-body">
                  <span className="card-tag">Nghỉ dưỡng</span>
                  <h3 className="card-title">VinWonders Nha Trang</h3>
                  <p className="card-text">Thiên đường giải trí đẳng cấp thế giới với cáp treo vượt biển dài nhất Việt Nam.</p>
                  <div className="card-footer">
                    <span className="price">Từ 880.000đ</span>
                    <button className="btn btn-accent btn-sm">Đặt ngay</button>
                  </div>
                </div>
              </div>
              <div className="showcase-card">
                <img src="https://images.pexels.com/photos/30653688/pexels-photo-30653688.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Rạp phim hiện đại" className="card-img" />
                <div className="card-body">
                  <span className="card-tag">Điện ảnh</span>
                  <h3 className="card-title">Vé Xem Phim IMAX</h3>
                  <p className="card-text">Thưởng thức những bom tấn điện ảnh với công nghệ âm thanh và hình ảnh đỉnh cao.</p>
                  <div className="card-footer">
                    <span className="price">Từ 120.000đ</span>
                    <button className="btn btn-accent btn-sm">Đặt ngay</button>
                  </div>
                </div>
              </div>
              <div className="showcase-card">
                <img src="https://images.pexels.com/photos/11828860/pexels-photo-11828860.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Tour tham quan thành phố" className="card-img" />
                <div className="card-body">
                  <span className="card-tag">Khám phá</span>
                  <h3 className="card-title">City Tour Sài Gòn</h3>
                  <p className="card-text">Khám phá vẻ đẹp lịch sử và hiện đại của TP. Hồ Chí Minh qua xe bus hai tầng.</p>
                  <div className="card-footer">
                    <span className="price">Từ 200.000đ</span>
                    <button className="btn btn-accent btn-sm">Đặt ngay</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 3: ABOUT GRID */}
        <section id="how-it-works" className="about-section">
          <div className="container">
            <div className="about-header">
              <h2 className="section-title">Tại Sao Chọn Booking Hub?</h2>
              <p className="section-content">Chúng tôi mang đến giải pháp đặt chỗ hiện đại, an toàn và nhanh chóng nhất.</p>
            </div>
            <div className="about-grid">
              <div className="about-item">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 3v7h6l-8 11v-7H5z"/></svg>
                </div>
                <h3>Hiệu Năng Cao</h3>
                <p>Hệ thống xử lý hàng ngàn giao dịch đồng thời mà không gặp gián đoạn.</p>
              </div>
              <div className="about-item">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12l2 2l4-4"/></g></svg>
                </div>
                <h3>Bảo Mật Tuyệt Đối</h3>
                <p>Thông tin thanh toán và cá nhân của bạn được mã hóa theo tiêu chuẩn quốc tế.</p>
              </div>
              <div className="about-item">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 5v2m0 4v2m0 4v2M5 5h14a2 2 0 0 1 2 2v3a2 2 0 0 0 0 4v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-3a2 2 0 0 0 0-4V7a2 2 0 0 1 2-2"/></svg>
                </div>
                <h3>Thanh Toán Liền Mạch</h3>
                <p>Một tài khoản duy nhất cho tất cả các loại hình dịch vụ từ phim ảnh đến khách sạn.</p>
              </div>
              <div className="about-item">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"/><rect width="18" height="18" x="3" y="4" rx="2"/><path d="M3 10h18"/></g></svg>
                </div>
                <h3>Xác Nhận Tức Thì</h3>
                <p>Nhận vé điện tử ngay lập tức qua email và ứng dụng sau khi thanh toán.</p>
              </div>
              <div className="about-item">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></g></svg>
                </div>
                <h3>Hỗ Trợ 24/7</h3>
                <p>Đội ngũ chăm sóc khách hàng luôn sẵn sàng giải đáp mọi thắc mắc của bạn.</p>
              </div>
              <div className="about-item">
                <div className="icon-wrapper">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/></g></svg>
                </div>
                <h3>Đa Dạng Phương Thức</h3>
                <p>Hỗ trợ thẻ quốc tế, ví điện tử và chuyển khoản ngân hàng nội địa.</p>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 4: SEARCH TABS */}
        <section className="features-tabs-section">
          <div className="container">
            <div className="tabs-header">
              <h2 className="section-title">Tìm Kiếm Dịch Vụ</h2>
              <p className="section-content">Lọc theo sở thích để tìm thấy trải nghiệm hoàn hảo cho bạn.</p>
            </div>
            <div className="tabs-container">
              <nav className="tabs-nav">
                <button className="tab-trigger active" data-tab="activities">Hoạt Động</button>
                <button className="tab-trigger" data-tab="cinema">Rạp Phim</button>
                <button className="tab-trigger" data-tab="tours">Tour Du Lịch</button>
              </nav>
              <div className="tab-content active" id="activities">
                <div className="search-form">
                  <div className="input-group">
                    <label>Địa điểm</label>
                    <input type="text" placeholder="Bạn muốn đi đâu?" />
                  </div>
                  <div className="input-group">
                    <label>Ngày tháng</label>
                    <input type="date" />
                  </div>
                  <div className="input-group">
                    <label>Loại hình</label>
                    <select>
                      <option>Tất cả hoạt động</option>
                      <option>Công viên nước</option>
                      <option>Bảo tàng</option>
                      <option>Thể thao mạo hiểm</option>
                    </select>
                  </div>
                  <button className="btn btn-primary btn-lg">Tìm kiếm</button>
                </div>
              </div>
              <div className="tab-content" id="cinema">
                <div className="search-form">
                  <div className="input-group">
                    <label>Phim đang chiếu</label>
                    <input type="text" placeholder="Tên phim hoặc thể loại" />
                  </div>
                  <div className="input-group">
                    <label>Rạp gần bạn</label>
                    <input type="text" placeholder="Nhập quận/huyện" />
                  </div>
                  <button className="btn btn-primary btn-lg">Tìm suất chiếu</button>
                </div>
              </div>
              <div className="tab-content" id="tours">
                <div className="search-form">
                  <div className="input-group">
                    <label>Điểm đến</label>
                    <input type="text" placeholder="Vịnh Hạ Long, Sapa..." />
                  </div>
                  <div className="input-group">
                    <label>Thời gian</label>
                    <select>
                      <option>Trong ngày</option>
                      <option>2 ngày 1 đêm</option>
                      <option>3 ngày 2 đêm</option>
                    </select>
                  </div>
                  <button className="btn btn-primary btn-lg">Xem Tour</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 5: PRICING GRID */}
        <section className="pricing-section">
          <div className="container">
            <div className="pricing-header">
              <h2 className="section-title">Gói Ưu Đãi & Thẻ Thành Viên</h2>
              <p className="section-content">Tiết kiệm hơn khi đặt theo combo hoặc đăng ký thành viên thân thiết.</p>
            </div>
            <div className="pricing-grid">
              <div className="pricing-card">
                <h3>Vé Lẻ</h3>
                <div className="price-value">Giá gốc</div>
                <ul className="price-features">
                  <li>Xác nhận tức thì</li>
                  <li>Vé điện tử linh hoạt</li>
                  <li>Hỗ trợ đổi ngày 1 lần</li>
                </ul>
                <button className="btn btn-outline">Mua ngay</button>
              </div>
              <div className="pricing-card featured">
                <div className="badge">Phổ biến</div>
                <h3>Combo Gia Đình</h3>
                <div className="price-value">Giảm 15%</div>
                <ul className="price-features">
                  <li>Dành cho 4 người</li>
                  <li>Bao gồm suất ăn nhẹ</li>
                  <li>Lối đi ưu tiên</li>
                  <li>Hoàn hủy linh hoạt</li>
                </ul>
                <button className="btn btn-primary">Chọn Combo</button>
              </div>
              <div className="pricing-card">
                <h3>Thẻ Hub Pass</h3>
                <div className="price-value">Theo tháng</div>
                <ul className="price-features">
                  <li>Truy cập 5 điểm/tháng</li>
                  <li>Giảm giá 10% vé phim</li>
                  <li>Tích điểm 2x</li>
                </ul>
                <button className="btn btn-outline">Đăng ký</button>
              </div>
              <div className="pricing-card">
                <h3>Combo Nhóm</h3>
                <div className="price-value">Giảm 20%</div>
                <ul className="price-features">
                  <li>Từ 10 người trở lên</li>
                  <li>Hướng dẫn viên riêng</li>
                  <li>Quà tặng lưu niệm</li>
                </ul>
                <button className="btn btn-outline">Liên hệ</button>
              </div>
              <div className="pricing-card">
                <h3>Thành Viên VIP</h3>
                <div className="price-value">Đặc quyền</div>
                <ul className="price-features">
                  <li>Phòng chờ hạng thương gia</li>
                  <li>Miễn phí nâng cấp</li>
                  <li>Concierge 24/7</li>
                </ul>
                <button className="btn btn-outline">Nâng cấp</button>
              </div>
              <div className="pricing-card">
                <h3>Vé Giờ Chót</h3>
                <div className="price-value">Giảm đến 50%</div>
                <ul className="price-features">
                  <li>Giá cực sốc</li>
                  <li>Số lượng có hạn</li>
                  <li>Đặt và đi ngay</li>
                </ul>
                <button className="btn btn-outline">Xem deal</button>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: GALLERY MASONRY */}
        <section className="gallery-section">
          <div className="gallery-header">
            <h2 className="section-title">Khoảnh Khắc Trải Nghiệm</h2>
            <p className="section-content">Cảm hứng cho chuyến đi tiếp theo của bạn.</p>
          </div>
          <div className="masonry-grid">
            <div className="masonry-item"><img src="https://images.pexels.com/photos/15432976/pexels-photo-15432976.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Amusement Park" /></div>
            <div className="masonry-item"><img src="https://images.pexels.com/photos/26589796/pexels-photo-26589796.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="City Park" /></div>
            <div className="masonry-item"><img src="https://images.pexels.com/photos/9595458/pexels-photo-9595458.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Cable Cars" /></div>
            <div className="masonry-item"><img src="https://images.pexels.com/photos/31197739/pexels-photo-31197739.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Carnival" /></div>
            <div className="masonry-item"><img src="https://images.pexels.com/photos/29885747/pexels-photo-29885747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Nature Walk" /></div>
            <div className="masonry-item"><img src="https://images.pexels.com/photos/29885756/pexels-photo-29885756.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Tourist" /></div>
          </div>
        </section>

        {/* SECTION 7: CTA CARD */}
        <section className="cta-section">
          <div className="container">
            <div className="cta-card">
              <div className="cta-content">
                <h2 className="section-title">Sẵn Sàng Cho Cuộc Phiêu Lưu?</h2>
                <p className="section-content">Đừng bỏ lỡ những khoảnh khắc tuyệt vời nhất. Đặt vé ngay hôm nay để nhận ưu đãi lên đến 20% cho lần đặt đầu tiên.</p>
                <div className="cta-actions">
                  <a href="#" className="btn btn-accent btn-lg">Bắt đầu ngay</a>
                  <span className="cta-info">Hơn 10.000 khách hàng đã tin tưởng.</span>
                </div>
              </div>
              <div className="cta-visual">
                <img src="https://images.pexels.com/photos/29885745/pexels-photo-29885745.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Happy Traveler" />
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 8: FAQ ACCORDION */}
        <section className="faq-section">
          <div className="container">
            <div className="faq-header">
              <h2 className="section-title">Câu Hỏi Thường Gặp</h2>
              <p className="section-content">Mọi giải đáp cho thắc mắc của bạn về dịch vụ của Booking Hub.</p>
            </div>
            <div className="faq-accordion">
              <details className="faq-item">
                <summary className="faq-trigger">Làm thế nào để nhận vé sau khi đặt?</summary>
                <div className="faq-body">
                  <p>Sau khi thanh toán thành công, vé điện tử sẽ được gửi ngay lập tức qua địa chỉ email bạn đã đăng ký và hiển thị trong mục &quot;Đơn hàng của tôi&quot; trên ứng dụng Booking Hub.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-trigger">Tôi có thể hủy hoặc đổi ngày vé không?</summary>
                <div className="faq-body">
                  <p>Chính sách hủy và đổi ngày phụ thuộc vào từng loại dịch vụ và nhà cung cấp. Bạn có thể kiểm tra thông tin chi tiết trong phần &quot;Chính sách hoàn hủy&quot; trước khi thanh toán.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-trigger">Booking Hub hỗ trợ những phương thức thanh toán nào?</summary>
                <div className="faq-body">
                  <p>Chúng tôi hỗ trợ đa dạng phương thức bao gồm: Thẻ tín dụng/ghi nợ (Visa, Mastercard, JCB), Ví điện tử (MoMo, ZaloPay), và Chuyển khoản ngân hàng qua cổng Napas.</p>
                </div>
              </details>
              <details className="faq-item">
                <summary className="faq-trigger">Vé điện tử có cần in ra giấy không?</summary>
                <div className="faq-body">
                  <p>Hầu hết các địa điểm chấp nhận vé điện tử trên điện thoại. Bạn chỉ cần xuất trình mã QR hoặc mã đặt chỗ tại quầy soát vé để được vào cổng.</p>
                </div>
              </details>
            </div>
          </div>
        </section>

        <Footer />

        <Script
          html={`<style>
/* BASE STYLES & LAYOUT */
.container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

/* SECTION 1: HERO */
.hero-section {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  background: var(--color-on-surface);
}

.hero-media-container {
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

.hero-overlay {
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
  padding: var(--spacing-4xl) var(--spacing-xl);
}

.hero-text-block {
  max-width: 700px;
  color: var(--color-surface);
}

.hero-title {
  margin-bottom: var(--spacing-xl);
  text-shadow: 0 2px 10px rgba(0,0,0,0.3);
}

.hero-subtitle {
  margin-bottom: var(--spacing-2xl);
  font-size: var(--font-size-xl);
  line-height: 1.5;
}

.hero-cta-group {
  display: flex;
  gap: var(--spacing-md);
  flex-wrap: wrap;
}

/* SECTION 2: SHOWCASE */
.showcase-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
  overflow: hidden;
}

.showcase-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
  padding: 0 var(--spacing-xl);
}

.carousel-container {
  padding: 0 var(--spacing-xl);
  overflow-x: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}

.carousel-container::-webkit-scrollbar {
  display: none;
}

.carousel-track {
  display: flex;
  gap: var(--spacing-xl);
  padding-bottom: var(--spacing-lg);
}

.showcase-card {
  flex: 0 0 350px;
  background: var(--color-surface);
  border-radius: var(--border-radius-card);
  border: 1px solid var(--color-border);
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.showcase-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.card-img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.card-body {
  padding: var(--spacing-xl);
}

.card-tag {
  display: inline-block;
  padding: var(--spacing-xs) var(--spacing-sm);
  background: color-mix(in oklab, var(--color-primary) 10%, transparent);
  color: var(--color-primary);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  border-radius: var(--border-radius-sm);
  margin-bottom: var(--spacing-md);
}

.card-title {
  font-size: var(--font-size-xl);
  margin-bottom: var(--spacing-sm);
  color: var(--color-on-surface);
}

.card-text {
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
  margin-bottom: var(--spacing-lg);
}

.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid var(--color-border);
  padding-top: var(--spacing-md);
}

.price {
  font-weight: var(--font-weight-heading);
  color: var(--color-primary);
}

/* SECTION 3: ABOUT GRID */
.about-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface-elevated);
}

.about-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.about-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
}

.about-item {
  background: var(--color-surface);
  padding: var(--spacing-2xl);
  border-radius: var(--border-radius-card);
  transition: all 0.3s ease;
}

.about-item:hover {
  background: var(--color-primary);
  color: var(--color-on-primary);
}

.about-item:hover h3, .about-item:hover p {
  color: var(--color-on-primary);
}

.icon-wrapper {
  width: 48px;
  height: 48px;
  background: color-mix(in oklab, var(--color-primary) 10%, transparent);
  color: var(--color-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-md);
  margin-bottom: var(--spacing-lg);
}

.about-item:hover .icon-wrapper {
  background: rgba(255,255,255,0.2);
  color: white;
}

.about-item h3 {
  font-size: var(--font-size-lg);
  margin-bottom: var(--spacing-sm);
}

/* SECTION 4: FEATURES TABS */
.features-tabs-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
}

.tabs-header {
  text-align: center;
  margin-bottom: var(--spacing-2xl);
}

.tabs-container {
  background: var(--color-surface);
  border-radius: var(--border-radius-xl);
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
  border: 1px solid var(--color-border);
  overflow: hidden;
}

.tabs-nav {
  display: flex;
  background: var(--color-surface-elevated);
  border-bottom: 1px solid var(--color-border);
}

.tab-trigger {
  flex: 1;
  padding: var(--spacing-lg);
  border: none;
  background: transparent;
  font-family: var(--font-family-heading);
  font-weight: var(--font-weight-medium);
  cursor: pointer;
  transition: all 0.3s ease;
  color: var(--color-on-surface-secondary);
}

.tab-trigger.active {
  background: var(--color-surface);
  color: var(--color-primary);
  box-shadow: inset 0 -3px 0 var(--color-primary);
}

.tab-content {
  display: none;
  padding: var(--spacing-3xl);
}

.tab-content.active {
  display: block;
  animation: fadeIn 0.4s ease-out;
}

.search-form {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) auto;
  gap: var(--spacing-xl);
  align-items: flex-end;
}

.input-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
}

.input-group label {
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface-secondary);
}

.input-group input, .input-group select {
  padding: var(--spacing-md);
  border: 1px solid var(--color-outline);
  border-radius: var(--border-radius-control);
  font-family: var(--font-family-body);
}

/* SECTION 5: PRICING */
.pricing-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface-elevated);
}

.pricing-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.pricing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: var(--spacing-2xl);
}

.pricing-card {
  background: var(--color-surface);
  padding: var(--spacing-3xl);
  border-radius: var(--border-radius-card);
  border: 1px solid var(--color-border);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
}

.pricing-card.featured {
  border: 2px solid var(--color-primary);
  transform: scale(1.05);
  z-index: 2;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.badge {
  position: absolute;
  top: -12px;
  background: var(--color-primary);
  color: var(--color-on-primary);
  padding: var(--spacing-xs) var(--spacing-md);
  border-radius: var(--border-radius-full);
  font-size: var(--font-size-xs);
  font-weight: var(--font-weight-medium);
}

.price-value {
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-primary);
  margin: var(--spacing-lg) 0;
}

.price-features {
  list-style: none;
  padding: 0;
  margin: 0 0 var(--spacing-2xl);
  width: 100%;
}

.price-features li {
  padding: var(--spacing-sm) 0;
  border-bottom: 1px solid var(--color-border);
  color: var(--color-on-surface-secondary);
  font-size: var(--font-size-sm);
}

/* SECTION 6: GALLERY */
.gallery-section {
  padding: var(--spacing-4xl) var(--spacing-xl);
  background: var(--color-surface);
}

.gallery-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.masonry-grid {
  columns: 3;
  column-gap: var(--spacing-lg);
}

.masonry-item {
  break-inside: avoid;
  margin-bottom: var(--spacing-lg);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  position: relative;
}

.masonry-item img {
  width: 100%;
  display: block;
  transition: transform 0.5s ease;
}

.masonry-item:hover img {
  transform: scale(1.1);
}

/* SECTION 7: CTA */
.cta-section {
  padding: var(--spacing-4xl) 0;
}

.cta-card {
  background: var(--color-primary);
  border-radius: var(--border-radius-xl);
  display: flex;
  overflow: hidden;
  color: var(--color-on-primary);
}

.cta-content {
  flex: 6;
  padding: var(--spacing-4xl);
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.cta-content .section-title {
  color: var(--color-on-primary);
  margin-bottom: var(--spacing-lg);
}

.cta-content .section-content {
  color: var(--color-on-primary);
  opacity: 0.9;
  margin-bottom: var(--spacing-2xl);
}

.cta-actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.cta-info {
  font-size: var(--font-size-xs);
  opacity: 0.8;
}

.cta-visual {
  flex: 4;
  position: relative;
}

.cta-visual img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* SECTION 8: FAQ */
.faq-section {
  padding: var(--spacing-4xl) 0;
  background: var(--color-surface);
}

.faq-header {
  text-align: center;
  margin-bottom: var(--spacing-3xl);
}

.faq-accordion {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.faq-item {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-md);
  overflow: hidden;
}

.faq-trigger {
  padding: var(--spacing-lg);
  cursor: pointer;
  font-weight: var(--font-weight-medium);
  background: var(--color-surface);
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.faq-trigger::-webkit-details-marker {
  display: none;
}

.faq-trigger::after {
  content: '+';
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

details[open] .faq-trigger::after {
  transform: rotate(45deg);
}

.faq-body {
  padding: var(--spacing-lg);
  background: var(--color-surface-elevated);
  border-top: 1px solid var(--color-border);
  font-size: var(--font-size-sm);
  color: var(--color-on-surface-secondary);
}

/* ANIMATIONS */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

/* RESPONSIVE */
@media (max-width: 991px) {
  .about-grid, .pricing-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .masonry-grid {
    columns: 2;
  }
  .search-form {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 767px) {
  .hero-text-block {
    text-align: center;
    margin: 0 auto;
  }
  .hero-cta-group {
    justify-content: center;
  }
  .cta-card {
    flex-direction: column-reverse;
  }
  .cta-visual {
    height: 250px;
  }
  .search-form {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 479px) {
  .about-grid, .pricing-grid {
    grid-template-columns: 1fr;
  }
  .masonry-grid {
    columns: 1;
  }
  .pricing-card.featured {
    transform: none;
    margin: var(--spacing-md) 0;
  }
  .hero-title {
    font-size: var(--font-size-3xl);
  }
}
</style>`}
        />
      </div>
      <style jsx>
        {`
          .attractions-container {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
        `}
      </style>
    </>
  )
}

export default Attractions