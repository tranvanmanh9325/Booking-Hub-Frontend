import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../lib/api-client';
import { useRouter } from 'next/router';

export interface User {
    id: number;
    email: string;
    fullName: string;
    avatarUrl?: string;
    role?: string;
}

export const USER_QUERY_KEY = ['user', 'profile'];

export function useUser() {
    return useQuery({
        queryKey: USER_QUERY_KEY,
        queryFn: async () => {
            // Check if token exists first
            const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

            if (!token) {
                return null; // Not authenticated
            }

            try {
                // Return cached user if available to avoid loading state on every refresh if we trust localStorage
                const userData = localStorage.getItem('user');
                if (userData) {
                    return JSON.parse(userData) as User;
                }

                // If we implemented /me endpoint:
                // const user = await apiClient.get<User>('/auth/me');
                // return user;

                return null;
            } catch (error) {
                localStorage.removeItem('token');
                localStorage.removeItem('user');
                return null;
            }
        },
        staleTime: 1000 * 60 * 30, // 30 mins
        retry: false,
    });
}

export const useAuth = () => {
    const { data: user, isLoading, refetch } = useUser();
    const queryClient = useQueryClient();
    const router = useRouter();

    const login = async (token: string, refreshToken: string, newUser: User) => {
        localStorage.setItem('token', token);
        // localStorage.setItem('refreshToken', refreshToken); // HttpOnly cookie ideally
        localStorage.setItem('user', JSON.stringify(newUser));

        // Update React Query cache immediately
        queryClient.setQueryData(USER_QUERY_KEY, newUser);
    };

    const logout = async () => {
        try {
            await apiClient.post('/auth/logout');
        } catch (error) {
            console.error("Logout failed", error);
        }
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        localStorage.removeItem('user');

        // Clear cache
        queryClient.setQueryData(USER_QUERY_KEY, null);

        router.push('/auth/login');
    };

    return {
        user: user || null,
        loading: isLoading,
        login,
        logout,
        isAuthenticated: !!user
    };
};