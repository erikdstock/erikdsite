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
    <Flex rx={{ minHeight: "100vh", flexDirection: "column" }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box rx={{ flex: 1 }} as="main">
        <Box
          rx={{
            width: ["100%", "90%", "80%"],
            maxWidth: theme.breakpoints[2],
            mx: "auto",
          }}
        >
          {children}
        </Box>
      </Box>

      <Box
        as="footer"
        rx={{ width: ["100%", "90%", "80%"], px: [2, 0], py: 1, mx: "auto" }}
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
