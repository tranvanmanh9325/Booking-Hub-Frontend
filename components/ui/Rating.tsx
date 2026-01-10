import React from 'react'

interface RatingProps {
    value?: number // 0-5
    max?: number
    size?: number
    activeColor?: string
    inactiveColor?: string
    className?: string
}

export const Rating: React.FC<RatingProps> = ({
    value = 5,
    max = 5,
    size = 20,
    activeColor = 'var(--color-accent, #fab005)',
    inactiveColor = '#e9ecef',
    className = ''
}) => {
    return (
        <div className={`rating ${className}`}>
            {[...Array(max)].map((_, index) => (
                <svg
                    key={index}
                    xmlns="http://www.w3.org/2000/svg"
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill={index < value ? activeColor : inactiveColor}
                    stroke="none"
                >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                </svg>
            ))}
            <style jsx>{`
        .rating {
          display: flex;
          gap: 2px;
        }
      `}</style>
        </div>
    )
}