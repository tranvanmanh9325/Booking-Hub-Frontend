import React, { useState, useCallback } from 'react';
import { Content } from '../../types/content';
import Cropper from 'react-easy-crop';
import getCroppedImg from '../../utils/cropImage';

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
}

export const ContentFormModal: React.FC<ContentFormModalProps> = ({
    isOpen, onClose, onSubmit, formData, setFormData, uploadFile, isPending, t, mode
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
                                    <option value="Product">Product</option>
                                    <option value="Ticket">Ticket</option>
                                    <option value="Promotion">Promotion</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>{t('table.price')}</label>
                                <input
                                    className="form-input"
                                    value={formData.price}
                                    onChange={e => setFormData({ ...formData, price: e.target.value })}
                                    required
                                />
                            </div>
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
                                    <div className="image-preview-container" onClick={() => setPreviewImage(`http://localhost:8080${formData.thumbnail}`)}>
                                        <img src={`http://localhost:8080${formData.thumbnail}`} alt="Thumbnail" className="image-preview" />
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
                                        <div key={index} className="detail-image-wrapper" onClick={() => setPreviewImage(`http://localhost:8080${url}`)}>
                                            <img src={`http://localhost:8080${url}`} alt={`Detail ${index}`} className="detail-image-preview" />
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
            </div>

            {/* Crop Modal */}
            {isCropModalOpen && (
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
            )}

            {/* Image Preview Modal (Lightbox) */}
            {previewImage && (
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
            )}

            <style jsx>{styles}</style>
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
            <style jsx>{styles}</style>
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

const styles = `
    .modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 50;
    }
    .modal-content {
        background: white;
        padding: 2rem;
        border-radius: 0.5rem;
        width: 100%;
        max-width: 900px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        max-height: 90vh;
        overflow-y: auto;
    }
    .modal-content h3 {
        font-size: 1.25rem;
        font-weight: 600;
        margin-bottom: 1.5rem;
        color: #111827;
    }
    .form-layout {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1.5rem;
    }
    .form-col-left {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .form-col-right {
        display: flex;
        flex-direction: column;
    }
    .form-col-right .form-group {
        height: 100%;
        display: flex;
        flex-direction: column;
    }
    .form-col-right textarea {
        flex: 1;
        min-height: 200px;
    }
    .form-group {
        margin-bottom: 0;
    }
    .form-group label {
        display: block;
        color: #475569;
        margin-bottom: 0.5rem;
    }
    .form-input {
        width: 100%;
        padding: 10px;
        border: 1px solid #E2E8F0;
        border-radius: 8px;
        outline: none;
    }
    .form-input:focus {
        border-color: #3B82F6;
    }
    .modal-actions {
        display: flex;
        justify-content: flex-end;
        gap: 12px;
        margin-top: 24px;
    }
    .btn-cancel {
        padding: 8px 16px;
        background-color: #F1F5F9;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        color: #475569;
        font-weight: 500;
    }
    .btn-save {
        padding: 8px 16px;
        background-color: #3B82F6;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        color: white;
        font-weight: 500;
    }
    .btn-delete {
        padding: 8px 16px;
        background-color: #EF4444;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        color: white;
        font-weight: 500;
        transition: background-color 0.2s;
    }
    .btn-delete:hover {
        background-color: #DC2626;
    }
    
    /* File Upload Button */
    .file-upload-wrapper {
        margin-bottom: 8px;
    }
    .btn-upload {
        display: inline-flex;
        align-items: center;
        padding: 10px 16px;
        background-color: #EFF6FF;
        color: #3B82F6;
        border: 1px dashed #3B82F6;
        border-radius: 8px;
        cursor: pointer;
        font-weight: 500;
        font-size: 0.95rem;
        transition: all 0.2s ease;
        width: 100%;
        justify-content: center;
    }
    .btn-upload:hover {
        background-color: #DBEAFE;
        border-color: #2563EB;
        color: #2563EB;
        transform: translateY(-1px);
        box-shadow: 0 2px 4px rgba(59, 130, 246, 0.1);
    }
    .btn-upload svg {
        transition: transform 0.2s;
    }
    .btn-upload:hover svg {
        transform: translateY(-2px);
    }
    
    /* Image Preview & Interactions */
    .image-preview-container {
        position: relative;
        margin-top: 8px;
        cursor: pointer;
        width: fit-content;
    }
    .image-preview {
        width: 100%;
        max-width: 200px;
        height: 150px;
        object-fit: cover;
        border-radius: 8px;
        border: 1px solid #E5E7EB;
        transition: opacity 0.2s;
    }
    .image-preview-container:hover .image-preview {
        opacity: 0.9;
    }
    .btn-remove-image {
        position: absolute;
        top: 4px;
        right: 4px;
        background: rgba(255, 255, 255, 0.9);
        border: 1px solid #EF4444;
        color: #EF4444;
        border-radius: 50%;
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        opacity: 1;
        transition: transform 0.2s;
        box-shadow: 0 2px 4px rgba(0,0,0,0.2);
        z-index: 10;
    }
    .image-preview-container:hover .btn-remove-image,
    .detail-image-wrapper:hover .btn-remove-image {
        transform: scale(1.1);
    }
    .btn-remove-image:hover {
        background: #EF4444;
        color: white;
    }

    .detail-images-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
        gap: 12px;
        margin-top: 8px;
    }
    .detail-image-wrapper {
        position: relative;
        cursor: pointer;
        aspect-ratio: 1;
    }
    .detail-image-preview {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 4px;
        border: 1px solid #E5E7EB;
    }
    .detail-image-wrapper:hover .detail-image-preview {
        opacity: 0.9;
    }

    /* Lightbox Styles */
    .lightbox-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.9);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 70;
        animation: fadeIn 0.2s ease-out;
    }
    .lightbox-content {
        position: relative;
        max-width: 90vw;
        max-height: 90vh;
    }
    .lightbox-image {
        max-width: 100%;
        max-height: 90vh;
        object-fit: contain;
        border-radius: 4px;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
    }
    .btn-close-lightbox {
        position: absolute;
        top: -40px;
        right: 0;
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 8px;
    }
    .btn-close-lightbox:hover {
        opacity: 0.8;
    }
    @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
    }

    /* Crop Modal Styles */
    .crop-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 60; /* Higher than normal modal */
    }
    .crop-modal-content {
        background: white;
        padding: 2rem;
        border-radius: 0.5rem;
        width: 90%;
        max-width: 600px;
        box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        height: 80vh;
    }
    .crop-container {
        position: relative;
        flex: 1;
        background: #333;
        margin-bottom: 1rem;
        border-radius: 0.5rem;
        overflow: hidden;
    }
    .zoom-controls {
        padding: 1rem 0;
        display: flex;
        align-items: center;
        gap: 1rem;
    }
    .zoom-range {
        flex: 1;
        accent-color: #3B82F6;
    }
`;