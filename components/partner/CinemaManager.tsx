import React, { useState } from 'react';
import { useCinemas, useCreateCinema, useUpdateCinema, useDeleteCinema, Cinema } from '../../hooks/use-cinemas';
import { toast } from 'react-toastify';
import { ConfirmationModal } from '../common/ConfirmationModal';

interface CinemaManagerProps {
    t: any;
}

export const CinemaManager: React.FC<CinemaManagerProps> = ({ t }) => {
    const { data: cinemas, isLoading } = useCinemas();
    const createMutation = useCreateCinema();
    const updateMutation = useUpdateCinema();
    const deleteMutation = useDeleteCinema();

    const [isEditing, setIsEditing] = useState(false);
    const [selectedCinema, setSelectedCinema] = useState<Cinema | null>(null);
    const [formData, setFormData] = useState<Partial<Cinema>>({
        name: '',
        address: '',
        ward: '',
        city: '',
        facilities: '',
        phoneNumber: ''
    });

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [cinemaToDeleteId, setCinemaToDeleteId] = useState<number | null>(null);

    const resetForm = () => {
        setFormData({
            name: '',
            address: '',
            ward: '',
            city: '',
            facilities: '',
            phoneNumber: ''
        });
        setSelectedCinema(null);
        setIsEditing(false);
    };

    const handleEdit = (cinema: Cinema) => {
        setSelectedCinema(cinema);
        setFormData({
            name: cinema.name,
            address: cinema.address,
            ward: cinema.ward || '',
            city: cinema.city,
            facilities: cinema.facilities || '',
            phoneNumber: cinema.phoneNumber || ''
        });
        setIsEditing(true);
    };

    const handleDelete = (id: number) => {
        setCinemaToDeleteId(id);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (cinemaToDeleteId) {
            try {
                await deleteMutation.mutateAsync(cinemaToDeleteId);
                toast.success('Đã xóa rạp thành công');
            } catch (error) {
                console.error(error);
                toast.error('Lỗi khi xóa rạp');
            } finally {
                setIsDeleteModalOpen(false);
                setCinemaToDeleteId(null);
            }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            if (isEditing && selectedCinema) {
                await updateMutation.mutateAsync({
                    id: selectedCinema.id,
                    data: formData
                });
                toast.success('Cập nhật rạp thành công');
            } else {
                await createMutation.mutateAsync({
                    name: formData.name!,
                    address: formData.address!,
                    ward: formData.ward!,
                    city: formData.city!,
                    facilities: formData.facilities || '',
                    phoneNumber: formData.phoneNumber || '',
                } as any);
                toast.success('Thêm rạp mới thành công');
            }
            resetForm();
        } catch (error) {
            console.error(error);
            toast.error(isEditing ? 'Lỗi khi cập nhật rạp' : 'Lỗi khi thêm rạp');
        }
    };

    return (
        <div className="cinema-manager">
            <h4>Quản lý Rạp chiếu</h4>

            <div className="manager-layout">
                {/* Form */}
                <div className="manager-form">
                    <h5>{isEditing ? 'Cập nhật thông tin' : 'Thêm rạp mới'}</h5>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label>Tên rạp</label>
                            <input
                                className="form-input"
                                value={formData.name}
                                onChange={e => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Địa chỉ</label>
                            <input
                                className="form-input"
                                value={formData.address}
                                onChange={e => setFormData({ ...formData, address: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Xã/Phường</label>
                            <input
                                className="form-input"
                                value={formData.ward}
                                onChange={e => setFormData({ ...formData, ward: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Tỉnh</label>
                            <input
                                className="form-input"
                                value={formData.city}
                                onChange={e => setFormData({ ...formData, city: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Số điện thoại</label>
                            <input
                                className="form-input"
                                value={formData.phoneNumber}
                                onChange={e => setFormData({ ...formData, phoneNumber: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label>Tiện ích (Các tiện ích cách nhau bởi dấu phẩy)</label>
                            <input
                                className="form-input"
                                value={formData.facilities}
                                onChange={e => setFormData({ ...formData, facilities: e.target.value })}
                                placeholder="Ví dụ: WiFi, IMAX, 4DX"
                            />
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
                    <h5>Danh sách Rạp</h5>
                    {isLoading ? (
                        <p>Đang tải...</p>
                    ) : (
                        <div className="list-container">
                            {cinemas?.map(cinema => (
                                <div key={cinema.id} className={`list-item ${selectedCinema?.id === cinema.id ? 'active' : ''}`}>
                                    <div className="item-info">
                                        <span className="item-name">{cinema.name}</span>
                                        <span className="item-sub">
                                            {cinema.address}, {cinema.ward ? `${cinema.ward}, ` : ''}{cinema.city}
                                        </span>
                                    </div>
                                    <div className="item-actions">
                                        <button className="btn-edit-icon" onClick={() => handleEdit(cinema)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
                                        </button>
                                        <button className="btn-delete-icon" onClick={() => handleDelete(cinema.id)}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Xác nhận xóa"
                message="Bạn có chắc chắn muốn xóa rạp này? Các phòng chiếu và suất chiếu liên quan cũng sẽ bị ảnh hưởng."
                confirmText="Xóa"
                cancelText="Hủy"
                isDelete={true}
                isLoading={deleteMutation.isPending}
            />

            <style jsx>{`
                .cinema-manager {
                    margin-top: 20px;
                    border-top: 1px solid #eee;
                    padding-top: 20px;
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
            `}</style>
        </div>
    );
};