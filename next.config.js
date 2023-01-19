// const isDev = process.env.NODE_ENV === 'development' || !process.env.NODE_ENV

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

module.exports = withBundleAnalyzer({
  images: {
    domains: ['pbs.twimg.com'],
    loader: 'akamai',
    path: '',
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
})
