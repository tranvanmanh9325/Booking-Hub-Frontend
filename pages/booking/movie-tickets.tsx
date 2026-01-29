import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import Navigation from '../../components/navigation'
import { useAuth } from '../../hooks/use-auth'
import { MOVIE_RATING } from '../../config/constants'

const MovieTicketsSections = dynamic(() =>
  import('../../sections/movie-tickets-sections')
)

import { useNowShowingMovies, useUpcomingMovies, Movie } from '../../hooks/use-movies'

import { useShowtimes } from '../../hooks/use-movies'

const MovieCard = ({
  id,
  title,
  poster,
  rating,
  defaultTime,
}: any) => {
  const { data: showtimes } = useShowtimes(id)
  const times = showtimes?.map((s: any) => {
    // Format time from 2024-01-01T10:00:00 to 10:00
    const date = new Date(s.startTime);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
  }) || []

  const [selectedTime, setSelectedTime] = useState(defaultTime || times[0])

  // Mock seat config for visual since API doesn't return summary yet
  // In a real app we'd fetch this per showtime selection
  const seatConfig = { occupied: [], selected: [] }
  const seatsRemaining = 50 // Placeholder

  return (
    <div className="movie-card">
      <div className="movie-poster">
        <img src={poster} alt="Movie Poster" />
        <span className="movie-rating">{rating}</span>
      </div>
      <div className="movie-info">
        <h3>{title}</h3>
        <div className="time-slots">
          {times.length > 0 ? times.slice(0, 4).map((time: string) => (
            <button
              key={time}
              className={`time-btn ${selectedTime === time ? 'active' : ''}`}
              onClick={() => setSelectedTime(time)}
            >
              {time}
            </button>
          )) : <p className="text-sm text-gray-500">Chưa có lịch chiếu</p>}
        </div>
        <div className="seat-preview">
          <div className="screen-indicator">
            <span>Màn Hình</span>
          </div>
          <div className="seat-grid-mini">
            {[...Array(10)].map((_, i) => {
              let className = 'seat'
              // Randomly finish for visual effect if needed, otherwise empty
              return <div key={i} className={className}></div>
            })}
          </div>
          <p className="seat-status">Đang mở bán</p>
        </div>
      </div>
    </div>
  )
}


