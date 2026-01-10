import React from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string
    error?: string
    leftIcon?: React.ReactNode
    rightElement?: React.ReactNode
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ label, error, leftIcon, rightElement, className = '', id, ...props }, ref) => {
        const inputId = id || props.name || Math.random().toString(36).substr(2, 9)

        return (
            <div className="input-group">
                {label && (
                    <label htmlFor={inputId} className="input-label">
                        {label}
                    </label>
                )}
                <div className="input-wrapper">
                    {leftIcon && (
                        <div className="input-icon-left">
                            {leftIcon}
                        </div>
                    )}
                    <input
                        ref={ref}
                        id={inputId}
                        className={`input-field ${error ? 'input-error' : ''} ${leftIcon ? 'pl-10' : ''} ${rightElement ? 'pr-10' : ''} ${className}`}
                        {...props}
                    />
                    {rightElement && (
                        <div className="input-element-right">
                            {rightElement}
                        </div>
                    )}
                </div>
                {error && <span className="input-error-message">{error}</span>}

                <style jsx>{`
          .input-group {
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            width: 100%;
          }
          .input-label {
            font-size: 0.875rem;
            font-weight: 500;
            color: var(--color-on-surface, #0f1720);
          }
          .input-wrapper {
            position: relative;
            display: flex;
            align-items: center;
          }
          .input-field {
            width: 100%;
            padding: 0.75rem 1rem;
            border: 1px solid var(--color-border, #d3d9e0);
            border-radius: var(--border-radius-control, 8px);
            font-size: 1rem;
            background: var(--color-surface-elevated, #fff);
            color: var(--color-on-surface, #0f1720);
            transition: all 0.2s;
          }
          .input-field:focus {
            outline: none;
            border-color: var(--color-primary, #0077cc);
            box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary) 10%, transparent);
          }
          .input-error {
            border-color: #ef4444;
          }
          .input-error:focus {
            border-color: #ef4444;
            box-shadow: 0 0 0 3px color-mix(in srgb, #ef4444 10%, transparent);
          }
          .input-icon-left {
            position: absolute;
            left: 0.75rem;
            color: var(--color-on-surface-secondary, #64748b);
            display: flex;
            align-items: center;
            pointer-events: none;
          }
          .input-element-right {
            position: absolute;
            right: 0.75rem;
            display: flex;
            align-items: center;
          }
          .input-error-message {
            color: #ef4444;
            font-size: 0.75rem;
          }
          .pl-10 { padding-left: 2.5rem; }
          .pr-10 { padding-right: 2.5rem; }
        `}</style>
            </div>
        )
    }
)

Input.displayName = 'Input'