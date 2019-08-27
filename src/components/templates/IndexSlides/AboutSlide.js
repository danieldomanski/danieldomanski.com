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
    pt={[12, 16, 48, 64]}
    pb={[0, 0, 24, 48]}
    px={[6, 8, 12, 12, 16, 16]}
  >
    <HomeInfoRow
      title={title}
      description={description}
      button={button}
      idx={1}
    />
    <Box
      width={1}
      display="flex"
      justifyContent="center"
      flexDirection={['column', 'column', 'row']}
      as="section"
      my={[12, 16, 16]}
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
            fontSize={['lg', 'lg', 'xl']}
            fontFamily="sans"
            fontWeight="bold"
            fontColor="primary.10"
            style={{ textTransform: 'uppercase' }}
            mr={[4, 4, 6]}
          >
            {`0${idx + 1}.`}
          </Text>
          <Box display="flex" flexDirection="column">
            <Text
              fontFamily="sans"
              fontWeight="bold"
              fontSize={['lg', 'lg', 'xl']}
              fontColor="cosmic.2"
              style={{ textTransform: 'uppercase' }}
              mb={[2, 2, 4]}
            >
              Sketch
            </Text>
            <Text
              fontFamily="sans"
              fontSize={['base', 'lg', 'lg']}
              maxWidth={[350]}
              fontColor="cosmic.2"
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
        <ArrowButton fontColor="cosmic.2" fontSize={['sm', 'base', 'base']}>
          {button}
        </ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default AboutSlide
