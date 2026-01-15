import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useTranslations } from 'next-intl';
import { User } from '../../types/auth';
import { Select } from '../ui/Select';

interface UserEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User | null;
  onSave: (data: Partial<User>) => void;
  isLoading?: boolean;
}

interface FormData {
  fullName: string;
  phone: string;
  role: string;
}

export const UserEditModal: React.FC<UserEditModalProps> = ({
  isOpen,
  onClose,
  user,
  onSave,
  isLoading = false
}) => {
  const t = useTranslations('Users');
  const { register, handleSubmit, reset, setValue, watch } = useForm<FormData>();

  const role = watch('role');

  useEffect(() => {
    if (user) {
      setValue('fullName', user.fullName);
      setValue('phone', user.phone || '');
      setValue('role', user.role || 'USER');
    }
  }, [user, setValue]);

  if (!isOpen) return null;

  const onSubmit = (data: FormData) => {
    onSave(data);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="modal-header">
          <h3>{t('editModal.title')}</h3>
          <button className="close-button" onClick={onClose}>&times;</button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <label>{t('editModal.fullName')}</label>
            <input
              {...register('fullName', { required: true })}
              className="form-input"
              placeholder={t('editModal.placeholderName')}
            />
          </div>

          <div className="form-group">
            <label>{t('editModal.phone')}</label>
            <input
              {...register('phone')}
              className="form-input"
              placeholder={t('editModal.placeholderPhone')}
            />
          </div>

          <div className="form-group">
            <Select
              label={t('editModal.role')}
              value={role}
              onChange={(value) => setValue('role', value)}
              options={[
                { value: 'USER', label: 'User' },
                { value: 'ADMIN', label: 'Admin' },
                { value: 'PARTNER', label: 'Partner' }
              ]}
            />
          </div>

          <div className="modal-actions">
            <button type="button" className="btn-cancel" onClick={onClose} disabled={isLoading}>
              {t('editModal.cancel')}
            </button>
            <button type="submit" className="btn-save" disabled={isLoading}>
              {isLoading ? t('editModal.saving') : t('editModal.save')}
            </button>
          </div>
        </form>
      </div>

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(4px);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          animation: fadeIn 0.2s ease-out;
        }

        .modal-content {
          background: white;
          padding: 32px;
          border-radius: 16px;
          width: 90%;
          max-width: 480px;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
          animation: scalecheck 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }

        @keyframes scalecheck {
            from { transform: scale(0.95); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          border-bottom: 1px solid #f1f5f9;
          padding-bottom: 16px;
        }

        .modal-header h3 {
          margin: 0;
          font-size: 1.25rem;
          color: #1a202c;
        }

        .close-button {
          background: none;
          border: none;
          font-size: 1.5rem;
          cursor: pointer;
          color: #718096;
        }

        .form-group {
          margin-bottom: 16px;
        }

        .form-group label {
          display: block;
          margin-bottom: 8px;
          font-size: 0.875rem;
          font-weight: 500;
          color: #1e293b;
        }

        .form-input {
          width: 100%;
          padding: 10px 14px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 1rem;
          outline: none;
          transition: all 0.2s;
          color: #0f1720;
        }
        
        .form-input:hover {
            border-color: #cbd5e1;
        }

        .form-input:focus {
          border-color: #3b82f6;
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
        }



        .modal-actions {
          display: flex;
          justify-content: flex-end;
          gap: 12px;
          margin-top: 24px;
        }

        .btn-cancel {
          padding: 8px 16px;
          background-color: #f7fafc;
          color: #4a5568;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
        }

        .btn-save {
          padding: 8px 16px;
          background-color: #3182ce;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 500;
          cursor: pointer;
        }

        .btn-save:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .btn-save:hover:not(:disabled) {
          background-color: #2c5282;
        }
      `}</style>
    </div>
  );
};
