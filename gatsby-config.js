module.exports = {
  // Metadata to be passed to React Helmet for SEO
  siteMetadata: {
    title: `MyMythos.org`,
    description: `MyMythos | Meanings & Symbolism`,
    author: `David Elster | GitHub: @delster | Twitter: @delsterdev`,
  },
  plugins: [
    // SEO
    `gatsby-plugin-react-helmet`,
    // Use /src/images as a data source (for images)
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // WordPress as a data source (via WPGraphQL & GraphQL)
    {
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: 'WPGraphQL',
        fieldName: 'wpgraphql',
        url: 'https://mymythos.org/graphql',
        refetchInterval: 60,
      },
    },
    // Styling (CSS-in-JS via `styled-components`)
    `gatsby-plugin-styled-components`,
    // Image Optimization
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // PWA Manifest (for installing as mobile app)
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `MyMythos.org`,
        short_name: `mymythos`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo-white.png`,
      },
    },
    // PWA Offline Features (via web worker, etc)
    `gatsby-plugin-offline`,
  ],
}
