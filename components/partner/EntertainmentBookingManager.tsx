import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { useTranslations } from 'next-intl';
import {
    BookingStatus,
    BookingSearchParams,
    ContentBookingDTO
} from '../../types/booking';
import { apiClient } from '../../lib/api-client';
import { LoadingSpinner } from '../ui/LoadingSpinner';
import { formatCurrency } from '@/utils/format';
import { toast } from 'react-toastify';

interface Props {
    partnerType: string;
}

export const EntertainmentBookingManager: React.FC<Props> = ({ partnerType }) => {
    const t = useTranslations('PartnerBookings');
    const [searchParams, setSearchParams] = useState<BookingSearchParams>({
        page: 0,
        size: 10,
        status: undefined,
    });


    const { data: bookings, isLoading, error } = useQuery({
        queryKey: ['partner-content-bookings'],
        queryFn: async () => {
            const response = await apiClient.get<ContentBookingDTO[]>('/api/v1/content/partner/bookings');
            // Client-side filtering as the API currently returns all
            // In a real app, you'd pass params to API
            return response;
        }
    });

    const getStatusBadgeClass = (status: BookingStatus) => {
        switch (status) {
            case BookingStatus.CONFIRMED: return 'status-confirmed';
            case BookingStatus.PENDING: return 'status-pending';
            case BookingStatus.CANCELLED: return 'status-cancelled';
            case BookingStatus.COMPLETED: return 'status-completed';
            default: return '';
        }
    };

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-64">
                <LoadingSpinner size={40} />
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-center text-red-500 py-8">
                {t('errorLoading')}
            </div>
        );
    }

    const filteredBookings = bookings?.filter(booking => {
        if (searchParams.status && booking.status !== searchParams.status) return false;
        // Add more filters if needed
        return true;
    }) || [];

    const isCinema = partnerType === 'CINEMA';

    return (
        <div className="bookings-container">
            <div className="bookings-header">
                <h2>{isCinema ? t('titleCinema') : t('titleEntertainment')}</h2>
                <p>{isCinema ? t('subtitleCinema') : t('subtitleEntertainment')}</p>
            </div>

            {/* Filters */}
            <div className="filters-bar">
                <div className="search-group">
                    <input
                        type="text"
                        placeholder={t('searchPlaceholder')}
                        className="search-input"
                    // Implement search logic
                    />
                </div>
                <div className="filter-group">
                    <select
                        className="status-select"
                        value={searchParams.status || ''}
                        onChange={(e) => setSearchParams({ ...searchParams, status: e.target.value as BookingStatus || undefined })}
                    >
                        <option value="">{t('allStatuses')}</option>
                        <option value={BookingStatus.PENDING}>{t('status.pending')}</option>
                        <option value={BookingStatus.CONFIRMED}>{t('status.confirmed')}</option>
                        <option value={BookingStatus.CANCELLED}>{t('status.cancelled')}</option>
                        <option value={BookingStatus.COMPLETED}>{t('status.completed')}</option>
                    </select>
                </div>
            </div>

            {/* Table */}
            <div className="table-responsive">
                <table className="bookings-table">
                    <thead>
                        <tr>
                            <th>{t('table.id')}</th>
                            <th>{t('table.customer')}</th>
                            <th>{t('table.item')}</th>
                            <th>{t('table.visitDate')}</th>
                            <th>{t('table.quantity')}</th>
                            <th>{t('table.total')}</th>
                            <th>{t('table.status')}</th>
                            <th>{t('table.actions')}</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredBookings.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="text-center py-8 text-gray-500">
                                    {t('noBookings')}
                                </td>
                            </tr>
                        ) : (
                            filteredBookings.map((booking) => (
                                <tr key={booking.id}>
                                    <td>#{booking.bookingReference || booking.id}</td>
                                    <td>
                                        <div className="customer-info">
                                            <span className="font-medium">{booking.customerName}</span>
                                            <span className="text-sm text-gray-500">{booking.customerPhone}</span>
                                        </div>
                                    </td>
                                    <td>{booking.contentName}</td>
                                    <td>{booking.visitDate}</td>
                                    <td>{booking.quantity}</td>
                                    <td className="font-medium">{formatCurrency(booking.totalPrice)}</td>
                                    <td>
                                        <span className={`status-badge ${getStatusBadgeClass(booking.status)}`}>
                                            {t(`status.${booking.status.toLowerCase()}`)}
                                        </span>
                                    </td>
                                    <td>
                                        <button className="btn-action">
                                            {t('viewDetails')}
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>

            <style jsx>{`
                .bookings-container {
                    padding: 24px;
                    background: white;
                    border-radius: 12px;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                }
                .bookings-header {
                    margin-bottom: 24px;
                }
                .bookings-header h2 {
                    font-size: 24px;
                    font-weight: 600;
                    color: #111827;
                    margin-bottom: 8px;
                }
                .bookings-header p {
                    color: #6B7280;
                }
                .filters-bar {
                    display: flex;
                    gap: 16px;
                    margin-bottom: 24px;
                    flex-wrap: wrap;
                }
                .search-input, .status-select {
                    padding: 8px 12px;
                    border: 1px solid #E5E7EB;
                    border-radius: 6px;
                    outline: none;
                }
                .search-input:focus, .status-select:focus {
                    border-color: #3B82F6;
                }
                .bookings-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .bookings-table th {
                    text-align: left;
                    padding: 12px 16px;
                    background: #F9FAFB;
                    color: #4B5563;
                    font-weight: 600;
                    font-size: 0.875rem;
                }
                .bookings-table td {
                    padding: 12px 16px;
                    border-bottom: 1px solid #E5E7EB;
                    color: #111827;
                }
                .status-badge {
                    padding: 4px 8px;
                    border-radius: 9999px;
                    font-size: 0.75rem;
                    font-weight: 500;
                }
                .status-confirmed, .status-completed {
                    background: #DEF7EC;
                    color: #03543F;
                }
                .status-pending {
                    background: #FEF3C7;
                    color: #92400E;
                }
                .status-cancelled {
                    background: #FDE8E8;
                    color: #9B1C1C;
                }
                .btn-action {
                    color: #3B82F6;
                    font-weight: 500;
                    background: none;
                    border: none;
                    cursor: pointer;
                }
                .btn-action:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};