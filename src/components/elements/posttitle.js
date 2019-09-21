import React from 'react'
import styled from 'styled-components'

export default ({title}) => <StyledTitle>{title}</StyledTitle>

const StyledTitle = styled.h1`
  font-size: 60px;
  font-weight: bold;
  text-align: center;
`
