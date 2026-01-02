import React from 'react'
import Script from 'dangerous-html/react'

interface FooterProps {
  // Add any props if needed in the future
}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="footer-wrapper">
        <div className="footer-container">
          <div className="footer-grid">
            <div className="footer-column footer-brand-section">
              <div className="footer-logo-group">
                <span className="footer-logo-text">Booking Hub</span>
              </div>
              <p className="footer-description section-content">
                Nền tảng du lịch tổng hợp hàng đầu Việt Nam. Chúng tôi cung cấp giải pháp đặt vé phim, khách sạn và nhà hàng nhanh chóng, an toàn và chuyên nghiệp nhất.
              </p>
              <div className="footer-social-links">
                <a href="#" className="footer-social-item" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
                <a href="#" className="footer-social-item" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"/></svg>
                </a>
                <a href="#" className="footer-social-item" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2"/></svg>
                </a>
                <a href="#" className="footer-social-item" aria-label="YouTube">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.5 17a24.1 24.1 0 0 1 0-10a2 2 0 0 1 1.4-1.4a49.6 49.6 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.1 24.1 0 0 1 0 10a2 2 0 0 1-1.4 1.4a49.6 49.6 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15l5-3l-5-3z"/></svg>
                </a>
              </div>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading section-subtitle">Dịch Vụ</h3>
              <ul className="footer-links-list">
                <li className="footer-link-item"><a href="/movie-tickets" className="footer-link">Đặt Vé Xem Phim</a></li>
                <li className="footer-link-item"><a href="/hotels" className="footer-link">Đặt Phòng Khách Sạn</a></li>
                <li className="footer-link-item"><a href="/restaurant-reservations" className="footer-link">Đặt Bàn Nhà Hàng</a></li>
                <li className="footer-link-item"><a href="/attractions" className="footer-link">Vé Khu Vui Chơi</a></li>
                <li className="footer-link-item"><a href="#" className="footer-link">Ưu Đãi Đặc Biệt</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading section-subtitle">Hỗ Trợ</h3>
              <ul className="footer-links-list">
                <li className="footer-link-item"><a href="#" className="footer-link">Trung Tâm Trợ Giúp</a></li>
                <li className="footer-link-item"><a href="#" className="footer-link">Chính Sách Bảo Mật</a></li>
                <li className="footer-link-item"><a href="#" className="footer-link">Điều Khoản Sử Dụng</a></li>
                <li className="footer-link-item"><a href="#" className="footer-link">Hướng Dẫn Đặt Chỗ</a></li>
                <li className="footer-link-item"><a href="#" className="footer-link">Liên Hệ Hợp Tác</a></li>
              </ul>
            </div>

            <div className="footer-column">
              <h3 className="footer-heading section-subtitle">Liên Hệ</h3>
              <div className="footer-contact-group">
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <span className="footer-contact-text section-content">Số 1 Đại Cồ Việt, Hai Bà Trưng, Hà Nội</span>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384"/></svg>
                  </div>
                  <span className="footer-contact-text section-content">+84 123 456 789</span>
                </div>
                <div className="footer-contact-item">
                  <div className="footer-contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m22 7l-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/><rect width="20" height="16" x="2" y="4" rx="2"/></svg>
                  </div>
                  <span className="footer-contact-text section-content">support@bookinghub.vn</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div className="footer-copyright">
              <span className="section-content">© 2025 Booking Hub. Tất cả quyền được bảo lưu.</span>
            </div>
            <div className="footer-bottom-links">
              <a href="#" className="footer-bottom-link section-content">Bảo mật</a>
              <a href="#" className="footer-bottom-link section-content">Điều khoản</a>
              <a href="#" className="footer-bottom-link section-content">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      <Script
        html={`<style>
.footer-wrapper {
  background-color: var(--color-on-surface);
  color: var(--color-surface);
  padding-top: var(--spacing-4xl);
  padding-bottom: var(--spacing-2xl);
  width: 100%;
  position: relative;
  overflow: hidden;
}

.footer-wrapper::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, var(--color-primary), var(--color-accent));
  opacity: 0.8;
}

.footer-container {
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: var(--spacing-3xl);
  padding-bottom: var(--spacing-3xl);
  border-bottom: 1px solid color-mix(in srgb, var(--color-surface) 10%, transparent);
}

.footer-column {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.footer-brand-section {
  padding-right: var(--spacing-2xl);
}

.footer-logo-text {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-surface);
  letter-spacing: -0.5px;
}

.footer-description {
  color: color-mix(in srgb, var(--color-surface) 70%, transparent);
  max-width: 320px;
}

.footer-social-links {
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-sm);
}

.footer-social-item {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-md);
  background-color: color-mix(in srgb, var(--color-surface) 5%, transparent);
  color: var(--color-surface);
  transition: all 0.3s ease;
  border: 1px solid color-mix(in srgb, var(--color-surface) 10%, transparent);
  text-decoration: none;
}

.footer-social-item:hover {
  background-color: var(--color-primary);
  border-color: var(--color-primary);
  transform: translateY(-3px);
  box-shadow: 0 4px 12px color-mix(in srgb, var(--color-primary) 30%, transparent);
}

.footer-heading {
  color: var(--color-surface);
  position: relative;
  padding-bottom: var(--spacing-sm);
}

.footer-heading::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 2px;
  background-color: var(--color-primary);
}

.footer-links-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
}

.footer-link {
  color: color-mix(in srgb, var(--color-surface) 70%, transparent);
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: var(--font-size-sm);
  display: inline-block;
}

.footer-link:hover {
  color: var(--color-primary);
  transform: translateX(4px);
}

.footer-contact-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.footer-contact-item {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-md);
}

.footer-contact-icon {
  color: var(--color-primary);
  flex-shrink: 0;
  margin-top: 2px;
}

.footer-contact-text {
  color: color-mix(in srgb, var(--color-surface) 70%, transparent);
  font-size: var(--font-size-sm);
  line-height: 1.4;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: var(--spacing-2xl);
  flex-wrap: wrap;
  gap: var(--spacing-xl);
}

.footer-copyright {
  color: color-mix(in srgb, var(--color-surface) 50%, transparent);
  font-size: var(--font-size-xs);
}

.footer-bottom-links {
  display: flex;
  gap: var(--spacing-xl);
}

.footer-bottom-link {
  color: color-mix(in srgb, var(--color-surface) 50%, transparent);
  text-decoration: none;
  font-size: var(--font-size-xs);
  transition: color 0.2s ease;
}

.footer-bottom-link:hover {
  color: var(--color-surface);
}

@media (max-width: 991px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-2xl);
  }
  
  .footer-brand-section {
    grid-column: span 2;
    padding-right: 0;
    text-align: center;
    align-items: center;
  }
  
  .footer-description {
    max-width: 500px;
  }
  
  .footer-heading::after {
    left: 0;
  }
}

@media (max-width: 767px) {
  .footer-wrapper {
    padding-top: var(--spacing-3xl);
  }
  
  .footer-grid {
    grid-template-columns: 1fr;
    gap: var(--spacing-2xl);
  }
  
  .footer-brand-section {
    grid-column: span 1;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
    gap: var(--spacing-lg);
  }
}

@media (max-width: 479px) {
  .footer-container {
    padding: 0 var(--spacing-lg);
  }
  
  .footer-bottom-links {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
}

@media (prefers-reduced-motion: reduce) {
  .footer-social-item, .footer-link {
    transition: none;
    transform: none !important;
  }
}
</style>
<script defer data-name="footer-interactions">
// No complex JS needed for this footer as per requirements
// All interactions (hovers, layouts) are handled via CSS for performance
</script>`}
      />
    </>
  )
}

export default Footer