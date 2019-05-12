import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Text } from "rebass"
import Layout from "../layouts/SiteLayout"
import SEO from "../components/SEO"
import { H3, P } from "../components/UI"

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`technology`, `politics`, `socialism`, `culture`]}
      />

      {posts
        .filter(post => post.node.frontmatter.title.length > 0)
        .filter(post => post.node.frontmatter.collectionName === "blog")
        .map(({ node: post }) => {
          return (
            <Box mt={5} mb={3} key={post.id}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={post.fields.slug}
              >
                <H3 as="h3" color="black" mb={2} fontFamily="sans">
                  {post.frontmatter.title}
                </H3>
                <Text color="gray.1" fontSize={2}>
                  {post.frontmatter.date}
                </Text>
                <P color="gray.2">
                  <i>{post.frontmatter.description}</i>
                </P>
              </Link>
            </Box>
          )
        })}
    </Layout>
  )
}

export default IndexPage

// Because we're interleaving the posts manually in the component function,
// these queries don't *need* sort parameters.
export const pageQuery = graphql`
  query IndexQuery {
    allMdx(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            collectionName
            description
            title
            date(formatString: "MMMM DD, YYYY")
            rawDate: date(formatString: "X")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`
