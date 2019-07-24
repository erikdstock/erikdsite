import React from "react"
import styled from "@emotion/styled"
import { Box } from "theme-ui"
import { themeDig } from "../../Theme"

export const BlockQuote = ({ children, ...restProps }) => (
  <Wrapper rx={{ my: 4, p: 2, pl: 3 }} {...restProps}>
    {children}
  </Wrapper>
)

const Wrapper = styled(Box)`
  border-left: 2px solid;
  border-color: ${themeDig("colors.gray.6")};
`
