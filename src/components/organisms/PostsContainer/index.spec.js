import 'jest-styled-components'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render, cleanup } from '@testing-library/react'
import mockSchema from '../../../../__mocks__/schema'
import PostsContainer from './index'

afterEach(cleanup)

test('<PostsContainer> render different output based on posts', () => {
  let posts = mockSchema.Posts(3)
  const { getAllByTestId, getByText, rerender } = render(
    <PostsContainer posts={posts} />
  )

  expect(getAllByTestId('post-item')).toHaveLength(3)
  //
  posts = mockSchema.Posts(0)
  rerender(<PostsContainer posts={posts} />)

  expect(getByText('Nie pojawił się jeszcze żaden artykuł :(')).toBeDefined()
})
