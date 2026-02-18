import React from 'react';
import { modalStyles } from './ContentModalStyles';
import { SeatEditor } from './SeatEditor';

interface SeatManagerModalProps {
    isOpen: boolean;
    onClose: () => void;
    screenId: number;
    screenName: string;
    t: any;
}

export const SeatManagerModal: React.FC<SeatManagerModalProps> = ({
    isOpen,
    onClose,
    screenId,
    screenName,
    t
}) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content seat-modal">
                <div className="modal-header">
                    <h3>Quản lý sơ đồ ghế: {screenName}</h3>
                    <button className="close-btn" onClick={onClose}>&times;</button>
                </div>

                <div className="modal-body">
                    <SeatEditor
                        screenId={screenId}
                        screenName={screenName}
                        onSaveSuccess={onClose}
                    />
                </div>
            </div>

            <style jsx>{modalStyles}</style>
            <style jsx>{`
                .seat-modal {
                    max-width: 900px;
                    width: 95%;
                    max-height: 90vh;
                    overflow-y: auto;
                    padding: 0;
                }
                .modal-header {
                    padding: 20px 24px;
                    border-bottom: 1px solid #e2e8f0;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }
                .modal-header h3 { margin: 0; font-size: 1.25rem; }
                .close-btn {
                    background: none;
                    border: none;
                    font-size: 1.5rem;
                    cursor: pointer;
                    color: #64748b;
                }
                .close-btn:hover {
                    color: #ef4444;
                }
                .modal-body {
                    padding: 0;
                }
            `}</style>
        </div>
    );
};
