import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Box from '../../atoms/Box'
import css from '@styled-system/css'

const CodeContainer = styled.code`
  display: block;
  font-size: 18px;
  margin-bottom: 2rem;
  background: #011627;
  border-bottom-left-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  pre {
    margin: 0;
  }
`

const CodeBlock = ({ data }) => {
  return (
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
}

export default CodeBlock

CodeBlock.propTypes = {
  data: PropTypes.objectOf(PropTypes.object).isRequired,
}
