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
    <Box display="flex" flexDirection="column" width={1}>
      <Text
        fontSize="2xl"
        fontWeight="black"
        fontColor="primary.8"
        mb={[4, 3]}
        mt={[4, 4, 0]}
      >
        Daniel Domański
      </Text>
      <Text fontSize={['sm', 'base']} lineHeight="relaxed" fontWeight="medium">
        Jestem programistą z dużą chęcią do tworzenia nieszablonowych projektów.
        Zawsze nastawiony na naukę i dzielenie się swoimi doświadczeniami.
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
