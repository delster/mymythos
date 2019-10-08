import React, { Component } from 'react'
import { graphql, navigate } from 'gatsby'
import Layout from '@components/layout'
import SEO from '@utils/seo'

class IndexPage extends Component {
  renderPreviousLink = () => {
    const {
      pageContext: { pageNumber },
    } = this.props

    let previousLink = null

    if (!pageNumber) {
      return null
    } else if (1 === pageNumber) {
      previousLink = `/`
    } else if (1 < pageNumber) {
      previousLink = `/page/${pageNumber - 1}`
    }

    return (
      <button type="primary" onClick={() => navigate(previousLink)}>
        Previous Posts
      </button>
    )
  }

  renderNextLink = () => {
    const {
      pageContext: { hasNextPage, pageNumber },
    } = this.props

    if (hasNextPage) {
      return (
        <button
          type="primary"
          onClick={() => navigate(`/page/${pageNumber + 1}`)}>
          Next Posts
        </button>
      )
    } else {
      return null
    }
  }

  render() {
    const {
      data,
      pageContext: { pageNumber },
    } = this.props
    const blogPageNumber = pageNumber ? ` Page ${pageNumber}` : ``
    return (
      <Layout>
        <SEO title={`Blog${blogPageNumber}`} />
        <div>
          {data &&
            data.wpgraphql &&
            data.wpgraphql.posts.nodes.map(post => (
              <div key={post.id}>
                {JSON.stringify(post)}
              </div>
            ))}
        </div>
        <div>{this.renderPreviousLink()}</div>
        <div>{this.renderNextLink()}</div>
      </Layout>
    )
  }
}

export default IndexPage

export const query = graphql`
  query GET_POSTS($ids: [ID]) {
    wpgraphql {
      posts(where: { in: $ids }) {
        nodes {
          ...PostEntryFragment
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
