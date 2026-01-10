import React from 'react'
import { Card } from '../ui/Card'
import { Rating } from '../ui/Rating'

interface TestimonialCardProps {
    quote: string
    userName: string
    userRole: string
    userInitials: string
    rating?: number
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
    quote,
    userName,
    userRole,
    userInitials,
    rating = 5,
}) => {
    return (
        <div className="testimonial-card-wrapper">
            <Card className="testimonial-card-content">
                <div className="testimonial-rating">
                    <Rating value={rating} size={20} />
                </div>
                <p className="testimonial-text">&quot;{quote}&quot;</p>
                <div className="testimonial-user">
                    <div className="user-avatar">
                        <span>{userInitials}</span>
                    </div>
                    <div className="user-info">
                        <span className="user-name">{userName}</span>
                        <span className="user-role">{userRole}</span>
                    </div>
                </div>
            </Card>
            <style jsx>{`
        .testimonial-card-wrapper {
          width: 400px;
          flex-shrink: 0;
        }
        
        /* Override generic card styles if needed or rely on global classes */
        :global(.testimonial-card-content) {
          border-left: 4px solid var(--color-accent, #0e8a4f);
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .testimonial-rating {
          margin-bottom: var(--spacing-lg, 1rem);
        }

        .testimonial-text {
          font-style: italic;
          line-height: var(--line-height-body, 1.6);
          margin-bottom: var(--spacing-xl, 1.5rem);
          color: var(--color-on-surface, #0f1720);
          flex-grow: 1;
        }

        .testimonial-user {
          gap: var(--spacing-md, 0.75rem);
          display: flex;
          align-items: center;
        }

        .user-avatar {
          color: var(--color-on-primary, #fff);
          width: 48px;
          height: 48px;
          display: flex;
          background: var(--color-primary, #0077cc);
          align-items: center;
          font-weight: var(--font-weight-heading, 600);
          border-radius: var(--border-radius-full, 9999px);
          justify-content: center;
          flex-shrink: 0;
        }

        .user-info {
          display: flex;
          flex-direction: column;
        }

        .user-name {
          color: var(--color-on-surface, #0f1720);
          font-weight: var(--font-weight-heading, 600);
        }

        .user-role {
          color: var(--color-on-surface-secondary, #64748b);
          font-size: var(--font-size-xs, 0.75rem);
        }
        
        @media(max-width: 767px) {
          .testimonial-card-wrapper {
            width: 300px;
          }
        }
      `}</style>
        </div>
    )
}