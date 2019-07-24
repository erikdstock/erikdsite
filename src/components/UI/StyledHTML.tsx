// These files must stay js/x because they are also accessed by netlify-cms

import styled from "@emotion/styled"
import css from "@styled-system/css"
import { theme } from "../../Theme"


const { htmlStyles } = theme
console.warn(htmlStyles, "**********")

export const StyledHTML: { [k: string]: React.ComponentClass<any> } = Object.keys(
  htmlStyles
).reduce((prev, current) => {
  return {
    ...prev,
    [current]: styled(current as any)(css(htmlStyles[current]) as any),
  }
}, {})
