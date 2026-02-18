import React, { useState } from 'react';

import { useShowtimesByContent, useCreateShowtime, useDeleteShowtime, useUpdateShowtime } from '../../hooks/use-showtimes';
import { useCinemas, useScreensByCinema } from '../../hooks/use-cinemas';
import { toast } from 'react-toastify';
import DatePicker, { registerLocale } from 'react-datepicker';
import { vi } from 'date-fns/locale';
import { format } from 'date-fns';
import { ConfirmationModal } from '../common/ConfirmationModal';
import { Showtime } from '../../types/showtime';

registerLocale('vi', vi);

interface ShowtimeManagerProps {
    contentId: number;
    t?: any;
}

export const ShowtimeManager: React.FC<ShowtimeManagerProps> = ({ contentId, t }) => {
    const { data: showtimes, isLoading } = useShowtimesByContent(contentId);

    // Fetch cinemas for dropdown
    const { data: cinemas } = useCinemas();

    const createMutation = useCreateShowtime();
    const deleteMutation = useDeleteShowtime();
    const updateMutation = useUpdateShowtime();

    const [selectedCinemaId, setSelectedCinemaId] = useState<string>('');
    const [selectedScreenId, setSelectedScreenId] = useState<string>('');

    // Fetch screens based on selected cinema
    const { data: screens } = useScreensByCinema(selectedCinemaId ? Number(selectedCinemaId) : null);

    const [startTime, setStartTime] = useState('');
    const [endTime, setEndTime] = useState('');
    const [price, setPrice] = useState('85000');
    const [repeatUntilDate, setRepeatUntilDate] = useState('');
    const [editingShowtimeId, setEditingShowtimeId] = useState<number | null>(null);

    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [showtimeToDeleteId, setShowtimeToDeleteId] = useState<number | null>(null);




    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!selectedCinemaId || !selectedScreenId || !startTime || !endTime || !price) {
            toast.error('Vui lòng điền đầy đủ thông tin');
            return;
        }

        const cinema = cinemas?.find(c => c.id === Number(selectedCinemaId));
        const screen = screens?.find(s => s.id === Number(selectedScreenId));

        if (!cinema || !screen) {
            toast.error('Dữ liệu rạp/phòng không hợp lệ');
            return;
        }

        try {
            if (editingShowtimeId) {
                // Update mode
                await updateMutation.mutateAsync({
                    id: editingShowtimeId,
                    data: {
                        contentId,
                        cinemaName: cinema.name, // Keep existing fields for compatibility
                        cinemaAddress: cinema.address,
                        screenName: screen.name,
                        cinemaId: Number(selectedCinemaId),
                        screenId: Number(selectedScreenId),
                        startTime: startTime,
                        endTime: endTime,
                        price: Number(price),
                        repeatUntilDate: repeatUntilDate || undefined
                    }
                });
                setEditingShowtimeId(null);
            } else {
                // Create mode
                await createMutation.mutateAsync({
                    contentId,
                    cinemaName: cinema.name,
                    cinemaAddress: cinema.address,
                    screenName: screen.name,
                    cinemaId: Number(selectedCinemaId),
                    screenId: Number(selectedScreenId),
                    startTime: startTime,
                    endTime: endTime,
                    price: Number(price),
                    repeatUntilDate: repeatUntilDate || undefined
                });
            }

            // Reset form
            resetForm();
        } catch (error) {
            console.error(error);
            toast.error(editingShowtimeId ? 'Lỗi khi cập nhật suất chiếu' : 'Lỗi khi thêm suất chiếu');
        }
    };

    const resetForm = () => {
        setStartTime('');
        setEndTime('');
        setRepeatUntilDate('');

        // Reset selections only if not editing to avoid clearing during edit transition logic if called elsewhere
        // But here it is called after submit, so clear all.
        if (editingShowtimeId) {
            setEditingShowtimeId(null);
        }
        setSelectedCinemaId('');
        setSelectedScreenId('');
        setPrice('85000');
    };

    const startEdit = (showtime: Showtime) => {
        setEditingShowtimeId(showtime.id);

        // We need to set cinema ID and screen ID.
        // Assuming showtime object has these IDs. If not (legacy data), we might have issues.
        // The type definition showed cinemaId and screenId, so we should be good.
        if (showtime.cinemaId) {
            setSelectedCinemaId(showtime.cinemaId.toString());
        }
        if (showtime.screenId) {
            // We set this, but screens might not be loaded yet if cinema just changed.
            // React Query will fetch screens when cinemaId changes.
            // We might need a useEffect to set screenId once screens are loaded if we want to be safe, 
            // but usually setting state works if the select value matches an option that appears later.
            setSelectedScreenId(showtime.screenId.toString());
        }

        setStartTime(showtime.startTime);
        setEndTime(showtime.endTime);
        setPrice(showtime.price.toString());
        setRepeatUntilDate('');

        // Scroll to form
        document.querySelector('.add-showtime-form')?.scrollIntoView({ behavior: 'smooth' });
    };

    const cancelEdit = () => {
        resetForm();
    };

    const handleDelete = (id: number) => {
        setShowtimeToDeleteId(id);
        setIsDeleteModalOpen(true);
    };

    const confirmDelete = async () => {
        if (showtimeToDeleteId) {
            try {
                await deleteMutation.mutateAsync(showtimeToDeleteId);
                toast.success('Đã xóa suất chiếu thành công');
            } catch (error) {
                console.error(error);
                toast.error('Lỗi khi xóa suất chiếu');
            } finally {
                setIsDeleteModalOpen(false);
                setShowtimeToDeleteId(null);
            }
        }
    };

    // Format date for display
    const formatDate = (dateStr: string) => {
        if (!dateStr) return '';
        return format(new Date(dateStr), 'HH:mm dd/MM/yyyy');
    };

    const formatPriceInput = (value: string) => {
        // Remove non-digits
        const number = value.replace(/\D/g, '');
        // Format with spaces
        return number.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
    };

    return (
        <div className="showtime-manager">
            <h4>Quản lý Suất chiếu</h4>

            {/* Form thêm/sửa suất chiếu */}
            <div className="add-showtime-form">
                <h5>{editingShowtimeId ? 'Cập nhật suất chiếu' : 'Thêm suất chiếu mới'}</h5>
                <form onSubmit={handleSubmit} className="grid-form">
                    <div className="form-group">
                        <label>Rạp chiếu</label>
                        <select
                            className="form-input"
                            value={selectedCinemaId}
                            onChange={(e) => {
                                setSelectedCinemaId(e.target.value);
                                setSelectedScreenId(''); // Reset screen when cinema changes
                            }}
                            required
                        >
                            <option value="">-- Chọn rạp chiếu --</option>
                            {cinemas?.map((cinema) => (
                                <option key={cinema.id} value={cinema.id}>
                                    {cinema.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Phòng chiếu</label>
                        <select
                            className="form-input"
                            value={selectedScreenId}
                            onChange={(e) => setSelectedScreenId(e.target.value)}
                            required
                            disabled={!selectedCinemaId}
                        >
                            <option value="">-- Chọn phòng chiếu --</option>
                            {screens?.map((screen) => (
                                <option key={screen.id} value={screen.id}>
                                    {screen.name} ({screen.screenType})
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Bắt đầu</label>
                        <div className="custom-datepicker-wrapper">
                            <DatePicker
                                selected={startTime ? new Date(startTime) : null}
                                onChange={(date: Date | null) => setStartTime(date ? format(date, "yyyy-MM-dd'T'HH:mm:ss") : '')}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="dd/MM/yyyy HH:mm"
                                locale="vi"
                                placeholderText="dd/mm/yyyy --:-- --"
                                className="form-input"
                                wrapperClassName="w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Kết thúc</label>
                        <div className="custom-datepicker-wrapper">
                            <DatePicker
                                selected={endTime ? new Date(endTime) : null}
                                onChange={(date: Date | null) => setEndTime(date ? format(date, "yyyy-MM-dd'T'HH:mm:ss") : '')}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                dateFormat="dd/MM/yyyy HH:mm"
                                locale="vi"
                                placeholderText="dd/mm/yyyy --:-- --"
                                className="form-input"
                                wrapperClassName="w-full"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label>Lặp lại hàng ngày đến</label>
                        <div className="custom-datepicker-wrapper">
                            <DatePicker
                                selected={repeatUntilDate ? new Date(repeatUntilDate) : null}
                                onChange={(date: Date | null) => setRepeatUntilDate(date ? format(date, 'yyyy-MM-dd') : '')}
                                dateFormat="dd/MM/yyyy"
                                locale="vi"
                                placeholderText="Chọn ngày kết thúc lặp (Tùy chọn)"
                                className="form-input"
                                wrapperClassName="w-full"
                                minDate={startTime ? new Date(startTime) : new Date()}
                            />
                        </div>
                        <small style={{ color: '#666', fontSize: '0.8em', marginTop: '4px', display: 'block' }}>
                            Tự động tạo suất chiếu vào cùng giờ này hàng ngày cho đến ngày được chọn.
                        </small>
                    </div>

                    <div className="form-group">
                        <label>Giá vé</label>
                        <input
                            type="text"
                            className="form-input"
                            value={formatPriceInput(price)}
                            onChange={(e) => {
                                const rawValue = e.target.value.replace(/\D/g, '');
                                setPrice(rawValue);
                            }}
                            required
                        />
                    </div>

                    <div className="form-actions" style={{ gridColumn: '1 / -1', display: 'flex', gap: '10px' }}>
                        {editingShowtimeId && (
                            <button type="button" className="btn-cancel btn-sm" onClick={cancelEdit}>
                                Hủy
                            </button>
                        )}
                        <button type="submit" className="btn-save btn-sm" disabled={createMutation.isPending || updateMutation.isPending}>
                            {editingShowtimeId
                                ? (updateMutation.isPending ? 'Đang lưu...' : 'Lưu thay đổi')
                                : (createMutation.isPending ? 'Đang thêm...' : 'Thêm')}
                        </button>
                    </div>
                </form>
            </div>

            {/* Danh sách suất chiếu */}
            <div className="showtime-list">
                <h5>Danh sách suất chiếu hiện tại</h5>
                {isLoading ? (
                    <p>Đang tải...</p>
                ) : showtimes && showtimes.length > 0 ? (
                    <table className="table-showtimes">
                        <thead>
                            <tr>
                                <th>Rạp</th>
                                <th>Phòng</th>
                                <th>Thời gian</th>
                                <th>Giá</th>
                                <th style={{ textAlign: 'center' }}>Hành động</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showtimes.map(showtime => (
                                <tr key={showtime.id}>
                                    <td>{showtime.cinemaName}</td>
                                    <td>{showtime.screenName}</td>
                                    <td>
                                        {formatDate(showtime.startTime)} - <br />
                                        {formatDate(showtime.endTime)}
                                    </td>
                                    <td>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(showtime.price)}</td>
                                    <td>
                                        <div style={{ display: 'flex', gap: '8px', justifyContent: 'center' }}>
                                            <button
                                                className="btn-edit-text"
                                                onClick={() => startEdit(showtime)}
                                                disabled={editingShowtimeId === showtime.id}
                                            >
                                                Sửa
                                            </button>
                                            <button
                                                className="btn-delete-text"
                                                onClick={() => handleDelete(showtime.id)}
                                                disabled={deleteMutation.isPending || editingShowtimeId !== null}
                                            >
                                                Xóa
                                            </button>

                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p>Chưa có suất chiếu nào.</p>
                )}
            </div>



            <style jsx>{`
                .showtime-manager {
                    margin-top: 20px;
                    border-top: 1px solid #eee;
                    padding-top: 20px;
                }
                .grid-form {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr); /* Force 3 columns */
                    gap: 15px;
                    align-items: flex-start; /* Align top to handle variable height content like help text */
                    margin-bottom: 20px;
                    background: #f9f9f9;
                    padding: 15px;
                    border-radius: 8px;
                }
                @media (max-width: 768px) {
                    .grid-form {
                        grid-template-columns: 1fr; /* Stack on mobile */
                    }
                }
                .form-group {
                    display: flex;
                    flex-direction: column;
                }
                .form-input {
                    padding: 8px;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    width: 100%;
                }
                .btn-sm {
                    height: 40px;
                }
                .table-showtimes {
                    width: 100%;
                    border-collapse: collapse;
                    font-size: 0.9em;
                }
                .table-showtimes th, .table-showtimes td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                }
                .table-showtimes th {
                    background-color: #f2f2f2;
                }
                .btn-delete-text {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 0.9em;
                    color: #DC2626; /* Red color */
                    font-weight: 500;
                    padding: 4px 8px;
                    border-radius: 4px;
                    transition: background-color 0.2s;
                }
                .btn-delete-text:hover {
                    background-color: #FEE2E2; /* Light red background */
                }
                
                /* DatePicker Overrides */
                .custom-datepicker-wrapper {
                    width: 100%;
                }
                .custom-datepicker-wrapper :global(.react-datepicker-wrapper) {
                    width: 100%;
                }
                .custom-datepicker-wrapper :global(.react-datepicker__input-container) {
                    width: 100%;
                }
                .custom-datepicker-wrapper :global(.react-datepicker__input-container input) {
                    width: 100%;
                    padding: 0.5rem;
                    border: 1px solid #d1d5db;
                    border-radius: 0.375rem;
                    outline: none;
                }
                .custom-datepicker-wrapper :global(.react-datepicker__input-container input:focus) {
                    border-color: #3b82f6;
                    box-shadow: 0 0 0 1px #3b82f6;
                }
                .btn-edit-text {
                    background: none;
                    border: none;
                    cursor: pointer;
                    font-size: 0.9em;
                    color: #3B82F6; /* Blue color */
                    font-weight: 500;
                    padding: 4px 8px;
                    border-radius: 4px;
                    transition: background-color 0.2s;
                }
                .btn-edit-text:hover {
                    background-color: #DBEAFE; /* Light blue background */
                }
                .btn-edit-text:disabled {
                    color: #9CA3AF;
                    cursor: not-allowed;
                }
                .btn-cancel {
                    background-color: #f3f4f6;
                    color: #374151;
                    border: 1px solid #d1d5db;
                    border-radius: 0.375rem;
                    padding: 0 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                .btn-cancel:hover {
                    background-color: #e5e7eb;
                }
                .btn-save {
                    background-color: #3b82f6;
                    color: white;
                    border: none;
                    border-radius: 0.375rem;
                    padding: 0 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: background-color 0.2s;
                }
                .btn-save:hover {
                    background-color: #2563eb;
                }
                .btn-save:disabled {
                    background-color: #93c5fd;
                    cursor: not-allowed;
                }
                
            `}</style>
            <ConfirmationModal
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={confirmDelete}
                title="Xác nhận xóa"
                message="Bạn có chắc chắn muốn xóa suất chiếu này?"
                confirmText="Xóa"
                cancelText="Hủy"
                isDelete={true}
                isLoading={deleteMutation.isPending}
            />
        </div>
    );
};