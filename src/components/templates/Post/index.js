import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Footer from '../../organisms/Footer'
import Layout from '../Layout'
import Header from '../../organisms/Header'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import Paragraph from '../../atoms/Paragraph'
import Box from '../../atoms/Box'
import Column from '../../atoms/Box/Column'
import ProjectCoverImage from '../../atoms/ProjectCoverImage'
import { getSliceContent } from '../../../utilitity/prismic'
import PostContent from '../../organisms/PostContent'
import { formatDate } from '../../../utilitity/date'

const Main = styled(Box)`
  ${tw`relative bg-primary-100 `}
  padding-bottom: 600px;

  @media screen and (min-width: 768px) {
    margin-bottom: 500px;
    padding-bottom: 0;
  }
  z-index: 5;
`

const Post = ({ data, pageContext }) => {
  console.log({ postData: data })
  const { title, tags, icon, date } = data.prismicPost.data

  return (
    <Layout>
      <Header variant="secondary" />
      <Main bg="primary.1" py={16} m="auto" px={[4, 8, 16, 24, 32]}>
        <Box maxWidth={1280} width={1} m="auto" my={8}>
          <Box display="flex">
            <Icon icon={icon.text} width={150} />
            <Box display="flex" flexDirection="column">
              <Text fontColor="primary.7" fontWeight="black">
                {title.text}
              </Text>
              <Text fontSize={['base']}>{formatDate(date)}</Text>
            </Box>
          </Box>
          <PostContent data={data.prismicPost.data.body} />
        </Box>
      </Main>
      <Footer />
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query PostByUid($uid: String!, $locale: String!) {
    prismicPost(uid: { eq: $uid }, lang: { eq: $locale }) {
      data {
        date
        title {
          text
        }
        description {
          text
        }
        tags {
          tag {
            slug
          }
        }
        icon {
          text
        }
        body {
          ... on PrismicPostBodyCodeBlock {
            id
            slice_type
            primary {
              block_title {
                raw {
                  text
                }
              }
              code_block {
                text
                html
              }
            }
          }
          ... on PrismicPostBodyImage {
            id
            slice_type
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
            }
          }
          ... on PrismicPostBodyNote {
            id
            slice_type
            primary {
              note_text {
                html
                text
              }
            }
          }
          ... on PrismicPostBodyText {
            id
            slice_type
            primary {
              text {
                html
              }
            }
          }
        }
      }
    }
  }
`
