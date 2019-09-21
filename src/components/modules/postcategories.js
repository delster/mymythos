import React from 'react'
import styled from 'styled-components'

export default () => (
  <StyledCats>
    <CategoryList>
      {CATS.map(cat => (
        <CategoryListItem title={cat.title} img={cat.imgSrc} />
      ))}
    </CategoryList>
  </StyledCats>
)

const CategoryListItem = ({ title, img }) => (
  <StyledCat>
    <CatFeatImg src={img} />
    <CatTitle>{title}</CatTitle>
  </StyledCat>
)

const StyledCats = styled.section``
const CategoryList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  width: 95%;
  max-width: 1200px;
  padding-left: 0;
  list-style: none;
`
const StyledCat = styled.li``
const CatFeatImg = styled.img``
const CatTitle = styled.h3`
  text-align: center;
`

const CATS = [
  {
    title: 'Wolf',
    imgSrc: 'https://via.placeholder.com/160',
  },
  {
    title: 'Paradox',
    imgSrc: 'https://via.placeholder.com/160',
  },
  {
    title: 'Spirit Animal',
    imgSrc: 'https://via.placeholder.com/160',
  },
  {
    title: 'Hunger',
    imgSrc: 'https://via.placeholder.com/160',
  },
]
