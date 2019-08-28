import React, { useContext } from 'react'
import { graphql } from 'gatsby'

import Text from '../components/atoms/Text'
import Box from '../components/atoms/Box'
import BottomBox from '../components/organisms/Footer/BottomBox'
import { formatAboutGroup, formatHeader } from '../utilitity/format'
import { usePageContent } from '../context/ContentContext'
import UnderlineText from '../components/atoms/UnderlineText'
import FadeIn from '../components/molecules/AnimatedBox/FadeIn'

const About = ({ data, pageContext, location }) => {
  const [content] = usePageContent(data)

  const { title, about_me, about_group } = data.about.data
  const aboutGroups = formatAboutGroup(about_group)
  const headerContent = formatHeader(data.header.edges[0])

  return (
    <FadeIn>
      <Box
        width={1}
        pb={[24]}
        maxWidth={800}
        m={[0, 0, 0, 0, 'auto']}
        px={[6, 8, 12, 12, 0, 0]}
      >
        <UnderlineText>{title.text}</UnderlineText>
        <Box
          display="flex"
          flexDirection={['column', 'column', 'row']}
          justifyContent="center"
          alignItems="center"
          my={8}
        >
          <Text
            fontFamily="sans"
            fontColor="primary.10"
            fontWeight="medium"
            fontSize={['base', 'lg']}
            withLine
            lineHeight="relaxed"
          >
            {about_me.text}
          </Text>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          maxWidth={1080}
          mt={[0, 0, 8]}
          mb={[0, 0, 16]}
        >
          {aboutGroups.map(group => (
            <Box width={1} m="auto">
              <Text
                fontFamily="sans"
                fontColor="primary.10"
                fontSize={['2xl']}
                fontWeight="black"
                mt={8}
                mb={8}
              >
                {group.title}
              </Text>
              {group.rows.map((row, idx) => (
                <Box
                  display="flex"
                  py={4}
                  borderTop="1px solid rgba(0,0,0,0.1)"
                >
                  <Text
                    fontFamily="sans"
                    width={[1 / 2]}
                    fontColor="primary.10"
                    fontWeight="medium"
                    fontSize={['base', 'lg']}
                    pr={3}
                  >
                    {row.name}
                  </Text>
                  <Text
                    fontFamily="sans"
                    maxWidth={500}
                    width={[5 / 6, 5 / 6, 1 / 2]}
                    fontColor="primary.10"
                    fontWeight="medium"
                    fontSize={['base', 'lg']}
                    pl={2}
                  >
                    {row.value}
                  </Text>
                </Box>
              ))}
            </Box>
          ))}
        </Box>
      </Box>
      <Box as="footer" width={1} m="auto">
        <BottomBox variant="secondary" />
      </Box>
    </FadeIn>
  )
}

export default About

export const pageQuery = graphql`
  query AboutPage($locale: String!) {
    about: prismicAbout(lang: { eq: $locale }) {
      lang
      data {
        title {
          text
        }
        about_me {
          text
        }
        about_group {
          group_title {
            text
          }
          rows1 {
            document {
              data {
                group {
                  row {
                    document {
                      data {
                        name {
                          text
                        }
                        value {
                          text
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    header: allPrismicHeader(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            brand {
              text
            }
            nav_home {
              text
            }
            nav_projects {
              text
            }
            nav_about {
              text
            }
            nav_articles {
              text
            }
          }
        }
      }
    }
  }
`
