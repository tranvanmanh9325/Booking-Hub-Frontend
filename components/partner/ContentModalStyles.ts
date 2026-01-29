export const modalStyles = `
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

    /* Price Input Styles */
    .price-input-wrapper {
        position: relative;
        width: 100%;
    }
    .price-input-wrapper .form-input {
        padding-right: 3.5rem; /* Space for VNĐ */
        width: 100%;
    }
    .price-suffix {
        position: absolute;
        top: 50%;
        right: 1rem;
        transform: translateY(-50%);
        color: #6B7280;
        font-weight: 500;
        pointer-events: none;
        font-size: 0.9rem;
        z-index: 10;
        line-height: 1;
    }
`;