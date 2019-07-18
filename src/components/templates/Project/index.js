import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Footer from '../../organisms/Footer'
import Layout from '../Layout'
import Header from '../../organisms/Header'
import Text from '../../atoms/Text'
import Paragraph from '../../atoms/Paragraph'
import Box from '../../atoms/Box'
import Column from '../../atoms/Box/Column'
import Row from '../../atoms/Box/Row'
import ProjectCoverImage from '../../atoms/ProjectCoverImage'
import { getSliceContent } from '../../../utilitity/prismic'

const Main = styled(Box)`
  ${tw`relative bg-primary-100 `}
  margin-bottom: 500px;
  z-index: 5;
`

const ImageBox = styled.div`
  ${tw`w-full md:w-1/2 lg:w-1/3 shadow-lg`}
`

const Mockups = styled.div`
  ${tw`w-full relative flex justify-center items-center m-auto mt-8 md:mt-12 mb-0 md:mb-16`}

  & > div:nth-child(1) {
    ${tw`hidden md:block`}
    width: 20%;
    margin-right: -1em;
  }

  & > div:nth-child(2) {
    ${tw`w-full md:w-3/4`}
    z-index: 10;
  }
`

const Mock = styled.div`
  ${tw`h-full `}
`

const Img = styled.img`
  ${tw`w-full md:w-1/2 lg:w-1/3 shadow-lg`}
  object-fit: contain;
`

const Project = ({ data, pageContext }) => {
  const { title, description } = pageContext.data.node.data
  const { body } = data.prismicProjects.data
  const details = getSliceContent(body, 'detail')
  const mockups = getSliceContent(body, 'mockup')[0]
  const info = getSliceContent(body, 'info')[0]

  return (
    <Layout>
      <Header variant="secondary" />
      <Main bg="primary.1" py={16} m="auto" px={[4, 8, 16, 24, 32]}>
        <Box maxWidth={1280} width={1} m="auto" my={8} textAlign="center">
          <Column alignItems="center">
            <Text
              fontSize={['4xl', '5xl']}
              fontColor="primary.7"
              fontWeight="black"
            >
              {title.text}
            </Text>
            <Paragraph fontColor="primary.5" fontSize={['lg', '2xl']}>
              {description.text}
            </Paragraph>
          </Column>
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
          justifyContent="center"
          alignItems="center"
          width={1}
          maxWidth={1480}
          m="auto"
        >
          <Box
            flex={1}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            bg="#fff"
            boxShadow="lg"
            px={8}
            py={8}
            mb={8}
          >
            <Column my={1}>
              <Text fontFamily="sans" fontSize={['sm']} fontWeight="bold">
                Role
              </Text>
              <Text fontFamily="sans" fontSize={['sm', 'sm', 'sm', 'base']}>
                {info.role}
              </Text>
            </Column>
            <Column my={1}>
              <Text fontFamily="sans" fontSize={['sm']} fontWeight="bold">
                Technologies
              </Text>
              <Text fontFamily="sans" fontSize={['sm', 'sm', 'sm', 'base']}>
                {info.technologies}
              </Text>
            </Column>
            <Column my={1}>
              <Text fontFamily="sans" fontSize={['sm']} fontWeight="bold">
                Client
              </Text>
              <Text fontFamily="sans" fontSize={['sm', 'sm', 'sm', 'base']}>
                {info.client}
              </Text>
            </Column>
          </Box>
          <Box px={[8, 8, 8, 8, 16]} flex={[1, 2, 2, 2, 2]}>
            <Paragraph
              fontColor="primary.5"
              fontSize={['xl', 'lg', 'lg', 'xl', '2xl']}
            >
              {description.text}
              {description.text}
              {description.text}
              {description.text}
              {description.text}
              {description.text}
              {description.text}
            </Paragraph>
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          maxWidth={1480}
          m="auto"
          my={16}
          mb={[8, 8, 0]}
        >
          {details.map((detail, idx) => {
            const even = idx % 2 === 0

            return (
              <Box
                display="flex"
                position="relative"
                flexDirection={['column', 'row']}
                my={8}
                justifyContent="center"
                alignItems="center"
                flex={1}
              >
                <Img src={detail.url} />

                <Column py={[4, 0]} px={[0, 16]} flex={1}>
                  <Text
                    fontWeight="black"
                    fontSize={['3xl', '4xl']}
                    fontColor="primary.7"
                    mb={2}
                  >
                    {detail.title}
                  </Text>
                  <Text
                    fontFamily="sans"
                    fontSize={['base', 'lg']}
                    fontColor="primary.5"
                  >
                    {detail.description}
                    {detail.description}
                    {detail.description}
                  </Text>
                </Column>
              </Box>
            )
          })}
        </Box>
      </Main>
      <Footer />
    </Layout>
  )
}

export default Project

export const pageQuery = graphql`
  query ProjectPostByUid($uid: String!, $locale: String!) {
    prismicProjects(uid: { eq: $uid }, lang: { eq: $locale }) {
      data {
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
  }
`
