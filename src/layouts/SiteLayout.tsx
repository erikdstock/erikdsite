import React from "react"
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"
import { Box } from "roses"
import Header from "../components/Header"
import { theme} from '../Theme'


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
    <Box rx={{ minHeight: "100vh" }}>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Box rx={{}} as="main">
        <Box
          rx={{
            maxWidth: theme.breakpoints[2],
            mx: "auto",
            bg: ["primary", "secondary", "accent"],
          }}
        >
          {children}
        </Box>
      </Box>

      <Box as="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Box>
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
