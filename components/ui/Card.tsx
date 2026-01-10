import React from 'react'

interface CardProps {
    children: React.ReactNode
    className?: string
    noPadding?: boolean
}

export const Card: React.FC<CardProps> = ({ children, className = '', noPadding = false }) => {
    return (
        <div className={`card ${className}`}>
            {children}
            <style jsx>{`
        .card {
          background: var(--color-surface, #fff);
          border-radius: var(--border-radius-card, 12px);
          box-shadow: var(--shadow-level-1, 0 1px 2px rgba(0,0,0,0.06));
          border: 1px solid var(--color-border, #e2e8f0);
          overflow: hidden;
          padding: ${noPadding ? '0' : 'var(--spacing-xl, 1.5rem)'};
        }
      `}</style>
        </div>
    )
}