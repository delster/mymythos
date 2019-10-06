import React from 'react'
import styled from 'styled-components'

export default ({ author, categories, collectors, date }) => (
  <PostMeta>
    <AuthorName>{author.name}</AuthorName>
    <AuthorPFP src={author.avatar.url} />
    <PostDate> {formatDate(date)} </PostDate>
    <PostCats> {categories.map(c => `, ${c.name}`)} </PostCats>
  </PostMeta>
)

const formatDate = date => {
  const d = new Date(date)
  return `${d.toLocaleString('default', { month: 'long' })}, ${d.getDate()} ${d.getUTCFullYear()}`
}

const PostMeta = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`
const AuthorName = styled.span`
  text-transform: uppercase;
`
const AuthorPFP = styled.img`
  margin: -3.5em 1em -1em;
  border-radius: 50%;
  border: 6px solid white;
`
const PostDate = styled.span``
const PostCats = styled.span``