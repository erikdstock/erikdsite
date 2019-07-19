import React from "react"

import { Box } from "theme-ui"

// FIXME: button styles using box or something else
export const Button = ({ variant = "primary", ...props }) => (
  <Box as="button" variant={props.disabled ? "disabled" : variant} {...props} />
)
