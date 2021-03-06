import React from 'react'
import { graphql, Link } from 'gatsby'
import Text from '../../atoms/Text'
import Box from '../../atoms/Box'
import Footer from '../../organisms/Footer'
import Bio from '../../molecules/Bio'
import PostContent from '../../molecules/PostContent'
import Tag from '../../atoms/Tag'
import FadeIn from '../../molecules/AnimatedBox/FadeIn'
import { formatDate } from '../../../utils/date'
import { countWordsFromSlices, timeToRead } from '../../../utils/timeToRead'
import { usePageContent } from '../../../context/ContentContext'

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
    const { last_publication_date } = data.prismicPost
    const { title, tags } = data.prismicPost.data
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
              justifyContent="center"
              textAlign={['left', 'left', 'center']}
              flexDirection={['column', 'column', 'row']}
              mt={[8, 8, 12]}
              mb={[6, 8, 8, 8, 8]}
            >
              <Box display="flex" flexDirection="column" mb={[6, 8, 8]}>
                <Text
                  fontColor="primary.10"
                  fontWeight="black"
                  fontSize={['3xl', '4xl']}
                  lineHeight="tight"
                  letterSpacing="-0.05em"
                >
                  {title.text}
                </Text>
                <Box
                  display="flex"
                  justifyContent={['flex-start', 'flex-start', 'center']}
                  mt={4}
                  mb={4}
                >
                  <Box display="flex" alignItems="center">
                    <Text fontColor="primary.6">
                      {formatDate(last_publication_date)}
                    </Text>
                    <Text as="span" fontColor="primary.6" mx={2}>
                      •
                    </Text>
                    <Text fontColor="primary.6">
                      {`${estimatedReadTime} minuty czytania`}
                    </Text>
                  </Box>
                </Box>
                <Box>
                  {tagsData.map(tag => (
                    <Tag data={tag} key={tag.slug} />
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
              pt={[8, 12]}
              my={[8, 12]}
            >
              {previous ? (
                <BreadcrumbItem
                  to={previous.node.uid}
                  title="Poprzedni"
                  description={previous.node.data.title.text}
                  textAlign={['left', 'left', 'left']}
                />
              ) : null}
              {next ? (
                <BreadcrumbItem
                  to={next.node.uid}
                  title="Następny"
                  description={next.node.data.title.text}
                  textAlign={['left', 'left', 'right']}
                />
              ) : null}
            </Box>
            <Bio mt={12} mb={24} />
          </Box>
        </Box>
        <Box as="footer" width={1} m="auto">
          <Footer variant="secondary" />
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
      last_publication_date
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
    footer: allPrismicFooter(filter: { lang: { eq: $locale } }) {
      edges {
        node {
          data {
            code_availability {
              text
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
