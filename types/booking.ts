export enum BookingStatus {
    PENDING = 'PENDING',
    CONFIRMED = 'CONFIRMED',
    CANCELLED = 'CANCELLED',
    COMPLETED = 'COMPLETED'
}

export interface HotelBookingDTO {
    id: number;
    userId: number;
    hotelId: number;
    hotelName: string;
    hotelAddress?: string;
    roomId: number;
    roomType: string;
    checkIn: string;
    checkOut: string;
    guests: number;
    totalPrice: number;
    status: BookingStatus;
    createdAt: string;
    userFullName?: string; // Assuming we might want to show who booked it
    userEmail?: string;
    userPhone?: string;
}

export type PartnerBookingDTO = HotelBookingDTO;

export interface BookingSearchParams {
    page?: number;
    size?: number;
    status?: BookingStatus;
    startDate?: string;
    endDate?: string;
}
export interface ContentBookingDTO {
    id: number;
    bookingReference: string;
    userId: number;
    contentId: number;
    contentName: string;
    contentType: string;
    bookingDate: string;
    visitDate: string;
    quantity: number;
    totalPrice: number;
    status: BookingStatus;
    customerName: string;
    customerEmail: string;
    customerPhone: string;
    paymentStatus?: string;
}