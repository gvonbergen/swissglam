/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-wordpress`,
      options: {
        url: `https://staging.swissglam.ch/graphql`,
        verbose: true,
        develop: {
          nodeUpdateInterval: 30000,
          hardCacheMediaFiles: true,
        },
        schema: {
          requestConcurrency: 5,
          timeout: 300000,
        },
        production: {
          hardCacheMediaFiles: false,
        },
        debug: {
          graphql: {
            showQueryOnError: false,
            showQueryVarsOnError: true,
            copyQueryOnError: true,
            panicOnError: true,
            onlyReportCriticalErrors: true,
          },
        },
        type: {
          __all: {
            limit: 15000,
          },
          MediaItem: {
            localFile: {
              requestConcurrency: 5,
            },
          },
        },
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Cormorant\:400`, `Source Sans Pro\:300,400`, `Poppins\:400`],
      },
    },
  ],
}
