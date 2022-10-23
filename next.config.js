const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  future: {
    webpack5: true,
  },
  env: {
    NEXT_PUBLIC_SPACE_ID: process.env.TU_SPACE_ID,
    NEXT_PUBLIC_ACCESS_TOKEN: process.env.TU_ACCESS_TOKEN,
  },
}

module.exports = withBundleAnalyzer(config)
