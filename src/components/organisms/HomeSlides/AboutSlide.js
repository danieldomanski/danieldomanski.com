import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Subtitle from '../../atoms/Text/Subtitle'
import Slide from '../../templates/Slide'

const AboutSlide = ({ content }) => {
  const { processDetails, processRows } = content

  return (
    <Slide id="about" content={content} to="/about">
      <Subtitle>{processDetails}</Subtitle>
      <Box
        width={1}
        display="flex"
        justifyContent="center"
        flexDirection={['column', 'column', 'column', 'column', 'row']}
        as="section"
        flex={3}
      >
        {processRows.map((row, idx) => {
          const isLastElement = idx === processRows.length - 1
          return (
            <Box
              as="article"
              display="flex"
              key={row.title}
              mb={[
                `${isLastElement ? 0 : 8}`,
                `${isLastElement ? 0 : 8}`,
                `${isLastElement ? 0 : 12}`,
                `${isLastElement ? 0 : 12}`,
                0,
              ]}
              mr={8}
              flex={1}
            >
              <Text
                display="inline-block"
                fontSize={['base', 'lg', 'xl', 'xl']}
                fontWeight="black"
                fontColor="primary.11"
                mr={[4, 4, 6]}
                letterSpacing="0.05em"
              >
                {`0${idx + 1}.`}
              </Text>
              <Box display="flex" flexDirection="column">
                <Text
                  as="h3"
                  fontWeight="black"
                  fontSize={['base', 'lg', 'xl', 'xl']}
                  fontColor="primary.11"
                  mb={[2, 2, 3, 3, 4]}
                  letterSpacing="0.05em"
                  style={{
                    textTransform: 'uppercase',
                  }}
                >
                  {row.title}
                </Text>
                <Text
                  fontSize={['base', 'base', 'lg', 'lg']}
                  fontColor="primary.11"
                  fontWeight="medium"
                  lineHeight="relaxed"
                  maxWidth={800}
                >
                  {row.description}
                </Text>
              </Box>
            </Box>
          )
        })}
      </Box>
    </Slide>
  )
}

AboutSlide.propTypes = {
  content: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
}

export default AboutSlide
