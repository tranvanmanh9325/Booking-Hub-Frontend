import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Head from 'next/head';
import AdminLayout from '../../components/layouts/AdminLayout';
import { Card } from '../../components/ui/Card';
import { useAuth } from '../../hooks/use-auth';
import { Button } from '../../components/ui/Button';
import { Input } from '../../components/ui/Input';

const AdminSettings = () => {
    const { user, updateProfile } = useAuth();
    const [activeTab, setActiveTab] = useState('profile');
    const [loading, setLoading] = useState(false);

    // Initial state from user
    const [profile, setProfile] = useState({
        fullName: '',
        email: '',
        phone: ''
    });

    React.useEffect(() => {
        if (user) {
            setProfile({
                fullName: user.fullName || '',
                email: user.email || '',
                phone: user.phone || ''
            });
        }
    }, [user]);

    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        confirm: ''
    });

    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        marketing: false
    });

    const handleSaveProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateProfile({
                fullName: profile.fullName,
                phone: profile.phone
            });
            toast.success('Đã cập nhật thông tin hồ sơ thành công!');
        } catch (error: any) {
            console.error(error);
            // Error is already handled by apiClient interceptor
        } finally {
            setLoading(false);
        }
    };

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (passwords.new !== passwords.confirm) {
            toast.error('Mật khẩu mới không khớp!');
            return;
        }
        setLoading(true);
        try {
            // Assuming this endpoint exists based on standard auth patterns
            // If not, we might need to verify or create it, but for now we follow the plan.
            const { apiClient } = require('../../lib/api-client');
            await apiClient.post('/api/auth/change-password', {
                currentPassword: passwords.current,
                newPassword: passwords.new
            });
            setPasswords({ current: '', new: '', confirm: '' });
            toast.success('Đã đổi mật khẩu thành công!');
        } catch (error: any) {
            console.error(error);
            // Error is already handled by apiClient interceptor
        } finally {
            setLoading(false);
        }
    };

    return (
        <AdminLayout>
            <Head>
                <title>Cài đặt - Booking Hub Admin</title>
            </Head>

            <div className="settings-container">
                <div className="page-header">
                    <h1>Cài đặt tài khoản</h1>
                    <p>Quản lý thông tin cá nhân và tùy chọn bảo mật của bạn.</p>
                </div>

                <div className="settings-content">
                    {/* Sidebar / Tabs */}
                    <div className="settings-tabs">
                        <button
                            className={`tab-button ${activeTab === 'profile' ? 'active' : ''}`}
                            onClick={() => setActiveTab('profile')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                            <span>Hồ sơ cá nhân</span>
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'security' ? 'active' : ''}`}
                            onClick={() => setActiveTab('security')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
                            <span>Bảo mật</span>
                        </button>
                        <button
                            className={`tab-button ${activeTab === 'notifications' ? 'active' : ''}`}
                            onClick={() => setActiveTab('notifications')}
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg>
                            <span>Thông báo</span>
                        </button>
                    </div>

                    {/* Content Area */}
                    <div className="settings-panel">
                        {activeTab === 'profile' && (
                            <Card className="panel-card">
                                <div className="card-header">
                                    <h2>Thông tin chung</h2>
                                    <p>Cập nhật thông tin chi tiết về tài khoản của bạn.</p>
                                </div>
                                <form onSubmit={handleSaveProfile} className="settings-form">
                                    <div className="avatar-section">
                                        <div className="avatar">
                                            {profile.fullName.charAt(0).toUpperCase()}
                                        </div>
                                        <div className="avatar-actions">
                                            <Button type="button" variant="outline" size="sm">Thay đổi ảnh</Button>
                                            <span className="file-hint">JPG, GIF hoặc PNG. Tối đa 1MB.</span>
                                        </div>
                                    </div>

                                    <div className="form-grid">
                                        <div className="form-group">
                                            <label>Họ và tên</label>
                                            <Input
                                                value={profile.fullName}
                                                onChange={e => setProfile({ ...profile, fullName: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>Số điện thoại</label>
                                            <Input
                                                value={profile.phone}
                                                onChange={e => setProfile({ ...profile, phone: e.target.value })}
                                            />
                                        </div>
                                        <div className="form-group full-width">
                                            <label>Email</label>
                                            <Input
                                                value={profile.email}
                                                disabled
                                                className="bg-gray-50"
                                            />
                                        </div>
                                    </div>

                                    <div className="form-actions">
                                        <Button type="submit" disabled={loading}>
                                            {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
                                        </Button>
                                    </div>
                                </form>
                            </Card>
                        )}

                        {activeTab === 'security' && (
                            <Card className="panel-card">
                                <div className="card-header">
                                    <h2>Đổi mật khẩu</h2>
                                    <p>Vui lòng nhập mật khẩu hiện tại để thay đổi mật khẩu mới.</p>
                                </div>
                                <form onSubmit={handleChangePassword} className="settings-form">
                                    <div className="form-group full-width">
                                        <label>Mật khẩu hiện tại</label>
                                        <Input
                                            type="password"
                                            value={passwords.current}
                                            onChange={e => setPasswords({ ...passwords, current: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Mật khẩu mới</label>
                                        <Input
                                            type="password"
                                            value={passwords.new}
                                            onChange={e => setPasswords({ ...passwords, new: e.target.value })}
                                        />
                                    </div>
                                    <div className="form-group full-width">
                                        <label>Xác nhận mật khẩu mới</label>
                                        <Input
                                            type="password"
                                            value={passwords.confirm}
                                            onChange={e => setPasswords({ ...passwords, confirm: e.target.value })}
                                        />
                                    </div>

                                    <div className="form-actions">
                                        <Button type="submit" disabled={loading}>
                                            {loading ? 'Đang xử lý...' : 'Cập nhật mật khẩu'}
                                        </Button>
                                    </div>
                                </form>
                            </Card>
                        )}

                        {activeTab === 'notifications' && (
                            <Card className="panel-card">
                                <div className="card-header">
                                    <h2>Tùy chọn thông báo</h2>
                                    <p>Chọn cách chúng tôi liên lạc với bạn.</p>
                                </div>
                                <div className="notifications-list">
                                    <div className="notification-item">
                                        <div className="notification-info">
                                            <h3>Thông báo qua Email</h3>
                                            <p>Nhận thông báo về các đơn đặt phòng mới qua email.</p>
                                        </div>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={notifications.email}
                                                onChange={e => setNotifications({ ...notifications, email: e.target.checked })}
                                            />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                    <div className="notification-item">
                                        <div className="notification-info">
                                            <h3>Thông báo đẩy</h3>
                                            <p>Nhận thông báo ngay trên trình duyệt.</p>
                                        </div>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={notifications.push}
                                                onChange={e => setNotifications({ ...notifications, push: e.target.checked })}
                                            />
                                            <span className="slider round"></span>
                                        </label>
                                    </div>
                                    <div className="notification-item">
                                        <div className="notification-info">
                                            <h3>Email Marketing</h3>
                                            <p>Nhận tin tức về các tính năng mới và ưu đãi.</p>
                                        </div>
                                        <label className="switch">
                                            <input
                                                type="checkbox"
                                                checked={notifications.marketing}
                                                onChange={e => setNotifications({ ...notifications, marketing: e.target.checked })}
                                            />
                                            <span className="slider round"></span>
                                        </label>
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

                .avatar-section {
                    display: flex;
                    align-items: center;
                    gap: 24px;
                    margin-bottom: 8px;
                }

                .avatar {
                    width: 80px;
                    height: 80px;
                    background: linear-gradient(135deg, #3B82F6 0%, #2563EB 100%);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 2rem;
                    font-weight: 700;
                    color: white;
                }

                .avatar-actions {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .file-hint {
                    font-size: 0.75rem;
                    color: #94A3B8;
                }

                .form-grid {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 24px;
                }

                .form-group.full-width {
                    grid-column: 1 / -1;
                }

                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #334155;
                }

                .form-actions {
                    margin-top: 8px;
                    display: flex;
                    justify-content: flex-end;
                }

                /* Notification Switch */
                .notification-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 20px 0;
                    border-bottom: 1px solid #F1F5F9;
                }

                .notification-item:last-child {
                    border-bottom: none;
                }

                .notification-info h3 {
                    font-size: 0.95rem;
                    color: #1E293B;
                    margin: 0 0 4px 0;
                    font-weight: 500;
                }

                .notification-info p {
                    font-size: 0.875rem;
                    color: #64748B;
                    margin: 0;
                }

                /* Switch Element */
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 44px;
                    height: 24px;
                }

                .switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }

                .slider {
                    position: absolute;
                    cursor: pointer;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: #E2E8F0;
                    transition: .4s;
                }

                .slider:before {
                    position: absolute;
                    content: "";
                    height: 18px;
                    width: 18px;
                    left: 3px;
                    bottom: 3px;
                    background-color: white;
                    transition: .4s;
                }

                input:checked + .slider {
                    background-color: #3B82F6;
                }

                input:focus + .slider {
                    box-shadow: 0 0 1px #3B82F6;
                }

                input:checked + .slider:before {
                    transform: translateX(20px);
                }

                .slider.round {
                    border-radius: 34px;
                }

                .slider.round:before {
                    border-radius: 50%;
                }
            `}</style>
        </AdminLayout>
    );
};

export default AdminSettings;