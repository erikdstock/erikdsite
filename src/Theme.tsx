/*
 * This file needs to be .jsx because the netlify-cms must consume it.
 */

import React from "react"
import { RosesTheme as ThemeProvider, RosesThemeObject, defaultTheme } from "roses"
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

const blue = {
  "1": "#0298D8",
  "2": "#00b5e5",
  "3": "#00d5e3",
  "4": "#048f3d4",
}
const red = {
  "1": "#532e8b",
  "2": "#b41d89",
  "3": "#fb2769",
}

const colors = {
  gray,
  blue,
  red,
}

const fonts = {
  mono: "Fira Mono",
  sans: "'Open Sans', Helvetica, sans-serif",
  serif: "'Libre Baskerville', Times, serif",
}

export const theme: RosesThemeObject = {
  ...defaultTheme,
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],

  fonts: {
    ...fonts,
    body: fonts.sans,
    heading: fonts.sans,
  },

  colors: {
    ...defaultTheme.colors,
  },
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
        bg: "primary",
      },
      inverted: {
        bg: "text",
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
        },
        body: {
          margin: 0,
        },
      }}
    />
    {props.children}
  </ThemeProvider>
)
