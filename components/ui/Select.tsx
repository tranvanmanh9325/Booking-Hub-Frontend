import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from './Icons';

interface Option {
    value: string;
    label: string;
}

interface SelectProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    options: Option[];
    placeholder?: string;
    error?: string;
    className?: string;
}

export const Select: React.FC<SelectProps> = ({
    label,
    value,
    onChange,
    options,
    placeholder = 'Select an option',
    error,
    className = ''
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const handleSelect = (optionValue: string) => {
        onChange(optionValue);
        setIsOpen(false);
    };

    return (
        <div className={`select-container ${className}`} ref={containerRef}>
            {label && <label className="select-label">{label}</label>}

            <div className="select-wrapper">
                <div
                    className={`select-trigger ${isOpen ? 'open' : ''} ${error ? 'error' : ''}`}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className={`select-value ${!selectedOption ? 'placeholder' : ''}`}>
                        {selectedOption ? selectedOption.label : placeholder}
                    </span>
                    <span className={`select-icon ${isOpen ? 'rotate' : ''}`}>
                        <ChevronDown size={16} />
                    </span>
                </div>

                {isOpen && (
                    <div className="select-dropdown">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                className={`select-option ${option.value === value ? 'selected' : ''}`}
                                onClick={() => handleSelect(option.value)}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {error && <span className="select-error-message">{error}</span>}

            <style jsx>{`
                .select-container {
                    display: flex;
                    flex-direction: column;
                    gap: 0.5rem;
                    width: 100%;
                    position: relative;
                }

                .select-label {
                    font-size: 0.875rem;
                    font-weight: 500;
                    color: var(--color-on-surface, #0f1720);
                }

                .select-wrapper {
                    position: relative;
                }

                .select-trigger {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    width: 100%;
                    padding: 0.75rem 1rem;
                    border: 1px solid var(--color-border, #d3d9e0);
                    border-radius: 8px;
                    background: var(--color-surface-elevated, #fff);
                    color: var(--color-on-surface, #0f1720);
                    cursor: pointer;
                    transition: all 0.2s ease;
                    user-select: none;
                }

                .select-trigger:hover {
                    border-color: #a0aec0;
                }

                .select-trigger.open {
                    border-color: var(--color-primary, #0077cc);
                    box-shadow: 0 0 0 3px color-mix(in srgb, var(--color-primary, #0077cc) 10%, transparent);
                }

                .select-trigger.error {
                    border-color: #ef4444;
                }

                .select-value {
                    font-size: 1rem;
                }
                
                .select-value.placeholder {
                    color: #a0aec0;
                }

                .select-icon {
                    color: #64748b;
                    transition: transform 0.2s ease;
                    display: flex;
                    align-items: center;
                }

                .select-icon.rotate {
                    transform: rotate(180deg);
                }

                .select-dropdown {
                    position: absolute;
                    top: calc(100% + 4px);
                    left: 0;
                    right: 0;
                    background: white;
                    border: 1px solid #e2e8f0;
                    border-radius: 8px;
                    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
                    z-index: 50;
                    max-height: 250px;
                    overflow-y: auto;
                    animation: slideDown 0.2s ease-out;
                }

                @keyframes slideDown {
                    from {
                        opacity: 0;
                        transform: translateY(-10px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }

                .select-option {
                    padding: 0.75rem 1rem;
                    cursor: pointer;
                    transition: background-color 0.15s;
                    font-size: 0.95rem;
                    color: #2d3748;
                }

                .select-option:hover {
                    background-color: #f7fafc;
                    color: #0077cc;
                }

                .select-option.selected {
                    background-color: #eff6ff;
                    color: #0077cc;
                    font-weight: 500;
                }
                
                .select-error-message {
                    color: #ef4444;
                    font-size: 0.75rem;
                }
            `}</style>
        </div>
    );
};
