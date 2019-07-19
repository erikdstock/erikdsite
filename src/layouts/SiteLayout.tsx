import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import { Main, Footer, Layout as TLayout, Container } from "theme-ui"
import Header from "../components/Header"

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
    <TLayout>
      <Header siteTitle={data.site.siteMetadata.title} />
      <Main>
        <Container>{children}</Container>
      </Main>

      <Footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </TLayout>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