const MovieTickets = (props: any) => {
  const router = useRouter()
  const { isAuthenticated } = useAuth()
  const [activeTab, setActiveTab] = useState('tab-now')

  const { data: nowShowingMovies } = useNowShowingMovies()
  const { data: upcomingMovies } = useUpcomingMovies()

  return (
    <>
      <div className="movie-tickets-container1">
        <NextSeo
          title="Vé Xem Phim"
          description="Đặt vé xem phim bom tấn nhanh chóng, không cần xếp hàng tại Booking Hub."
          canonical="https://bookinghub.com/booking/movie-tickets"
          openGraph={{
            url: 'https://bookinghub.com/booking/movie-tickets',
            title: 'Vé Xem Phim - Booking Hub',
            description: 'Lịch chiếu phim mới nhất, hệ thống rạp toàn quốc.',
            images: [
              {
                url: 'https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg',
                width: 800,
                height: 600,
                alt: 'Cinema Hero',
              },
            ],
            site_name: 'Booking Hub',
          }}
        />
        <Navigation></Navigation>
        <section className="hero-booking">
          <div className="hero-media">
            <video
              autoPlay={true}
              muted={true}
              loop={true}
              playsInline={true}
              src="https://videos.pexels.com/video-files/7233574/7233574-hd_2048_864_25fps.mp4"
              className="hero-video"
            ></video>
            <div className="hero-scrim"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-card">
              <h1 className="movie-tickets-hero-title hero-title">
                Trải Nghiệm Điện Ảnh Đỉnh Cao Tại Booking Hub
              </h1>
              <p className="movie-tickets-hero-subtitle hero-subtitle">
                Đặt vé xem phim nhanh chóng, chọn chỗ ngồi ưng ý và thanh toán
                bảo mật chỉ trong vài bước chạm.
              </p>
              <div className="hero-actions">
                <button
                  className="btn btn-primary btn-lg"
                  onClick={() => {
                    if (isAuthenticated) {
                      router.push('/booking/select-movie')
                    } else {
                      router.push('/auth/login')
                    }
                  }}
                >
                  Đặt Vé Ngay
                </button>
                <button
                  className="btn btn-lg btn-outline"
                  onClick={() => {
                    const element = document.getElementById('showtimes')
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' })
                    }
                  }}
                >
                  Xem Lịch Chiếu
                </button>
              </div>
              <div className="hero-badges">
                <div className="badge-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                    <path d="m9 12l2 2l4-4"></path>
                  </svg>
                  <span>Thanh toán bảo mật</span>
                </div>
                <div className="badge-item">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Zm11-4v2m0 10v2m0-8v2"></path>
                  </svg>
                  <span>Vé điện tử tức thì</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="showtimes-tabs" id="showtimes">
          <div className="showtimes-container">
            <h2 className="movie-tickets-thq-section-title-elm1 section-title">
              Lịch Chiếu &amp; Chỗ Ngồi
            </h2>
            <div className="movie-tabs-header">
              <button
                className={`tab-trigger ${activeTab === 'tab-now' ? 'active' : ''
                  }`}
                onClick={() => setActiveTab('tab-now')}
              >
                Đang Chiếu
              </button>
              <button
                className={`tab-trigger ${activeTab === 'tab-soon' ? 'active' : ''
                  }`}
                onClick={() => setActiveTab('tab-soon')}
              >
                Sắp Chiếu
              </button>
              <button
                className={`tab-trigger ${activeTab === 'tab-special' ? 'active' : ''
                  }`}
                onClick={() => setActiveTab('tab-special')}
              >
                Suất Chiếu Đặc Biệt
              </button>
            </div>
            <div className="tabs-content">
              {activeTab === 'tab-now' && (
                <div id="tab-now" className="tab-panel active">
                  <div className="movie-grid">
                    {nowShowingMovies && nowShowingMovies.length > 0 ? (
                      nowShowingMovies.map((movie: Movie) => (
                        <MovieCard
                          key={movie.id}
                          id={movie.id}
                          title={movie.title}
                          poster={movie.posterUrl}
                          rating={movie.rating}
                          defaultTime={'19:00'}
                        />
                      ))
                    ) : (
                      <p className="text-center py-10 text-gray-400">Đang tải danh sách phim...</p>
                    )}
                  </div>
                </div>
              )}
              {activeTab === 'tab-soon' && (
                <div id="tab-soon" className="tab-panel active">
                  <div className="movie-grid">
                    {upcomingMovies && upcomingMovies.length > 0 ? (
                      upcomingMovies.map((movie: Movie) => (
                        <MovieCard
                          key={movie.id}
                          id={movie.id}
                          title={movie.title}
                          poster={movie.posterUrl}
                          rating={movie.rating}
                          defaultTime={movie.releaseDate}
                        />
                      ))
                    ) : (
                      <div className="empty-state">
                        <p>Các phim sắp chiếu sẽ được cập nhật sớm nhất.</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {activeTab === 'tab-special' && (
                <div id="tab-special" className="tab-panel active">
                  <div className="empty-state">
                    <p>Chưa có suất chiếu đặc biệt nào.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
        <section className="checkout-process">
          <div className="checkout-container">
            <h2 className="section-title">Quy Trình Đặt Vé</h2>
            <div className="stepper-wrapper">
              <div className="step-item active">
                <div className="step-icon">
                  <span>1</span>
                </div>
                <div className="step-label">
                  <span>Chọn Phim</span>
                </div>
              </div>
              <div className="step-connector"></div>
              <div className="step-item">
                <div className="step-icon">
                  <span>2</span>
                </div>
                <div className="step-label">
                  <span>Chọn Chỗ</span>
                </div>
              </div>
              <div className="step-connector"></div>
              <div className="step-item">
                <div className="step-icon">
                  <span>3</span>
                </div>
                <div className="step-label">
                  <span>Thanh Toán</span>
                </div>
              </div>
              <div className="step-connector"></div>
              <div className="step-item">
                <div className="step-icon">
                  <span>4</span>
                </div>
                <div className="step-label">
                  <span>Nhận Vé</span>
                </div>
              </div>
            </div>
            <div className="checkout-auth-card">
              <div className="auth-header">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--color-primary)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                  <path d="m9 12l2 2l4-4"></path>
                </svg>
                <h3>Bảo Mật Tuyệt Đối</h3>
              </div>
              <p className="section-content">
                Hệ thống Booking Hub sử dụng xác thực JWT và mã hóa SSL để đảm
                bảo mọi giao dịch của bạn luôn an toàn.
              </p>
              <div className="auth-actions">
                <button className="btn btn-primary">Đăng Nhập Ngay</button>
                <button className="btn btn-link">
                  Tiếp tục với tư cách khách
                </button>
              </div>
            </div>
          </div>
        </section>
        <MovieTicketsSections />
      </div>
      <style jsx>
        {`
          .movie-tickets-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .movie-tickets-thq-section-title-elm1 {
            text-align: center !important;
          }
           @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
            }
          }
        `}
      </style>
    </>
  )
}

export default MovieTickets