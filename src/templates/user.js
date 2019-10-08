import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/layout'
import SEO from '@utils/seo'

export default props => {
  const { user } = props.data.wpgraphql

  return (
    <Layout>
      <SEO title={`${user.name}`} />
      <section>
        <h1>{`${user.name}'s Profile`}</h1>
      </section>
      <section>
        <h2>Latest Posts</h2>
        {user.posts.nodes.map(post => (
          <div>{JSON.stringify(post)}</div>
        ))}
      </section>
      <section>
        <h2>HERO PLACEHOLDER</h2>
        <p>[FEATURED IMAGE]</p>
      </section>
      <section>
        <h2>META INFO PLACEHOLDER</h2>
        <p>[4 ARCHETYPES] [CIRCLE IMAGE W/NAME] [4 ARCHETYPES]</p>
        <blockquote>[QUOTE]</blockquote>
      </section>
      <section>
        <h2>RECENT PLACEHOLDER</h2>
        <p>[GRID OF RECENTLY COLLECTED BOARDS]</p>
      </section>
      <section>
        <h2>COLLECTIONS PLACEHOLDER</h2>
        <p>[GRID OF COLLECTED BOARDS W/"ADD" FUNCTIONALITY]</p>
      </section>
      <section>
        <h2>"PATRON OF" PLACEHOLDER</h2>
        <p>[ROW OF COLLECTIONS USER IS PATRON OF]</p>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query user($id: ID!) {
    wpgraphql {
      user(id: $id) {
        name
        avatar {
          url
        }
        posts {
          nodes {
            ...PostEntryFragment
          }
        }
      }
    }
  }
  fragment PostEntryFragment on WPGraphQL_Post {
    id
    title
    uri
    slug
    date
    content: excerpt
    author {
      name
      slug
      avatar(size: 100) {
        url
      }
    }
  }
`
