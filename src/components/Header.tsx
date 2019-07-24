/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Flex, Heading, Card, Box } from "roses"
import { Link } from "gatsby"

const Header: React.FunctionComponent<{ siteTitle: string }> = ({
  siteTitle,
}) => {
  return (
    <Box
      as="header"
      rx={{
        position: "relative",
        height: ["60px", "100px"],
        py: 1,
        // ugly drop shadow
        // "&:after": {
        //   content: '""',
        //   position: "absolute",
        //   width: "100%",
        //   bottom: "1px",
        //   zIndex: -1,
        //   transform: "scale(.9)",
        //   boxShadow: "0px 0px 8px 2px",
        // },
      }}
    >
      <Flex
        rx={{
          mx: "auto",
          justifyContent: "flex-end",
          alignItems: "center",
          position: "relative",
          bottom: 0,
          left: 0,
          height: "100%",
          width: ["100%", "90%", "80%"],
          px: [2, 0],
        }}
      >
        <Link to="/" style={{ textDecoration: "none", marginRight: "auto" }}>
          <Card rx={{ bg: "accent", color: "white", p: 2 }}>
            <Heading
              rx={{
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
            <Heading as="h4" rx={{ mb: 2, fontFamily: "sans", fontSize: 2 }}>
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
