import React, { useState, useEffect, useMemo, useRef } from 'react'
import { NextSeo } from 'next-seo'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useMovie, useShowtimes, useSeats } from '../../hooks/use-movies'
import { addDays, format, isSameDay, startOfDay } from 'date-fns'
import { vi } from 'date-fns/locale'
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

const ChevronLeft = ({ size = 24, color = "currentColor" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
)

const ChevronRight = ({ size = 24, color = "currentColor" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
)

const SeatSelectionPage = () => {
    const router = useRouter()
    const { movieId } = router.query

    // Convert movieId to number, handling potential string array
    const id = movieId ? Number(Array.isArray(movieId) ? movieId[0] : movieId) : 0

    const { data: movie, isLoading: loadingMovie } = useMovie(id)
    const { data: showtimes, isLoading: loadingShowtimes } = useShowtimes(id)

    const [activeDateIndex, setActiveDateIndex] = useState(0)
    const [activeShowtimeId, setActiveShowtimeId] = useState<number | null>(null)
    const [selectedSeatIds, setSelectedSeatIds] = useState<number[]>([]) // Store selected seat IDs
    const scrollRef = useRef<HTMLDivElement>(null)

    // Generate 2-year date range
    const dates = useMemo(() => {
        const today = startOfDay(new Date())
        return Array.from({ length: 730 }, (_, i) => addDays(today, i))
    }, [])

    // Group showtimes by Date
    const showtimesByDate = useMemo(() => {
        return dates.map(date => {
            const dayShowtimes = showtimes ? showtimes.filter((show: any) =>
                isSameDay(new Date(show.startTime), date)
            ).sort((a: any, b: any) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime()) : []

            const dayStr = format(date, 'EEE', { locale: vi }) // "Th 2", "CN"
            // Normalize "Th 2" to "T2", "Chủ Nhật" to "CN"
            const formattedDay = dayStr.replace('Th ', 'T').replace('Chủ Nhật', 'CN')

            return {
                date: format(date, 'dd/MM'),
                day: formattedDay,
                rawDate: date,
                showtimes: dayShowtimes,
                hasShowtimes: dayShowtimes.length > 0
            }
        })
    }, [showtimes, dates])

    useEffect(() => {
        if (showtimesByDate.length > 0 && activeDateIndex < showtimesByDate.length) {
            const currentDayData = showtimesByDate[activeDateIndex]
            if (currentDayData.hasShowtimes && currentDayData.showtimes.length > 0) {
                // Only set active showtime if not already set or invalid
                const isValid = currentDayData.showtimes.find(s => s.id === activeShowtimeId)
                if (!isValid) {
                    // eslint-disable-next-line react-hooks/set-state-in-effect
                    setActiveShowtimeId(currentDayData.showtimes[0].id)
                }
            } else {
                setActiveShowtimeId(null)
            }
        }
    }, [showtimesByDate, activeDateIndex, activeShowtimeId])

    const currentShowtime = showtimes?.find((s: any) => s.id === activeShowtimeId)

    // Fetch seats for valid showtime
    const { data: seatsData } = useSeats(activeShowtimeId, currentShowtime?.screenId || null)

    // Helper to group seats by row for rendering
    const seatsByRow = useMemo(() => {
        if (!seatsData) return {}
        const rows: Record<string, typeof seatsData> = {}
        seatsData.forEach(seat => {
            if (!rows[seat.row]) rows[seat.row] = []
            rows[seat.row].push(seat)
        })
        // Sort seats within row
        Object.keys(rows).forEach(key => {
            rows[key].sort((a, b) => a.number - b.number)
        })
        return rows
    }, [seatsData])

    const rowLabels = Object.keys(seatsByRow).sort()

    // Reset selected seats when showtime changes
    // Updated to move side-effect to event handler
    // useEffect(() => {
    //    setSelectedSeatIds([])
    // }, [activeShowtimeId])

    const handleSeatClick = (seat: any) => {
        if (seat.isBooked) return

        setSelectedSeatIds(prev => {
            if (prev.includes(seat.id)) {
                return prev.filter(id => id !== seat.id)
            } else {
                return [...prev, seat.id]
            }
        })
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

    // Map backend seat types to frontend visual styles
    const getSeatTypeClass = (seatType: string) => {
        switch (seatType?.toUpperCase()) {
            case 'VIP': return 'vip'
            case 'COUPLE': return 'couple'
            default: return 'standard'
        }
    }

    // Calculate price based on selected seats
    const getSeatPrice = (seatType: string) => {
        const basePrice = currentShowtime?.price || 85000
        switch (seatType?.toUpperCase()) {
            case 'VIP': return basePrice + 20000
            case 'COUPLE': return basePrice * 2
            default: return basePrice
        }
    }

    const selectedSeats = seatsData ? seatsData.filter(s => selectedSeatIds.includes(s.id)) : []
    const totalPrice = selectedSeats.reduce((sum, seat) => sum + getSeatPrice(seat.seatType), 0)

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
        alert(`Đặt vé thành công!\nPhim: ${movie.title}\nSuất: ${formatTime(currentShowtime.startTime)}\nGhế: ${selectedSeats.map(s => `${s.row}${s.number}`).join(', ')}\nTổng: ${totalPrice.toLocaleString()} đ`)
        // Navigate custom or home
        router.push('/')
    }

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const { current } = scrollRef
            const scrollAmount = 300
            current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
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
                    <div className={styles.dateSelectorWrapper}>
                        <button
                            className={styles.scrollButton}
                            onClick={() => scroll('left')}
                            aria-label="Scroll Left"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <div className={styles.datesScroll} ref={scrollRef}>
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

                        <button
                            className={styles.scrollButton}
                            onClick={() => scroll('right')}
                            aria-label="Scroll Right"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>

                {/* Time Selector */}
                {/* Time Selector */}
                {showtimesByDate[activeDateIndex]?.hasShowtimes && (
                    <div className={styles.timeSelector}>
                        {showtimesByDate[activeDateIndex].showtimes.map((show: any) => (
                            <button
                                key={show.id}
                                onClick={() => {
                                    setActiveShowtimeId(show.id);
                                    setSelectedSeatIds([]);
                                }}
                                className={`${styles.timeButton} ${activeShowtimeId === show.id ? styles.active : ''}`}
                            >
                                {formatTime(show.startTime)}
                            </button>
                        ))}
                    </div>
                )}


                {/* Main Content */}
                {showtimesByDate[activeDateIndex]?.hasShowtimes ? (
                    <main className={styles.mainContent}>
                        {/* Seat Map Section */}
                        <div>
                            <div className={styles.screenSection}>
                                <div className={styles.screen}><span style={{ display: 'block', textAlign: 'center', paddingTop: 10, opacity: 0.5 }}>MÀN HÌNH</span></div>
                            </div>

                            <div className={styles.seatMap}>
                                {rowLabels.length > 0 ? rowLabels.map(row => (
                                    <div key={row} className={styles.row}>
                                        <span className={styles.rowLabel}>{row}</span>
                                        {seatsByRow[row].map(seat => (
                                            <div
                                                key={seat.id}
                                                className={`
                                            ${styles.seat} 
                                            ${styles[getSeatTypeClass(seat.seatType)]} 
                                            ${seat.isBooked ? styles.occupied : ''}
                                            ${selectedSeatIds.includes(seat.id) ? styles.selected : ''}
                                        `}
                                                onClick={() => handleSeatClick(seat)}
                                                title={`${row}${seat.number} - ${seat.seatType} - ${getSeatPrice(seat.seatType).toLocaleString()}đ`}
                                            ></div>
                                        ))}
                                    </div>
                                )) : (
                                    <div style={{ color: '#94a3b8', padding: 20 }}>Không tìm thấy dữ liệu ghế cho rạp này.</div>
                                )}
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
                                                <span key={s.id} style={{ color: '#faaf00' }}>{s.row}{s.number}</span>
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
                ) : (
                    <div style={{
                        minHeight: '400px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#64748b',
                        gap: '16px'
                    }}>
                        <div style={{ fontSize: '4rem', opacity: 0.2 }}>🎬</div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: 600, color: '#94a3b8' }}>Không có lịch chiếu</h2>
                        <p style={{ color: '#64748b' }}>Vui lòng chọn ngày khác để tiếp tục đặt vé</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default SeatSelectionPage