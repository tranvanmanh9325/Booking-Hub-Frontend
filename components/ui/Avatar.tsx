import React, { useState } from 'react';

interface AvatarProps {
    src?: string | null;
    alt: string;
    fallback: string;
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
}

const Avatar: React.FC<AvatarProps> = ({
    src,
    alt,
    fallback,
    size = 'md',
    className = '',
    onClick
}) => {
    const [imageError, setImageError] = useState(false);

    const getInitials = (name: string) => {
        if (!name) return '?';
        // Get the first letter of the name (e.g., "Mạnh" -> "M")
        return name.charAt(0).toUpperCase();
    };

    const handleError = () => {
        setImageError(true);
    };

    const sizeClasses = {
        sm: { width: '32px', height: '32px', fontSize: '14px' },
        md: { width: '40px', height: '40px', fontSize: '16px' },
        lg: { width: '48px', height: '48px', fontSize: '18px' },
    };

    const currentSize = sizeClasses[size];

    const baseStyles: React.CSSProperties = {
        ...currentSize,
        borderRadius: '50%',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: onClick ? 'pointer' : 'default',
        flexShrink: 0,
        backgroundColor: '#e0e0e0', // Default background for fallback
        color: '#333',
        fontWeight: 600,
        border: '1px solid var(--divider-value, #e5e7eb)',
        ... (src && !imageError ? { backgroundColor: 'transparent', border: 'none' } : {})
    };

    return (
        <div
            className={`avatar-container ${className}`}
            style={baseStyles}
            onClick={onClick}
            aria-label={alt}
            role="img"
        >
            {src && !imageError ? (
                <img
                    src={src}
                    alt={alt}
                    onError={handleError}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                    }}
                />
            ) : (
                <span className="avatar-fallback" style={{ userSelect: 'none' }}>
                    {getInitials(fallback)}
                </span>
            )}

            <style jsx>{`
        .avatar-container {
            transition: opacity 0.2s ease;
        }
        .avatar-container:hover {
            opacity: 0.9;
        }
      `}</style>
        </div>
    );
};

export default Avatar;
