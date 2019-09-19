import React from 'react'
import PropTypes from 'prop-types'
import Box from '../../atoms/Box'
import Text from '../../atoms/Text'
import Slide from '../../templates/Slide'

const AboutSlide = ({ content }) => {
  const { processDetails, processRows } = content

  return (
    <Slide id="about" content={content} to="/about">
      <Box>
        <Text
          display="block"
          fontSize={['base', 'lg', 'xl', 'xl']}
          fontWeight="black"
          fontColor="primary.4"
          style={{ textTransform: 'uppercase' }}
          mb={[12, 12, 12, 12, 16]}
        >
          {processDetails}
        </Text>
        <Box
          width={1}
          display="flex"
          justifyContent="center"
          flexDirection={['column', 'column', 'column', 'column', 'row']}
          as="section"
        >
          {processRows.map((row, idx) => {
            const isLastElement = idx === processRows.length - 1
            return (
              <Box
                as="article"
                display="flex"
                mb={[
                  `${isLastElement ? 0 : 8}`,
                  `${isLastElement ? 0 : 8}`,
                  `${isLastElement ? 0 : 12}`,
                  `${isLastElement ? 0 : 12}`,
                  0,
                ]}
                mr={idx === processRows.length - 1 ? 0 : 6}
                flexGrow={1}
              >
                <Text
                  display="inline-block"
                  fontSize={['base', 'lg', 'xl', 'xl']}
                  fontWeight="black"
                  fontColor="primary.10"
                  mr={[4, 4, 6]}
                >
                  {`0${idx + 1}.`}
                </Text>
                <Box display="flex" flexDirection="column">
                  <Text
                    fontWeight="black"
                    fontSize={['base', 'lg', 'xl', 'xl']}
                    fontColor="primary.11"
                    style={{
                      textTransform: 'uppercase',
                      letterSpacing: '-0.04em',
                    }}
                    mb={[2, 2, 3, 3, 6]}
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

AboutSlide.defaultProps = {
  data: PropTypes.shape({
    projects: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
    posts: PropTypes.shape({
      edges: PropTypes.array.isRequired,
    }),
  }).isRequired,
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired,
  }).isRequired,
  location: PropTypes.object.isRequired,
}

export default AboutSlide
