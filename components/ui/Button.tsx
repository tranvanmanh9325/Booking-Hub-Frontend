import React from 'react'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'outline' | 'ghost' | 'danger'
    size?: 'sm' | 'md' | 'lg' | 'xl'
    isLoading?: boolean
    leftIcon?: React.ReactNode
    rightIcon?: React.ReactNode
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({
        children,
        className = '',
        variant = 'primary',
        size = 'md',
        isLoading = false,
        leftIcon,
        rightIcon,
        disabled,
        ...props
    }, ref) => {

        // Map variants to specific classes if they exist globally, 
        // or we can use inline styles/modules if needed. 
        // Based on existing code, we use 'btn' + modifiers.

        const baseClass = 'btn'
        const variantClass = variant === 'primary' ? 'btn-primary'
            : variant === 'outline' ? 'btn-outline'
                : variant === 'ghost' ? 'btn-ghost'
                    : variant === 'danger' ? 'btn-danger'
                        : ''

        const sizeClass = size === 'xl' ? 'btn-xl'
            : size === 'lg' ? 'btn-lg'
                : size === 'sm' ? 'btn-sm'
                    : '' // md is default

        return (
            <button
                ref={ref}
                className={`${baseClass} ${variantClass} ${sizeClass} ${className}`}
                disabled={isLoading || disabled}
                {...props}
            >
                {isLoading && (
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                )}
                {!isLoading && leftIcon && <span className="mr-2">{leftIcon}</span>}
                {children}
                {!isLoading && rightIcon && <span className="ml-2">{rightIcon}</span>}

                {/* Fallback styles if global classes are missing or for safety */}
                <style jsx>{`
          .btn {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            border-radius: var(--border-radius-control, 8px);
            font-weight: var(--font-weight-medium, 500);
            transition: all 0.2s ease;
            cursor: pointer;
            border: 1px solid transparent;
            font-family: var(--font-family-body);
          }
          
          .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }

          .btn-primary {
            background-color: var(--color-primary, #0077cc);
            color: var(--color-on-primary, #fff);
          }
          .btn-primary:hover:not(:disabled) {
            background-color: var(--color-secondary, #047a67);
            transform: translateY(-1px);
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          }

          .btn-outline {
            background-color: transparent;
            border-color: var(--color-primary, #0077cc);
            color: var(--color-primary, #0077cc);
          }
          .btn-outline:hover:not(:disabled) {
            background-color: color-mix(in srgb, var(--color-primary) 10%, transparent);
          }
          
          .btn-ghost {
            background-color: transparent;
            color: var(--color-on-surface, #0f1720);
          }
          .btn-ghost:hover:not(:disabled) {
            background-color: var(--color-surface-elevated, #f0f0f0);
          }

          /* Sizes */
          .btn-sm {
            padding: 0.25rem 0.75rem;
            font-size: 0.875rem;
          }
          .btn-md {
            padding: 0.5rem 1rem;
            font-size: 1rem;
          }
          .btn-lg {
            padding: 0.75rem 1.5rem;
            font-size: 1.125rem;
          }
          .btn-xl {
            padding: 1rem 2rem;
            font-size: 1.25rem;
            font-weight: 600;
          }

          .mr-2 { margin-right: 0.5rem; }
          .ml-2 { margin-left: 0.5rem; }
        `}</style>
            </button>
        )
    }
)

Button.displayName = 'Button'