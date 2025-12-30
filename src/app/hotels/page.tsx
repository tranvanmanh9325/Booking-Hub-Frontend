'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { hotelAPI } from '@/lib/api';

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

export default function HotelsPage() {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    loadHotels();
  }, []);

  const loadHotels = async () => {
    try {
      setLoading(true);
      const response = await hotelAPI.getAllHotels();
      setHotels(response.data);
    } catch (error) {
      console.error('Error loading hotels:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = async () => {
    if (!searchQuery.trim()) {
      loadHotels();
      return;
    }
    try {
      setLoading(true);
      const response = await hotelAPI.searchHotels(searchQuery);
      setHotels(response.data);
    } catch (error) {
      console.error('Error searching hotels:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
            🏨 Khách Sạn
          </h1>
          
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              placeholder="Tìm kiếm khách sạn..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSearch}
              className="px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all"
            >
              Tìm kiếm
            </button>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Đang tải...</p>
          </div>
        ) : hotels.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">Không tìm thấy khách sạn nào.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotels.map((hotel) => (
              <Link key={hotel.id} href={`/hotels/${hotel.id}`}>
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                  <div className="h-48 bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center text-6xl">
                    🏨
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="font-bold text-xl text-gray-900">{hotel.name}</h3>
                      <div className="flex items-center gap-1">
                        {Array.from({ length: hotel.starRating || 0 }).map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{hotel.address}, {hotel.city}</p>
                    {hotel.averageRating && (
                      <p className="text-sm text-gray-600 mb-3">
                        ⭐ {hotel.averageRating.toFixed(1)} / 5.0
                      </p>
                    )}
                    <p className="text-sm text-gray-600 line-clamp-2">{hotel.description}</p>
                    {hotel.facilities && (
                      <p className="text-xs text-gray-500 mt-2 line-clamp-1">
                        Tiện ích: {hotel.facilities}
                      </p>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

