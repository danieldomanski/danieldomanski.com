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
  ${tw`relative overflow-hidden shadow-lg`}
  width: 100%;
  max-width: 40%;
  max-height: 300px;
`

const Mockups = styled.div`
  ${tw`w-full relative flex justify-center m-auto`}
  height: 500px;
  max-width: 1000px;

  & > div:nth-child(1) {
    width: 20%;
    margin-right: -4em;
  }

  & > div:nth-child(2) {
    z-index: 10;
    width: 80%;
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

  return (
    <Layout>
      <Header variant="secondary" />
      <Column pt={32} px={[8, 12, 24]}>
        <Column alignItems="center">
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

        <Box my={16}>
          <Mockups>
            <Mock>
              <ProjectCoverImage input={mockups.mobile} fit="contain" />
            </Mock>
            <Mock>
              <ProjectCoverImage input={mockups.desktop} fit="contain" />
            </Mock>
          </Mockups>
        </Box>
        <Row my={8}>
          <Box display="flex" flexDirection="column" bg="primary.1" size={256}>
            <Text fontSize={['base']}>a</Text>
            <Text fontSize={['base']}>b</Text>
            <Text fontSize={['base']}>c</Text>
          </Box>
          <Box flex={3} justifyContent="space-between" pl={8}>
            <Paragraph fontColor="primary.5" fontSize={['xl', '2xl']}>
              {description.text}
            </Paragraph>
          </Box>
        </Row>
        <Box my={8}>
          {details.map((detail, idx) => (
            <Row
              flexDirection={idx % 2 === 0 ? 'row' : 'row-reverse'}
              my={16}
              justifyContent="space-between"
              alignItems="center"
            >
              <ImageBox>
                <ProjectCoverImage input={detail.localFile} />
              </ImageBox>
              <Column mx={8}>
                <Text fontWeight="black" fontSize="4xl" fontColor="primary.7">
                  {detail.title}
                </Text>
                <Text fontFamily="sans" fontSize="xl" fontColor="primary.5">
                  {detail.description}
                </Text>
              </Column>
            </Row>
          ))}
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
        color
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
