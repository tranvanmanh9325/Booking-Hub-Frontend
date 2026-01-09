import React from 'react'
import Image from 'next/image'

const MovieTicketsSections = () => {
  return (
    <>
      <section className="about-grid">
        <div className="about-container">
          <div className="about-header">
            <h2 className="section-title">Tại Sao Chọn Booking Hub?</h2>
            <p className="section-subtitle">
              Nền tảng đặt vé hiện đại, tối ưu cho trải nghiệm người dùng.
            </p>
          </div>
          <div className="grid-wrapper">
            <div className="about-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path>
                </svg>
              </div>
              <h3>Tốc Độ Vượt Trội</h3>
              <p>
                Hệ thống xử lý hàng nghìn giao dịch cùng lúc mà không giật
                lag.
              </p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <path d="M12 6v6l4 2"></path>
                </svg>
              </div>
              <h3>Thời Gian Thực</h3>
              <p>Cập nhật tình trạng ghế trống và lịch chiếu ngay lập tức.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                  <line x1="2" x2="22" y1="10" y2="10"></line>
                </svg>
              </div>
              <h3>Thanh Toán Đa Dạng</h3>
              <p>Hỗ trợ ví điện tử, thẻ nội địa và quốc tế bảo mật cao.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
              </div>
              <h3>Hỗ Trợ 24/7</h3>
              <p>
                Đội ngũ chăm sóc khách hàng luôn sẵn sàng giải đáp thắc mắc.
              </p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                </svg>
              </div>
              <h3>Tin Cậy Tuyệt Đối</h3>
              <p>Được tin dùng bởi hàng triệu người dùng trên toàn quốc.</p>
            </div>
            <div className="about-card">
              <div className="card-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m12 19 7-7 3 3-7 7-3-3Z"></path>
                  <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z"></path>
                  <path d="m2 2 8.8 8.8"></path>
                  <path d="M9.2 12.3 2 15h0l3.3 1.5"></path>
                </svg>
              </div>
              <h3>Giao Diện Hiện Đại</h3>
              <p>
                Thiết kế tinh tế, dễ sử dụng trên cả máy tính và điện thoại.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-masonry">
        <div className="gallery-container">
          <div className="gallery-content-wrapper">
            <h2 className="gallery-title">Không Gian Điện Ảnh</h2>
            <div className="gallery-images-row">
              <div className="gallery-image-card">
                <Image
                  src="https://images.pexels.com/photos/3709371/pexels-photo-3709371.jpeg?auto=compress&cs=tinysrgb&w=1500"
                  alt="Cinema Hall"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="item-overlay">
                  <span>Phòng Chiếu IMAX</span>
                </div>
              </div>
              <div className="gallery-image-card tall">
                <Image
                  src="https://images.pexels.com/photos/12041240/pexels-photo-12041240.jpeg?auto=compress&cs=tinysrgb&w=1500"
                  alt="Modern Architecture"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="item-overlay">
                  <span>Kiến Trúc Độc Đáo</span>
                </div>
              </div>
              <div className="gallery-image-card">
                <Image
                  src="https://images.pexels.com/photos/7991142/pexels-photo-7991142.jpeg?auto=compress&cs=tinysrgb&w=1500"
                  alt="Audience"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="item-overlay">
                  <span>Trải Nghiệm Nhóm</span>
                </div>
              </div>
              <div className="gallery-image-card">
                <Image
                  src="https://images.pexels.com/photos/7991486/pexels-photo-7991486.jpeg?auto=compress&cs=tinysrgb&w=1500"
                  alt="Cinema Seats"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="item-overlay">
                  <span>Ghế Ngồi Cao Cấp</span>
                </div>
              </div>
              <div className="gallery-image-card tall">
                <Image
                  src="https://images.pexels.com/photos/7234264/pexels-photo-7234264.jpeg?auto=compress&cs=tinysrgb&w=1500"
                  alt="Private Cinema"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="item-overlay">
                  <span>Rạp Chiếu Riêng Tư</span>
                </div>
              </div>
              <div className="gallery-image-card">
                <Image
                  src="https://images.pexels.com/photos/7513412/pexels-photo-7513412.jpeg?auto=compress&cs=tinysrgb&w=1500"
                  alt="Audience Night"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="item-overlay">
                  <span>Suất Chiếu Đêm</span>
                </div>
              </div>
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
                <div className="stars">
                  <span>★★★★★</span>
                </div>
                <p className="quote">
                  &quot;Giao diện đặt vé của Booking Hub cực kỳ mượt mà. Tôi
                  có thể chọn được ghế ngồi ưng ý chỉ trong chưa đầy 1
                  phút!&quot;
                </p>
                <div className="author">
                  <div className="author-info">
                    <span className="name">Nguyễn Minh Anh</span>
                    <span className="role">Người dùng thân thiết</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span>★★★★★</span>
                </div>
                <p className="quote">
                  &quot;Hệ thống thanh toán rất an toàn. Tôi hoàn toàn yên tâm
                  khi sử dụng thẻ tín dụng để đặt vé tại đây.&quot;
                </p>
                <div className="author">
                  <div className="author-info">
                    <span className="name">Trần Hoàng Nam</span>
                    <span className="role">Yêu thích điện ảnh</span>
                  </div>
                </div>
              </div>
              <div className="testimonial-card">
                <div className="stars">
                  <span>★★★★★</span>
                </div>
                <p className="quote">
                  &quot;Tốc độ tải trang và cập nhật lịch chiếu rất nhanh. Đây
                  chắc chắn là ứng dụng đặt vé tốt nhất tôi từng dùng.&quot;
                </p>
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
            <button aria-label="Previous" className="carousel-btn prev">
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
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </button>
            <button aria-label="Next" className="carousel-btn next">
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
                <path d="m9 18 6-6-6-6"></path>
              </svg>
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
                <span>
                  Làm thế nào để tôi nhận được vé sau khi thanh toán?
                </span>
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
                  className="chevron"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="faq-content">
                <p>
                  Sau khi thanh toán thành công, vé điện tử (QR Code) sẽ được
                  gửi trực tiếp vào email của bạn và hiển thị trong mục
                  &quot;Vé của tôi&quot; trên ứng dụng Booking Hub.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span>Tôi có thể hủy vé và hoàn tiền không?</span>
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
                  className="chevron"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="faq-content">
                <p>
                  Chính sách hủy vé tùy thuộc vào quy định của từng rạp chiếu
                  phim. Thông thường, bạn có thể hủy vé trước giờ chiếu ít
                  nhất 2 tiếng để được hoàn tiền vào ví Booking Hub.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span>Booking Hub có hỗ trợ đặt vé cho nhóm lớn không?</span>
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
                  className="chevron"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="faq-content">
                <p>
                  Có, bạn có thể đặt tối đa 10 vé trong một giao dịch. Đối với
                  nhu cầu đặt vé số lượng lớn hơn cho sự kiện, vui lòng liên
                  hệ hotline hỗ trợ của chúng tôi.
                </p>
              </div>
            </details>
            <details className="faq-item">
              <summary className="faq-summary">
                <span>Thanh toán trên Booking Hub có an toàn không?</span>
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
                  className="chevron"
                >
                  <path d="m6 9 6 6 6-6"></path>
                </svg>
              </summary>
              <div className="faq-content">
                <p>
                  Tuyệt đối an toàn. Chúng tôi sử dụng các tiêu chuẩn bảo mật
                  cao nhất như PCI DSS và mã hóa JWT để bảo vệ thông tin cá
                  nhân và tài chính của bạn.
                </p>
              </div>
            </details>
          </div>
        </div>
      </section>
    </>
  )
}

export default MovieTicketsSections