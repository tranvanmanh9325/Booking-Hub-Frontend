import { useQuery, useQueryClient } from '@tanstack/react-query';
import { apiClient } from '../lib/api-client';
import { useRouter } from 'next/router';

import { User } from '../types/auth';

export const USER_QUERY_KEY = ['user', 'profile'];

/**
 * Hook để lấy thông tin người dùng hiện tại từ cache hoặc localStorage.
 * Sử dụng React Query để quản lý state.
 */
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

/**
 * Hook chính để quản lý xác thực (Authentication).
 * Cung cấp user state, hàm login, logout và trạng thái loading.
 */
export const useAuth = () => {
    const { data: user, isLoading, refetch } = useUser();
    const queryClient = useQueryClient();
    const router = useRouter();

    /**
     * Hàm xử lý đăng nhập.
     * Lưu token vào localStorage và cập nhật cache của React Query.
     * @param token Access Token
     * @param refreshToken Refresh Token
     * @param newUser Thông tin user
     */
    const login = async (token: string, refreshToken: string, newUser: User) => {
        localStorage.setItem('token', token);
        // localStorage.setItem('refreshToken', refreshToken); // HttpOnly cookie ideally
        localStorage.setItem('user', JSON.stringify(newUser));

        // Update React Query cache immediately
        queryClient.setQueryData(USER_QUERY_KEY, newUser);
    };

    /**
     * Hàm xử lý đăng xuất.
     * Gọi API logout, xóa localStorage và clear cache.
     */
    const logout = async () => {
        try {
            await apiClient.post('/api/auth/logout');
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

    /**
     * Hàm cập nhật thông tin profile.
     * @param data Dữ liệu cần cập nhật
     */
    const updateProfile = async (data: Partial<User>) => {
        const response = await apiClient.put<User>('/api/users/profile', data);

        // Update local storage
        const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
        const updatedUser = { ...currentUser, ...response };
        localStorage.setItem('user', JSON.stringify(updatedUser));

        // Update React Query cache
        queryClient.setQueryData(USER_QUERY_KEY, updatedUser);

        return updatedUser;
    };

    /**
     * Hàm upload và cập nhật avatar.
     * @param file File ảnh
     */
    const updateAvatar = async (file: File) => {
        const avatarUrl = await apiClient.uploadAvatar(file);

        // Update local storage
        const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
        const updatedUser = { ...currentUser, avatarUrl };
        localStorage.setItem('user', JSON.stringify(updatedUser));

        // Update React Query cache
        queryClient.setQueryData(USER_QUERY_KEY, updatedUser);

        return avatarUrl;
    };

    return {
        user: user || null,
        loading: isLoading,
        login,
        logout,
        updateProfile,
        updateAvatar,
        isAuthenticated: !!user
    };
};