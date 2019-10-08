import React from 'react'
import { Link } from 'gatsby'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

export default ({ searchQuery }) => (
  <Query query={POSTS_SEARCH_QUERY} variables={{ searchQuery }}>
    {({ loading, error, data }) => {
      if (loading) return <p>Searching...</p>
      if (error) return <p>Error!</p>
      if (!data.posts.edges.length) return <p>No matching posts found.</p>

      return (
        <MasonryResults>
          {data.posts.edges.map(post => {
            const p = post.node

            return (
              <div key={p.id}>
                <h3>{p.title}</h3>
                <div dangerouslySetInnerHTML={{ __html: p.excerpt }} />
                <Link to={`/p/${p.uri}`}> See it live! </Link>
              </div>
            )
          })}
        </MasonryResults>
      )
    }}
  </Query>
)

const MasonryResults = styled.section`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: repeat(4, 1fr);
  grid-template-areas: '. . . .';
`

const POSTS_SEARCH_QUERY = gql`
  query POSTS_SEARCH_QUERY($searchQuery: String!) {
    posts(where: { search: $searchQuery }) {
      edges {
        node {
          ...SearchPostFields
          categories {
            edges {
              node {
                ...SearchCatFields
              }
            }
          }
          featuredImage {
            ...SearchFeaturedImgFields
          }
        }
      }
    }
  }
  fragment SearchPostFields on Post {
    excerpt
    id
    title
    uri
  }
  fragment SearchCatFields on Category {
    name
  }
  fragment SearchFeaturedImgFields on MediaItem {
    sourceUrl
  }
`
