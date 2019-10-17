import React from 'react'
import PropTypes from 'prop-types'
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
      posts.map((post, idx) =>
        post.node.data.released == 1 ? (
          <PostItem
            key={`${post.node.uid}`}
            post={post}
            pb={idx === posts.length - 1 ? 0 : [8, 4, 8]}
            pt={idx === 0 ? 0 : [4, 4, 0]}
            mb={idx === posts.length - 1 ? 0 : [4, 4, 8]}
            borderBottom={
              idx === posts.length - 1 ? 'none' : '1px solid rgba(0,0,0,0.05)'
            }
          />
        ) : null
      )
    )}
  </>
)

PostsContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object),
}

PostsContainer.defaultProps = {
  posts: [],
}

export default PostsContainer
