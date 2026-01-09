import React from 'react';
import { useRouter } from 'next/router';
import { NextSeo, EventJsonLd } from 'next-seo';
import Navigation from '../../components/navigation';

const MovieDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    // Mock Data
    const movieData = {
        name: 'Chiến Binh Cuối Cùng',
        description: 'Bom tấn hành động kịch tính nhất năm với kỹ xảo đỉnh cao. Khởi chiếu tại tất cả các rạp.',
        image: 'https://images.pexels.com/photos/4062524/pexels-photo-4062524.jpeg',
        director: 'James Cameron',
        dateCreated: '2025-12-25',
        rating: 4.8,
    };

    return (
        <>
            <NextSeo
                title={`${movieData.name} | Vé Xem Phim`}
                description={movieData.description}
                openGraph={{
                    title: `${movieData.name} - Đặt vé ngay`,
                    description: movieData.description,
                    url: `https://bookinghub.com/movie/${id}`,
                    type: 'video.movie',
                    images: [
                        {
                            url: movieData.image,
                            width: 800,
                            height: 1200,
                            alt: movieData.name,
                        },
                    ],
                }}
            />
            <EventJsonLd
                name={`Suất chiếu phim: ${movieData.name}`}
                startDate="2025-12-25T19:30"
                endDate="2025-12-25T21:30"
                location={{
                    name: 'Booking Hub Cinema',
                    address: {
                        streetAddress: '123 Cinema Street',
                        addressLocality: 'Ho Chi Minh City',
                        addressRegion: 'SG',
                        postalCode: '70000',
                        addressCountry: 'VN',
                    },
                }}
                url={`https://bookinghub.com/movie/${id}`}
                images={[movieData.image]}
                description={movieData.description}
            />

            <Navigation />
            <div className="movie-detail-container" style={{ paddingTop: '80px', paddingBottom: '40px', background: '#000', color: '#fff', minHeight: '100vh' }}>
                <div className="container">
                    <div className="movie-grid">
                        <div className="movie-poster">
                            <img src={movieData.image} alt={movieData.name} style={{ width: '100%', borderRadius: '8px', boxShadow: '0 4px 20px rgba(255,255,255,0.1)' }} />
                        </div>
                        <div className="movie-info" style={{ paddingLeft: '40px' }}>
                            <h1 style={{ fontSize: '3rem', marginBottom: '10px' }}>{movieData.name}</h1>
                            <div className="meta" style={{ display: 'flex', gap: '20px', color: '#ccc', marginBottom: '20px' }}>
                                <span>{movieData.dateCreated}</span>
                                <span>{movieData.director}</span>
                                <span>★ {movieData.rating}</span>
                            </div>
                            <p className="desc" style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '40px' }}>{movieData.description}</p>

                            <div className="booking-cta">
                                <button className="btn btn-primary btn-xl">Đặt Vé Ngay</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .container { max-width: 1000px; margin: 0 auto; padding: 0 20px; }
        .movie-grid { display: grid; grid-template-columns: 300px 1fr; }
        @media (max-width: 768px) { .movie-grid { grid-template-columns: 1fr; gap: 30px; } .movie-info { padding-left: 0 !important; } }
      `}</style>
        </>
    );
};

export default MovieDetail;