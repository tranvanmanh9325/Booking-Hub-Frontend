import React, { useState, useRef } from 'react';
import { toast } from 'react-toastify';
import { useTranslations } from 'next-intl';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { Card } from '../ui/Card';
import { ImageCropper } from '../ui/ImageCropper';
// Assuming useAuth is used only in parent or passed down.
// Actually ProfileForm needs updateProfile and updateAvatar.
// Let's pass them as props to keep this component pure or use the hook if we want tocouple it.
// The original plan said "Manage state/logic independent". Using the hook inside is easier for now as it matches original logic.
// But wait, the original file imported useAuth from '../../hooks/use-auth'.
import { useAuth } from '../../hooks/use-auth';

// --- Types ---

interface ProfileFormProps {
    user: any; // Or specific User type if available
}

export const ProfileForm: React.FC<ProfileFormProps> = ({ user }) => {
    const t = useTranslations('Settings');
    const { updateProfile, updateAvatar } = useAuth();
    const [loading, setLoading] = useState(false);
    const [isCropperOpen, setIsCropperOpen] = useState(false);
    const [cropImage, setCropImage] = useState<string | null>(null);

    const fileInputRef = useRef<HTMLInputElement>(null);

    // Initial state from user
    const [profile, setProfile] = useState({
        fullName: user?.fullName || '',
        email: user?.email || '',
        phone: user?.phone || '',
        avatarUrl: user?.avatarUrl || ''
    });

    React.useEffect(() => {
        if (user) {
            setProfile({
                fullName: user.fullName || '',
                email: user.email || '',
                phone: user.phone || '',
                avatarUrl: user.avatarUrl || ''
            });
        }
    }, [user]);

    const handleAvatarClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        if (file.size > 5 * 1024 * 1024) {
            // Using hint as proxy for error key
            toast.error(t('Profile.uploadHint'));
            return;
        }

        const reader = new FileReader();
        reader.addEventListener('load', () => {
            setCropImage(reader.result as string);
            setIsCropperOpen(true);
        });
        reader.readAsDataURL(file);
    };

    const handleCropSave = async (croppedImageBlob: Blob) => {
        try {
            setLoading(true);
            setIsCropperOpen(false);

            const file = new File([croppedImageBlob], "avatar.jpg", { type: "image/jpeg" });

            const newAvatarUrl = await updateAvatar(file);
            setProfile(prev => ({ ...prev, avatarUrl: newAvatarUrl }));
            toast.success(t('Profile.success'));
        } catch (error: any) {
            console.error(error);
        } finally {
            setLoading(false);
            setCropImage(null);
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
        }
    };

    const handleCropCancel = () => {
        setIsCropperOpen(false);
        setCropImage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const handleSaveProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            await updateProfile({
                fullName: profile.fullName,
                phone: profile.phone
            });
            toast.success(t('Profile.success'));
        } catch (error: any) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="panel-card">
            <div className="card-header">
                <h2>{t('Profile.title')}</h2>
                <p>{t('Profile.subtitle')}</p>
            </div>
            <form onSubmit={handleSaveProfile} className="settings-form">
                <div className="avatar-section">
                    <div className="avatar" style={profile.avatarUrl ? {
                        backgroundImage: `url(${profile.avatarUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        color: 'transparent'
                    } : {}}>
                        {!profile.avatarUrl && profile.fullName.charAt(0)?.toUpperCase()}
                    </div>
                    <div className="avatar-actions">
                        <Button type="button" variant="outline" size="sm" onClick={handleAvatarClick} disabled={loading}>
                            {loading ? t('Profile.saving') : t('Profile.changeAvatar')}
                        </Button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            style={{ display: 'none' }}
                            accept="image/png, image/jpeg, image/gif"
                        />
                        <span className="file-hint">{t('Profile.uploadHint')}</span>
                    </div>
                </div>

                <div className="form-grid">
                    <div className="form-group">
                        <label>{t('Profile.fullName')}</label>
                        <Input
                            value={profile.fullName}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfile({ ...profile, fullName: e.target.value })}
                        />
                    </div>
                    <div className="form-group">
                        <label>{t('Profile.phone')}</label>
                        <Input
                            value={profile.phone}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProfile({ ...profile, phone: e.target.value })}
                        />
                    </div>
                    <div className="form-group full-width">
                        <label>{t('Profile.email')}</label>
                        <Input
                            value={profile.email}
                            disabled
                            className="bg-gray-50"
                        />
                    </div>
                </div>

                <div className="form-actions">
                    <Button type="submit" disabled={loading}>
                        {loading ? t('Profile.saving') : t('Profile.save')}
                    </Button>
                </div>
            </form>

            {isCropperOpen && cropImage && (
                <ImageCropper
                    imageSrc={cropImage}
                    onCancel={handleCropCancel}
                    onSave={handleCropSave}
                />
            )}

            <style jsx>{`
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
                 /* Responsive fix for form grid from original file not explicitly here but good to have */
                @media (max-width: 640px) {
                    .form-grid {
                        grid-template-columns: 1fr;
                    }
                }
            `}</style>
        </Card>
    );
};

export const SecurityForm = () => {
    const t = useTranslations('Settings');
    const [loading, setLoading] = useState(false);
    const [passwords, setPasswords] = useState({
        current: '',
        new: '',
        confirm: ''
    });

    const handleChangePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if (passwords.new !== passwords.confirm) {
            toast.error(t('Security.errorMismatch'));
            return;
        }
        setLoading(true);
        try {
            // Need to dynamic require simply or import at top?
            // Original code used require inside function, let's keep it safe or move import up if we knew for sure.
            // But to be cleaner, let's try to import apiClient at top if possible, but the original file did:
            // const { apiClient } = require('../../lib/api-client'); inside the function.
            // I'll keep the pattern to avoid breaking circular deps if any (unlikely but safe).
            // Actually, let's just use require here as in original.
            const { apiClient } = require('../../lib/api-client');
            await apiClient.post('/api/auth/change-password', {
                currentPassword: passwords.current,
                newPassword: passwords.new
            });
            setPasswords({ current: '', new: '', confirm: '' });
            toast.success(t('Security.success'));
        } catch (error: any) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card className="panel-card">
            <div className="card-header">
                <h2>{t('Security.title')}</h2>
                <p>{t('Security.subtitle')}</p>
            </div>
            <form onSubmit={handleChangePassword} className="settings-form">
                <div className="form-group full-width">
                    <label>{t('Security.currentPassword')}</label>
                    <Input
                        type="password"
                        value={passwords.current}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswords({ ...passwords, current: e.target.value })}
                    />
                </div>
                <div className="form-group full-width">
                    <label>{t('Security.newPassword')}</label>
                    <Input
                        type="password"
                        value={passwords.new}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswords({ ...passwords, new: e.target.value })}
                    />
                </div>
                <div className="form-group full-width">
                    <label>{t('Security.confirmPassword')}</label>
                    <Input
                        type="password"
                        value={passwords.confirm}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPasswords({ ...passwords, confirm: e.target.value })}
                    />
                </div>

                <div className="form-actions">
                    <Button type="submit" disabled={loading}>
                        {loading ? t('Security.submitting') : t('Security.submit')}
                    </Button>
                </div>
            </form>

            <style jsx>{`
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
                .settings-form {
                    display: flex;
                    flex-direction: column;
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
            `}</style>
        </Card>
    );
};

export const NotificationsForm = () => {
    const t = useTranslations('Settings');
    const [notifications, setNotifications] = useState({
        email: true,
        push: true,
        marketing: false
    });

    return (
        <Card className="panel-card">
            <div className="card-header">
                <h2>{t('Notifications.title')}</h2>
                <p>{t('Notifications.subtitle')}</p>
            </div>
            <div className="notifications-list">
                <div className="notification-item">
                    <div className="notification-info">
                        <h3>{t('Notifications.email')}</h3>
                        <p>{t('Notifications.emailDesc')}</p>
                    </div>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={notifications.email}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNotifications({ ...notifications, email: e.target.checked })}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="notification-item">
                    <div className="notification-info">
                        <h3>{t('Notifications.push')}</h3>
                        <p>{t('Notifications.pushDesc')}</p>
                    </div>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={notifications.push}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNotifications({ ...notifications, push: e.target.checked })}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
                <div className="notification-item">
                    <div className="notification-info">
                        <h3>{t('Notifications.marketing')}</h3>
                        <p>{t('Notifications.marketingDesc')}</p>
                    </div>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={notifications.marketing}
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setNotifications({ ...notifications, marketing: e.target.checked })}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>

            <style jsx>{`
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
        </Card>
    );
};