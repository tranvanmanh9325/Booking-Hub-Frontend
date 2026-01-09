import React, { useEffect, useRef } from 'react'

const StatsSection: React.FC = () => {
    const statsRef = useRef<HTMLDivElement>(null)
    const hasAnimated = useRef(false)

    useEffect(() => {
        const statsSection = statsRef.current
        if (!statsSection) return

        const animateStats = () => {
            const stats = [
                { id: "stat-bookings", end: 500000, suffix: "+" },
                { id: "stat-uptime", end: 99.9, suffix: "%" },
                { id: "stat-speed", end: 2, prefix: "< ", suffix: "s" },
                { id: "stat-secure", end: 100, suffix: "%" },
            ]

            stats.forEach((stat) => {
                const el = document.getElementById(stat.id)
                if (!el) return;

                let start = 0
                const duration = 2000
                const stepTime = 20
                const steps = duration / stepTime
                const increment = stat.end / steps

                const timer = setInterval(() => {
                    start += increment
                    if (start >= stat.end) {
                        el.innerText = (stat.prefix || "") + stat.end + stat.suffix
                        clearInterval(timer)
                    } else {
                        el.innerText = (stat.prefix || "") + Math.floor(start) + stat.suffix
                    }
                }, stepTime)
            })
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    animateStats()
                    hasAnimated.current = true
                    observer.unobserve(entry.target)
                }
            })
        }, { threshold: 0.5 })

        observer.observe(statsSection)

        return () => {
            if (statsSection) observer.unobserve(statsSection)
        }
    }, [])

    return (
        <section className="stats-section" ref={statsRef}>
            <div className="container">
                <div className="stats-grid">
                    <div className="stat-item">
                        <div id="stat-bookings" className="stat-value">
                            <span>0+</span>
                        </div>
                        <div className="stat-label">
                            <span>Lượt Đặt Chỗ Thành Công</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div id="stat-uptime" className="stat-value">
                            <span>0%</span>
                        </div>
                        <div className="stat-label">
                            <span>Thời Gian Hoạt Động</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div id="stat-speed" className="stat-value">
                            <span>0s</span>
                        </div>
                        <div className="stat-label">
                            <span>Tốc Độ Xử Lý Trung Bình</span>
                        </div>
                    </div>
                    <div className="stat-item">
                        <div id="stat-secure" className="stat-value">
                            <span>0%</span>
                        </div>
                        <div className="stat-label">
                            <span>Giao Dịch An Toàn</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsSection
