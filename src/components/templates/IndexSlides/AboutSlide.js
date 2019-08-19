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
    pt={[16, 24, 64]}
    pb={[16, 24, 48]}
    px={[6, 6, 12, 0, 0]}
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
    >
      {rows.map((row, idx) => (
        <DirectionalFade delay={0.15 * idx}>
          <Box
            as="article"
            display="flex"
            mb={[
              `${idx === rows.length - 1 ? 0 : 8}`,
              `${idx === rows.length - 1 ? 0 : 8}`,
              0,
            ]}
          >
            <Text
              display="inline-block"
              fontSize="xl"
              fontFamily="sans"
              fontWeight="black"
              fontColor="primary.10"
              style={{ textTransform: 'uppercase', letterSpacing: '1px' }}
              mr={8}
            >
              {`0${idx + 1}.`}
            </Text>
            <Box display="flex" flexDirection="column">
              <Text
                fontFamily="sans"
                fontWeight="black"
                fontSize="xl"
                fontColor="primary.10"
                style={{ textTransform: 'uppercase', letterSpacing: '1px' }}
                mb={6}
              >
                Sketch
              </Text>
              <Text
                fontSize={['base', 'base', 'lg']}
                maxWidth={[350, 450, 400]}
                fontColor="primary.10"
                fontWeight="medium"
              >
                Sketch / idea is part in which we work together on desired
                outcome.
              </Text>
            </Box>
          </Box>
        </DirectionalFade>
      ))}
    </Box>
    <Box textAlign="right" mt={20}>
      <LocalizedLink to="/blog" display={['none', 'none', 'block']}>
        <ArrowButton fontColor="primary.2" fontSize="lg">
          {button}
        </ArrowButton>
      </LocalizedLink>
    </Box>
  </Box>
)

export default AboutSlide
