import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../Layout'
import Header from '../../organisms/Header'
import Text from '../../atoms/Text'
import Paragraph from '../../atoms/Paragraph'
import Box from '../../atoms/Box'
import Column from '../../atoms/Box/Column'
import Row from '../../atoms/Box/Row'
import ProjectCoverImage from '../../atoms/ProjectCoverImage'
import { getSliceContent } from '../../../utilitity/prismic'

const ImageBox = styled.div`
  ${tw`w-full h-full relative shadow`}
  max-width: 50%;
  max-height: 400px;
  overflow: hidden;
  &:hover {
    &:after {
      ${props => props.pin}: 0;
      bottom: 0;
    }
  }

  &:after {
    content: '';
    ${tw`absolute w-full h-full bg-primary-200`}
    ${props => props.pin}: -2em;
    bottom: -2em;
    z-index: -1;
    transition: 0.25s;
  }
`

const Mockups = styled.div`
  ${tw`w-full relative flex justify-center m-auto`}
  height: 500px;

  & > div:nth-child(1) {
    width: 15%;
    margin-right: -12.5%;
  }

  & > div:nth-child(2) {
    z-index: 10;
    width: 75%;
  }
`

const Mock = styled.div`
  ${tw`h-full`}
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
      <Column py={32} m="auto" px={[8, 16]}>
        <Box maxWidth={1280} width={1} m="auto" my={8}>
          <Column mb={12} alignItems="center">
            <Text
              fontSize={['3xl', '5xl']}
              fontColor="primary.7"
              fontWeight="black"
              mb={2}
            >
              {title.text}
            </Text>
            <Paragraph fontColor="primary.5" fontSize={['xl', '2xl']}>
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
        <Row width={1} maxWidth={1480} m="auto" my={8} justifyContent="center">
          <Box
            display="flex"
            flexDirection="column"
            bg="primary.1"
            boxShadow="lg"
            px={12}
            py={8}
          >
            <Column my={1}>
              <Text fontFamily="sans" fontSize={['sm']} fontWeight="bold">
                Role
              </Text>
              <Text fontFamily="sans" fontSize={['base']}>
                {info.role}
              </Text>
            </Column>
            <Column my={1}>
              <Text fontFamily="sans" fontSize={['sm']} fontWeight="bold">
                Technologies
              </Text>
              <Text fontFamily="sans" fontSize={['base']}>
                {info.technologies}
              </Text>
            </Column>
            <Column my={1}>
              <Text fontFamily="sans" fontSize={['sm']} fontWeight="bold">
                Client
              </Text>
              <Text fontFamily="sans" fontSize={['base']}>
                {info.client}
              </Text>
            </Column>
          </Box>
          <Box px={16} maxWidth={1000}>
            <Paragraph fontColor="primary.5" fontSize={['xl', '2xl']}>
              {description.text}
              {description.text}
              {description.text}
              {description.text}
              {description.text}
              {description.text}
              {description.text}
            </Paragraph>
          </Box>
        </Row>
        <Box width={1} maxWidth={1480} m="auto" my={8} justifyContent="center">
          {details.map((detail, idx) => {
            const even = idx % 2 === 0
            return (
              <Row
                flexDirection={even ? 'row' : 'row-reverse'}
                my={24}
                justifyContent="center"
                alignItems="center"
                flex={1}
              >
                <ImageBox pin={even ? 'left' : 'right'}>
                  <ProjectCoverImage input={detail.localFile} fit="contain" />
                </ImageBox>
                <Column px={16} flex={1} textAlign={even ? 'left' : 'right'}>
                  <Text fontWeight="black" fontSize="4xl" fontColor="primary.7">
                    {detail.title}
                  </Text>
                  <Text fontFamily="sans" fontSize="xl" fontColor="primary.5">
                    {detail.description}
                  </Text>
                </Column>
              </Row>
            )
          })}
        </Box>
      </Column>
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
