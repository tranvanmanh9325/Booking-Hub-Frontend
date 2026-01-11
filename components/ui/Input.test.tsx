import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Input } from './Input'

describe('Input Component', () => {
    it('renders correctly with label', () => {
        render(<Input label="Username" id="username" />)
        expect(screen.getByLabelText('Username')).toBeInTheDocument()
        expect(screen.getByRole('textbox')).toBeInTheDocument()
    })

    it('handles user input', () => {
        const handleChange = jest.fn()
        render(<Input onChange={handleChange} placeholder="Enter text" />)

        const input = screen.getByPlaceholderText('Enter text')
        fireEvent.change(input, { target: { value: 'test value' } })

        expect(handleChange).toHaveBeenCalledTimes(1)
        expect(input).toHaveValue('test value')
    })

    it('displays error message when error prop is provided', () => {
        render(<Input error="Field required" />)
        expect(screen.getByText('Field required')).toBeInTheDocument()
        expect(screen.getByRole('textbox')).toHaveClass('input-error')
    })

    it('renders left icon correctly', () => {
        render(<Input leftIcon={<span data-testid="left-icon">Left</span>} />)
        expect(screen.getByTestId('left-icon')).toBeInTheDocument()
    })

    it('renders right element correctly', () => {
        render(<Input rightElement={<button>Right</button>} />)
        expect(screen.getByText('Right')).toBeInTheDocument()
    })
})
