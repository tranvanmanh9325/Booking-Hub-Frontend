import React, { useState, useEffect } from 'react';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import PartnerLayout from '../../components/layouts/PartnerLayout';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { LoadingSpinner } from '../../components/ui/LoadingSpinner';
import { EntertainmentBookingManager } from '../../components/partner/EntertainmentBookingManager';
import { useAuth } from '../../hooks/use-auth';
import { apiClient } from '../../lib/api-client';
import { HotelBookingDTO, BookingStatus } from '../../types/booking';
import { useTranslations } from 'next-intl';

// -- Sub-components for different partner types --

const HotelBookingManager = () => {
    const { user } = useAuth();
    const [bookings, setBookings] = useState<HotelBookingDTO[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [statusFilter, setStatusFilter] = useState<BookingStatus | 'ALL'>('ALL');

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const data = await apiClient.get<HotelBookingDTO[]>('/api/v1/hotels/partner/bookings');
                setBookings(data);
            } catch (error) {
                console.error('Failed to fetch bookings:', error);
            } finally {
                setLoading(false);
            }
        };

        if (user) {
            fetchBookings();
        }
    }, [user]);

    const filteredBookings = bookings.filter(booking => {
        const matchesSearch =
            booking.hotelName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            booking.id.toString().includes(searchTerm) ||
            (booking.userFullName && booking.userFullName.toLowerCase().includes(searchTerm.toLowerCase()));

        const matchesStatus = statusFilter === 'ALL' || booking.status === statusFilter;

        return matchesSearch && matchesStatus;
    });

    const getStatusBadge = (status: BookingStatus) => {
        switch (status) {
            case BookingStatus.PENDING:
                return <span className="status-badge pending">Chờ xác nhận</span>;
            case BookingStatus.CONFIRMED:
                return <span className="status-badge confirmed">Đã xác nhận</span>;
            case BookingStatus.COMPLETED:
                return <span className="status-badge completed">Hoàn thành</span>;
            case BookingStatus.CANCELLED:
                return <span className="status-badge cancelled">Đã hủy</span>;
            default:
                return <span className="status-badge">{status}</span>;
        }
    };

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('vi-VN');
    };

    return (
        <div className="bookings-container">
            <div className="page-header">
                <div>
                    <h1 className="page-title">Quản lý đặt phòng</h1>
                    <p className="page-subtitle">Xem và quản lý các đơn đặt phòng từ khách hàng.</p>
                </div>
            </div>

            <Card className="filter-card">
                <div className="filter-row">
                    <div className="search-box">
                        <Input
                            placeholder="Tìm kiếm theo mã, khách sạn, tên khách..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                    <div className="filter-options">
                        <select
                            className="status-select"
                            value={statusFilter}
                            onChange={(e) => setStatusFilter(e.target.value as BookingStatus | 'ALL')}
                        >
                            <option value="ALL">Tất cả trạng thái</option>
                            <option value={BookingStatus.PENDING}>Chờ xác nhận</option>
                            <option value={BookingStatus.CONFIRMED}>Đã xác nhận</option>
                            <option value={BookingStatus.COMPLETED}>Hoàn thành</option>
                            <option value={BookingStatus.CANCELLED}>Đã hủy</option>
                        </select>
                    </div>
                </div>
            </Card>

            {loading ? (
                <div className="loading-state">
                    <LoadingSpinner size={40} />
                </div>
            ) : (
                <Card noPadding className="table-card">
                    <div className="table-responsive">
                        <table className="bookings-table">
                            <thead>
                                <tr>
                                    <th>Mã vé</th>
                                    <th>Khách sạn & Phòng</th>
                                    <th>Khách hàng</th>
                                    <th>Ngày nhận/trả</th>
                                    <th>Tổng tiền</th>
                                    <th>Trạng thái</th>
                                    <th>Hành động</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBookings.length > 0 ? (
                                    filteredBookings.map((booking) => (
                                        <tr key={booking.id}>
                                            <td className="font-mono font-medium">#{booking.id}</td>
                                            <td>
                                                <div className="hotel-info">
                                                    <span className="hotel-name">{booking.hotelName}</span>
                                                    <span className="room-type">{booking.roomType}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="customer-info">
                                                    <span className="customer-name">{booking.userFullName || 'Khách vãng lai'}</span>
                                                    <span className="customer-email">{booking.userEmail}</span>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="date-info">
                                                    <span>{formatDate(booking.checkIn)}</span>
                                                    <span className="date-arrow">→</span>
                                                    <span>{formatDate(booking.checkOut)}</span>
                                                </div>
                                            </td>
                                            <td className="font-semibold text-primary">
                                                {formatCurrency(booking.totalPrice)}
                                            </td>
                                            <td>
                                                {getStatusBadge(booking.status)}
                                            </td>
                                            <td>
                                                <div className="actions">
                                                    <button className="action-btn view" title="Xem chi tiết">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>
                                                    </button>
                                                    {booking.status === BookingStatus.PENDING && (
                                                        <>
                                                            <button className="action-btn confirm" title="Xác nhận">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                                            </button>
                                                            <button className="action-btn cancel" title="Hủy">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                                                            </button>
                                                        </>
                                                    )}
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan={7} className="empty-state">
                                            <div className="empty-content">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
                                                <p>Không tìm thấy đơn đặt phòng nào.</p>
                                            </div>
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </Card>
            )}
        </div>
    );
};



const PartnerBookings = () => {
    const { user } = useAuth();

    // Default to HOTEL if not specified (backward compatibility)
    const partnerType = user?.partnerType || 'HOTEL';

    return (
        <PartnerLayout>
            <Head>
                <title>Quản lý đặt vé - Partner Booking Hub</title>
            </Head>

            {partnerType === 'CINEMA' || partnerType === 'ENTERTAINMENT' ? (
                <EntertainmentBookingManager partnerType={partnerType} />
            ) : (
                <HotelBookingManager />
            )}

            <style jsx global>{`
                .bookings-container {
                    display: flex;
                    flex-direction: column;
                    gap: 24px;
                }

                .page-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                }

                .page-title {
                    font-size: 1.875rem;
                    font-weight: 700;
                    color: #1E293B;
                    margin: 0 0 8px 0;
                }

                .page-subtitle {
                    color: #64748B;
                    margin: 0;
                    font-size: 1rem;
                }

                .filter-card {
                    padding: 20px;
                }

                .filter-row {
                    display: flex;
                    gap: 16px;
                    flex-wrap: wrap;
                }

                .search-box {
                    flex: 1;
                    min-width: 300px;
                }

                .status-select {
                    height: 100%;
                    padding: 0 16px;
                    border: 1px solid #E2E8F0;
                    border-radius: 8px;
                    background-color: white;
                    color: #1E293B;
                    font-size: 0.95rem;
                    outline: none;
                    cursor: pointer;
                    min-width: 200px;
                }

                .status-select:focus {
                    border-color: #3B82F6;
                    box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
                }

                .loading-state {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    min-height: 400px;
                }

                .bookings-table {
                    width: 100%;
                    border-collapse: collapse;
                }

                .bookings-table th {
                    text-align: left;
                    padding: 16px 24px;
                    background-color: #F8FAFC;
                    color: #475569;
                    font-weight: 600;
                    font-size: 0.875rem;
                    border-bottom: 1px solid #E2E8F0;
                }

                .bookings-table td {
                    padding: 16px 24px;
                    border-bottom: 1px solid #F1F5F9;
                    color: #334155;
                    font-size: 0.95rem;
                    vertical-align: middle;
                }

                .bookings-table tr:last-child td {
                    border-bottom: none;
                }

                .bookings-table tr:hover {
                    background-color: #F8FAFC;
                }

                .hotel-info, .customer-info, .date-info {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }

                .hotel-name {
                    font-weight: 600;
                    color: #1E293B;
                }

                .room-type, .customer-email {
                    font-size: 0.85rem;
                    color: #64748B;
                }

                .date-info {
                    flex-direction: row;
                    align-items: center;
                    gap: 8px;
                    color: #475569;
                }

                .date-arrow {
                    color: #94A3B8;
                }

                .status-badge {
                    display: inline-flex;
                    align-items: center;
                    padding: 4px 12px;
                    border-radius: 9999px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    background-color: #F1F5F9;
                    color: #475569;
                }

                .status-badge.pending { background-color: #FFF7ED; color: #EA580C; }
                .status-badge.confirmed { background-color: #F0FDF4; color: #16A34A; }
                .status-badge.completed { background-color: #EFF6FF; color: #2563EB; }
                .status-badge.cancelled { background-color: #FEF2F2; color: #DC2626; }

                .actions {
                    display: flex;
                    gap: 8px;
                }

                .action-btn {
                    width: 32px;
                    height: 32px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 6px;
                    border: none;
                    cursor: pointer;
                    transition: all 0.2s;
                    color: #64748B;
                    background: transparent;
                }

                .action-btn:hover {
                    background-color: #F1F5F9;
                    color: #1E293B;
                }

                .action-btn.confirm:hover { background-color: #F0FDF4; color: #16A34A; }
                .action-btn.cancel:hover { background-color: #FEF2F2; color: #DC2626; }
                .action-btn.view:hover { background-color: #EFF6FF; color: #2563EB; }

                .empty-state {
                    text-align: center;
                    padding: 64px 0 !important;
                }

                .empty-content {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 16px;
                    color: #64748B;
                }
                
                .empty-state-card {
                    padding: 64px;
                    display: flex;
                    justify-content: center;
                }

                .font-mono { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
                .font-medium { font-weight: 500; }
                .font-semibold { font-weight: 600; }
                .text-primary { color: #2563EB; }
            `}</style>
        </PartnerLayout>
    );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
    return {
        props: {
            messages: (await import(`../../locales/${locale}.json`)).default
        }
    };
};

export default PartnerBookings;