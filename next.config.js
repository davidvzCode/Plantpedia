const TU_SPACE_ID = 'l5jy9ww4zd0d'
const TU_ACCESS_TOKEN = 'owyFA4P1KdP7olr9eHcuVSLI3Nq7kz2ZhAa7o-iI4mA'

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const config = {
  future: {
    webpack5: true,
  },
  env: {
    NEXT_PUBLIC_SPACE_ID: TU_SPACE_ID,
    NEXT_PUBLIC_ACCESS_TOKEN: TU_ACCESS_TOKEN,
  },
}

module.exports = withBundleAnalyzer(config)
