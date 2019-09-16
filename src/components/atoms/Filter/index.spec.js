import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'

import Filter from './index'

afterEach(cleanup)

const mockTheme = {
  components: {
    filters: {
      primary: {
        backgroundColor: '#FFF',
        active: {
          backgroundColor: '#000',
        },
      },
    },
  },
}

const updateFilter = jest.fn()

test('<Filter> changes appereance on click', () => {
  const { getByText } = render(
    <Filter theme={mockTheme} updateFilter={updateFilter}>
      React
    </Filter>
  )

  expect(getByText('React')).toHaveStyle('background-color: rgb(255,255,255);')
  fireEvent.click(getByText('React'))
  expect(getByText('React')).toHaveStyle('background-color: rgb(0,0,0);')
})
