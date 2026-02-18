import React, { useState, useEffect } from 'react';
import { useCinemas, useScreensByCinema } from '@/hooks/use-cinemas';
import { SeatEditor } from './SeatEditor';

interface ScreenSeatManagerProps {
    t: any;
}

export const ScreenSeatManager: React.FC<ScreenSeatManagerProps> = ({ t }) => {
    const [selectedCinemaId, setSelectedCinemaId] = useState<number | null>(null);
    const [selectedScreenId, setSelectedScreenId] = useState<number | null>(null);

    const { data: cinemas, isLoading: isLoadingCinemas } = useCinemas();
    const { data: screens, isLoading: isLoadingScreens } = useScreensByCinema(selectedCinemaId);

    // Reset screen when cinema changes
    // Reset screen when cinema changes - Removed useEffect to avoid set-state-in-effect
    // handle reset in onChange

    const getSelectedScreenName = () => {
        return screens?.find(s => s.id === selectedScreenId)?.name || '';
    };

    return (
        <div className="screen-seat-manager">
            <h4>Quản lý Sơ đồ Ghế</h4>
            <div className="selection-bar">
                <div className="form-group">
                    <label>Chọn Rạp chiếu</label>
                    <select
                        className="form-select"
                        value={selectedCinemaId || ''}
                        onChange={(e) => {
                            setSelectedCinemaId(Number(e.target.value) || null);
                            setSelectedScreenId(null); // Reset screen here
                        }}
                    >
                        <option value="">-- Chọn Rạp --</option>
                        {cinemas?.map(cinema => (
                            <option key={cinema.id} value={cinema.id}>{cinema.name}</option>
                        ))}
                    </select>
                </div>

                <div className="form-group">
                    <label>Chọn Phòng chiếu</label>
                    <select
                        className="form-select"
                        value={selectedScreenId || ''}
                        onChange={(e) => setSelectedScreenId(Number(e.target.value) || null)}
                        disabled={!selectedCinemaId}
                    >
                        <option value="">-- Chọn Phòng --</option>
                        {screens?.map(screen => (
                            <option key={screen.id} value={screen.id}>{screen.name}</option>
                        ))}
                    </select>
                </div>
            </div>

            <div className="editor-area">
                {!selectedCinemaId ? (
                    <div className="placeholder-message">Vui lòng chọn Rạp chiếu để tiếp tục.</div>
                ) : !selectedScreenId ? (
                    <div className="placeholder-message">Vui lòng chọn Phòng chiếu để quản lý ghế.</div>
                ) : (
                    <SeatEditor
                        key={selectedScreenId} // Force re-mount on screen change
                        screenId={selectedScreenId}
                        screenName={getSelectedScreenName()}
                    />
                )}
            </div>

            <style jsx>{`
                .screen-seat-manager {
                    margin-top: 20px;
                    border-top: 1px solid #eee;
                    padding-top: 20px;
                }
                .selection-bar {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 24px;
                    background: #f9f9f9;
                    padding: 16px;
                    border-radius: 8px;
                }
                .form-group {
                    flex: 1;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                    color: #374151;
                }
                .form-select {
                    width: 100%;
                    padding: 8px 12px;
                    border: 1px solid #d1d5db;
                    border-radius: 6px;
                    background-color: white;
                }
                .form-select:disabled {
                    background-color: #f3f4f6;
                    cursor: not-allowed;
                }
                
                .editor-area {
                    min-height: 400px;
                    border: 1px solid #e5e7eb;
                    border-radius: 8px;
                    background: white;
                }
                
                .placeholder-message {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    height: 200px;
                    color: #6b7280;
                    font-style: italic;
                }
            `}</style>
        </div>
    );
};
