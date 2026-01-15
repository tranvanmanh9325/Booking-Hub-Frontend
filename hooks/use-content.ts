import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../lib/api-client';
import { Content } from '../types/content';

export const CONTENT_QUERY_KEY = ['content', 'list'];

/**
 * Hook to fetch the list of content from the API.
 */
export function useContent() {
    return useQuery({
        queryKey: CONTENT_QUERY_KEY,
        queryFn: async () => {
            // Assuming the backend is running on the same host/port setup as users
            // If not, this might need adjustment, but apiClient usually handles base URL.
            // Based on Controller: @RequestMapping("/api/content")
            return apiClient.get<Content[]>('/api/content');
        },
        staleTime: 1000 * 60, // 1 minute
    });
}

export function useAddContent() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (data: Omit<Content, 'id'>) => {
            return apiClient.post<Content>('/api/content', data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: CONTENT_QUERY_KEY });
        },
    });
}

export function useUpdateContent() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async ({ id, data }: { id: string | number; data: Partial<Content> }) => {
            return apiClient.put<Content>(`/api/content/${id}`, data);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: CONTENT_QUERY_KEY });
        },
    });
}

export function useDeleteContent() {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: string | number) => {
            return apiClient.delete(`/api/content/${id}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: CONTENT_QUERY_KEY });
        },
    });
}
