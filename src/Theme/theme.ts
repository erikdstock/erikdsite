import { RosesThemeObject, defaultTheme } from "roses"
import { styles as htmlStyles } from "./html"

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

export const theme: RosesThemeObject = {
  ...defaultTheme,
  styles: htmlStyles,
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
  componentStyles: {
    ...defaultTheme.componentStyles,
    Button: {
      ...defaultTheme.componentStyles.Button,
      variants: {
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
  },
}
