import React from 'react'
import Footer from '../components/footer'
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

export default HotelsContent