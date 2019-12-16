import React from "react"
import { Link, graphql } from "gatsby"
import { Box } from "roses"
import Layout from "../layouts/SiteLayout"
import SEO from "../components/SEO"
import { Styled } from "../components/UI"

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
            <Box sx={{ mt: 5, mb: 3 }} key={post.id}>
              <Link
                style={{ textDecoration: "none", color: "inherit" }}
                to={post.fields.slug}
              >
                <Styled.h3>{post.frontmatter.title}</Styled.h3>
                <Styled.p>{post.frontmatter.date}</Styled.p>
                <Styled.p>
                  <i>{post.frontmatter.description}</i>
                </Styled.p>
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
