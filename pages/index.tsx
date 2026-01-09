import React, { useState } from 'react'
import { NextSeo } from 'next-seo'
import dynamic from 'next/dynamic'
import Navigation from '../components/navigation'
import Script from 'dangerous-html/react'

// Dynamic Imports with loading placeholder
const FeaturesSection = dynamic(() => import('../components/home/FeaturesSection'))
const ShowcaseSection = dynamic(() => import('../components/home/ShowcaseSection'))
const StatsSection = dynamic(() => import('../components/home/StatsSection'))
const HomeSections = dynamic(() => import('../sections/home-sections'))

const Home: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'movie' | 'hotel' | 'restaurant'>('movie')
  const [searchPlaceholder, setSearchPlaceholder] = useState('Bạn muốn xem phim gì hôm nay?')

  const handleTabClick = (type: 'movie' | 'hotel' | 'restaurant') => {
    setActiveTab(type)
    if (type === 'movie') {
      setSearchPlaceholder('Bạn muốn xem phim gì hôm nay?')
    } else if (type === 'hotel') {
      setSearchPlaceholder('Bạn muốn nghỉ dưỡng ở đâu?')
    } else {
      // Keep default or previous logic
    }
  }

  return (
    <>
      <div className="home-container1">
        <NextSeo
          title="Trang Chủ"
          description="Booking Hub - Trải nghiệm đặt chỗ hoàn hảo cho phim ảnh và khách sạn."
          canonical="https://bookinghub.com/"
          openGraph={{
            url: 'https://bookinghub.com/',
            title: 'Booking Hub - Trang Chủ',
            description:
              'Đặt vé phim, phòng khách sạn và hơn thế nữa chỉ trên một ứng dụng duy nhất.',
            images: [
              {
                url: 'https://images.pexels.com/photos/29870243/pexels-photo-29870243.jpeg',
                width: 800,
                height: 600,
                alt: 'Booking Hub Hero',
              },
            ],
            site_name: 'Booking Hub',
          }}
        />
        <Navigation></Navigation>
        <div className="home-container2">
          <div className="home-container3">
            <Script
              html={`<style>
section {
  position: relative;
  overflow: hidden;
}
</style>`}
            ></Script>
          </div>
        </div>
        <section className="hero-section">
          <div className="hero-media-container">
            <img
              src="https://images.pexels.com/photos/29870243/pexels-photo-29870243.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1500"
              alt="Booking Hub Hero"
              className="hero-bg-image"
            />
            <div className="hero-overlay"></div>
          </div>
          <div className="hero-content-wrapper">
            <div className="hero-text-block">
              <h1 className="home-hero-title hero-title">
                Trải Nghiệm Đặt Chỗ Hoàn Hảo
              </h1>
              <p className="home-hero-subtitle hero-subtitle">
                Từ những thước phim bom tấn đến những kỳ nghỉ sang trọng, Booking
                Hub kết nối mọi nhu cầu giải trí của bạn trong một nền tảng duy
                nhất.
              </p>
              <div className="hero-search-container">
                <div className="search-tabs">
                  <button
                    className={`search-tab ${activeTab === 'movie' ? 'active' : ''}`}
                    onClick={() => handleTabClick('movie')}
                  >
                    Phim Ảnh
                  </button>
                  <button
                    className={`search-tab ${activeTab === 'hotel' ? 'active' : ''}`}
                    onClick={() => handleTabClick('hotel')}
                  >
                    Khách Sạn
                  </button>
                  <button
                    className="search-tab disabled"
                    title="Sắp ra mắt"
                  >
                    Nhà Hàng
                  </button>
                </div>
                <form
                  action="/search"
                  method="GET"
                  data-form-id="d7b4f0f9-f90e-48e9-82f5-a79329de5b6e"
                  className="search-form"
                >
                  <div className="search-input-group">
                    <div className="search-field">
                      <input
                        type="text"
                        placeholder={searchPlaceholder}
                        required={true}
                        id="thq_textinput_n_V8"
                        name="textinput"
                        data-form-field-id="thq_textinput_n_V8"
                      />
                    </div>
                    <div className="search-field">
                      <input
                        type="date"
                        required={true}
                        id="thq_textinput_WVzY"
                        name="textinput"
                        data-form-field-id="thq_textinput_WVzY"
                      />
                    </div>
                    <button
                      type="submit"
                      id="thq_button_8H9E"
                      name="button"
                      data-form-field-id="thq_button_8H9E"
                      className="btn btn-accent btn-lg"
                    >
                      Tìm Kiếm
                    </button>
                  </div>
                </form>
                <div className="hero-quick-filters">
                  <span className="filter-label">Gợi ý:</span>
                  <button className="filter-chip">Phim hành động</button>
                  <button className="filter-chip">Resort ven biển</button>
                  <button className="filter-chip">Phòng Suite</button>
                </div>
              </div>
              <div className="hero-cta-group">
                <a href="#featured">
                  <div className="btn btn-primary btn-xl">
                    <span>Bắt Đầu Đặt Chỗ</span>
                  </div>
                </a>
                <a href="#about">
                  <div className="btn btn-xl btn-outline">
                    <span>Tìm Hiểu Thêm</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <FeaturesSection />
        <ShowcaseSection />
        <StatsSection />
        <HomeSections />

      </div>
      <style jsx>
        {`
          .home-container1 {
            width: 100%;
            display: block;
            min-height: 100vh;
          }
          .home-container2 {
            display: none;
          }
          .home-container3 {
            display: contents;
          }
          .home-container4 {
            display: none;
          }
          .home-container5 {
            display: contents;
          }
          .home-container6 {
            display: none;
          }
          .home-container7 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Home