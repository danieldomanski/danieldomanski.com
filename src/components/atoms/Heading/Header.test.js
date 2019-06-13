import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-dom/extend-expect'
import Header from '.'

afterEach(cleanup)

test('Header has proper styling based on given props', () => {
  const props = {
    size: '4xl',
    weight: 'medium',
  }

  const { getByTestId, rerender } = render(<Header {...props}>Title</Header>)

  expect(getByTestId('headerStyles')).toHaveStyle('font-size: 2.25rem')
  expect(getByTestId('headerStyles')).toHaveStyle('font-weight: 500')
})
