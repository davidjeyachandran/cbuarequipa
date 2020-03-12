module.exports = {
  pathPrefix: `/mini-gatsbyv2-material-kit-react`,
  siteMetadata: {
    title: 'CBU Arequipa',
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-material-ui',
    {
      resolve: 'gatsby-source-prismic-graphql',
      options: {
        repositoryName: 'cbuarequipa',
        pages: [
          {
            // (optional, builds pages dynamically)
            type: 'Blog', // TypeName from prismic
            match: '/blog/:uid', // Pages will be generated under this pattern
            path: '/blog', // Placeholder page for unpublished documents
            component: require.resolve('./src/templates/blog.js'),
          },
        ],
        sharpKeys: [
          /image|photo|picture/, // (default)
          'profilepic',
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
}
