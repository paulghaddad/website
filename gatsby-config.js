module.exports = {
  siteMetadata: {
    title: `My blog`,
    author: {
      name: `Paul Haddad`,
      summary: `software engineer learning the ins and outs of computer science`,
    },
    description: `A blog to document my journey through Bradfield CSI`,
    siteUrl: `https://paulghaddad.com/`,
    social: {
      twitter: `paulghaddad`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: "paul-blog",
        protocol: "https",
        hostname: "paul-blog.s3-website-us-east-1.amazonaws.com",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        head: true,
        trackingId: `G-H5VCBBMR7M`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Starter Blog`,
        short_name: `GatsbyJS`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-react-helmet`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
