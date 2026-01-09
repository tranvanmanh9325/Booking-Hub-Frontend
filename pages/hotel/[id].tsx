import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { NextSeo, ProductJsonLd } from 'next-seo';
import Navigation from '../../components/navigation';
import Footer from '../../components/footer';

const HotelDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    // Mock Data (In a real app, fetch this based on ID)
    const hotelData = {
        name: 'InterContinental Danang Sun Peninsula',
        description: 'Trải nghiệm thiên đường nghỉ dưỡng tại bán đảo Sơn Trà. Sang trọng, đẳng cấp và riêng tư.',
        price: '8500000',
        image: 'https://images.pexels.com/photos/5539613/pexels-photo-5539613.jpeg',
        rating: 4.9,
        reviewCount: 1200,
        address: 'Sơn Trà, Đà Nẵng, Việt Nam',
    };

    return (
        <>
            <NextSeo
                title={`${hotelData.name} | Booking Hub`}
                description={hotelData.description}
                openGraph={{
                    title: `${hotelData.name} - Đặt phòng ngay`,
                    description: hotelData.description,
                    url: `https://bookinghub.com/hotel/${id}`,
                    type: 'product',
                    images: [
                        {
                            url: hotelData.image,
                            width: 1200,
                            height: 600,
                            alt: hotelData.name,
                        },
                    ],
                }}
            />
            <ProductJsonLd
                productName={hotelData.name}
                images={[hotelData.image]}
                description={hotelData.description}
                brand="Booking Hub Hotels"
                offers={[
                    {
                        price: hotelData.price,
                        priceCurrency: 'VND',
                        itemCondition: 'https://schema.org/NewCondition',
                        availability: 'https://schema.org/InStock',
                        url: `https://bookinghub.com/hotel/${id}`,
                    },
                ]}
                aggregateRating={{
                    ratingValue: hotelData.rating.toString(),
                    reviewCount: hotelData.reviewCount.toString(),
                }}
            />

            <Navigation />
            <div className="hotel-detail-container" style={{ paddingTop: '80px', paddingBottom: '40px' }}>
                <div className="container">
                    <div className="grid-layout">
                        <div className="image-col">
                            <Image
                                src={hotelData.image}
                                alt={hotelData.name}
                                width={1200}
                                height={800}
                                style={{ width: '100%', height: 'auto', borderRadius: '12px' }}
                                priority
                            />
                        </div>
                        <div className="info-col" style={{ padding: '20px' }}>
                            <h1>{hotelData.name}</h1>
                            <p className="address">{hotelData.address}</p>
                            <div className="rating">★ {hotelData.rating} ({hotelData.reviewCount} đánh giá)</div>
                            <p className="description">{hotelData.description}</p>
                            <div className="price-tag">
                                <h3>{parseInt(hotelData.price).toLocaleString('vi-VN')}₫ <span style={{ fontSize: '14px', fontWeight: 'normal' }}>/ đêm</span></h3>
                            </div>
                            <button className="btn btn-primary btn-lg" style={{ marginTop: '20px' }}>Đặt Phòng Ngay</button>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
        .container { max-width: 1200px; margin: 0 auto; padding: 0 20px; }
        .grid-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; }
        @media (max-width: 768px) { .grid-layout { grid-template-columns: 1fr; } }
      `}</style>
        </>
    );
};

export default HotelDetail;