/* eslint-disable camelcase */
import React from 'react'
import { graphql } from 'gatsby'
import Text from '../components/atoms/Text'
import Box from '../components/atoms/Box'
import Footer from '../components/organisms/Footer'
import { usePageContent } from '../context/ContentContext'
import Title from '../components/atoms/Text/Title'
import FadeIn from '../components/molecules/AnimatedBox/FadeIn'

const About = ({ data }) => {
  if (typeof window !== `undefined`) {
    const content = usePageContent(data)

    const { title, aboutGroup, aboutText } = content.aboutPage

    return (
      <>
        <FadeIn as="main">
          <Box
            width={1}
            pb={[8]}
            maxWidth={686}
            m={[0, 0, 'auto']}
            px={[8, 8, 12, 12, 0, 0]}
          >
            <Title>{title}</Title>
            <Box
              display="flex"
              flexDirection="column"
              maxWidth={1080}
              mb={[0, 0, 16]}
            >
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
                        fontColor="primary.6"
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
                        fontColor="primary.9"
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
            {aboutText.map(group => (
              <Box my={[8, 12, 16]}>
                <Text
                  fontSize={['2xl']}
                  fontColor="primary.9"
                  fontWeight="black"
                  mb={[4, 6]}
                >
                  {group.title}
                </Text>
                <Text
                  fontFamily="sans"
                  fontColor="primary.9"
                  fontWeight="medium"
                  fontSize={['base', 'lg']}
                  withLine
                  lineHeight="relaxed"
                >
                  {group.description}
                </Text>
              </Box>
            ))}
          </Box>
        </FadeIn>
        <Box as="footer" width={1} mt="auto">
          <Footer variant="secondary" />
        </Box>
      </>
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
        about_text {
          text_title {
            text
          }
          text_description {
            text
          }
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
    footer: allPrismicFooter(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            code_availability {
              text
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
