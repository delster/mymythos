import React, { useState } from 'react'
import styled from 'styled-components'
import { FaEye } from 'react-icons/fa'
import Layout from '@components/layout'
import SEO from '@utils/seo'

export default () => (
  <Layout>
    <SEO title="Search" />
    <SearchBar />
    <SortFilter />
    <MasonryResults />
  </Layout>
)

const SearchBar = () => (
  <SearchBarWrap>
    <SearchBarInput placeholder="Search" />
  </SearchBarWrap>
)
const SearchBarWrap = styled.div`
  padding: 12px 0;
`
const SearchBarInput = styled.input`
  background-color: #ccc;
  display: block;
  margin: 0 auto;
  padding: 0.5em 2em;
  width: 90%;
  max-width: 1200px;
  border: none;
  outline: none;
`

const SortFilter = () => {
  const sortFilters = ['All Mythos', 'My Mythos', 'Patrons', 'Collections']
  const [active, setActive] = useState(0)

  const handleClick = idx => setActive(idx)

  return (
    <SortFilterWrap>
      <SortFilterList>
        {sortFilters.map((f, i) => (
          <SortFilterListItem
            key={i}
            onClick={() => handleClick(i)}
            className={active === i ? 'active' : ''}>
            {f}
          </SortFilterListItem>
        ))}
      </SortFilterList>
    </SortFilterWrap>
  )
}

const SortFilterWrap = styled.div``
const SortFilterList = styled.ul`
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 90%;
  max-width: 800px;
  list-style: none;
`
const SortFilterListItem = styled.li`
  color: #777;
  margin: 2px;
  padding: 0.5em 2em;
  border-radius: 4px;

  &.active {
    color: black;
    background-color: white;
  }
`

const MasonryResults = styled.section``
const dummyResults = [
  {
    title: 'I find all my answers',
    excerpt: 'Lorem ipsum dolor sit amet..',
    featImgSrc: 'https://via.placeholder.com/400x300',
    catIcon: <FaEye />,
  },
  {
    title: 'A Deck of cards',
    excerpt: 'Lorem ipsum dolor sit amet..',
    featImgSrc: 'https://via.placeholder.com/400x300',
    catIcon: <FaEye />,
  },
  {
    title: 'Women were birds',
    excerpt: 'Lorem ipsum dolor sit amet..',
    featImgSrc: 'https://via.placeholder.com/400x300',
    catIcon: <FaEye />,
  },
  {
    title: 'Secret Garden',
    excerpt: 'Lorem ipsum dolor sit amet..',
    featImgSrc: 'https://via.placeholder.com/400x300',
    catIcon: <FaEye />,
  },
  {
    title: 'I am the Big Bang',
    excerpt: 'Lorem ipsum dolor sit amet..',
    featImgSrc: 'https://via.placeholder.com/400x300',
    catIcon: <FaEye />,
  },
]
