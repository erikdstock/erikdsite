/** @jsx jsx */
import styled from "@emotion/styled"
import Img from "gatsby-image"
import { Link, graphql, useStaticQuery } from "gatsby"
import { height, HeightProps } from "styled-system"
import { jsx, Flex, Styled, Container, Header as THeader } from "theme-ui"
import { Card } from "../components/UI/Layout"

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
    <THeader
      sx={{
        height: ["175px", "300px"],
        flexDirection: "column",
        flex: "0 0 auto",
        bg: ["gray.2", "gray.5"],
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
            <Styled.h1
              sx={{ mt: 0, lineHeight: 1, fontFamily: "sans", color: "gray.7" }}
            >
              {siteTitle}
            </Styled.h1>
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
          <Styled.h4
            sx={{ color: "black", mb: 2, fontFamily: "sans", fontSize: 2 }}
          >
            About
          </Styled.h4>
        </Link>
      </Flex>
    </THeader>
  )
}

// const HeaderWrapper = styled(Flex)<HeightProps>`
//   position: relative;
//   width: 100%;
//   ${height};
// `

export default Header
