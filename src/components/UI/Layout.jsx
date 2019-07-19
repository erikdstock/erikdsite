// import * as ss from "styled-system"
import styled from "@emotion/styled"
import { Box } from "theme-ui"

// export const Box = styled.div`
//   box-sizing: "border-box";
//   min-width: 0;
//   ${ss.space};
//   ${ss.color};
//   ${ss.layout};
//   ${ss.flexbox};
// `

export const Card = styled(Box)`
  border-radius: "4";
  border: "1px solid #f6f6f6";
  box-shadow: "0 2px 4px rgba(0, 0, 0, .125)";
`

// export const Flex = styled(Box)({ display: "flex" })
