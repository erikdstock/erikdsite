/*
 * This file needs to be .jsx because the netlify-cms must consume it.
 */

import React from "react"
import { RosesTheme as ThemeProvider } from "roses"
import { Global } from "@emotion/core"
import { theme } from "./theme"

export const themeDig = (path = "") =>
  path
    .split(".")
    .filter(i => i)
    .reduce((acc, current) => acc[current], theme)

export const Theme = props => (
  <ThemeProvider theme={theme}>
    <Global
      styles={{
        "*": {
          boxSizing: "border-box",
          background: theme.colors.background,
          color: theme.colors.text,
        },
        body: {
          margin: 0,
        },
      }}
    />
    {props.children}
  </ThemeProvider>
)

export { theme }
