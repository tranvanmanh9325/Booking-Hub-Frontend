import React, { useState, useEffect, useRef } from 'react'
import Head from 'next/head'
import Navigation from '../../components/navigation'
import PrivacySectionsPart1 from '../../components/info/privacy-sections-part1'
import PrivacySectionsPart2 from '../../components/info/privacy-sections-part2'

const Privacy: React.FC = () => {
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
    { id: 'section-1', title: 'Giới Thiệu', number: '1' },
    { id: 'section-2', title: 'Thông Tin Chúng Tôi Thu Thập', number: '2' },
    { id: 'section-3', title: 'Cách Chúng Tôi Sử Dụng Thông Tin', number: '3' },
    { id: 'section-4', title: 'Chia Sẻ Thông Tin', number: '4' },
    { id: 'section-5', title: 'Bảo Mật Thông Tin', number: '5' },
    { id: 'section-6', title: 'Quyền Của Bạn', number: '6' },
    { id: 'section-7', title: 'Cookie và Công Nghệ Theo Dõi', number: '7' },
    { id: 'section-8', title: 'Bảo Vệ Trẻ Em', number: '8' },
    { id: 'section-9', title: 'Thay Đổi Chính Sách', number: '9' },
    { id: 'section-10', title: 'Liên Hệ', number: '10' },
  ]

  return (
    <>
      <div className="privacy-container">
        <Head>
          <title>Chính Sách Bảo Mật - Booking Hub</title>
          <meta
            property="og:title"
            content="Chính Sách Bảo Mật - Booking Hub"
          />
        </Head>
        <Navigation />
        <div className="privacy-layout">
          {/* Sidebar */}
          <aside className="privacy-sidebar">
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
          <main className="privacy-content">
            <div className="privacy-wrapper">
              <h1 className="privacy-title">Chính Sách Bảo Mật</h1>
              <p className="privacy-intro">
                Chúng tôi cam kết bảo vệ quyền riêng tư và thông tin cá nhân của bạn. Chính sách bảo mật này giải thích cách chúng tôi thu thập, sử dụng, lưu trữ, và bảo vệ thông tin của bạn khi sử dụng dịch vụ Booking Hub.
              </p>

              <PrivacySectionsPart1 sectionRefs={sectionRefs} />

              <PrivacySectionsPart2 sectionRefs={sectionRefs} />

              <div className="privacy-footer">
                <p className="privacy-updated">
                  <strong>Cập nhật lần cuối:</strong> {new Date().toLocaleDateString('vi-VN', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </p>
                <p className="privacy-note">
                  Bằng việc sử dụng dịch vụ của Booking Hub, bạn xác nhận rằng bạn đã đọc và hiểu chính sách bảo mật này và đồng ý với việc thu thập, sử dụng, và chia sẻ thông tin của bạn theo chính sách này.
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <style jsx>{`
        .privacy-container {
          min-height: 100vh;
          background-color: var(--color-surface, #f5f5f5);
        }

        .privacy-layout {
          display: flex;
          width: 100%;
          min-height: calc(100vh - 72px);
        }

        /* Sidebar */
        .privacy-sidebar {
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
        .privacy-content {
          flex: 1;
          padding: var(--spacing-4xl, 80px) var(--spacing-xl, 24px) var(--spacing-4xl, 80px);
          padding-top: calc(80px + var(--spacing-4xl, 80px));
        }

        .privacy-wrapper {
          background-color: var(--color-surface, #ffffff);
          border-radius: var(--border-radius-lg, 12px);
          padding: var(--spacing-4xl, 80px);
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          width: 100%;
        }

        .privacy-title {
          font-family: var(--font-family-heading, 'Inter', sans-serif);
          font-size: var(--font-size-3xl, 36px);
          font-weight: var(--font-weight-heading, 700);
          color: var(--color-on-surface, #1a1a1a);
          margin-bottom: var(--spacing-lg, 16px);
          text-align: center;
          border-bottom: 3px solid var(--color-primary, #3b82f6);
          padding-bottom: var(--spacing-lg, 16px);
        }

        .privacy-intro {
          font-size: var(--font-size-lg, 18px);
          line-height: 1.8;
          color: var(--color-on-surface-secondary, #666666);
          margin-bottom: var(--spacing-3xl, 48px);
          text-align: center;
          font-style: italic;
        }

        .privacy-section {
          margin-bottom: var(--spacing-4xl, 64px);
          scroll-margin-top: 100px;
        }

        .privacy-section-title {
          font-family: var(--font-family-heading, 'Inter', sans-serif);
          font-size: var(--font-size-2xl, 24px);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--color-on-surface, #1a1a1a);
          margin-bottom: var(--spacing-xl, 24px);
          padding-bottom: var(--spacing-sm, 8px);
          border-bottom: 2px solid var(--color-border, #e5e5e5);
        }

        .privacy-subtitle {
          font-family: var(--font-family-heading, 'Inter', sans-serif);
          font-size: var(--font-size-lg, 18px);
          font-weight: var(--font-weight-semibold, 600);
          color: var(--color-on-surface, #1a1a1a);
          margin-top: var(--spacing-xl, 24px);
          margin-bottom: var(--spacing-md, 12px);
        }

        .privacy-text {
          font-size: var(--font-size-base, 16px);
          line-height: 1.8;
          color: var(--color-on-surface-secondary, #666666);
          margin-bottom: var(--spacing-md, 12px);
        }

        .privacy-list {
          margin: var(--spacing-lg, 16px) 0;
          padding-left: var(--spacing-2xl, 32px);
          color: var(--color-on-surface-secondary, #666666);
        }

        .privacy-list li {
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

        .privacy-footer {
          margin-top: var(--spacing-4xl, 64px);
          padding-top: var(--spacing-xl, 24px);
          border-top: 2px solid var(--color-border, #e5e5e5);
          text-align: center;
        }

        .privacy-updated {
          font-size: var(--font-size-base, 16px);
          color: var(--color-on-surface-secondary, #666666);
          margin-bottom: var(--spacing-md, 12px);
        }

        .privacy-note {
          font-size: var(--font-size-sm, 14px);
          color: var(--color-on-surface-secondary, #999999);
          font-style: italic;
          margin-top: var(--spacing-lg, 16px);
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .privacy-layout {
            flex-direction: column;
            min-height: auto;
          }

          .privacy-sidebar {
            width: 100%;
            padding: var(--spacing-lg, 16px);
          }

          .sidebar-sticky {
            position: relative;
            top: 0;
            height: auto;
          }

          .privacy-content {
            padding: var(--spacing-2xl, 32px) var(--spacing-lg, 16px);
            padding-top: var(--spacing-2xl, 32px);
          }
        }

        @media (max-width: 768px) {
          .privacy-wrapper {
            padding: var(--spacing-2xl, 32px);
          }

          .privacy-title {
            font-size: var(--font-size-2xl, 28px);
          }

          .privacy-section-title {
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

export default Privacy