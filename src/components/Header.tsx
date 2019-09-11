/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Flex, Heading, Card, Box } from "roses"
import { Link } from "gatsby"
import { themeDig } from "../Theme"

const Header: React.FunctionComponent<{ siteTitle: string }> = ({
  siteTitle,
}) => {
  return (
    <Box
      as="header"
      sx={{
        position: "relative",
        height: ["60px", "100px"],
        py: 1,
      }}
    >
      <Flex
        sx={{
          mx: "auto",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
          bottom: 0,
          left: 0,
          height: "100%",
          width: ["100%", "90%", "80%"],
          maxWidth: themeDig("breakpoints.1"),
          px: [3, 2],
        }}
      >
        <Link to="/" style={{ textDecoration: "none", marginRight: "auto" }}>
          <Card sx={{ bg: "accent", color: "white", p: 2 }}>
            <Heading
              sx={{
                m: 0,
                lineHeight: 1,
                bg: "inherit",
                color: "inherit",
                fontFamily: "sans",
                // color: "gray.7",
              }}
            >
              {siteTitle}
            </Heading>
          </Card>
        </Link>
        <Flex as="nav">
          <Link to={"/about"} style={{ textDecoration: "none" }}>
            <Heading as="h4" sx={{ mb: 2, fontFamily: "sans", fontSize: 2 }}>
              About
            </Heading>
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

// const HeaderWrapper = styled(Flex)<HeightProps>`
//   position: relative;
//   width: 100%;
//   ${height};
// `

export default Header
