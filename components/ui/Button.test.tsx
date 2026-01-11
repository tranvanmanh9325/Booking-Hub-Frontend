import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Button } from './Button'

describe('Button Component', () => {
    it('renders correctly with default props', () => {
        render(<Button>Click me</Button>)
        const button = screen.getByRole('button', { name: /click me/i })
        expect(button).toBeInTheDocument()
        expect(button).toHaveClass('btn')
        expect(button).toHaveClass('btn-primary') // Default variant
    })

    it('renders with different variants', () => {
        render(<Button variant="outline">Outline</Button>)
        const button = screen.getByRole('button', { name: /outline/i })
        expect(button).toHaveClass('btn-outline')
    })

    it('handles click events', () => {
        const handleClick = jest.fn()
        render(<Button onClick={handleClick}>Click me</Button>)
        const button = screen.getByRole('button', { name: /click me/i })
        fireEvent.click(button)
        expect(handleClick).toHaveBeenCalledTimes(1)
    })

    it('renders loading state', () => {
        render(<Button isLoading>Loading</Button>)
        const button = screen.getByRole('button')
        expect(button).toBeDisabled()
        // Check for spinner part of SVG
        expect(button.querySelector('svg')).toBeInTheDocument()
    })

    it('renders disabled state', () => {
        render(<Button disabled>Disabled</Button>)
        const button = screen.getByRole('button', { name: /disabled/i })
        expect(button).toBeDisabled()
    })
})
