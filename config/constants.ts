export const BOOKING_STATUS = {
    PENDING: 'PENDING',
    CONFIRMED: 'CONFIRMED',
    CANCELLED: 'CANCELLED',
    COMPLETED: 'COMPLETED',
} as const;

export type BookingStatus = keyof typeof BOOKING_STATUS;

export const PAYMENT_STATUS = {
    PENDING: 'PENDING',
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED',
    REFUNDED: 'REFUNDED',
} as const;

export type PaymentStatus = keyof typeof PAYMENT_STATUS;

export const BOOKING_TYPE = {
    MOVIE: 'MOVIE',
    HOTEL: 'HOTEL',
    RESTAURANT: 'RESTAURANT',
    PARK: 'PARK',
} as const;

export type BookingType = keyof typeof BOOKING_TYPE;

export const PAYMENT_METHOD = {
    VISA: 'VISA',
    MASTERCARD: 'MASTERCARD',
    MOMO: 'MOMO',
    ZALOPAY: 'ZALOPAY',
    VNPAY: 'VNPAY',
} as const;

export type PaymentMethod = keyof typeof PAYMENT_METHOD;

export const MOVIE_RATING = {
    T18: 'T18',
    P: 'P',
    C13: 'C13',
    C16: 'C16',
} as const;

export type MovieRating = keyof typeof MOVIE_RATING;

export const STORAGE_KEYS = {
    TOKEN: 'token',
    REFRESH_TOKEN: 'refreshToken',
    USER: 'user',
} as const;

export type StorageKey = keyof typeof STORAGE_KEYS;
