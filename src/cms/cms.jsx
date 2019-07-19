import React, { Component } from "react"
import CMS, { init } from "netlify-cms"
import { FileSystemBackend } from "netlify-cms-backend-fs"

import { MdxControl, MdxPreview } from "netlify-cms-widget-mdx"

import { Theme, GlobalStyle } from "../Theme"
import { MDXGlobalComponents } from "../components/UI"
import { Styled } from 'theme-ui'
import css from "@emotion/css";

// netlify-cms-backend-fs setup for development
const isDevelopment = process.env.NODE_ENV === "development"

if (isDevelopment) {
  // Allows for local development overrides in cms.yaml
  window.CMS_ENV = "localhost_development"

  // Attach to the file system
  CMS.registerBackend("file-system", FileSystemBackend)
}

// Custom components need refs for validation and thus must be a class.
// Additionally, after <Theme>, only one child is allowed.
// See https://github.com/netlify/netlify-cms/issues/1346
class ThemedControl extends Component {
  render() {
    return (
      <Theme>
        <MdxControl {...this.props} />
      </Theme>
    )
  }
}

// // The preview window which renders MDX content.
// // Docs: https://www.netlifycms.org/docs/customization/
const PreviewLayout = props => (
  <MdxPreview
    mdx={{
      components: Styled,
      scope: MDXGlobalComponents,
      mdPlugins: [],
    }}
    {...props}
  />
)

// Gatsby imports these fonts automatically so they must be added here
const importFonts = css`
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono|Karma:400,700|Lato:400,700');
  .netlify-cms-widget-mdx-preview {
    padding-top: 30px;
  }
  body {
    padding-top: 24px
  }
`

// // Must inject styles into iframe:
// // https://github.com/netlify/netlify-cms/issues/793#issuecomment-425055513
const ThemedPreview = props => {
  const iframe = document.querySelector("iframe[class*=PreviewPaneFrame]")

  const iframeHeadElem = iframe.contentDocument.head

  return (
    <StyleSheetManager target={iframeHeadElem}>
      <>

        <Global style={importFonts} />
        <Theme>
          <PreviewLayout {...props} />
        </Theme>
      </>
    </StyleSheetManager>
  )
}

CMS.registerWidget("mdx", ThemedControl, ThemedPreview)

// Start the CMS
init()
