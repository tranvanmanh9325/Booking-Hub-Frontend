'use client';

import { useEffect, useState, useCallback } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { movieAPI } from '@/lib/api';
import { useAuth } from '@/contexts/AuthContext';

interface Movie {
  id: number;
  title: string;
  description: string;
  genre: string;
  duration: number;
  rating: number;
  posterUrl: string;
  trailerUrl: string;
  releaseDate: string;
}

interface Showtime {
  id: number;
  movieId: number;
  movieTitle: string;
  screenId: number;
  screenName: string;
  cinemaId: number;
  cinemaName: string;
  startTime: string;
  endTime: string;
  price: number;
}

export default function MovieDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { isAuthenticated } = useAuth();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [showtimes, setShowtimes] = useState<Showtime[]>([]);
  const [loading, setLoading] = useState(true);

  const loadMovie = useCallback(async () => {
    try {
      const response = await movieAPI.getMovieById(Number(params.id));
      setMovie(response.data);
    } catch (error) {
      console.error('Error loading movie:', error);
    } finally {
      setLoading(false);
    }
  }, [params.id]);

  const loadShowtimes = useCallback(async () => {
    try {
      const response = await movieAPI.getShowtimesByMovie(Number(params.id));
      setShowtimes(response.data);
    } catch (error) {
      console.error('Error loading showtimes:', error);
    }
  }, [params.id]);

  useEffect(() => {
    if (params.id) {
      loadMovie();
      loadShowtimes();
    }
  }, [params.id, loadMovie, loadShowtimes]);

  const handleSelectShowtime = (showtime: Showtime) => {
    if (!isAuthenticated) {
      router.push('/login');
      return;
    }
    router.push(`/movies/${params.id}/book?showtimeId=${showtime.id}&screenId=${showtime.screenId}`);
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

  if (!movie) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50 flex items-center justify-center">
        <p className="text-gray-600 text-lg">Không tìm thấy phim.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="md:flex">
            <div className="md:w-1/3 relative min-h-96">
              {movie.posterUrl ? (
                <Image
                  src={movie.posterUrl}
                  alt={movie.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              ) : (
                <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-teal-400 flex items-center justify-center text-9xl">
                  🎬
                </div>
              )}
            </div>
            <div className="md:w-2/3 p-8">
              <h1 className="text-4xl font-bold mb-4 text-gray-900">{movie.title}</h1>
              <div className="flex items-center gap-4 mb-4 text-gray-600">
                <span>{movie.genre}</span>
                <span>•</span>
                <span>{movie.duration} phút</span>
                {movie.rating && (
                  <>
                    <span>•</span>
                    <span>⭐ {movie.rating.toFixed(1)}</span>
                  </>
                )}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">{movie.description}</p>
              {movie.trailerUrl && (
                <a
                  href={movie.trailerUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all"
                >
                  Xem Trailer
                </a>
              )}
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">Lịch Chiếu</h2>
          {showtimes.length === 0 ? (
            <p className="text-gray-600">Chưa có lịch chiếu.</p>
          ) : (
            <div className="space-y-4">
              {showtimes.map((showtime) => (
                <div
                  key={showtime.id}
                  className="border border-gray-200 rounded-lg p-4 hover:border-blue-500 hover:shadow-md transition-all cursor-pointer"
                  onClick={() => handleSelectShowtime(showtime)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-lg">{showtime.cinemaName}</p>
                      <p className="text-gray-600">{showtime.screenName}</p>
                      <p className="text-sm text-gray-500 mt-1">
                        {new Date(showtime.startTime).toLocaleString('vi-VN')}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-xl text-blue-600">
                        {showtime.price.toLocaleString('vi-VN')} đ
                      </p>
                      <button className="mt-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all text-sm">
                        Đặt vé
                      </button>
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

