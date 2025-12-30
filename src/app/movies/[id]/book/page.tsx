'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { AxiosError } from 'axios';
import { movieAPI } from '@/lib/api';
import { useAuth } from '@/contexts/AuthContext';

interface Seat {
  id: number;
  screenId: number;
  row: string;
  number: number;
  seatType: string;
  isBooked: boolean;
}

export default function MovieBookingPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [seats, setSeats] = useState<Seat[]>([]);
  const [selectedSeats, setSelectedSeats] = useState<number[]>([]);
  const [loading, setLoading] = useState(true);
  const [booking, setBooking] = useState(false);

  const showtimeId = Number(searchParams.get('showtimeId'));
  const screenId = Number(searchParams.get('screenId'));

  const loadSeats = useCallback(async () => {
    try {
      setLoading(true);
      const response = await movieAPI.getSeatsByShowtime(showtimeId, screenId);
      setSeats(response.data);
    } catch (error) {
      console.error('Error loading seats:', error);
    } finally {
      setLoading(false);
    }
  }, [showtimeId, screenId]);

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    if (showtimeId && screenId) {
      loadSeats();
    }
  }, [showtimeId, screenId, isAuthenticated, loadSeats, router]);

  const toggleSeat = (seatId: number, isBooked: boolean) => {
    if (isBooked) return;
    setSelectedSeats((prev) =>
      prev.includes(seatId)
        ? prev.filter((id) => id !== seatId)
        : [...prev, seatId]
    );
  };

  const handleBook = async () => {
    if (selectedSeats.length === 0) {
      alert('Vui lòng chọn ít nhất một ghế');
      return;
    }

    try {
      setBooking(true);
      const response = await movieAPI.bookMovie({
        showtimeId,
        seatIds: selectedSeats,
      });
      
      // Redirect to payment page
      router.push(`/payment?bookingId=${response.data.id}&bookingType=MOVIE&amount=${response.data.totalPrice}`);
    } catch (error) {
      const axiosError = error as AxiosError<{ message?: string }>;
      alert(axiosError.response?.data?.message || 'Có lỗi xảy ra khi đặt vé');
    } finally {
      setBooking(false);
    }
  };

  // Group seats by row
  const seatsByRow = seats.reduce((acc, seat) => {
    if (!acc[seat.row]) {
      acc[seat.row] = [];
    }
    acc[seat.row].push(seat);
    return acc;
  }, {} as Record<string, Seat[]>);

  const rows = Object.keys(seatsByRow).sort();

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Chọn Ghế</h1>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Đang tải...</p>
          </div>
        ) : (
          <>
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="text-center mb-8">
                <div className="inline-block bg-gray-200 px-4 py-2 rounded-lg mb-4">
                  Màn hình
                </div>
              </div>

              <div className="space-y-2 max-w-4xl mx-auto">
                {rows.map((row) => (
                  <div key={row} className="flex items-center gap-2">
                    <div className="w-8 text-center font-semibold">{row}</div>
                    <div className="flex gap-1 flex-1">
                      {seatsByRow[row]
                        .sort((a, b) => a.number - b.number)
                        .map((seat) => {
                          const isSelected = selectedSeats.includes(seat.id);
                          return (
                            <button
                              key={seat.id}
                              onClick={() => toggleSeat(seat.id, seat.isBooked)}
                              disabled={seat.isBooked}
                              className={`
                                w-10 h-10 rounded transition-all
                                ${seat.isBooked
                                  ? 'bg-gray-400 cursor-not-allowed'
                                  : isSelected
                                  ? 'bg-blue-600 text-white'
                                  : 'bg-gray-200 hover:bg-gray-300'}
                              `}
                            >
                              {seat.number}
                            </button>
                          );
                        })}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex justify-center gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-200 rounded"></div>
                  <span className="text-sm text-gray-600">Trống</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-blue-600 rounded"></div>
                  <span className="text-sm text-gray-600">Đã chọn</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-400 rounded"></div>
                  <span className="text-sm text-gray-600">Đã đặt</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6">
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-gray-600">Số ghế đã chọn: {selectedSeats.length}</p>
                </div>
                <button
                  onClick={handleBook}
                  disabled={selectedSeats.length === 0 || booking}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed font-semibold"
                >
                  {booking ? 'Đang xử lý...' : 'Tiếp tục thanh toán'}
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

