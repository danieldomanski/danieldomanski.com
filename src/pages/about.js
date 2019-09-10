/* eslint-disable camelcase */

import React from 'react'
import { graphql } from 'gatsby'

import Text from '../components/atoms/Text'
import Box from '../components/atoms/Box'
import BottomBox from '../components/organisms/Footer/BottomBox'
import { formatAboutGroup } from '../utilitity/format'
import { usePageContent } from '../context/ContentContext'
import UnderlineText from '../components/atoms/UnderlineText'
import FadeIn from '../components/molecules/AnimatedBox/FadeIn'

const About = ({ data }) => {
  if (typeof window !== `undefined`) {
    const content = usePageContent(data)

    const { title, aboutMe, aboutGroup } = content.aboutPage
    console.log({ content, aboutGroup })
    return (
      <FadeIn>
        <Box
          width={1}
          pb={[8]}
          maxWidth={686}
          m={[0, 0, 'auto']}
          px={[8, 8, 12, 12, 0, 0]}
        >
          <UnderlineText>{title}</UnderlineText>
          <Box
            display="flex"
            flexDirection="column"
            maxWidth={1080}
            mt={[0, 0, 8]}
            mb={[0, 0, 16]}
          >
            <Text
              fontSize={['2xl']}
              fontColor="primary.9"
              fontWeight="black"
              mb={[6, 8]}
            >
              TL; DR.
            </Text>
            {aboutGroup.map(group => (
              <Box width={1} m="auto" my={2}>
                {group.rows.map(row => (
                  <Box
                    display="flex"
                    py={4}
                    borderTop="1px solid rgba(0,0,0,0.1)"
                  >
                    <Text
                      fontFamily="sans"
                      width={[1 / 2]}
                      fontColor="primary.7"
                      fontWeight="medium"
                      fontSize={['base', 'base']}
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
                      fontSize={['base', 'base']}
                      pl={2}
                    >
                      {row.value}
                    </Text>
                  </Box>
                ))}
              </Box>
            ))}
          </Box>
          <Box my={[12, 12, 20]}>
            <Text
              fontSize={['2xl']}
              fontColor="primary.9"
              fontWeight="black"
              mb={[6, 8]}
            >
              The past.
            </Text>
            <Text
              fontFamily="sans"
              fontColor="primary.10"
              fontWeight="medium"
              fontSize={['base', 'lg']}
              withLine
              lineHeight="relaxed"
            >
              {aboutMe}
            </Text>
          </Box>
          <Box my={[12, 12, 20]}>
            <Text
              fontSize="2xl"
              fontColor="primary.9"
              fontWeight="black"
              mb={[6, 8]}
            >
              The now.
            </Text>
            <Text
              fontFamily="sans"
              fontColor="primary.10"
              fontWeight="medium"
              fontSize={['base', 'lg']}
              withLine
              lineHeight="relaxed"
            >
              {aboutMe}
            </Text>
          </Box>
          <Box my={[12, 12, 20]}>
            <Text
              fontSize="2xl"
              fontColor="primary.9"
              fontWeight="black"
              mb={[6, 8]}
            >
              The future.
            </Text>
            <Text
              fontFamily="sans"
              fontColor="primary.10"
              fontWeight="medium"
              fontSize={['base', 'lg']}
              withLine
              lineHeight="relaxed"
            >
              {aboutMe}
            </Text>
          </Box>
        </Box>

        <Box as="footer" width={1} m="auto">
          <BottomBox variant="secondary" />
        </Box>
      </FadeIn>
    )
  }

  return null
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
