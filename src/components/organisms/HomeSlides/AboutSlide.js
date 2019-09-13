import React from 'react'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Slide from '../../templates/Slide'

const rows = [1, 2, 3]

const AboutSlide = ({ content }) => (
  <Slide content={content} to="/about">
    <Box mt={[12, 12, 16, 24]} mb={[12, 12, 16, 24]}>
      <Text
        display="block"
        fontSize={['base', 'lg', 'lg', 'xl']}
        fontWeight="black"
        fontColor="primary.4"
        style={{ textTransform: 'uppercase' }}
        mb={[12, 12, 16, 20]}
      >
        {content.processDetails}
      </Text>
      <Box
        width={1}
        display="flex"
        justifyContent="center"
        flexDirection={['column', 'column', 'row']}
        as="section"
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
            flexGrow={1}
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
                style={{
                  textTransform: 'uppercase',
                  letterSpacing: '-0.04em',
                }}
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
    </Box>
  </Slide>
)
export default AboutSlide
