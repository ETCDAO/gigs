module.exports = {
  plugins: [
    "gatsby-transformer-remark",
    { resolve: `gatsby-plugin-emotion` },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/gigs`,
        name: `gigs`,
      },
    },
  ],
};
