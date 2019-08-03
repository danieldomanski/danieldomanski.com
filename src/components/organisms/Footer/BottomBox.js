import React from 'react'
import PropTypes from 'prop-types'
import styled, { withTheme } from 'styled-components'
import tw from 'tailwind.macro'
import Icon from '../../atoms/Icon'
import Text from '../../atoms/Text'
import { Link } from '../../atoms/Link'
import Box from '../../atoms/Box'

const BottomRow = styled.div`
  ${tw`h-full flex flex-col md:flex-row items-center justify-between px-12 xl:px-32`}

  & > * {
    margin: 0.25em 0;
  }
`

const BottomBox = ({ theme, variant }) => {
  const { backgroundColor, color } = theme.components.bottomFooter[variant]

  return (
    <Box
      width={1}
      bg={backgroundColor}
      py={8}
      borderTop="1px solid rgba(0,0,0,0.1)"
    >
      <Box
        maxWidth={1200}
        m="auto"
        display="flex"
        flexDirection={['column', 'column', 'row']}
        alignItems="center"
        justifyContent="space-between"
        px={[0, 12]}
      >
        <Link
          display={['none', 'none', 'block']}
          fontColor={color}
          fontWeight="bold"
          fontSize={['base']}
          to="https://github.com/av3ng3roo"
        >
          Source code
        </Link>
        <Text
          fontFamily="sans"
          fontSize={['base']}
          fontColor={color}
          fontWeight="black"
          mb={[4, 4, 0]}
        >
          hello@ddomanski.dev
        </Text>
        <Box>
          <Icon icon="github" width={[18, 21]} mr={2} fill={color} />
          <Icon icon="linkedin" width={[18, 21]} fill={color} />
        </Box>
      </Box>
    </Box>
  )
}

BottomBox.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
}

BottomBox.defaultProps = {
  variant: 'primary',
}

export default withTheme(BottomBox)
