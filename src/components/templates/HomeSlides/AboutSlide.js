import React from 'react'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import ArrowButton from '../../atoms/Button/ArrowButton'
import HomeInfoRow from '../../molecules/HomeInfoRow'

const rows = [1, 2, 3]

const AboutSlide = ({ content: { title, description, button } }) => (
  <Box width={1} maxWidth={1400} m="auto" px={[8, 8, 24]} py={[12, 16, 20, 24]}>
    <HomeInfoRow
      title={title}
      description={description}
      button={button}
      idx={1}
    />
    <Text
      display="inline-block"
      fontSize={['base', 'lg', 'lg', 'xl']}
      fontWeight="black"
      fontColor="primary.4"
      style={{ textTransform: 'uppercase' }}
      mt={[12, 12, 16, 16]}
      mb={[12, 12, 12, 16]}
    >
      Jak pracuję?
    </Text>
    <Box
      width={1}
      display="flex"
      justifyContent="center"
      flexDirection={['column', 'column', 'row']}
      as="section"
      mb={[8, 8, 20]}
    >
      {rows.map((row, idx) => (
        <Box
          as="article"
          display="flex"
          mb={[
            `${idx === rows.length - 1 ? 0 : 8}`,
            `${idx === rows.length - 1 ? 0 : 8}`,
            `${idx === rows.length - 1 ? 0 : 8}`,
            0,
          ]}
          mr={8}
          flex={1}
        >
          <Text
            display="inline-block"
            fontSize={['base', 'lg', 'lg', 'xl']}
            fontWeight="black"
            fontColor="primary.10"
            mr={[4, 4, 6]}
          >
            {`0${idx + 1}.`}
          </Text>
          <Box display="flex" flexDirection="column">
            <Text
              fontWeight="black"
              fontSize={['base', 'lg', 'lg', 'xl']}
              fontColor="primary.11"
              style={{ textTransform: 'uppercase', letterSpacing: '-0.04em' }}
              mb={[2, 2, 4]}
            >
              Sketch
            </Text>
            <Text
              fontSize={['base', 'base', 'base', 'lg']}
              maxWidth={[350]}
              fontColor="primary.11"
              fontWeight="medium"
            >
              Sketch / idea is part in which we work together on desired
              outcome.
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
    <Box textAlign={['center', 'left', 'right']}>
      <LocalizedLink to="/about" display={['block']}>
        <ArrowButton fontSize={['sm', 'base', 'base']}>{button}</ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default AboutSlide
