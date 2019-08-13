import React from 'react'
import styled from 'styled-components'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import ArrowButton from '../../atoms/Button/ArrowButton'
import HomeInfoRow from '../../molecules/HomeInfoRow'

const rows = [1, 2, 3]

const AboutSlide = ({ content: { title, description, button } }) => (
  <Box
    width={1}
    maxWidth={1480}
    m="auto"
    pt={[16, 24, 64]}
    pb={[16, 24, 32]}
    px={[6, 6, 12, 16, 24]}
  >
    <HomeInfoRow
      title={title}
      description={description}
      button={button}
      idx={1}
    />
    <Box
      display="flex"
      flexDirection={['column', 'column', 'row']}
      as="section"
      my={32}
    >
      {rows.map((row, idx) => (
        <Box
          as="article"
          display="flex"
          flex={1}
          mr={8}
          mb={[
            `${idx === rows.length - 1 ? 0 : 8}`,
            `${idx === rows.length - 1 ? 0 : 8}`,
            0,
          ]}
        >
          <Text
            display="inline-block"
            fontSize="lg"
            fontFamily="sans"
            fontWeight="bold"
            fontColor="primary.8"
            mr={8}
          >
            01.
          </Text>
          <Box display="flex" flexDirection="column">
            <Text
              fontFamily="sans"
              fontWeight="bold"
              fontSize="lg"
              fontColor="primary.8"
              style={{ textTransform: 'uppercase' }}
              mb={4}
            >
              Sketch
            </Text>
            <Text
              fontFamily="sans"
              maxWidth={[350, 450, 250]}
              fontColor="primary.7"
              fontWeight="medium"
            >
              Sketch / idea is part in which we work together on desired
              outcome.
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
    <Box textAlign="right" mt={32}>
      <LocalizedLink to="/about" display={['none', 'none', 'block']}>
        <ArrowButton fontColor="primary.8">{button}</ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default AboutSlide
