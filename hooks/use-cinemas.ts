import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../lib/api-client';
import { Screen } from '../types/screen';

export interface Cinema {
    id: number;
    name: string;
    address: string;
    ward: string;
    city: string;
    facilities: string;
    phoneNumber: string;
}

export function useCinemas() {
    return useQuery({
        queryKey: ['cinemas', 'list'],
        queryFn: () => apiClient.get<Cinema[]>('/api/v1/cinemas'),
    });
}

export function useScreensByCinema(cinemaId: number | null) {
    return useQuery({
        queryKey: ['cinemas', cinemaId, 'screens'],
        queryFn: () => apiClient.get<Screen[]>(`/api/v1/cinemas/${cinemaId}/screens`),
        enabled: !!cinemaId,
    });
}

// Cinema Mutations
export function useCreateCinema() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: Omit<Cinema, 'id'>) => apiClient.post<Cinema>('/api/v1/cinemas', data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cinemas', 'list'] });
        },
    });
}

export function useUpdateCinema() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: number; data: Partial<Cinema> }) => apiClient.put<Cinema>(`/api/v1/cinemas/${id}`, data),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cinemas', 'list'] });
        },
    });
}

export function useDeleteCinema() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id: number) => apiClient.delete(`/api/v1/cinemas/${id}`),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['cinemas', 'list'] });
        },
    });
}

// Screen Mutations
export function useCreateScreen() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (data: Omit<Screen, 'id'>) => apiClient.post<Screen>('/api/v1/screens', data),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['cinemas', variables.cinemaId, 'screens'] });
        },
    });
}

export function useUpdateScreen() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, data }: { id: number; data: Partial<Screen> }) => apiClient.put<Screen>(`/api/v1/screens/${id}`, data),
        onSuccess: (data) => {
            // Invalidate screens for the cinema this screen belongs to. 
            // If cinemaId changged, we might need to invalidate both old and new, but simply invalidating based on returned data or just refetching all screens for that cinema is enough for now.
            // Actually, we should invalidate the specific list.
            if (data.cinemaId) {
                queryClient.invalidateQueries({ queryKey: ['cinemas', data.cinemaId, 'screens'] });
            }
        },
    });
}

export function useDeleteScreen() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: ({ id, cinemaId }: { id: number; cinemaId: number }) => apiClient.delete(`/api/v1/screens/${id}`),
        onSuccess: (_, variables) => {
            queryClient.invalidateQueries({ queryKey: ['cinemas', variables.cinemaId, 'screens'] });
        },
    });
}