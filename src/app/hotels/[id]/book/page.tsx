'use client';

import { useEffect, useState } from 'react';
import { useParams, useSearchParams, useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { hotelAPI } from '@/lib/api';
import { useAuth } from '@/contexts/AuthContext';

export default function HotelBookingPage() {
  const params = useParams();
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [booking, setBooking] = useState(false);

  const roomId = Number(searchParams.get('roomId'));
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const guests = Number(searchParams.get('guests')) || 1;

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
  }, [isAuthenticated, router]);

  const handleBook = async () => {
    if (!checkIn || !checkOut) {
      alert('Vui lòng chọn ngày nhận phòng và trả phòng');
      return;
    }

    try {
      setBooking(true);
      const response = await hotelAPI.bookHotel({
        hotelId: Number(params.id),
        roomId,
        checkIn,
        checkOut,
        guests,
      });
      
      // Redirect to payment page
      router.push(`/payment?bookingId=${response.data.id}&bookingType=HOTEL&amount=${response.data.totalPrice}`);
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      alert(axiosError.response?.data?.message || 'Có lỗi xảy ra khi đặt phòng');
    } finally {
      setBooking(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Xác Nhận Đặt Phòng</h1>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-6">
          <h2 className="text-xl font-bold mb-4">Thông Tin Đặt Phòng</h2>
          <div className="space-y-3">
            <div>
              <p className="text-gray-600">Ngày nhận phòng:</p>
              <p className="font-semibold">{new Date(checkIn).toLocaleDateString('vi-VN')}</p>
            </div>
            <div>
              <p className="text-gray-600">Ngày trả phòng:</p>
              <p className="font-semibold">{new Date(checkOut).toLocaleDateString('vi-VN')}</p>
            </div>
            <div>
              <p className="text-gray-600">Số khách:</p>
              <p className="font-semibold">{guests}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <button
            onClick={handleBook}
            disabled={booking}
            className="w-full px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
          >
            {booking ? 'Đang xử lý...' : 'Xác nhận và thanh toán'}
          </button>
        </div>
      </div>
    </div>
  );
}

