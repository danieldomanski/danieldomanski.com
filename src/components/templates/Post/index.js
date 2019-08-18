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
import { formatInvolvment, formatHeader } from '../../../utilitity/format'

const Dot = styled.span`
  ${tw`text-primary-600 mx-2`}
`

const Post = ({ data, pageContext, location }) => {
  const { title, tags, icon, date } = data.prismicPost.data
  const { previous, next } = pageContext.data.siblings

  const tagsData = tags.map(t => ({
    name: t.tag.document[0].data.tag,
    slug: t.tag.slug,
  }))

  const wordCount = countWordsFromSlices(data.prismicPost.data.body)
  const estimatedReadTime = timeToRead(wordCount)

  const headerContent = formatHeader(data.header.edges[0])

  return (
    <Layout locale={pageContext.locale}>
      <Header variant="primary" content={headerContent} />
      <Box as="main" width={1} m="auto" px={[4, 8, 16, 24, 32]} pt={[8, 8]}>
        <Box maxWidth={760} width={1} m="auto" py={[0, 0, 8]}>
          <Box
            as="header"
            width={1}
            display="flex"
            justifyContent="center"
            flexDirection={['column', 'column', 'row']}
            alignItems={['center', 'center', 'center']}
            px={4}
            mb={8}
          >
            <Box
              display="flex"
              flexDirection="column"
              textAlign="center"
              mb={8}
            >
              <Text
                fontFamily="sans"
                fontColor="primary.10"
                fontWeight="black"
                fontSize={['2xl', '3xl', '5xl']}
                lineHeight="tight"
                my={4}
              >
                {title.text}
              </Text>
              <Box display="flex" flexDirection="column">
                <Box
                  display="flex"
                  justifyContent={['center', 'center']}
                  alignItems="center"
                >
                  <Text fontColor="primary.6">{formatDate(date)}</Text>
                  <Dot>•</Dot>
                  <Text fontColor="primary.6">
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
