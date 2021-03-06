import React from 'react'
import Link from "../Link"

const Tag = ({ data: { name, slug } }) => (
  <Link
    to={`/tags/${slug}`}
    display="inline-block"
    fontFamily="sans"
    fontSize="xs"
    color="primary.11"
    bg="primary.1"
    fontWeight="medium"
    py={2}
    px={3}
    mr={2}
  >
    {name}
  </Link>
)

export default Tag
