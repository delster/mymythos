import React from 'react'
import styled from 'styled-components'
import Layout from '@components/layout'
import PostTitle from '@elements/posttitle'
import PostContent from '@elements/postcontent'
import PostCategories from '@modules/postcategories'
import PostMeta from '@modules/postmeta'
import Shareables from '@modules/shareables'
import SEO from '@utils/seo'

export default () => (
  <Layout>
    <SEO title="Post" />
    <FeaturedImage src="https://via.placeholder.com/1920x400" />
    <PostMeta />
    <PostTitle title="Harkonnen" />
    <PostContent />
    <PostCategories />
    <Shareables />
  </Layout>
)

const FeaturedImage = styled.img`
  height: auto;
  width: 100%;
`
