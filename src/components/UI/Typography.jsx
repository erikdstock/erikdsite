import React from "react"
import { Text, Heading } from "rebass"

export const P = props => (
  <Text
    color="gray.1"
    letterSpacing={".03em"}
    lineHeight="1.5"
    fontFamily="sans"
    {...props}
  />
)
export const Li = props => (
  <Text
    as="li"
    color="gray.1"
    letterSpacing={".03em"}
    lineHeight="1.5"
    fontFamily="sans"
    {...props}
  />
)

export const H1 = props => (
  <Heading
    my={2}
    letterSpacing={"-.02em"}
    color="red"
    fontSize={6}
    as="h1"
    fontFamily="sans"
    {...props}
  />
)

export const H2 = props => (
  <Heading
    my={3}
    letterSpacing={"-.01em"}
    fontSize={5}
    as="h2"
    fontFamily="sans"
    {...props}
  />
)

export const H3 = props => (
  <Heading
    my={3}
    letterSpacing={".02em"}
    fontSize={3}
    as="h3"
    fontFamily="sans"
    {...props}
  />
)

export const H4 = props => (
  <Heading
    my={4}
    letterSpacing={".03em"}
    fontSize={2}
    as="h4"
    fontFamily="sans"
    {...props}
  />
)
