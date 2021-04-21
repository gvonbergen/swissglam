/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-material-ui`,
    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     url: `https://www.swissglam.ch/graphql`,
    //     verbose: true,
    //     develop: {
    //       nodeUpdateInterval: 30000,
    //       hardCacheMediaFiles: true,
    //     },
    //     production: {
    //       hardCacheMediaFiles: false,
    //     },
    //     html: {
    //       imageMaxWidth: 1924,
    //       imageQuality: 80,
    //     },
    //     schema: {
    //       timeout: 500000,
    //       requestConcurrency: 500,
    //     },
    //     debug: {
    //       graphql: {
    //         showQueryOnError: false,
    //         showQueryVarsOnError: true,
    //         copyQueryOnError: true,
    //         panicOnError: true,
    //         onlyReportCriticalErrors: true,
    //       },
    //     },
    //     type: {
    //       __all: {
    //         limit: 5000,
    //       },
    //       MediaItem: {
    //         localFile: {
    //           requestConcurrency: 500,
    //         },
    //       },
    //     },
    //   },
    // },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Cormorant\:400`,
          `Source Sans Pro\:300,400`,
          `Poppins\:400`,
        ],
      },
    },
  ],
}
