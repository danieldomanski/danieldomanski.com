import React from 'react'
import styled, { keyframes } from 'styled-components'
import { graphql } from 'gatsby'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import Image from '../../atoms/Image'
import BottomBox from '../../organisms/Footer/BottomBox'
import FadeIn from '../../molecules/AnimatedBox/FadeIn'
import UnderlineText from '../../atoms/UnderlineText'
import { getSliceContent } from '../../../utils/prismic'
import { formatInvolvment } from '../../../utils/format'
import { usePageContent } from '../../../context/ContentContext'

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

const InfoBoxRow = ({ children, ...rest }) => (
  <Box
    width={1}
    display="flex"
    flexDirection="column"
    textAlign={['center', 'left', 'right']}
    my={2}
    {...rest}
  >
    {children}
  </Box>
)

const InfoBoxRowTitle = ({ children }) => (
  <Text fontColor="primary.5" fontWeight="medium" fontSize="base">
    {children}
  </Text>
)

const InfoBoxRowDescription = ({ children }) => (
  <Text fontWeight="medium" fontColor="primary.11">
    {children}
  </Text>
)

const Project = ({ data, pageContext }) => {
  if (typeof window !== `undefined`) {
    const content = usePageContent(data)
    const { title, description } = pageContext.data.node.data
    const { body } = data.prismicProjects.data
    const { client, role, technologies } = content.projectPage

    const details = getSliceContent(body, 'detail')
    const mockups = getSliceContent(body, 'mockup')[0]
    const info = getSliceContent(body, 'info')[0]
    const fullWidthImages = getSliceContent(body, 'fullwidthimage')
    const roles = formatInvolvment(data.prismicProjects.data.role)

    return (
      <FadeIn>
        <Box
          width={1}
          pb={[4, 8, 16]}
          maxWidth={1400}
          m={[0, 0, 0, 0, 'auto']}
          px={[6, 8, 16, 24, 32]}
        >
          <Box width={1} m="auto" textAlign="center">
            <Text
              fontColor="primary.10"
              fontWeight="black"
              fontSize={['3xl', '4xl', '5xl']}
              lineHeight="relaxed"
              mt={[8, 12, 12, 12, 16]}
            >
              {title.text}
            </Text>
            <Box
              width={1}
              position="relative"
              display="flex"
              justifyContent="center"
              alignItems="center"
              my={[8, 8, 12]}
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
            flexDirection={['column', 'column', 'row']}
            alignItems="flex-start"
            width={1}
            m="auto"
          >
            <Box
              width={[1, 1, 0]}
              flexGrow={1}
              display="flex"
              flexDirection="column"
              justifyContent={['flex-start']}
              bg="#fff"
              boxShadow="md"
              p={[6, 8]}
              mr={[0, 0, 8, 12, 16]}
              mb={[8, 8, 0]}
            >
              <InfoBoxRow mb={4}>
                <InfoBoxRowTitle>{role}</InfoBoxRowTitle>
                <InfoBoxRowDescription>
                  {roles.join(', ')}
                </InfoBoxRowDescription>
              </InfoBoxRow>
              <InfoBoxRow mb={4}>
                <InfoBoxRowTitle>{technologies}</InfoBoxRowTitle>
                <InfoBoxRowDescription>
                  {info.technologies}
                </InfoBoxRowDescription>
              </InfoBoxRow>
              <InfoBoxRow>
                <InfoBoxRowTitle>{client}</InfoBoxRowTitle>
                <InfoBoxRowDescription>{info.client}</InfoBoxRowDescription>
              </InfoBoxRow>
            </Box>
            <Box
              width={1}
              display="flex"
              alignItems="center"
              flexGrow={[1, 3, 3, 3, 3]}
            >
              <Text
                fontWeight="medium"
                fontColor="primary.9"
                fontSize={['lg', 'lg']}
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
            maxWidth={1480}
            my={[8, 8, 16]}
          >
            {fullWidthImages.map((img, idx) => (
              <Box>
                <Box boxShadow="default">
                  <Image input={img.localFile} fit="cover" />
                </Box>

                {details[idx] ? (
                  <Box
                    maxWidth={800}
                    display="flex"
                    flexDirection="column"
                    my={12}
                    ml="auto"
                    lineHeight="loose"
                  >
                    <Text
                      fontWeight="black"
                      fontSize={['lg', 'xl']}
                      fontColor="primary.8"
                      mb={1}
                    >
                      {details[idx].title}
                    </Text>
                    <Text
                      fontWeight="medium"
                      fontSize={['base', 'lg']}
                      fontColor="primary.9"
                    >
                      {details[idx].description}
                    </Text>
                    <Box />
                  </Box>
                ) : null}
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
          ... on PrismicProjectsBodyDetail {
            slice_type
            id
            primary {
              detailtitle {
                text
              }
              detaildescription1 {
                text
              }
              image {
                url
                localFile {
                  childImageSharp {
                    fluid {
                      src
                    }
                  }
                }
              }
            }
          }
          ... on PrismicProjectsBodyImage {
            slice_type
            id
            primary {
              image {
                alt
                url
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
          ... on PrismicProjectsBodyFullwidthimage {
            slice_type
            id
            primary {
              image {
                alt
                url
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
