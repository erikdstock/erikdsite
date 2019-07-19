import { MDXProvider } from "@mdx-js/react"
import React from "react"
import { Theme } from "./Theme"
import { MDXGlobalComponents } from "./components/UI"
// import { Styled } from "theme-ui"

export const Boot: React.SFC<{ element: any }> = ({ element }) => {
  return (
    <Theme>
      <>
        <MDXProvider
          components={{
            // ...Styled,
            ...MDXGlobalComponents,
          }}
        >
          {element}
        </MDXProvider>
      </>
    </Theme>
  )
}
