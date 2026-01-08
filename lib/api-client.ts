import axios, { AxiosInstance, AxiosRequestConfig, AxiosError } from 'axios';
import { API_CONFIG } from '../config/api';
import { toast } from 'react-toastify';
import { getSpecificErrorMessage } from '../utils/error-mapping';
import { jwtDecode } from 'jwt-decode';

interface DecodedToken {
    exp: number;
}

class ApiClient {
    private instance: AxiosInstance;
    private isRefreshing = false;
    private failedQueue: any[] = [];

    constructor() {
        this.instance = axios.create({
            baseURL: API_CONFIG.BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        this.setupInterceptors();
    }

    private isTokenExpired(token: string): boolean {
        try {
            const decoded = jwtDecode<DecodedToken>(token);
            const currentTime = Date.now() / 1000;
            // Check if expired or expires in less than 10 seconds
            return decoded.exp < currentTime + 10;
        } catch (e) {
            return true; // Treat invalid token as expired
        }
    }

    private async refreshToken(): Promise<string | null> {
        try {
            const refreshToken = localStorage.getItem('refreshToken');
            if (!refreshToken) {
                return null;
            }

            // Avoid infinite loops if we use this.instance
            const response = await axios.post(`${API_CONFIG.BASE_URL}/api/v1/auth/refresh`, {
                refreshToken
            });

            const { token, refreshToken: newRefreshToken } = response.data;

            localStorage.setItem('token', token);
            if (newRefreshToken) {
                localStorage.setItem('refreshToken', newRefreshToken);
            }
            return token;
        } catch (error) {
            return null;
        }
    }

    private processQueue(error: any, token: string | null = null) {
        this.failedQueue.forEach(prom => {
            if (error) {
                prom.reject(error);
            } else {
                prom.resolve(token);
            }
        });
        this.failedQueue = [];
    }

    private setupInterceptors() {
        // Request Interceptor
        this.instance.interceptors.request.use(
            async (config) => {
                let token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;

                if (token) {
                    // Check if token is expired or about to expire (e.g., within 10 seconds)
                    if (this.isTokenExpired(token)) {
                        try {
                            const newToken = await this.refreshToken();
                            if (newToken) {
                                token = newToken;
                            }
                        } catch (error) {
                            // If refresh fails, let the request proceed with old token -> it will fail with 401
                            // and be handled by response interceptor or just fail.
                            // Ideally we should clear storage and redirect but response interceptor does that better.
                            console.warn("Token refresh failed in request interceptor", error);
                        }
                    }
                    config.headers.Authorization = `Bearer ${token}`;
                }

                // API Versioning Interceptor
                if (config.url && config.url.startsWith('/api/') && !config.url.startsWith('/api/v1/')) {
                    config.url = config.url.replace('/api/', '/api/v1/');
                }

                return config;
            },
            (error) => Promise.reject(error)
        );

        // Response Interceptor
        this.instance.interceptors.response.use(
            (response) => response,
            async (error: AxiosError) => {
                const originalRequest = error.config as any;

                // Handle 401 Unauthorized
                if (error.response?.status === 401 && !originalRequest._retry) {
                    // Skip refresh logic for login/register endpoints
                    if (originalRequest.url?.includes('/auth/login') || originalRequest.url?.includes('/auth/register')) {
                        return Promise.reject(error);
                    }

                    if (this.isRefreshing) {
                        return new Promise((resolve, reject) => {
                            this.failedQueue.push({ resolve, reject });
                        }).then((token) => {
                            originalRequest.headers.Authorization = `Bearer ${token}`;
                            return this.instance(originalRequest);
                        }).catch((err) => Promise.reject(err));
                    }

                    originalRequest._retry = true;
                    this.isRefreshing = true;

                    try {
                        const refreshToken = localStorage.getItem('refreshToken');
                        if (!refreshToken) {
                            throw new Error('No refresh token available');
                        }

                        const response = await axios.post(`${API_CONFIG.BASE_URL}/api/v1/auth/refresh`, {
                            refreshToken
                        });

                        const { token, refreshToken: newRefreshToken } = response.data;

                        localStorage.setItem('token', token);
                        if (newRefreshToken) {
                            localStorage.setItem('refreshToken', newRefreshToken);
                        }

                        this.processQueue(null, token);

                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return this.instance(originalRequest);
                    } catch (refreshError) {
                        this.processQueue(refreshError, null);
                        localStorage.removeItem('token');
                        localStorage.removeItem('refreshToken');
                        localStorage.removeItem('user');
                        window.location.href = '/auth/login';
                        // 401 fail to refresh -> Redirect to login, maybe toast here too?
                        toast.error('Phiên đăng nhập đã hết hạn.');
                        return Promise.reject(refreshError);
                    } finally {
                        this.isRefreshing = false;
                    }
                }

                // General Error Handling with Toast
                // Skip toast for 401 because it might be handled by refresh token logic above or redirect
                // But if it fails refresh, we toasted above.
                if (error.response?.status !== 401) {
                    const message = getSpecificErrorMessage(error);
                    toast.error(message);
                }

                return Promise.reject(error);
            }
        );
    }

    public get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.get<T>(url, config).then(res => res.data);
    }

    public post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.post<T>(url, data, config).then(res => res.data);
    }

    public put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.put<T>(url, data, config).then(res => res.data);
    }

    public delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.instance.delete<T>(url, config).then(res => res.data);
    }
}

export const apiClient = new ApiClient();