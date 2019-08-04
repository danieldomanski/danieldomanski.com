import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Avatar from '../../atoms/Avatar'

const Bio = ({ mt, mb }) => (
  <Box
    as="aside"
    display="flex"
    flexDirection={['column', 'column', 'row']}
    justifyContent="center"
    alignItems="center"
    textAlign={['center', 'center', 'left']}
    p={[8, 12]}
    bg="white"
    mt={mt}
    mb={mb}
    boxShadow="lg"
  >
    <Avatar src="profile-picture.jpg" x={120} y={120} mr={[0, 0, 8]} />
    <Box display="flex" flexDirection="column">
      <Text
        fontSize="xl"
        fontWeight="bold"
        fontColor="primary.8"
        mb={[4, 2]}
        mt={[4, 4, 0]}
      >
        Daniel Domański
      </Text>
      <Text fontSize={['sm', 'base']}>
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
