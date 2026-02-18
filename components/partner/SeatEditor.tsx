import React, { useState, useEffect, useCallback } from 'react';
import { useGenerateSeats } from '@/hooks/use-screens';
import { ConfirmModal } from '../common/ConfirmModal';
import { toast } from 'react-toastify'; 'react-toastify/dist/ReactToastify.css';
import { apiClient } from '@/lib/api-client';

interface Seat {
    id: number;
    row: string;
    number: number;
    seatType: string;
}

interface SeatCell {
    row: string;
    col: number;
    type: string; // 'STANDARD', 'VIP', 'COUPLE', 'HIDDEN'
    isMerged?: boolean; // For the second slot of a couple seat
    colSpan?: number;   // 2 for couple seat start
}

interface SeatEditorProps {
    screenId: number;
    screenName: string;
    onSaveSuccess?: () => void;
}

export const SeatEditor: React.FC<SeatEditorProps> = ({ screenId, screenName, onSaveSuccess }) => {
    // 1. Configuration Step vs 2. Editor Step
    const [step, setStep] = useState(1);
    const [rowCount, setRowCount] = useState(10);
    const [colCount, setColCount] = useState(12);

    // Grid State
    const [grid, setGrid] = useState<SeatCell[][]>([]);
    const [selectedType, setSelectedType] = useState<string>('STANDARD');

    const generateMutation = useGenerateSeats();

    // Confirmation Modal State
    const [confirmModal, setConfirmModal] = useState({
        isOpen: false,
        message: '',
        onConfirm: () => { }
    });

    const loadSeats = useCallback(async () => {
        try {
            const seats = await apiClient.get<Seat[]>(`/api/v1/screens/${screenId}/seats`);
            if (seats && seats.length > 0) {
                // Determine dimension from existing seats
                const rows = [...new Set(seats.map(s => s.row))].sort();
                const maxCol = Math.max(...seats.map(s => s.number));

                setRowCount(rows.length);
                setColCount(maxCol);

                // Reconstruct grid
                const newGrid: SeatCell[][] = [];
                for (let r = 0; r < rows.length; r++) {
                    const rowCells: SeatCell[] = [];
                    const rowLabel = rows[r];
                    for (let c = 1; c <= maxCol; c++) {
                        const seat = seats.find(s => s.row === rowLabel && s.number === c);
                        // Handle Couple seats merging logic on load? 
                        // Simplified: Just load type. Visual merge logic handles rendering.
                        // Ideally backend should store couple index but for now we assume simple mapping

                        let type = seat ? seat.seatType : 'HIDDEN';

                        // Check if previous cell was COUPLE to merge? 
                        // Actually better to just load raw types first then process grid
                        rowCells.push({
                            row: rowLabel,
                            col: c,
                            type: type
                        });
                    }
                    newGrid.push(rowCells);
                }

                // Post-process grid to handle COUPLE merges visually
                // If we see COUPLE at col i, and it's start of pair... 
                // Using simple logic: A couple seat takes 2 slots. 
                // We need to mark them properly.
                // For simplicity in this version, we trust the usage pattern or just render them as single cells if backend doesn't link them explicitly
                // But let's apply the same merge logic if we detect adjacent COUPLE seats?
                // Or simplified: Just set grid and let user edit.

                // Let's stick to user inputs for now to avoid complexity in reconstruction without explicit metadata

                setGrid(newGrid);
                setStep(2); // Jump to editor
            } else {
                setStep(1); // Go to config
                setGrid([]);
            }
        } catch (error) {
            console.error(error);
            toast.error("Không thể tải dữ liệu ghế");
        }
    }, [screenId]);

    // Load existing seats when screenId changes
    useEffect(() => {
        if (screenId) {
            loadSeats();
        }
    }, [screenId, loadSeats]);

    const handleInitializeGrid = (isQuick: boolean = false) => {
        const newGrid: SeatCell[][] = [];
        for (let r = 0; r < rowCount; r++) {
            const rowCells: SeatCell[] = [];
            const rowLabel = String.fromCharCode(65 + r); // A, B, C...

            // determine row type for quick generate
            let defaultType = 'STANDARD';
            if (isQuick) {
                if (r >= rowCount - 1) defaultType = 'COUPLE'; // Last row
                else if (r >= rowCount - 3) defaultType = 'VIP'; // 2 rows before last
            }

            for (let c = 1; c <= colCount; c++) {
                rowCells.push({
                    row: rowLabel,
                    col: c,
                    type: defaultType
                });
            }
            newGrid.push(rowCells);
        }
        setGrid(newGrid);
        setStep(2);
    };

    const handleCellClick = (rowIndex: number, colIndex: number) => {
        const newGrid = [...grid];
        const row = [...newGrid[rowIndex]];
        const cell = { ...row[colIndex] };

        // If clicking a merged cell (the hidden part of a couple), do nothing or select the parent?
        // Let's ignore clicks on merged slots for simplicity
        if (cell.isMerged) return;

        // Applying new type
        if (selectedType === 'COUPLE') {
            // Logic for couple: needs 2 slots. 
            // Check if next slot is available (not out of bounds)
            if (colIndex + 1 < colCount) {
                // Update current cell
                cell.type = 'COUPLE';
                cell.colSpan = 2;
                cell.isMerged = false;
                row[colIndex] = cell;

                // Update next cell to be merged/hidden
                const nextCell = { ...row[colIndex + 1] };
                nextCell.type = 'COUPLE'; // Keep type info
                nextCell.isMerged = true;
                nextCell.colSpan = 0; // Prevent render
                row[colIndex + 1] = nextCell;
            } else {
                toast.warning("Không đủ chỗ cho ghế đôi ở cuối hàng");
                return;
            }
        } else {
            // If changing FROM Couple TO something else
            // We need to un-merge if it was the start of a couple
            if (cell.type === 'COUPLE' && cell.colSpan === 2) {
                // Reset the NEXT cell standard
                const nextCell = { ...row[colIndex + 1] };
                nextCell.isMerged = false;
                nextCell.colSpan = 1;
                nextCell.type = 'STANDARD'; // Default back to standard or hidden? Standard is safer
                row[colIndex + 1] = nextCell;
            }

            // Apply simple type
            cell.type = selectedType;
            cell.colSpan = 1;
            cell.isMerged = false;
            row[colIndex] = cell;
        }

        newGrid[rowIndex] = row;
        setGrid(newGrid);
    };

    const triggerConfirm = (message: string, action: () => Promise<void>) => {
        setConfirmModal({
            isOpen: true,
            message,
            onConfirm: async () => {
                await action();
                setConfirmModal(prev => ({ ...prev, isOpen: false }));
            }
        });
    };

    const handleSave = async () => {
        triggerConfirm(
            `Bạn có chắc chắn muốn cập nhật sơ đồ ghế cho phòng "${screenName}"?`,
            async () => {
                // Flatten grid and filter out HIDDEN seats and MERGED slots
                const seatsPayload = [];
                for (const row of grid) {
                    for (const cell of row) {
                        if (cell.type !== 'HIDDEN' && !cell.isMerged) {
                            seatsPayload.push({
                                row: cell.row,
                                number: cell.col,
                                type: cell.type
                            });
                        }
                    }
                }

                try {
                    await generateMutation.mutateAsync({
                        screenId,
                        data: {
                            rowCount,
                            colCount,
                            seats: seatsPayload
                        }
                    });
                    toast.success('Cập nhật sơ đồ ghế thành công!');
                    if (onSaveSuccess) onSaveSuccess();

                    // Stay on step 2, reload/refresh?
                    // For now just stay.
                } catch (error) {
                    console.error(error);
                    toast.error('Lỗi khi cập nhật sơ đồ ghế');
                }
            }
        );
    };

    const handleGenerate = async () => {
        triggerConfirm(
            `Bạn có chắc chắn muốn tạo lại ghế cho phòng "${screenName}"? Dữ liệu ghế cũ sẽ bị xóa.`,
            async () => {
                try {
                    await generateMutation.mutateAsync({
                        screenId,
                        data: { rowCount, colCount }
                    });
                    toast.success('Tạo ghế thành công!');
                    loadSeats(); // Reload to reflect changes
                } catch (error) {
                    console.error(error);
                    toast.error('Lỗi khi tạo ghế');
                }
            }
        );
    };

    return (
        <div className="seat-editor-container">
            {step === 1 ? (
                <div className="config-step">
                    <h4>Cấu hình kích thước</h4>
                    <div className="config-form">
                        <div className="form-group">
                            <label>Số hàng ghế (Rows)</label>
                            <input
                                type="number"
                                className="form-input"
                                value={rowCount}
                                onChange={(e) => setRowCount(Math.max(1, parseInt(e.target.value) || 0))}
                            />
                        </div>
                        <div className="form-group">
                            <label>Số ghế mỗi hàng (Columns)</label>
                            <input
                                type="number"
                                className="form-input"
                                value={colCount}
                                onChange={(e) => setColCount(Math.max(1, parseInt(e.target.value) || 0))}
                            />
                        </div>
                    </div>
                    <div className="config-actions">
                        <button className="btn-secondary" onClick={() => handleInitializeGrid(false)}>Tạo lưới trống</button>
                        <button className="btn-primary" onClick={() => handleInitializeGrid(true)}>Tạo nhanh (Có VIP/Couple)</button>
                        <hr />
                        <button className="btn-danger" onClick={handleGenerate}>Tạo tự động & Lưu ngay</button>
                    </div>
                </div>
            ) : (
                <div className="editor-step">
                    <div className="editor-toolbar">
                        <div className="tool-group">
                            <label>Công cụ:</label>
                            <button
                                className={`tool-btn standard ${selectedType === 'STANDARD' ? 'active' : ''}`}
                                onClick={() => setSelectedType('STANDARD')}
                            >
                                Thường
                            </button>
                            <button
                                className={`tool-btn vip ${selectedType === 'VIP' ? 'active' : ''}`}
                                onClick={() => setSelectedType('VIP')}
                            >
                                VIP
                            </button>
                            <button
                                className={`tool-btn couple ${selectedType === 'COUPLE' ? 'active' : ''}`}
                                onClick={() => setSelectedType('COUPLE')}
                            >
                                Đôi (Couple)
                            </button>
                            <button
                                className={`tool-btn hidden-tool ${selectedType === 'HIDDEN' ? 'active' : ''}`}
                                onClick={() => setSelectedType('HIDDEN')}
                            >
                                Xóa (Lối đi)
                            </button>
                        </div>
                        <div className="action-group">
                            <button className="btn-reset" onClick={() => setStep(1)}>Cấu hình lại</button>
                            <button className="btn-save" onClick={handleSave}>Lưu thay đổi</button>
                        </div>
                    </div>

                    <div className="screen-indicator">MÀN HÌNH</div>

                    <div className="grid-container">
                        <div className="seat-grid" style={{ gridTemplateColumns: `auto repeat(${colCount}, 32px)` }}>
                            {/* Column Numbers */}
                            <div className="corner-space"></div>
                            {Array.from({ length: colCount }).map((_, i) => (
                                <div key={i} className="col-label">{i + 1}</div>
                            ))}

                            {/* Rows */}
                            {grid.map((row, rIndex) => (
                                <React.Fragment key={rIndex}>
                                    <div className="row-label">{row[0].row}</div>
                                    {row.map((cell, cIndex) => {
                                        if (cell.isMerged) return null; // Skip rendering merged slot

                                        return (
                                            <div
                                                key={`${rIndex}-${cIndex}`}
                                                className={`seat-cell ${cell.type.toLowerCase()}`}
                                                onClick={() => handleCellClick(rIndex, cIndex)}
                                                style={{
                                                    gridColumn: cell.colSpan && cell.colSpan > 1 ? `span ${cell.colSpan}` : undefined
                                                }}
                                            >
                                                {cell.type !== 'HIDDEN' && (
                                                    <span className="seat-number">{cell.col}</span>
                                                )}
                                            </div>
                                        );
                                    })}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>

                    <div className="legend">
                        <div className="legend-item"><span className="seat-cell standard"></span> Thường</div>
                        <div className="legend-item"><span className="seat-cell vip"></span> VIP</div>
                        <div className="legend-item"><span className="seat-cell couple"></span> Couple</div>
                    </div>
                </div>
            )}

            <ConfirmModal
                isOpen={confirmModal.isOpen}
                onClose={() => setConfirmModal(prev => ({ ...prev, isOpen: false }))}
                onConfirm={confirmModal.onConfirm}
                message={confirmModal.message}
                title="Xác nhận thay đổi"
                confirmText="Xác nhận"
                cancelText="Hủy bỏ"
            />

            <style jsx>{`
                .seat-editor-container {
                    padding: 20px;
                }
                .config-form {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                    margin-bottom: 24px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 8px;
                    font-weight: 500;
                }
                .form-input {
                    width: 100%;
                    padding: 8px 12px;
                    border: 1px solid #e2e8f0;
                    border-radius: 6px;
                }
                .config-actions {
                    display: flex;
                    gap: 12px;
                    flex-wrap: wrap;
                }
                
                .editor-toolbar {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                    background: #f8fafc;
                    padding: 12px;
                    border-radius: 8px;
                    border: 1px solid #e2e8f0;
                }
                .tool-group {
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .tool-btn {
                    padding: 6px 12px;
                    border: 1px solid #cbd5e1;
                    border-radius: 6px;
                    cursor: pointer;
                    font-weight: 500;
                    transition: all 0.2s;
                }
                .tool-btn.active {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.2);
                    transform: translateY(-1px);
                }
                .tool-btn.standard { background-color: #64748b; color: white; }
                .tool-btn.vip { background-color: #eab308; color: white; }
                .tool-btn.couple { background-color: #ec4899; color: white; }
                .tool-btn.hidden-tool { background-color: #f1f5f9; color: #64748b; border-style: dashed; }

                .action-group {
                    display: flex;
                    gap: 8px;
                }

                .grid-container {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 24px;
                    overflow-x: auto;
                    padding-bottom: 12px;
                }
                .screen-indicator {
                    width: 80%;
                    height: 8px;
                    background: linear-gradient(to right, transparent, #cbd5e1, transparent);
                    margin: 0 auto 40px;
                    text-align: center;
                    color: #94a3b8;
                    font-size: 0.8rem;
                    position: relative;
                }
                .seat-grid {
                    display: grid;
                    column-gap: 8px; /* Fixed gap between columns */
                    row-gap: 8px;
                    align-items: center;
                }
                .col-label, .row-label {
                    color: #94a3b8;
                    font-weight: 600;
                    text-align: center;
                    font-size: 0.8rem;
                }
                .col-label { height: 24px; }
                .row-label { width: 24px; }

                .seat-cell {
                    width: 100%; /* Fill the grid track */
                    height: 32px;
                    border-radius: 6px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.75rem;
                    color: white;
                    cursor: pointer;
                    transition: transform 0.1s;
                    user-select: none;
                }
                .seat-cell:hover { transform: scale(1.1); z-index: 10; }
                .seat-cell.standard { background-color: #64748b; }
                .seat-cell.vip { background-color: #eab308; }
                .seat-cell.couple { background-color: #ec4899; }
                .seat-cell.hidden { 
                    background-color: transparent; 
                    border: 1px dashed #cbd5e1; 
                    color: transparent;
                }

                .legend {
                    display: flex;
                    justify-content: center;
                    gap: 16px;
                    margin-top: 20px;
                    font-size: 0.9rem;
                    color: #475569;
                }
                .legend-item { display: flex; align-items: center; gap: 8px; }
                .legend-item .seat-cell { width: 20px; height: 20px; }

                .btn-primary, .btn-secondary, .btn-danger, .btn-save, .btn-reset {
                    padding: 8px 16px;
                    border-radius: 6px;
                    font-weight: 500;
                    border: none;
                    cursor: pointer;
                }
                .btn-primary { background: #3b82f6; color: white; }
                .btn-secondary { background: #f1f5f9; color: #475569; }
                .btn-danger { background: #ef4444; color: white; }
                .btn-save { background: #10b981; color: white; }
                .btn-reset { background: transparent; color: #64748b; border: 1px solid #cbd5e1; }
            `}</style>
        </div>
    );
};
