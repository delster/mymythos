import React from 'react'
import { Link } from 'gatsby'
import Layout from '@components/layout'
import SEO from '@utils/seo'

export default () => (
  <Layout>
    <SEO title="Home" />
    <h1>Nothing to see here (yet). Check out the WIP page templates:</h1>
    <ul>
      <LiLink to="/dev/search">Home/Search</LiLink>
      <LiLink to="/dev/meanings">Meanings</LiLink>
      <LiLink to="/dev/post">Post</LiLink>
      <LiLink to="/dev/profile">Profile</LiLink>
    </ul>
  </Layout>
)

const LiLink = props => <li> <Link {...props} /> </li>