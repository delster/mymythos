import React from 'react'
import styled from 'styled-components'
import { Link, useStaticQuery, graphql } from 'gatsby'

export default () => {
  const { wpgraphql } = useStaticQuery(MENU_QUERY)
  const { menuItems } = wpgraphql.menus.edges[0].node

  return (
    <FooterMenu>
      <FooterNav>
        <FooterUL>
          {menuItems.nodes.map(item => (
            <FooterLI key={item.id}>
              <Link to={item.url}>{item.label}</Link>
            </FooterLI>
          ))}
        </FooterUL>
      </FooterNav>
    </FooterMenu>
  )
}

const FooterMenu = styled.div`
  background-color: #222;
  padding: 1rem;
`
const FooterNav = styled.nav``
const FooterUL = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  list-style: none;
`
const FooterLI = styled.li`
  margin: 0 .5em;
`

const MENU_QUERY = graphql`
  query GET_MENU_ITEMS {
    wpgraphql {
      menus(where: { slug: "dev" }) {
        edges {
          node {
            menuItems {
              nodes {
                ...MenuFields
              }
            }
          }
        }
      }
    }
  }
  fragment MenuFields on WPGraphQL_MenuItem {
    id
    label
    url
  }
`
