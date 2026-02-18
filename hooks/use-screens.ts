import { useMutation, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '@/lib/api-client';

export const useGenerateSeats = () => {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: async ({ screenId, data }: { screenId: number; data: { rowCount: number; colCount: number; seats?: { row: string; number: number; type: string }[] } }) => {
            return apiClient.post(`/api/v1/screens/${screenId}/seats`, data);
        },
        onSuccess: () => {
            // Invalidate relevant queries if needed, e.g., fetching seat map
            // queryClient.invalidateQueries({ queryKey: ['seats'] });
        },
    });
};