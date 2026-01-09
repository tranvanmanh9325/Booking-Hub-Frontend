import React from 'react';

interface SkeletonProps {
    className?: string;
    width?: string | number;
    height?: string | number;
    variant?: 'rect' | 'circle';
    style?: React.CSSProperties;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    className = '',
    width,
    height,
    variant = 'rect',
    style,
}) => {
    const styles: React.CSSProperties = {
        width: width,
        height: height,
        borderRadius: variant === 'circle' ? '50%' : undefined,
        ...style,
    };

    return (
        <div
            className={`skeleton ${className}`}
            style={styles}
            aria-hidden="true"
        />
    );
};
