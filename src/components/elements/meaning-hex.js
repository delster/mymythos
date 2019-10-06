import React from 'react'
import styled from 'styled-components'

export default ({ title, img }) => (
  <MeaningHex href="#">
    <MeaningHexImg src={img} />
    <MeaningHexTitle>{title}</MeaningHexTitle>
  </MeaningHex>
)

const MeaningHex = styled.a`
  color: black;
  font-size: 18px;
  text-align: center;
  text-decoration: none;
`
const MeaningHexImg = styled.img`
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
`
const MeaningHexTitle = styled.h3`
  margin-top: 0;
`
