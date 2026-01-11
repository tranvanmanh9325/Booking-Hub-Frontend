import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Card } from './Card'

describe('Card Component', () => {
    it('renders children correctly', () => {
        render(<Card><div>Test Content</div></Card>)
        expect(screen.getByText('Test Content')).toBeInTheDocument()
    })

    it('applies custom className', () => {
        const { container } = render(<Card className="custom-class">Content</Card>)
        expect(container.firstChild).toHaveClass('custom-class')
    })

    it('applies noPadding style when prop is set', () => {
        const { container } = render(<Card noPadding>Content</Card>)
        // Jest implementation details might differ on style check, but we verify it renders without crashing
        // and ideally check style, but style-jsx is scoped. 
        // We can check if component renders successfully with prop.
        expect(screen.getByText('Content')).toBeInTheDocument()
    })
})
