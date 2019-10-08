import React, { useState } from 'react'
import styled from 'styled-components'
import Layout from '@components/layout'
import SEO from '@utils/seo'

import SearchBarForm from '@components/search/form'
import SearchResults from '@components/search/results'

export default () => {
  const [searchQuery, setSearchQuery] = useState('')

  const handleSearchQueryUpdate = e => setSearchQuery(e.target.value)

  return (
    <Layout>
      <SEO title="Search" />
      <SearchBarForm
        handleSubmit={e => e.preventDefault()}
        handleInputChange={handleSearchQueryUpdate}
      />
      <SortFilter />
      {searchQuery && <SearchResults searchQuery={searchQuery} />}
    </Layout>
  )
}

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
