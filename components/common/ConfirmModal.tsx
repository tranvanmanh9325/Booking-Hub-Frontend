import React from 'react';

interface ConfirmModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
    title?: string;
    message: string;
    confirmText?: string;
    cancelText?: string;
    isDangerous?: boolean;
}

export const ConfirmModal: React.FC<ConfirmModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
    title = 'Xác nhận',
    message,
    confirmText = 'Đồng ý',
    cancelText = 'Hủy',
    isDangerous = false
}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content confirm-modal">
                <h3 className="modal-title">{title}</h3>
                <p className="modal-message">{message}</p>
                <div className="modal-actions">
                    <button className="btn-cancel" onClick={onClose}>
                        {cancelText}
                    </button>
                    <button
                        className={`btn-confirm ${isDangerous ? 'danger' : 'primary'}`}
                        onClick={() => {
                            onConfirm();
                            onClose();
                        }}
                    >
                        {confirmText}
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
                    background-color: rgba(0, 0, 0, 0.75);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    animation: fadeIn 0.2s ease-out;
                }

                .modal-content {
                    background: #1e293b;
                    padding: 24px;
                    border-radius: 12px;
                    width: 90%;
                    max-width: 400px;
                    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
                    border: 1px solid #334155;
                    color: #fff;
                    animation: slideUp 0.3s ease-out;
                }

                .modal-title {
                    font-size: 1.25rem;
                    font-weight: 600;
                    margin-bottom: 12px;
                    color: #f8fafc;
                }

                .modal-message {
                    color: #cbd5e1;
                    margin-bottom: 24px;
                    line-height: 1.5;
                }

                .modal-actions {
                    display: flex;
                    justify-content: flex-end;
                    gap: 12px;
                }

                button {
                    padding: 8px 16px;
                    border-radius: 6px;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                    border: none;
                    font-size: 0.95rem;
                }

                .btn-cancel {
                    background-color: transparent;
                    color: #94a3b8;
                    border: 1px solid #475569;
                }
                .btn-cancel:hover {
                    background-color: #334155;
                    color: #fff;
                }

                .btn-confirm.primary {
                    background-color: #3b82f6;
                    color: white;
                }
                .btn-confirm.primary:hover {
                    background-color: #2563eb;
                }

                .btn-confirm.danger {
                    background-color: #ef4444;
                    color: white;
                }
                .btn-confirm.danger:hover {
                    background-color: #dc2626;
                }

                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }

                @keyframes slideUp {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};
