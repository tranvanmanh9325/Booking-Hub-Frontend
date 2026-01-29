import React, { useState, useEffect, useRef } from 'react'

const testimonials = [
    {
        name: 'Nguyễn Minh Anh',
        role: 'Người dùng thân thiết',
        quote:
            '"Giao diện đặt vé của Booking Hub cực kỳ mượt mà. Tôi có thể chọn được ghế ngồi ưng ý chỉ trong chưa đầy 1 phút!"',
        stars: 5,
    },
    {
        name: 'Trần Hoàng Nam',
        role: 'Yêu thích điện ảnh',
        quote:
            '"Hệ thống thanh toán rất an toàn. Tôi hoàn toàn yên tâm khi sử dụng thẻ tín dụng để đặt vé tại đây."',
        stars: 5,
    },
    {
        name: 'Lê Thị Mai',
        role: 'Khách hàng mới',
        quote:
            '"Tốc độ tải trang và cập nhật lịch chiếu rất nhanh. Đây chắc chắn là ứng dụng đặt vé tốt nhất tôi từng dùng."',
        stars: 5,
    },
]

const TestimonialsCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(1)
    const trackRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 991) {
                setItemsPerPage(3)
            } else if (window.innerWidth > 767) {
                setItemsPerPage(2)
            } else {
                setItemsPerPage(1)
            }
        }

        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const nextSlide = () => {
        const maxIndex = testimonials.length - itemsPerPage
        if (currentIndex < maxIndex) {
            setCurrentIndex((prev) => prev + 1)
        } else {
            setCurrentIndex(0)
        }
    }

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1)
        }
    }

    return (
        <section className="testimonials-carousel">
            <div className="testimonials-container">
                <h2 className="section-title">Khách Hàng Nói Gì?</h2>
                <div className="carousel-viewport">
                    <div
                        className="carousel-track"
                        ref={trackRef}
                        style={{
                            transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`,
                            display: 'flex',
                            width: `${(testimonials.length / itemsPerPage) * 100}%`,
                            transition: 'transform 0.3s ease-in-out',
                        }}
                    >
                        {testimonials.map((item, index) => (
                            <div
                                key={index}
                                className="testimonial-card"
                                style={{
                                    width: `${100 / testimonials.length}%`,
                                    padding: '0 12px',
                                    boxSizing: 'border-box',
                                }}
                            >
                                <div className="stars">
                                    <span>{'★'.repeat(item.stars)}</span>
                                </div>
                                <p className="quote">{item.quote}</p>
                                <div className="author">
                                    <div className="author-info">
                                        <span className="name">{item.name}</span>
                                        <span className="role">{item.role}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="carousel-controls">
                    <button
                        aria-label="Previous"
                        className="carousel-btn prev"
                        onClick={prevSlide}
                    >
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
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                    </button>
                    <button
                        aria-label="Next"
                        className="carousel-btn next"
                        onClick={nextSlide}
                    >
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
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default TestimonialsCarousel
