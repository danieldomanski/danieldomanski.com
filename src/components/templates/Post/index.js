import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link } from '../../atoms/Link'
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

const Dot = styled.span`
  ${tw`text-primary-500`}
`

const Post = ({ data, pageContext }) => {
  const { title, tags, icon, date } = data.prismicPost.data
  const { previous, next } = pageContext.data.siblings

  const tagsData = tags.map(t => ({
    name: t.tag.document[0].data.tag,
    slug: t.tag.slug,
  }))

  const wordCount = countWordsFromSlices(data.prismicPost.data.body)
  const estimatedReadTime = timeToRead(wordCount)

  return (
    <Layout>
      <Header variant="secondary" />
      <Box as="main" width={1} m="auto" px={[4, 8, 16, 24, 32]}>
        <Box maxWidth={686} width={1} m="auto" py={[0, 0, 8]}>
          <Box
            as="header"
            width={1}
            display="flex"
            flexDirection={['column', 'column', 'row']}
            alignItems={['center', 'center', 'center']}
            px={4}
            my={8}
          >
            <Box my={4}>
              <Icon icon={icon.text} width={[100, 120]} mr={[0, 0, 8]} />
            </Box>
            <Box display="flex" flexDirection="column">
              <Text
                fontColor="primary.8"
                fontWeight="black"
                fontSize={['2xl', '3xl', '4xl']}
              >
                {title.text}
              </Text>
              <Box display="flex" flexDirection="column">
                <Box
                  display="flex"
                  justifyContent={['center', 'center', 'flex-start']}
                  alignItems="center"
                  mt={2}
                >
                  <Text fontFamily="sans" fontSize={['sm']} mr={[3]}>
                    {formatDate(date)}
                  </Text>
                  <Dot>•</Dot>
                  <Text fontFamily="sans" fontSize={['sm']} ml={[3]}>
                    {`${estimatedReadTime} minutes to read`}
                  </Text>
                </Box>
              </Box>
            </Box>
          </Box>
          <PostContent data={data.prismicPost.data.body} />
          <Box
            display="flex"
            flexDirection="column"
            alignItems="flex-start"
            py={8}
            mt={16}
            borderTop="1px solid rgba(0,0,0,0.1)"
            borderBottom="1px solid rgba(0,0,0,0.1)"
          >
            <Text
              fontFamily="sans"
              fontWeight="bold"
              fontColor="primary.7"
              fontSize="lg"
              mb={4}
            >
              Tags
            </Text>
            <Box>
              {tagsData.map(tag => (
                <Tag data={tag} />
              ))}
            </Box>
          </Box>
          <Box
            width={1}
            display="flex"
            flexDirection={['column', 'column', 'row']}
            flexWrap="wrap"
            justifyContent={['flex-start', 'flex-start', 'space-between']}
            mt={12}
          >
            <Link to={`/blog/${previous.node.uid}`} maxWidth={300}>
              <Box
                display="flex"
                flexDirection="column"
                pb={[4, 4, 0]}
                mr={[0, 0, 4]}
              >
                <Text
                  fontColor="accent.8"
                  fontFamily="sans"
                  fontWeight="bold"
                  fontSize={['base', 'base', 'base']}
                  mb={1}
                >
                  Previous
                </Text>
                <Text fontColor="accent.6" fontFamily="sans" fontSize={['lg']}>
                  {previous.node.data.title.text}
                </Text>
              </Box>
            </Link>
            <Link width={1} to={`/blog/${next.node.uid}`} maxWidth={300}>
              <Box
                display="flex"
                flexDirection="column"
                textAlign={['left', 'left', 'right']}
              >
                <Text
                  fontColor="accent.8"
                  fontFamily="sans"
                  fontWeight="bold"
                  fontSize={['base']}
                  mb={1}
                >
                  Next
                </Text>
                <Text fontColor="accent.6" fontFamily="sans" fontSize={['lg']}>
                  {next.node.data.title.text}
                </Text>
              </Box>
            </Link>
          </Box>
          <Bio mt={12} />
        </Box>
      </Box>
      <Box as="footer" width={1} maxWidth={1200} m="auto" px={8} mt={16}>
        <BottomBox variant="secondary" />
      </Box>
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
