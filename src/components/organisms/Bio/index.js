import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import tw from 'tailwind.macro'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import profilePic from '../../../images/profile-picture.jpg'

const CircledAvatar = styled.img`
  width: 80px;
  height: 80px;
  margin-right: 1.5rem;
  border-radius: 50%;
`

const Bio = ({ mt, mb }) => (
  <Box
    display="flex"
    justifyContent="center"
    p={12}
    bg="white"
    mt={mt}
    mb={mb}
    boxShadow="lg"
  >
    <CircledAvatar src={profilePic} />
    <Box display="flex" flexDirection="column">
      <Text fontSize="xl" fontWeight="bold" fontColor="primary.8" mb={2}>
        Daniel Domański
      </Text>
      <Text fontSize="lg">
        I’m well-rounded web developer with strong desire to create outstanding
        products. Always eager to learn and share my experience.
      </Text>
    </Box>
  </Box>
)

export default Bio

Bio.defaultProps = {
  mt: 0,
  mb: 0,
}

Bio.propTypes = {
  mt: PropTypes.number,
  mb: PropTypes.number,
}
