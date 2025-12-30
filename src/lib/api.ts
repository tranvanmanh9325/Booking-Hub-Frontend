import axios from 'axios';

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests
apiClient.interceptors.request.use(
  (config) => {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle response errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      if (typeof window !== 'undefined') {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export default apiClient;

// Auth API
export const authAPI = {
  register: (data: { email: string; password: string; fullName: string; phone?: string }) =>
    apiClient.post('/auth/register', data),
  login: (data: { email: string; password: string }) =>
    apiClient.post('/auth/login', data),
};

// Health check
export const healthAPI = {
  check: () => apiClient.get('/health'),
};

// Movie API
export const movieAPI = {
  getAllMovies: () => apiClient.get('/movies'),
  getMovieById: (id: number) => apiClient.get(`/movies/${id}`),
  searchMovies: (query: string) => apiClient.get(`/movies/search?q=${query}`),
  getNowShowing: () => apiClient.get('/movies/now-showing'),
  getShowtimesByMovie: (movieId: number) => apiClient.get(`/movies/${movieId}/showtimes`),
  getSeatsByShowtime: (showtimeId: number, screenId: number) => 
    apiClient.get(`/movies/showtimes/${showtimeId}/seats?screenId=${screenId}`),
  bookMovie: (data: { showtimeId: number; seatIds: number[] }) => 
    apiClient.post('/movies/book', data),
  getUserBookings: () => apiClient.get('/movies/bookings'),
  getBookingById: (bookingId: number) => apiClient.get(`/movies/bookings/${bookingId}`),
  cancelBooking: (bookingId: number) => apiClient.put(`/movies/bookings/${bookingId}/cancel`),
};

// Cinema API
export const cinemaAPI = {
  getAllCinemas: () => apiClient.get('/cinemas'),
  getCinemaById: (id: number) => apiClient.get(`/cinemas/${id}`),
};

// Hotel API
export const hotelAPI = {
  getAllHotels: () => apiClient.get('/hotels'),
  getHotelById: (id: number) => apiClient.get(`/hotels/${id}`),
  searchHotels: (query: string) => apiClient.get(`/hotels/search?q=${query}`),
  getHotelsByCity: (city: string) => apiClient.get(`/hotels/city/${city}`),
  getRoomsByHotel: (hotelId: number, checkIn?: string, checkOut?: string, guests?: number) => {
    const params = new URLSearchParams();
    if (checkIn) params.append('checkIn', checkIn);
    if (checkOut) params.append('checkOut', checkOut);
    if (guests) params.append('guests', guests.toString());
    return apiClient.get(`/hotels/${hotelId}/rooms?${params.toString()}`);
  },
  bookHotel: (data: { hotelId: number; roomId: number; checkIn: string; checkOut: string; guests: number }) =>
    apiClient.post('/hotels/book', data),
  getUserBookings: () => apiClient.get('/hotels/bookings'),
  getBookingById: (bookingId: number) => apiClient.get(`/hotels/bookings/${bookingId}`),
  cancelBooking: (bookingId: number) => apiClient.put(`/hotels/bookings/${bookingId}/cancel`),
};

// Payment API
export const paymentAPI = {
  processPayment: (data: { bookingId: number; bookingType: string; amount: number; paymentMethod: string }) =>
    apiClient.post('/payments', data),
  getPaymentById: (paymentId: number) => apiClient.get(`/payments/${paymentId}`),
  getPaymentByTransactionId: (transactionId: string) => 
    apiClient.get(`/payments/transaction/${transactionId}`),
  getPaymentsByBooking: (bookingId: number, bookingType: string) =>
    apiClient.get(`/payments/booking/${bookingId}?bookingType=${bookingType}`),
  refundPayment: (paymentId: number) => apiClient.post(`/payments/${paymentId}/refund`),
};