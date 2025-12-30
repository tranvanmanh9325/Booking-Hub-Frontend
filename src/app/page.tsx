'use client';

import Link from 'next/link';
import { useAuth } from '@/contexts/AuthContext';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const { isAuthenticated, user, logout } = useAuth();
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; delay: number }>>([]);
  const heroRef = useRef<HTMLElement>(null);
  const serviceCardsRef = useRef<HTMLDivElement>(null);

  // Initialize particles
  useEffect(() => {
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 8,
    }));
    setParticles(particleArray);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Scroll reveal for elements
      const reveals = document.querySelectorAll('.scroll-reveal');
      reveals.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add('revealed');
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-teal-50 overflow-hidden relative">
      {/* Enhanced Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
        <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-2xl opacity-20 animate-blob-fast"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-blob animation-delay-600"></div>
      </div>

      {/* Particle Effects */}
      <div className="particles fixed inset-0 pointer-events-none z-0">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle animate-particle-float"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${6 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Animated Gradient Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`
        }}
      />

      {/* Enhanced Header with Glassmorphism */}
      <header className="relative glass sticky top-0 z-50 border-b border-white/20 shadow-xl transition-all duration-300 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 via-teal-500 to-cyan-500 rounded-xl flex items-center justify-center transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-300 shadow-lg hover-glow hover-3d">
                <span className="text-white text-2xl font-bold animate-bounce-subtle">✈️</span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent group-hover:from-blue-700 group-hover:via-teal-700 transition-all duration-300">
                BookingHub
              </h1>
            </Link>
            <nav className="flex items-center gap-3 md:gap-4">
              {isAuthenticated ? (
                <>
                  <div className="hidden md:flex items-center gap-2 px-4 py-2 glass rounded-lg hover-lift">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md">
                      {user?.fullName?.charAt(0).toUpperCase() || 'U'}
                    </div>
                    <span className="text-gray-700 font-medium">Xin chào, {user?.fullName}</span>
                  </div>
                  <button
                    onClick={logout}
                    className="px-4 py-2 text-white bg-gradient-to-r from-red-500 via-pink-500 to-rose-500 rounded-lg hover:from-red-600 hover:via-pink-600 hover:to-rose-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover-lift font-medium"
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="px-4 py-2 text-blue-600 hover:text-blue-700 transition-all duration-300 font-medium hover:bg-blue-50 rounded-lg hover-lift"
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    href="/register"
                    className="px-5 py-2.5 text-white bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 rounded-lg hover:from-blue-700 hover:via-teal-700 hover:to-cyan-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 hover-lift font-medium animate-gradient"
                  >
                    Đăng ký
                  </Link>
                </>
              )}
            </nav>
          </div>
        </div>
      </header>

      {/* Enhanced Hero Section */}
      <main className="relative z-10" ref={heroRef}>
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          {/* Enhanced Floating Travel Icons */}
          <div className="absolute top-10 left-5 text-6xl md:text-7xl opacity-20 animate-float hover:opacity-30 transition-opacity cursor-default">🌴</div>
          <div className="absolute top-32 right-10 text-5xl md:text-6xl opacity-20 animate-float-delayed hover:opacity-30 transition-opacity cursor-default">🏖️</div>
          <div className="absolute bottom-20 left-1/4 text-4xl md:text-5xl opacity-20 animate-float-slow hover:opacity-30 transition-opacity cursor-default">🗺️</div>
          <div className="absolute top-1/2 right-1/4 text-5xl opacity-15 animate-float animation-delay-400">🎬</div>
          <div className="absolute bottom-1/3 left-1/3 text-4xl opacity-15 animate-float-delayed animation-delay-600">🍽️</div>

          <div className="text-center mb-16 transform transition-transform duration-1000 px-4 scroll-reveal" style={{ transform: `translateY(${scrollY * 0.15}px)` }}>
            <div className="inline-block mb-6 animate-scale-in-bounce">
              <div className="relative">
                <span className="text-6xl md:text-7xl animate-bounce-subtle inline-block hover-rotate cursor-default">✈️</span>
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-30 animate-pulse-glow"></div>
              </div>
            </div>
            <div className="overflow-visible py-2 animate-slide-in-up-delayed">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600 bg-clip-text text-transparent animate-fade-in leading-[1.2] inline-block text-shadow-sm animate-gradient">
                Nền Tảng Du Lịch Tổng Hợp
              </h2>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-in-up-delayed animation-delay-200">
              Khám phá thế giới, trải nghiệm tuyệt vời - Đặt vé xem phim, đặt phòng khách sạn, đặt vé khu vui chơi, đặt bàn nhà hàng
              <br />
              <span className="text-blue-600 font-semibold bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
                Tất cả trong một nền tảng duy nhất
              </span>
            </p>
            <div className="flex justify-center gap-3 mt-8 animate-fade-in animation-delay-400">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse shadow-lg"></div>
              <div className="w-3 h-3 bg-teal-500 rounded-full animate-pulse animation-delay-200 shadow-lg"></div>
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse animation-delay-400 shadow-lg"></div>
            </div>
          </div>

          {/* Enhanced Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-20 items-stretch scroll-reveal" ref={serviceCardsRef}>
            <ServiceCard
              title="Đặt Vé Xem Phim"
              description="Chọn rạp, chọn ghế, đặt vé ngay"
              icon="🎬"
              href="/movies"
              gradient="from-purple-500 to-pink-500"
              delay="0"
            />
            <ServiceCard
              title="Đặt Phòng Khách Sạn"
              description="Tìm khách sạn phù hợp với bạn"
              icon="🏨"
              href="/hotels"
              gradient="from-blue-500 to-cyan-500"
              delay="100"
            />
            <ServiceCard
              title="Đặt Vé Khu Vui Chơi"
              description="Vui chơi giải trí không giới hạn"
              icon="🎢"
              href="/parks"
              gradient="from-orange-500 to-red-500"
              delay="200"
            />
            <ServiceCard
              title="Đặt Bàn Nhà Hàng"
              description="Thưởng thức ẩm thực tuyệt vời"
              icon="🍽️"
              href="/restaurants"
              gradient="from-teal-500 to-green-500"
              delay="300"
            />
          </div>

          {/* Enhanced Features Section with Glassmorphism */}
          <div className="relative glass rounded-3xl shadow-2xl p-8 md:p-10 lg:p-12 mb-20 border border-white/30 overflow-hidden hover-lift transition-all duration-500 scroll-reveal">
            {/* Enhanced Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-200/40 to-teal-200/40 rounded-full -mr-32 -mt-32 animate-blob"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-purple-200/40 to-pink-200/40 rounded-full -ml-24 -mb-24 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full -translate-x-1/2 -translate-y-1/2 animate-blob-fast"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-10 animate-slide-in-up-delayed">
                <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4 text-shadow-sm">
                  Tính Năng Nổi Bật
                </h3>
                <div className="w-32 h-1.5 bg-gradient-to-r from-blue-500 via-teal-500 to-cyan-500 mx-auto rounded-full shadow-lg animate-glow-pulse"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                <FeatureItem
                  title="Đặt Chỗ Nhanh Chóng"
                  description="Giao diện thân thiện, đặt chỗ chỉ trong vài phút"
                  icon="⚡"
                  color="blue"
                  delay="0"
                />
                <FeatureItem
                  title="Thanh Toán An Toàn"
                  description="Nhiều phương thức thanh toán, bảo mật tuyệt đối"
                  icon="🔒"
                  color="teal"
                  delay="200"
                />
                <FeatureItem
                  title="Hỗ Trợ 24/7"
                  description="Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ bạn"
                  icon="💬"
                  color="purple"
                  delay="400"
                />
              </div>
            </div>
          </div>

          {/* Enhanced Travel Inspiration Section */}
          <div className="text-center py-16 animate-scale-in scroll-reveal">
            <div className="inline-block p-8 md:p-10 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 rounded-3xl shadow-2xl transform hover:scale-105 transition-all duration-300 hover-lift hover-glow relative overflow-hidden group">
              {/* Animated background overlay */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-teal-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 text-shadow-md">Bắt Đầu Hành Trình Của Bạn Ngay Hôm Nay!</h3>
                <p className="text-white/95 text-base md:text-lg mb-6">Khám phá vô vàn điểm đến tuyệt vời đang chờ đón bạn</p>
                <div className="flex justify-center gap-3 text-3xl md:text-4xl">
                  <span className="animate-bounce-subtle inline-block">🌍</span>
                  <span className="animate-bounce-subtle animation-delay-200 inline-block">✈️</span>
                  <span className="animate-bounce-subtle animation-delay-400 inline-block">🏝️</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Enhanced Footer */}
      <footer className="relative bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800 text-white mt-20 overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-teal-500 to-purple-500 animate-gradient"></div>
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-500/10 rounded-full blur-2xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center">
            <div className="flex justify-center items-center gap-3 mb-4 animate-fade-in">
              <span className="text-3xl animate-rotate-slow">✈️</span>
              <h4 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                BookingHub
              </h4>
            </div>
            <p className="text-gray-300 mb-2">&copy; 2025 BookingHub. All rights reserved.</p>
            <p className="text-gray-400 text-sm">Khám phá thế giới cùng chúng tôi 🌍</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ServiceCard({ 
  title, 
  description, 
  icon, 
  href, 
  gradient, 
  delay 
}: { 
  title: string; 
  description: string; 
  icon: string; 
  href: string;
  gradient: string;
  delay: string;
}) {
  return (
    <Link href={href} className="group h-full flex animate-slide-in-up-delayed scroll-reveal" style={{ animationDelay: `${delay}ms` }}>
      <div 
        className="relative glass rounded-2xl shadow-xl p-6 md:p-8 hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-3 overflow-hidden border border-white/30 flex flex-col w-full hover-lift hover-3d"
      >
        {/* Animated Gradient Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-15 transition-opacity duration-500`}></div>
        
        {/* Shimmer effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0 animate-shimmer"></div>
        </div>
        
        {/* Icon Container with enhanced effects */}
        <div className={`relative z-10 w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg flex-shrink-0 hover-glow`}>
          <span className="text-3xl md:text-4xl transform group-hover:scale-110 transition-transform duration-300">{icon}</span>
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${gradient} rounded-2xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10`}></div>
        </div>
        
        <div className="relative z-10 flex flex-col flex-grow">
          <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 text-center group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300 flex-shrink-0">
            {title}
          </h3>
          <p className="text-gray-600 text-sm md:text-base text-center leading-relaxed flex-grow">{description}</p>
        </div>

        {/* Enhanced Decorative Corner */}
        <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-25 rounded-bl-full transition-opacity duration-300 blur-sm`}></div>
        <div className={`absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr ${gradient} opacity-0 group-hover:opacity-20 rounded-tr-full transition-opacity duration-300 blur-sm`}></div>
      </div>
    </Link>
  );
}

function FeatureItem({ 
  title, 
  description, 
  icon, 
  color,
  delay = "0"
}: { 
  title: string; 
  description: string;
  icon: string;
  color: string;
  delay?: string;
}) {
  const colorClasses = {
    blue: 'from-blue-500 to-cyan-500',
    teal: 'from-teal-500 to-green-500',
    purple: 'from-purple-500 to-pink-500'
  };

  return (
    <div className="text-center group animate-slide-in-up" style={{ animationDelay: `${delay}ms` }}>
      <div className={`relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 md:mb-6 rounded-full bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} flex items-center justify-center text-3xl md:text-4xl transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg hover-glow`}>
        {icon}
        {/* Pulse effect */}
        <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${colorClasses[color as keyof typeof colorClasses]} opacity-0 group-hover:opacity-50 group-hover:scale-150 transition-all duration-300 blur-xl`}></div>
      </div>
      <h4 className="text-lg md:text-xl font-bold text-gray-900 mb-2 md:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-teal-600 transition-all duration-300">
        {title}
      </h4>
      <p className="text-gray-600 text-sm md:text-base leading-relaxed">{description}</p>
    </div>
  );
}
