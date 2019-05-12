import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import { height, HeightProps } from "styled-system"
import { Flex, Card } from "rebass"
import Img from "gatsby-image"
import { H1 } from "./UI"

const Header: React.FunctionComponent<{ siteTitle: string }> = ({
  siteTitle,
}) => (
  <HeaderWrapper
    as="header"
    height={[175, 300] as any}
    width={1}
    flexDirection="column"
    flex="0 0 auto"
    justifyContent="center"
    alignItems="center"
  >
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "lights.jpg" }) {
            childImageSharp {
              fluid(maxWidth: 1200) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Img
          // absolute style has to go on the gatsby-image element, not in the styled-component
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            height: "100%",
            width: "100%",
            zIndex: -1,
          }}
          fluid={data.placeholderImage.childImageSharp.fluid}
        />
      )}
    />
    <Link to="/" style={{ textDecoration: "none" }}>
      <Card borderRadius={2} bg="black" p={2}>
        <H1 mt={0} lineHeight={1} fontFamily="sans" color="gray.7">
          {siteTitle}
        </H1>
      </Card>
    </Link>
  </HeaderWrapper>
)

const HeaderWrapper = styled(Flex)<HeightProps>`
  position: relative;
  ${height};
`

export default Header
