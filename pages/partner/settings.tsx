import React, { useState } from 'react';
import Head from 'next/head';
import PartnerLayout from '../../components/layouts/PartnerLayout';
import { Card } from '../../components/ui/Card';
import { useAuth } from '../../hooks/use-auth';
import { ProfileForm, SecurityForm, NotificationsForm } from '../../components/admin/SettingsForms';

import { GetStaticProps } from 'next';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/router';

const PartnerSettings = () => {
    const t = useTranslations('Settings');
    const router = useRouter();
    const { user } = useAuth();
    const [activeTab, setActiveTab] = useState('profile');

    const handleLanguageChange = (locale: string) => {
        const path = router.asPath;
        router.push(path, path, { locale });
    };

    return (
        <PartnerLayout>
            <Head>
                <title>{t('title')} - Booking Hub Partner</title>
            </Head>

            <div className="settings-container">
                <div className="page-header">
                    <h1>{t('title')}</h1>
                    <p>{t('subtitle')}</p>
                </div>

                <div className="settings-content">
                    {/* Sidebar / Tabs */}
                    <div className="settings-tabs">
                        <button
                            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <span>{t('tabs.profile')}</span>
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'security' ? 'active' : ''}`}
                            onClick={() => setActiveTab('security')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            <span>{t('tabs.security')}</span>
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'notifications' ? 'active' : ''}`}
                            onClick={() => setActiveTab('notifications')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                            <span>{t('tabs.notifications')}</span>
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'language' ? 'active' : ''}`}
                            onClick={() => setActiveTab('language')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                            <span>{t('tabs.language')}</span>
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="settings-panel">
                        {activeTab === 'profile' && <ProfileForm user={user} />}

                        {activeTab === 'security' && <SecurityForm />}

                        {activeTab === 'notifications' && <NotificationsForm />}

                        {activeTab === 'language' && (
                            <Card className="panel-card">
                                <div className="card-header">
                                    <h2>{t('Language.title')}</h2>
                                    <p>{t('Language.subtitle')}</p>
                                </div>
                                <div className="settings-form">
                                    <div className="form-group">
                                        <label>{t('Language.select')}</label>
                                        <div className="language-options">
                                            <button
                                                className={`lang-btn ${router.locale === 'vi' ? 'active' : ''}`}
                                                onClick={() => handleLanguageChange('vi')}
                                            >
                                                <span className="flag">🇻🇳</span>
                                                <span className="lang-name">{t('Language.options.vi')}</span>
                                            </button>
                                            <button
                                                className={`lang-btn ${router.locale === 'en' ? 'active' : ''}`}
                                                onClick={() => handleLanguageChange('en')}
                                            >
                                                <span className="flag">🇺🇸</span>
                                                <span className="lang-name">{t('Language.options.en')}</span>
                                            </button>
                                            <button
                                                className={`lang-btn ${router.locale === 'ja' ? 'active' : ''}`}
                                                onClick={() => handleLanguageChange('ja')}
                                            >
                                                <span className="flag">🇯🇵</span>
                                                <span className="lang-name">{t('Language.options.ja')}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        )}
                    </div>
                </div>
            </div>

            <style jsx>{`
                .settings-container {
                    display: flex;
                    flex-direction: column;
                    gap: 32px;
                    padding-bottom: 32px;
                }

                .page-header h1 {
                    font-size: 1.75rem;
                    margin: 0 0 8px 0;
                    color: #1E293B;
                    font-weight: 700;
                }

                .page-header p {
                    color: #64748B;
                    font-size: 1rem;
                    margin: 0;
                }

                .settings-content {
                    display: grid;
                    grid-template-columns: 240px 1fr;
                    gap: 32px;
                    align-items: start;
                }

                @media (max-width: 768px) {
                    .settings-content {
                        grid-template-columns: 1fr;
                    }
                }

                /* Tabs Sidebar */
                .settings-tabs {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .tab-button {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 12px 16px;
                    border: none;
                    background: none;
                    text-align: left;
                    cursor: pointer;
                    border-radius: 8px;
                    color: #64748B;
                    font-weight: 500;
                    transition: all 0.2s;
                }

                .tab-button:hover {
                    background-color: #F8FAFC;
                    color: #1E293B;
                }

                .tab-button.active {
                    background-color: #EFF6FF;
                    color: #2563EB;
                }

                /* Panel Styles */
                :global(.panel-card) {
                    padding: 32px;
                }

                .card-header {
                    margin-bottom: 32px;
                    border-bottom: 1px solid #E2E8F0;
                    padding-bottom: 24px;
                }

                .card-header h2 {
                    font-size: 1.25rem;
                    color: #1E293B;
                    margin: 0 0 8px 0;
                    font-weight: 600;
                }

                .card-header p {
                    color: #64748B;
                    font-size: 0.875rem;
                    margin: 0;
                }

                /* Form Styles */
                .settings-form {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .language-options {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
                    gap: 16px;
                }

                .lang-btn {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    padding: 16px;
                    border: 1px solid #E2E8F0;
                    border-radius: 12px;
                    background: white;
                    cursor: pointer;
                    transition: all 0.2s;
                    text-align: left;
                }

                .lang-btn:hover {
                    border-color: #3B82F6;
                    background: #F8FAFC;
                }

                .lang-btn.active {
                    border-color: #3B82F6;
                    background: #EFF6FF;
                    box-shadow: 0 0 0 1px #3B82F6;
                }

                .lang-btn .flag {
                    font-size: 24px;
                }

                .lang-btn .lang-name {
                    font-weight: 500;
                    color: #1E293B;
                }
            `}</style>

        </PartnerLayout>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: (await import(`../../locales/${locale}.json`)).default
        }
    };
};

export default PartnerSettings;
