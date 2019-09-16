import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'

import Image from './index'

afterEach(cleanup)

test('<Image> renders', () => {
  let mockData = {
    input: {
      childImageSharp: {
        fluid: {
          src: 'mock.png',
          aspectRatio: 0,
          sizes: '',
          srcSet: '',
          srcSetWebp: '',
          srcWebp: '',
          base64: '',
        },
      },
    },
    type: 'fluid',
  }

  const { container } = render(<Image {...mockData} />)

  expect(container.firstChild).toMatchSnapshot()
})
