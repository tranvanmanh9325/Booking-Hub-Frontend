import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Navigation from '../../components/navigation'
import TermsSectionsPart1 from '../../components/info/terms-sections-part1'
import TermsSectionsPart2 from '../../components/info/terms-sections-part2'

const Terms: React.FC = () => {
  const [activeSection, setActiveSection] = useState('section-1')
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200

      for (const [sectionId, element] of Object.entries(sectionRefs.current)) {
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = sectionRefs.current[sectionId]
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const sections = [
    { id: 'section-1', title: 'Chấp Nhận Điều Khoản', number: '1' },
    { id: 'section-2', title: 'Mô Tả Dịch Vụ', number: '2' },
    { id: 'section-3', title: 'Đăng Ký Tài Khoản', number: '3' },
    { id: 'section-4', title: 'Thanh Toán', number: '4' },
    { id: 'section-5', title: 'Hủy và Hoàn Tiền', number: '5' },
    { id: 'section-6', title: 'Quyền Sở Hữu Trí Tuệ', number: '6' },
    { id: 'section-7', title: 'Bảo Mật Thông Tin', number: '7' },
    { id: 'section-8', title: 'Hành Vi Người Dùng', number: '8' },
    { id: 'section-9', title: 'Giới Hạn Trách Nhiệm', number: '9' },
    { id: 'section-10', title: 'Bồi Thường', number: '10' },
    { id: 'section-11', title: 'Giải Quyết Tranh Chấp', number: '11' },
    { id: 'section-12', title: 'Thay Đổi Điều Khoản', number: '12' },
    { id: 'section-13', title: 'Luật Áp Dụng', number: '13' },
    { id: 'section-14', title: 'Liên Hệ', number: '14' },
  ]

  return (
    <>
      <div className="terms-container">
        <Head>
          <title>Điều Khoản Sử Dụng - Booking Hub</title>
          <meta
            property="og:title"
            content="Điều Khoản Sử Dụng - Booking Hub"
          />
        </Head>
        <Navigation />
        <div className="terms-layout">
          {/* Sidebar */}
          <aside className="terms-sidebar">
            <div className="sidebar-sticky">
              <h3 className="sidebar-title">Mục Lục</h3>
              <nav className="sidebar-nav">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollToSection(section.id)
                    }}
                    className={`sidebar-link ${activeSection === section.id ? 'active' : ''}`}
                  >
                    <span className="sidebar-number">{section.number}</span>
                    <span className="sidebar-text">{section.title}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>

          {/* Main Content */}
          <main className="terms-content">
            <div className="terms-wrapper">
              <h1 className="terms-title">Điều Khoản Sử Dụng</h1>
              <p className="terms-intro">
                Cảm ơn bạn đã sử dụng dịch vụ của Booking Hub. Vui lòng đọc kỹ các điều khoản và điều kiện dưới đây trước khi sử dụng dịch vụ của chúng tôi.
              </p>

              <TermsSectionsPart1 sectionRefs={sectionRefs} />

              <TermsSectionsPart2 sectionRefs={sectionRefs} />

              <div className="terms-footer">
                <p className="terms-updated">
                  <strong>Cập nhật lần cuối:</strong> {new Date().toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="terms-note">
                  Bằng việc sử dụng dịch vụ của Booking Hub, bạn xác nhận rằng bạn đã đọc và hiểu các điều khoản này và đồng ý tuân thủ chúng.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <style jsx>{`
        .terms-container {
          min-height: 100vh;
          background-color: var(--color-surface, #f5f5f5);
        }

        .terms-layout {
          display: flex;
          width: 100%;
          min-height: calc(100vh - 72px);
        }

        /* Sidebar */
        .terms-sidebar {
          width: 280px;
          flex-shrink: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
        }

        .sidebar-sticky {
          position: sticky;
          top: 72px;
          height: calc(100vh - 72px);
          background-color: var(--color-surface, #ffffff);
          border-radius: 0 var(--border-radius-lg, 12px) var(--border-radius-lg, 12px) 0;
          padding: var(--spacing-xl, 24px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
          margin-top: 0;
        }

        .sidebar-title {
          font-family: var(--font-family-heading, 'Inter', sans-serif);
          font-size: var(--font-size-lg, 18px);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--color-on-surface, #1a1a1a);
          margin-bottom: var(--spacing-lg, 16px);
          padding-bottom: var(--spacing-md, 12px);
          border-bottom: 2px solid var(--color-primary, #3b82f6);
        }

        .sidebar-nav {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-xs, 4px);
          flex: 1;
          overflow-y: auto;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm, 8px);
          padding: var(--spacing-sm, 8px) var(--spacing-md, 12px);
          border-radius: var(--border-radius-md, 8px);
          text-decoration: none;
          color: var(--color-on-surface-secondary, #666666);
          font-size: var(--font-size-sm, 14px);
          transition: all 0.2s ease;
          cursor: pointer;
        }

        .sidebar-link:hover {
          background-color: var(--color-primary-light, #e0e7ff);
          color: var(--color-primary, #3b82f6);
        }

        .sidebar-link.active {
          background-color: var(--color-primary, #3b82f6);
          color: var(--color-surface, #ffffff);
          font-weight: var(--font-weight-medium, 500);
        }

        .sidebar-number {
          font-weight: var(--font-weight-semibold, 600);
          min-width: 20px;
        }

        .sidebar-text {
          flex: 1;
          line-height: 1.4;
        }

        /* Main Content */
        .terms-content {
          flex: 1;
          padding: var(--spacing-4xl, 80px) var(--spacing-xl, 24px) var(--spacing-4xl, 80px);
          padding-top: calc(80px + var(--spacing-4xl, 80px));
        }

        .terms-wrapper {
          background-color: var(--color-surface, #ffffff);
          border-radius: var(--border-radius-lg, 12px);
          padding: var(--spacing-4xl, 80px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
        }

        .terms-title {
          font-family: var(--font-family-heading, 'Inter', sans-serif);
          font-size: var(--font-size-3xl, 36px);
          font-weight: var(--font-weight-heading, 700);
          color: var(--color-on-surface, #1a1a1a);
          margin-bottom: var(--spacing-lg, 16px);
          text-align: center;
          border-bottom: 3px solid var(--color-primary, #3b82f6);
          padding-bottom: var(--spacing-lg, 16px);
        }

        .terms-intro {
          font-size: var(--font-size-lg, 18px);
          line-height: 1.8;
          color: var(--color-on-surface-secondary, #666666);
          margin-bottom: var(--spacing-3xl, 48px);
          text-align: center;
          font-style: italic;
        }

        .terms-section {
          margin-bottom: var(--spacing-4xl, 64px);
          scroll-margin-top: 100px;
        }

        .terms-section-title {
          font-family: var(--font-family-heading, 'Inter', sans-serif);
          font-size: var(--font-size-2xl, 24px);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--color-on-surface, #1a1a1a);
          margin-bottom: var(--spacing-xl, 24px);
          padding-bottom: var(--spacing-sm, 8px);
          border-bottom: 2px solid var(--color-border, #e5e5e5);
        }

        .terms-subtitle {
          font-family: var(--font-family-heading, 'Inter', sans-serif);
          font-size: var(--font-size-lg, 18px);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--color-on-surface, #1a1a1a);
          margin-top: var(--spacing-xl, 24px);
          margin-bottom: var(--spacing-md, 12px);
        }

        .terms-text {
          font-size: var(--font-size-base, 16px);
          line-height: 1.8;
          color: var(--color-on-surface-secondary, #666666);
          margin-bottom: var(--spacing-md, 12px);
        }

        .terms-list {
          margin: var(--spacing-lg, 16px) 0;
          padding-left: var(--spacing-2xl, 32px);
          color: var(--color-on-surface-secondary, #666666);
        }

        .terms-list li {
          margin-bottom: var(--spacing-md, 12px);
          line-height: 1.8;
          font-size: var(--font-size-base, 16px);
        }

        .contact-info {
          background-color: var(--color-surface-secondary, #f9fafb);
          padding: var(--spacing-xl, 24px);
          border-radius: var(--border-radius-md, 8px);
          margin: var(--spacing-xl, 24px) 0;
          border-left: 4px solid var(--color-primary, #3b82f6);
        }

        .terms-footer {
          margin-top: var(--spacing-4xl, 64px);
          padding-top: var(--spacing-xl, 24px);
          border-top: 2px solid var(--color-border, #e5e5e5);
          text-align: center;
        }

        .terms-updated {
          font-size: var(--font-size-base, 16px);
          color: var(--color-on-surface-secondary, #666666);
          margin-bottom: var(--spacing-md, 12px);
        }

        .terms-note {
          font-size: var(--font-size-sm, 14px);
          color: var(--color-on-surface-secondary, #999999);
          font-style: italic;
          margin-top: var(--spacing-lg, 16px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .terms-layout {
            flex-direction: column;
            min-height: auto;
          }

          .terms-sidebar {
            width: 100%;
            padding: var(--spacing-lg, 16px);
          }

          .sidebar-sticky {
            position: relative;
            top: 0;
            height: auto;
          }

          .terms-content {
            padding: var(--spacing-2xl, 32px) var(--spacing-lg, 16px);
            padding-top: var(--spacing-2xl, 32px);
          }
        }

        @media (max-width: 768px) {
          .terms-wrapper {
            padding: var(--spacing-2xl, 32px);
          }

          .terms-title {
            font-size: var(--font-size-2xl, 28px);
          }

          .terms-section-title {
            font-size: var(--font-size-xl, 20px);
          }

          .sidebar-nav {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: var(--spacing-sm, 8px);
          }
        }

        @media (max-width: 480px) {
          .sidebar-nav {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  )
}

export default Terms