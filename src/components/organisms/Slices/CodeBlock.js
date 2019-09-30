import React from 'react'
import PropTypes from 'prop-types'
import css from '@styled-system/css'
import Box from '../../atoms/Box'

const CodeBlock = ({ data }) => (
  <>
    <Box
      fontFamily="sans"
      color="primary.0"
      fontSize="sm"
      fontWeight="bold"
      bg="#000B14"
      css={css({
          borderTopLeftRadius: '0.5rem',
          borderTopRightRadius: '0.5rem',
        })}
      p={4}
    >
      {data.primary.code_title.text}
    </Box>
    <Box
      fontSize="lg"
      bg="#011627"
      css={css({
          borderBottomLeftRadius: '0.5rem',
          borderBottomRightRadius: '0.5rem',
        })}
      mb={8}
      dangerouslySetInnerHTML={{ __html: data.primary.code_block.html }}
    />
  </>
  )

export default CodeBlock

CodeBlock.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
