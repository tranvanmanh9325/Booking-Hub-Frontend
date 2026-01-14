import React, { useState, useRef, useEffect } from 'react'
import { useAuth } from '../hooks/use-auth'
import Avatar from './ui/Avatar'
import { CartIcon, BellIcon } from './ui/Icons'
import Link from 'next/link'

interface NavigationProps {
  // Add any props if needed in the future
}

const Navigation: React.FC<NavigationProps> = () => {
  const { user, logout, isAuthenticated } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMobileMenuOpen])

  // Handle Resize and Esc key for mobile menu
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767 && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    const handleEscKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    document.addEventListener('keydown', handleEscKey)

    return () => {
      window.removeEventListener('resize', handleResize)
      document.removeEventListener('keydown', handleEscKey)
    }
  }, [isMobileMenuOpen])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = async () => {
    setIsDropdownOpen(false);
    await logout();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-to-content">Skip to content</a>
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <div className="navigation-left-group">
            <Link href="/" className="navigation-logo-link" aria-label="Booking Hub Trang chủ">
              <div className="navigation-logo-icon">
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" /><circle cx="12" cy="12" r="10" /></g></svg>
              </div>
              <span className="section-title navigation-brand-name">Booking Hub</span>
            </Link>

            <div className="navigation-links-desktop">
              <div className="navigation-nav-item">
                <Link href="/booking/movie-tickets" className="navigation-link">Phim Ảnh</Link>
              </div>
              <div className="navigation-nav-item">
                <Link href="/booking/hotels" className="navigation-link">Khách Sạn</Link>
              </div>
              <div className="navigation-nav-item">
                <Link href="/booking/restaurant-reservations" className="navigation-link">Nhà Hàng</Link>
              </div>
              <div className="navigation-nav-item">
                <Link href="/booking/attractions" className="navigation-link">Giải Trí</Link>
              </div>
            </div>
          </div>

          <div className="navigation-actions-desktop">
            {isAuthenticated && user ? (
              <>
                <button className="action-icon-btn" aria-label="Giỏ hàng">
                  <CartIcon size={22} />
                </button>
                <button className="action-icon-btn" aria-label="Thông báo">
                  <BellIcon size={22} />
                </button>
                <div className="user-menu-container" ref={dropdownRef}>
                  <div
                    className="user-avatar-trigger"
                    onClick={toggleDropdown}
                    role="button"
                    tabIndex={0}
                    aria-haspopup="true"
                    aria-expanded={isDropdownOpen}
                  >
                    <Avatar
                      src={user.avatarUrl}
                      alt={user.fullName || 'User Avatar'}
                      fallback={user.fullName || 'User'}
                      size="md"
                    />
                  </div>

                  {isDropdownOpen && (
                    <div className="user-dropdown-menu">
                      <div className="dropdown-header">
                        <span className="dropdown-user-name">{user.fullName}</span>
                        <span className="dropdown-user-email">{user.email}</span>
                      </div>
                      <div className="dropdown-divider"></div>
                      {/* Future items: Profile, Settings */}
                      <button onClick={handleLogout} className="dropdown-item logout-item">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                        Đăng Xuất
                      </button>
                    </div>
                  )}
                </div>
              </>
            ) : (
              <>
                <Link href="/auth/login" className="btn btn-outline btn-sm">Đăng Nhập</Link>
                <Link href="/auth/register" className="btn btn-primary btn-sm">Đăng Ký</Link>
              </>
            )}
          </div>

          <button
            id="mobile-menu-toggle"
            className="navigation-mobile-toggle"
            aria-label="Mở menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-overlay"
            onClick={toggleMobileMenu}
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu-overlay"
        className={`navigation-mobile-overlay ${isMobileMenuOpen ? 'is-active' : ''}`}
      >
        <div className="navigation-mobile-header">
          <Link href="/" className="navigation-logo-link" aria-label="Booking Hub Trang chủ" onClick={closeMobileMenu}>
            <div className="navigation-logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z" /><circle cx="12" cy="12" r="10" /></g></svg>
            </div>
            <span className="section-title navigation-brand-name">Booking Hub</span>
          </Link>
          <button
            id="mobile-menu-close"
            className="navigation-mobile-close"
            aria-label="Đóng menu"
            onClick={closeMobileMenu}
          >
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2" /><path d="M3 9h18M9 16l3-3l3 3" /></g></svg>
          </button>
        </div>

        <div className="navigation-mobile-content">
          <ul className="navigation-mobile-list">
            <li className="navigation-mobile-item"><Link href="/booking/movie-tickets" className="navigation-mobile-link" onClick={closeMobileMenu}>Phim Ảnh</Link></li>
            <li className="navigation-mobile-item"><Link href="/booking/hotels" className="navigation-mobile-link" onClick={closeMobileMenu}>Khách Sạn</Link></li>
            <li className="navigation-mobile-item"><Link href="/booking/restaurant-reservations" className="navigation-mobile-link" onClick={closeMobileMenu}>Nhà Hàng</Link></li>
            <li className="navigation-mobile-item"><Link href="/booking/attractions" className="navigation-mobile-link" onClick={closeMobileMenu}>Giải Trí</Link></li>
          </ul>

          <div className="navigation-mobile-actions">
            {isAuthenticated && user ? (
              <div className="mobile-user-profile">
                <div className="mobile-user-info">
                  <Avatar
                    src={user.avatarUrl}
                    alt={user.fullName || 'User Avatar'}
                    fallback={user.fullName || 'User'}
                    size="md"
                  />
                  <div className="mobile-user-details">
                    <span className="mobile-user-name">{user.fullName}</span>
                    <span className="mobile-user-email">{user.email}</span>
                  </div>
                </div>
                <button onClick={handleLogout} className="btn btn-outline btn-lg mobile-logout-btn">
                  Đăng Xuất
                </button>
              </div>
            ) : (
              <>
                <Link href="/auth/login" className="btn btn-outline btn-lg" onClick={closeMobileMenu}>Đăng Nhập</Link>
                <Link href="/auth/register" className="btn btn-primary btn-lg" onClick={closeMobileMenu}>Đăng Ký</Link>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default Navigation