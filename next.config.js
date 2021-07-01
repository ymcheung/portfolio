const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  webpack: (config, { isServer }) => {
    if (isServer) {
      require('./utils/sitemap');
    }

    return config;
  },
  async rewrites() {
    return [
	    {
	      source: "/bee.js",
	      destination: "https://cdn.splitbee.io/sb.js",
	    },
	    {
	      source: "/:slug",
	      destination: `${process.env.NEXT_PUBLIC_HOSTNAME}/:slug`,
	    },
	    {
	      source: "/",
	      destination: "/",
	    }
	  ];
  }
}
