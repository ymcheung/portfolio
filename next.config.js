const { i18n } = require('./next-i18next.config');

module.exports = {
  async redirects() {
    return [
      {
        source: '/zh-Hant-TW/:path*',
        destination: '/zh-TW/:path*',
        permanent: true
      }
    ];
  },
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
};
