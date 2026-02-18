import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../lib/api-client';
import { Showtime } from '../types/showtime';
import { toast } from 'react-toastify';

export function useShowtimesByContent(contentId: number | null) {
    return useQuery({
        queryKey: ['showtimes', 'content', contentId],
        queryFn: () => apiClient.get<Showtime[]>(`/api/v1/showtimes/content/${contentId}`),
        enabled: !!contentId,
    });
}

export function useCreateShowtime() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (data: Partial<Showtime>) => apiClient.post<Showtime>('/api/v1/showtimes', data),
        onSuccess: (data) => {
            toast.success('Thêm suất chiếu thành công');
            // Invalidate queries to refresh list
            console.log('Invalidating showtimes for content:', data.contentId);
            queryClient.invalidateQueries({ queryKey: ['showtimes', 'content', data.contentId] });
            // Also invalidate generic movie showtimes if used elsewhere
            if (data.movieId) {
                queryClient.invalidateQueries({ queryKey: ['movies', 'showtimes', data.movieId] });
            }
        },
        onError: (error: any) => {
            // Error handling is mostly done in interceptor but custom logic can follow
        }
    });
}

export function useDeleteShowtime() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: (id: number) => apiClient.delete(`/api/v1/showtimes/${id}`),
        onSuccess: () => {
            toast.success('Xóa suất chiếu thành công');
            queryClient.invalidateQueries({ queryKey: ['showtimes'] });
        }
    });
}

export function useUpdateShowtime() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: ({ id, data }: { id: number; data: Partial<Showtime> }) =>
            apiClient.put<Showtime>(`/api/v1/showtimes/${id}`, data),
        onSuccess: (data) => {
            toast.success('Cập nhật suất chiếu thành công');
            queryClient.invalidateQueries({ queryKey: ['showtimes', 'content', data.contentId] });
        },
        onError: (error: any) => {
            console.error(error);
            // toast handled in interceptor or here
        }
    });
}