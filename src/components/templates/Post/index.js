import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import Footer from '../../organisms/Footer'
import Layout from '../Layout'
import Header from '../../organisms/Header'
import Text from '../../atoms/Text'
import Icon from '../../atoms/Icon'
import Box from '../../atoms/Box'
import BottomBox from '../../organisms/Footer/BottomBox'
import Bio from '../../organisms/Bio'
import PostContent from '../../organisms/PostContent'
import { formatDate } from '../../../utilitity/date'
import { countWordsFromSlices, timeToRead } from '../../../utilitity/timeToRead'
import Tag from '../../atoms/Tag'

const Main = styled(Box)`
  ${tw`relative bg-primary-100 `}
  padding-bottom: 600px;

  @media screen and (min-width: 768px) {
    margin-bottom: 100px;
    padding-bottom: 0;
  }
  z-index: 5;
`

const Dot = styled.span`
  ${tw`text-primary-500`}
`

const Post = ({ data, pageContext }) => {
  const { title, tags, icon, date } = data.prismicPost.data

  const tagsData = tags.map(t => ({
    name: t.tag.document[0].data.tag,
    slug: t.tag.slug,
  }))

  const wordCount = countWordsFromSlices(data.prismicPost.data.body)
  const estimatedReadTime = timeToRead(wordCount)

  console.log({ postData: data, wordCount, estimatedReadTime })
  return (
    <Layout>
      <Header variant="secondary" />
      <Main bg="primary.1" m="auto" px={[4, 8, 16, 24, 32]}>
        <Box maxWidth={686} width={1} m="auto" my={8} py={32}>
          <Box
            width={1}
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pb={4}
            px={4}
          >
            <Box display="flex" flexDirection="column">
              <Text fontColor="primary.8" fontWeight="black" fontSize="4xl">
                {title.text}
              </Text>
              <Box display="flex" flexDirection="column">
                <Box display="flex" alignItems="center" mt={2}>
                  <Text fontFamily="sans" fontSize={['sm']} mr={[3]}>
                    {formatDate(date)}
                  </Text>
                  <Dot>•</Dot>
                  <Text fontFamily="sans" fontSize={['sm']} ml={[3]}>
                    {`${estimatedReadTime} minutes to read`}
                  </Text>
                </Box>
                <Box display="flex" mt={4}>
                  {tagsData.map(tag => (
                    <Tag data={tag} />
                  ))}
                </Box>
              </Box>
            </Box>
            <Icon icon={icon.text} width={120} />
          </Box>
          <PostContent data={data.prismicPost.data.body} />
          <Bio mt={24} />
        </Box>
      </Main>
      <Footer>
        <BottomBox />
      </Footer>
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
            document {
              data {
                tag
              }
            }
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
              code_title {
                text
              }
              code_block {
                html
                text
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
              }
            }
          }
          ... on PrismicPostBodyText {
            id
            slice_type
            primary {
              text {
                html
                text
              }
            }
          }
        }
      }
    }
  }
`
