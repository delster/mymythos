import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'
import FooterNav from '@components/Menus/footer'

export default () => (
  <StyledFooter>
    <FooterNav />
    <Colophon>
      © {new Date().getFullYear()} | <Link to="/">MyMythos.org</Link>
    </Colophon>
  </StyledFooter>
)

const StyledFooter = styled.footer.attrs(props => ({ id: 'main-footer' }))`
  border-bottom: 20px solid #1b1b1b;

  & a {
    color: white;
    text-decoration: none;
    transition: .2s opacity ease-in-out;
    &:hover {
      opacity: .8;
    }
  }
`
const Colophon = styled.div`
  color: white;
  background-color: #222;
  font-size: 14px;
  text-align: center;
  padding: 20px;
`
