import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Box, Flex } from "rebass"
import Header from "../components/Header"

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Flex flexDirection="column" style={{ height: "100vh" }}>
        <Header siteTitle={data.site.siteMetadata.title} />
        <Box
          as="main"
          flex="1 0 auto"
          mx="auto"
          width={[1, 1, 0.8, 0.6, 0.5]}
          p="0px 1.0875rem 1.45rem"
        >
          {children}
        </Box>

        <Box as="footer" mt="auto" flex="0 0">
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Box>
      </Flex>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
