/*
 * This file needs to be .jsx because the netlify-cms must consume it.
 */

import React from "react"
import {
  RosesTheme as ThemeProvider,
  RosesThemeObject,
  defaultTheme,
} from "roses"
import { Global } from "@emotion/core"

const gray = {
  "1": "hsl(0,0%,32%)",
  "2": "hsl(0,0%,47%)",
  "3": "hsl(0,0%,58%)",
  "4": "hsl(0,0%,68%)",
  "5": "hsl(0,0%,77%)",
  "6": "hsl(0,0%,85%)",
  "7": "hsl(0,0%,93%)",
}

const colors = {
  // text: gray["1"],
  // background: "white",
  background: gray["1"],
  text: "white",
  // a gray or subdued color for decorative purposes
  muted: gray["6"],
  // primary button and link color
  primary: "#CAA3FF",
  // secondary color - can be used for hover states
  secondary: "#EA6AFF",
  // a contrast color for emphasizing UI
  accent: "#41EBA3",
  alert: "#FF8B73",
  calm: "#6EDFEB",
}

const fontsFamilies = {
  mono: "Fira Mono",
  sans: "'Open Sans', Helvetica, sans-serif",
  serif: "'Libre Baskerville', Times, serif",
}

const fonts = {
  ...fontsFamilies,
  body: fontsFamilies.sans,
  heading: fontsFamilies.sans,
}
const breakpoints = ["40em", "52em", "64em"]
const space = [0, 4, 8, 16, 32, 64, 128, 256, 512]

// console.log(defaultTheme.variants)

export const theme: RosesThemeObject = {
  ...defaultTheme,
  breakpoints,
  space,
  fonts,
  colors,

  fontSizes: [12, 14, 16, 20, 24, 32, 48, 64, 96],
  fontWeights: {
    body: 400,
    heading: 600,
    bold: 600,
  },
  lineHeights: {
    body: 1.5,
    heading: 1.125,
  },
  variants: {
    Button: {
      primary: {
        color: "background",
        bg: "primary",
        // "&:hover": { background: colors.secondary },
      },
      outline: {
        color: "primary",
        bg: "background",
        boxShadow: "inset 0 0 0 2px",
      },

      inverted: {
        bg: "background",
        color: "primary",
        borderColor: "2px solid",
        borderRadius: "primary",
      },
    },
  },
}

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
          background: colors.background,
          color: colors.text,
        },
        body: {
          margin: 0,
        },
      }}
    />
    {props.children}
  </ThemeProvider>
)
