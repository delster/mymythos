import React from 'react'
import styled from 'styled-components'

export default ({ handleSubmit, handleInputChange }) => (
  <SearchBarForm onSubmit={handleSubmit}>
    <SearchBarInput
      type="text"
      name="searchQuery"
      onChange={handleInputChange}
      placeholder="Search"
    />
  </SearchBarForm>
)

const SearchBarForm = styled.form`
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
