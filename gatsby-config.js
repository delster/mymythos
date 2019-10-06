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
        fieldName: 'wp',
        url: 'https://mymythos.org/graphql',
        refetchInterval: 60,
      },
    },


    // // WordPress as a data source (via WP REST API & Gatsby Resolvers)
    // {
    //   resolve: 'gatsby-source-wordpress',
    //   options: {
    //     baseUrl: 'mymythos.org',
    //     protocol: 'https',
    //     hostingWPCOM: false,
    //     useACF: true,
    //     // auth: {
    //     //   // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
    //     //   // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in wordpress wp-api.
    //     //   // plugin, you can specify user and password to obtain access token and use authenticated requests against wordpress REST API.
    //     //   jwt_user: process.env.JWT_USER,
    //     //   jwt_pass: process.env.JWT_PASSWORD,
    //     //   jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
    //     // },
    //     verboseOutput: true,
    //     perPage: 30,
    //     concurrentRequests: 10,
    //     includedRoutes: [
    //       '**/categories',
    //       '**/posts',
    //       '**/pages',
    //       '**/media',
    //       '**/meaning',
    //       '**/tags',
    //       '**/taxonomies',
    //       '**/users',
    //     ],
    //     keepMediaSizes: false,
    //   },
    // },


    // Styling (CSS-in-JS via `styled-components`)
    `gatsby-plugin-styled-components`,
    // Image Optimization
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // PWA Manifest (for installing as mobile app)
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
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
