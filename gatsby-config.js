// const dotenv = require('dotenv');

// dotenv.config();

module.exports = {
  /* Your site config here */
  siteMetadata: {
    title: `JAMStack Blog Site`,
    description: `JAMStack Blog site to show experties in area of Gatsby, JAMStack and serverless`,
    author: `@wajahataz`,
  },
  plugins: [
    `gatsby-transformer-remark`,

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "374pb3ddawli",
        accessToken: "aM_OFcQCT7iR2P9M4UFbd4lR00gjLzpWrRQoLt_t96U",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
};
