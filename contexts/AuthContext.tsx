import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { apiClient } from '../lib/api-client';
import { useRouter } from 'next/router';
import { useUser, User, USER_QUERY_KEY } from '../hooks/use-auth';
import { queryClient } from '../lib/react-query';



interface AuthContextType {
    user: User | null;
    loading: boolean;
    login: (token: string, refreshToken: string, user: User) => void;
    logout: () => void;
    isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const { data: user, isLoading, refetch } = useUser();
    const router = useRouter();

    const login = async (token: string, refreshToken: string, newUser: User) => {
        localStorage.setItem('token', token);
        // localStorage.setItem('refreshToken', refreshToken); // Removed: Refresh Token is now in HttpOnly Cookie
        localStorage.setItem('user', JSON.stringify(newUser));

        // Invalidate query to refetch/update from cache
        await queryClient.invalidateQueries({ queryKey: USER_QUERY_KEY });

        // Or manually set data if we trust the login response
        queryClient.setQueryData(USER_QUERY_KEY, newUser);
    };

    const logout = async () => {
        try {
            await apiClient.post('/auth/logout');
        } catch (error) {
            console.error("Logout failed", error);
        }
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken'); // Cleanup legacy if present
        localStorage.removeItem('user');

        // Clear React Query cache for user
        queryClient.setQueryData(USER_QUERY_KEY, null);

        router.push('/auth/login');
    };

    return (
        <AuthContext.Provider value={{ user: user || null, loading: isLoading, login, logout, isAuthenticated: !!user }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};