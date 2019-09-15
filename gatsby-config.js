module.exports = {
  siteMetadata: {
    title: `MyMythos.org`,
    description: `MyMythos | Meanings & Symbolism`,
    author: `David Elster | GitHub: @delster | Twitter: @delsterdev`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
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
    `gatsby-plugin-offline`,
  ],
}
