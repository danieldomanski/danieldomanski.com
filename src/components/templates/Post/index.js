import React from 'react'
import { graphql } from 'gatsby'
import { Link } from '../../atoms/Link'
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

const BreadcrumbItem = ({ to, title, description, textAlign }) => (
  <Link width={1} to={`/blog/${to}`} maxWidth={300}>
    <Box display="flex" flexDirection="column" textAlign={textAlign} my={4}>
      <Text
        fontColor="primary.8"
        fontWeight="black"
        mb={2}
        style={{ textTransform: 'uppercase' }}
      >
        {title}
      </Text>
      <Text fontWeight="medium">{description}</Text>
    </Box>
  </Link>
)

const Post = ({ data, pageContext }) => {
  if (typeof window !== `undefined`) {
    usePageContent(data)
    const { title, tags, date } = data.prismicPost.data
    const { previous, next } = pageContext.data.siblings

    const tagsData = tags.map(t => ({
      name: t.tag.document[0].data.tag,
      slug: t.tag.slug,
    }))

    const wordCount = countWordsFromSlices(data.prismicPost.data.body)
    const estimatedReadTime = timeToRead(wordCount)

    return (
      <FadeIn>
        <Box as="main" width={1} m="auto" px={[6, 8, 16, 24, 32]}>
          <Box maxWidth={686} width={1} m="auto">
            <Box
              as="header"
              width={1}
              display="flex"
              flexDirection={['column', 'column', 'row']}
              px={2}
              py={8}
            >
              <Box display="flex" flexDirection="column" mb={[6, 8, 12]}>
                <Text
                  fontColor="primary.10"
                  fontWeight="black"
                  fontSize={['4xl', '4xl', '5xl']}
                  lineHeight="none"
                  mt={[8, 12, 12, 12, 16]}
                >
                  {title.text}
                </Text>
                <Box display="flex" flexDirection="column" mt={[6, 4]} mb={[4]}>
                  <Box display="flex" alignItems="center">
                    <Text fontColor="primary.6">{formatDate(date)}</Text>
                    <Text as="span" fontColor="primary.6" mx={2}>
                      •
                    </Text>
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
              my={[8, 12]}
            >
              <BreadcrumbItem
                to={previous.node.uid}
                title="Poprzedni"
                description={previous.node.data.title.text}
                textAlign={['left', 'left', 'left']}
              />
              <BreadcrumbItem
                to={next.node.uid}
                title="Następny"
                description={next.node.data.title.text}
                textAlign={['left', 'left', 'right']}
              />
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

  return null
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
