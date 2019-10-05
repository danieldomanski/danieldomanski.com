import React from 'react'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'

const InfoBoxRow = ({ children, ...rest }) => (
  <Box
    width={1}
    display="flex"
    flexDirection="column"
    textAlign={['center', 'center', 'center', 'right']}
    my={3}
    {...rest}
  >
    {children}
  </Box>
)

const InfoBoxRowTitle = ({ children }) => (
  <Text fontColor="primary.11" fontWeight="bold" mb={2} fontSize="lg">
    {children}
  </Text>
)

const InfoBoxRowDescription = ({ children }) => (
  <Text fontWeight="medium" fontColor="primary.11" fontSize="lg">
    {children}
  </Text>
)

const InfoCard = ({ data }) => {
  const { client, role, technologies } = data.content
  const { roles, info } = data
  return (
    <Box
      width={[1, 1, 'auto']}
      flexGrow={1}
      display="flex"
      flexDirection="column"
      justifyContent={['flex-start']}
      bg="#fff"
      boxShadow="md"
      p={[6, 8]}
      mr={[0, 0, 8, 12, 16]}
      mb={[8, 8, 8, 0]}
    >
      <InfoBoxRow mb={4}>
        <InfoBoxRowTitle>{role}</InfoBoxRowTitle>
        <InfoBoxRowDescription>{roles.join(', ')}</InfoBoxRowDescription>
      </InfoBoxRow>
      <InfoBoxRow mb={4}>
        <InfoBoxRowTitle>{technologies}</InfoBoxRowTitle>
        <InfoBoxRowDescription>{info.technologies}</InfoBoxRowDescription>
      </InfoBoxRow>
      <InfoBoxRow>
        <InfoBoxRowTitle>{client}</InfoBoxRowTitle>
        <InfoBoxRowDescription>{info.client}</InfoBoxRowDescription>
      </InfoBoxRow>
    </Box>
  )
}

export default InfoCard
