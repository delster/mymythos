import React from 'react'
import styled from 'styled-components'

export default () => (
  <StyledFooter> © {new Date().getFullYear()} | MyMythos.org </StyledFooter>
)

const StyledFooter = styled.footer.attrs(props => ({ id: 'main-footer' }))`
  color: white;
  background-color: #222;
  font-size: 14px;
  text-align: center;
  padding: 20px;
  /* Placeholders similar to current live footer */
  border-top: 20px solid #333;
  border-bottom: 42px solid #1b1b1b;
`
