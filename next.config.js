const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  images: {
    formats: ['image/webp']
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/sitemap');
    }

    return config;
  }
}
