import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

const ShowcaseSection: React.FC = () => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const carousel = scrollContainerRef.current
        if (!carousel) return

        let isDown = false
        let startX: number
        let scrollLeft: number

        const handleMouseDown = (e: MouseEvent) => {
            isDown = true
            carousel.classList.add('active')
            startX = e.pageX - carousel.offsetLeft
            scrollLeft = carousel.scrollLeft
        }

        const handleMouseLeave = () => {
            isDown = false
            carousel.classList.remove('active')
        }

        const handleMouseUp = () => {
            isDown = false
            carousel.classList.remove('active')
        }

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDown) return
            e.preventDefault()
            const x = e.pageX - carousel.offsetLeft
            // Scroll speed multiplier
            const walk = (x - startX) * 2
            carousel.scrollLeft = scrollLeft - walk
        }

        carousel.addEventListener('mousedown', handleMouseDown)
        carousel.addEventListener('mouseleave', handleMouseLeave)
        carousel.addEventListener('mouseup', handleMouseUp)
        carousel.addEventListener('mousemove', handleMouseMove)

        return () => {
            carousel.removeEventListener('mousedown', handleMouseDown)
            carousel.removeEventListener('mouseleave', handleMouseLeave)
            carousel.removeEventListener('mouseup', handleMouseUp)
            carousel.removeEventListener('mousemove', handleMouseMove)
        }
    }, [])

    // Inline styles for the grab cursor behavior if not present in global css
    const styles = `
    .carousel-container {
      cursor: grab;
      overflow-x: auto;
      scrollbar-width: none; /* Firefox */
      -ms-overflow-style: none; /* IE 10+ */
    }
    .carousel-container::-webkit-scrollbar { 
      display: none; /* Chrome/Safari */
    }
    .carousel-container.active {
      cursor: grabbing;
    }
  `

    return (
        <>
            <style>{styles}</style>
            <section className="showcase-section">
                <div className="section-header-full">
                    <h2 className="section-title">Khám Phá Xu Hướng</h2>
                    <p className="section-content">
                        Những lựa chọn hàng đầu dành riêng cho bạn hôm nay.
                    </p>
                </div>
                <div
                    id="showcaseCarousel"
                    className="carousel-container"
                    ref={scrollContainerRef}
                >
                    <div className="carousel-track">
                        <div className="showcase-card">
                            <div className="card-media">
                                <img
                                    src="https://images.pexels.com/photos/14021955/pexels-photo-14021955.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                                    alt="Hotel 1"
                                />
                                <span className="card-badge">Khách Sạn</span>
                            </div>
                            <div className="card-body">
                                <h3 className="section-subtitle">Grand Plaza Suite</h3>
                                <p className="section-content">
                                    Trải nghiệm không gian xa hoa tại trung tâm thành phố.
                                </p>
                                <div className="card-footer">
                                    <span className="price">Từ 2.500.000đ</span>
                                    <button className="btn btn-primary btn-sm">Đặt Ngay</button>
                                </div>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="card-media">
                                <img
                                    src="https://images.pexels.com/photos/4062524/pexels-photo-4062524.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                                    alt="Cinema 1"
                                    className="object-cover"
                                />
                                <span className="card-badge">Phim Ảnh</span>
                            </div>
                            <div className="card-body">
                                <h3 className="section-subtitle">Chiến Binh Cuối Cùng</h3>
                                <p className="section-content">
                                    Bom tấn hành động không thể bỏ lỡ trong tháng này.
                                </p>
                                <div className="card-footer">
                                    <span className="price">95.000đ</span>
                                    <button className="btn btn-primary btn-sm">Mua Vé</button>
                                </div>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="card-media">
                                <img
                                    src="https://images.pexels.com/photos/5461582/pexels-photo-5461582.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                                    alt="Hotel 2"
                                />
                                <span className="card-badge">Khách Sạn</span>
                            </div>
                            <div className="card-body">
                                <h3 className="section-subtitle">Ocean Breeze Resort</h3>
                                <p className="section-content">
                                    Tận hưởng tiếng sóng biển ngay bên hiên nhà bạn.
                                </p>
                                <div className="card-footer">
                                    <span className="price">Từ 1.800.000đ</span>
                                    <button className="btn btn-primary btn-sm">Đặt Ngay</button>
                                </div>
                            </div>
                        </div>
                        <div className="showcase-card">
                            <div className="card-media">
                                <img
                                    src="https://images.pexels.com/photos/19169811/pexels-photo-19169811.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
                                    alt="Cinema 2"
                                />
                                <span className="card-badge">Phim Ảnh</span>
                            </div>
                            <div className="card-body">
                                <h3 className="section-subtitle">Hành Trình Kỳ Diệu</h3>
                                <p className="section-content">
                                    Phim hoạt hình cảm động dành cho cả gia đình.
                                </p>
                                <div className="card-footer">
                                    <span className="price">85.000đ</span>
                                    <button className="btn btn-primary btn-sm">Mua Vé</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShowcaseSection
