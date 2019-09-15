import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import 'jest-styled-components'

import Box from './index'

afterEach(cleanup)

test('<Box> renders with different styled-system category props', () => {
  const { container } = render(
    <Box display="flex" width={200} bg="#fff">
      <div>Test.</div>
    </Box>
  )

  expect(container.firstChild).toMatchSnapshot()
})
