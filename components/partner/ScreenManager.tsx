import React, { useState } from 'react';
import { useCinemas, useScreensByCinema, useCreateScreen, useUpdateScreen, useDeleteScreen } from '../../hooks/use-cinemas';
import { Screen } from '../../types/screen';
import { toast } from 'react-toastify';
import { ConfirmationModal } from '../common/ConfirmationModal';

interface ScreenManagerProps {
    t: any;
}

export const ScreenManager: React.FC<ScreenManagerProps> = ({ t }) => {
    const { data: cinemas } = useCinemas();
    const [selectedCinemaId, setSelectedCinemaId] = useState<number | null>(null);
    const { data: screens, isLoading: isLoadingScreens } = useScreensByCinema(selectedCinemaId);

    const createMutation = useCreateScreen();
    const updateMutation = useUpdateScreen();
    const deleteMutation = useDeleteScreen();

    const [isEditing, setIsEditing] = useState(false);
    const [selectedScreen, setSelectedScreen] = useState<Screen | null>(null);
    const [formData, setFormData] = useState<Partial<Screen>>({
        name: '',
        screenType: '2D', // Default type
        capacity: 0,
        cinemaId: undefined
    });

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [screenToDeleteId, setScreenToDeleteId] = useState<number | null>(null);

    const resetForm = () => {
        setFormData({
            name: '',
            screenType: '2D',
            capacity: 0,
            cinemaId: selectedCinemaId || undefined
        });
        setSelectedScreen(null);
        setIsEditing(false);
    };

    const handleEdit = (screen: Screen) => {
        setSelectedScreen(screen);
        setFormData({
            name: screen.name,
            screenType: screen.screenType,
            capacity: screen.capacity,
            cinemaId: screen.cinemaId
        });
        setIsEditing(true);
    };

    const handleDelete = (id: number) => {
        setScreenToDeleteId(id);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (screenToDeleteId && selectedCinemaId) {
            try {
                await deleteMutation.mutateAsync({ id: screenToDeleteId, cinemaId: selectedCinemaId });
                toast.success('Đã xóa phòng chiếu thành công');
            } catch (error) {
                console.error(error);
                toast.error('Lỗi khi xóa phòng chiếu');
            } finally {
                setIsDeleteModalOpen(false);
                setScreenToDeleteId(null);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (!selectedCinemaId) {
                toast.error('Vui lòng chọn rạp chiếu trước');
                return;
            }

            if (isEditing && selectedScreen) {
                await updateMutation.mutateAsync({
                    id: selectedScreen.id,
                    data: { ...formData, cinemaId: selectedCinemaId } // Ensure cinemaId is set
                });
                toast.success('Cập nhật phòng chiếu thành công');
            } else {
                await createMutation.mutateAsync({
                    name: formData.name!,
                    screenType: formData.screenType!,
                    capacity: formData.capacity || 0,
                    cinemaId: selectedCinemaId
                } as any);
                toast.success('Thêm phòng chiếu mới thành công');
            }
            resetForm();
        } catch (error) {
            console.error(error);
            toast.error(isEditing ? 'Lỗi khi cập nhật phòng chiếu' : 'Lỗi khi thêm phòng chiếu');
        }
    };

    return (
        <div className="screen-manager">
            <h4>Quản lý Phòng chiếu</h4>

            <div className="filter-section">
                <label>Chọn Rạp chiếu:</label>
                <select
                    className="form-input"
                    value={selectedCinemaId || ''}
                    onChange={e => {
                        const val = Number(e.target.value);
                        setSelectedCinemaId(val || null);
                        resetForm(); // Reset form when changing cinema
                    }}
                >
                    <option value="">-- Chọn rạp --</option>
                    {cinemas?.map(c => (
                        <option key={c.id} value={c.id}>{c.name}</option>
                    ))}
                </select>
            </div>

            {selectedCinemaId && (
                <div className="manager-layout">
                    {/* Form */}
                    <div className="manager-form">
                        <h5>{isEditing ? 'Cập nhật phòng chiếu' : 'Thêm phòng chiếu mới'}</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Tên phòng</label>
                                <input
                                    className="form-input"
                                    value={formData.name}
                                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    placeholder="Ví dụ: Phòng 01"
                                />
                            </div>
                            <div className="form-group">
                                <label>Loại phòng</label>
                                <select
                                    className="form-input"
                                    value={formData.screenType}
                                    onChange={e => setFormData({ ...formData, screenType: e.target.value })}
                                >
                                    <option value="2D">2D</option>
                                    <option value="3D">3D</option>
                                    <option value="IMAX">IMAX</option>
                                    <option value="4DX">4DX</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label>Sức chứa (Ghế)</label>
                                <input
                                    type="number"
                                    className="form-input"
                                    value={formData.capacity}
                                    onChange={e => setFormData({ ...formData, capacity: Number(e.target.value) })}
                                    disabled // Capacity is managed by seat layout
                                    placeholder="Tự động tính từ sơ đồ ghế"
                                />
                                <small style={{ color: '#666' }}>Sức chứa được cập nhật tự động khi tạo sơ đồ ghế.</small>
                            </div>

                            <div className="form-actions">
                                {isEditing && (
                                    <button type="button" className="btn-cancel" onClick={resetForm}>Hủy</button>
                                )}
                                <button type="submit" className="btn-save" disabled={createMutation.isPending || updateMutation.isPending}>
                                    {isEditing ? 'Lưu thay đổi' : 'Thêm mới'}
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* List */}
                    <div className="manager-list">
                        <h5>Danh sách Phòng chiếu</h5>
                        {isLoadingScreens ? (
                            <p>Đang tải...</p>
                        ) : (
                            <div className="list-container">
                                {screens?.length === 0 && <p className="empty-state">Chưa có phòng chiếu nào.</p>}
                                {screens?.map(screen => (
                                    <div key={screen.id} className={`list-item ${selectedScreen?.id === screen.id ? 'active' : ''}`}>
                                        <div className="item-info">
                                            <span className="item-name">{screen.name}</span>
                                            <span className="item-sub">{screen.screenType} • {screen.capacity} ghế</span>
                                        </div>
                                        <div className="item-actions">
                                            <button className="btn-edit-icon" onClick={() => handleEdit(screen)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                            </button>
                                            <button className="btn-delete-icon" onClick={() => handleDelete(screen.id)}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                            </button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {!selectedCinemaId && (
                <div className="select-prompt">
                    <p>Vui lòng chọn Rạp chiếu để quản lý phòng chiếu.</p>
                </div>
            )}

            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Xác nhận xóa"
                message="Bạn có chắc chắn muốn xóa phòng chiếu này? Các ghế và suất chiếu liên quan cũng sẽ bị xóa."
                confirmText="Xóa"
                cancelText="Hủy"
                isDelete={true}
                isLoading={deleteMutation.isPending}
            />

            <style jsx>{`
                .screen-manager {
                    margin-top: 20px;
                    border-top: 1px solid #eee;
                    padding-top: 20px;
                }
                .filter-section {
                    margin-bottom: 20px;
                }
                .select-prompt {
                    text-align: center;
                    padding: 40px;
                    color: #666;
                    background: #f9f9f9;
                    border-radius: 8px;
                }
                .manager-layout {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 20px;
                }
                @media (max-width: 768px) {
                    .manager-layout {
                        grid-template-columns: 1fr;
                    }
                }
                .manager-form {
                    padding: 15px;
                    background: #f9f9f9;
                    border-radius: 8px;
                }
                .form-group {
                    margin-bottom: 12px;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 5px;
                    font-weight: 500;
                    font-size: 0.9em;
                }
                .form-input {
                    width: 100%;
                    padding: 8px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                }
                .form-actions {
                    display: flex;
                    gap: 10px;
                    margin-top: 15px;
                }
                .btn-save {
                    background-color: #3B82F6;
                    color: white;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-weight: 500;
                    flex: 1;
                }
                .btn-save:hover {
                    background-color: #2563EB;
                }
                .btn-cancel {
                    background-color: #E5E7EB;
                    color: #374151;
                    border: none;
                    padding: 8px 16px;
                    border-radius: 4px;
                    cursor: pointer;
                    font-weight: 500;
                }
                .btn-cancel:hover {
                    background-color: #D1D5DB;
                }
                .manager-list {
                    border: 1px solid #ddd;
                    border-radius: 8px;
                    display: flex;
                    flex-direction: column;
                    max-height: 500px;
                }
                .manager-list h5 {
                    padding: 15px;
                    margin: 0;
                    border-bottom: 1px solid #ddd;
                    background: #f9f9f9;
                    border-radius: 8px 8px 0 0;
                }
                .list-container {
                    overflow-y: auto;
                    flex: 1;
                    padding: 10px;
                }
                .list-item {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    padding: 10px;
                    border-bottom: 1px solid #eee;
                    transition: background 0.2s;
                }
                .list-item:last-child {
                    border-bottom: none;
                }
                .list-item:hover {
                    background-color: #f0f9ff;
                }
                .list-item.active {
                    background-color: #e0f2fe;
                    border-left: 3px solid #3B82F6;
                }
                .item-info {
                    display: flex;
                    flex-direction: column;
                }
                .item-name {
                    font-weight: 600;
                    color: #111827;
                }
                .item-sub {
                    font-size: 0.8em;
                    color: #6B7280;
                }
                .item-actions {
                    display: flex;
                    gap: 5px;
                }
                .btn-edit-icon {
                    background: none;
                    border: none;
                    color: #3B82F6;
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 4px;
                }
                .btn-edit-icon:hover {
                    background-color: #DBEAFE;
                }
                .btn-delete-icon {
                    background: none;
                    border: none;
                    color: #EF4444;
                    cursor: pointer;
                    padding: 4px;
                    border-radius: 4px;
                }
                .btn-delete-icon:hover {
                    background-color: #FEE2E2;
                }
                .empty-state {
                    padding: 20px;
                    text-align: center;
                    color: #888;
                }
            `}</style>
        </div>
    );
};