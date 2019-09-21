import React from 'react'
import styled from 'styled-components'
import {
  FaFacebookF,
  FaGooglePlusG,
  FaTwitter,
  FaLinkedinIn,
  FaPinterestP,
  FaPrint,
  FaEnvelope,
} from 'react-icons/fa'

export default () => (
  <ShareableWrap>
    <StyledShareables>
      <Shareable href="https://www.facebook.com/">
        <FaFacebookF size={24} />
      </Shareable>
      <Shareable href="https://www.facebook.com/">
        <FaGooglePlusG size={24} />
      </Shareable>
      <Shareable href="https://www.facebook.com/">
        <FaTwitter size={24} />
      </Shareable>
      <Shareable href="https://www.facebook.com/">
        <FaLinkedinIn size={24} />
      </Shareable>
      <Shareable href="https://www.facebook.com/">
        <FaPinterestP size={24} />
      </Shareable>
      <Shareable href="https://www.facebook.com/">
        <FaPrint size={24} />
      </Shareable>
      <Shareable href="https://www.facebook.com/">
        <FaEnvelope size={24} />
      </Shareable>
    </StyledShareables>
  </ShareableWrap>
)

const Shareable = props => (
  <StyledShareable>
    <StyledShareableLink href={props.href} target="_blank">
      {props.children}
    </StyledShareableLink>
  </StyledShareable>
)

const ShareableWrap = styled.section`
  margin: 0 auto;
  width: 95%;
  max-width: 1200px;
`
const StyledShareables = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  list-style: none;
`
const StyledShareable = styled.li`
  background-color: #777;
  margin: 0 1em;
  padding: 1em;
`
const StyledShareableLink = styled.a`
  color: white;
`
