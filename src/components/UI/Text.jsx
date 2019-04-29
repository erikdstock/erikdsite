import React from "react"
import { Text, Heading } from "rebass"

export const P = props => <Text my={2} fontFamily="serif" {...props} />
export const H1 = props => <Heading mt={2} as="h1" {...props} />
export const H2 = props => <Heading mt={2} as="h2" {...props} />
export const H3 = props => <Heading mt={1} as="h3" {...props} />
export const H4 = props => <Heading mt={1} as="h4" {...props} />
