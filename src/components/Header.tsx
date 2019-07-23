/** @jsx jsx */
import styled from "@emotion/styled"
import { jsx } from "@emotion/core"
import { Box, Flex, Heading, Card } from "roses"

import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"

const Header: React.FunctionComponent<{ siteTitle: string }> = ({
  siteTitle,
}) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "lights.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Flex
      as="header"
      sx={{
        height: ["60px", "100px"],
        flexDirection: "column",
        flex: "0 0 auto",
        py: 1,
        px: 2,
      }}
    >
      <Flex
        sx={{
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          bottom: 0,
          left: 0,
          height: "100%",
          width: "100%",
        }}
      >
        {/*
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
        */}

        <Link to="/" style={{ textDecoration: "none" }}>
          <Card sx={{ borderRadius: 2, bg: "black", p: 2 }}>
            <Heading
              rx={{ mt: 0, lineHeight: 1, fontFamily: "sans", color: "gray.7" }}
            >
              {siteTitle}
            </Heading>
          </Card>
        </Link>
      </Flex>
      <Flex
        sx={{
          width: [1, 1, 0.8, 0.6, 0.5],
          flexDirection: "row",
          mx: "auto",
        }}
      >
        <Link to={"/about"} style={{ textDecoration: "none" }}>
          <Heading
            as="h4"
            sx={{ color: "black", mb: 2, fontFamily: "sans", fontSize: 2 }}
          >
            About
          </Heading>
        </Link>
      </Flex>
    </Flex>
  )
}

// const HeaderWrapper = styled(Flex)<HeightProps>`
//   position: relative;
//   width: 100%;
//   ${height};
// `

export default Header
