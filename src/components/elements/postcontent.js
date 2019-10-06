import React from 'react'
import styled from 'styled-components'

export default ({ content }) => (
  <StyledPostContent
    dangerouslySetInnerHTML={{ __html: content }}
  />
)

const StyledPostContent = styled.article`
  margin: 3rem auto 6rem;
  width: 95%;
  max-width: 1200px;
`