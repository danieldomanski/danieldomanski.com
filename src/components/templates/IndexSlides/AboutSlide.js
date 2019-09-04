import React from 'react'
import styled from 'styled-components'
import { LocalizedLink } from '../../atoms/Link'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import ArrowButton from '../../atoms/Button/ArrowButton'
import HomeInfoRow from '../../molecules/HomeInfoRow'
import { DirectionalFade } from '../../molecules/AnimatedBox'

const rows = [1, 2, 3]

const AboutSlide = ({ content: { title, description, button } }) => (
  <Box
    width={1}
    maxWidth={1400}
    m="auto"
    py={[8, 8, 16, 32]}
    px={[8, 8, 12, 12, 16, 16]}
  >
    <HomeInfoRow
      title={title}
      description={description}
      button={button}
      idx={1}
    />
    <Text
      fontFamily="sans"
      fontSize={['lg', 'lg', 'xl']}
      textAlign={['center', 'left']}
      fontColor="primary.5"
      fontWeight="bold"
      minWidth={250}
      mr={[4, 8, 8, 16, 32]}
      mb={12}
    >
      Proces.
    </Text>
    <Box
      width={1}
      display="flex"
      justifyContent="center"
      flexDirection={['column', 'column', 'row']}
      as="section"
      mb={[12, 16, 16]}
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
          flex={1}
        >
          <Text
            display="inline-block"
            fontSize={['base', 'lg', 'lg', 'xl']}
            fontWeight="bold"
            fontColor="primary.10"
            style={{ textTransform: 'uppercase' }}
            mr={[4, 4, 6]}
          >
            {`0${idx + 1}.`}
          </Text>
          <Box display="flex" flexDirection="column">
            <Text
              fontWeight="bold"
              fontSize={['base', 'lg', 'lg', 'xl']}
              fontColor="cosmic.2"
              style={{ textTransform: 'uppercase' }}
              mb={[2, 2, 4]}
            >
              Sketch
            </Text>
            <Text
              fontFamily="serif"
              fontSize={['base', 'base', 'base', 'lg']}
              maxWidth={[350]}
              fontColor="primary.7"
              fontWeight="medium"
              lineHeight="relaxed"
            >
              Sketch / idea is part in which we work together on desired
              outcome.
            </Text>
          </Box>
        </Box>
      ))}
    </Box>
    <Box textAlign={['center', 'left', 'right']} mt={[12, 16, 24]}>
      <LocalizedLink to="/about" display={['block']}>
        <ArrowButton fontColor="cosmic.0" fontSize={['sm', 'base', 'base']}>
          {button}
        </ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default AboutSlide
