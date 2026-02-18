export interface Showtime {
    id: number;
    movieId?: number;
    movieTitle?: string;
    contentId?: number;
    contentName?: string;
    screenId: number;
    screenName: string;
    cinemaId: number;
    cinemaName: string;
    cinemaAddress?: string;
    repeatUntilDate?: string;
    startTime: string;
    endTime: string;
    price: number;
}