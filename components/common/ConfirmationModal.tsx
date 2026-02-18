import React from 'react';

interface ConfirmationModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    isLoading?: boolean;
    isDelete?: boolean;
}

export const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title,
    message,
    confirmText = 'Xác nhận',
    cancelText = 'Hủy',
    isLoading = false,
    isDelete = false,
}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <h3 className="modal-title">{title}</h3>
                <p className="modal-message">{message}</p>

                <div className="modal-actions">
                    <button className="btn-cancel" onClick={onClose} disabled={isLoading}>
                        {cancelText}
                    </button>
                    <button
                        className={`btn-confirm ${isDelete ? 'btn-delete' : ''}`}
                        onClick={onConfirm}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Đang xử lý...' : confirmText}
                    </button>
                </div>
            </div>

            <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }

        .modal-content {
          background: white;
          padding: 24px;
          border-radius: 12px;
          width: 90%;
          max-width: 400px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
          text-align: center;
        }

        .modal-title {
            margin-top: 0;
            margin-bottom: 12px;
            font-size: 1.25rem;
            color: #1a202c;
            font-weight: 600;
        }

        .modal-message {
            color: #4a5568;
            margin-bottom: 24px;
            line-height: 1.5;
        }

        .modal-actions {
          display: flex;
          justify-content: center;
          gap: 12px;
        }

        .btn-cancel {
          padding: 8px 24px;
          background-color: #f7fafc;
          color: #4a5568;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-cancel:hover {
            background-color: #edf2f7;
        }

        .btn-confirm {
          padding: 8px 24px;
          background-color: #3B82F6;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-confirm:hover {
            background-color: #2563EB;
        }

        .btn-confirm.btn-delete {
            background-color: #EF4444;
        }

        .btn-confirm.btn-delete:hover {
            background-color: #DC2626;
        }

        .btn-confirm:disabled, .btn-cancel:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
        </div>
    );
};