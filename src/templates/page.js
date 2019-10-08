import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@components/layout'
import SEO from '@utils/seo'

export default props => {
  const { page } = props.data.wpgraphql
  const { title, content } = page

  return (
    <Layout>
      <SEO title={title} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query GET_PAGE($id: ID!) {
    wpgraphql {
      page(id: $id) {
        title
        content
        uri
      }
    }
  }
`
