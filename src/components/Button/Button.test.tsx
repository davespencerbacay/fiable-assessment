import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Button } from './Button'

describe('Button', () => {
  it('renders label text', () => {
    render(<Button label="Click me" />)

    expect(screen.getByRole('button', { name: /click me/i })).toBeTruthy()
  })

  it('supports disabled state', () => {
    render(<Button label="Disabled" disabled />)

    const button = screen.getByRole('button', { name: /disabled/i }) as HTMLButtonElement
    expect(button.disabled).toBe(true)
  })
})