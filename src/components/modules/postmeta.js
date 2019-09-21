import React from 'react'
import styled from 'styled-components'

export default () => (
  <PostMeta>
    <AuthorName>Evening Star</AuthorName>
    <AuthorPFP />
    <PostDate>{`${new Date()}`}</PostDate>
    <span>, Personal Myths</span>
  </PostMeta>
)

const PostMeta = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`
const AuthorName = styled.span`
  text-transform: uppercase;
`
const AuthorPFP = styled.img`
  margin-top: -50%;
`
const PostDate = styled.span``