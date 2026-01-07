import { API_CONFIG } from '../config/api';

interface RequestOptions extends RequestInit {
    headers?: Record<string, string>;
}

class ApiClient {
    private baseURL: string;

    constructor() {
        this.baseURL = API_CONFIG.BASE_URL;
    }

    private getHeaders(options?: RequestOptions): HeadersInit {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
            ...options?.headers,
        };

        if (typeof window !== 'undefined') {
            const token = localStorage.getItem('token');
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            }
        }

        return headers;
    }

    private async request<T>(endpoint: string, options?: RequestOptions): Promise<T> {
        // Ensure endpoint starts with / if not provided, allowing flexible usage
        const url = `${this.baseURL}${endpoint.startsWith('/') ? '' : '/'}${endpoint}`;

        const response = await fetch(url, {
            ...options,
            headers: this.getHeaders(options),
        });

        if (!response.ok) {
            // Handle 401 Unauthorized globally if needed (e.g., clear token)
            if (response.status === 401) {
                if (typeof window !== 'undefined') {
                    localStorage.removeItem('token');
                    // Optional: Redirect to login
                    // window.location.href = '/auth/login';
                }
            }

            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `API Error: ${response.statusText}`);
        }

        // Handle empty responses (e.g. 204 No Content)
        if (response.status === 204) {
            return {} as T;
        }

        return response.json();
    }

    public get<T>(endpoint: string, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'GET' });
    }

    public post<T>(endpoint: string, body: any, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(body),
        });
    }

    public put<T>(endpoint: string, body: any, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(body),
        });
    }

    public delete<T>(endpoint: string, options?: RequestOptions): Promise<T> {
        return this.request<T>(endpoint, { ...options, method: 'DELETE' });
    }
}

export const apiClient = new ApiClient();