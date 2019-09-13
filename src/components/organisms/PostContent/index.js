import React from 'react'
import styled from 'styled-components'
import { BodyText, CodeBlock, Image, Note } from '../Slices'
import codeMarkup from '../../../utils/codeMarkup'

const Wrapper = styled.article`
  ${codeMarkup}
`

const PostContent = ({ data }) => {
  const slices = data.map(s => {
    switch (s.slice_type) {
      case 'text':
        return <BodyText key={s.id} data={s} />
      case 'code_block':
        return <CodeBlock key={s.id} data={s} />
      case 'image':
        return <Image key={s.id} data={s} />
      case 'note':
        return <Note key={s.id} data={s} />
      default:
        return null
    }
  })
  return <Wrapper>{slices}</Wrapper>
}

export default PostContent
