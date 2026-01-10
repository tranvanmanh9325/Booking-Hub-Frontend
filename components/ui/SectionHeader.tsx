import React from 'react'

interface SectionHeaderProps {
    title: string
    description?: string
    align?: 'left' | 'center' | 'right'
    className?: string
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
    title,
    description,
    align = 'center',
    className = ''
}) => {
    return (
        <div className={`section-header ${align} ${className}`}>
            <h2 className="section-title">{title}</h2>
            {description && <p className="section-description">{description}</p>}

            <style jsx>{`
        .section-header {
          margin-bottom: var(--spacing-4xl, 4rem);
        }
        .center { text-align: center; }
        .left { text-align: left; }
        .right { text-align: right; }
        
        .section-title {
          font-family: var(--font-family-heading);
          font-size: var(--font-size-3xl, 2.5rem);
          color: var(--color-on-surface, #0f1720);
          margin-bottom: var(--spacing-sm, 0.5rem);
          font-weight: 600;
        }
        
        .section-description {
          font-size: var(--font-size-lg, 1.125rem);
          color: var(--color-on-surface-secondary, #64748b);
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }
        
        /* Adjust for left alignment if needed */
        .left .section-description {
          margin-left: 0;
        }
      `}</style>
        </div>
    )
}