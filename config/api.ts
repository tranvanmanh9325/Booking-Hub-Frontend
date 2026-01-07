const rawBaseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
export const API_CONFIG = {
    BASE_URL: rawBaseUrl.endsWith('/api') ? rawBaseUrl.slice(0, -4) : rawBaseUrl,
};

export const getApiUrl = (endpoint: string) => {
    // Remove leading slash if present
    const cleanEndpoint = endpoint.startsWith('/') ? endpoint.slice(1) : endpoint;
    // Ensure BASE_URL doesn't end with slash if we're going to append
    // But usually it's better to just join them carefully
    // Assuming BASE_URL might be "http://localhost:8080/api" or "http://localhost:8080"

    // Let's standardise: BASE_URL should result in something like "http://localhost:8080"
    // and endpoints should start with /api/ if they are full paths, or we configure BASE_URL to include /api

    // Current hardcoded URLs are like 'http://localhost:8080/api/auth/login'
    // So let's make BASE_URL 'http://localhost:8080' by default

    return `${API_CONFIG.BASE_URL}/${cleanEndpoint}`;
};