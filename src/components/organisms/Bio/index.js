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
        fontWeight="black"
        fontColor="primary.8"
        mb={[4, 2]}
        mt={[4, 4, 0]}
      >
        Daniel Domański
      </Text>
      <Text fontSize={['sm', 'base']} lineHeight="relaxed" fontWeight="medium">
        Jestem wszechstronnym programistą z dużą chęcią do tworzenia
        nieszablonowych projektów. Zawsze nastawiony na naukę i dzielenie się
        swoimi doświadczeniami.
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
