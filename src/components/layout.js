import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "normalize.css"
import "typeface-open-sans"
import Header from "./partials/header"
import Footer from "./partials/footer"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <GlobalStyle />
      <FlexWrap>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </FlexWrap>
    </>
  )
}

const FlexWrap = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;

  & main {
    flex: 1 1 100%;
  }
`

const GlobalStyle = createGlobalStyle`
  html,body {
    font-family: "Open Sans", "Helvetica Neue", Verdana, Helvetica, Arial, sans-serif;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
