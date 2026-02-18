import React, { useState, useCallback } from 'react';
import { Content } from '../../types/content';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../utils/cropImage';
import { ShowtimeManager } from './ShowtimeManager';
import { ScreenSeatManager } from './ScreenSeatManager';
import { modalStyles } from './ContentModalStyles';

import { CinemaManager } from './CinemaManager';
import { ScreenManager } from './ScreenManager';

interface ContentFormModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSubmit: (e: React.FormEvent) => Promise<void>;
    formData: Omit<Content, 'id'>;
    setFormData: (data: Omit<Content, 'id'>) => void;
    uploadFile: (file: File) => Promise<string>;
    isPending: boolean;
    t: any;
    mode: 'add' | 'edit';
    contentId?: number; // Added contentId
}

export const ContentFormModal: React.FC<ContentFormModalProps> = ({
    isOpen, onClose, onSubmit, formData, setFormData, uploadFile, isPending, t, mode, contentId
}) => {
    // Crop State
    const [cropImage, setCropImage] = useState<string | null>(null);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [isCropModalOpen, setIsCropModalOpen] = useState(false);
    const [currentFileType, setCurrentFileType] = useState<'thumbnail' | 'detail'>('thumbnail');
    const [isSavingCrop, setIsSavingCrop] = useState(false);
    const [aspectRatio, setAspectRatio] = useState(4 / 3);

    // Tab State
    const [activeTab, setActiveTab] = useState<'info' | 'cinemas' | 'screens' | 'showtimes' | 'seats'>('info');

    // Image Preview State
    const [previewImage, setPreviewImage] = useState<string | null>(null);

    const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>, type: 'thumbnail' | 'detail') => {
        if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0];
            const imageDataUrl = await readFile(file);

            // Calculate aspect ratio
            const img = new Image();
            img.src = imageDataUrl;
            img.onload = () => {
                setAspectRatio(img.width / img.height);
                setCropImage(imageDataUrl);
                setCurrentFileType(type);
                setIsCropModalOpen(true);
                setZoom(1); // Reset zoom
                setCrop({ x: 0, y: 0 }); // Reset crop
                // Reset input so same file can be selected again if needed
                e.target.value = '';
            };
        }
    };

    const handleCropSave = async () => {
        if (!cropImage || !croppedAreaPixels) return;
        setIsSavingCrop(true);
        try {
            const croppedBlob = await getCroppedImg(cropImage, croppedAreaPixels);
            if (croppedBlob) {
                const file = new File([croppedBlob], "cropped-image.jpg", { type: "image/jpeg" });
                const url = await uploadFile(file);

                if (currentFileType === 'thumbnail') {
                    setFormData({ ...formData, thumbnail: url });
                } else {
                    const currentImages = JSON.parse(formData.images || '[]');
                    setFormData({ ...formData, images: JSON.stringify([...currentImages, url]) });
                }
                setIsCropModalOpen(false);
                setCropImage(null);
            } else {
                alert("Failed to create image blob");
            }
        } catch (e: any) {
            console.error(e);
            alert("Error saving image: " + (e.message || "Unknown error"));
        } finally {
            setIsSavingCrop(false);
        }
    };

    const handleRemoveImage = (type: 'thumbnail' | 'detail', index?: number) => {
        if (type === 'thumbnail') {
            setFormData({ ...formData, thumbnail: '' });
        } else if (type === 'detail' && typeof index === 'number') {
            const currentImages = JSON.parse(formData.images || '[]');
            const newImages = currentImages.filter((_: string, i: number) => i !== index);
            setFormData({ ...formData, images: JSON.stringify(newImages) });
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>{mode === 'add' ? t('addNew') : t('table.edit')}</h3>
                {mode === 'edit' && formData.type === 'Movie' && (
                    <div className="modal-tabs">
                        <button
                            type="button"
                            className={`tab-btn ${activeTab === 'info' ? 'active' : ''}`}
                            onClick={() => setActiveTab('info')}
                        >
                            {t('table.info')}
                        </button>
                        <button
                            type="button"
                            className={`tab-btn ${activeTab === 'cinemas' ? 'active' : ''}`}
                            onClick={() => setActiveTab('cinemas')}
                        >
                            Quản lý Rạp chiếu
                        </button>
                        <button
                            type="button"
                            className={`tab-btn ${activeTab === 'screens' ? 'active' : ''}`}
                            onClick={() => setActiveTab('screens')}
                        >
                            Quản lý Phòng chiếu
                        </button>
                        <button
                            type="button"
                            className={`tab-btn ${activeTab === 'showtimes' ? 'active' : ''}`}
                            onClick={() => setActiveTab('showtimes')}
                        >
                            Quản lý Suất chiếu
                        </button>
                        <button
                            type="button"
                            className={`tab-btn ${activeTab === 'seats' ? 'active' : ''}`}
                            onClick={() => setActiveTab('seats')}
                        >
                            Quản lý Ghế
                        </button>
                    </div>
                )}

                {activeTab === 'info' ? (
                    <form onSubmit={onSubmit}>
                        <div className="form-layout">
                            <div className="form-col-left">
                                <div className="form-group">
                                    <label>{t('table.name')}</label>
                                    <input
                                        className="form-input"
                                        value={formData.name}
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label>{t('table.type')}</label>
                                    <select
                                        className="form-input"
                                        value={formData.type}
                                        onChange={e => setFormData({ ...formData, type: e.target.value })}
                                    >
                                        <option value="Product">{t('typeOptions.Product')}</option>
                                        <option value="Ticket">{t('typeOptions.Ticket')}</option>
                                        <option value="Promotion">{t('typeOptions.Promotion')}</option>
                                        <option value="Movie">{t('typeOptions.Movie')}</option>
                                    </select>
                                </div>

                                {formData.type === 'Movie' && (
                                    <>
                                        <div className="form-group">
                                            <label>{t('table.duration')} (phút)</label>
                                            <input
                                                type="number"
                                                className="form-input"
                                                value={formData.duration || ''}
                                                onChange={e => setFormData({ ...formData, duration: e.target.value })}
                                                placeholder={t('modal.placeholderDuration')}
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label>{t('table.releaseDate')}</label>
                                            <input
                                                type="date"
                                                className="form-input"
                                                value={formData.releaseDate || ''}
                                                onChange={e => setFormData({ ...formData, releaseDate: e.target.value })}
                                            />
                                        </div>
                                    </>
                                )}

                                <div className="form-group">
                                    <label>{t('table.status')}</label>
                                    <select
                                        className="form-input"
                                        value={formData.status}
                                        onChange={e => setFormData({ ...formData, status: e.target.value as 'active' | 'inactive' })}
                                    >
                                        <option value="active">{t('table.active')}</option>
                                        <option value="inactive">{t('table.inactive')}</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label>{t('table.thumbnail')}</label>
                                    <div className="file-upload-wrapper">
                                        <label className="btn-upload">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ marginRight: '8px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            {t('modal.upload')}
                                            <input
                                                type="file"
                                                hidden
                                                accept="image/*"
                                                onChange={(e) => handleFileChange(e, 'thumbnail')}
                                            />
                                        </label>
                                    </div>
                                    {formData.thumbnail && (
                                        <div className="image-preview-container" onClick={() => setPreviewImage(formData.thumbnail?.startsWith('http') ? formData.thumbnail : `http://localhost:8080${formData.thumbnail}`)}>
                                            <img
                                                src={formData.thumbnail?.startsWith('http') ? formData.thumbnail : `http://localhost:8080${formData.thumbnail}`}
                                                alt="Thumbnail"
                                                className="image-preview"
                                            />
                                            <button
                                                type="button"
                                                className="btn-remove-image"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRemoveImage('thumbnail');
                                                }}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div className="form-col-right">
                                <div className="form-group">
                                    <label>{t('table.images')}</label>
                                    <div className="file-upload-wrapper">
                                        <label className="btn-upload">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" style={{ marginRight: '8px' }} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                            </svg>
                                            {t('modal.upload')}
                                            <input
                                                type="file"
                                                hidden
                                                accept="image/*"
                                                multiple
                                                onChange={(e) => handleFileChange(e, 'detail')}
                                            />
                                        </label>
                                    </div>
                                    <div className="detail-images-grid">
                                        {JSON.parse(formData.images || '[]').map((url: string, index: number) => (
                                            <div key={index} className="detail-image-wrapper" onClick={() => setPreviewImage(url.startsWith('http') ? url : `http://localhost:8080${url}`)}>
                                                <img
                                                    src={url.startsWith('http') ? url : `http://localhost:8080${url}`}
                                                    alt={`Detail ${index}`}
                                                    className="detail-image-preview"
                                                />
                                                <button
                                                    type="button"
                                                    className="btn-remove-image small"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleRemoveImage('detail', index);
                                                    }}
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                                    </svg>
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label>{t('table.description')}</label>
                                    <textarea
                                        className="form-input"
                                        value={formData.description}
                                        onChange={e => setFormData({ ...formData, description: e.target.value })}
                                        placeholder={t('table.description')}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="modal-actions">
                            <button type="button" className="btn-cancel" onClick={onClose}>{t('modal.cancel')}</button>
                            <button type="submit" className="btn-save" disabled={isPending}>{isPending ? t('modal.save') + '...' : t('modal.save')}</button>
                        </div>
                    </form>
                ) : (
                    mode === 'edit' && formData.type === 'Movie' && contentId ? (
                        activeTab === 'cinemas' ? (
                            <CinemaManager t={t} />
                        ) : activeTab === 'screens' ? (
                            <ScreenManager t={t} />
                        ) : activeTab === 'showtimes' ? (
                            <ShowtimeManager contentId={contentId} t={t} />
                        ) : activeTab === 'seats' ? (
                            <ScreenSeatManager t={t} />
                        ) : null
                    ) : (
                        <div style={{ padding: '20px', textAlign: 'center' }}>
                            <p>Vui lòng lưu nội dung trước khi quản lý suất chiếu.</p>
                        </div>
                    )
                )}
            </div>

            {/* Crop Modal */}
            {
                isCropModalOpen && (
                    <div className="crop-modal-overlay">
                        <div className="crop-modal-content">
                            <h3>{t('modal.editImage')}</h3>
                            <div className="crop-container">
                                <Cropper
                                    image={cropImage || ''}
                                    crop={crop}
                                    zoom={zoom}
                                    aspect={aspectRatio}
                                    onCropChange={setCrop}
                                    onCropComplete={onCropComplete}
                                    onZoomChange={setZoom}
                                />
                            </div>
                            <div className="zoom-controls">
                                <label>{t('modal.zoom')}</label>
                                <input
                                    type="range"
                                    value={zoom}
                                    min={1}
                                    max={3}
                                    step={0.1}
                                    aria-labelledby="Zoom"
                                    onChange={(e) => setZoom(Number(e.target.value))}
                                    className="zoom-range"
                                />
                            </div>
                            <div className="modal-actions">
                                <button type="button" className="btn-cancel" onClick={() => setIsCropModalOpen(false)} disabled={isSavingCrop}>
                                    {t('modal.cancel')}
                                </button>
                                <button type="button" className="btn-save" onClick={handleCropSave} disabled={isSavingCrop}>
                                    {isSavingCrop ? t('modal.saving') : t('modal.cropAndSave')}
                                </button>
                            </div>
                        </div>
                    </div>
                )
            }

            {/* Image Preview Modal (Lightbox) */}
            {
                previewImage && (
                    <div className="lightbox-overlay" onClick={() => setPreviewImage(null)}>
                        <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                            <img src={previewImage} alt="Preview" className="lightbox-image" />
                            <button className="btn-close-lightbox" onClick={() => setPreviewImage(null)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>
                )
            }

            <style jsx>{modalStyles}</style>
        </div >
    );
};

interface DeleteContentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => Promise<void>;
    itemName: string;
    isPending: boolean;
    t: any;
}

export const DeleteContentModal: React.FC<DeleteContentModalProps> = ({
    isOpen, onClose, onConfirm, itemName, isPending, t
}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3>{t('modal.deleteTitle')}</h3>
                <p>{t.rich('modal.deleteMessage', {
                    name: itemName,
                    bold: (chunks: any) => <strong>{chunks}</strong>
                })}</p>
                <div className="modal-actions">
                    <button type="button" className="btn-cancel" onClick={onClose}>{t('modal.cancel')}</button>
                    <button type="button" className="btn-delete" onClick={onConfirm} disabled={isPending}>{isPending ? t('modal.confirmDelete') + '...' : t('modal.confirmDelete')}</button>
                </div>
            </div>
            <style jsx>{modalStyles}</style>
        </div>
    );
};

// Helper to read file as Data URL
function readFile(file: File): Promise<string> {
    return new Promise((resolve) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => resolve(reader.result as string), false);
        reader.readAsDataURL(file);
    });
}