import React from 'react';
import { useTranslations } from 'next-intl';

interface DeleteConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  isLoading?: boolean;
}

export const DeleteConfirmationModal: React.FC<DeleteConfirmationModalProps> = ({
  isOpen,
  onClose,
  onConfirm,
  isLoading = false,
}) => {
  const t = useTranslations('Users');
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h3 className="modal-title">{t('deleteModal.title')}</h3>
        <p className="modal-message">{t('deleteModal.message')}</p>

        <div className="modal-actions">
          <button className="btn-cancel" onClick={onClose} disabled={isLoading}>
            {t('deleteModal.cancel')}
          </button>
          <button className="btn-delete" onClick={onConfirm} disabled={isLoading}>
            {isLoading ? t('deleteModal.deleting') : t('deleteModal.confirm')}
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

        .btn-delete {
          padding: 8px 24px;
          background-color: #EF4444;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }

        .btn-delete:hover {
            background-color: #DC2626;
        }

        .btn-delete:disabled, .btn-cancel:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }
      `}</style>
    </div>
  );
};
