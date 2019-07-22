import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Footer from '../../organisms/Footer'
import Layout from '../Layout'
import Header from '../../organisms/Header'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import Box from '../../atoms/Box'
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
      <Main bg="primary.1" m="auto" px={[4, 8, 16, 24, 32]}>
        <Box maxWidth={686} width={1} m="auto" my={8} py={32}>
          <Box display="flex" pb={4}>
            <Icon icon={icon.text} width={120} />
            <Box display="flex" flexDirection="column" ml={8}>
              <Text fontColor="primary.8" fontWeight="black" fontSize="4xl">
                {title.text}
              </Text>
              <Text fontFamily="sans" fontSize={['sm']}>
                {formatDate(date)}
              </Text>
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
              code_block {
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
