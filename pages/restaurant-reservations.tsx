import React from 'react'
import Head from 'next/head'
import Script from 'dangerous-html/react'
import Navigation from '../components/navigation'
import Footer from '../components/footer'
import { restaurantReservationsStyles, restaurantReservationsScript } from './restaurant-reservations.styles'

const RestaurantReservations: React.FC = () => {
  return (
    <>
      <Head>
        <title>Đặt Bàn Nhà Hàng - Booking Hub</title>
        <meta property="og:title" content="Đặt Bàn Nhà Hàng - Booking Hub" />
      </Head>
      <Navigation></Navigation>
      
      <section className="hero-booking">
        <div className="hero-booking-media">
          <img src="https://images.pexels.com/photos/2291599/pexels-photo-2291599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Không gian nhà hàng sang trọng" className="hero-booking-image" />
          <div className="hero-booking-overlay"></div>
        </div>
        <div className="hero-booking-container">
          <div className="hero-booking-content">
            <h1 className="hero-title">Đặt Bàn Nhà Hàng Trực Tuyến Với Booking Hub</h1>
            <p className="hero-subtitle">Khám phá hàng ngàn nhà hàng đối tác, kiểm tra chỗ trống thời gian thực và xác nhận đặt bàn chỉ trong vài giây.</p>
            <div className="hero-booking-actions">
              <a href="#availability" className="btn btn-primary btn-xl">Đặt Bàn Ngay</a>
              <a href="#partners" className="btn btn-outline btn-xl">Xem Đối Tác</a>
            </div>
          </div>
        </div>
      </section>

      <section id="availability" className="availability-search">
        <div className="availability-container">
          <div className="availability-grid">
            <div className="availability-info">
              <h2 className="section-title">Kiểm Tra Chỗ Trống Tức Thì</h2>
              <p className="section-content">Không còn phải chờ đợi phản hồi. Hệ thống của chúng tôi kết nối trực tiếp với nhà hàng để đảm bảo bàn của bạn luôn sẵn sàng.</p>
              <div className="availability-form-wrapper">
                <form className="availability-form" action="/search" method="GET">
                  <div className="form-group">
                    <label className="form-label">Vị trí & Ẩm thực</label>
                    <input type="text" className="form-input" placeholder="Nhập tên nhà hàng hoặc món ăn..." required />
                  </div>
                  <div className="form-group-row">
                    <div className="form-group">
                      <label className="form-label">Ngày</label>
                      <input type="date" className="form-input" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Giờ</label>
                      <input type="time" className="form-input" required />
                    </div>
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg btn-full">Tìm Kiếm Bàn Trống</button>
                </form>
              </div>
            </div>
            <div className="availability-preview">
              <div className="preview-card">
                <div className="preview-header">
                  <div className="preview-status">Sẵn sàng</div>
                  <span className="preview-time">Cập nhật 1 phút trước</span>
                </div>
                <div className="preview-image-box">
                  <img src="https://images.pexels.com/photos/33466506/pexels-photo-33466506.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Nhà hàng xem trước" className="preview-img" />
                </div>
                <div className="preview-details">
                  <h3 className="preview-title">The Grand Dining Room</h3>
                  <div className="preview-meta">
                    <div className="meta-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                      <span>Còn 4 bàn trống lúc 19:00</span>
                    </div>
                    <div className="meta-item">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
                      <span>Xác nhận tức thì</span>
                    </div>
                  </div>
                  <button className="btn btn-accent btn-lg btn-full">Giữ Chỗ Ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="partners" className="partners-gallery">
        <div className="partners-header">
          <h2 className="section-title">Đối Tác Nhà Hàng Nổi Bật</h2>
          <div className="partners-filters">
            <button className="btn btn-outline btn-sm active">Tất Cả</button>
            <button className="btn btn-outline btn-sm">Âu Mỹ</button>
            <button className="btn btn-outline btn-sm">Châu Á</button>
            <button className="btn btn-outline btn-sm">Hải Sản</button>
            <button className="btn btn-outline btn-sm">Hà Nội</button>
            <button className="btn btn-outline btn-sm">TP. HCM</button>
          </div>
        </div>
        <div className="partners-masonry">
          <div className="partner-card card-tall">
            <img src="https://images.pexels.com/photos/2566037/pexels-photo-2566037.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Nhà hàng Âu" className="partner-img" />
            <div className="partner-overlay">
              <h3 className="partner-name">Le Gourmet Paris</h3>
              <p className="partner-info">Ẩm thực Pháp • Hoàn Kiếm, HN</p>
              <div className="partner-rating">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                <span>4.9 (1.2k đánh giá)</span>
              </div>
              <button className="btn btn-primary btn-sm btn-full">Đặt Bàn</button>
            </div>
          </div>
          <div className="partner-card card-short">
            <img src="https://images.pexels.com/photos/8951306/pexels-photo-8951306.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Sushi Bar" className="partner-img" />
            <div className="partner-overlay">
              <h3 className="partner-name">Sakura Sushi</h3>
              <p className="partner-info">Nhật Bản • Quận 1, HCM</p>
              <button className="btn btn-primary btn-sm btn-full">Đặt Bàn</button>
            </div>
          </div>
          <div className="partner-card card-medium">
            <img src="https://images.pexels.com/photos/34989203/pexels-photo-34989203.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Tokyo Dining" className="partner-img" />
            <div className="partner-overlay">
              <h3 className="partner-name">Tokyo Grill</h3>
              <p className="partner-info">Đồ nướng • Quận 7, HCM</p>
              <button className="btn btn-primary btn-sm btn-full">Đặt Bàn</button>
            </div>
          </div>
          <div className="partner-card card-tall">
            <img src="https://images.pexels.com/photos/27259161/pexels-photo-27259161.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Dessert Buffet" className="partner-img" />
            <div className="partner-overlay">
              <h3 className="partner-name">Hanoi Sweets</h3>
              <p className="partner-info">Tráng miệng • Tây Hồ, HN</p>
              <button className="btn btn-primary btn-sm btn-full">Đặt Bàn</button>
            </div>
          </div>
          <div className="partner-card card-short">
            <img src="https://images.pexels.com/photos/14133592/pexels-photo-14133592.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Cocktail Bar" className="partner-img" />
            <div className="partner-overlay">
              <h3 className="partner-name">Midnight Chill</h3>
              <p className="partner-info">Bar & Lounge • Quận 3, HCM</p>
              <button className="btn btn-primary btn-sm btn-full">Đặt Bàn</button>
            </div>
          </div>
          <div className="partner-card card-medium">
            <img src="https://images.pexels.com/photos/4869466/pexels-photo-4869466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Gourmet Roll" className="partner-img" />
            <div className="partner-overlay">
              <h3 className="partner-name">Artisan Kitchen</h3>
              <p className="partner-info">Fusion • Cầu Giấy, HN</p>
              <button className="btn btn-primary btn-sm btn-full">Đặt Bàn</button>
            </div>
          </div>
        </div>
      </section>

      <section className="booking-steps">
        <div className="steps-container">
          <h2 className="section-title text-center">Quy Trình Đặt Bàn Đơn Giản</h2>
          <div className="steps-row">
            <div className="step-item">
              <div className="step-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                <span className="step-number">1</span>
              </div>
              <h3 className="step-title">Tìm Kiếm</h3>
              <p className="step-desc">Chọn nhà hàng, khu vực hoặc món ăn yêu thích.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                <span className="step-number">2</span>
              </div>
              <h3 className="step-title">Chọn Thời Gian</h3>
              <p className="step-desc">Kiểm tra chỗ trống và chọn khung giờ phù hợp.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 6L9 17l-5-5"/></svg>
                <span className="step-number">3</span>
              </div>
              <h3 className="step-title">Xác Nhận</h3>
              <p className="step-desc">Điền thông tin và nhận xác nhận đặt chỗ ngay.</p>
            </div>
            <div className="step-connector"></div>
            <div className="step-item">
              <div className="step-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
                <span className="step-number">4</span>
              </div>
              <h3 className="step-title">Thưởng Thức</h3>
              <p className="step-desc">Đến nhà hàng và tận hưởng bữa ăn tuyệt vời.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="security-info">
        <div className="security-container">
          <div className="security-header">
            <h2 className="section-title">An Toàn & Tin Cậy</h2>
            <p className="section-content">Chúng tôi cam kết bảo vệ thông tin cá nhân và đảm bảo mọi giao dịch đặt chỗ đều minh bạch.</p>
          </div>
          <div className="security-grid">
            <div className="security-card">
              <div className="security-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
              </div>
              <h3 className="security-title">Xác Thực JWT</h3>
              <p className="security-desc">Hệ thống bảo mật đa lớp đảm bảo tài khoản của bạn luôn được bảo vệ an toàn tuyệt đối.</p>
            </div>
            <div className="security-card">
              <div className="security-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
              </div>
              <h3 className="security-title">Bảo Mật Dữ Liệu</h3>
              <p className="security-desc">Thông tin cá nhân được mã hóa và lưu trữ theo tiêu chuẩn quốc tế nghiêm ngặt nhất.</p>
            </div>
            <div className="security-card">
              <div className="security-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <h3 className="security-title">Xác Nhận Tức Thì</h3>
              <p className="security-desc">Hệ thống đồng bộ hóa thời gian thực giúp loại bỏ rủi ro trùng lịch hoặc hết chỗ bất ngờ.</p>
            </div>
            <div className="security-card">
              <div className="security-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="security-title">Đối Tác Uy Tín</h3>
              <p className="security-desc">Chúng tôi chỉ hợp tác với những nhà hàng có chất lượng dịch vụ và uy tín đã được kiểm chứng.</p>
            </div>
            <div className="security-card">
              <div className="security-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
              </div>
              <h3 className="security-title">Hỗ Trợ 24/7</h3>
              <p className="security-desc">Đội ngũ hỗ trợ khách hàng luôn sẵn sàng giải đáp mọi thắc mắc về lịch đặt chỗ của bạn.</p>
            </div>
            <div className="security-card">
              <div className="security-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>
              </div>
              <h3 className="security-title">Minh Bạch</h3>
              <p className="security-desc">Không phí ẩn, không phụ phí. Bạn thanh toán trực tiếp tại nhà hàng theo đúng hóa đơn.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="loyalty-features">
        <div className="loyalty-container">
          <div className="loyalty-header">
            <h2 className="section-title">Đặc Quyền Thành Viên</h2>
            <p className="section-content">Đăng ký thành viên Booking Hub để nhận những ưu đãi độc quyền tại các nhà hàng đối tác.</p>
          </div>
          <div className="loyalty-grid">
            <div className="loyalty-item">
              <div className="loyalty-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <h3 className="loyalty-title">Tích Điểm Thưởng</h3>
              <p className="loyalty-desc">Nhận điểm thưởng cho mỗi lần đặt bàn thành công và đổi lấy voucher giảm giá.</p>
            </div>
            <div className="loyalty-item">
              <div className="loyalty-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>
              </div>
              <h3 className="loyalty-title">Ưu Tiên Giữ Chỗ</h3>
              <p className="loyalty-desc">Thành viên hạng Vàng được ưu tiên giữ bàn vào các khung giờ cao điểm và ngày lễ.</p>
            </div>
            <div className="loyalty-item">
              <div className="loyalty-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
              </div>
              <h3 className="loyalty-title">Trải Nghiệm Độc Quyền</h3>
              <p className="loyalty-desc">Tham gia các buổi tiệc thử món mới và gặp gỡ các đầu bếp nổi tiếng.</p>
            </div>
            <div className="loyalty-item">
              <div className="loyalty-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
              </div>
              <h3 className="loyalty-title">Quà Tặng Sinh Nhật</h3>
              <p className="loyalty-desc">Nhận bánh kem hoặc rượu vang miễn phí khi đặt bàn vào tháng sinh nhật của bạn.</p>
            </div>
            <div className="loyalty-item">
              <div className="loyalty-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
              </div>
              <h3 className="loyalty-title">Giảm Giá Đối Tác</h3>
              <p className="loyalty-desc">Ưu đãi lên đến 20% tại các đối tác khách sạn và rạp phim trong hệ thống.</p>
            </div>
            <div className="loyalty-item">
              <div className="loyalty-icon-box">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              </div>
              <h3 className="loyalty-title">Mời Bạn Bè</h3>
              <p className="loyalty-desc">Nhận ngay voucher trị giá 100k cho mỗi người bạn đăng ký và đặt bàn lần đầu.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-modal-section">
        <button id="openCtaModal" className="btn btn-primary btn-xl floating-cta">Bắt Đầu Đặt Bàn</button>
        
        <dialog id="ctaModal" className="cta-dialog">
          <div className="cta-modal-inner">
            <div className="cta-modal-media">
              <img src="https://images.pexels.com/photos/17057012/pexels-photo-17057012.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Bàn tiệc" className="cta-modal-img" />
            </div>
            <div className="cta-modal-content">
              <h2 className="section-title">Khám Phá Hương Vị Mới</h2>
              <p className="section-content">Đừng bỏ lỡ những bàn trống cuối cùng tại các nhà hàng hot nhất hôm nay. Đăng ký ngay để nhận thông tin cập nhật.</p>
              <form className="cta-form" action="/subscribe" method="POST">
                <input type="email" className="form-input" placeholder="Nhập email của bạn..." required />
                <div className="cta-form-buttons">
                  <button type="submit" className="btn btn-accent btn-lg">Nhận Thông Tin</button>
                  <button id="closeCtaModal" type="button" className="btn btn-outline btn-lg">Để Sau</button>
                </div>
              </form>
            </div>
          </div>
        </dialog>
      </section>

      <section className="testimonials-carousel">
        <div className="testimonials-container">
          <h2 className="section-title text-center">Khách Hàng Nói Gì</h2>
          <div className="carousel-wrapper">
            <div className="carousel-track" id="testimonialTrack">
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <p className="testimonial-text">"Trải nghiệm đặt bàn cực kỳ nhanh chóng. Tôi chỉ mất chưa đầy 1 phút để tìm thấy bàn trống và nhận được xác nhận ngay lập tức."</p>
                <div className="testimonial-user">
                  <div className="user-avatar">MT</div>
                  <div className="user-info">
                    <span className="user-name">Minh Tú</span>
                    <span className="user-role">Hà Nội</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <p className="testimonial-text">"Hệ thống đối tác rất đa dạng, từ nhà hàng sang trọng đến quán ăn gia đình. Giao diện mượt mà và rất dễ sử dụng."</p>
                <div className="testimonial-user">
                  <div className="user-avatar">LA</div>
                  <div className="user-info">
                    <span className="user-name">Lan Anh</span>
                    <span className="user-role">TP. HCM</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="testimonial-rating">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="star-icon"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg>
                </div>
                <p className="testimonial-text">"Tôi rất thích tính năng tích điểm. Vừa ăn ngon vừa được giảm giá cho những lần sau, thật là tuyệt vời!"</p>
                <div className="testimonial-user">
                  <div className="user-avatar">HD</div>
                  <div className="user-info">
                    <span className="user-name">Hoàng Dũng</span>
                    <span className="user-role">Đà Nẵng</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-nav">
              <button id="prevTestimonial" className="btn btn-outline btn-sm">←</button>
              <button id="nextTestimonial" className="btn btn-outline btn-sm">→</button>
            </div>
          </div>
        </div>
      </section>

      <Script
        html={`${restaurantReservationsStyles}${restaurantReservationsScript}`}
      />

      <Footer></Footer>
    </>
  )
}

export default RestaurantReservations