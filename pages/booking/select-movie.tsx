import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import Navigation from '../../components/navigation'
import MovieCard from '../../components/movies/MovieCard'
import styles from '../../styles/select-movie.module.css'
import { useNowShowingMovies, useUpcomingMovies } from '../../hooks/use-movies'

// Inline Icon
const SearchIcon = ({ size = 20, color = "currentColor" }) => (
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
        <circle cx="11" cy="11" r="8"></circle>
        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
)


const SelectMoviePage = () => {
    const [activeTab, setActiveTab] = useState<'now' | 'soon'>('now')
    const [searchTerm, setSearchTerm] = useState('')

    const { data: moviesNow } = useNowShowingMovies()
    const { data: moviesSoon } = useUpcomingMovies()

    const displayedMovies = (activeTab === 'now' ? moviesNow : moviesSoon) || []
    const filteredMovies = displayedMovies.filter((movie: any) =>
        movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <>
            <NextSeo
                title="Chọn Phim - Booking Hub"
                description="Danh sách phim đang chiếu và sắp chiếu tại Booking Hub."
            />
            <Navigation />
            <div className={styles.container}>
                <div className={styles.header}>
                    <h1 className={styles.title}>Phim Đang Chiếu</h1>
                    <p className={styles.subtitle}>
                        Khám phá những bộ phim bom tấn mới nhất và đặt vé ngay hôm nay để nhận ưu đãi hấp dẫn.
                    </p>

                    <div className={styles.tabs}>
                        <button
                            className={`${styles.tab} ${activeTab === 'now' ? styles.active : ''}`}
                            onClick={() => setActiveTab('now')}
                        >
                            Đang Chiếu
                        </button>
                        <button
                            className={`${styles.tab} ${activeTab === 'soon' ? styles.active : ''}`}
                            onClick={() => setActiveTab('soon')}
                        >
                            Sắp Chiếu
                        </button>
                    </div>
                </div>

                <div className={styles.controls}>
                    <div className={styles.searchWrapper}>
                        <div className={styles.searchIcon}>
                            <SearchIcon size={20} />
                        </div>
                        <input
                            type="text"
                            placeholder="Tìm kiếm phim..."
                            className={styles.searchInput}
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                </div>

                <div className={styles.grid}>
                    {filteredMovies.map((movie: any) => (
                        <MovieCard
                            key={movie.id}
                            id={movie.id}
                            title={movie.title}
                            poster={movie.posterUrl}
                            rating={movie.rating}
                            genre={movie.genre}
                            duration={movie.duration + ' phút'}
                            status={activeTab}
                        />
                    ))}

                    {filteredMovies.length === 0 && (
                        <div style={{ gridColumn: '1/-1', textAlign: 'center', padding: 40, color: '#64748b' }}>
                            Không tìm thấy phim nào phù hợp.
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default SelectMoviePage