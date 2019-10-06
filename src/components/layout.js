import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'

import 'normalize.css'
import 'typeface-crimson-text'
import 'typeface-open-sans'

import Header from '@partials/header'
import Footer from '@partials/footer'

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

const ffSans = `"Open Sans", "Helvetica Neue", Verdana, Helvetica, Arial, sans-serif`
const ffSerif = `"Crimson Text", TimesNewRoman, "Times New Roman", Times, Baskerville, Georgia, serif`

const GlobalStyle = createGlobalStyle`
  * { font-family: ${ffSans} }

  h1,h2,h3,h4,h5,h6,
  .h1,.h2,.h3,.h4,.h5,.h6 { font-family: ${ffSerif} }
`

const FlexWrap = styled.div`
  display: flex;
  flex-flow: column;
  min-height: 100vh;

  & main {
    flex: 1 1 100%;
  }
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
