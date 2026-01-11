import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SectionHeader } from './SectionHeader'

describe('SectionHeader Component', () => {
    it('renders title correctly', () => {
        render(<SectionHeader title="My Title" />)
        expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('My Title')
    })

    it('renders description when provided', () => {
        render(<SectionHeader title="Title" description="My Description" />)
        expect(screen.getByText('My Description')).toBeInTheDocument()
    })

    it('applies alignment classes', () => {
        const { container } = render(<SectionHeader title="Title" align="left" />)
        expect(container.firstChild).toHaveClass('left')
    })
})
