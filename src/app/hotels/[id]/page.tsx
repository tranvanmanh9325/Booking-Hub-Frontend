'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { hotelAPI } from '@/lib/api';
import { useAuth } from '@/contexts/AuthContext';

interface Hotel {
  id: number;
  name: string;
  address: string;
  city: string;
  starRating: number;
  description: string;
  facilities: string;
  phoneNumber: string;
  email: string;
  averageRating: number;
}

interface Room {
  id: number;
  hotelId: number;
  roomType: string;
  maxGuests: number;
  pricePerNight: number;
  amenities: string;
  roomNumber: string;
  imageUrls: string[];
  isAvailable: boolean;
}

export default function HotelDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [hotel, setHotel] = useState<Hotel | null>(null);
  const [rooms, setRooms] = useState<Room[]>([]);
  const [loading, setLoading] = useState(true);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const loadHotel = useCallback(async () => {
    try {
      const response = await hotelAPI.getHotelById(Number(params.id));
      setHotel(response.data);
    } catch (error) {
      console.error('Error loading hotel:', error);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  const loadRooms = useCallback(async () => {
    try {
      const response = await hotelAPI.getRoomsByHotel(
        Number(params.id),
        checkIn || undefined,
        checkOut || undefined,
        guests
      );
      setRooms(response.data);
    } catch (error) {
      console.error('Error loading rooms:', error);
    }
  }, [params.id, checkIn, checkOut, guests]);

  useEffect(() => {
    if (params.id) {
      loadHotel();
      loadRooms();
    }
  }, [params.id, checkIn, checkOut, guests, loadHotel, loadRooms]);

  const handleBookRoom = (roomId: number) => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    router.push(`/hotels/${params.id}/book?roomId=${roomId}&checkIn=${checkIn}&checkOut=${checkOut}&guests=${guests}`);
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

  if (!hotel) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Không tìm thấy khách sạn.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h1 className="text-4xl font-bold mb-2 text-gray-900">{hotel.name}</h1>
                <p className="text-gray-600">{hotel.address}, {hotel.city}</p>
              </div>
              <div className="flex items-center gap-1">
                {Array.from({ length: hotel.starRating || 0 }).map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">⭐</span>
                ))}
              </div>
            </div>
            {hotel.averageRating && (
              <p className="text-lg text-gray-600 mb-4">
                ⭐ {hotel.averageRating.toFixed(1)} / 5.0
              </p>
            )}
            <p className="text-gray-700 mb-4 leading-relaxed">{hotel.description}</p>
            {hotel.facilities && (
              <div>
                <p className="font-semibold mb-2">Tiện ích:</p>
                <p className="text-gray-600">{hotel.facilities}</p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Tìm Phòng</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ngày nhận phòng</label>
              <input
                type="date"
                value={checkIn}
                onChange={(e) => setCheckIn(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Ngày trả phòng</label>
              <input
                type="date"
                value={checkOut}
                onChange={(e) => setCheckOut(e.target.value)}
                min={checkIn || new Date().toISOString().split('T')[0]}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Số khách</label>
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                min={1}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-end">
              <button
                onClick={loadRooms}
                className="w-full px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all"
              >
                Tìm phòng
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Danh Sách Phòng</h2>
          {rooms.length === 0 ? (
            <p className="text-gray-600">Không có phòng khả dụng.</p>
          ) : (
            <div className="space-y-6">
              {rooms.map((room) => (
                <div
                  key={room.id}
                  className="border border-gray-200 rounded-lg p-6 hover:border-blue-500 hover:shadow-md transition-all"
                >
                  <div className="flex gap-6">
                    {room.imageUrls && room.imageUrls.length > 0 ? (
                      <Image
                        src={room.imageUrls[0]}
                        alt={room.roomType}
                        width={192}
                        height={192}
                        className="w-48 h-48 object-cover rounded-lg"
                      />
                    ) : (
                      <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-teal-400 rounded-lg flex items-center justify-center text-6xl">
                        🛏️
                      </div>
                    )}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2">{room.roomType}</h3>
                      <p className="text-gray-600 mb-2">Số khách tối đa: {room.maxGuests}</p>
                      {room.amenities && (
                        <p className="text-sm text-gray-600 mb-2">Tiện ích: {room.amenities}</p>
                      )}
                      <div className="flex justify-between items-center mt-4">
                        <div>
                          <p className="text-2xl font-bold text-blue-600">
                            {room.pricePerNight.toLocaleString('vi-VN')} đ / đêm
                          </p>
                          <p className={`text-sm ${room.isAvailable ? 'text-green-600' : 'text-red-600'}`}>
                            {room.isAvailable ? 'Còn phòng' : 'Hết phòng'}
                          </p>
                        </div>
                        <button
                          onClick={() => handleBookRoom(room.id)}
                          disabled={!room.isAvailable}
                          className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                          Đặt phòng
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

