import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import AdminLayout from '../../components/layouts/AdminLayout'
import { Card } from '../../components/ui/Card'
import { useAuth } from '../../hooks/use-auth'
import { useTranslations } from 'next-intl'

const AdminDashboard = () => {
  const { user } = useAuth()
  const t = useTranslations('Dashboard')

  return (
    <AdminLayout>
      <Head>
        <title>Admin Dashboard - Booking Hub</title>
      </Head>

      <div className="dashboard-container">
        <div className="welcome-banner">
          <h1>{t('welcome', { name: user?.fullName || 'Partner' })}</h1>
          <p>{t('overview')}</p>
        </div>

        <div className="stats-grid">
          <Card className="stat-card">
            <div className="stat-header">
              <span className="stat-title">{t('stats.revenue')}</span>
              <span className="stat-icon revenue-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a4.5 4.5 0 0 0 0 9H14.5a4.5 4.5 0 0 1 0 9H6"></path></svg>
              </span>
            </div>
            <div className="stat-value">5.230.000 ₫</div>
            <div className="stat-trend positive">
              <div className="trend-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>

              <span>{t('stats.vsYesterday', { value: '+12.5' })}</span>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-header">
              <span className="stat-title">{t('stats.orders')}</span>
              <span className="stat-icon orders-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
              </span>
            </div>
            <div className="stat-value">24</div>
            <div className="stat-trend positive">
              <div className="trend-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
              </div>

              <span>{t('stats.vsYesterday', { value: '+5' })}</span>
            </div>
          </Card>

          <Card className="stat-card">
            <div className="stat-header">
              <span className="stat-title">{t('stats.customers')}</span>
              <span className="stat-icon customers-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </span>
            </div>
            <div className="stat-value">12</div>
            <div className="stat-trend negative">
              <div className="trend-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"></polyline><polyline points="17 18 23 18 23 12"></polyline></svg>
              </div>

              <span>{t('stats.vsYesterday', { value: '-2' })}</span>
            </div>
          </Card >

          <Card className="stat-card">
            <div className="stat-header">
              <span className="stat-title">{t('stats.reviews')}</span>
              <span className="stat-icon star-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="#FBBF24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
              </span>
            </div>
            <div className="stat-value">158</div>
            <div className="stat-trend neutral">
              <div className="stat-trend neutral">
                <span>{t('stats.totalSystem')}</span>
              </div>
            </div>
          </Card>
        </div >

        <div className="recent-activity">
          <h3>{t('activity.title')}</h3>
          <Card className="activity-card" noPadding>
            <ul className="activity-list">
              <li className="activity-item">
                <div className="activity-icon blue">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                </div>

                <div className="activity-content">
                  <span className="activity-text">{t.rich('activity.newBooking', {
                    name: 'Nguyễn Văn A',
                    bold: (chunks) => <strong>{chunks}</strong>
                  })}</span>
                  <span className="activity-time">{t('activity.minutesAgo', { count: 5 })}</span>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon green">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>

                <div className="activity-content">
                  <span className="activity-text">{t.rich('activity.paymentSuccess', {
                    orderId: '#12345',
                    bold: (chunks) => <strong>{chunks}</strong>
                  })}</span>
                  <span className="activity-time">{t('activity.hoursAgo', { count: 2 })}</span>
                </div>
              </li>
              <li className="activity-item">
                <div className="activity-icon yellow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </div>

                <div className="activity-content">
                  <span className="activity-text">{t.rich('activity.newMessage', {
                    partner: 'CGV Cinemas',
                    bold: (chunks) => <strong>{chunks}</strong>
                  })}</span>
                  <span className="activity-time">{t('activity.daysAgo', { count: 1 })}</span>
                </div>
              </li >
            </ul >
          </Card >
        </div >

      </div >

      <style jsx>{`
          .dashboard-container {
            display: flex;
            flex-direction: column;
            gap: 32px;
            padding-bottom: 32px;
          }
          
          .welcome-banner {
            display: flex;
            flex-direction: column;
            gap: 4px;
          }

          .welcome-banner h1 {
            font-size: 1.75rem;
            margin: 0;
            background: linear-gradient(135deg, #1E293B 0%, #334155 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            font-weight: 700;
          }
          
          .welcome-banner p {
            color: #64748B;
            font-size: 1rem;
            margin: 0;
          }
          
          .stats-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 24px;
          }
          
          :global(.stat-card) {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
            cursor: default;
          }
          
          :global(.stat-card:hover) {
            transform: translateY(-4px);
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05) !important;
          }

          .stat-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
          }
          
          .stat-title {
            color: #64748B;
            font-size: 0.875rem;
            font-weight: 500;
            line-height: 1.5;
          }
          
          .stat-icon {
            width: 48px;
            height: 48px;
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.3s ease;
          }
          
          :global(.stat-card:hover) .stat-icon {
            transform: scale(1.1);
          }
          
          .revenue-icon { background: #EFF6FF; color: #3B82F6; }
          .orders-icon { background: #ECFDF5; color: #10B981; }
          .customers-icon { background: #FDF2F8; color: #EC4899; }
          .star-icon { background: #FFFBEB; color: #F59E0B; }
          
          .stat-value {
            font-size: 2rem;
            font-weight: 700;
            color: #1E293B;
            line-height: 1.2;
            margin: 12px 0;
          }
          
          .stat-trend {
            display: flex;
            align-items: center;
            gap: 6px;
            font-size: 0.875rem;
            font-weight: 500;
          }
          
          .trend-icon {
            display: flex;
            align-items: center;
          }

          .stat-trend.positive { color: #10B981; }
          .stat-trend.negative { color: #EF4444; }
          .stat-trend.neutral { color: #94A3B8; }
          
          .recent-activity h3 {
            margin-bottom: 16px;
            font-size: 1.25rem;
            color: #1E293B;
            font-weight: 600;
          }
          
          .activity-list {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
          }
          
          .activity-item {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 20px 24px;
            border-bottom: 1px solid #E2E8F0;
            transition: background-color 0.2s;
          }

          .activity-item:hover {
            background-color: #F8FAFC;
          }
          
          .activity-item:last-child {
            border-bottom: none;
          }
          
          .activity-icon {
            width: 40px;
            height: 40px;
            border-radius: 10px;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          
          .activity-icon.blue { background: #E0F2FE; color: #0EA5E9; }
          .activity-icon.green { background: #DCFCE7; color: #22C55E; }
          .activity-icon.yellow { background: #FEF3C7; color: #D97706; }
          
          .activity-content {
            display: flex;
            flex-direction: column;
            gap: 2px;
          }
          
          .activity-text {
            color: #334155;
            font-size: 0.95rem;
            line-height: 1.5;
          }

          .activity-text strong {
            font-weight: 600;
            color: #1E293B;
          }
          
          .activity-time {
            color: #94A3B8;
            font-size: 0.8rem;
          }
        `}</style>
    </AdminLayout >
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      messages: (await import(`../../locales/${locale}.json`)).default
    }
  };
};

export default AdminDashboard