import React from 'react'
import Layout from '@components/layout'
import SEO from '@utils/seo'

export default () => (
  <Layout>
    <SEO title="User Profile" />
    <h1>TODO: User Profile Template</h1>
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
