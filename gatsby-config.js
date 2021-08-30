const dotenv = require('dotenv');

dotenv.config();

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
        spaceId: process.env.SPACEID,
        accessToken: process.env.ACCESSTOKEN,
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,

  ],
}