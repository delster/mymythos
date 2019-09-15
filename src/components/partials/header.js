import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Logo from '@elements/logo'

export default () => (
  <StyledHeader id="main-header">
    <LogoWrap>
      <Link to="/">
        <Logo />
      </Link>
    </LogoWrap>
  </StyledHeader>
)

const StyledHeader = styled.header.attrs(props => ({ id: "main-header" }))`
  background-color: #242424;
  padding: 1.5rem;
`
const LogoWrap = styled.div.attrs(props => ({id: "site-logo"}))`
  margin: 0 auto;
  max-width: 400px;
  width: 95%;
`