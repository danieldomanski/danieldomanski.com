import React from 'react'
import styled, { keyframes } from 'styled-components'
import { graphql } from 'gatsby'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import Image from '../../atoms/Image'
import Footer from '../../organisms/Footer'
import FadeIn from '../../molecules/AnimatedBox/FadeIn'
import Title from '../../atoms/Text/Title'
import { getSliceContent } from '../../../utils/prismic'
import { formatInvolvment } from '../../../utils/format'
import { usePageContent } from '../../../context/ContentContext'
import {
  MultiImage,
  ImageWithCaption,
  InfoCard,
} from '../../molecules/ProjectContent'

const SlideLeft = keyframes`
0% {
  margin-right: -16em;
}

100% {
  margin-right: -1em;
}
`

const MobileMockup = styled.div`
  display: hidden;

  @media screen and (min-width: 768px) {
    display: block;
  }

  @media screen and (min-width: 1600px) {
    display: block;
    width: 200px;
  }

  width: 160px;
  animation: ${SlideLeft} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.75s both;
  margin-right: -1em;
`

const DesktopMockup = styled.div`
  width: 600px;

  @media screen and (min-width: 1600px) {
    display: block;
    width: 700px;
  }
`

const Project = ({ data, pageContext }) => {
  if (typeof window !== `undefined`) {
    const content = usePageContent(data)
    const { body } = data.prismicProjects.data
    const projectData = getSliceContent(body)
    const {
      mockup: mockups,
      info,
      video,
      imagewithcaption: imageWithCaption,
      multiimage: multiImage,
    } = projectData

    const { title, description } = pageContext.data.node.data
    const { client, role, technologies } = content.projectPage

    const infoCardData = {
      content: { client, role, technologies },
      roles: formatInvolvment(data.prismicProjects.data.role),
      info,
    }

    return (
      <FadeIn>
        <Box
          width={1}
          pb={[4, 8, 16]}
          maxWidth={1480}
          m={[0, 0, 0, 0, 'auto']}
          px={[6, 8, 16, 24, 32]}
        >
          <Box width={1} m="auto" textAlign="center">
            <Title>{title.text}</Title>
            <Box
              width={1}
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={[8, 12, 16]}
            >
              <MobileMockup>
                <Image input={mockups.mobile} fit="contain" />
              </MobileMockup>
              <DesktopMockup>
                <Image input={mockups.desktop} fit="contain" />
              </DesktopMockup>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={['column', 'column', 'column', 'row']}
            alignItems="flex-start"
            alignItems="center"
            textAlign={['center', 'center', 'left']}
            width={1}
            m="auto"
          >
            <InfoCard data={infoCardData} />
            <Box
              width={1}
              display="flex"
              alignItems="center"
              flexGrow={[1, 3, 3, 3, 3]}
            >
              <Text
                fontWeight="medium"
                fontColor="primary.9"
                fontSize={['base', 'lg']}
                lineHeight="relaxed"
              >
                {description.text}
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
          >
            <Box>
              {!multiImage
                ? null
                : multiImage.map((multiItem, idx) => {
                    console.log({ multiItem })
                    return (
                      <MultiImage
                        data={multiItem}
                        align={idx % 2 === 0 ? 'left' : 'right'}
                      />
                    )
                  })}
            </Box>
            <Box>
              {!imageWithCaption
                ? null
                : imageWithCaption.map((img, idx) => (
                  <ImageWithCaption
                    data={img}
                    align={idx % 2 === 0 ? 'left' : 'right'}
                  />
                  ))}
            </Box>
          </Box>
        </Box>
        <Box as="footer" width={1} m="auto">
          <Footer variant="secondary" />
        </Box>
      </FadeIn>
    )
  }

  return null
}

export default Project

export const pageQuery = graphql`
  query ProjectPostByUid($uid: String!, $locale: String!) {
    prismicProjects(uid: { eq: $uid }, lang: { eq: $locale }) {
      data {
        role {
          involvment {
            document {
              data {
                involvment {
                  text
                }
              }
            }
          }
        }
        body {
          ... on PrismicProjectsBodyImagewithcaption {
            slice_type
            id
            primary {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              description1 {
                text
              }
              title1 {
                text
              }
            }
          }
          ... on PrismicProjectsBodyMultiimage {
            slice_type
            id
            primary {
              description1 {
                text
              }
              title1 {
                text
              }
            }
            items {
              image {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
          ... on PrismicProjectsBodyVideo {
            slice_type
            id
            primary {
              description1 {
                text
              }
              src {
                url
              }
              title1 {
                text
              }
            }
          }
          ... on PrismicProjectsBodyInfo {
            slice_type
            id
            primary {
              client {
                text
              }
              role {
                text
              }
              technologies {
                text
              }
            }
          }

          ... on PrismicProjectsBodyMockup {
            slice_type
            id
            primary {
              desktop1 {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
              mobile {
                localFile {
                  childImageSharp {
                    fluid(maxWidth: 1200, quality: 90) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
        title {
          text
        }
        description {
          text
        }
      }
    }
    projectPage: allPrismicSingleprojectpage(
      filter: { lang: { eq: $locale } }
    ) {
      edges {
        node {
          data {
            body {
              ... on PrismicSingleprojectpageBodyInfobox {
                items {
                  role {
                    text
                  }
                  technologies {
                    text
                  }
                  client {
                    text
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
