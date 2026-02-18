import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/use-auth';
import { BellIcon } from '../ui/Icons';
import { useTranslations } from 'next-intl';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { user, logout } = useAuth();
  const router = useRouter();
  const t = useTranslations('Sidebar');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsClient(true);
  }, []);

  const menuItems = [
    {
      title: t('dashboard'),
      path: '/admin/dashboard',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
      )
    },
    {
      title: t('bookings'),
      path: '/admin/bookings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
      )
    },
    {
      title: t('users'),
      path: '/admin/users',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
      )
    },
    {
      title: t('settings'),
      path: '/admin/settings',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
      )
    },
  ];

  if (!isClient) return null;

  return (
    <div className="admin-layout">
      <aside className="sidebar">
        <div className="logo-container">
          <Link href="/admin/dashboard" className="logo-link">
            <span className="logo-text">Booking Hub</span>
            <span className="logo-badge">Admin</span>
          </Link>
        </div>

        <nav className="nav-menu">
          {menuItems.map((item) => {
            const isActive = router.pathname === item.path;
            return (
              <Link href={item.path} key={item.path} className={`nav-item ${isActive ? 'active' : ''}`}>
                <span className="nav-icon">{item.icon}</span>
                <span className="nav-title">{item.title}</span>
                {isActive && <div className="active-indicator" />}
              </Link>
            );
          })}
        </nav>

        <div className="sidebar-footer">
          <button onClick={() => logout()} className="logout-button">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
            <span>{t('logout')}</span>
          </button>
        </div>
      </aside>

      <main className="main-content">
        <header className="top-header">
          <div className="header-left">
            <h2 className="page-title">{menuItems.find(i => i.path === router.pathname)?.title || 'Dashboard'}</h2>
          </div>

          <div className="header-right">
            <button className="icon-button">
              <BellIcon size={20} />
              <span className="notification-badge">3</span>
            </button>
            <div className="user-profile">
              <div className="user-avatar" style={user?.avatarUrl ? {
                backgroundImage: `url(${user.avatarUrl})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'transparent'
              } : {}}>
                {(!user?.avatarUrl) && (user?.fullName?.[0] || 'A')}
              </div>
              <div className="user-info">
                <span className="user-name">{user?.fullName || 'Admin User'}</span>
                <span className="user-role">{user?.role || 'Administrator'}</span>
              </div>
            </div>
          </div>
        </header>

        <div className="content-wrapper">
          {children}
        </div>
      </main>

      <style jsx>{`
        .admin-layout {
          display: flex;
          min-height: 100vh;
          background-color: #F8FAFC;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
        }

        /* Sidebar Styles */
        .sidebar {
          width: 260px;
          background-color: #ffffff;
          border-right: 1px solid #E2E8F0;
          display: flex;
          flex-direction: column;
          position: fixed;
          top: 0;
          left: 0;
          height: 100vh;
          z-index: 50;
        }

        .logo-container {
          padding: 24px;
          border-bottom: 1px solid #F1F5F9;
        }

        .logo-link {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
        }

        .logo-text {
          font-size: 1.25rem;
          font-weight: 700;
          color: #0F172A;
        }

        .logo-badge {
          font-size: 0.75rem;
          background-color: #EFF6FF;
          color: #3B82F6;
          padding: 2px 8px;
          border-radius: 9999px;
          font-weight: 600;
        }

        .nav-menu {
          padding: 24px 16px;
          display: flex;
          flex-direction: column;
          gap: 4px;
          flex: 1;
        }

        /* Use :global because Link component might not accept scoped classes directly in some setups or needing higher specificity */
        .sidebar :global(.nav-item) {
          display: flex !important;
          flex-direction: row !important;
          align-items: center !important;
          gap: 12px;
          padding: 12px 16px;
          text-decoration: none;
          color: #64748B;
          border-radius: 12px;
          transition: all 0.2s ease;
          position: relative;
          font-weight: 500;
          white-space: nowrap;
          width: 100%;
        }

        .sidebar :global(.nav-item:hover) {
          background-color: #F8FAFC;
          color: #334155;
        }

        .sidebar :global(.nav-item.active) {
          background-color: #EFF6FF;
          color: #2563EB;
        }

        .nav-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        
        .nav-title {
           line-height: 1;
        }

        .logout-button {
          width: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          background: none;
          border: none;
          color: #EF4444;
          cursor: pointer;
          font-weight: 500;
          border-radius: 12px;
          transition: background 0.2s;
        }

        .logout-button:hover {
          background-color: #FEF2F2;
        }

        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid #F1F5F9;
        }

        /* Main Content Styles */
        .main-content {
          flex: 1;
          margin-left: 260px;
          display: flex;
          flex-direction: column;
        }

        .top-header {
          height: 72px;
          background-color: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #E2E8F0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 32px;
          position: sticky;
          top: 0;
          z-index: 40;
        }

        .page-title {
          font-size: 1.125rem;
          font-weight: 600;
          color: #1E293B;
          margin: 0;
        }

        .header-right {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .icon-button {
          background: none;
          border: none;
          color: #64748B;
          cursor: pointer;
          position: relative;
          padding: 8px;
          border-radius: 50%;
          transition: background 0.2s;
        }

        .icon-button:hover {
          background-color: #F1F5F9;
          color: #334155;
        }

        .notification-badge {
          position: absolute;
          top: 4px;
          right: 4px;
          background-color: #EF4444;
          color: white;
          font-size: 0.625rem;
          min-width: 16px;
          height: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 2px solid white;
          font-weight: 700;
        }

        .user-profile {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-left: 24px;
          border-left: 1px solid #E2E8F0;
        }

        .user-avatar {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 600;
          font-size: 0.875rem;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          font-size: 0.875rem;
          font-weight: 600;
          color: #1E293B;
        }

        .user-role {
          font-size: 0.75rem;
          color: #64748B;
        }

        .content-wrapper {
          padding: 32px;
          animation: fadeIn 0.4s ease-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default AdminLayout;