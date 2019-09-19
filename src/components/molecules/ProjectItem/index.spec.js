import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { ContentContext } from '../../../context/ContentContext'

import ProjectItem from './index.js'

afterEach(cleanup)
const mockProject = {
  node: {
    data: {
      body: [
        {
          slice_type: 'image',
          primary: {
            image: {
              localFile: {
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
            },
          },
        },
      ],
      released: 0,
      title: { text: 'a' },
    },
  },
}

const renderProjectItemWithContext = () => {
  return render(
    <ContentContext.Provider value={'pl'}>
      <ProjectItem project={mockProject}></ProjectItem>
    </ContentContext.Provider>
  )
}

test('<ProjectItem> renders', () => {
  const { getByText, getByTestId } = renderProjectItemWithContext()

  expect(getByText('a')).toBeDefined()
  expect(getByTestId('project-item')).toBeDefined()
})
