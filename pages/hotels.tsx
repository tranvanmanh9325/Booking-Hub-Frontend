import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../components/navigation'
import Footer from '../components/footer'

const Hotels: React.FC = () => {
  return (
    <>
      <div className="hotels-container10">
        <Head>
          <title>Hotels - Sentimental Apprehensive Rail</title>
          <meta
            property="og:title"
            content="Hotels - Sentimental Apprehensive Rail"
          />
          <link
            rel="canonical"
            href="https://sentimental-apprehensive-rail-jrswfn.teleporthq.app/hotels"
          />
        </Head>
        <Navigation></Navigation>
        <div className="hotels-container11">
          <div className="hotels-container12">
            <Script
              html={`<style>
details {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius-lg);
  overflow: hidden;
  transition: all 0.3s ease;
}
summary {
  list-style: none;
  padding: var(--spacing-xl);
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: var(--font-weight-medium);
  font-size: var(--font-size-lg);
}
summary::-webkit-details-marker {
  display: none;
}
details[open] .chevron {
  transform: rotate(180deg);
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="hotels-hero-section">
          <div className="hero-media-container">
            <img
              src="https://images.pexels.com/photos/31768453/pexels-photo-31768453.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Luxury Resort View"
              className="hero-bg-image"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hotels-hero-content-wrapper">
            <div className="hotels-hero-text-block">
              <h1 className="hotels-hero-title hero-title">
                Kỳ Nghỉ Trong Mơ Tại Booking Hub
              </h1>
              <p className="hotels-hero-subtitle hero-subtitle">
                Khám phá hàng ngàn khách sạn sang trọng với giá ưu đãi nhất. Đặt
                phòng ngay hôm nay để nhận ưu đãi lên đến 30%.
              </p>
            </div>
            <div className="hotels-hero-search-container">
              <form
                action="/search"
                method="GET"
                data-form-id="ebb150bf-755f-4b16-b30b-7f4a0a95892b"
                className="hotels-hero-search-form"
              >
                <div className="hotels-search-input-group">
                  <div className="input-with-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                      <circle cx="12" cy="10" r="3"></circle>
                    </svg>
                    <input
                      type="text"
                      placeholder="Bạn muốn đi đâu?"
                      required={true}
                      id="thq_textinput_bm5Y"
                      name="textinput"
                      data-form-field-id="thq_textinput_bm5Y"
                    />
                  </div>
                  <div className="input-with-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                      <path d="M3 10h18"></path>
                      <path d="M8 2v4"></path>
                      <path d="M16 2v4"></path>
                    </svg>
                    <input
                      type="text"
                      placeholder="Ngày nhận - trả"
                      required={true}
                      id="thq_textinput_IbkO"
                      name="textinput"
                      data-form-field-id="thq_textinput_IbkO"
                    />
                  </div>
                  <div className="input-with-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                    <input
                      type="text"
                      placeholder="2 Người lớn, 1 Phòng"
                      id="thq_textinput_x8wH"
                      name="textinput"
                      data-form-field-id="thq_textinput_x8wH"
                    />
                  </div>
                  <button
                    type="submit"
                    id="thq_button_VL_f"
                    name="button"
                    data-form-field-id="thq_button_VL_f"
                    className="btn btn-primary btn-lg"
                  >
                    Tìm kiếm
                  </button>
                </div>
              </form>
              <div className="hotels-hero-quick-filters">
                <span className="hotels-filter-label">Bộ lọc nhanh:</span>
                <button className="hotels-filter-chip">Giá rẻ nhất</button>
                <button className="hotels-filter-chip">5 Sao</button>
                <button className="hotels-filter-chip">Hủy miễn phí</button>
                <div className="availability-indicator">
                  <span className="pulse-dot"></span>
                  <span className="indicator-text">
                    Hơn 500 phòng còn trống hôm nay
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="showcase-section">
          <div className="showcase-header">
            <h2 className="section-title">Khách Sạn Nổi Bật</h2>
            <p className="section-subtitle">
              Lựa chọn hàng đầu dựa trên đánh giá của người dùng
            </p>
          </div>
          <div className="card-rail-container">
            <div className="card-rail">
              <div className="hotel-card">
                <div className="card-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/5539613/pexels-photo-5539613.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Hotel Room"
                  />
                  <span className="hotels-card-badge">Bán chạy nhất</span>
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="card-rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                      <span>
                        {' '}
                        4.9 (1,200 Đánh giá)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                  <h3 className="card-title">
                    InterContinental Danang Sun Peninsula
                  </h3>
                  <p className="card-location">Sơn Trà, Đà Nẵng</p>
                  <div className="card-amenities">
                    <span className="amenity-item">Wifi miễn phí</span>
                    <span className="amenity-item">Hồ bơi</span>
                  </div>
                  <div className="hotels-card-footer">
                    <div className="card-price">
                      <span className="price-amount">8,500,000₫</span>
                      <span className="price-unit">/ đêm</span>
                    </div>
                    <div className="card-actions">
                      <button className="btn btn-outline btn-sm">
                        Chi tiết
                      </button>
                      <button className="btn btn-primary btn-sm">
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hotel-card">
                <div className="card-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/11038192/pexels-photo-11038192.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Hotel Room"
                  />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="card-rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                      <span>
                        {' '}
                        4.7 (850 Đánh giá)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                  <h3 className="card-title">Park Hyatt Saigon</h3>
                  <p className="card-location">Quận 1, TP. Hồ Chí Minh</p>
                  <div className="card-amenities">
                    <span className="amenity-item">Spa &amp; Gym</span>
                    <span className="amenity-item">Bữa sáng</span>
                  </div>
                  <div className="hotels-card-footer">
                    <div className="card-price">
                      <span className="price-amount">6,200,000₫</span>
                      <span className="price-unit">/ đêm</span>
                    </div>
                    <div className="card-actions">
                      <button className="btn btn-outline btn-sm">
                        Chi tiết
                      </button>
                      <button className="btn btn-primary btn-sm">
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hotel-card">
                <div className="card-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/14746040/pexels-photo-14746040.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Hotel Room"
                  />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="card-rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                      <span>
                        {' '}
                        4.8 (920 Đánh giá)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                  <h3 className="card-title">
                    JW Marriott Phu Quoc Emerald Bay
                  </h3>
                  <p className="card-location">Bãi Khem, Phú Quốc</p>
                  <div className="card-amenities">
                    <span className="amenity-item">Bãi biển riêng</span>
                    <span className="amenity-item">Bar</span>
                  </div>
                  <div className="hotels-card-footer">
                    <div className="card-price">
                      <span className="price-amount">9,100,000₫</span>
                      <span className="price-unit">/ đêm</span>
                    </div>
                    <div className="card-actions">
                      <button className="btn btn-outline btn-sm">
                        Chi tiết
                      </button>
                      <button className="btn btn-primary btn-sm">
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="hotel-card">
                <div className="card-image-wrapper">
                  <img
                    src="https://images.pexels.com/photos/14022368/pexels-photo-14022368.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                    alt="Hotel Room"
                  />
                </div>
                <div className="card-body">
                  <div className="card-meta">
                    <span className="card-rating">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        stroke="none"
                      >
                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                      </svg>
                      <span>
                        {' '}
                        4.6 (640 Đánh giá)
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </span>
                  </div>
                  <h3 className="card-title">Sofitel Legend Metropole Hanoi</h3>
                  <p className="card-location">Hoàn Kiếm, Hà Nội</p>
                  <div className="card-amenities">
                    <span className="amenity-item">Lịch sử</span>
                    <span className="amenity-item">Nhà hàng Pháp</span>
                  </div>
                  <div className="hotels-card-footer">
                    <div className="card-price">
                      <span className="price-amount">7,500,000₫</span>
                      <span className="price-unit">/ đêm</span>
                    </div>
                    <div className="card-actions">
                      <button className="btn btn-outline btn-sm">
                        Chi tiết
                      </button>
                      <button className="btn btn-primary btn-sm">
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="location-section">
          <div className="location-split-container">
            <div className="location-info-panel">
              <h2 className="section-title">Khám Phá Khu Vực</h2>
              <p className="section-subtitle">
                Tìm khách sạn tại những vị trí đắc địa nhất
              </p>
              <div className="neighborhood-selector">
                <div className="neighborhood-item active">
                  <div className="neighborhood-header">
                    <span className="neighborhood-name">
                      Quận 1 - Trung tâm thành phố
                    </span>
                    <span className="neighborhood-count">120 khách sạn</span>
                  </div>
                  <p className="neighborhood-description">
                    Gần Chợ Bến Thành, Nhà Hát Thành Phố và các trung tâm thương
                    mại lớn.
                  </p>
                </div>
                <div className="neighborhood-item">
                  <div className="neighborhood-header">
                    <span className="neighborhood-name">
                      Quận 3 - Khu biệt thự cổ
                    </span>
                    <span className="neighborhood-count">45 khách sạn</span>
                  </div>
                  <p className="neighborhood-description">
                    Không gian yên tĩnh, nhiều cây xanh và các quán cafe phong
                    cách.
                  </p>
                </div>
                <div className="neighborhood-item">
                  <div className="neighborhood-header">
                    <span className="neighborhood-name">
                      Quận 2 (Thủ Đức) - Thảo Điền
                    </span>
                    <span className="neighborhood-count">30 khách sạn</span>
                  </div>
                  <p className="neighborhood-description">
                    Khu vực ven sông, nhiều nhà hàng quốc tế và không khí hiện
                    đại.
                  </p>
                </div>
              </div>
              <div className="landmark-list">
                <h4 className="landmark-title">Khoảng cách đến địa danh:</h4>
                <ul className="landmarks">
                  <li>
                    <span>Sân bay Tân Sơn Nhất</span>
                    <span>7.2 km</span>
                  </li>
                  <li>
                    <span>Dinh Độc Lập</span>
                    <span>0.5 km</span>
                  </li>
                  <li>
                    <span>Nhà thờ Đức Bà</span>
                    <span>0.8 km</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="location-map-panel">
              <div className="map-placeholder">
                <img
                  src="https://images.pexels.com/photos/27299966/pexels-photo-27299966.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                  alt="Map View"
                  className="map-img"
                />
                <div className="hotels-thq-map-marker-elm1 map-marker">
                  <div className="marker-pulse"></div>
                  <div className="marker-label">
                    <span>JW Marriott</span>
                  </div>
                </div>
                <div className="hotels-thq-map-marker-elm2 map-marker">
                  <div className="marker-pulse"></div>
                  <div className="marker-label">
                    <span>Park Hyatt</span>
                  </div>
                </div>
                <div className="map-controls">
                  <button className="map-btn">+</button>
                  <button className="map-btn">-</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hotels-features-section">
          <div className="features-container">
            <div className="features-header">
              <h2 className="section-title">Tiện Nghi &amp; Chính Sách</h2>
              <p className="section-subtitle">
                Tùy chỉnh trải nghiệm lưu trú của bạn
              </p>
            </div>
            <div className="accordion-group">
              <details open={true}>
                <summary>
                  <span className="summary-content">
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
                      <path
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 20h.01M2 8.82a15 15 0 0 1 20 0M5 12.859a10 10 0 0 1 14 0m-10.5 3.57a5 5 0 0 1 7 0"
                      ></path>
                    </svg>
                    <span>
                      {' '}
                      Tiện nghi phòng nghỉ
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="chevron"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="details-content">
                  <div className="amenity-grid">
                    <label className="checkbox-container">
                      <span>
                        {' '}
                        Wifi tốc độ cao
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <input type="checkbox" checked={true} />
                      <span className="hotels-thq-checkmark-elm1"></span>
                    </label>
                    <label className="checkbox-container">
                      <span>
                        {' '}
                        Điều hòa nhiệt độ
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <input type="checkbox" checked={true} />
                      <span className="hotels-thq-checkmark-elm2"></span>
                    </label>
                    <label className="checkbox-container">
                      <span>
                        {' '}
                        Minibar
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <input type="checkbox" />
                      <span className="hotels-thq-checkmark-elm3"></span>
                    </label>
                    <label className="checkbox-container">
                      <span>
                        {' '}
                        Tivi màn hình phẳng
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <input type="checkbox" checked={true} />
                      <span className="hotels-thq-checkmark-elm4"></span>
                    </label>
                    <label className="checkbox-container">
                      <span>
                        {' '}
                        Bàn làm việc
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <input type="checkbox" checked={true} />
                      <span className="hotels-thq-checkmark-elm5"></span>
                    </label>
                    <label className="checkbox-container">
                      <span>
                        {' '}
                        Két sắt an toàn
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                      <input type="checkbox" />
                      <span className="hotels-thq-checkmark-elm6"></span>
                    </label>
                  </div>
                </div>
              </details>
              <details>
                <summary>
                  <span className="summary-content">
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
                      <path d="M11 22H5.5a1 1 0 0 1 0-5h4.501M21 22l-1.879-1.878"></path>
                      <path d="M3 19.5v-15A2.5 2.5 0 0 1 5.5 2H18a1 1 0 0 1 1 1v8"></path>
                      <circle cx="17" cy="18" r="3"></circle>
                    </svg>
                    <span>
                      {' '}
                      Chính sách hủy phòng
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="chevron"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="details-content">
                  <p className="policy-text">
                    Chúng tôi cung cấp các lựa chọn linh hoạt để bạn an tâm đặt
                    phòng:
                  </p>
                  <ul className="policy-list">
                    <li>
                      <strong>Hủy miễn phí:</strong>
                      <span>
                        {' '}
                        Áp dụng cho các yêu cầu trước 48h so với ngày nhận
                        phòng.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </li>
                    <li>
                      <strong>Hoàn tiền nhanh:</strong>
                      <span>
                        {' '}
                        Tiền sẽ được hoàn lại vào tài khoản trong vòng 3-5 ngày
                        làm việc.
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </li>
                    <li>
                      <strong>Đổi ngày linh hoạt:</strong>
                      <span>
                        {' '}
                        Cho phép thay đổi ngày lưu trú 01 lần không mất phí (tùy
                        tình trạng phòng).
                        <span
                          dangerouslySetInnerHTML={{
                            __html: ' ',
                          }}
                        />
                      </span>
                    </li>
                  </ul>
                </div>
              </details>
              <details>
                <summary>
                  <span className="summary-content">
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
                      <circle cx="12" cy="12" r="10"></circle>
                      <path d="m9 12l2 2l4-4"></path>
                    </svg>
                    <span>
                      {' '}
                      Tiêu chuẩn an toàn &amp; Sức khỏe
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="chevron"
                  >
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </summary>
                <div className="details-content">
                  <div className="safety-badges">
                    <div className="safety-item">
                      <span className="safety-icon">✨</span>
                      <span>Khử khuẩn hàng ngày</span>
                    </div>
                    <div className="safety-item">
                      <span className="safety-icon">🌡️</span>
                      <span>Kiểm tra thân nhiệt</span>
                    </div>
                    <div className="safety-item">
                      <span className="safety-icon">😷</span>
                      <span>Nhân viên đeo khẩu trang</span>
                    </div>
                  </div>
                </div>
              </details>
            </div>
          </div>
        </section>
        <section className="hotels-gallery-section">
          <div className="gallery-bento-grid">
            <div className="bento-cell main-cell">
              <img
                src="https://images.pexels.com/photos/2506990/pexels-photo-2506990.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Room Main View"
              />
              <div className="cell-overlay">
                <h3 className="cell-title">Phòng Executive Suite</h3>
                <p className="cell-desc">
                  Tầm nhìn hướng biển tuyệt đẹp với không gian rộng 65m².
                </p>
              </div>
            </div>
            <div className="bento-cell side-cell-1">
              <img
                src="https://images.pexels.com/photos/2411759/pexels-photo-2411759.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Breakfast"
              />
            </div>
            <div className="bento-cell side-cell-2">
              <img
                src="https://images.pexels.com/photos/6667462/pexels-photo-6667462.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                alt="Pool"
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
          <div className="hotels-carousel-container">
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
              <span className="dot active"></span>
              <span className="dot"></span>
              <span className="dot"></span>
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
                <img
                  src="https://api.iconify.design/logos:visa.svg"
                  alt="Visa"
                  width="32"
                />
                <img
                  src="https://api.iconify.design/logos:mastercard.svg"
                  alt="Mastercard"
                  width="32"
                />
                <img
                  src="https://api.iconify.design/logos:momo.svg"
                  alt="Momo"
                  width="32"
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
        <Footer></Footer>
        <a href="https://play.teleporthq.io/signup">
          <div
            aria-label="Sign up to TeleportHQ"
            className="hotels-container23"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 19 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="hotels-icon77"
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
            <span className="hotels-text64">Built in TeleportHQ</span>
          </div>
        </a>
      </div>
      <style jsx>
        {`
          .hotels-container10 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .hotels-container11 {
            display: none;
          }
          .hotels-container12 {
            display: contents;
          }
          .hotels-thq-map-marker-elm1 {
            top: 40%;
            left: 50%;
          }
          .hotels-thq-map-marker-elm2 {
            top: 60%;
            left: 30%;
          }
          .hotels-thq-checkmark-elm1 {
            top: 0;
            left: 0;
            width: 20px;
            border: 1px solid var(--color-border);
            height: 20px;
            position: absolute;
            border-radius: 4px;
            background-color: var(--color-surface-elevated);
          }
          .hotels-thq-checkmark-elm2 {
            top: 0;
            left: 0;
            width: 20px;
            border: 1px solid var(--color-border);
            height: 20px;
            position: absolute;
            border-radius: 4px;
            background-color: var(--color-surface-elevated);
          }
          .hotels-thq-checkmark-elm3 {
            top: 0;
            left: 0;
            width: 20px;
            border: 1px solid var(--color-border);
            height: 20px;
            position: absolute;
            border-radius: 4px;
            background-color: var(--color-surface-elevated);
          }
          .hotels-thq-checkmark-elm4 {
            top: 0;
            left: 0;
            width: 20px;
            border: 1px solid var(--color-border);
            height: 20px;
            position: absolute;
            border-radius: 4px;
            background-color: var(--color-surface-elevated);
          }
          .hotels-thq-checkmark-elm5 {
            top: 0;
            left: 0;
            width: 20px;
            border: 1px solid var(--color-border);
            height: 20px;
            position: absolute;
            border-radius: 4px;
            background-color: var(--color-surface-elevated);
          }
          .hotels-thq-checkmark-elm6 {
            top: 0;
            left: 0;
            width: 20px;
            border: 1px solid var(--color-border);
            height: 20px;
            position: absolute;
            border-radius: 4px;
            background-color: var(--color-surface-elevated);
          }
          .hotels-container19 {
            display: none;
          }
          .hotels-container20 {
            display: contents;
          }
          .hotels-container21 {
            display: none;
          }
          .hotels-container22 {
            display: contents;
          }
          .hotels-container23 {
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
          .hotels-icon77 {
            width: 24px;
            margin-right: 4px;
          }
          .hotels-text64 {
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

export default Hotels
