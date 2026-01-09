export interface ApiError {
    message: string;
    code?: string;
    status?: number;
    timestamp?: string;
}

export interface ApiResponse<T> {
    data: T;
    message?: string;
    success?: boolean;
}