import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import Navigation from '../../components/navigation'
import { renderCategoryIcon, categories, allFaqs, getPopularFaqs, type FAQ } from './help-center-data'
import HelpCenterStyles from './help-center-styles'

const HelpCenter: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('all')
  const [expandedFaq, setExpandedFaq] = useState<string | null>(null)
  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>([])

  useEffect(() => {
    let filtered = allFaqs

    // Filter by category
    if (activeCategory !== 'all') {
      filtered = filtered.filter(faq => faq.category === activeCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        faq =>
          faq.question.toLowerCase().includes(query) ||
          faq.answer.toLowerCase().includes(query)
      )
    }

    setFilteredFaqs(filtered)
  }, [searchQuery, activeCategory])

  const toggleFaq = (faqId: string) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId)
  }

  // Chọn các câu hỏi phổ biến nhất từ nhiều danh mục
  const popularFaqs = getPopularFaqs(allFaqs)

  return (
    <>
      <Head>
        <title>Trung Tâm Trợ Giúp - Booking Hub</title>
        <meta name="description" content="Tìm câu trả lời cho các câu hỏi thường gặp về Booking Hub. Hướng dẫn đặt chỗ, thanh toán, tài khoản và nhiều hơn nữa." />
      </Head>
      <Navigation />
      
      <div className="help-center-wrapper">
        <div className="help-center-hero">
          <div className="help-center-container">
            <h1 className="help-center-title">Chúng tôi có thể giúp gì cho bạn?</h1>
            <p className="help-center-subtitle">Tìm câu trả lời nhanh chóng hoặc liên hệ với đội ngũ hỗ trợ của chúng tôi</p>
            
            <div className="help-center-search">
              <div className="search-input-wrapper">
                <svg className="search-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.35-4.35"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Tìm kiếm câu hỏi, từ khóa..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-input"
                />
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="search-clear"
                    aria-label="Xóa tìm kiếm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="help-center-container">
          <div className="help-center-content">
            {/* Popular Questions */}
            {!searchQuery && activeCategory === 'all' && (
              <section className="help-section">
                <h2 className="help-section-title">Câu Hỏi Thường Gặp</h2>
                <div className="faq-grid">
                  {popularFaqs.map((faq) => (
                    <div
                      key={faq.id}
                      className="faq-card"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <div className="faq-card-header">
                        <h3 className="faq-card-question">{faq.question}</h3>
                        <svg
                          className={`faq-card-icon ${expandedFaq === faq.id ? 'expanded' : ''}`}
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
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </div>
                      {expandedFaq === faq.id && (
                        <div className="faq-card-answer">
                          {faq.answer.split('\n').map((line, idx) => (
                            <p key={idx}>{line}</p>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Categories */}
            <section className="help-section">
              <h2 className="help-section-title">
                {searchQuery ? 'Kết Quả Tìm Kiếm' : 'Chọn Danh Mục'}
              </h2>
              <div className="categories-grid">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-card ${activeCategory === category.id ? 'active' : ''}`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <span className="category-icon">{renderCategoryIcon(category.id)}</span>
                    <span className="category-name">{category.name}</span>
                  </button>
                ))}
              </div>
            </section>

            {/* FAQ Results */}
            <section className="help-section">
              {filteredFaqs.length > 0 ? (
                <>
                  <h2 className="help-section-title">
                    {activeCategory !== 'all' 
                      ? `${categories.find(c => c.id === activeCategory)?.name} - ${filteredFaqs.length} câu hỏi`
                      : `${filteredFaqs.length} câu hỏi được tìm thấy`}
                  </h2>
                  <div className="faq-list">
                    {filteredFaqs.map((faq) => (
                      <div
                        key={faq.id}
                        className={`faq-item ${expandedFaq === faq.id ? 'expanded' : ''}`}
                      >
                        <button
                          className="faq-item-header"
                          onClick={() => toggleFaq(faq.id)}
                        >
                          <h3 className="faq-item-question">{faq.question}</h3>
                          <svg
                            className="faq-item-icon"
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
                            <polyline points="6 9 12 15 18 9"></polyline>
                          </svg>
                        </button>
                        {expandedFaq === faq.id && (
                          <div className="faq-item-answer">
                          {faq.answer.split('\n').map((line: string, idx: number) => (
                            <p key={idx}>{line || '\u00A0'}</p>
                          ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <div className="no-results">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.35-4.35"></path>
                  </svg>
                  <h3>Không tìm thấy kết quả</h3>
                  <p>Thử tìm kiếm với từ khóa khác hoặc liên hệ hỗ trợ của chúng tôi</p>
                </div>
              )}
            </section>

            {/* Contact Support */}
            <section className="help-section contact-section">
              <h2 className="help-section-title">Vẫn cần hỗ trợ?</h2>
              <p className="help-section-description">
                Đội ngũ hỗ trợ của chúng tôi luôn sẵn sàng giúp đỡ bạn 24/7
              </p>
              <div className="contact-options">
                <a 
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=manhtrana1k45tl@gmail.com&su=Yêu cầu hỗ trợ từ Booking Hub&body=Xin chào,%0D%0A%0D%0ATôi cần hỗ trợ về:%0D%0A%0D%0A%0D%0A%0D%0AThông tin liên hệ:%0D%0A- Họ tên:%0D%0A- Số điện thoại:%0D%0A- Email:%0D%0A%0D%0ACảm ơn bạn!" 
                  className="contact-card"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </svg>
                  </div>
                  <h3>Email</h3>
                  <p>manhtrana1k45tl@gmail.com</p>
                  <span className="contact-action">Gửi email</span>
                </a>
                <a href="tel:+84389891942" className="contact-card">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <h3>Điện Thoại</h3>
                  <p>+84 389 891 942</p>
                  <span className="contact-action">Gọi ngay</span>
                </a>
                <div className="contact-card">
                  <div className="contact-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                  </div>
                  <h3>Giờ Làm Việc</h3>
                  <p>24/7 - Luôn sẵn sàng</p>
                  <span className="contact-action">Hỗ trợ liên tục</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>

      <HelpCenterStyles />
    </>
  )
}

export default HelpCenter