import React from 'react'
import styled from 'styled-components'
import { graphql } from 'gatsby'
import { Link } from '../../atoms/Link'
import Layout from '../Layout'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import BottomBox from '../../organisms/Footer/BottomBox'
import Bio from '../../organisms/Bio'
import PostContent from '../../organisms/PostContent'
import { formatDate } from '../../../utilitity/date'
import { countWordsFromSlices, timeToRead } from '../../../utilitity/timeToRead'
import Tag from '../../atoms/Tag'
import { usePageContent } from '../../../context/ContentContext'
import FadeIn from '../../molecules/AnimatedBox/FadeIn'

const Dot = styled.span`
  ${tw`text-primary-600 mx-2`}
`

const Post = ({ data, pageContext, location }) => {
  const [content] = usePageContent(data)
  const { title, tags, icon, date } = data.prismicPost.data
  const { previous, next } = pageContext.data.siblings

  const tagsData = tags.map(t => ({
    name: t.tag.document[0].data.tag,
    slug: t.tag.slug,
  }))

  const wordCount = countWordsFromSlices(data.prismicPost.data.body)
  const estimatedReadTime = timeToRead(wordCount)

  return (
    <FadeIn>
      <Box as="main" width={1} m="auto" px={[4, 8, 16, 24, 32]}>
        <Box maxWidth={686} width={1} m="auto" py={[0, 0, 8]}>
          <Box
            as="header"
            width={1}
            display="flex"
            flexDirection={['column', 'column', 'row']}
            alignItems={['center', 'center', 'center']}
            px={2}
            mb={4}
          >
            <Box display="flex" flexDirection="column" mb={10}>
              <Text
                fontFamily="sans"
                fontColor="primary.10"
                fontWeight="black"
                fontSize={['4xl', '4xl', '5xl']}
                lineHeight="none"
              >
                {title.text}
              </Text>
              <Box display="flex" flexDirection="column" mt={[6, 4]} mb={[4]}>
                <Box display="flex" alignItems="center">
                  <Text fontColor="primary.6">{formatDate(date)}</Text>
                  <Dot>•</Dot>
                  <Text fontColor="primary.6">
                    {`${estimatedReadTime} minutes to read`}
                  </Text>
                </Box>
              </Box>
              <Box>
                {tagsData.map(tag => (
                  <Tag data={tag} />
                ))}
              </Box>
            </Box>
          </Box>
          <PostContent data={data.prismicPost.data.body} />
          <Box
            width={1}
            display="flex"
            flexDirection={['column', 'column', 'row']}
            flexWrap="wrap"
            justifyContent={['flex-start', 'flex-start', 'space-between']}
            borderTop="1px solid rgba(0,0,0,0.1)"
            pt={[8, 12]}
            mt={[12, 16]}
          >
            <Link to={`/blog/${previous.node.uid}`} maxWidth={300}>
              <Box
                display="flex"
                flexDirection="column"
                pb={[8, 4, 0]}
                mr={[0, 0, 4]}
              >
                <Text
                  fontColor="primary.11"
                  fontWeight="black"
                  mb={2}
                  style={{ textTransform: 'uppercase' }}
                >
                  Previous
                </Text>
                <Text fontWeight="medium" fontFamily="serif">
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
                  fontColor="primary.8"
                  fontWeight="black"
                  mb={2}
                  style={{ textTransform: 'uppercase' }}
                >
                  Next
                </Text>
                <Text fontWeight="medium" fontFamily="serif">
                  {next.node.data.title.text}
                </Text>
              </Box>
            </Link>
          </Box>
          <Bio mt={12} mb={24} />
        </Box>
      </Box>
      <Box as="footer" width={1} m="auto">
        <BottomBox variant="secondary" />
      </Box>
    </FadeIn>
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
