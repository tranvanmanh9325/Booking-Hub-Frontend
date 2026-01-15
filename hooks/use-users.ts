import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../lib/api-client';
import { User } from '../types/auth';

export const USERS_QUERY_KEY = ['users', 'list'];

/**
 * Hook to fetch the list of users from the API.
 */
export function useUsers() {
    return useQuery({
        queryKey: USERS_QUERY_KEY,
        queryFn: async () => {
            return apiClient.get<User[]>('/api/v1/users');
        },
        staleTime: 1000 * 60 * 5, // 5 minutes
    });
}

export function useUpdateUser() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ id, data }: { id: number | string; data: Partial<User> }) => {
            return apiClient.put<User>(`/api/v1/users/${id}`, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
        },
    });
}

export function useDeleteUser() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: number | string) => {
            return apiClient.delete(`/api/v1/users/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: USERS_QUERY_KEY });
        },
    });
}
