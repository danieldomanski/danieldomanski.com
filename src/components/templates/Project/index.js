import React from 'react'
import styled, { keyframes } from 'styled-components'
import { graphql } from 'gatsby'
import BottomBox from '../../organisms/Footer/BottomBox'

import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import ProjectCoverImage from '../../atoms/ProjectCoverImage'
import { getSliceContent } from '../../../utilitity/prismic'
import { formatInvolvment } from '../../../utilitity/format'
import { usePageContent } from '../../../context/ContentContext'
import FadeIn from '../../molecules/AnimatedBox/FadeIn'

const SlideLeft = keyframes`
0% {
  margin-right: -16em;
}


100% {
  margin-right: -1em;
}
`

const Mockups = styled.div`
  ${tw`w-full relative flex justify-center items-center m-auto mt-16 mb-16`}

  & > div:nth-child(1) {
    ${tw`hidden md:block`}
    width: 200px;
    animation: ${SlideLeft} 1s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.75s
      both;
    margin-right: -1em;
  }

  & > div:nth-child(2) {
    width: 750px;

    z-index: 10;
  }
`

const Mock = styled.div`
  ${tw``}
`

const InfoBoxRow = ({ children, ...rest }) => (
  <Box display="flex" flexDirection="column" {...rest}>
    {children}
  </Box>
)

const InfoBoxRowTitle = ({ children }) => (
  <Text
    fontFamily="sans"
    fontColor="primary.4"
    fontWeight="medium"
    fontSize="sm"
  >
    {children}
  </Text>
)

const InfoBoxRowDescription = ({ children }) => (
  <Text fontFamily="sans" fontSize={['base']} fontWeight="medium">
    {children}
  </Text>
)

const Project = ({ data, pageContext }) => {
  const [content] = usePageContent(data)
  const { title, description } = pageContext.data.node.data
  const { body } = data.prismicProjects.data
  console.log({ content })
  const { client, role, technologies } = content.projectPage

  const details = getSliceContent(body, 'detail')
  const mockups = getSliceContent(body, 'mockup')[0]
  const info = getSliceContent(body, 'info')[0]
  const fullWidthImages = getSliceContent(body, 'fullwidthimage')
  const roles = formatInvolvment(data.prismicProjects.data.role)
  console.log({ details })
  console.log({ info })
  return (
    <FadeIn>
      <Box
        width={1}
        pb={[4, 8, 16]}
        maxWidth={1300}
        m={[0, 0, 0, 0, 'auto']}
        px={[4, 8, 12, 12, 0, 0]}
      >
        <Box width={1} m="auto" textAlign="center" mt={8}>
          <Text
            fontFamily="sans"
            fontColor="primary.10"
            fontWeight="black"
            fontSize={['4xl', '4xl', '5xl']}
            lineHeight="none"
          >
            {title.text}
          </Text>

          <Mockups>
            <Mock>
              <ProjectCoverImage input={mockups.mobile} fit="contain" />
            </Mock>
            <Mock>
              <ProjectCoverImage input={mockups.desktop} fit="contain" />
            </Mock>
          </Mockups>
        </Box>
        <Box
          display="flex"
          flexDirection={['column', 'column', 'row']}
          width={1}
          maxWidth={1400}
          m="auto"
        >
          <Box
            width={[1, 1, 0]}
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            bg="#fff"
            boxShadow="md"
            p={10}
          >
            <InfoBoxRow mb={4}>
              <InfoBoxRowTitle>{role}</InfoBoxRowTitle>
              <InfoBoxRowDescription>{roles.join(', ')}</InfoBoxRowDescription>
            </InfoBoxRow>
            <InfoBoxRow mb={4}>
              <InfoBoxRowTitle>{technologies}</InfoBoxRowTitle>
              <InfoBoxRowDescription>{info.technologies}</InfoBoxRowDescription>
            </InfoBoxRow>
            <InfoBoxRow>
              <InfoBoxRowTitle>{client}</InfoBoxRowTitle>
              <InfoBoxRowDescription>{info.client}</InfoBoxRowDescription>
            </InfoBoxRow>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            px={[8, 8, 8, 8, 16]}
            flex={[1, 2, 2, 2, 2]}
          >
            <Text
              fontFamily="serif"
              fontColor="primary.9"
              fontSize={['lg']}
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
          my={16}
          mb={[8, 8, 0]}
        >
          {fullWidthImages.map((img, idx) => (
            <Box>
              <ProjectCoverImage input={img.localFile} fit="cover" />
              {details[idx] ? (
                <Box
                  maxWidth={800}
                  display="flex"
                  flexDirection="column"
                  mt={12}
                  mb={16}
                  ml="auto"
                  lineHeight="loose"
                >
                  <Text
                    fontWeight="bold"
                    fontSize={['lg', 'xl']}
                    fontColor="primary.8"
                    mb={1}
                  >
                    {details[idx].title}
                  </Text>
                  <Text
                    fontFamily="serif"
                    fontWeight="normal"
                    fontSize={['3xl', 'lg']}
                    fontColor="primary.6"
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
