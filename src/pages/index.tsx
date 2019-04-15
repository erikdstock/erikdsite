import React from "react"
import { Link, graphql } from "gatsby"
import { Box, Text } from "rebass"
import Layout from "../layouts/SiteLayout"
import SEO from "../components/SEO"

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMdx
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[`technology`, `politics`, `socialism`, `culture`]}
      />
      <h1>Hi people</h1>
      <p>This is my website</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Link style={{}} to={"/about"}>
          <Text color="black" mb={2} fontFamily="sans" fontSize={2}>
            About
          </Text>
        </Link>
      </div>
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
                <Text as="h3" color="black" mb={2} fontFamily="sans">
                  {post.frontmatter.title}
                </Text>
                <Text color="gray.1" fontSize={2}>
                  {post.frontmatter.date}
                </Text>
                <Text color="gray.2">
                  <i>{post.excerpt}</i>
                </Text>
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
