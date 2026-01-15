import React, { useState, useCallback } from 'react';
import Cropper from 'react-easy-crop';
import { Button } from './Button';
import getCroppedImg from '../../utils/cropImage';

interface ImageCropperProps {
    imageSrc: string;
    onCancel: () => void;
    onSave: (croppedImageBlob: Blob) => void;
}

export const ImageCropper: React.FC<ImageCropperProps> = ({ imageSrc, onCancel, onSave }) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);

    const onCropComplete = useCallback((croppedArea: any, croppedAreaPixels: any) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleSave = async () => {
        try {
            const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels);
            if (croppedImage) {
                onSave(croppedImage);
            }
        } catch (e) {
            console.error(e);
        }
    };

    return (
        <div className="cropper-modal">
            <div className="cropper-container">
                <div className="cropper-wrapper">
                    <Cropper
                        image={imageSrc}
                        crop={crop}
                        zoom={zoom}
                        aspect={1}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                        cropShape="round"
                        showGrid={false}
                    />
                </div>
                <div className="controls">
                    <div className="slider-container">
                        <span className="slider-label">Zoom:</span>
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
                    <div className="buttons">
                        <Button variant="outline" onClick={onCancel}>Hủy</Button>
                        <Button onClick={handleSave}>Lưu</Button>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .cropper-modal {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: rgba(0, 0, 0, 0.6);
                    z-index: 1000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .cropper-container {
                    background: white;
                    border-radius: 16px;
                    width: 90%;
                    max-width: 500px;
                    overflow: hidden;
                    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.15);
                }

                .cropper-wrapper {
                    position: relative;
                    height: 300px;
                    background: #333;
                }

                .controls {
                    padding: 24px;
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .slider-container {
                    display: flex;
                    align-items: center;
                    gap: 16px;
                }

                .slider-label {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: #475569;
                }

                .zoom-range {
                    flex: 1;
                    accent-color: #2563EB;
                    cursor: pointer;
                }

                .buttons {
                    display: flex;
                    justify-content: flex-end;
                    gap: 12px;
                }
            `}</style>
        </div>
    );
};