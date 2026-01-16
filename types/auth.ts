export interface User {
    id: number | string;
    email: string;
    fullName: string;
    avatarUrl?: string;
    phone?: string;
    role?: string;
    partnerType?: string;
}

export interface LoginRequest {
    email: string;
    password: string;
    rememberMe?: boolean;
}

export interface RegisterRequest {
    fullName: string;
    email: string;
    password: string;
    phone?: string;
}

export interface GoogleAuthRequest {
    email: string;
    name: string;
    picture?: string;
    googleId: string;
}

export interface AuthResponse {
    token: string;
    refreshToken: string;
    id: number;
    userId?: number; // Handle variations in backend response
    email: string;
    fullName: string;
    avatarUrl?: string;
    phone?: string;
    type?: string;
    role?: string;
    partnerType?: string;
}