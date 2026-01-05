import React from 'react'
import HotelsSections from './hotels-sections'

const HotelsContent: React.FC = () => {
  return (
    <>
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
      <HotelsSections />
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
        `}
      </style>
    </>
  )
}

export default HotelsContent