import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import PostItem from '../../molecules/PostItem'

const PostsContainer = ({ posts }) => (
  <>
    {posts.length === 0 ? (
      <Text
        display="block"
        fontSize={['base', 'lg']}
        fontColor="primary.3"
        textAlign="center"
      >
        Nie pojawił się jeszcze żaden artykuł :(
      </Text>
    ) : (
      posts.map((post, idx) => (
        <PostItem
          post={post}
          pb={idx === posts.length - 1 ? 0 : [8, 4, 8]}
          pt={idx === 0 ? 0 : [4, 4, 8]}
          mb={idx === posts.length - 1 ? 0 : [4, 4, 8]}
          borderBottom={
            idx === posts.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)'
          }
        />
      ))
    )}
  </>
)

PostsContainer.propTypes = {
  posts: PropTypes.array.isRequired,
}

PostsContainer.defaultProps = {
  posts: [],
}

export default PostsContainer
