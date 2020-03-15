module.exports = {
  siteMetadata: {
    title: 'Darryl Snow',
    description: 'Darryl is a senior product manager at Pivotal Labs, Singapore.',
    author: '@dazsnow',
    url: 'https://darrylsnow.com',
    email: 'dazsnow@gmail.com',
    telephone: '+65 9164 8926',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#01a78f',
        theme_color: '#01a78f',
        display: 'minimal-ui',
        icon: 'src/images/apple-touch-icon.png', // This path is relative to the root of the site (e.g. src/images/icon.png).
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /icons/,
        },
      },
    },
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: [process.env.GOOGLE_TRACKING_ID],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
          cookie_update: false,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
  ],
}
