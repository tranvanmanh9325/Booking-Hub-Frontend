import React from 'react'
import Head from 'next/head'

import Script from 'dangerous-html/react'
import { useTranslations } from 'next-intl'

import Navigation from '../../components/navigation'
import HotelsContent from '../../sections/hotels-content'

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
        <HotelsContent />
      </div>
    </>
  )
}

export default Hotels