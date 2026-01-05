import React, { useState } from 'react'
import Head from 'next/head'
import Navigation from '../components/navigation'
import PartnershipStyles from './partnership-styles'

const Partnership: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    partnershipType: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const partnershipTypes = [
    { id: 'hotel', name: 'Khách Sạn & Resort', icon: '🏨' },
    { id: 'cinema', name: 'Rạp Chiếu Phim', icon: '🎬' },
    { id: 'restaurant', name: 'Nhà Hàng & Quán Ăn', icon: '🍽️' },
    { id: 'attraction', name: 'Khu Vui Chơi & Giải Trí', icon: '🎢' },
    { id: 'travel', name: 'Công Ty Du Lịch', icon: '✈️' },
    { id: 'other', name: 'Đối Tác Khác', icon: '🤝' }
  ]

  const benefits = [
    {
      title: 'Tiếp Cận Hàng Triệu Khách Hàng',
      description: 'Kết nối với cộng đồng người dùng đông đảo của Booking Hub',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      title: 'Hệ Thống Quản Lý Hiện Đại',
      description: 'Công cụ quản lý đặt chỗ và báo cáo doanh thu chuyên nghiệp',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect>
          <line x1="9" x2="9" y1="3" y2="21"></line>
          <line x1="3" x2="21" y1="9" y2="9"></line>
        </svg>
      )
    },
    {
      title: 'Hỗ Trợ Marketing & Quảng Bá',
      description: 'Được quảng bá trên nền tảng và các chiến dịch marketing của chúng tôi',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
        </svg>
      )
    },
    {
      title: 'Thanh Toán Nhanh Chóng',
      description: 'Hệ thống thanh toán tự động, minh bạch và đúng hạn',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect width="20" height="14" x="2" y="5" rx="2"></rect>
          <line x1="2" x2="22" y1="10" y2="10"></line>
        </svg>
      )
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('http://localhost:8080/api/partnership/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setSubmitStatus('success')
        setErrorMessage('')
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          partnershipType: '',
          message: ''
        })
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitStatus('idle')
        }, 5000)
      } else {
        setSubmitStatus('error')
        setErrorMessage(data.message || 'Đã có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau.')
        setTimeout(() => {
          setSubmitStatus('idle')
          setErrorMessage('')
        }, 5000)
      }
    } catch (error) {
      console.error('Error submitting partnership request:', error)
      setSubmitStatus('error')
      setErrorMessage('Không thể kết nối đến server. Vui lòng kiểm tra kết nối và thử lại.')
      setTimeout(() => {
        setSubmitStatus('idle')
        setErrorMessage('')
      }, 5000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Head>
        <title>Liên Hệ Hợp Tác - Booking Hub</title>
        <meta name="description" content="Trở thành đối tác của Booking Hub. Kết nối với hàng triệu khách hàng và phát triển doanh nghiệp của bạn." />
      </Head>
      <Navigation />
      
      <div className="partnership-wrapper">
        {/* Hero Section */}
        <section className="partnership-hero">
          <div className="partnership-hero-content">
            <h1 className="partnership-hero-title">Trở Thành Đối Tác Của Booking Hub</h1>
            <p className="partnership-hero-subtitle">
              Cùng nhau phát triển và mang đến trải nghiệm tốt nhất cho khách hàng. 
              Hãy tham gia mạng lưới đối tác của chúng tôi ngay hôm nay.
            </p>
          </div>
        </section>

        <div className="partnership-container">
          {/* Benefits Section */}
          <section className="partnership-benefits">
            <h2 className="partnership-section-title">Lợi Ích Khi Hợp Tác</h2>
            <div className="benefits-grid">
              {benefits.map((benefit, index) => (
                <div key={index} className="benefit-card">
                  <div className="benefit-icon">{benefit.icon}</div>
                  <h3 className="benefit-title">{benefit.title}</h3>
                  <p className="benefit-description">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Partnership Types */}
          <section className="partnership-types">
            <h2 className="partnership-section-title">Các Loại Hợp Tác</h2>
            <p className="partnership-section-description">
              Booking Hub hợp tác với nhiều loại hình doanh nghiệp trong ngành du lịch và giải trí
            </p>
            <div className="partnership-types-grid">
              {partnershipTypes.map((type) => (
                <div key={type.id} className="partnership-type-card">
                  <div className="partnership-type-icon">{type.icon}</div>
                  <h3 className="partnership-type-name">{type.name}</h3>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Form Section */}
          <section className="partnership-form-section">
            <div className="partnership-form-wrapper">
              <div className="partnership-form-content">
                <h2 className="partnership-section-title">Liên Hệ Với Chúng Tôi</h2>
                <p className="partnership-section-description">
                  Điền thông tin bên dưới và chúng tôi sẽ liên hệ với bạn trong vòng 24 giờ
                </p>

                <form onSubmit={handleSubmit} className="partnership-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name" className="form-label">
                        Họ và Tên <span className="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="Nhập họ và tên của bạn"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="email" className="form-label">
                        Email <span className="required">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="email@example.com"
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="phone" className="form-label">
                        Số Điện Thoại <span className="required">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="form-input"
                        required
                        placeholder="0123 456 789"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="company" className="form-label">
                        Tên Công Ty / Doanh Nghiệp
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="form-input"
                        placeholder="Tên công ty của bạn"
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="partnershipType" className="form-label">
                      Loại Hợp Tác <span className="required">*</span>
                    </label>
                    <select
                      id="partnershipType"
                      name="partnershipType"
                      value={formData.partnershipType}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Chọn loại hợp tác</option>
                      {partnershipTypes.map((type) => (
                        <option key={type.id} value={type.id}>
                          {type.name}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message" className="form-label">
                      Thông Điệp
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      className="form-textarea"
                      rows={6}
                      placeholder="Chia sẻ thêm về dự án hợp tác của bạn..."
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <div className="form-success">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Cảm ơn bạn! Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.</span>
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="form-error">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="12" y1="8" x2="12" y2="12"></line>
                        <line x1="12" y1="16" x2="12.01" y2="16"></line>
                      </svg>
                      <span>{errorMessage || 'Đã có lỗi xảy ra khi gửi yêu cầu. Vui lòng thử lại sau.'}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    className="form-submit-btn"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu Hợp Tác'}
                  </button>
                </form>
              </div>

              {/* Contact Info Sidebar */}
              <div className="partnership-contact-info">
                <h3 className="contact-info-title">Thông Tin Liên Hệ</h3>
                <div className="contact-info-list">
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="contact-info-label">Điện Thoại</p>
                      <a href="tel:+84389891942" className="contact-info-value">+84 389 891 942</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                      </svg>
                    </div>
                    <div>
                      <p className="contact-info-label">Email</p>
                      <a href="mailto:manhtrana1k45tl@gmail.com" className="contact-info-value">manhtrana1k45tl@gmail.com</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                    </div>
                    <div>
                      <p className="contact-info-label">Địa Chỉ</p>
                      <p className="contact-info-value">Mộ Lao, Hà Đông, Hà Nội</p>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <div className="contact-info-icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <div>
                      <p className="contact-info-label">Giờ Làm Việc</p>
                      <p className="contact-info-value">Thứ 2 - Thứ 6: 9:00 - 18:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      <PartnershipStyles />
    </>
  )
}

export default Partnership