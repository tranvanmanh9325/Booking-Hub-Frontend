import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { User } from '../../types/auth';

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
    const { register, handleSubmit, reset, setValue } = useForm<FormData>();

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
                    <h3>Chỉnh sửa tài khoản</h3>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>

                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                        <label>Họ và tên</label>
                        <input
                            {...register('fullName', { required: true })}
                            className="form-input"
                            placeholder="Nhập họ và tên"
                        />
                    </div>

                    <div className="form-group">
                        <label>Số điện thoại</label>
                        <input
                            {...register('phone')}
                            className="form-input"
                            placeholder="Nhập số điện thoại"
                        />
                    </div>

                    <div className="form-group">
                        <label>Vai trò</label>
                        <select {...register('role')} className="form-select">
                            <option value="USER">User</option>
                            <option value="ADMIN">Admin</option>
                            <option value="PARTNER">Partner</option>
                        </select>
                    </div>

                    <div className="modal-actions">
                        <button type="button" className="btn-cancel" onClick={onClose} disabled={isLoading}>
                            Hủy
                        </button>
                        <button type="submit" className="btn-save" disabled={isLoading}>
                            {isLoading ? 'Đang lưu...' : 'Lưu thay đổi'}
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
          width: 100%;
          max-width: 500px;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .modal-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 20px;
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
          color: #4a5568;
        }

        .form-input, .form-select {
          width: 100%;
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 1rem;
          outline: none;
          transition: border-color 0.2s;
        }

        .form-input:focus, .form-select:focus {
          border-color: #3182ce;
          box-shadow: 0 0 0 1px #3182ce;
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
