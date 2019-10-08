import React from 'react'
import { graphql } from 'gatsby'
import styled from 'styled-components'
import Layout from '@components/layout'
import PostTitle from '@elements/posttitle'
import PostContent from '@elements/postcontent'
import PostCategories from '@modules/postcategories'
import PostMeta from '@modules/postmeta'
import Shareables from '@modules/shareables'
import SEO from '@utils/seo'

export default props => {
  const { post } = props.data.wpgraphql
  const { author, categories, featuredImage, acfFields } = post
  const { collectors } = acfFields

  return (
    <Layout>
      <SEO title="Post" />
      <FeaturedImage
        src={
          featuredImage !== null ?
          featuredImage.sourceUrl :
          'https://via.placeholder.com/1920x600.png?text=PLACEHOLDER'
        }
      />
      <PostMeta
        author={author}
        categories={categories.nodes}
        collectors={acfFields.collectors}
        date={post.date}
      />
      <PostTitle title={post.title} />
      <PostContent content={post.content} />
      <PostCategories />
      <Shareables />
    </Layout>
  )
}

const FeaturedImage = styled.img`
  height: auto;
  width: 100%;
  max-height: 600px;
  object-fit: cover;
  object-position: center;
`

export const pageQuery = graphql`
  query GET_POST($id: ID!) {
    wpgraphql {
      post(id: $id) {
        ...PostFields
        author {
          ...AuthorFields
        }
        categories {
          nodes {
            ...CatsFields
          }
        }
        featuredImage {
          ...FeaturedImgFields
        }
        acfFields {
          collectors {
            name
          }
        }
      }
    }
  }
  fragment PostFields on WPGraphQL_Post {
    content
    date
    slug
    title
  }
  fragment AuthorFields on WPGraphQL_User {
    name
    avatar {
      url
    }
  }
  fragment CatsFields on WPGraphQL_Category {
    name
  }
  fragment FeaturedImgFields on WPGraphQL_MediaItem {
    sourceUrl
  }
`
