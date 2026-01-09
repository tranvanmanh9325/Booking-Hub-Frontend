import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../lib/api-client';

export interface User {
    id: number;
    email: string;
    fullName: string;
    avatarUrl?: string;
    role?: string;
}

export const USER_QUERY_KEY = ['user', 'profile'];

export function useUser() {
    const queryClient = useQueryClient();

    return useQuery({
        queryKey: USER_QUERY_KEY,
        queryFn: async () => {
            // Check if token exists first
            const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

            if (!token) {
                return null; // Not authenticated
            }

            try {
                // We can fetch user profile from an endpoint if available
                // For now, we might rely on localStorage or a mock call if the backend doesn't have /me
                // Assuming we want to verify the token/fetch fresh data:

                // If backend has /api/v1/users/me, uncomment this:
                // const user = await apiClient.get<User>('/users/profile'); 
                // return user;

                // Fallback to localStorage if no endpoint yet, or simulate verification
                const userData = localStorage.getItem('user');
                if (userData) {
                    return JSON.parse(userData) as User;
                }
                return null;
            } catch (error) {
                // If 401, it means token expired/invalid
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                return null;
            }
        },
        staleTime: 1000 * 60 * 30, // User profile rarely changes, cache for 30m
        retry: false, // Don't retry if this fails (e.g. 401)
    });
}