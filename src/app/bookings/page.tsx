'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { movieAPI, hotelAPI } from '@/lib/api';
import { useAuth } from '@/contexts/AuthContext';

interface MovieBooking {
  id: number;
  userId: number;
  showtimeId: number;
  movieTitle: string;
  cinemaName: string;
  screenName: string;
  showtimeStart: string;
  bookingDate: string;
  status: string;
  totalPrice: number;
  seats: Array<{ id: number; row: string; number: number }>;
}

interface HotelBooking {
  id: number;
  userId: number;
  hotelId: number;
  hotelName: string;
  roomId: number;
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  totalPrice: number;
  status: string;
  createdAt: string;
}

export default function BookingsPage() {
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [movieBookings, setMovieBookings] = useState<MovieBooking[]>([]);
  const [hotelBookings, setHotelBookings] = useState<HotelBooking[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    loadBookings();
  }, [isAuthenticated]);

  const loadBookings = async () => {
    try {
      setLoading(true);
      const [movieResponse, hotelResponse] = await Promise.all([
        movieAPI.getUserBookings(),
        hotelAPI.getUserBookings(),
      ]);
      setMovieBookings(movieResponse.data);
      setHotelBookings(hotelResponse.data);
    } catch (error) {
      console.error('Error loading bookings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCancelMovieBooking = async (bookingId: number) => {
    if (!confirm('Bạn có chắc chắn muốn hủy đặt chỗ này?')) {
      return;
    }
    try {
      await movieAPI.cancelBooking(bookingId);
      loadBookings();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Có lỗi xảy ra khi hủy đặt chỗ');
    }
  };

  const handleCancelHotelBooking = async (bookingId: number) => {
    if (!confirm('Bạn có chắc chắn muốn hủy đặt chỗ này?')) {
      return;
    }
    try {
      await hotelAPI.cancelBooking(bookingId);
      loadBookings();
    } catch (error: any) {
      alert(error.response?.data?.message || 'Có lỗi xảy ra khi hủy đặt chỗ');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50 flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Lịch Sử Đặt Chỗ</h1>

        <div className="space-y-8">
          {/* Movie Bookings */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">🎬 Đặt Vé Xem Phim</h2>
            {movieBookings.length === 0 ? (
              <p className="text-gray-600">Chưa có đặt chỗ nào.</p>
            ) : (
              <div className="space-y-4">
                {movieBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{booking.movieTitle}</h3>
                        <p className="text-gray-600 mb-1">{booking.cinemaName} - {booking.screenName}</p>
                        <p className="text-sm text-gray-500 mb-2">
                          {new Date(booking.showtimeStart).toLocaleString('vi-VN')}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                          Ghế: {booking.seats.map(s => `${s.row}${s.number}`).join(', ')}
                        </p>
                        <p className="text-lg font-semibold text-blue-600">
                          {booking.totalPrice.toLocaleString('vi-VN')} đ
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            booking.status === 'CONFIRMED'
                              ? 'bg-green-100 text-green-800'
                              : booking.status === 'PENDING'
                              ? 'bg-yellow-100 text-yellow-800'
                              : booking.status === 'CANCELLED'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {booking.status === 'CONFIRMED'
                            ? 'Đã xác nhận'
                            : booking.status === 'PENDING'
                            ? 'Chờ xác nhận'
                            : booking.status === 'CANCELLED'
                            ? 'Đã hủy'
                            : booking.status}
                        </span>
                        {(booking.status === 'PENDING' || booking.status === 'CONFIRMED') && (
                          <button
                            onClick={() => handleCancelMovieBooking(booking.id)}
                            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all text-sm"
                          >
                            Hủy đặt chỗ
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Hotel Bookings */}
          <div>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">🏨 Đặt Phòng Khách Sạn</h2>
            {hotelBookings.length === 0 ? (
              <p className="text-gray-600">Chưa có đặt chỗ nào.</p>
            ) : (
              <div className="space-y-4">
                {hotelBookings.map((booking) => (
                  <div
                    key={booking.id}
                    className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold mb-2">{booking.hotelName}</h3>
                        <p className="text-gray-600 mb-1">Phòng: {booking.roomType}</p>
                        <p className="text-sm text-gray-500 mb-2">
                          Nhận phòng: {new Date(booking.checkIn).toLocaleDateString('vi-VN')}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">
                          Trả phòng: {new Date(booking.checkOut).toLocaleDateString('vi-VN')}
                        </p>
                        <p className="text-sm text-gray-500 mb-2">Số khách: {booking.guests}</p>
                        <p className="text-lg font-semibold text-blue-600">
                          {booking.totalPrice.toLocaleString('vi-VN')} đ
                        </p>
                      </div>
                      <div className="text-right">
                        <span
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            booking.status === 'CONFIRMED'
                              ? 'bg-green-100 text-green-800'
                              : booking.status === 'PENDING'
                              ? 'bg-yellow-100 text-yellow-800'
                              : booking.status === 'CANCELLED'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-gray-100 text-gray-800'
                          }`}
                        >
                          {booking.status === 'CONFIRMED'
                            ? 'Đã xác nhận'
                            : booking.status === 'PENDING'
                            ? 'Chờ xác nhận'
                            : booking.status === 'CANCELLED'
                            ? 'Đã hủy'
                            : booking.status}
                        </span>
                        {(booking.status === 'PENDING' || booking.status === 'CONFIRMED') && (
                          <button
                            onClick={() => handleCancelHotelBooking(booking.id)}
                            className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all text-sm"
                          >
                            Hủy đặt chỗ
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

