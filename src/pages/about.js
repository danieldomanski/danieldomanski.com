import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/templates/Layout'
import Header from '../components/organisms/Header'
import Text from '../components/atoms/Text'
import Box from '../components/atoms/Box'
import Avatar from '../components/atoms/Avatar'
import BottomBox from '../components/organisms/Footer/BottomBox'
import { formatAboutGroup, formatHeader } from '../utilitity/format'

const About = ({ data, pageContext, location }) => {
  const { title, about_me, about_group } = data.about.data
  const aboutGroups = formatAboutGroup(about_group)
  const headerContent = formatHeader(data.header.edges[0])

  return (
    <Layout locale={pageContext.locale}>
      <Header content={headerContent} />
      <Box
        width={1}
        pt={[8, 8, 16]}
        pb={[8, 8, 32]}
        maxWidth={960}
        m="auto"
        px={[6, 6, 12, 0, 0]}
      >
        <Text
          display="block"
          textAlign="center"
          fontFamily="sans"
          fontColor="primary.10"
          fontWeight="black"
          fontSize={['3xl', '4xl', '5xl']}
        >
          {title.text}
        </Text>
        <Box
          display="flex"
          flexDirection={['column', 'column', 'row']}
          justifyContent="center"
          alignItems="center"
          my={[4, 4, 0]}
        >
          <Avatar x={200} y={200} src="profile-picture.jpg" mr={[0, 0, 8]} />
          <Text
            maxWidth={600}
            fontColor="primary.10"
            fontWeight="medium"
            fontSize={['base', 'lg']}
            withLine
            mt={6}
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
                    width={[1 / 2]}
                    fontColor="primary.10"
                    fontWeight="medium"
                    fontSize={['base', 'lg']}
                    pr={3}
                  >
                    {row.name}
                  </Text>
                  <Text
                    maxWidth={500}
                    width={[5 / 6, 5 / 6, 1 / 2]}
                    fontColor="primary.10"
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
      <Box as="footer" width={1} maxWidth={1400} m="auto" px={8} mt={8}>
        <BottomBox variant="secondary" />
      </Box>
    </Layout>
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
