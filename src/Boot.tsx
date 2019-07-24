import { MDXProvider } from "@mdx-js/react"
import React from "react"
import { Theme } from "./Theme"
import { MDXGlobalComponents } from "./components/UI"

export const Boot: React.SFC<{ element: any }> = ({ element }) => {
  return (
    <Theme>
      <>
        <MDXProvider
          components={{
            ...MDXGlobalComponents,
          }}
        >
          {element}
        </MDXProvider>
      </>
    </Theme>
  )
}
