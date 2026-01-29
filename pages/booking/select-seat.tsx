import React, { useState, useEffect } from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMovie, useShowtimes } from '../../hooks/use-movies'
import styles from '../../styles/booking-seat.module.css'

// Custom Icons
const MapPin = ({ size = 24, color = "currentColor" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
        <circle cx="12" cy="10" r="3"></circle>
    </svg>
)

const Clock = ({ size = 24, color = "currentColor" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
)

const ROWS = 10
const COLS = 12
const PRICES: Record<string, number> = {
    standard: 85000,
    vip: 110000,
    couple: 190000
}

interface SeatState {
    id: string
    row: string
    col: number
    type: 'standard' | 'vip' | 'couple'
    status: 'available' | 'occupied' | 'selected'
}

// Generate Initial Seats
const generateSeats = (): SeatState[] => {
    const seats: SeatState[] = []
    const rows = 'ABCDEFGHIJ'.split('')

    rows.forEach((row, rowIndex) => {
        for (let c = 1; c <= COLS; c++) {
            let type: 'standard' | 'vip' | 'couple' = 'standard'
            if (rowIndex >= 5 && rowIndex <= 7) type = 'vip'
            if (rowIndex >= 8) type = 'couple'

            // Random occupied for demo
            const isOccupied = Math.random() < 0.2

            seats.push({
                id: `${row}${c}`,
                row,
                col: c,
                type,
                status: isOccupied ? 'occupied' : 'available'
            })
        }
    })
    return seats
}

const SeatSelectionPage = () => {
    const router = useRouter()
    const { movieId } = router.query

    // Convert movieId to number, handling potential string array
    const id = movieId ? Number(Array.isArray(movieId) ? movieId[0] : movieId) : 0

    const { data: movie, isLoading: loadingMovie } = useMovie(id)
    const { data: showtimes, isLoading: loadingShowtimes } = useShowtimes(id)

    const [activeDateIndex, setActiveDateIndex] = useState(0)
    const [activeShowtimeId, setActiveShowtimeId] = useState<number | null>(null)
    const [seats, setSeats] = useState<SeatState[]>([])

    // Group showtimes by Date
    const showtimesByDate = React.useMemo(() => {
        if (!showtimes) return []

        const groups: { date: string, day: string, rawDate: Date, showtimes: any[] }[] = []

        showtimes.forEach((show: any) => {
            const dateObj = new Date(show.startTime)
            const dateStr = dateObj.getDate().toString() // "20"
            const dayStr = dateObj.toLocaleDateString('vi-VN', { weekday: 'short' }) // "T2" or "Th 2"

            // Normalize "Th 2" to "T2" style if needed, or just use locale default
            // Let's use simple check or just standard format

            let group = groups.find(g => g.rawDate.toDateString() === dateObj.toDateString())
            if (!group) {
                group = {
                    date: dateStr,
                    day: dayStr.replace('Th ', 'T').replace('Chủ Nhật', 'CN'),
                    rawDate: dateObj,
                    showtimes: []
                }
                groups.push(group)
            }
            group.showtimes.push(show)
        })

        return groups.sort((a, b) => a.rawDate.getTime() - b.rawDate.getTime())
    }, [showtimes])

    useEffect(() => {
        if (showtimesByDate.length > 0 && activeDateIndex < showtimesByDate.length) {
            const firstShow = showtimesByDate[activeDateIndex].showtimes[0]
            if (firstShow) setActiveShowtimeId(firstShow.id)
        }
    }, [showtimesByDate, activeDateIndex])

    // Reset seats when showtime changes (User would expect refreshed seats)
    useEffect(() => {
        if (activeShowtimeId) {
            // Ideally fetch real seats here: useSeats(activeShowtimeId)
            // For now, use the random generator to simulate freshness
            setSeats(generateSeats())
        }
    }, [activeShowtimeId])

    const handleSeatClick = (seatId: string) => {
        setSeats(prev => prev.map(seat => {
            if (seat.id !== seatId || seat.status === 'occupied') return seat

            const newStatus = seat.status === 'selected' ? 'available' : 'selected'
            return { ...seat, status: newStatus }
        }))
    }

    if (loadingMovie || loadingShowtimes) {
        return (
            <div style={{ minHeight: '100vh', background: '#0f172a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                Đang tải dữ liệu...
            </div>
        )
    }

    // Handle case where specific movie is not found, or ID is invalid
    if (!movie) {
        return (
            <div style={{ minHeight: '100vh', background: '#0f172a', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 16 }}>
                <div>{id === 0 ? 'Vui lòng chọn phim từ trang chủ.' : 'Không tìm thấy thông tin phim.'}</div>
                <button
                    onClick={() => router.push('/')}
                    style={{ padding: '8px 16px', borderRadius: 4, background: '#3b82f6', color: 'white', border: 'none', cursor: 'pointer' }}
                >
                    Về Trang Chủ
                </button>
            </div>
        )
    }

    const currentShowtime = showtimes?.find((s: any) => s.id === activeShowtimeId)
    const selectedSeats = seats.filter(s => s.status === 'selected')
    const totalPrice = selectedSeats.reduce((sum, seat) => sum + PRICES[seat.type], 0)

    // Format helpers
    const formatTime = (isoString?: string) => {
        if (!isoString) return '--:--'
        return new Date(isoString).toLocaleTimeString('vi-VN', { hour: '2-digit', minute: '2-digit' })
    }

    const handleBooking = () => {
        if (!currentShowtime) {
            alert("Vui lòng chọn suất chiếu!")
            return
        }
        alert(`Đặt vé thành công!\nPhim: ${movie.title}\nSuất: ${formatTime(currentShowtime.startTime)}\nGhế: ${selectedSeats.map(s => s.id).join(', ')}\nTổng: ${totalPrice.toLocaleString()} đ`)
        // Navigate custom or home
        router.push('/')
    }

    return (
        <>
            <NextSeo
                title={`Đặt Vé - ${movie.title}`}
                description="Chọn chỗ ngồi tốt nhất cho trải nghiệm điện ảnh của bạn."
            />

            <div className={styles.container}>
                {/* Header */}
                <header className={styles.header}>
                    <div className={styles.backdrop}>
                        {movie.posterUrl && (
                            <Image
                                src={movie.posterUrl}
                                alt="Backdrop"
                                layout="fill"
                                objectFit="cover"
                                className={styles.backdropImage}
                            />
                        )}
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0f172a, transparent)' }} />
                    </div>

                    <div className={styles.headerContent}>
                        <img src={movie.posterUrl} alt={movie.title} className={styles.poster} />
                        <div className={styles.movieInfo}>
                            <h1>{movie.title}</h1>
                            <div className={styles.meta}>
                                <span><MapPin size={16} /> {currentShowtime?.cinemaName || 'Booking Hub Center'}</span>
                                <span><Clock size={16} /> {movie.duration} phút</span>
                                <span><span style={{ background: '#c026d3', padding: '2px 6px', borderRadius: 4, fontSize: 12, fontWeight: 'bold' }}>T18</span></span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Date Selector */}
                <div className={styles.dateSelector}>
                    <div className={styles.datesScroll}>
                        {showtimesByDate.map((d, i) => (
                            <div
                                key={d.date}
                                className={`${styles.dateItem} ${activeDateIndex === i ? styles.active : ''}`}
                                onClick={() => setActiveDateIndex(i)}
                            >
                                <span className={styles.day}>{d.day}</span>
                                <span className={styles.date}>{d.date}</span>
                            </div>
                        ))}
                        {showtimesByDate.length === 0 && (
                            <div style={{ color: '#94a3b8', padding: '10px 20px' }}>Chưa có lịch chiếu</div>
                        )}
                    </div>
                </div>

                {/* Time Selector (Optional if multiple showtimes per day) */}
                {showtimesByDate[activeDateIndex]?.showtimes.length > 0 && (
                    <div style={{ display: 'flex', gap: 10, padding: '0 20px 20px', overflowX: 'auto' }}>
                        {showtimesByDate[activeDateIndex].showtimes.map((show: any) => (
                            <button
                                key={show.id}
                                onClick={() => setActiveShowtimeId(show.id)}
                                style={{
                                    background: activeShowtimeId === show.id ? '#3b82f6' : '#1e293b',
                                    color: 'white',
                                    border: 'none',
                                    padding: '8px 16px',
                                    borderRadius: 6,
                                    cursor: 'pointer'
                                }}
                            >
                                {formatTime(show.startTime)}
                            </button>
                        ))}
                    </div>
                )}


                {/* Main Content */}
                <main className={styles.mainContent}>
                    {/* Seat Map Section */}
                    <div>
                        <div className={styles.screenSection}>
                            <div className={styles.screen}><span style={{ display: 'block', textAlign: 'center', paddingTop: 10, opacity: 0.5 }}>MÀN HÌNH</span></div>
                        </div>

                        <div className={styles.seatMap}>
                            {'ABCDEFGHIJ'.split('').map(row => (
                                <div key={row} className={styles.row}>
                                    <span className={styles.rowLabel}>{row}</span>
                                    {seats.filter(s => s.row === row).map(seat => (
                                        <div
                                            key={seat.id}
                                            className={`
                                        ${styles.seat} 
                                        ${styles[seat.type]} 
                                        ${styles[seat.status]}
                                    `}
                                            onClick={() => handleSeatClick(seat.id)}
                                            title={`${seat.id} - ${seat.type.toUpperCase()} - ${PRICES[seat.type].toLocaleString()}đ`}
                                        ></div>
                                    ))}
                                </div>
                            ))}
                        </div>

                        {/* Legend */}
                        <div className={styles.legend}>
                            <div className={styles.legendItem}>
                                <div className={`${styles.legendBox} ${styles.seat}`} style={{ cursor: 'default' }}></div>
                                <span>Thường</span>
                            </div>
                            <div className={styles.legendItem}>
                                <div className={`${styles.legendBox} ${styles.seat} ${styles.vip}`} style={{ cursor: 'default' }}></div>
                                <span>VIP</span>
                            </div>
                            <div className={styles.legendItem}>
                                <div className={`${styles.legendBox} ${styles.seat} ${styles.couple}`} style={{ width: 40, cursor: 'default' }}></div>
                                <span>Couple</span>
                            </div>
                            <div className={styles.legendItem}>
                                <div className={`${styles.legendBox} ${styles.seat} ${styles.occupied}`} style={{ cursor: 'default' }}></div>
                                <span>Đã đặt</span>
                            </div>
                            <div className={styles.legendItem}>
                                <div className={`${styles.legendBox} ${styles.seat} ${styles.selected}`} style={{ cursor: 'default' }}></div>
                                <span>Đang chọn</span>
                            </div>
                        </div>
                    </div>

                    {/* Side Panel (Booking Summary) */}
                    <aside>
                        <div className={styles.sidePanel}>
                            <h3 className={styles.summaryTitle}>Thông tin đặt vé</h3>

                            <div className={styles.summaryRow}>
                                <span className={styles.label}>Phim</span>
                                <span className={styles.value} style={{ textAlign: 'right' }}>{movie.title}</span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span className={styles.label}>Suất chiếu</span>
                                <span className={styles.value}>
                                    {currentShowtime ? `${formatTime(currentShowtime.startTime)}, ${new Date(currentShowtime.startTime).toLocaleDateString('vi-VN')}` : 'Chưa chọn'}
                                </span>
                            </div>
                            <div className={styles.summaryRow}>
                                <span className={styles.label}>Rạp</span>
                                <span className={styles.value}>{currentShowtime?.cinemaName || 'Booking Hub Center'}</span>
                            </div>

                            <div className={styles.summaryRow}>
                                <span className={styles.label}>Ghế</span>
                                <div className={styles.seatsList}>
                                    {selectedSeats.length > 0 ? (
                                        selectedSeats.map(s => (
                                            <span key={s.id} style={{ color: '#faaf00' }}>{s.id}</span>
                                        ))
                                    ) : (
                                        <span className={styles.value}>Chưa chọn</span>
                                    )}
                                </div>
                            </div>

                            <div className={styles.totalSection}>
                                <div className={styles.summaryRow}>
                                    <span className={styles.label}>Tổng cộng</span>
                                    <span className={styles.totalPrice}>
                                        {totalPrice.toLocaleString()} đ
                                    </span>
                                </div>
                                <button
                                    className={styles.btnBook}
                                    disabled={selectedSeats.length === 0}
                                    onClick={handleBooking}
                                >
                                    Đặt Vé Ngay
                                </button>
                            </div>
                        </div>
                    </aside>
                </main>
            </div>
        </>
    )
}

export default SeatSelectionPage