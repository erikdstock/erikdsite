import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { Box, Flex, Text } from "roses"
import Header from "../components/Header"
import { theme } from "../Theme"

const Layout = ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Flex sx={{ minHeight: "100vh", flexDirection: "column" }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box sx={{ flex: 1 }} as="main">
        <Box
          sx={{
            width: ["100%", "90%", "80%"],
            maxWidth: theme.breakpoints[1],
            mx: "auto",
            px: [3, 2],
          }}
        >
          {children}
        </Box>
      </Box>

      <Box
        as="footer"
        sx={{ width: ["100%", "90%", "80%"], px: [3, 2], py: 1, mx: "auto" }}
      >
        <Text>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </Text>
      </Box>
    </Flex>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
