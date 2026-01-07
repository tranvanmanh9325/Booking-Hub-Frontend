import React from 'react'
import Script from 'dangerous-html/react'

interface NavigationProps {
  // Add any props if needed in the future
}

const Navigation: React.FC<NavigationProps> = () => {
  return (
    <>
      <nav className="navigation-wrapper">
        <div className="navigation-container">
          <a href="/" className="navigation-logo-link" aria-label="Booking Hub Trang chủ">
            <div className="navigation-logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/></g></svg>
            </div>
            <span className="section-title navigation-brand-name">Booking Hub</span>
          </a>

          <div className="navigation-links-desktop">
            <div className="navigation-nav-item">
              <a href="/movie-tickets" className="navigation-link">Phim Ảnh</a>
            </div>
            <div className="navigation-nav-item">
              <a href="/hotels" className="navigation-link">Khách Sạn</a>
            </div>
            <div className="navigation-nav-item">
              <a href="/restaurant-reservations" className="navigation-link">Nhà Hàng</a>
            </div>
            <div className="navigation-nav-item">
              <a href="/attractions" className="navigation-link">Giải Trí</a>
            </div>
          </div>

          <div className="navigation-actions-desktop">
            <a href="/login" className="btn btn-outline btn-sm">Đăng Nhập</a>
            <a href="/register" className="btn btn-primary btn-sm">Đăng Ký</a>
          </div>

          <button id="mobile-menu-toggle" className="navigation-mobile-toggle" aria-label="Mở menu" aria-expanded="false">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>
      </nav>

      <div id="mobile-menu-overlay" className="navigation-mobile-overlay">
        <div className="navigation-mobile-header">
          <a href="/" className="navigation-logo-link" aria-label="Booking Hub Trang chủ">
            <div className="navigation-logo-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="m16.24 7.76l-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"/><circle cx="12" cy="12" r="10"/></g></svg>
            </div>
            <span className="section-title navigation-brand-name">Booking Hub</span>
          </a>
          <button id="mobile-menu-close" className="navigation-mobile-close" aria-label="Đóng menu">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M3 9h18M9 16l3-3l3 3"/></g></svg>
          </button>
        </div>

        <div className="navigation-mobile-content">
          <ul className="navigation-mobile-list">
            <li className="navigation-mobile-item"><a href="/movie-tickets" className="navigation-mobile-link">Phim Ảnh</a></li>
            <li className="navigation-mobile-item"><a href="/hotels" className="navigation-mobile-link">Khách Sạn</a></li>
            <li className="navigation-mobile-item"><a href="/restaurant-reservations" className="navigation-mobile-link">Nhà Hàng</a></li>
            <li className="navigation-mobile-item"><a href="/attractions" className="navigation-mobile-link">Giải Trí</a></li>
          </ul>

          <div className="navigation-mobile-actions">
            <a href="/login" className="btn btn-outline btn-lg">Đăng Nhập</a>
            <a href="/register" className="btn btn-primary btn-lg">Đăng Ký</a>
          </div>
        </div>
      </div>

      <Script
        html={`<style>
.navigation-wrapper {
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  background-color: var(--color-surface);
  border-bottom: var(--divider-value);
  padding: var(--spacing-md) 0;
  transition: all 0.3s ease-in-out;
}

.navigation-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  max-width: var(--content-max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-xl);
  gap: var(--spacing-2xl);
}

.navigation-logo-link {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  text-decoration: none;
  color: var(--color-primary);
  flex-shrink: 0;
}

.navigation-logo-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-primary);
  width: 24px;
  height: 24px;
  background: transparent;
  box-shadow: none;
  border-radius: 0;
}

.navigation-logo-icon svg {
  width: 24px;
  height: 24px;
  display: block;
  flex-shrink: 0;
}

.navigation-brand-name {
  font-size: var(--font-size-xl);
  color: var(--color-on-surface);
  white-space: nowrap;
}

.navigation-links-desktop {
  display: flex;
  align-items: center;
  gap: var(--spacing-xl);
  flex-grow: 1;
}

.navigation-nav-item {
  position: relative;
}

.navigation-link {
  font-family: var(--font-family-body);
  font-size: var(--font-size-sm);
  font-weight: var(--font-weight-medium);
  color: var(--color-on-surface-secondary);
  text-decoration: none;
  white-space: nowrap;
  transition: color 0.2s ease;
  padding: var(--spacing-xs) 0;
}

.navigation-link:hover {
  color: var(--color-primary);
}

.navigation-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--color-primary);
  transition: width 0.3s ease;
}

.navigation-link:hover::after {
  width: 100%;
}

.navigation-actions-desktop {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  flex-shrink: 0;
}

.navigation-mobile-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--color-on-surface);
  cursor: pointer;
  padding: var(--spacing-sm);
  border-radius: var(--border-radius-sm);
  transition: background-color 0.2s ease;
}

.navigation-mobile-toggle:hover {
  background-color: var(--color-neutral);
}

/* Mobile Overlay Styles */
.navigation-mobile-overlay {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 1100;
  background-color: var(--color-surface);
  flex-direction: column;
  min-height: 100vh;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.navigation-mobile-overlay.is-active {
  display: flex;
  transform: translateX(0);
}

.navigation-mobile-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg) var(--spacing-xl);
  border-bottom: var(--divider-value);
  position: sticky;
  top: 0;
  background-color: var(--color-surface);
  z-index: 1110;
}

.navigation-mobile-close {
  background: none;
  border: none;
  color: var(--color-on-surface);
  cursor: pointer;
  padding: var(--spacing-sm);
}

.navigation-mobile-content {
  display: flex;
  flex-direction: column;
  padding: var(--spacing-2xl) var(--spacing-xl);
  gap: var(--spacing-3xl);
  flex-grow: 1;
}

.navigation-mobile-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xl);
}

.navigation-mobile-link {
  font-family: var(--font-family-heading);
  font-size: var(--font-size-2xl);
  font-weight: var(--font-weight-heading);
  color: var(--color-on-surface);
  text-decoration: none;
  display: block;
  transition: transform 0.3s ease, color 0.3s ease;
}

.navigation-mobile-link:hover {
  color: var(--color-primary);
  transform: translateX(var(--spacing-sm));
}

.navigation-mobile-actions {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: auto;
  padding-bottom: var(--spacing-3xl);
}

@media (max-width: 991px) {
  .navigation-container {
    gap: var(--spacing-lg);
  }
  
  .navigation-links-desktop {
    gap: var(--spacing-lg);
  }
}

@media (max-width: 767px) {
  .navigation-links-desktop,
  .navigation-actions-desktop {
    display: none;
  }
  
  .navigation-mobile-toggle {
    display: block;
  }
  
  .navigation-container {
    padding: 0 var(--spacing-lg);
  }
}

@media (max-width: 479px) {
  .navigation-brand-name {
    font-size: var(--font-size-lg);
  }
}
</style>
<script defer data-name="navigation-logic">
  (function() {
  const toggleBtn = document.getElementById('mobile-menu-toggle');
  const closeBtn = document.getElementById('mobile-menu-close');
  const overlay = document.getElementById('mobile-menu-overlay');
    
    if (!toggleBtn || !closeBtn || !overlay) {
      return;
    }

    // Check if already initialized by checking data attribute
    if (toggleBtn.dataset.navInitialized === 'true') {
      return;
    }
    toggleBtn.dataset.navInitialized = 'true';

  const body = document.body;

  const openMenu = () => {
    overlay.classList.add('is-active');
    toggleBtn.setAttribute('aria-expanded', 'true');
    body.style.overflow = 'hidden';
  };

  const closeMenu = () => {
    overlay.classList.remove('is-active');
    toggleBtn.setAttribute('aria-expanded', 'false');
    body.style.overflow = '';
  };

    toggleBtn.addEventListener('click', openMenu);
    closeBtn.addEventListener('click', closeMenu);

  // Close menu on link click
    const mobileLinks = overlay.querySelectorAll('.navigation-mobile-link');
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });

  // Handle ESC key
    const handleEscKey = (e) => {
    if (e.key === 'Escape' && overlay && overlay.classList.contains('is-active')) {
      closeMenu();
    }
    };
    document.addEventListener('keydown', handleEscKey);

  // Handle window resize
    const handleResize = () => {
    if (window.innerWidth > 767 && overlay && overlay.classList.contains('is-active')) {
      closeMenu();
    }
    };
    window.addEventListener('resize', handleResize);
  })();
</script>`}
      />
    </>
  )
}

export default Navigation