import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../lib/api-client';

export interface Movie {
    id: number;
    title: string;
    description: string;
    posterUrl: string;
    rating?: string;
    showtimes: string[];
}

const MOCK_MOVIES: Movie[] = [
    {
        id: 1,
        title: 'Hành Trình Vô Tận',
        description: 'Bom tấn hành động kịch tính nhất năm',
        posterUrl: 'https://images.pexels.com/photos/7991142/pexels-photo-7991142.jpeg?auto=compress&cs=tinysrgb&w=1500',
        rating: 'T18',
        showtimes: ['09:30', '12:15', '15:00', '18:45']
    },
    {
        id: 2,
        title: 'Thế Giới Diệu Kỳ',
        description: 'Chuyến phiêu lưu kỳ thú',
        posterUrl: 'https://images.pexels.com/photos/3709371/pexels-photo-3709371.jpeg?auto=compress&cs=tinysrgb&w=1500',
        rating: 'P',
        showtimes: ['10:00', '14:30', '17:15', '20:00']
    }
];

export function useMovies() {
    return useQuery({
        queryKey: ['movies', 'list'],
        queryFn: async () => {
            // In the future: return await apiClient.get<Movie[]>('/movies');
            // For now, return mock data with a slight delay
            await new Promise(resolve => setTimeout(resolve, 500));
            return MOCK_MOVIES;
        },
        staleTime: 1000 * 60 * 60, // 1 hour
    });
}
