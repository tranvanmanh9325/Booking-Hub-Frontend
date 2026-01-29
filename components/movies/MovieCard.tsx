import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../../styles/select-movie.module.css'

// Inline icons to avoid dependency issues
const Star = ({ size = 16, color = "currentColor" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
        stroke="none"
    >
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
    </svg>
)

const Clock = ({ size = 16, color = "currentColor" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10"></circle>
        <polyline points="12 6 12 12 16 14"></polyline>
    </svg>
)

interface MovieCardProps {
    id: string | number
    title: string
    poster: string
    rating: number
    ageRating?: string
    duration: string
    genre: string
    status: 'now' | 'soon'
    releaseDate?: string
}

const MovieCard: React.FC<MovieCardProps> = ({
    id,
    title,
    poster,
    rating,
    ageRating,
    duration,
    genre,
    status,
    releaseDate
}) => {
    const router = useRouter()

    const handleBook = () => {
        if (status === 'now') {
            router.push(`/booking/select-seat?movieId=${id}`)
        }
    }

    return (
        <div className={styles.card}>
            <div className={styles.posterWrapper}>
                <Image
                    src={poster}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className={styles.posterImage}
                />
                {ageRating && <div className={styles.ageBadge}>{ageRating}</div>}
                {status === 'now' && (
                    <div className={styles.ratingBadge}>
                        <Star size={14} color="#fbbf24" />
                        <span>{rating}</span>
                    </div>
                )}
            </div>

            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>

                <div className={styles.cardMeta}>
                    {status === 'now' ? (
                        <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                            <Clock size={14} /> {duration}
                        </span>
                    ) : (
                        <span>{releaseDate}</span>
                    )}
                </div>

                <div className={styles.genre}>{genre}</div>

                <button
                    className={`${styles.bookBtn} ${status === 'soon' ? styles.comingSoon : ''}`}
                    onClick={handleBook}
                    disabled={status === 'soon'}
                >
                    {status === 'now' ? 'Đặt Vé' : 'Sắp Chiếu'}
                </button>
            </div>
        </div>
    )
}

export default MovieCard