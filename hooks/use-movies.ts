import { useQuery } from '@tanstack/react-query';
import { apiClient } from '../lib/api-client';

export interface Movie {
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

export interface Showtime {
    id: number;
    startTime: string;
    endTime: string;
    screenId: number;
    screenName: string;
    cinemaName: string;
    price: number;
}

export interface Seat {
    id: number;
    screenId: number;
    row: string;
    number: number;
    seatType: string;
    isBooked: boolean;
}

export function useMovies(page = 0, size = 10) {
    return useQuery({
        queryKey: ['movies', 'list', page, size],
        queryFn: () => apiClient.get<{ content: Movie[], totalElements: number }>(`/api/v1/movies`, { params: { page, size } }),
    });
}

export function useNowShowingMovies() {
    return useQuery({
        queryKey: ['movies', 'now-showing'],
        queryFn: () => apiClient.get<Movie[]>('/api/v1/movies/now-showing'),
    });
}

export function useUpcomingMovies() {
    // Currently backend might not have a dedicated endpoint, filtering or using a separate endpoint if it existed
    // For now we can fetch all and filter or just use search.
    // Assuming we might add an endpoint later, or client-side filter
    return useQuery({
        queryKey: ['movies', 'upcoming'],
        queryFn: async () => {
            // Temporary: filter from all movies or add specific endpoint
            const res = await apiClient.get<any>('/api/v1/movies', { params: { page: 0, size: 50 } });
            const now = new Date();
            return res.content.filter((m: Movie) => new Date(m.releaseDate) > now);
        },
    });
}

export function useMovie(id: number) {
    return useQuery({
        queryKey: ['movies', 'detail', id],
        queryFn: () => apiClient.get<Movie>(`/api/v1/movies/${id}`),
        enabled: !!id,
    });
}

export function useShowtimes(movieId: number) {
    return useQuery({
        queryKey: ['movies', 'showtimes', movieId],
        queryFn: () => apiClient.get<Showtime[]>(`/api/v1/movies/${movieId}/showtimes`),
        enabled: !!movieId,
    });
}

export function useSeats(showtimeId: number | null, screenId: number | null) {
    return useQuery({
        queryKey: ['seats', showtimeId, screenId],
        queryFn: () => apiClient.get<Seat[]>(`/api/v1/movies/showtimes/${showtimeId}/seats`, { params: { screenId } }),
        enabled: !!showtimeId && !!screenId,
    });
}