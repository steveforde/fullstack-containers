// @vitest-environment jsdom
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Todo from './Todo'

test('renders single todo text', () => {
  const todo = {
    text: 'Component testing with Vitest',
    done: false
  }

  render(<Todo todo={todo} />)

  const element = screen.getByText('Component testing with Vitest')
  expect(element).toBeDefined()
})