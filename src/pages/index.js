import React from 'react'
import { Link } from 'gatsby'
import Layout from '@components/layout'
import SEO from '@utils/seo'

export default () => (
  <Layout>
    <SEO title="Home" />
    <h1>Nothing to see here (yet). Check out the WIP page templates:</h1>
    <ul>
      <li>
        <Link to="/dev/search">Home/Search</Link>
      </li>
      <li>
        <Link to="/dev/meanings">Meanings</Link>
      </li>
      <li>
        <Link to="/dev/post">Post</Link>
      </li>
      <li>
        <Link to="/dev/profile">Profile</Link>
      </li>
    </ul>
  </Layout>
)
